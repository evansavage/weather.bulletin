(this["webpackJsonpweather.bulletin"]=this["webpackJsonpweather.bulletin"]||[]).push([[0],{53:function(e,n,a){},54:function(e,n,a){},55:function(e,n,a){},86:function(e,n,a){"use strict";a.r(n);var t=a(0),i=a.n(t),c=a(15),o=a.n(c),s=(a(53),a(35)),r=(a(54),a(55),a(21)),l=a(38),m=a(41),d=a.n(m),h=a(18),p=a.n(h);var u=a(42),x=a.n(u),g=(a(75),a(76),a(2));function j(e){var n=e.weatherData,a=e.zipCode,i="https://openweathermap.org/img/wn/";console.log(n.list);var c=n.city.name,o=function(e){if("string"===typeof e){e=parseInt(e,10);var n=[{min:35e3,max:36999,code:"AL",long:"Alabama"},{min:99500,max:99999,code:"AK",long:"Alaska"},{min:85e3,max:86999,code:"AZ",long:"Arizona"},{min:71600,max:72999,code:"AR",long:"Arkansas"},{min:9e4,max:96699,code:"CA",long:"California"},{min:8e4,max:81999,code:"CO",long:"Colorado"},{min:6e3,max:6999,code:"CT",long:"Connecticut"},{min:19700,max:19999,code:"DE",long:"Deleware"},{min:32e3,max:34999,code:"FL",long:"Florida"},{min:3e4,max:31999,code:"GA",long:"Georgia"},{min:96700,max:96999,code:"HI",long:"Hawaii"},{min:83200,max:83999,code:"ID",long:"Idaho"},{min:6e4,max:62999,code:"IL",long:"Illinois"},{min:46e3,max:47999,code:"IN",long:"Indiana"},{min:5e4,max:52999,code:"IA",long:"Iowa"},{min:66e3,max:67999,code:"KS",long:"Kansas"},{min:4e4,max:42999,code:"KY",long:"Kentucky"},{min:7e4,max:71599,code:"LA",long:"Louisiana"},{min:3900,max:4999,code:"ME",long:"Maine"},{min:20600,max:21999,code:"MD",long:"Maryland"},{min:1e3,max:2799,code:"MA",long:"Massachusetts"},{min:48e3,max:49999,code:"MI",long:"Michigan"},{min:55e3,max:56999,code:"MN",long:"Minnesota"},{min:38600,max:39999,code:"MS",long:"Mississippi"},{min:63e3,max:65999,code:"MO",long:"Missouri"},{min:59e3,max:59999,code:"MT",long:"Montana"},{min:27e3,max:28999,code:"NC",long:"North Carolina"},{min:58e3,max:58999,code:"ND",long:"North Dakota"},{min:68e3,max:69999,code:"NE",long:"Nebraska"},{min:88900,max:89999,code:"NV",long:"Nevada"},{min:3e3,max:3899,code:"NH",long:"New Hampshire"},{min:7e3,max:8999,code:"NJ",long:"New Jersey"},{min:87e3,max:88499,code:"NM",long:"New Mexico"},{min:1e4,max:14999,code:"NY",long:"New York"},{min:43e3,max:45999,code:"OH",long:"Ohio"},{min:73e3,max:74999,code:"OK",long:"Oklahoma"},{min:97e3,max:97999,code:"OR",long:"Oregon"},{min:15e3,max:19699,code:"PA",long:"Pennsylvania"},{min:300,max:999,code:"PR",long:"Puerto Rico"},{min:2800,max:2999,code:"RI",long:"Rhode Island"},{min:29e3,max:29999,code:"SC",long:"South Carolina"},{min:57e3,max:57999,code:"SD",long:"South Dakota"},{min:37e3,max:38599,code:"TN",long:"Tennessee"},{min:75e3,max:79999,code:"TX",long:"Texas"},{min:88500,max:88599,code:"TX",long:"Texas"},{min:84e3,max:84999,code:"UT",long:"Utah"},{min:5e3,max:5999,code:"VT",long:"Vermont"},{min:22e3,max:24699,code:"VA",long:"Virgina"},{min:2e4,max:20599,code:"DC",long:"Washington DC"},{min:98e3,max:99499,code:"WA",long:"Washington"},{min:24700,max:26999,code:"WV",long:"West Virginia"},{min:53e3,max:54999,code:"WI",long:"Wisconsin"},{min:82e3,max:83199,code:"WY",long:"Wyoming"}].filter((function(n){return n.min<=e&&n.max>=e}));return 0!==n.length&&(n.length>1&&console.error("Whoops found two states"),{code:n[0].code,long:n[0].long})}console.log("Must pass the zipcode as a string. -- Otherwise leading zeros could cause your zip code to be parsed outside base 10.")}(a).code,s=d.a.lookup(a),m=Object(t.useState)(p.a.tz(p()(),s).format("h:mm A")),h=Object(r.a)(m,2),u=h[0],j=h[1],b=Object(t.useState)(),O=Object(r.a)(b,2),f=O[0],w=O[1],v=Object(t.useRef)();Object(t.useEffect)((function(){j(p.a.tz(p()(),s).format("h:mm A")),v.current.slickGoTo(0);var e=setInterval((function(){j(p.a.tz(p()(),s).format("h:mm A"))}),6e4);return function(){clearInterval(e)}}),[s]);var N={},M="",z=!0,C=!0;for(var S in window.addEventListener("wheel",(function(e){e.preventDefault(),(e.deltaX/50>=.5||e.deltaX/50<=-.5)&&C?(C=!1,e.deltaX>0?v.current.slickNext():v.current.slickPrev()):C=!0})),n.list){var y=n.list[S],A=p.a.tz(y.dt_txt+"+0000",s),I=A.format("YYYY-MM-DD"),k=A.format("ddd, MMM Do"),D=A.format("h:mm A"),T=Math.round(y.main.temp_min),W=Math.round(y.main.temp_max);if(z){var E=Math.round(y.main.temp),P=y.weather[0].icon,L=y.weather[0].main,F=y.pop;z=!1}I!==M&&(N[I]={},N[I].times=[],N[I].string=k,N[I].min=1e7,N[I].max=0,N[I].total_inc=0),T<N[I].min&&(N[I].min=T),W>N[I].max&&(N[I].max=W),N[I].times.push({time:D,weather:y.weather[0],temp:Math.round(y.main.temp),pop:y.pop}),console.log(N[I]),M=I,N[I].total_inc+=1}console.log(N);var R={dots:!1,variableWidth:!0,infinite:!1,slidesToShow:4,focusOnSelect:!1,arrows:!0,draggable:!0,rows:1,swipe:!0,beforeChange:function(){w(v.current.innerSlider.state.currentSlide),console.log(f)},responsive:[{breakpoint:1025,settings:{slidesToShow:3,variableWidth:!0}},{breakpoint:769,settings:{slidesToShow:2,variableWidth:!0}},{breakpoint:569,settings:{slidesToShow:1,variableWidth:!0}}]};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"weather-header-wrapper",children:[Object(g.jsxs)("h2",{className:"weather-header",children:[c,", ",o]}),Object(g.jsx)("div",{className:"current-time",children:u}),Object(g.jsxs)("div",{className:"current-weather",children:[E,"\u02da"]}),Object(g.jsx)("img",{className:"current-icon",alt:L,src:i+P+"@2x.png"}),F>0?Object(g.jsxs)("span",{className:"precip-percent",children:[Math.round(100*F),"%"]}):""]}),Object(g.jsx)("div",{className:"day-container",children:Object(g.jsx)(x.a,Object(l.a)(Object(l.a)({ref:v},R),{},{className:"custom-weather-slider",children:Object.keys(N).map((function(e,n){return n<1e3?Object(g.jsxs)("div",{className:"day-wrapper",children:[Object(g.jsxs)("div",{className:"date-wrapper",children:[Object(g.jsx)("span",{className:"day-title",children:N[e].string}),Object(g.jsxs)("span",{className:"max-temp",children:[N[e].max,"\u02da"]}),Object(g.jsxs)("span",{className:"min-temp",children:[N[e].min,"\u02da"]})]}),N[e].times.map((function(n,a){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"time-percent-wrapper",children:[Object(g.jsxs)("div",{className:"time-wrapper",children:[Object(g.jsx)("span",{className:"hour-time",children:n.time}),Object(g.jsxs)("span",{className:"hour-temp",children:[n.temp,"\u02da"]}),Object(g.jsx)("img",{alt:n.weather.main,src:i+n.weather.icon+"@2x.png"})]},e+"-"+a),n.pop>0?Object(g.jsxs)("span",{className:"precip-percent",children:[Math.round(100*n.pop),"%"]}):""]})})}))]},e):""}))}))})]})}var b=a(103),O=a(104),f=a(102),w=a(43),v=a.n(w),N=a(4),M=a(30),z=a.n(M);function C(){var e=Object(N.d)(),n=new URLSearchParams(e.location.search),a=Object(t.useState)(n.get("zip")),i=Object(r.a)(a,2),c=i[0],s=i[1],l=Object(t.useState)(null!==n.get("units")&&""!==n.get("units")?n.get("units"):"imperial"),m=Object(r.a)(l,2),d=m[0],h=m[1];Object(t.useEffect)((function(){c&&p(d)}),[]),Object(t.useEffect)((function(){c?z()(".zip-clear").css({display:"flex"}):z()(".zip-clear").css({display:"none"})}),[c]);function p(e){console.log(c),fetch("".concat("https://api.openweathermap.org/data/2.5/forecast","?zip=").concat(c,",us&temp_min&units=").concat(e,"&APPID=").concat("b8c57c1c1fe78770517a0b492af57a54")).then((function(e){return e.ok?e.json():""===c?Promise.reject("Please enter a zip code"):Promise.reject("Unrecognized zip code")})).then((function(e){return o.a.render(Object(g.jsx)(j,{weatherData:e,zipCode:c}),document.getElementById("weather-day-container"))})).catch((function(e){return o.a.render(Object(g.jsx)("div",{className:"weather-header-wrapper",children:Object(g.jsx)("h2",{className:"weather-header error",style:{"font-weight":"200"},children:e})}),document.getElementById("weather-day-container"))}))}return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{className:"zip-form",onSubmit:function(e){e.preventDefault(),p(d)},children:[Object(g.jsxs)("div",{className:"zip-input-wrapper",children:[Object(g.jsx)("label",{className:"zip-label",children:Object(g.jsx)("input",{className:"zip-input",placeholder:"Zip Code",type:"text",onChange:function(a){s(a.target.value),n.set("zip",a.target.value),e.push({search:n.toString()})},value:c,maxLength:"5"})}),Object(g.jsx)("div",{className:"zip-clear",onClick:function(a){a.preventDefault(),s(""),n.set("zip",""),e.push({search:n.toString()}),z()(".zip-input").focus()},children:Object(g.jsx)(v.a,{})})]}),Object(g.jsx)(f.a,{id:"zip-submit",type:"submit",children:"Check Weather"})]}),Object(g.jsxs)(O.a,{className:"unit-buttons",value:d,exclusive:!0,onChange:function(a,t){null!==t&&(n.set("units",t),h(t,p(t)),e.push({search:n.toString()}))},"aria-label":"temperature units",children:[Object(g.jsx)(b.a,{value:"imperial",children:"F\u02da"}),Object(g.jsx)(b.a,{value:"metric",children:"C\u02da"})]})]})}var S=function(){return Object(g.jsx)(s.a,{children:Object(g.jsxs)("div",{className:"outer-wrapper",children:[Object(g.jsx)("div",{className:"nav-border-wrapper",children:Object(g.jsxs)("div",{className:"nav-wrapper",children:[Object(g.jsxs)("h1",{children:[Object(g.jsx)("span",{className:"title-large",children:"WEATHER.BULLETIN"}),Object(g.jsx)("span",{className:"title-small",children:"W.B"})]}),Object(g.jsx)(C,{})]})}),Object(g.jsx)("div",{id:"weather-day-container"})]})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,105)).then((function(n){var a=n.getCLS,t=n.getFID,i=n.getFCP,c=n.getLCP,o=n.getTTFB;a(e),t(e),i(e),c(e),o(e)}))};a.p;o.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(S,{})}),document.getElementById("root")),y()}},[[86,1,2]]]);
//# sourceMappingURL=main.d82ce6ba.chunk.js.map