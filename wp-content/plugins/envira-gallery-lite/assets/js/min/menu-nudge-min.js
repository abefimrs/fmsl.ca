(()=>{var a={311:e=>{"use strict";e.exports=jQuery}},n={};function r(e){var t=n[e];return void 0!==t||(t=n[e]={exports:{}},a[e](t,t.exports,r)),t.exports}var t,e,i;i=r(311),i=(t=i)(document.getElementById("envira-admin-menu-tooltip")),t(document.getElementById("adminmenuwrap")),0!==(e=t(document.querySelector(".menu-icon-envira"))).length&&(e.length&&e.append(i),i.css({top:-1*i.innerHeight()/2+"px"}),t("#envira-admin-menu-launch-tooltip-button").click(function(e){e.preventDefault(),t("#envira-admin-menu-tooltip").hide(),t.ajax({url:ajaxurl,type:"POST",data:{action:"envira_redirect_to_add_new_gallery"},success:function(e){var t;e.success?((t=new URL(e.data.redirect_url)).searchParams.append("hideTooltip","true"),window.location.href=t.toString()):console.error("Error:",e.data)},error:function(e,t,a){console.error("AJAX request failed:",t,a)}})}),t(".envira-admin-menu-tooltip-close").on("click",function(e){e.preventDefault(),t(this).parent().parent().hide(),t.ajax({url:ajaxurl,type:"POST",data:{action:"envira_hide_admin_menu_tooltip"}})}),"true"!==(e=new URLSearchParams(window.location.search)).get("hideTooltip")&&"envira"!==e.get("post_type")||(t("#envira-admin-menu-tooltip").hide(),t(".menu-icon-envira .wp-submenu-wrap").css("display","block")),"envira"===e.get("post_type")&&"envira-gallery-settings"===e.get("page")||"envira"===e.get("post_type")&&"envira-gallery-addons"===e.get("page")||"envira"===e.get("post_type")&&"envira-gallery-get-started"===e.get("page")||"envira"===e.get("post_type")&&"envira-gallery-tools"===e.get("page")||"envira"===e.get("post_type")&&"envira-gallery-lite-about-us"===e.get("page"))&&t("#envira-admin-menu-tooltip").show()})();