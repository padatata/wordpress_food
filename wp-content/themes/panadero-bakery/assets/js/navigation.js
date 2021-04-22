/* global panadero_bakeryScreenReaderText */
/**
 * Theme functions file.
 *
 * Contains handlers for navigation and widget area.
 */

jQuery(function($){
 	"use strict";
   	jQuery('.main-menu-navigation > ul').superfish({
		delay:       500,
		animation:   {opacity:'show',height:'show'},  
		speed:       'fast'
   });
});

function panadero_bakery_open() {
	window.panadero_bakery_mobileMenu=true;
	jQuery(".sidenav").addClass('show');
}
function panadero_bakery_close() {
	window.panadero_bakery_mobileMenu=false;
	jQuery(".sidenav").removeClass('show');
}

window.panadero_bakery_currentfocus=null;
panadero_bakery_checkfocusdElement();
var panadero_bakery_body = document.querySelector('body');
panadero_bakery_body.addEventListener('keyup', panadero_bakery_check_tab_press);
var panadero_bakery_gotoHome = false;
var panadero_bakery_gotoClose = false;
window.panadero_bakery_mobileMenu=false;
function panadero_bakery_checkfocusdElement(){
 	if(window.panadero_bakery_currentfocus=document.activeElement.className){
	 	window.panadero_bakery_currentfocus=document.activeElement.className;
 	}
}
function panadero_bakery_check_tab_press(e) {
	"use strict";
	// pick passed event or global event object if passed one is empty
	e = e || event;
	var activeElement;

	if(window.innerWidth < 999){
		if (e.keyCode == 9) {
			if(window.panadero_bakery_mobileMenu){
				if (!e.shiftKey) {
					if(panadero_bakery_gotoHome) {
						jQuery( ".main-menu-navigation ul:first li:first a:first-child" ).focus();
					}
				}
				if (jQuery("a.closebtn.responsive-menu").is(":focus")) {
					panadero_bakery_gotoHome = true;
				} else {
					panadero_bakery_gotoHome = false;
				}
			}else{
				if(window.panadero_bakery_currentfocus=="mobiletoggle"){
					jQuery( "" ).focus();
				}
			}
		}
	}
	if (e.shiftKey && e.keyCode == 9) {
		if(window.innerWidth < 999){
			if(window.panadero_bakery_currentfocus=="header-search"){
				jQuery(".mobiletoggle").focus();
			}else{
				if(window.panadero_bakery_mobileMenu){
					if(panadero_bakery_gotoClose){
						jQuery("a.closebtn.responsive-menu").focus();
					}
					if (jQuery( ".main-menu-navigation ul:first li:first a:first-child" ).is(":focus")) {
						panadero_bakery_gotoClose = true;
					} else {
						panadero_bakery_gotoClose = false;
					}
				
				}else{
					if(window.panadero_bakery_mobileMenu){
					}
				}
			}
		}
	}
 	panadero_bakery_checkfocusdElement();
}