(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{409:function(t,e,n){var content=n(478);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("0ddbce0c",content,!1,{sourceMap:!1})},410:function(t,e,n){var content=n(480);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("f0fcac38",content,!1,{sourceMap:!1})},411:function(t,e,n){var content=n(482);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("6239357a",content,!1,{sourceMap:!1})},419:function(t,e,n){var content=n(504);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("6ab3b5f4",content,!1,{sourceMap:!1})},477:function(t,e,n){"use strict";var r=n(409);n.n(r).a},478:function(t,e,n){(e=n(10)(!1)).push([t.i,".header{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle{display:flex;align-items:center;font-size:1.875rem;line-height:1;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle{font-size:1.25rem}}.date{font-size:.875rem;color:#707070}.annotation{font-size:.75rem;color:#707070}@media screen and (min-width: 601px){.annotation{margin:0 0 0 auto}}",""]),t.exports=e},479:function(t,e,n){"use strict";var r=n(410);n.n(r).a},480:function(t,e,n){(e=n(10)(!1)).push([t.i,".WhatsNew{background-color:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:10px;margin-bottom:20px}.WhatsNew-heading{display:flex;align-items:center;font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px;color:#4d4d4d;margin-left:12px}.WhatsNew-heading-icon{margin:3px}.WhatsNew .WhatsNew-list{padding-left:0px;list-style-type:none}.WhatsNew .WhatsNew-list-item-anchor{display:inline-block;text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor{display:flex;flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}",""]),t.exports=e},481:function(t,e,n){"use strict";var r=n(411);n.n(r).a},482:function(t,e,n){(e=n(10)(!1)).push([t.i,".StaticInfo{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;background-color:#fff;border:1px solid #d9d9d9;box-shadow:0px 0px 2px rgba(0,0,0,.15);border-radius:4px;padding:.5em 1em;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.StaticInfo:hover{text-decoration:underline}.StaticInfo-Button{flex:1 0 auto;text-align:right}.StaticInfo-Button>span{padding:4px 8px;font-size:14px;font-size:0.875rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.StaticInfo-Button>span:hover{background-color:#008830;color:#fff}.StaticInfo-Button>span:hover>i{color:#fff !important}@media screen and (max-width: 600px){.StaticInfo-Button{margin-top:4px}}",""]),t.exports=e},483:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/04/15","text":"福島県とCode for Fukushimaが協力し、公式のサイトとして立ち上げました。"},{"date":"2020/04/14","text":" Google社より、運用費のサポートが開始されました。"}]}')},503:function(t,e,n){"use strict";var r=n(419);n.n(r).a},504:function(t,e,n){(e=n(10)(!1)).push([t.i,".MainPage .DataBlock[data-v-43a83103]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-43a83103]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-43a83103]{padding:4px 8px}}",""]),t.exports=e},508:function(t,e,n){"use strict";n.r(e);n(21);var r=n(4),o=n(2),l=n(50),c=n.n(l),d=n(408),f=o.default.extend({props:{title:{type:String,required:!0},icon:{type:String,required:!0},date:{type:String,required:!0}},computed:{formattedDate:function(){return Object(d.b)(this.date)}}}),m=(n(477),n(5)),h=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header mb-3"},[n("h2",{staticClass:"pageTitle"},[n("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[t._v("\n      "+t._s(t.icon)+"\n    ")]),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),n("div",{staticClass:"date"},[n("span",[t._v(t._s(t.$t("最終更新"))+" ")]),t._v(" "),n("time",{attrs:{datetime:t.formattedDate}},[t._v(t._s(t.date))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja"].includes(t.$i18n.locale),expression:"!['ja'].includes($i18n.locale)"}],staticClass:"annotation"},[n("span",[t._v(t._s(t.$t("注釈"))+" ")])])])}),[],!1,null,null,null).exports,x=o.default.extend({props:{items:{type:Array,required:!0}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)},formattedDate:function(t){return Object(d.a)(t)}}}),w=(n(479),Object(m.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("h3",{staticClass:"WhatsNew-heading"},[n("v-icon",{staticClass:"WhatsNew-heading-icon",attrs:{size:"24"}},[t._v("\n      mdi-information\n    ")]),t._v("\n    "+t._s(t.$t("最新のお知らせ"))+"\n  ")],1),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("a",{staticClass:"WhatsNew-list-item-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(e.date)+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n          "),t.isInternalLink(e.url)?t._e():n("v-icon",{staticClass:"WhatsNew-item-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n            mdi-open-in-new\n          ")])],1)])])})),0)])}),[],!1,null,null,null).exports),v=o.default.extend({props:{url:{type:String,default:""},text:{type:String,default:""},btnText:{type:String,default:""}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)}}}),_=(n(481),Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.isInternalLink(t.url)?"nuxt-link":"a",{tag:"component",staticClass:"StaticInfo",attrs:{to:t.isInternalLink(t.url)?t.url:"",href:t.isInternalLink(t.url)?"":t.url}},[n("span",[t._v(t._s(t.text))]),t._v(" "),t.btnText?n("div",{staticClass:"StaticInfo-Button"},[n("span",[t._v("\n      "+t._s(t.btnText)+"\n    ")])]):t._e()])}),[],!1,null,null,null).exports),C=n(377),N=n(483),k=n(423),W=n(426),y=n(424),I=n(429),D=n(427),S=n(428),z=o.default.extend({components:{PageHeader:h,WhatsNew:w,StaticInfo:_,ConfirmedCasesDetailsCard:k.a,ConfirmedCasesNumberCard:W.a,ConfirmedCasesAttributesCard:y.a,TelephoneAdvisoryReportsNumberCard:D.a,ConsultationDeskReportsNumberCard:S.a,TestedNumberCard:I.a},asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var data,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return data={},t.prev=1,"https://cdn2.dott.dev/data.json",t.next=5,c.a.get("https://cdn2.dott.dev/data.json");case 5:e=t.sent,data={Data:e.data};case 7:return t.prev=7,t.finish(7);case 9:return t.abrupt("return",data);case 10:case"end":return t.stop()}}),t,null,[[1,,7,9]])})))()},data:function(){var data={Data:C,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("県内の最新感染動向")},newsItems:N.newsItems};return data},head:function(){return{title:this.$t("県内の最新感染動向")}},mounted:function(){console.log("while (Japan.recovering) {\n  we.hack();\n}")}}),j=(n(503),Object(m.a)(z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("page-header",{attrs:{icon:t.headerItem.icon,title:t.headerItem.title,date:t.Data.last_update}}),t._v(" "),n("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems}}),t._v(" "),n("static-info",{staticClass:"mb-4",attrs:{url:"https://www.pref.fukushima.lg.jp/sec/21045c/coronavirus-taiou.html",text:t.$t("自分や家族の症状に不安や心配がある場合（県公式サイト）"),"btn-text":t.$t("公式の情報を見る")}}),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("confirmed-cases-details-card",{attrs:{"graph-data":t.Data}}),t._v(" "),n("confirmed-cases-attributes-card",{attrs:{"graph-data":t.Data}}),t._v(" "),n("confirmed-cases-number-card",{attrs:{"graph-data":t.Data}}),t._v(" "),n("tested-number-card",{attrs:{"graph-data":t.Data}}),t._v(" "),n("telephone-advisory-reports-number-card",{attrs:{"graph-data":t.Data}}),t._v(" "),n("consultation-desk-reports-number-card",{attrs:{"graph-data":t.Data}})],1)],1)}),[],!1,null,"43a83103",null));e.default=j.exports}}]);