(this["webpackJsonpweather.bulletin"]=this["webpackJsonpweather.bulletin"]||[]).push([[0],{53:function(e,n,a){},54:function(e,n,a){},55:function(e,n,a){},86:function(e,n,a){"use strict";a.r(n);var t=a(0),c=a.n(t),i=a(15),s=a.n(i),o=(a(53),a(35)),r=(a(54),a(55),a(25)),l=a(38),m=a(41),d=a.n(m),h=a(18),u=a.n(h);var p=a(42),x=a.n(p),j=(a(75),a(76),a(2));function g(e){var n=e.weatherData,a=e.zipCode,c="https://openweathermap.org/img/wn/",i=n.city.name,s=function(e){if("string"===typeof e){e=parseInt(e,10);var n=[{min:35e3,max:36999,code:"AL",long:"Alabama"},{min:99500,max:99999,code:"AK",long:"Alaska"},{min:85e3,max:86999,code:"AZ",long:"Arizona"},{min:71600,max:72999,code:"AR",long:"Arkansas"},{min:9e4,max:96699,code:"CA",long:"California"},{min:8e4,max:81999,code:"CO",long:"Colorado"},{min:6e3,max:6999,code:"CT",long:"Connecticut"},{min:19700,max:19999,code:"DE",long:"Deleware"},{min:32e3,max:34999,code:"FL",long:"Florida"},{min:3e4,max:31999,code:"GA",long:"Georgia"},{min:96700,max:96999,code:"HI",long:"Hawaii"},{min:83200,max:83999,code:"ID",long:"Idaho"},{min:6e4,max:62999,code:"IL",long:"Illinois"},{min:46e3,max:47999,code:"IN",long:"Indiana"},{min:5e4,max:52999,code:"IA",long:"Iowa"},{min:66e3,max:67999,code:"KS",long:"Kansas"},{min:4e4,max:42999,code:"KY",long:"Kentucky"},{min:7e4,max:71599,code:"LA",long:"Louisiana"},{min:3900,max:4999,code:"ME",long:"Maine"},{min:20600,max:21999,code:"MD",long:"Maryland"},{min:1e3,max:2799,code:"MA",long:"Massachusetts"},{min:48e3,max:49999,code:"MI",long:"Michigan"},{min:55e3,max:56999,code:"MN",long:"Minnesota"},{min:38600,max:39999,code:"MS",long:"Mississippi"},{min:63e3,max:65999,code:"MO",long:"Missouri"},{min:59e3,max:59999,code:"MT",long:"Montana"},{min:27e3,max:28999,code:"NC",long:"North Carolina"},{min:58e3,max:58999,code:"ND",long:"North Dakota"},{min:68e3,max:69999,code:"NE",long:"Nebraska"},{min:88900,max:89999,code:"NV",long:"Nevada"},{min:3e3,max:3899,code:"NH",long:"New Hampshire"},{min:7e3,max:8999,code:"NJ",long:"New Jersey"},{min:87e3,max:88499,code:"NM",long:"New Mexico"},{min:1e4,max:14999,code:"NY",long:"New York"},{min:43e3,max:45999,code:"OH",long:"Ohio"},{min:73e3,max:74999,code:"OK",long:"Oklahoma"},{min:97e3,max:97999,code:"OR",long:"Oregon"},{min:15e3,max:19699,code:"PA",long:"Pennsylvania"},{min:300,max:999,code:"PR",long:"Puerto Rico"},{min:2800,max:2999,code:"RI",long:"Rhode Island"},{min:29e3,max:29999,code:"SC",long:"South Carolina"},{min:57e3,max:57999,code:"SD",long:"South Dakota"},{min:37e3,max:38599,code:"TN",long:"Tennessee"},{min:75e3,max:79999,code:"TX",long:"Texas"},{min:88500,max:88599,code:"TX",long:"Texas"},{min:84e3,max:84999,code:"UT",long:"Utah"},{min:5e3,max:5999,code:"VT",long:"Vermont"},{min:22e3,max:24699,code:"VA",long:"Virgina"},{min:2e4,max:20599,code:"DC",long:"Washington DC"},{min:98e3,max:99499,code:"WA",long:"Washington"},{min:24700,max:26999,code:"WV",long:"West Virginia"},{min:53e3,max:54999,code:"WI",long:"Wisconsin"},{min:82e3,max:83199,code:"WY",long:"Wyoming"}].filter((function(n){return n.min<=e&&n.max>=e}));return 0!==n.length&&(n.length>1&&console.error("Whoops found two states"),{code:n[0].code,long:n[0].long})}console.log("Must pass the zipcode as a string. -- Otherwise leading zeros could cause your zip code to be parsed outside base 10.")}(a).code,o=d.a.lookup(a),m=Object(t.useState)(u.a.tz(u()(),o).format("h:mm A")),h=Object(r.a)(m,2),p=h[0],g=h[1],b=Object(t.useRef)();Object(t.useEffect)((function(){g(u.a.tz(u()(),o).format("h:mm A")),setTimeout((function(){return b.current.slickGoTo(0)}),10);var e=setInterval((function(){g(u.a.tz(u()(),o).format("h:mm A"))}),6e4);return function(){clearInterval(e)}}),[o]);var O={},f="",w=!0;for(var N in n.list){var v=n.list[N],M=u.a.tz(v.dt_txt+"+0000",o),y=M.format("YYYY-MM-DD"),z=M.format("ddd, MMM Do"),k=M.format("h A"),C=Math.round(v.main.temp_min),A=Math.round(v.main.temp_max);if(w){var I=Math.round(v.main.temp),S=v.weather[0].icon,T=v.weather[0].main,D=v.pop;w=!1}y!==f&&(O[y]={},O[y].class_counts={},O[y].times=[],O[y].string=z,O[y].min=1e7,O[y].max=0),C<O[y].min&&(O[y].min=C),A>O[y].max&&(O[y].max=A),O[y].times.push({time:k,weather:v.weather[0],temp:Math.round(v.main.temp),pop:v.pop}),O[y].class_counts[v.weather[0].icon.slice(0,2)+"d"]||(O[y].class_counts[v.weather[0].icon.slice(0,2)+"d"]=0),M.hour()>6&&M.hour()<20&&(O[y].class_counts[v.weather[0].icon.slice(0,2)+"d"]+=1),f=y}var W=!0;window.addEventListener("wheel",(function(e){(e.deltaX/50>=.5||e.deltaX/50<=-.5)&&W?(W=!1,e.deltaX>0?b.current.slickNext():b.current.slickPrev()):W=!0}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"weather-header-wrapper",children:[Object(j.jsxs)("h2",{className:"weather-header",children:[i,", ",s]}),Object(j.jsx)("div",{class:"line-break"}),Object(j.jsx)("div",{className:"current-time",children:p}),Object(j.jsxs)("div",{className:"current-weather",children:[I,"\u02da"]}),Object(j.jsx)("img",{className:"current-icon",alt:T,src:c+S+"@2x.png"}),D>0?Object(j.jsxs)("span",{className:"precip-percent",children:[Math.round(100*D),"%"]}):""]}),Object(j.jsx)("div",{className:"day-container",children:Object(j.jsx)(x.a,Object(l.a)(Object(l.a)({ref:b},{dots:!0,variableWidth:!0,infinite:!1,slidesToShow:4,focusOnSelect:!1,arrows:!0,draggable:!0,rows:1,swipe:!0,responsive:[{breakpoint:4e4,settings:{slidesToShow:4}},{breakpoint:1490,settings:{slidesToShow:3}},{breakpoint:1168,settings:{slidesToShow:2}},{breakpoint:700,settings:{slidesToShow:1,variableWidth:!1}}]}),{},{className:"custom-weather-slider",children:Object.keys(O).map((function(e,n){return n<1e3?Object(j.jsxs)("div",{className:"day-wrapper",children:[Object(j.jsxs)("div",{className:"date-wrapper",children:[Object(j.jsx)("span",{className:"day-title",children:O[e].string}),Object(j.jsxs)("span",{className:"max-temp",children:[O[e].max,"\u02da"]}),Object(j.jsxs)("span",{className:"min-temp",children:[O[e].min,"\u02da"]}),Object(j.jsx)("img",{className:"daily-icon",alt:"daily-weather-icon",src:c+Object.keys(O[e].class_counts).reduce((function(n,a){return O[e].class_counts[n]>O[e].class_counts[a]?n:a}))+"@2x.png"})]}),O[e].times.map((function(n,a){return Object(j.jsx)("div",{className:"time-percent-wrapper",children:Object(j.jsxs)("div",{className:"time-wrapper",children:[Object(j.jsx)("span",{className:"hour-time",children:n.time}),Object(j.jsxs)("span",{className:"hour-temp",children:[n.temp,"\u02da"]}),Object(j.jsx)("img",{alt:n.weather.main,src:c+n.weather.icon+"@2x.png"}),n.pop>0?Object(j.jsxs)("span",{className:"precip-percent",children:[Math.round(100*n.pop),"%"]}):""]},e+"-"+a)})}))]},e):""}))}))})]})}var b=a(103),O=a(104),f=a(102),w=a(43),N=a.n(w),v=a(4),M=a(30),y=a.n(M);function z(){var e=Object(v.d)(),n=new URLSearchParams(e.location.search),a=Object(t.useState)(n.get("zip")||""),c=Object(r.a)(a,2),i=c[0],o=c[1],l=Object(t.useState)(null!==n.get("units")&&""!==n.get("units")?n.get("units"):"imperial"),m=Object(r.a)(l,2),d=m[0],h=m[1];Object(t.useEffect)((function(){i&&u(d)}),[]),Object(t.useEffect)((function(){i?y()(".zip-clear").css({display:"flex"}):y()(".zip-clear").css({display:"none"})}),[i]);function u(e){fetch("".concat("https://api.openweathermap.org/data/2.5/forecast","?zip=").concat(i,",us&temp_min&units=").concat(e,"&APPID=").concat("b8c57c1c1fe78770517a0b492af57a54")).then((function(e){return e.ok?e.json():""===i?Promise.reject("Please enter a zip code"):Promise.reject("Unrecognized zip code")})).then((function(e){return s.a.render(Object(j.jsx)(g,{weatherData:e,zipCode:i}),document.getElementById("weather-day-container"))})).catch((function(e){return s.a.render(Object(j.jsx)("div",{className:"weather-header-wrapper",children:Object(j.jsx)("h2",{className:"weather-header error",style:{"font-weight":"200"},children:e})}),document.getElementById("weather-day-container"))}))}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{className:"zip-form",onSubmit:function(a){a.preventDefault(),n.set("zip",i),e.push({search:n.toString()}),u(d)},children:[Object(j.jsxs)("div",{className:"zip-input-wrapper",children:[Object(j.jsx)("label",{className:"zip-label",children:Object(j.jsx)("input",{className:"zip-input",placeholder:"Zip Code",type:"text",onChange:function(e){o(e.target.value)},value:i,maxLength:"5"})}),Object(j.jsx)("div",{className:"zip-clear",onClick:function(a){a.preventDefault(),o(""),n.set("zip",""),e.push({search:n.toString()}),y()(".zip-input").focus()},children:Object(j.jsx)(N.a,{})})]}),Object(j.jsx)(f.a,{id:"zip-submit",type:"submit",children:"Check Weather"})]}),Object(j.jsxs)(O.a,{className:"unit-buttons",value:d,exclusive:!0,onChange:function(a,t){null!==t&&(n.set("units",t),h(t,u(t)),e.push({search:n.toString()}))},"aria-label":"temperature units",children:[Object(j.jsx)(b.a,{value:"imperial",children:"F\u02da"}),Object(j.jsx)(b.a,{value:"metric",children:"C\u02da"})]})]})}var k=function(){return Object(j.jsx)(o.a,{children:Object(j.jsxs)("div",{className:"outer-wrapper",children:[Object(j.jsx)("div",{className:"nav-border-wrapper",children:Object(j.jsxs)("div",{className:"nav-wrapper",children:[Object(j.jsxs)("h1",{children:[Object(j.jsx)("span",{className:"title-large",children:"WEATHER.BULLETIN"}),Object(j.jsx)("span",{className:"title-small",children:"W.B"})]}),Object(j.jsx)(z,{})]})}),Object(j.jsx)("div",{id:"weather-day-container"})]})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,105)).then((function(n){var a=n.getCLS,t=n.getFID,c=n.getFCP,i=n.getLCP,s=n.getTTFB;a(e),t(e),c(e),i(e),s(e)}))};a.p;s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),C()}},[[86,1,2]]]);
//# sourceMappingURL=main.ead1f701.chunk.js.map