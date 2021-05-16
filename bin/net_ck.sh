#!/bin/sh

#print colors
if $SHELL --version | grep 'GNU bash' 2>&1 >/dev/null; then
bold='\e[1m'
red='\e[0;31m'
green='\e[0;32m'
yellow='\e[1;33m'
NC='\e[0m'
else
bold=''
red=''
green=''
yellow=''
NC=''
fi

#define timeouts
#in second
dnstimeout=10
conntimeout=10
totaltimeout=40	#for http get, doesn't support long time action

#define paths
net_ck_conf="/3rd/bin/net_ck.conf"
if [ -f /tmp/net_ck.conf ]; then
	net_ck_conf="/tmp/net_ck.conf"
fi
http_get_log="/tmp/net_check_wget"

#network tools
wget="/3rd/bin/wget"
tcpconnect="/3rd/bin/tcpconnect"
nslookup2="/3rd/bin/nslookup2"

dev_status() {
	isup=`ifconfig $netif | grep '\<UP\> '`
	if [ "$isup" != "" ]; then
		echo -e "Device ${bold}$netif${NC} Enabled? ${green}PASS${NC}"
	else
		echo -e "Device ${bold}$netif${NC} Enabled? ${red}FAIL${NC}"
		return 1
	fi
	isrunning=`ifconfig $netif | grep '\<RUNNING\> '`
	if [ "$isrunning" != "" ]; then
		echo -e "Cable/Dev Plugin? ${green}PASS${NC}"
	else
		echo -e "Cable/Dev Plugin? ${red}FAIL${NC}"
		return 1
	fi
	return 0
}

dev_mac() {
	mac=`ifconfig $netif | awk '/HWaddr/ {print $5}'`
	if [ "$mac" != "00:0c:e7:06:00:00" -a "$mac" != "00:0C:E7:06:00:00" ]; then
		echo -e "Valid MAC Address? ${green}PASS${NC} ($mac)"
	else
		echo -e "Valid MAC Address? ${red}WARN${NC} (use default: ${red}$mac${NC})"
		return 1
	fi
	return 0
}

dev_ip() {
	ip=`ifconfig $netif | awk '/inet addr:/ {print $2}' | awk -F ':'  '{print $2}'`
	if [ -z "$ip" ]; then
		echo -e "Valid IP Address? ${red}FAIL${NC} (No IP)"
		return 1
	elif [ "${ip:0:8}" == "169.254." ]; then
		echo -e "Valid IP Address? ${red}FAIL${NC} (AutoIP: ${red}$ip${NC})"
		return 1
	else
		echo -e "Valid IP Address? ${green}PASS${NC} ($ip)"
	fi
	return 0
}

# doesn't check multi-default route, bacuase of no "wc" cmd
default_route() {
	rt=`route -n | grep '^0.0.0.0 ' | awk '{print $2}'`
	if [ -z "$rt" ]; then
		echo -e "Valid Default Route? ${red}FAIL${NC} (No Default Route)"
		return 1
	else
		if [ -x /bin/wc ] || [ -x /sbin/wc ] || [ -x /usr/bin/wc ]; then
			rc=`route -n | grep '^0.0.0.0 ' | wc -l`
			if [ "$rc" != "1" ]; then
				#warning
				echo -e "Valid Default Route? ${yellow}WARN${NC} (Multi Default Route)"
			fi
		fi
		echo -e "Valid Default Route? ${green}PASS${NC} ($rt)"
	fi
	return 0
}

dns_file() {
	dns=`grep '^nameserver ' /etc/resolv.conf | awk '{print $2}'`
	if [ -z "$dns" ]; then
		echo -e "Valid DNS Config? ${red}FAIL${NC} (No Records)"
		return 1
	else
		idx=0
		d1=''
		d2=''
		for d in $dns; do
			idx=$(($idx+1))
			if [ $idx == 1 ]; then d1=$d; fi
			if [ $idx == 2 ]; then
				d2=$d
				break;
			fi
		done
		echo -e "Valid DNS Config? ${green}PASS${NC} ($d1, $d2)"
	fi
	return 0
}

#${PIPESTATUS[0]}
dns_nslookup() {
	count=0
	sc=0
	for host in `awk -F ':' '/^host:/ {print $2}' $net_ck_conf`; do
		count=$(($count+1))
		$nslookup2 $host >/dev/null 2>&1
		if [ $? == 0 ]; then
			all_addrs=`$nslookup2 $host 2>/dev/null | awk '/^Address: / {print $2}'`
			idx=0
			a1=''
			a2=''
			for a in $all_addrs; do
				idx=$(($idx+1))
				if [ $idx == 1 ]; then
					a1=$a
				fi
				if [ $idx == 2 ]; then
					a2=$a
					break;
				fi
			done
			sc=$(($sc+1))
			if [ -z $a2 ]; then
				echo -e "resolving ${bold}$host${NC}? ${green}PASS${NC} ($a1)"
			else
				echo -e "resolving ${bold}$host${NC}? ${green}PASS${NC} ($a1, $a2, ...)"
			fi
		else
			echo -e "resolving ${bold}$host${NC}? ${yellow}WARN${NC}"
		fi
	done
	if [ $count -eq 0 ]; then
		echo -e "Valid DNS Resolving? ${yellow}WARN${NC} (${yellow}ignore${NC})"
		return 0
	fi
	if [ $sc == 0 ]; then
		echo -e "Valid DNS Resolving? ${red}FAIL${NC}"
	else
		echo -e "Valid DNS Resolving? ${green}PASS${NC}"
	fi
}

