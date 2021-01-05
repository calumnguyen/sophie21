(this.webpackJsonpplayer=this.webpackJsonpplayer||[]).push([[0],{68:function(e,t,n){},69:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),o=n(32),i=n.n(o),s=n(33),l=n(34),u=n(40),d=n(39),p=n(37),g=n(3),m=n(9),h=n.n(m),j=n(12),b=n(5),v=n(11),O=n(15),y=n(13),f=function(e){var t=e.currentSong,n=e.setCurrentSong,r=e.isPlaying,c=e.setIsPlaying,o=e.audioRef,i=e.songs,s=e.setSongs,l=e.setSongInfo,u=e.songInfo,d=e.timeUpdateHandler,p=e.songEndHandler,g=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},m=function(e){var t=i.map((function(t){return t.id===e.id?Object(b.a)(Object(b.a)({},t),{},{active:!0}):Object(b.a)(Object(b.a)({},t),{},{active:!1})}));s(t)},v=function(){var e=Object(j.a)(h.a.mark((function e(a){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=i.findIndex((function(e){return e.id===t.id})),"skip-forward"!==a){e.next=5;break}return e.next=4,n(i[(c+1)%i.length]);case 4:m(i[(c+1)%i.length]);case 5:if("skip-back"!==a){e.next=17;break}if((c-1)%i.length!==-1){e.next=14;break}return e.next=9,n(i[i.length-1]);case 9:return m(i[i.length-1]),r&&o.current.play(),e.abrupt("return",Object(b.a)(Object(b.a)({},t),{},{active:!0}));case 14:return e.next=16,n(i[(c-1)%i.length]);case 16:m(i[(c-1)%i.length]);case 17:r&&o.current.play();case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f={transform:"translateX(".concat(u.animationPercentage,"%)")};return Object(a.jsxs)("div",{className:"player",children:[Object(a.jsxs)("div",{className:"time-control",children:[Object(a.jsx)("p",{children:g(u.currentTime)}),Object(a.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(t.color[0],", ").concat(t.color[1],")")},className:"track",children:[Object(a.jsx)("input",{min:0,max:u.duration||0,value:u.currentTime,type:"range",onChange:function(e){o.current.currentTime=e.target.value,l(Object(b.a)(Object(b.a)({},u),{},{currentTime:e.target.value}))}}),Object(a.jsx)("div",{className:"animate-track",style:f})]}),Object(a.jsx)("p",{children:u.duration?g(u.duration):"0:00"})]}),Object(a.jsxs)("div",{className:"play-control",children:[Object(a.jsx)(O.a,{onClick:function(){return v("skip-back")},icon:y.a,size:"2x",className:"skip-back"}),Object(a.jsx)(O.a,{icon:r?y.d:y.e,size:"2x",className:"play",onClick:function(){r?(o.current.pause(),c(!r)):(o.current.play(),c(!r))}}),Object(a.jsx)(O.a,{onClick:function(){return v("skip-forward")},icon:y.b,size:"2x",className:"skip-forward"})]}),Object(a.jsx)("audio",{onTimeUpdate:d,onLoadedMetadata:d,ref:o,src:t.audio,onEnded:p})]})},x=function(e){var t=e.currentSong;return Object(a.jsxs)("div",{className:"song-container",children:[Object(a.jsx)("img",{alt:t.name,src:t.cover}),Object(a.jsx)("h2",{style:{cursor:"default"},children:t.name}),Object(a.jsx)("h3",{style:{cursor:"default"},children:t.artist})]})},S=function(e){var t=e.id,n=e.song,r=e.songs,c=e.setSongs,o=(e.currentSong,e.setCurrentSong),i=e.audioRef,s=e.isPlaying,l=(e.setIsPlaying,function(){var e=Object(j.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(n),a=r.map((function(e){return e.id===t?Object(b.a)(Object(b.a)({},e),{},{active:!0}):Object(b.a)(Object(b.a)({},e),{},{active:!1})})),c(a),s&&i.current.play();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(a.jsxs)("div",{onClick:l,className:"library-container ".concat(n.active?"selected":" "),children:[Object(a.jsx)("img",{alt:n.name,src:n.cover}),Object(a.jsxs)("div",{className:"song-description",children:[Object(a.jsx)("h3",{children:n.name}),Object(a.jsx)("h4",{children:n.artist})]})]})},k=function(e){var t=e.libraryStatus,n=e.setLibraryStatus,r=e.songs,c=e.setSongs,o=e.currentSong,i=e.setCurrentSong,s=e.audioRef;e.isPlaying,e.setIsPlaying;return Object(a.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(o.color[0],", ").concat(o.color[1],")")},className:"library ".concat(t?"active-library":" "),children:[Object(a.jsx)("h2",{onClick:function(){return n(!t)},style:{cursor:"pointer"},children:"Library"}),Object(a.jsx)("div",{className:"library-song",children:r.map((function(e){return Object(a.jsx)(S,{id:e.id,songs:r,song:e,setSongs:c,currentSong:o,setCurrentSong:i,audioRef:s},e.id)}))})]})},w=n(35),N=n(36),C=n.n(N),I="https://sophie21.herokuapp.com/api/auth",M="accessToken";function R(){return(R=Object(j.a)(h.a.mark((function e(t,n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.post(I,{email:t,password:n});case 3:a=e.sent,localStorage.setItem(M,a.data.accessToken),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),alert("User Not Found",e.t0),console.error("Error loggin in",e.t0);case 11:return e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var T={login:function(e,t){return R.apply(this,arguments)},loginWithJwt:function(e){localStorage.setItem(M,e)},logout:function(){localStorage.removeItem(M)},getCurrentUser:function(){try{var e=localStorage.getItem(M);return Object(w.a)(e)}catch(t){return null}}},_=function(e){var t=e.libraryStatus,n=e.setLibraryStatus,r=e.currentSong,c=T.getCurrentUser();return Object(a.jsxs)("nav",{style:{color:"".concat(r.color[0])},className:"navbar navbar-light bg-light",children:[Object(a.jsx)("h4",{id:"logo",children:" Sophie'21 "}),Object(a.jsx)("h4",{style:{cursor:"default"},children:c?"Happy 21 ".concat(c.name," \ud83c\udf8a"):""}),Object(a.jsxs)("button",{onClick:function(){return n(!t)},children:["Library",Object(a.jsx)(O.a,{icon:y.c})]}),Object(a.jsx)("button",{onClick:function(){return T.logout(),void(window.location.href="/login")},children:"Logout"})]})},A=(n(68),n(75));var F=function(){return[{id:Object(A.a)(),name:"FROM: Mum",artist:"TO: Sophie",cover:"https://res.cloudinary.com/calumnguyen/image/upload/v1609643707/michellesophie_wyiyzn.png",color:["#949cdf","#f6ecf0"],audio:"https://res.cloudinary.com/calumnguyen/video/upload/v1609642377/MichelleRuppAudio_cjcmfh.mp3",active:!0},{id:Object(A.a)(),name:"FROM: Dad",artist:"TO: Sophie",cover:"https://res.cloudinary.com/calumnguyen/image/upload/v1609708585/niksophie_mi6liv.png",color:["#e5707e","#a3ddcb"],audio:"https://res.cloudinary.com/calumnguyen/video/upload/v1609707430/NikAudio_xftylz.mp3",active:!1},{id:Object(A.a)(),name:"FROM: Grandpa & Granny",artist:"TO: Sophie",cover:"https://res.cloudinary.com/calumnguyen/image/upload/v1609714196/granmasoph_zeg2g6.png",color:["#f5b461","#f3eac2"],audio:"https://res.cloudinary.com/calumnguyen/video/upload/v1609713792/GrandpaGrandmaAudio_b2eocv.mp3",active:!1},{id:Object(A.a)(),name:"FROM: Claire, Steve and Alannah",artist:"TO: Sophie",cover:"https://res.cloudinary.com/calumnguyen/image/upload/v1609716366/clairealannahsoph_nnfxob.png",color:["#28abb9","#2d6187"],audio:"https://res.cloudinary.com/calumnguyen/video/upload/v1609715970/ClaireAlaanahSteveAudio_m5d04a.mp3",active:!1},{id:Object(A.a)(),name:"FROM: Corrie",artist:"TO: Sophie",cover:"https://res.cloudinary.com/calumnguyen/image/upload/v1609717711/corriesoph_ud16pt.png",color:["#fa7f72","#ebebeb"],audio:"https://res.cloudinary.com/calumnguyen/video/upload/v1609717597/CorrieAudio_t7qouu.mp3",active:!1},{id:Object(A.a)(),name:"FROM: Granny",artist:"TO: Sophie",cover:"https://res.cloudinary.com/calumnguyen/image/upload/v1609819028/SusanSoph_ohusab.png",color:["#6f9eaf","#d4e2d4"],audio:"https://res.cloudinary.com/calumnguyen/video/upload/v1609820086/GrannyAudio_tyjavj.mp3",active:!1},{id:Object(A.a)(),name:"FROM: Fergus",artist:"TO: Sophie",cover:"https://res.cloudinary.com/calumnguyen/image/upload/v1609827216/NolanSOph_q5bp3d.png",color:["#70af85","#c6ebc9"],audio:"https://res.cloudinary.com/calumnguyen/video/upload/v1609828425/FergusAudio_dbwgll.mp3",active:!1},{id:Object(A.a)(),name:"FROM: Sarah",artist:"TO: Sophie",cover:"https://res.cloudinary.com/calumnguyen/image/upload/v1609827216/SarahSoph_eevdpg.png",color:["#ea97ad","#f3f2da"],audio:"https://res.cloudinary.com/calumnguyen/video/upload/v1609828424/SarahAudio_mflo0c.mp3",active:!1},{id:Object(A.a)(),name:"FROM: Siobhan",artist:"TO: Sophie",cover:"https://res.cloudinary.com/calumnguyen/image/upload/v1609827054/siobhanSoph_yc5nzp.png",color:["#00917c","#fde8cd"],audio:"https://res.cloudinary.com/calumnguyen/video/upload/v1609827069/SiobhanAudio_ykuhu7.mp3",active:!1},{id:Object(A.a)(),name:"FROM: Alexandria",artist:"TO: Sophie",cover:"https://res.cloudinary.com/calumnguyen/image/upload/v1609824351/Alexandria_kk7rqo.png",color:["#00917c","#fde8cd"],audio:"https://res.cloudinary.com/calumnguyen/video/upload/v1609733635/AlexandriaAudio_tuzdgs.mp3",active:!1},{id:Object(A.a)(),name:"FROM: Ryan",artist:"TO: Sophie",cover:"https://res.cloudinary.com/calumnguyen/image/upload/v1609818763/RyanSoph_iyymq0.png",color:["#a685e2","#ffe6e6"],audio:"https://res.cloudinary.com/calumnguyen/video/upload/v1609818677/RyanAudio_mdiftk.mp3",active:!1},{id:Object(A.a)(),name:"FROM: Beth",artist:"TO: Sophie",cover:"https://res.cloudinary.com/calumnguyen/image/upload/v1609821235/BethSoph_rrzemw.png",color:["#008891","#e7e7de"],audio:"https://res.cloudinary.com/calumnguyen/video/upload/v1609822509/BethSoph_llpi25.mp3",active:!1}]};var P=function(){var e=Object(r.useState)(F()),t=Object(v.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(n[0]),i=Object(v.a)(o,2),s=i[0],l=i[1],u=Object(r.useState)(!1),d=Object(v.a)(u,2),p=d[0],g=d[1],m=Object(r.useState)(!1),O=Object(v.a)(m,2),y=O[0],S=O[1],w=Object(r.useState)({currentTime:0,duration:0,animationPercentage:0}),N=Object(v.a)(w,2),C=N[0],I=N[1],M=Object(r.useRef)(null),R=function(){var e=Object(j.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.findIndex((function(e){return e.id===s.id})),e.next=3,l(n[(t+1)%n.length]);case 3:p&&M.current.play();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"App ".concat(y?"library-active":""),children:[Object(a.jsx)(_,{libraryStatus:y,setLibraryStatus:S,currentSong:s}),Object(a.jsx)(x,{currentSong:s}),Object(a.jsx)(f,{songInfo:C,setSongInfo:I,songs:n,setSongs:c,audioRef:M,currentSong:s,setCurrentSong:l,isPlaying:p,setIsPlaying:g,timeUpdateHandler:function(e){var t=e.target.currentTime,n=e.target.duration,a=Math.round(t),r=Math.round(n),c=Math.round(a/r*100);I(Object(b.a)(Object(b.a)({},C),{},{currentTime:t,duration:n,animationPercentage:c}))},songEndHandler:R}),Object(a.jsx)(k,{songInfo:C,setSongInfo:I,libraryStatus:y,setLibraryStatus:S,isPlaying:p,setIsPlaying:g,audioRef:M,songs:n,setSongs:c,currentSong:s,setCurrentSong:l})]})};n(69),n.p;function L(){var e=Object(r.useState)(""),t=Object(v.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(""),s=Object(v.a)(i,2),l=s[0],u=s[1];return Object(a.jsx)(c.a.Fragment,{children:Object(a.jsx)("div",{className:"login-container p-0 d-inline-flex",style:{height:"100vh",alignItems:"center",width:"100%",backgroundImage:"linear-gradient(to right,#0088b6,#009de4)"},children:Object(a.jsx)("div",{className:"col-12 pl-0 pr-0 setHeightWrap",style:{display:"inline-flex",alignItems:"center",height:"80vh"},children:Object(a.jsx)("div",{className:"col-12 p-0",style:{textAlign:"-webkit-center",height:"100%"},children:Object(a.jsx)("div",{className:"col-lg-9 col-md-10 col-sm-10 col-xs-12 pl-0 pr-0",style:{height:"100%",background:"#fff"},children:Object(a.jsxs)("div",{id:"backgimg",className:"row m-0 ",style:{height:"100%"},children:[Object(a.jsx)("div",{className:"col-lg-6 col-md-6  col-sm-6 col-xs-12 p-0",style:{height:"100%",textAlign:"left"}}),Object(a.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12 login-form-2 alignItemss",style:{display:"flex",alignItems:"center"},children:Object(a.jsxs)("div",{className:"col-12",children:[Object(a.jsx)("div",{className:"row m-0",children:Object(a.jsx)("div",{className:"col-12",children:Object(a.jsx)("h2",{style:{color:"#2c81c0",lineHeight:2},children:"User Login"})})}),Object(a.jsx)("div",{className:"row m-0",children:Object(a.jsx)("div",{className:"col-12",children:Object(a.jsxs)("div",{className:"form-group",style:{display:"inline-flex",alignItems:"center"},children:[Object(a.jsx)("svg",{style:{position:"relative",left:"30px"},xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"#0062cc",class:"bi bi-envelope-fill",viewBox:"0 0 16 16",children:Object(a.jsx)("path",{d:"M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"})}),Object(a.jsx)("input",{className:"login-inputs",type:"email",value:n,onChange:function(e){return o(e.target.value)},placeholder:"Email",autoComplete:"true",required:!0})]})})}),Object(a.jsx)("div",{className:"col-12",children:Object(a.jsxs)("div",{className:"form-group",style:{display:"inline-flex",alignItems:"center"},children:[Object(a.jsx)("svg",{style:{position:"relative",left:"30px"},xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"#0062cc",class:"bi bi-lock-fill",viewBox:"0 0 16 16",children:Object(a.jsx)("path",{d:"M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"})}),Object(a.jsx)("input",{className:"login-inputs",style:{borderRadius:"35px"},type:"password",value:l,onChange:function(e){return u(e.target.value)},placeholder:"Password",autoComplete:"true",required:!0})]})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("button",{className:"btnSubmit",onClick:function(e){return function(e){e.preventDefault();try{n.length>0&&l.length>0?T.login(n,l).then((function(){window.location="/home"})).catch((function(e){return console.error(e)})):alert("Please enter correct username and password!")}catch(t){alert("Invalid username or password, please try again!"),console.log("Error logging in: ".concat(t))}}(e)},children:"Login"})})]})})]})})})})})})}var z=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(c.a.Fragment,{children:Object(a.jsx)(p.a,{children:Object(a.jsx)("main",{className:" p-0 m-0",children:Object(a.jsxs)(g.d,{children:[!T.getCurrentUser()&&Object(a.jsx)(g.b,{path:"/login",component:L}),T.getCurrentUser()&&Object(a.jsx)(g.b,{path:"/home",component:P}),T.getCurrentUser()&&Object(a.jsx)(g.a,{from:"/",to:"/home"}),!T.getCurrentUser()&&Object(a.jsx)(g.a,{from:"/",to:"/login"})]})})})})}}]),n}(r.Component),U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};n(72);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(z,{})}),document.getElementById("root")),U()}},[[73,1,2]]]);
//# sourceMappingURL=main.a2c1dc1e.chunk.js.map