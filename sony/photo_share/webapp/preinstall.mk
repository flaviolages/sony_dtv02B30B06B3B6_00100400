ifneq ($(DTBUILD_PUBLISH),)

FIXED_PS_DIR := fixed/usr/sony/share/contentshare
SONY_PS_DIR := sony/usr/sony/share/contentshare
ROOTFS_DIR := $(output_dir)/integ/$(DTBUILD_PUBLISH)/rootfs
SONY_PS_ABS_DIR := $(join $(shell pwd),/$(ROOTFS_DIR)/$(SONY_PS_DIR))

sub0 := .
sub1 := js
sub2 := images
sub3 := css
sub4 := language
PS_ALL_SUBS := $(sub1) $(sub2) $(sub3) $(sub4) $(sub0)

#
# MACRO PREINSTALL
#
define PREINSTALL_TO_SUBS
doitthere := $(shell sudo mkdir -p $(ROOTFS_DIR)/$(SONY_PS_DIR)/$(1);\
                          cd $(ROOTFS_DIR)/$(FIXED_PS_DIR)/$(1);\
                          for i in *;\
                             do if test ! -e $(SONY_PS_ABS_DIR)/$(1)/$$i;\
                             then sudo ln -fs /$(FIXED_PS_DIR)/$(1)/$$i $(SONY_PS_ABS_DIR)/$(1);\
                             fi;\
                          done\
                          )
endef

$(foreach SUB,$(PS_ALL_SUBS),$(eval $(call PREINSTALL_TO_SUBS,$(SUB))))

endif # ifneq ($(DTBUILD_PUBLISH),)
