SONY_PS_DIR := /sony/usr/sony/share/contentshare

sub0 := html
sub1 := js
sub2 := images
sub3 := css
sub4 := language
PS_PARTS_SUBS := $(sub1) $(sub2) $(sub3) $(sub4)

#
# MACRO for INSTALL
#
define INSTALL_TO
install-src-list-y += $(current)/$(1)/*->$(2)/->owner@500.500->mode@0444
endef

#
# INSTALL
#

$(foreach SUB,$(PS_PARTS_SUBS),$(eval $(call INSTALL_TO,$(SUB),$(SONY_PS_DIR)/$(SUB))))
$(eval $(call INSTALL_TO,$(sub0),$(SONY_PS_DIR)))
