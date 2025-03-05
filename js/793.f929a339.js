"use strict";(self["webpackChunksanyue_imghub"]=self["webpackChunksanyue_imghub"]||[]).push([[793],{4318:function(){},3496:function(e,t,a){a.d(t,{A:function(){return v}});var s=a(6768),l=a(4232);const n={id:"themeMask"},i=["cx","cy","r"],o=["r"],d=["opacity"];function r(e,t,a,r,c,u){return(0,s.uX)(),(0,s.CE)("div",{id:"themeToggle",onClick:t[0]||(t[0]=(...e)=>u.handleToggleClick&&u.handleToggleClick(...e))},[((0,s.uX)(),(0,s.CE)("svg",{class:(0,l.C4)(["theme_toggle_svg",{dark:c.isDark}]),width:"1.3em",height:"1.3em",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",stroke:"currentColor"},[(0,s.Lk)("mask",n,[t[1]||(t[1]=(0,s.Lk)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"white"},null,-1)),(0,s.Lk)("circle",{class:"theme_toggle_circle1",fill:"black",cx:c.isDark?"50%":"100%",cy:c.isDark?"23%":"0%",r:c.isDark?"9":"5"},null,8,i)]),(0,s.Lk)("circle",{class:"theme_toggle_circle2",cx:"12",cy:"12",r:c.isDark?"9":"5",mask:"url(#themeMask)"},null,8,o),(0,s.Lk)("g",{class:"theme_toggle_g",stroke:"currentColor",opacity:c.isDark?0:1},t[2]||(t[2]=[(0,s.Fv)('<line x1="12" y1="1" x2="12" y2="3" data-v-4c88bff4></line><line x1="12" y1="21" x2="12" y2="23" data-v-4c88bff4></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-4c88bff4></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-4c88bff4></line><line x1="1" y1="12" x2="3" y2="12" data-v-4c88bff4></line><line x1="21" y1="12" x2="23" y2="12" data-v-4c88bff4></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-4c88bff4></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-4c88bff4></line>',8)]),8,d)],2))])}var c={name:"ToggleDark",data(){return{isDark:this.$store.getters.useDarkMode}},methods:{handleToggleClick(){this.isDark=!this.isDark,this.$store.commit("setUseDarkMode",this.isDark),this.$store.commit("setCusDarkMode",!0)}}},u=a(1241);const h=(0,u.A)(c,[["render",r],["__scopeId","data-v-4c88bff4"]]);var m=h,p=a(9017);a(5331),a(6055),a(8830),a(3597);const g={class:"tabs"},b={class:"tabs-dropdown-link"};function f(e,t,a,n,i,o){const d=(0,s.g2)("font-awesome-icon"),r=p.c6,c=p.Iy,u=p.dW,h=m;return(0,s.uX)(),(0,s.CE)("div",g,[(0,s.Lk)("span",{class:"title",onClick:t[0]||(t[0]=(...e)=>o.refreshDashboard&&o.refreshDashboard(...e))},[(0,s.bF)(d,{icon:o.iconName,class:"fa-images"},null,8,["icon"]),(0,s.eW)(" "+(0,l.v_)(o.titleName),1)]),(0,s.bF)(u,{onCommand:o.handleTabClick,class:"tabs-dropdown",role:"navigation",onVisibleChange:o.handleDropdownVisible,"popper-class":"tabs-dropdown-popper"},{dropdown:(0,s.k6)((()=>[(0,s.bF)(c,null,{default:(0,s.k6)((()=>["dashboard"!==a.activeTab?((0,s.uX)(),(0,s.Wv)(r,{key:0,command:"dashboard"},{default:(0,s.k6)((()=>[(0,s.bF)(d,{icon:"images",style:{"margin-right":"5px"}}),t[1]||(t[1]=(0,s.eW)(" Gallery "))])),_:1})):(0,s.Q3)("",!0),"customerConfig"!==a.activeTab?((0,s.uX)(),(0,s.Wv)(r,{key:1,command:"customerConfig"},{default:(0,s.k6)((()=>[(0,s.bF)(d,{icon:"user-cog",style:{"margin-right":"5px"}}),t[2]||(t[2]=(0,s.eW)(" 用户管理 "))])),_:1})):(0,s.Q3)("",!0),"systemConfig"!==a.activeTab?((0,s.uX)(),(0,s.Wv)(r,{key:2,command:"systemConfig"},{default:(0,s.k6)((()=>[(0,s.bF)(d,{icon:"cogs",style:{"margin-right":"5px"}}),t[3]||(t[3]=(0,s.eW)(" 系统设置 "))])),_:1})):(0,s.Q3)("",!0),(0,s.bF)(r,{command:""},{default:(0,s.k6)((()=>[(0,s.bF)(d,{icon:"upload",style:{"margin-right":"5px"}}),t[4]||(t[4]=(0,s.eW)(" 上传页面 "))])),_:1})])),_:1})])),default:(0,s.k6)((()=>[(0,s.Lk)("span",b,[(0,s.bF)(d,{icon:"bars",class:"tabs-arrow"})])])),_:1},8,["onCommand","onVisibleChange"]),(0,s.bF)(h)])}a(4114);var k={name:"DashboardTabs",props:{activeTab:{type:String,default:"dashboard"}},components:{AdminToggleDark:m},computed:{titleName(){return"dashboard"===this.activeTab?"Gallery":"customerConfig"===this.activeTab?"用户管理":"systemConfig"===this.activeTab?"系统设置":"上传页面"},iconName(){return"dashboard"===this.activeTab?"images":"customerConfig"===this.activeTab?"user-cog":"systemConfig"===this.activeTab?"cogs":"upload"}},methods:{refreshDashboard(){location.reload()},handleTabClick(e){this.$router.push(`/${e}`)},handleDropdownVisible(e){const t=document.querySelector(".tabs-dropdown-link");e?t.classList.add("rotate-up"):t.classList.remove("rotate-up")}}};const w=(0,u.A)(k,[["render",f],["__scopeId","data-v-0de0fc64"]]);var v=w},5793:function(e,t,a){a.r(t),a.d(t,{default:function(){return me}});var s=a(4182),l=(a(5331),a(213),a(6768));const n={class:"sidebar-container"};function i(e,t,a,i,o,d){const r=(0,l.g2)("font-awesome-icon"),c=s.ct,u=s.lj;return(0,l.uX)(),(0,l.CE)("div",n,[(0,l.bF)(u,{"default-active":a.activeIndex,class:"el-menu-vertical",collapse:o.isCollapse,onSelect:d.handleSelect},{default:(0,l.k6)((()=>[(0,l.bF)(c,{index:"upload",class:"menu-item"},{default:(0,l.k6)((()=>[(0,l.bF)(r,{icon:"cloud-upload"}),t[1]||(t[1]=(0,l.Lk)("span",{slot:"title"},"上传设置",-1))])),_:1}),(0,l.bF)(c,{index:"security",class:"menu-item"},{default:(0,l.k6)((()=>[(0,l.bF)(r,{icon:"shield"}),t[2]||(t[2]=(0,l.Lk)("span",{slot:"title"},"安全设置",-1))])),_:1}),(0,l.bF)(c,{index:"page",class:"menu-item"},{default:(0,l.k6)((()=>[(0,l.bF)(r,{icon:"pager"}),t[3]||(t[3]=(0,l.Lk)("span",{slot:"title"},"页面设置",-1))])),_:1}),(0,l.bF)(c,{index:"others",class:"menu-item"},{default:(0,l.k6)((()=>[(0,l.bF)(r,{icon:"cog"}),t[4]||(t[4]=(0,l.Lk)("span",{slot:"title"},"其他设置",-1))])),_:1})])),_:1},8,["default-active","collapse","onSelect"]),(0,l.Lk)("div",{class:"toggle-button",onClick:t[0]||(t[0]=(...e)=>d.toggleCollapse&&d.toggleCollapse(...e))},[(0,l.bF)(r,{icon:o.isCollapse?"angle-double-right":"angle-double-left"},null,8,["icon"])])])}var o={name:"SysConfigTabs",props:{activeIndex:{type:String,default:"upload"},isCollapse:{type:Boolean,default:!1}},data(){return{isCollapse:!1}},methods:{toggleCollapse(){this.isCollapse=!this.isCollapse,this.$emit("update:isCollapse",this.isCollapse)},checkMobile(){const e=window.innerWidth<=768;this.isCollapse=e,this.$emit("update:isCollapse",this.isCollapse)},handleSelect(e){this.$emit("update:activeIndex",e)}},mounted(){this.checkMobile(),window.addEventListener("resize",this.checkMobile)},beforeDestroy(){window.removeEventListener("resize",this.checkMobile)}},d=a(1241);const r=(0,d.A)(o,[["render",i],["__scopeId","data-v-05e08982"]]);var c=r,u=a(4880),h=(a(7128),a(1450)),m=a(3496),p=a(4232);const g={class:"container"},b={class:"header-content"},f={class:"header-action"};function k(e,t,a,s,n,i){const o=m.A,d=(0,l.g2)("font-awesome-icon"),r=h.R7,k=u.bZ,w=c;return(0,l.uX)(),(0,l.CE)("div",g,[(0,l.bF)(k,null,{default:(0,l.k6)((()=>[(0,l.Lk)("div",b,[(0,l.bF)(o,{activeTab:"systemConfig"}),(0,l.Lk)("div",f,[(0,l.bF)(r,{disabled:i.disableTooltip,content:"退出登录",placement:"bottom"},{default:(0,l.k6)((()=>[(0,l.bF)(d,{icon:"sign-out-alt",class:"header-icon",onClick:i.handleLogout},null,8,["onClick"])])),_:1},8,["disabled"])])])])),_:1}),(0,l.bF)(w,{activeIndex:n.activeIndex,"onUpdate:activeIndex":t[0]||(t[0]=e=>n.activeIndex=e),isCollapse:n.isSidebarCollapse,"onUpdate:isCollapse":t[1]||(t[1]=e=>n.isSidebarCollapse=e)},null,8,["activeIndex","isCollapse"]),((0,l.uX)(),(0,l.Wv)((0,l.$y)(i.currentComponent),{class:(0,p.C4)(["main-container",{collapsed:n.isSidebarCollapse}])},null,8,["class"]))])}a(4114);var w=a(782),v=a(9114),y=(a(694),a(47)),C=(a(9648),a(2105)),F=(a(9092),a(2006)),_=(a(8642),a(3003),a(5558)),S=(a(456),a(6810));a(4396),a(4885);const V={class:"upload-settings"},x={class:"upload-channel"},U={class:"channel-settings"},A={class:"second-title"},P={key:0},I={key:1},L={key:2},T={class:"actions"};function W(e,t,a,s,n,i){const o=S.ll,d=S.MQ,r=(0,l.g2)("font-awesome-icon"),c=h.R7,u=_.qi,m=F.xE,g=F.US,b=C.WK,f=y.S2,k=v.L;return(0,l.bo)(((0,l.uX)(),(0,l.CE)("div",V,[(0,l.Lk)("div",x,[t[3]||(t[3]=(0,l.Lk)("h3",{class:"first-title"},"上传渠道",-1)),(0,l.bF)(d,{modelValue:n.activeChannel,"onUpdate:modelValue":t[0]||(t[0]=e=>n.activeChannel=e)},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(n.channels,(e=>((0,l.uX)(),(0,l.Wv)(o,{key:e.value,label:e.value},{default:(0,l.k6)((()=>[(0,l.eW)((0,p.v_)(e.label),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])]),(0,l.Lk)("div",U,[(0,l.Lk)("h4",A,[(0,l.eW)((0,p.v_)(i.activeChannelLabel)+" 设置 ",1),"telegram"===n.activeChannel?((0,l.uX)(),(0,l.Wv)(c,{key:0,content:"为保证兼容性，v2版本前设置的 Telegram 相关环境变量请保留",placement:"right"},{default:(0,l.k6)((()=>[(0,l.bF)(r,{icon:"question-circle",style:{"margin-left":"5px",cursor:"pointer"}})])),_:1})):(0,l.Q3)("",!0)]),"telegram"===n.activeChannel?((0,l.uX)(),(0,l.CE)("div",P,[(0,l.bF)(g,{model:n.telegramSettings,"label-width":"120px",class:"channel-form"},{default:(0,l.k6)((()=>[(0,l.bF)(m,{label:"负载均衡"},{default:(0,l.k6)((()=>[(0,l.bF)(u,{modelValue:n.telegramSettings.loadBalance.enabled,"onUpdate:modelValue":t[1]||(t[1]=e=>n.telegramSettings.loadBalance.enabled=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model"]),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(n.telegramSettings.channels,((e,t)=>((0,l.uX)(),(0,l.Wv)(g,{key:t,model:e,"label-width":"120px",rules:n.tgRules,ref_for:!0,ref:"tgChannelForm",class:"channel-form"},{default:(0,l.k6)((()=>[(0,l.bF)(m,{label:"渠道名",prop:"name"},{default:(0,l.k6)((()=>[(0,l.bF)(b,{modelValue:e.name,"onUpdate:modelValue":t=>e.name=t,disabled:e.fixed},null,8,["modelValue","onUpdate:modelValue","disabled"])])),_:2},1024),(0,l.bF)(m,{label:"启用渠道",prop:"enabled"},{default:(0,l.k6)((()=>[(0,l.bF)(u,{modelValue:e.enabled,"onUpdate:modelValue":t=>e.enabled=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,l.bF)(m,{label:"Bot Token",prop:"botToken"},{default:(0,l.k6)((()=>[(0,l.bF)(b,{modelValue:e.botToken,"onUpdate:modelValue":t=>e.botToken=t,disabled:e.fixed,type:"password","show-password":"",autocomplete:"new-password"},null,8,["modelValue","onUpdate:modelValue","disabled"])])),_:2},1024),(0,l.bF)(m,{label:"Chat ID",prop:"chatId"},{default:(0,l.k6)((()=>[(0,l.bF)(b,{modelValue:e.chatId,"onUpdate:modelValue":t=>e.chatId=t,disabled:e.fixed,type:"password","show-password":"",autocomplete:"new-password"},null,8,["modelValue","onUpdate:modelValue","disabled"])])),_:2},1024),(0,l.bF)(m,null,{default:(0,l.k6)((()=>[(0,l.bF)(f,{type:"danger",onClick:e=>i.deleteChannel(t),size:"small",disabled:e.fixed},{default:(0,l.k6)((()=>[(0,l.bF)(r,{icon:"trash-alt"})])),_:2},1032,["onClick","disabled"])])),_:2},1024)])),_:2},1032,["model","rules"])))),128))])):(0,l.Q3)("",!0),"cfr2"===n.activeChannel?((0,l.uX)(),(0,l.CE)("div",I,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(n.cfr2Settings.channels,((e,a)=>((0,l.uX)(),(0,l.Wv)(g,{model:e,"label-width":"120px",class:"channel-form"},{default:(0,l.k6)((()=>[(0,l.bF)(m,{label:"渠道名"},{default:(0,l.k6)((()=>[(0,l.bF)(b,{modelValue:e.name,"onUpdate:modelValue":t=>e.name=t,disabled:e.fixed},null,8,["modelValue","onUpdate:modelValue","disabled"])])),_:2},1024),(0,l.bF)(m,{label:"启用渠道"},{default:(0,l.k6)((()=>[(0,l.bF)(u,{modelValue:e.enabled,"onUpdate:modelValue":t=>e.enabled=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,l.bF)(m,null,{label:(0,l.k6)((()=>[t[4]||(t[4]=(0,l.eW)(" 公开访问链接 ")),(0,l.bF)(c,{content:"若启用图像审查，请设置该项",placement:"top"},{default:(0,l.k6)((()=>[(0,l.bF)(r,{icon:"question-circle",style:{"margin-left":"5px",cursor:"pointer"}})])),_:1})])),default:(0,l.k6)((()=>[(0,l.bF)(b,{modelValue:e.publicUrl,"onUpdate:modelValue":t=>e.publicUrl=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1032,["model"])))),256))])):(0,l.Q3)("",!0),"s3"===n.activeChannel?((0,l.uX)(),(0,l.CE)("div",L,[(0,l.bF)(g,{model:n.s3Settings,"label-width":"120px",class:"channel-form"},{default:(0,l.k6)((()=>[(0,l.bF)(m,{label:"负载均衡"},{default:(0,l.k6)((()=>[(0,l.bF)(u,{modelValue:n.s3Settings.loadBalance.enabled,"onUpdate:modelValue":t[2]||(t[2]=e=>n.s3Settings.loadBalance.enabled=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model"]),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(n.s3Settings.channels,((e,a)=>((0,l.uX)(),(0,l.Wv)(g,{model:e,"label-width":"120px",rules:n.s3Rules,ref_for:!0,ref:"s3ChannelForm",class:"channel-form"},{default:(0,l.k6)((()=>[(0,l.bF)(m,{label:"渠道名",prop:"name"},{default:(0,l.k6)((()=>[(0,l.bF)(b,{modelValue:e.name,"onUpdate:modelValue":t=>e.name=t,disabled:e.fixed},null,8,["modelValue","onUpdate:modelValue","disabled"])])),_:2},1024),(0,l.bF)(m,{label:"启用渠道",prop:"enabled"},{default:(0,l.k6)((()=>[(0,l.bF)(u,{modelValue:e.enabled,"onUpdate:modelValue":t=>e.enabled=t},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,l.bF)(m,{prop:"endpoint"},{label:(0,l.k6)((()=>[t[5]||(t[5]=(0,l.eW)(" Endpoint ")),(0,l.bF)(c,{content:"服务提供商 Endpoint，例如 https://s3.us-east-005.backblazeb2.com",placement:"top"},{default:(0,l.k6)((()=>[(0,l.bF)(r,{icon:"question-circle",style:{"margin-left":"5px",cursor:"pointer"}})])),_:1})])),default:(0,l.k6)((()=>[(0,l.bF)(b,{modelValue:e.endpoint,"onUpdate:modelValue":t=>e.endpoint=t,disabled:e.fixed},null,8,["modelValue","onUpdate:modelValue","disabled"])])),_:2},1024),(0,l.bF)(m,{label:"存储桶名称",prop:"bucketName"},{default:(0,l.k6)((()=>[(0,l.bF)(b,{modelValue:e.bucketName,"onUpdate:modelValue":t=>e.bucketName=t,disabled:e.fixed},null,8,["modelValue","onUpdate:modelValue","disabled"])])),_:2},1024),(0,l.bF)(m,{prop:"region"},{label:(0,l.k6)((()=>[t[6]||(t[6]=(0,l.eW)(" 存储桶区域 ")),(0,l.bF)(c,{content:"默认填写 auto 即可",placement:"top"},{default:(0,l.k6)((()=>[(0,l.bF)(r,{icon:"question-circle",style:{"margin-left":"5px",cursor:"pointer"}})])),_:1})])),default:(0,l.k6)((()=>[(0,l.bF)(b,{modelValue:e.region,"onUpdate:modelValue":t=>e.region=t,placeholder:"auto",disabled:e.fixed},null,8,["modelValue","onUpdate:modelValue","disabled"])])),_:2},1024),(0,l.bF)(m,{label:"访问密钥 ID",prop:"accessKeyId"},{default:(0,l.k6)((()=>[(0,l.bF)(b,{modelValue:e.accessKeyId,"onUpdate:modelValue":t=>e.accessKeyId=t,disabled:e.fixed,type:"password","show-password":"",autocomplete:"new-password"},null,8,["modelValue","onUpdate:modelValue","disabled"])])),_:2},1024),(0,l.bF)(m,{label:"机密访问密钥",prop:"secretAccessKey"},{default:(0,l.k6)((()=>[(0,l.bF)(b,{modelValue:e.secretAccessKey,"onUpdate:modelValue":t=>e.secretAccessKey=t,disabled:e.fixed,type:"password","show-password":"",autocomplete:"new-password"},null,8,["modelValue","onUpdate:modelValue","disabled"])])),_:2},1024),(0,l.bF)(m,null,{default:(0,l.k6)((()=>[(0,l.bF)(f,{type:"danger",onClick:e=>i.deleteChannel(a),size:"small",disabled:e.fixed},{default:(0,l.k6)((()=>[(0,l.bF)(r,{icon:"trash-alt"})])),_:2},1032,["onClick","disabled"])])),_:2},1024)])),_:2},1032,["model","rules"])))),256))])):(0,l.Q3)("",!0)]),(0,l.Lk)("div",T,[(0,l.bF)(f,{type:"primary",onClick:i.addChannel},{default:(0,l.k6)((()=>[(0,l.bF)(r,{icon:"plus"})])),_:1},8,["onClick"]),(0,l.bF)(f,{type:"primary",onClick:i.saveSettings},{default:(0,l.k6)((()=>t[7]||(t[7]=[(0,l.eW)("保存设置")]))),_:1},8,["onClick"])])])),[[k,n.loading]])}var E={data(){return{channels:[{value:"telegram",label:"Telegram"},{value:"cfr2",label:"CloudFlareR2"},{value:"s3",label:"S3"}],activeChannel:"telegram",telegramSettings:{loadBalance:{},channels:[]},tgRules:{name:[{required:!0,message:"请输入渠道名",trigger:"blur"},{validator:(e,t,a)=>{const s=this.telegramSettings.channels.map((e=>e.name));if(s.filter((e=>e===t)).length>1)a(new Error("渠道名不能重复"));else if("Telegram_env"===t){const e=this.telegramSettings.channels.find((e=>e.name===t)).savePath;"environment variable"!==e?a(new Error("渠道名不能为保留值")):a()}else a()},trigger:"blur"}],botToken:[{required:!0,message:"请输入 Bot Token",trigger:"blur"}],chatId:[{required:!0,message:"请输入 Chat ID",trigger:"blur"}]},cfr2Settings:{channels:[]},s3Settings:{loadBalance:{},channels:[]},s3Rules:{name:[{required:!0,message:"请输入渠道名",trigger:"blur"},{validator:(e,t,a)=>{const s=this.s3Settings.channels.map((e=>e.name));if(s.filter((e=>e===t)).length>1)a(new Error("渠道名不能重复"));else if("S3_env"===t){const e=this.s3Settings.channels.find((e=>e.name===t)).savePath;"environment variable"!==e?a(new Error("渠道名不能为保留值")):a()}else a()},trigger:"blur"}],endpoint:[{required:!0,message:"请输入 Endpoint",trigger:"blur"}],bucketName:[{required:!0,message:"请输入存储桶名称",trigger:"blur"}],region:[{required:!0,message:"请输入存储桶区域",trigger:"blur"}],accessKeyId:[{required:!0,message:"请输入访问密钥 ID",trigger:"blur"}],secretAccessKey:[{required:!0,message:"请输入机密访问密钥",trigger:"blur"}]},loading:!1}},computed:{...(0,w.L8)(["credentials"]),activeChannelLabel(){const e=this.channels.find((e=>e.value===this.activeChannel));return e?e.label:""}},methods:{async fetchWithAuth(e,t={}){this.credentials&&(t.headers={...t.headers,Authorization:`Basic ${this.credentials}`},t.credentials="include");const a=await fetch(e,t);if(401===a.status)throw this.$message.error("认证状态错误，请重新登录"),this.$router.push("/adminLogin"),new Error("Unauthorized");return a},addChannel(){switch(this.activeChannel){case"telegram":this.telegramSettings.channels.push({id:this.telegramSettings.channels.length+1,name:"",type:"telegram",savePath:"database",botToken:"",chatId:"",enabled:!0,fixed:!1});break;case"cfr2":this.$message.error("暂不支持增加 R2渠道 配置");break;case"s3":this.s3Settings.channels.push({id:this.s3Settings.channels.length+1,name:"",type:"s3",savePath:"database",accessKeyId:"",secretAccessKey:"",region:"",bucketName:"",endpoint:"",enabled:!0,fixed:!1});break}},deleteChannel(e){switch(this.activeChannel){case"telegram":this.telegramSettings.channels.forEach(((t,a)=>{a>e&&(t.id-=1)})),this.telegramSettings.channels.splice(e,1);break;case"cfr2":this.cfr2Settings.channels.forEach(((t,a)=>{a>e&&(t.id-=1)})),this.cfr2Settings.channels.splice(e,1);break;case"s3":this.s3Settings.channels.forEach(((t,a)=>{a>e&&(t.id-=1)})),this.s3Settings.channels.splice(e,1);break}},saveSettings(){let e=[];this.$refs.tgChannelForm&&this.$refs.tgChannelForm.forEach((t=>{e.push(new Promise((e=>{t.validate((t=>e(t)))})))})),this.$refs.s3ChannelForm&&this.$refs.s3ChannelForm.forEach((t=>{e.push(new Promise((e=>{t.validate((t=>e(t)))})))})),Promise.all(e).then((e=>{const t=e.every((e=>e));if(!t)return;const a={telegram:this.telegramSettings,cfr2:this.cfr2Settings,s3:this.s3Settings};this.fetchWithAuth("/api/manage/sysConfig/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((()=>{this.$message.success("设置已保存")}))}))}},mounted(){this.loading=!0,this.fetchWithAuth("/api/manage/sysConfig/upload").then((e=>e.json())).then((e=>{this.telegramSettings=e.telegram,this.cfr2Settings=e.cfr2,this.s3Settings=e.s3})).finally((()=>{this.loading=!1}))}};const $=(0,d.A)(E,[["render",W],["__scopeId","data-v-fb2e255c"]]);var D=$;const X={class:"security-settings"},N={class:"first-settings"},K={class:"first-settings"},q={class:"second-title"},z={class:"first-settings"},B={class:"actions"};function R(e,t,a,s,n,i){const o=C.WK,d=F.xE,r=F.US,c=(0,l.g2)("font-awesome-icon"),u=h.R7,m=_.qi,p=y.S2,g=v.L;return(0,l.bo)(((0,l.uX)(),(0,l.CE)("div",X,[(0,l.Lk)("div",N,[t[9]||(t[9]=(0,l.Lk)("h3",{class:"first-title"},"认证管理",-1)),t[10]||(t[10]=(0,l.Lk)("h4",{class:"second-title"},"用户端认证",-1)),(0,l.bF)(r,{model:n.authSettings.user,rules:n.userPassRules,ref:"userPassForm","label-width":"120px"},{default:(0,l.k6)((()=>[(0,l.bF)(d,{label:"上传密码",prop:"authCode"},{default:(0,l.k6)((()=>[(0,l.bF)(o,{modelValue:n.authSettings.user.authCode,"onUpdate:modelValue":t[0]||(t[0]=e=>n.authSettings.user.authCode=e),type:"password","show-password":"",onInput:i.handleUserPassInput,autocomplete:"new-password"},null,8,["modelValue","onInput"])])),_:1}),n.showUserPassConfirm?((0,l.uX)(),(0,l.Wv)(d,{key:0,label:"确认密码",prop:"confirmNewUserPassword"},{default:(0,l.k6)((()=>[(0,l.bF)(o,{modelValue:n.authSettings.user.confirmNewUserPassword,"onUpdate:modelValue":t[1]||(t[1]=e=>n.authSettings.user.confirmNewUserPassword=e),type:"password","show-password":"",autocomplete:"new-password"},null,8,["modelValue"])])),_:1})):(0,l.Q3)("",!0)])),_:1},8,["model","rules"]),t[11]||(t[11]=(0,l.Lk)("h4",{class:"second-title"},"管理端认证",-1)),(0,l.bF)(r,{model:n.authSettings.admin,rules:n.adminPassRules,ref:"adminPassForm","label-width":"120px"},{default:(0,l.k6)((()=>[(0,l.bF)(d,{label:"用户名",prop:"adminUsername"},{default:(0,l.k6)((()=>[(0,l.bF)(o,{modelValue:n.authSettings.admin.adminUsername,"onUpdate:modelValue":t[2]||(t[2]=e=>n.authSettings.admin.adminUsername=e),autocomplete:"new-password"},null,8,["modelValue"])])),_:1}),(0,l.bF)(d,{label:"密码",prop:"adminPassword"},{default:(0,l.k6)((()=>[(0,l.bF)(o,{modelValue:n.authSettings.admin.adminPassword,"onUpdate:modelValue":t[3]||(t[3]=e=>n.authSettings.admin.adminPassword=e),type:"password","show-password":"",onInput:i.handleAdminPassInput,autocomplete:"new-password"},null,8,["modelValue","onInput"])])),_:1}),n.showAdminPassConfirm?((0,l.uX)(),(0,l.Wv)(d,{key:0,label:"确认密码",prop:"confirmNewAdminPassword"},{default:(0,l.k6)((()=>[(0,l.bF)(o,{modelValue:n.authSettings.admin.confirmNewAdminPassword,"onUpdate:modelValue":t[4]||(t[4]=e=>n.authSettings.admin.confirmNewAdminPassword=e),type:"password","show-password":"",autocomplete:"new-password"},null,8,["modelValue"])])),_:1})):(0,l.Q3)("",!0)])),_:1},8,["model","rules"])]),(0,l.Lk)("div",K,[t[13]||(t[13]=(0,l.Lk)("h3",{class:"first-title"},"上传管理",-1)),(0,l.Lk)("h4",q,[t[12]||(t[12]=(0,l.eW)("图像审查 ")),(0,l.bF)(u,{content:"目前仅支持 moderatecontent.com 渠道",placement:"top"},{default:(0,l.k6)((()=>[(0,l.bF)(c,{icon:"question-circle",style:{"margin-left":"5px",cursor:"pointer"}})])),_:1})]),(0,l.bF)(r,{model:n.uploadSettings.moderate,"label-width":"120px"},{default:(0,l.k6)((()=>[(0,l.bF)(d,{label:"审查渠道"},{default:(0,l.k6)((()=>[(0,l.bF)(o,{modelValue:n.uploadSettings.moderate.channel,"onUpdate:modelValue":t[5]||(t[5]=e=>n.uploadSettings.moderate.channel=e)},null,8,["modelValue"])])),_:1}),(0,l.bF)(d,{label:"API Key"},{default:(0,l.k6)((()=>[(0,l.bF)(o,{modelValue:n.uploadSettings.moderate.apiKey,"onUpdate:modelValue":t[6]||(t[6]=e=>n.uploadSettings.moderate.apiKey=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])]),(0,l.Lk)("div",z,[t[16]||(t[16]=(0,l.Lk)("h3",{class:"first-title"},"访问管理",-1)),t[17]||(t[17]=(0,l.Lk)("h4",{class:"second-title"},"域名过滤",-1)),(0,l.bF)(r,{model:n.accessSettings,"label-width":"120px"},{default:(0,l.k6)((()=>[(0,l.bF)(d,null,{label:(0,l.k6)((()=>[t[14]||(t[14]=(0,l.eW)(" 放行域名 ")),(0,l.bF)(u,{content:"留空默认全部放行，多个域名请用英文逗号分隔",placement:"top"},{default:(0,l.k6)((()=>[(0,l.bF)(c,{icon:"question-circle",style:{"margin-left":"5px",cursor:"pointer"}})])),_:1})])),default:(0,l.k6)((()=>[(0,l.bF)(o,{modelValue:n.accessSettings.allowedDomains,"onUpdate:modelValue":t[7]||(t[7]=e=>n.accessSettings.allowedDomains=e)},null,8,["modelValue"])])),_:1}),(0,l.bF)(d,null,{label:(0,l.k6)((()=>[t[15]||(t[15]=(0,l.eW)(" 白名单模式 ")),(0,l.bF)(u,{content:"开启后，仅白名单文件可被访问",placement:"top"},{default:(0,l.k6)((()=>[(0,l.bF)(c,{icon:"question-circle",style:{"margin-left":"5px",cursor:"pointer"}})])),_:1})])),default:(0,l.k6)((()=>[(0,l.bF)(m,{modelValue:n.accessSettings.whiteListMode,"onUpdate:modelValue":t[8]||(t[8]=e=>n.accessSettings.whiteListMode=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])]),(0,l.Lk)("div",B,[(0,l.bF)(p,{type:"primary",onClick:i.saveSettings},{default:(0,l.k6)((()=>t[18]||(t[18]=[(0,l.eW)("保存设置")]))),_:1},8,["onClick"])])])),[[g,n.loading]])}var M={data(){return{authSettings:{user:{},admin:{}},uploadSettings:{moderate:{}},accessSettings:{},loading:!1,oriUserPassword:"",oriAdminPassword:"",showUserPassConfirm:!1,showAdminPassConfirm:!1,userPassRules:{confirmNewUserPassword:[{message:"请再次输入上传密码",trigger:"blur"},{validator:(e,t,a)=>{t!==this.authSettings.user.authCode?a(new Error("两次输入密码不一致")):a()},trigger:"blur"}]},adminPassRules:{confirmNewAdminPassword:[{message:"请再次输入管理密码",trigger:"blur"},{validator:(e,t,a)=>{t!==this.authSettings.admin.adminPassword?a(new Error("两次输入密码不一致")):a()},trigger:"blur"}]}}},computed:{...(0,w.L8)(["credentials"])},methods:{async fetchWithAuth(e,t={}){this.credentials&&(t.headers={...t.headers,Authorization:`Basic ${this.credentials}`},t.credentials="include");const a=await fetch(e,t);if(401===a.status)throw this.$message.error("认证状态错误，请重新登录"),this.$router.push("/adminLogin"),new Error("Unauthorized");return a},handleUserPassInput(){this.authSettings.user.authCode!==this.oriUserPassword?this.showUserPassConfirm=!0:this.showUserPassConfirm=!1},handleAdminPassInput(){this.authSettings.admin.adminPassword!==this.oriAdminPassword?this.showAdminPassConfirm=!0:this.showAdminPassConfirm=!1},saveSettings(){let e=[];e.push(new Promise((e=>{this.$refs.userPassForm.validate((t=>{e(t)}))}))),e.push(new Promise((e=>{this.$refs.adminPassForm.validate((t=>{e(t)}))}))),Promise.all(e).then((e=>{const t=e.every((e=>e));if(!t)return;const a={auth:this.authSettings,upload:this.uploadSettings,access:this.accessSettings};delete a.auth.user.confirmNewUserPassword,delete a.auth.admin.confirmNewAdminPassword,this.fetchWithAuth("/api/manage/sysConfig/security",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((()=>{this.$message.success("设置已保存")}))}))}},mounted(){this.loading=!0,this.fetchWithAuth("/api/manage/sysConfig/security").then((e=>e.json())).then((e=>{this.authSettings=e.auth,this.uploadSettings=e.upload,this.accessSettings=e.access,this.oriUserPassword=this.authSettings.user.authCode,this.oriAdminPassword=this.authSettings.admin.adminPassword,this.authSettings.user.confirmNewUserPassword="",this.authSettings.admin.confirmNewAdminPassword=""})).finally((()=>{this.loading=!1}))}};const O=(0,d.A)(M,[["render",R],["__scopeId","data-v-5e18bcea"]]);var Q=O;const j={class:"page-settings"},J={class:"first-settings"},Z={class:"actions"};function G(e,t,a,s,n,i){const o=(0,l.g2)("font-awesome-icon"),d=h.R7,r=C.WK,c=F.xE,u=F.US,m=y.S2,g=v.L;return(0,l.bo)(((0,l.uX)(),(0,l.CE)("div",j,[(0,l.Lk)("div",J,[t[0]||(t[0]=(0,l.Lk)("h3",{class:"first-title"},"页面设置",-1)),(0,l.bF)(u,{model:n.settings,"label-width":"120px"},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(n.settings.config,((e,t)=>((0,l.uX)(),(0,l.Wv)(c,{key:t},{label:(0,l.k6)((()=>[(0,l.eW)((0,p.v_)(e.label)+" ",1),e.tooltip?((0,l.uX)(),(0,l.Wv)(d,{key:0,content:e.tooltip,placement:"top","raw-content":""},{default:(0,l.k6)((()=>[(0,l.bF)(o,{icon:"question-circle",style:{"margin-left":"5px",cursor:"pointer"}})])),_:2},1032,["content"])):(0,l.Q3)("",!0)])),default:(0,l.k6)((()=>[(0,l.bF)(r,{modelValue:e.value,"onUpdate:modelValue":t=>e.value=t,disabled:e.fixed,placeholder:e.placeholder},null,8,["modelValue","onUpdate:modelValue","disabled","placeholder"])])),_:2},1024)))),128))])),_:1},8,["model"])]),(0,l.Lk)("div",Z,[(0,l.bF)(m,{type:"primary",onClick:i.saveSettings},{default:(0,l.k6)((()=>t[1]||(t[1]=[(0,l.eW)("保存设置")]))),_:1},8,["onClick"])])])),[[g,n.loading]])}var H={data(){return{settings:{config:[]},loading:!1}},computed:{...(0,w.L8)(["credentials"])},methods:{async fetchWithAuth(e,t={}){this.credentials&&(t.headers={...t.headers,Authorization:`Basic ${this.credentials}`},t.credentials="include");const a=await fetch(e,t);if(401===a.status)throw this.$message.error("认证状态错误，请重新登录"),this.$router.push("/adminLogin"),new Error("Unauthorized");return a},saveSettings(){this.fetchWithAuth("/api/manage/sysConfig/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.settings)}).then((()=>this.$message.success("设置已保存")))}},mounted(){this.loading=!0,this.fetchWithAuth("/api/manage/sysConfig/page").then((e=>e.json())).then((e=>{this.settings=e})).finally((()=>{this.loading=!1}))}};const Y=(0,d.A)(H,[["render",G],["__scopeId","data-v-2af3c96d"]]);var ee=Y;const te={class:"others-settings"},ae={class:"first-settings"},se={class:"second-title"},le={class:"second-title"},ne={class:"second-title"},ie={class:"actions"};function oe(e,t,a,s,n,i){const o=(0,l.g2)("font-awesome-icon"),d=h.R7,r=_.qi,c=F.xE,u=F.US,m=C.WK,p=y.S2,g=v.L;return(0,l.bo)(((0,l.uX)(),(0,l.CE)("div",te,[(0,l.Lk)("div",ae,[t[8]||(t[8]=(0,l.Lk)("h3",{class:"first-title"},"其他设置",-1)),(0,l.Lk)("h4",se,[t[5]||(t[5]=(0,l.eW)("远端遥测 ")),(0,l.bF)(d,{content:"便于问题查找和定位，建议开启",placement:"right"},{default:(0,l.k6)((()=>[(0,l.bF)(o,{icon:"question-circle",style:{"margin-left":"5px",cursor:"pointer"}})])),_:1})]),(0,l.bF)(u,{model:n.settings.telemetry,"label-width":"120px"},{default:(0,l.k6)((()=>[(0,l.bF)(c,{label:"启用"},{default:(0,l.k6)((()=>[(0,l.bF)(r,{modelValue:n.settings.telemetry.enabled,"onUpdate:modelValue":t[0]||(t[0]=e=>n.settings.telemetry.enabled=e),disabled:n.settings.telemetry.fixed},null,8,["modelValue","disabled"])])),_:1})])),_:1},8,["model"]),(0,l.Lk)("h4",le,[t[6]||(t[6]=(0,l.eW)("随机图像API ")),(0,l.bF)(d,{content:"API具体用法请查阅文档",placement:"right"},{default:(0,l.k6)((()=>[(0,l.bF)(o,{icon:"question-circle",style:{"margin-left":"5px",cursor:"pointer"}})])),_:1})]),(0,l.bF)(u,{model:n.settings.randomImageAPI,"label-width":"120px"},{default:(0,l.k6)((()=>[(0,l.bF)(c,{label:"启用"},{default:(0,l.k6)((()=>[(0,l.bF)(r,{modelValue:n.settings.randomImageAPI.enabled,"onUpdate:modelValue":t[1]||(t[1]=e=>n.settings.randomImageAPI.enabled=e),disabled:n.settings.randomImageAPI.fixed},null,8,["modelValue","disabled"])])),_:1})])),_:1},8,["model"]),(0,l.Lk)("h4",ne,[t[7]||(t[7]=(0,l.eW)("CloudFlare API Token ")),(0,l.bF)(d,{content:"设置后可以使后端拉黑、删除等操作不受CDN缓存限制 <br/> 建议设置,设置方式请查阅文档",placement:"right","raw-content":""},{default:(0,l.k6)((()=>[(0,l.bF)(o,{icon:"question-circle",style:{"margin-left":"5px",cursor:"pointer"}})])),_:1})]),(0,l.bF)(u,{model:n.settings.cloudflareApiToken,"label-width":"120px"},{default:(0,l.k6)((()=>[(0,l.bF)(c,{label:"区域ID"},{default:(0,l.k6)((()=>[(0,l.bF)(m,{modelValue:n.settings.cloudflareApiToken.CF_ZONE_ID,"onUpdate:modelValue":t[2]||(t[2]=e=>n.settings.cloudflareApiToken.CF_ZONE_ID=e),disabled:n.settings.cloudflareApiToken.fixed},null,8,["modelValue","disabled"])])),_:1}),(0,l.bF)(c,{label:"账户邮箱"},{default:(0,l.k6)((()=>[(0,l.bF)(m,{modelValue:n.settings.cloudflareApiToken.CF_EMAIL,"onUpdate:modelValue":t[3]||(t[3]=e=>n.settings.cloudflareApiToken.CF_EMAIL=e),disabled:n.settings.cloudflareApiToken.fixed},null,8,["modelValue","disabled"])])),_:1}),(0,l.bF)(c,{label:"API Key"},{default:(0,l.k6)((()=>[(0,l.bF)(m,{modelValue:n.settings.cloudflareApiToken.CF_API_KEY,"onUpdate:modelValue":t[4]||(t[4]=e=>n.settings.cloudflareApiToken.CF_API_KEY=e),disabled:n.settings.cloudflareApiToken.fixed,type:"password","show-password":"",autocomplete:"new-password"},null,8,["modelValue","disabled"])])),_:1})])),_:1},8,["model"])]),(0,l.Lk)("div",ie,[(0,l.bF)(p,{type:"primary",onClick:i.saveSettings},{default:(0,l.k6)((()=>t[9]||(t[9]=[(0,l.eW)("保存设置")]))),_:1},8,["onClick"])])])),[[g,n.loading]])}var de={data(){return{settings:{telemetry:{},randomImageAPI:{},cloudflareApiToken:{}},loading:!1}},computed:{...(0,w.L8)(["credentials"])},methods:{async fetchWithAuth(e,t={}){this.credentials&&(t.headers={...t.headers,Authorization:`Basic ${this.credentials}`},t.credentials="include");const a=await fetch(e,t);if(401===a.status)throw this.$message.error("认证状态错误，请重新登录"),this.$router.push("/adminLogin"),new Error("Unauthorized");return a},saveSettings(){this.fetchWithAuth("/api/manage/sysConfig/others",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.settings)}).then((()=>this.$message.success("设置已保存")))}},mounted(){this.loading=!0,this.fetchWithAuth("/api/manage/sysConfig/others").then((e=>e.json())).then((e=>{this.settings=e})).finally((()=>{this.loading=!1}))}};const re=(0,d.A)(de,[["render",oe],["__scopeId","data-v-7432e0c2"]]);var ce=re,ue={name:"SystemConfig",data(){return{activeIndex:"upload",isSidebarCollapse:!1}},watch:{"$route.hash":{immediate:!0,handler(e){this.activeIndex=e.replace("#",""),window.scrollTo(0,0)}},activeIndex(e){const t=`#${e}`;this.$router.push({hash:t})}},components:{DashboardTabs:m.A,SysConfigTabs:c,SysCogUpload:D,SysCogSecurity:Q,SysCogPage:ee,SysCogOthers:ce},computed:{...(0,w.L8)(["credentials"]),disableTooltip(){return window.innerWidth<768},currentComponent(){const e=this.$route.hash.replace("#","");switch(e){case"security":return Q;case"page":return ee;case"others":return ce;default:return D}}},methods:{async fetchWithAuth(e,t={}){this.credentials&&(t.headers={...t.headers,Authorization:`Basic ${this.credentials}`},t.credentials="include");const a=await fetch(e,t);if(401===a.status)throw this.$message.error("认证状态错误，请重新登录"),this.$router.push("/adminLogin"),new Error("Unauthorized");return a},handleLogout(){this.$store.commit("setCredentials",null),this.$router.push("/adminLogin")},setDefaultHash(){const e="#upload";window.location.hash=e,this.activeIndex=e.replace("#","")}},mounted(){window.location.hash||this.setDefaultHash()}};const he=(0,d.A)(ue,[["render",k],["__scopeId","data-v-78710c53"]]);var me=he},8050:function(e,t,a){a(5331)},3597:function(e,t,a){a(5331)},8830:function(e,t,a){a(5331)},6055:function(e,t,a){a(5331),a(9648),a(8050),a(9104),a(5970)},3003:function(e,t,a){a(5331)},8642:function(e,t,a){a(5331)},7128:function(e,t,a){a(5331),a(4318)},694:function(e,t,a){a(5331)},9104:function(e,t,a){a(5331)},4396:function(e,t,a){a(5331)},4885:function(e,t,a){a(5331)},5970:function(e,t,a){a(5331)},456:function(e,t,a){a(5331)},213:function(e,t,a){a(5331),a(9104)}}]);
//# sourceMappingURL=793.f929a339.js.map