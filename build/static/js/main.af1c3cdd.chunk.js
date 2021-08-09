(this["webpackJsonpweather-app-react"]=this["webpackJsonpweather-app-react"]||[]).push([[0],[,,,function(e,t,a){e.exports={container:"Daily_container__1HusS",day:"Daily_day__2hBKh",date:"Daily_date__1uDoh",date_date:"Daily_date_date__3ptC6",minmax:"Daily_minmax__2lMze",minmax_div:"Daily_minmax_div__2LElW",minmax_div_img:"Daily_minmax_div_img__24ADd",weather:"Daily_weather__oebU0",weather_img:"Daily_weather_img__3hiTg",temp:"Daily_temp__1iAyb"}},function(e,t,a){e.exports={current:"Current_current__3wJ4D",city:"Current_city__1hgVM",weather:"Current_weather__2pDzS",temp:"Current_temp__1wQTy",minmax:"Current_minmax__3TVEf","minmax-div":"Current_minmax-div__1nJLh",error:"Current_error__2jcrC"}},,,function(e,t,a){e.exports={unit_button:"Buttons_unit_button__1ldKp",geo:"Buttons_geo__2779e",left:"Buttons_left__123X8",right:"Buttons_right__3dHU7",left_img:"Buttons_left_img__3Kr1i",right_img:"Buttons_right_img__1tM26"}},function(e,t,a){e.exports={container:"Hourly_container__1GDyw",hourly:"Hourly_hourly__3ubpz",box:"Hourly_box__1gByq",box_midnight:"Hourly_box_midnight__8k8D6",weather:"Hourly_weather__3JSSI"}},function(e,t,a){e.exports={form:"Form_form__3wvE7",searchbar:"Form_searchbar__36bBd",searchbar_error:"Form_searchbar_error__34E2r",magnifier:"Form_magnifier__izm7p"}},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),n=a(12),i=a.n(n),A=(a(17),a(18),a(19),a(5)),s=a(6),o=a.n(s),d=a(10),u=a(2),l=a(9),m=a.n(l),j=a(0),h=r.a.createContext(),b=function(){return Object(c.useContext)(h)},g=function(e){var t=Object(c.useState)(!0),a=Object(u.a)(t,2),r=a[0],n=a[1];return Object(j.jsx)(h.Provider,{value:[r,n],children:e.children})},O=r.a.createContext(),v=r.a.createContext(),f=function(){return Object(c.useContext)(v)},x=function(e){var t=Object(c.useState)(""),a=Object(u.a)(t,2),r=a[0],n=a[1],i=Object(c.useState)(!1),A=Object(u.a)(i,2),s=A[0],o=A[1];return Object(j.jsx)(O.Provider,{value:[r,n],children:Object(j.jsx)(v.Provider,{value:[s,o],children:e.children})})},w=r.a.createContext(),y=function(){return Object(c.useContext)(w)},p=function(e){var t=Object(c.useState)({city:void 0,lon:void 0,lat:void 0,dt:void 0,timezone:void 0,sunrise:void 0,sunset:void 0,errorText:void 0}),a=Object(u.a)(t,2),r=a[0],n=a[1];return Object(j.jsx)(w.Provider,{value:[r,n],children:e.children})},D=r.a.createContext(),C=function(){return Object(c.useContext)(D)},B=function(e){var t=Object(c.useState)(),a=Object(u.a)(t,2),r=a[0],n=a[1];return Object(j.jsx)(D.Provider,{value:[r,n],children:e.children})},E=function(e){var t=Object(c.useRef)(),a=b(),r=Object(u.a)(a,1)[0],n=Object(c.useContext)(O),i=Object(u.a)(n,2),s=i[0],l=i[1],h=f(),g=Object(u.a)(h,2),v=g[0],x=g[1],w=y(),p=Object(u.a)(w,2),D=p[0],B=p[1],E=C(),N=Object(u.a)(E,2),I=(N[0],N[1]),G=Object(c.useState)(!1),H=Object(u.a)(G,2),Q=H[0],T=H[1],_=Object(c.useState)(!1),F=Object(u.a)(_,2),P=F[0],M=F[1],R=function(e){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=63711ece4bcfaa691a62cb55c0c063a2"),{mode:"cors"}).then(function(){var e=Object(d.a)(o.a.mark((function e(t){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:a=e.sent,console.log(a),c=r?"metric":"imperial",S(a.coord.lon,a.coord.lat,c),a.coord.lon&&B((function(e){return Object(A.a)(Object(A.a)({},e),{},{city:a.name,lon:a.coord.lon,lat:a.coord.lat,dt:a.dt,timezone:a.timezone,sunrise:a.sys.sunrise,sunset:a.sys.sunset,errorText:""})}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){B((function(e){return Object(A.a)(Object(A.a)({},e),{},{errorText:"Please enter a valid city name."})})),T(!1)}))},S=function(e,t,a){fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t,"&lon=").concat(e,"&exclude=minutely,alerts&units=").concat(a,"&appid=63711ece4bcfaa691a62cb55c0c063a2"),{mode:"cors"}).then(function(){var e=Object(d.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:a=e.sent,console.log(a),I(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){B((function(e){return Object(A.a)(Object(A.a)({},e),{},{errorText:"Please enter a valid city name."})}))}))},k=!Q&&P?m.a.searchbar_error:"",Z=Object(c.useRef)(!0);if(Object(c.useEffect)((function(){t.current.focus(),localStorage.getItem("city")?R(localStorage.getItem("city")):(R("toulouse"),console.log("okay")),Z.current?Z.current=!1:R(D.city)}),[r]),v){navigator.geolocation.getCurrentPosition((function(e){var t,a;t=e.coords.longitude,a=e.coords.latitude,fetch("http://api.openweathermap.org/geo/1.0/reverse?lat=".concat(a,"&lon=").concat(t,"&limit=5&appid=63711ece4bcfaa691a62cb55c0c063a2")).then(function(){var e=Object(d.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:a=e.sent,R(a[0].name),localStorage.setItem("city",a[0].name);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}));x(!1)}return Object(j.jsxs)("form",{className:m.a.form,onSubmit:function(e){e.preventDefault(),M(!0),""===s||void 0===s||D.errorText?T(!1):(T(!0),localStorage.setItem("city",s),R(s),l(""))},children:[Object(j.jsx)("span",{className:m.a.magnifier}),Object(j.jsx)("input",{type:"search",className:"".concat(m.a.searchbar," ").concat(k),placeholder:"Search",value:s,onChange:function(e){B((function(e){return Object(A.a)(Object(A.a)({},e),{},{errorText:""})})),l(e.target.value),T(!0)},ref:t})]})},N=a(7),I=a.n(N),G=function(e){var t=b(),a=Object(u.a)(t,2),c=a[0],r=a[1],n=c?"\xb0C":"\xb0F";return Object(j.jsx)("button",{className:I.a.unit_button,onClick:function(){r(!c)},children:n})},H=function(){var e=f(),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(j.jsx)("button",{className:I.a.geo,onClick:function(){c(!a)},children:Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"geolocation"})})},Q=function(e){return Object(j.jsx)("button",{className:I.a.left,onClick:e.onClick,children:Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"left button",className:I.a.left_img})})},T=function(e){return Object(j.jsx)("button",{className:I.a.right,onClick:e.onClick,children:Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"right button",className:I.a.right_img})})},_=function(e){return Object(j.jsxs)("header",{children:[Object(j.jsx)(H,{}),Object(j.jsx)(E,{}),Object(j.jsx)(G,{})]})},F=a(4),P=a.n(F),M=a.p+"static/media/arrow_up.4e53611d.svg",R=a.p+"static/media/arrow_down.0ddb50bc.svg",S=a.p+"static/media/01d.82983a53.svg",k=a.p+"static/media/02d.a6d4d478.svg",Z=a.p+"static/media/03d.1e1e1b92.svg",z=a.p+"static/media/04d.989785e7.svg",J=a.p+"static/media/09d.96e31469.svg",L=a.p+"static/media/10d.36870580.svg",U=a.p+"static/media/11d.45d31b41.svg",Y=a.p+"static/media/13d.66d8d71c.svg",X=a.p+"static/media/50d.9c947e28.svg",V=a.p+"static/media/01n.017f3203.svg",W=a.p+"static/media/02n.d9b627f5.svg",K=function(e,t){var a,c=C(),r=Object(u.a)(c,1)[0],n=y(),i=(Object(u.a)(n,1)[0],function(e,t,c,r){return t=Number(t),e.weather[0].id>=300&&e.weather[0].id<=321?a=J:e.weather[0].id>=200&&e.weather[0].id<=232?a=U:e.weather[0].id>=500&&e.weather[0].id<=504?a=L:511===e.weather[0].id?a=Y:e.weather[0].id>=520&&e.weather[0].id<=531?a=J:e.weather[0].id>=600&&e.weather[0].id<=622?a=Y:e.weather[0].id>=701&&e.weather[0].id<=781&&(a=X),t>=c&&t<=r?800===e.weather[0].id?a=S:801===e.weather[0].id?a=k:802===e.weather[0].id?a=Z:803!==e.weather[0].id&&804!==e.weather[0].id||(a=z):(t>=0&&t<=c||t>=r)&&(800===e.weather[0].id?a=V:801===e.weather[0].id?a=W:802===e.weather[0].id?a=Z:803!==e.weather[0].id&&804!==e.weather[0].id||(a=z)),a});if(0===e)r&&i(r.hourly[t],new Date(1e3*(r.hourly[t].dt+r.timezone_offset)).getHours(),new Date(1e3*(r.current.sunrise+r.timezone_offset)).getHours(),new Date(1e3*(r.current.sunset+r.timezone_offset)).getHours());else if(1===e)r&&i(r.daily[t],new Date(1e3*(r.daily[t].dt+r.timezone_offset)).getHours(),new Date(1e3*(r.current.sunrise+r.timezone_offset)).getHours(),new Date(1e3*(r.current.sunset+r.timezone_offset)).getHours());return a},q=function(e){var t=y(),a=Object(u.a)(t,1)[0],c=C(),r=Object(u.a)(c,1)[0],n=K(0,0),i=new Date,A=(new Date).toUTCString().slice(5,16),s="";switch(i.getDay()){case 0:s="Sunday";break;case 1:s="Monday";break;case 2:s="Tuesday";break;case 3:s="Wednesday";break;case 4:s="Thursday";break;case 5:s="Friday";break;case 6:s="Saturday";break;default:s="Error"}return Object(j.jsxs)("div",{className:P.a.current,children:[Object(j.jsx)("div",{className:P.a.city,children:a.city}),Object(j.jsx)("img",{src:n,alt:"icon",className:P.a.weather}),Object(j.jsxs)("div",{className:P.a.temp,children:[r&&r.hourly[0].temp.toFixed(0),"\xb0"]}),Object(j.jsx)("div",{className:P.a.date,children:"".concat(s,", ").concat(A)}),Object(j.jsxs)("div",{className:P.a.minmax,children:[Object(j.jsxs)("div",{className:P.a["minmax-div"],children:[Object(j.jsx)("img",{src:M,alt:"max temperature"}),Object(j.jsxs)("div",{className:P.a["minmax-div-text"],children:[r&&r.daily[0].temp.max.toFixed(0),"\xb0"]})]}),Object(j.jsxs)("div",{className:P.a["minmax-div"],children:[Object(j.jsx)("img",{src:R,alt:"min temperature"}),Object(j.jsxs)("div",{className:P.a["minmax-div-text"],children:[r&&r.daily[0].temp.min.toFixed(0),"\xb0"]})]})]}),Object(j.jsx)("div",{className:P.a.error,children:a.errorText})]})},$=a(8),ee=a.n($),te=function(){var e=C(),t=Object(u.a)(e,1)[0],a=Object(c.useRef)(),r=(Object(c.useRef)(),K),n="",i=function(e,t){console.log(e,t);var a="";return a=0===t?"Now":e,23===e&&(n=ee.a.box_midnight),a.toString().length<2?a="0".concat(e,"h"):2===a.toString().length&&(a="".concat(e,"h")),a};return Object(c.useEffect)((function(){a.current.scrollTo(0,0)}),[]),Object(j.jsxs)("div",{className:ee.a.container,children:[Object(j.jsx)(Q,{onClick:function(){return a.current.scrollBy({left:-120,top:0,behavior:"smooth"})}}),Object(j.jsx)("div",{ref:a,className:ee.a.hourly,children:t&&t.hourly.slice(0,24).map((function(e,a){return Object(j.jsxs)("div",{className:"".concat(ee.a.box," ").concat(n),children:[Object(j.jsx)("div",{className:"hourly-box-time",children:i(new Date(1e3*(t.hourly[a].dt+t.timezone_offset)).getUTCHours(),a)}),Object(j.jsx)("img",{className:ee.a.weather,src:r(0,a),alt:"weather icon"}),Object(j.jsxs)("div",{className:"hourly-box-temp",children:[e.temp.toFixed(0),"\xb0"]})]},Math.random())}))}),Object(j.jsx)(T,{onClick:function(){return a.current.scrollBy({left:120,top:0,behavior:"smooth"})}})]})},ae=a(3),ce=a.n(ae),re=function(){var e=C(),t=Object(u.a)(e,1)[0],a=K;return Date.prototype.addDays=function(e){var t=new Date,a=new Date(t);a.setDate(a.getDate()+e+1);var c="";switch(a.toUTCString().slice(0,3)){case"Mon":c="Monday";break;case"Tue":c="Tuesday";break;case"Wed":c="Wednesday";break;case"Thu":c="Thursday";break;case"Fri":c="Friday";break;case"Sat":c="Saturday";break;case"Sun":c="Sunday";break;default:c="Error"}return c},Date.prototype.addDate=function(e){var t=new Date;return new Date(new Date(t).getTime()+864e5*e).toUTCString().slice(5,16)},Object(j.jsx)("div",{className:ce.a.container,children:t&&t.daily.slice(0,7).map((function(e,t){return Object(j.jsxs)("div",{className:ce.a.day,children:[Object(j.jsxs)("div",{className:ce.a.date,children:[Object(j.jsx)("div",{className:ce.a.date_day,children:(new Date).addDays(t)}),Object(j.jsx)("div",{className:ce.a.date_date,children:(new Date).addDate(t)})]}),Object(j.jsxs)("div",{className:ce.a.minmax,children:[Object(j.jsxs)("div",{className:ce.a.minmax_div,children:[Object(j.jsx)("img",{className:ce.a.minmax_div_img,src:M,alt:"max temperature"}),Object(j.jsxs)("div",{className:ce.a.minmax_div_text,children:[e.temp.max.toFixed(0),"\xb0"]})]}),Object(j.jsxs)("div",{className:ce.a.minmax_div,children:[Object(j.jsx)("img",{className:ce.a.minmax_div_img,src:R,alt:"min temperature"}),Object(j.jsxs)("div",{className:ce.a.minmax_div_text,children:[e.temp.min.toFixed(0),"\xb0"]})]})]}),Object(j.jsx)("div",{className:ce.a.weather,children:Object(j.jsx)("img",{className:ce.a.weather_img,src:a(1,t),alt:"weather icon"})}),Object(j.jsxs)("div",{className:ce.a.temp,children:[e.temp.day.toFixed(0),"\xb0"]})]},Math.random())}))})};var ne=function(e){return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(_,{}),Object(j.jsx)(q,{}),Object(j.jsx)(te,{}),Object(j.jsx)(re,{})]})};i.a.render(Object(j.jsx)(g,{children:Object(j.jsx)(x,{children:Object(j.jsx)(p,{children:Object(j.jsx)(B,{children:Object(j.jsx)(ne,{})})})})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.af1c3cdd.chunk.js.map