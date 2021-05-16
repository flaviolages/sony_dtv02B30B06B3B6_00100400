#-----------------------------------------------------------------------------
# Copyright (c) 2009, MediaTek Inc.
# All rights reserved.
#
# Unauthorized use, practice, perform, copy, distribution, reproduction,
# or disclosure of this information in whole or in part is prohibited.
#-----------------------------------------------------------------------------
# $RCSfile:  $
# $Revision:
# $Date:
# $Author:  $
# $CCRevision:  $
# $SWAuthor:  $
# $MD5HEX:  $
#
# Description:
#        A set of files describing the framebuffer interface and core types.
#---------------------------------------------------------------------------*/

all:
ifeq "$(WIFI_SUPPLICANT_PATH)" "basic"
	@mkdir -p $(OSS_OUTPUT)/basic/bin/wpa_supplicant/ralink/
	cp -a ralink/*		$(OSS_OUTPUT)/basic/bin/wpa_supplicant/ralink/
	cp -a ./*		$(OSS_OUTPUT)/basic/bin/wpa_supplicant/
else 
	@mkdir -p $(OSS_OUTPUT)/3rd/bin/wpa_supplicant/ralink/
	cp -a ralink/*		$(OSS_OUTPUT)/3rd/bin/wpa_supplicant/ralink/
	cp -a ./*		$(OSS_OUTPUT)/3rd/bin/wpa_supplicant/
endif
clean:
ifeq "$(WIFI_SUPPLICANT_PATH)" "basic"
	rm -rf $(OSS_OUTPUT)/basic/bin/wpa_supplicant/ralink/*
	rm -rf $(OSS_OUTPUT)/basic/bin/wpa_supplicant/*
else
	rm -rf $(OSS_OUTPUT)/3rd/bin/wpa_supplicant/ralink/*
	rm -rf $(OSS_OUTPUT)/3rd/bin/wpa_supplicant/*
endif
