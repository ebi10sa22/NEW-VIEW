(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[7],{126:function(e,t,a){"use strict";function r(e){if(null==e)throw new TypeError("Cannot destructure undefined")}a.d(t,"a",(function(){return r}))},152:function(e,t,a){},166:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var r=a(15),n=a.n(r),s=a(23),l=a(126),c=a(2),o=a(0),i=a.n(o),u=(a(152),a(55)),m=a.n(u),_=a(14),d=a.n(_),p=a(22),v=a(12),f=a(165),E=a(168),N=a(171),b=a(130),g=a.n(b);function h(e){var t=e.id,a=Object(o.useState)([]),r=Object(c.a)(a,2),u=r[0],_=r[1],h=Object(v.b)(),O=Object(c.a)(h,2);Object(l.a)(O[0]);var w=O[1],y=Object(o.useState)([]),k=Object(c.a)(y,2),C=k[0],T=k[1];Object(o.useEffect)((function(){function e(){return(e=Object(s.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/tv/".concat(t.id,"?&api_key=dbc0a6d62448554c27b6167ef7dabb1b")).then((function(e){T(e.data),_(e.data.seasons)}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.id]);var x="https://image.tmdb.org/t/p/w500".concat(C.poster_path),B=j(C.created_by),L=C.first_air_date,A=j(C.genres),F=C.last_air_date,I=(C.last_episode_to_air,C.name),J=C.next_episode_to_air,M=C.number_of_episodes,S=C.number_of_seasons,D=C.overview,G=j(C.production_companies),K=C.vote_average;console.log(u);return i.a.createElement("div",{className:"resultfortv"},i.a.createElement("div",{className:"resultfortv__innerspace"},i.a.createElement("div",{className:"resultfortv__image"},i.a.createElement("img",{src:x,alt:""}),null!==J&&J>Date()&&i.a.createElement("div",{className:"button__div"},i.a.createElement("div",{className:"event"},i.a.createElement(m.a,null),i.a.createElement("p",null,"Add to calender")))),i.a.createElement("div",{className:"resultfortv__info"},i.a.createElement("div",{className:"resultfortv__originaltitle"},i.a.createElement("h1",null,I),i.a.createElement(d.a,{className:"button",onClick:function(){w({type:"MAKE_NULL"})}})),i.a.createElement("div",{className:"resultfortv__overview"},i.a.createElement("p",null,D)),i.a.createElement("div",{className:"resultfortv__genre_production"},i.a.createElement("p",{className:"resultfortv__createdByTitle"},"Created By"),i.a.createElement("p",{className:"resultfortv__createdBy"},B),i.a.createElement("span",null,i.a.createElement("p",{className:"resultfortv__genre_title"},"Genre")),i.a.createElement("p",{className:"resultfortv__gernerlist"},A),i.a.createElement("p",{className:"resultfortv__production_title"},"Production Companies"),i.a.createElement("p",{className:"resultfortv__productionlist"},G)),i.a.createElement("div",{className:"resultfortv__additonalInfo"},i.a.createElement("div",{className:"resultfortv__additional1"},i.a.createElement("p",{className:"resultfortv__title"},"Total epposides"),i.a.createElement("p",{className:"resultfortv__result"},M),i.a.createElement("p",{className:"resultfortv__title"},"First Eposide"),i.a.createElement("p",{className:"resultfortv__result"},L),i.a.createElement("p",{className:"resultfortv__title"},"Total seasons"),i.a.createElement("p",{className:"resultfortv__result"},S),i.a.createElement(g.a,{variant:"popover",popupId:"demo-popup-menu"},(function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,Object.assign({className:"season__button",variant:"contained"},Object(b.bindTrigger)(e)),"Click here to view"),i.a.createElement(E.a,Object(b.bindMenu)(e),u.map((function(e){return i.a.createElement(N.a,null,"".concat(e.name,"     ").concat(e.air_date))}))))})))),i.a.createElement("div",{className:"resutfortv__additional2"},i.a.createElement("p",{className:"resultfortv__title"},"Vote average"),i.a.createElement("p",{className:"resultfortv__result"},K,"/10"),i.a.createElement("p",{className:"resultfortv__title"},"Last Eposide date"),i.a.createElement("p",{className:"resultfortv__result"},F)))))}function j(e){var t=[];return void 0!==e&&e.forEach((function(e){t.push(e.name)})),console.log(t),t.join(", ")}}}]);
//# sourceMappingURL=7.973bfed0.chunk.js.map