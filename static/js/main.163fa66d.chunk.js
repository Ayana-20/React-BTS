(this.webpackJsonprouting=this.webpackJsonprouting||[]).push([[0],{10:function(e,t,n){e.exports={form:"NewMeetupForm_form__34wzP",control:"NewMeetupForm_control__ZMb9W",actions:"NewMeetupForm_actions__1rPm0"}},14:function(e,t,n){e.exports={header:"MainNavigation_header__M9VIM",logo:"MainNavigation_logo__dTyZf",active:"MainNavigation_active__Mpd4S",badge:"MainNavigation_badge__1S-sw"}},18:function(e,t,n){e.exports={card:"Card_card__183dg"}},19:function(e,t,n){e.exports={main:"Layout_main__EdTr2"}},25:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(17),i=n.n(s),a=n(7),r=(n(25),n(2)),o=n(18),d=n.n(o),j=n(0);var l=function(e){return Object(j.jsx)("div",{className:d.a.card,children:e.children})},b=n(8),m=n.n(b);var h=function(e){return Object(j.jsx)("li",{className:m.a.item,children:Object(j.jsxs)(l,{children:[Object(j.jsx)("div",{className:m.a.image,children:Object(j.jsx)("img",{src:e.image,alt:e.title})}),Object(j.jsxs)("div",{className:m.a.content,children:[Object(j.jsx)("h3",{children:e.title}),Object(j.jsx)("address",{children:e.address}),Object(j.jsx)("p",{children:e.description})]}),Object(j.jsx)("div",{className:m.a.actions,children:Object(j.jsx)("button",{children:"View"})})]})})};var u=function(e){return Object(j.jsx)("ul",{className:m.a.list,children:e.meetups.map((function(e){return Object(j.jsx)(h,{id:e.id,image:e.image,title:e.title,address:e.address,description:e.description},e.id)}))})},p=[{id:"m1",title:"BON VOYAGE",image:"https://mir-s3-cdn-cf.behance.net/project_modules/fs/16f35e88284187.5dd428d4e1938.png",address:"4 Seasons",description:"Bangtan on new adventures"},{id:"m2",title:"Summer Package",image:"https://1.bp.blogspot.com/-gSTr1wWCKlY/XoODIC_T3RI/AAAAAAAADQo/BKouTG1_XsoeoM3TVpg8z4zNGr1jTQDxACLcBGAsYHQ/s1600/bts_summer_package_2018_eng_sub_saipan.jpg",address:"4 Seasons",description:"BTS Summer Escape  "},{id:"m3",title:"Winter Package",image:"https://armyconnect.ph/wp-content/uploads/2021/03/bts-winter-package-2021-poster-notes.jpg",address:"2 Seasons",description:"Winter bliss"},{id:"m4",title:"BTS, In The Soop",image:"https://itsyowyow.com/wp-content/uploads/2021/01/unnamed-1.jpg",address:"1 Season",description:"Bangtan's lazy getaway during Quarantine"},{id:"m5",title:"BTS World Tour",image:"https://channel-korea.com/wp-content/uploads/2017/10/C6wG-ekWYAAr7az.jpg",address:"5 Seasons",description:"Bangtan's reign over the world"}];var x=function(){return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"BTS Bon Voyage"}),Object(j.jsx)(u,{meetups:p})]})};var O=function(){return Object(j.jsx)("div",{children:"Package"})},g=n(10),_=n.n(g);var v=function(){var e=Object(c.useRef)();return Object(j.jsx)(l,{children:Object(j.jsxs)("form",{className:_.a.form,onSubmit:function(e){e.preventDefault()},children:[Object(j.jsxs)("div",{className:_.a.control,children:[Object(j.jsx)("label",{htmlFor:"title",children:"Blog Title"}),Object(j.jsx)("input",{type:"text",required:!0,id:"title",ref:e})]}),Object(j.jsxs)("div",{className:_.a.control,children:[Object(j.jsx)("label",{htmlFor:"image",children:"Image URL"}),Object(j.jsx)("input",{type:"url",required:!0,id:"image"})]}),Object(j.jsxs)("div",{className:_.a.control,children:[Object(j.jsx)("label",{htmlFor:"address",children:"Army name "}),Object(j.jsx)("input",{type:"text",required:!0,id:"address"})]}),Object(j.jsxs)("div",{className:_.a.control,children:[Object(j.jsx)("label",{htmlFor:"description",children:"Description"}),Object(j.jsx)("textarea",{id:"description",required:!0,rows:"5"})]}),Object(j.jsx)("div",{className:_.a.actions,children:Object(j.jsx)("button",{children:"Post"})})]})})};var f=function(){return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"ARMY BLOG"}),Object(j.jsx)(v,{})]})},N=n(19),w=n.n(N),M=n(14),B=n.n(M);var S=function(){return Object(j.jsxs)("header",{className:B.a.header,children:[Object(j.jsx)("div",{className:B.a.logo,children:"BTS"}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/",children:"Bon Voyage"})}),Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/new-meetup",children:"Army Blog"})}),Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/favorites",children:"Packages"})})]})})]})};var A=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(S,{}),Object(j.jsx)("main",{className:w.a.main,children:e.children})]})};var y=function(){return Object(j.jsx)(A,{children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{path:"/",exact:!0,children:Object(j.jsx)(x,{})}),Object(j.jsx)(r.a,{path:"/new-meetup",children:Object(j.jsx)(f,{})}),Object(j.jsx)(r.a,{path:"/favorites",children:Object(j.jsx)(O,{})})]})})};i.a.render(Object(j.jsx)(a.a,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={item:"MeetupItem_item__2Z2MC",image:"MeetupItem_image__3XYJl",content:"MeetupItem_content__2thPc",actions:"MeetupItem_actions__14zQD"}}},[[35,1,2]]]);
//# sourceMappingURL=main.163fa66d.chunk.js.map