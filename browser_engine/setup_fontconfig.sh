#!/bin/sh
#
# This script helps generate a fonts.conf for the fonts
# shipped with the SDK. It also makes sure that the cache
# used by fontconfig is up to date. In short this script
# does the following things:
# 1. Make a copy of the fonts.conf template
# 2. Append a font directory and a cache directory to the copy
# 3. Run fc-cache to prime the cache
#
# This is needed since the directories specified in fonts.conf
# needs to be absolute paths, and it is not possible to
# pre-generate a cache for the fonts unless the absolute path
# on the target system is known.
#
script_dir="${0%/*}"
cd "${script_dir:-/}"

# Trust that everything is setup correctly and that the cache
# is up to date if a custom fontconfig configuration is specified.
# See http://www.fontconfig.org for documentation about this
# environment variable.
if [ -n "$FONTCONFIG_FILE" ]
then
	exit 0
fi

# File used as a template for fonts.conf
template="$PWD/opera_dir/Fontconfig/fonts.conf.template"
# Where to put the generated fonts.conf
destination_dir="/3rd_rw/internet_browser/opera_home/Fontconfig"
destination_file="$destination_dir/fonts.conf"

# The directory that contains the fonts shipped with the SDK
font_dir="/3rd/internet_browser/fonts"

# Where Fontconfig should store its cache
cache_dir="$destination_dir/cache"


# Check if there is a fc-cache binary in the package
# otherwise attempt to use the one on the system.
fc_cache=`ls utils/fontconfig-*/bin/fc-cache 2> /dev/null`
if [ $? -eq 0 ]
then
	LD_LIBRARY_PATH=$PWD/lib:$LD_LIBRARY_PATH
	export LD_LIBRARY_PATH
	fc_cache="./$fc_cache"
else
	fc_cache=fc-cache
fi

# Detect errors from now on
set -e

# fonts.conf already exist so no need generate it again.
if [ ! -e $destination_file ]; then
	mkdir -p $destination_dir
	cp $template $destination_file

	# Add the font and cache directories to the generated file
	sed -i 's|OPERA_FONT_DIR|'$font_dir'|g' $destination_file
	sed -i 's|OPERA_FONT_CACHE_DIR|'$cache_dir'|g' $destination_file
fi

# Make sure the cache is up to date.
# (FONTCONFIG_FILE tells fontconfig what config file to use)
FONTCONFIG_FILE=$destination_file
export FONTCONFIG_FILE

# Uncomment these lines to tell fc-cache to print all fonts that
# are being scanned when priming the cache.
# See http://www.fontconfig.org for full documentation of the
# possible values to set here.
#FC_DEBUG=128
#export FC_DEBUG

echo "$0: Please wait while Fontconfig updates its cache..."

/3rd/browser_engine/utils/fontconfig-2.10.2/bin/fc-cache

echo "$0: The cache is up to date."

