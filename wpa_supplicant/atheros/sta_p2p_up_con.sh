insmod /basic/modules/usbcore.ko
insmod /basic/modules/mtk_hcd.ko
sleep 5
./p2pload
./p2pdev.start_con
sleep 3
./wpa_cli -i wlan1 p2p_group_add
