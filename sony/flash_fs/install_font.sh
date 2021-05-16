#!/bin/sh

echo "# Copying flash font to /tmp/fonts (start)"
mkdir -p /tmp/fonts
cp -Rp /3rd/sony/flash_fs/*.ttf /3rd/sony/flash_fs/*.TTF /tmp/fonts
echo "# Copying flash font to /tmp/fonts (end)"