#in fact, http connect
tcp_connect() {
	count=0
	sc=0
	pre="http://"
	for url in `awk -F ':' '/^http_conn:/ {print $2}' $net_ck_conf`; do
		count=$(($count+1))
		$tcpconnect $pre$url >/dev/null 2>&1
		if [ $? == 0 ]; then
			sc=$(($sc+1))
			echo -e "connect ${bold}$pre$url${NC}? ${green}PASS${NC}"
		else
			echo -e "connect ${bold}$pre$url${NC}? ${yellow}WARN${NC}"
		fi
	done
	if [ $count -eq 0 ]; then
		echo -e "Valid HTTP connect? ${yellow}WARN${NC} (${yellow}ignore${NC})"
		return 0
	fi
	if [ $sc == 0 ]; then
		echo -e "Valid HTTP connect? ${red}FAIL${NC}"
	else
		echo -e "Valid HTTP connect? ${green}PASS${NC}"
	fi
}

#http & https "GET" method with argument: "http_get" or "https_get"
#uses wget-1.10.2, it is GPLv2 license. we can use it.
http_get() {
	count=0
	sc=0
	filter=$1
	pre="http://"
	if [ "$filter" == "https_get" ]; then pre="https://"; fi
	#for url in `grep "^${filter}:" $net_ck_conf | awk -F ':' "{print \\$2}"`; do
	for url in `awk -F ':' "/^$filter:/ {print \\$2}" $net_ck_conf`; do
		count=$(($count+1))
		$wget --dns-timeout=$dnstimeout --connect-timeout=$conntimeout --timeout=$totaltimeout --no-check-certificate -O /dev/null $pre$url >$http_get_log 2>&1
		if [ $? == 0 ]; then
			sc=$(($sc+1))
			speed=`grep '^[0-9]*:[0-9]*:[0-9]* ' $http_get_log | sed 's/.*(\([^)]*\)).*\[\(.*\)\]/\2, \1/'`
			echo -e "$filter ${bold}$pre$url${NC}? ${green}PASS${NC} ($speed)"
		else
			echo -e "$filter ${bold}$pre$url${NC}? ${yellow}WARN${NC}"
		fi
	done
	if [ $count -eq 0 ]; then
		if [ "$filter" == "http_get" ]; then
			echo -e "$filter is valid? ${yellow}WARN${NC} (${yellow}ignore${NC})"
		fi
		return 0
	fi
	if [ $sc == 0 ]; then
		echo -e "$filter is valid? ${red}FAIL${NC}"
	else
		echo -e "$filter is valid? ${green}PASS${NC}"
	fi
}

#
#echo -e "-- $# -- $*"
#

netif="eth0"

if [ ! -z "$1" ]; then
	netif=$1
fi

echo "All Ethernet Devices: "
for x in `ifconfig -a | grep 'Link encap:Ethernet' | awk '{print $1}'`; do
	echo -e "    ${bold}$x${NC}"
done

#device status
dev_status
if [ "$?" != "0" ]; then
	#echo -e 'device status check is NG'
	exit 1
fi

#check MAC addrress
dev_mac
#if [ "$?" != "0" ]; then
	#doesn't check MAC 
	#echo -e 'device MAC addr check is NG'
	#exit 1
#fi

#check IP address
dev_ip
if [ "$?" != "0" ]; then
	#echo -e 'IP is invalid'
	exit 1
fi

#check default route (table)
default_route
if [ "$?" != "0" ]; then
	#echo -e 'default route is invalid'
	exit 1
fi

#check /etc/resolv.conf
dns_file
if [ "$?" != "0" ]; then
	exit 1
fi

if [ ! -f $net_ck_conf ]; then
	echo "No config file $net_ck_conf, please check."
	echo "network basic status seems O.K."
	exit 0
fi

#dns resolving test
if [ -x $nslookup2 ]; then
	dns_nslookup
	if [ "$?" != "0" ]; then
		exit 1
	fi
else
	echo "No $nslookup2, please check."
fi

#http connect test
if [ -x $tcpconnect ]; then
	tcp_connect
	if [ "$?" != "0" ]; then
		exit 1
	fi
else
	echo "No $tcpconnect, please check."
fi

if [ ! -x $wget ]; then
	echo "No $wget, please check."
	echo "HTTP/HTTPS test can't go on"
	exit 0
fi

#http get/down
http_get http_get
if [ "$?" != "0" ]; then
	exit 1
fi

#https get/down, doesn't care https fail
http_get https_get
#if [ "$?" != "0" ]; then
	#exit 1
#fi

echo '== Internet seems O.K. =='

