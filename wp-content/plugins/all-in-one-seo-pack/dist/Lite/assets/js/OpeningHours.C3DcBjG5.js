import{i as T,u as k,e as U}from"./index.ByF2aI-G.js";import{G as A,H as C}from"./constants.DfsCWbZk.js";import{B}from"./Checkbox.BAIONgTE.js";import{B as F}from"./RadioToggle.Cv8la4G_.js";import{C as V}from"./Blur.D3p3Plqi.js";import{C as M}from"./SettingsRow.Ch1FEDlp.js";import"./translations.Ur07Kmot.js";import{_ as z}from"./_plugin-vue_export-helper.BN1snXvA.js";import{_ as n,a as L}from"./default-i18n.DvLqo3S3.js";import{v as u,o as m,c as b,C as e,l as i,a as o,x as l,t,u as d,k as O,b as S}from"./runtime-dom.esm-bundler.DKw-RQqs.js";import{R as G}from"./RequiredPlans.Cd-RNSMK.js";import{C as N}from"./Card.Bqq4cvaT.js";import{C as P}from"./ProBadge.BJ3spTo5.js";import{C as I}from"./Index.BQLC1nYH.js";import{C as q}from"./Cta.B3vFs82N.js";import{u as E}from"./AddonConditions.DhxW9qZc.js";import"./helpers.yjC6K_2A.js";import"./Checkmark.BedAg8BV.js";import"./Row.D0941SYu.js";import"./addons.C_QAj7aO.js";import"./upperFirst.BjBqmCj-.js";import"./_stringToArray.DnK4tKcY.js";import"./toString.Dc7QMRQR.js";import"./license.4E_gI5OR.js";import"./Caret.DMa7g0j7.js";import"./Tooltip.B0brI66q.js";import"./index.Olu2afa7.js";import"./Slide.CdVEnD7S.js";const c="all-in-one-seo-pack",D={components:{BaseCheckbox:B,BaseRadioToggle:F,CoreBlur:V,CoreSettingsRow:M},data(){return{GLOBAL_STRINGS:A,HOURS_24H_FORMAT:C,strings:{showOpeningHours:n("Show Opening Hours",c),displayOpeningHours:n("Display Opening Hours",c),labels:n("Labels",c),open247:n("Open 24/7",c),use24hFormat:n("Use 24h format",c),timezone:n("Timezone",c),selectTimeZone:n("Select your timezone:",c),hours:n("Opening Hours",c),monday:n("Monday",c),tuesday:n("Tuesday",c),wednesday:n("Wednesday",c),thursday:n("Thursday",c),friday:n("Friday",c),saturday:n("Saturday",c),sunday:n("Sunday",c),open24h:n("Open 24h",c),closed:n("Closed",c)}}}},K={class:"aioseo-opening-hours-blur"},W={class:"aioseo-col col-xs-12 text-xs-left"},Z={class:"aioseo-col col-xs-12 text-xs-left"},j={class:"aioseo-col col-xs-12 text-xs-left mt-16"},J={class:"aioseo-col col-xs-12 text-xs-left"},Q={class:"aioseo-col-flex text-xs-left"},X={class:"aioseo-col-day text-xs-left"},Y={class:"aioseo-col-hours text-xs-left"},$=o("span",{class:"separator"},"-",-1),ss={class:"aioseo-col-alwaysopen text-xs-left"},os={class:"aioseo-col-flex text-xs-left"},es={class:"aioseo-col-day text-xs-left"},ts={class:"aioseo-col-hours text-xs-left"},ns=o("span",{class:"separator"},"-",-1),is={class:"aioseo-col-alwaysopen text-xs-left"},ls={class:"aioseo-col-flex text-xs-left"},cs={class:"aioseo-col-day text-xs-left"},as={class:"aioseo-col-hours text-xs-left"},rs=o("span",{class:"separator"},"-",-1),us={class:"aioseo-col-alwaysopen text-xs-left"},_s={class:"aioseo-col-flex text-xs-left"},ds={class:"aioseo-col-day text-xs-left"},ps={class:"aioseo-col-hours text-xs-left"},ms=o("span",{class:"separator"},"-",-1),fs={class:"aioseo-col-alwaysopen text-xs-left"},hs={class:"aioseo-col-flex text-xs-left"},xs={class:"aioseo-col-day text-xs-left"},gs={class:"aioseo-col-hours text-xs-left"},ys=o("span",{class:"separator"},"-",-1),Hs={class:"aioseo-col-alwaysopen text-xs-left"},Os={class:"aioseo-col-flex text-xs-left"},Ss={class:"aioseo-col-day text-xs-left"},bs={class:"aioseo-col-hours text-xs-left"},vs=o("span",{class:"separator"},"-",-1),Rs={class:"aioseo-col-alwaysopen text-xs-left"},zs={class:"aioseo-col-flex text-xs-left"},ws={class:"aioseo-col-day text-xs-left"},Ts={class:"aioseo-col-hours text-xs-left"},ks=o("span",{class:"separator"},"-",-1),Us={class:"aioseo-col-alwaysopen text-xs-left"};function As(v,g,y,_,s,H){const f=u("base-radio-toggle"),h=u("core-settings-row"),x=u("base-toggle"),a=u("base-select"),r=u("base-checkbox"),w=u("core-blur");return m(),b("div",K,[e(w,null,{default:i(()=>[e(h,{name:s.strings.showOpeningHours,class:"info-openinghours-row",align:""},{content:i(()=>[o("div",W,[e(f,{name:"openingHours",modelValue:!0,options:[{label:s.GLOBAL_STRINGS.no,value:!1},{label:s.GLOBAL_STRINGS.yes,value:!0}]},null,8,["options"])])]),_:1},8,["name"]),e(h,{name:s.strings.hours,class:"info-hours-row",align:""},{content:i(()=>[o("div",Z,[e(x,null,{default:i(()=>[l(t(s.strings.open247),1)]),_:1})]),o("div",j,[e(x,null,{default:i(()=>[l(t(s.strings.use24hFormat),1)]),_:1})]),o("div",J,[o("div",Q,[o("div",X,t(s.strings.monday),1),o("div",Y,[e(a,{size:"medium",options:s.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),$,e(a,{size:"medium",options:s.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),o("div",ss,[e(r,{size:"medium"},{default:i(()=>[l(t(s.strings.open24h),1)]),_:1}),e(r,{size:"medium",class:"closed-label"},{default:i(()=>[l(t(s.strings.closed),1)]),_:1})])]),o("div",os,[o("div",es,t(s.strings.tuesday),1),o("div",ts,[e(a,{size:"medium",options:s.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),ns,e(a,{size:"medium",options:s.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),o("div",is,[e(r,{size:"medium"},{default:i(()=>[l(t(s.strings.open24h),1)]),_:1}),e(r,{size:"medium",class:"closed-label"},{default:i(()=>[l(t(s.strings.closed),1)]),_:1})])]),o("div",ls,[o("div",cs,t(s.strings.wednesday),1),o("div",as,[e(a,{size:"medium",options:s.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),rs,e(a,{size:"medium",options:s.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),o("div",us,[e(r,{size:"medium"},{default:i(()=>[l(t(s.strings.open24h),1)]),_:1}),e(r,{size:"medium",class:"closed-label"},{default:i(()=>[l(t(s.strings.closed),1)]),_:1})])]),o("div",_s,[o("div",ds,t(s.strings.thursday),1),o("div",ps,[e(a,{size:"medium",options:s.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),ms,e(a,{size:"medium",options:s.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),o("div",fs,[e(r,{size:"medium"},{default:i(()=>[l(t(s.strings.open24h),1)]),_:1}),e(r,{size:"medium",class:"closed-label"},{default:i(()=>[l(t(s.strings.closed),1)]),_:1})])]),o("div",hs,[o("div",xs,t(s.strings.friday),1),o("div",gs,[e(a,{size:"medium",options:s.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),ys,e(a,{size:"medium",options:s.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),o("div",Hs,[e(r,{size:"medium"},{default:i(()=>[l(t(s.strings.open24h),1)]),_:1}),e(r,{size:"medium",class:"closed-label"},{default:i(()=>[l(t(s.strings.closed),1)]),_:1})])]),o("div",Os,[o("div",Ss,t(s.strings.saturday),1),o("div",bs,[e(a,{size:"medium",options:s.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),vs,e(a,{size:"medium",options:s.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),o("div",Rs,[e(r,{size:"medium"},{default:i(()=>[l(t(s.strings.open24h),1)]),_:1}),e(r,{size:"medium",class:"closed-label"},{default:i(()=>[l(t(s.strings.closed),1)]),_:1})])]),o("div",zs,[o("div",ws,t(s.strings.sunday),1),o("div",Ts,[e(a,{size:"medium",options:s.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),ks,e(a,{size:"medium",options:s.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),o("div",Us,[e(r,{size:"medium"},{default:i(()=>[l(t(s.strings.open24h),1)]),_:1}),e(r,{size:"medium",class:"closed-label"},{default:i(()=>[l(t(s.strings.closed),1)]),_:1})])])])]),_:1},8,["name"])]),_:1})])}const Cs=z(D,[["render",As]]),p="all-in-one-seo-pack",Bs={setup(){return{licenseStore:T(),rootStore:k(),links:U}},components:{Blur:Cs,RequiredPlans:G,CoreCard:N,CoreProBadge:P,Cta:I},data(){return{features:[n("Show Opening Hours",p),n("Multiple Locations",p),n("Opening Hours block, widget and shortcode",p)],strings:{locationInfo1:n("Local Business schema markup informs Google about your business details like name, address, phone number, hours, and price range, which can appear in a Knowledge Graph card or business carousel.",p),openingHours:n("Opening Hours Settings",p),ctaButtonText:n("Unlock Local SEO",p),ctaHeader:L(n("Local SEO is a %1$s Feature",p),"PRO")}}}},Fs={class:"aioseo-opening-hours"};function Vs(v,g,y,_,s,H){const f=u("core-pro-badge"),h=u("blur"),x=u("required-plans"),a=u("cta"),r=u("core-card");return m(),b("div",Fs,[e(r,{slug:"localBusinessOpeningHours",noSlide:!0},{header:i(()=>[o("span",null,t(s.strings.openingHours),1),e(f)]),default:i(()=>[e(h),e(a,{"cta-link":_.links.getPricingUrl("local-seo","local-seo-upsell","opening-hours"),"button-text":s.strings.ctaButtonText,"learn-more-link":_.links.getUpsellUrl("local-seo",null,_.rootStore.isPro?"pricing":"liteUpgrade"),"feature-list":s.features,"align-top":"","hide-bonus":!_.licenseStore.isUnlicensed},{"header-text":i(()=>[l(t(s.strings.ctaHeader),1)]),description:i(()=>[e(x,{addon:"aioseo-local-business"}),l(" "+t(s.strings.locationInfo1),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list","hide-bonus"])]),_:1})])}const R=z(Bs,[["render",Vs]]),Ms={class:"aioseo-opening-hours"},_o={__name:"OpeningHours",setup(v){const g="all-in-one-seo-pack",{shouldShowActivate:y,shouldShowLite:_,shouldShowMain:s,shouldShowUpdate:H}=E({addonSlug:"aioseo-local-business"}),f={openingHours:n("Opening Hours Settings",g)};return(h,x)=>(m(),b("div",Ms,[d(s)?(m(),O(d(R),{key:0})):S("",!0),d(H)||d(y)?(m(),O(d(q),{key:1,"card-slug":"localBusinessOpeningHours","header-text":f.openingHours},null,8,["header-text"])):S("",!0),d(_)?(m(),O(d(R),{key:2})):S("",!0)]))}};export{_o as default};