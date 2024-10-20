import{_ as Ce}from"./Cz67AHIL.js";import{_ as Te}from"./lM2Kb5YG.js";import{_ as Oe}from"./DlAUqK2U.js";import{o as b,c as w,a as s,b as A,w as P,d as ce,g as B,r as d,h as V,i as S,j as Ee,n as De,k as Ie,l as $,m as ae,q as Ae,s as M,v as T,F as L,x as H,y as Ve,z as Pe,A as Le,B as U,C as Be,D as re,E as Re,f as Ge,t as oe}from"./DGioSND3.js";const Xe={},Ye={class:"grid w-full md:grid-cols-2 gap-8"},qe={class:"col-start-1 col-end-3 row-start-1 row-end-1 h-[65dvh]"},Fe=s("div",{class:"col-start-1 col-end-2 row-start-1 row-end-1 bg-gradient-to-r via-primary-900/50 via-70% from-primary-900"},null,-1),He={class:"col-start-1 col-end-1 row-start-1 flex items-center justify-center px-8 md:px-0"},Ue={class:"max-w-lg mx-auto"},We=s("h1",{class:"font-bold text-4xl md:text-6xl text-transparent bg-gradient-to-r from-orange-500 to-primary-500 bg-clip-text inline-block text-shadow font-body"}," Valfleur Garden ",-1),Qe=s("p",{class:"font-light text-white text-balance text-base md:text-xl my-6"}," Fiori e piante scelti con cura, addobbi floreali per eventi, giardini e terrazzi ",-1);function Je(e,i){const t=Ce,r=Te;return b(),w("div",Ye,[s("div",qe,[A(t,{src:"/hero.jpg",alt:"",class:"w-full h-full object-cover object-right"})]),Fe,s("div",He,[s("div",Ue,[We,Qe,A(r,{to:"/servizi",class:"border-2 text-primary-500 border-primary-700 hover:bg-primary-600/60 bg-primary-600/20 transition-all rounded-lg px-4 md:px-6 py-1 md:py-2 inline-block"},{default:P(()=>[ce(" Scopri i nostri servizi ")]),_:1})])])])}const Ke=Oe(Xe,[["render",Je]]);/**
 * Vue 3 Carousel 0.3.3
 * (c) 2024
 * @license MIT
 */const h={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},ke={itemsToShow:{default:h.itemsToShow,type:Number},itemsToScroll:{default:h.itemsToScroll,type:Number},wrapAround:{default:h.wrapAround,type:Boolean},throttle:{default:h.throttle,type:Number},snapAlign:{default:h.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:h.transition,type:Number},breakpoints:{default:h.breakpoints,type:Object},autoplay:{default:h.autoplay,type:Number},pauseAutoplayOnHover:{default:h.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:h.mouseDrag,type:Boolean},touchDrag:{default:h.touchDrag,type:Boolean},dir:{default:h.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:h.i18n,type:Object},settings:{default(){return{}},type:Object}};function Ze({config:e,slidesCount:i}){const{snapAlign:t,wrapAround:r,itemsToShow:l=1}=e;if(r)return Math.max(i-1,0);let o;switch(t){case"start":o=i-l;break;case"end":o=i-1;break;case"center":case"center-odd":o=i-Math.ceil((l-.5)/2);break;case"center-even":o=i-Math.ceil(l/2);break;default:o=0;break}return Math.max(o,0)}function et({config:e,slidesCount:i}){const{wrapAround:t,snapAlign:r,itemsToShow:l=1}=e;let o=0;if(t||l>i)return o;switch(r){case"start":o=0;break;case"end":o=l-1;break;case"center":case"center-odd":o=Math.floor((l-1)/2);break;case"center-even":o=Math.floor((l-2)/2);break;default:o=0;break}return o}function se({val:e,max:i,min:t}){return i<t?e:Math.min(Math.max(e,t),i)}function tt({config:e,currentSlide:i,slidesCount:t}){const{snapAlign:r,wrapAround:l,itemsToShow:o=1}=e;let v=i;switch(r){case"center":case"center-odd":v-=(o-1)/2;break;case"center-even":v-=(o-2)/2;break;case"end":v-=o-1;break}return l?v:se({val:v,max:t-o,min:0})}function ze(e){return e?e.reduce((i,t)=>{var r;return t.type===L?[...i,...ze(t.children)]:((r=t.type)===null||r===void 0?void 0:r.name)==="CarouselSlide"?[...i,t]:i},[]):[]}function le({val:e,max:i,min:t=0}){return e>i?le({val:e-(i+1),max:i,min:t}):e<t?le({val:e+(i+1),max:i,min:t}):e}function it(e,i){let t;return i?function(...r){const l=this;t||(e.apply(l,r),t=!0,setTimeout(()=>t=!1,i))}:e}function nt(e,i){let t;return function(...r){t&&clearTimeout(t),t=setTimeout(()=>{e(...r),t=null},i)}}function at(e="",i={}){return Object.entries(i).reduce((t,[r,l])=>t.replace(`{${r}}`,String(l)),e)}var ot=B({name:"ARIA",setup(){const e=T("config",V(Object.assign({},h))),i=T("currentSlide",d(0)),t=T("slidesCount",d(0));return()=>M("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},at(e.i18n.itemXofY,{currentSlide:i.value+1,slidesCount:t.value}))}}),rt=B({name:"Carousel",props:ke,setup(e,{slots:i,emit:t,expose:r}){var l;const o=d(null),v=d([]),c=d(0),f=d(0),a=V(Object.assign({},h));let m=Object.assign({},h),_;const u=d((l=e.modelValue)!==null&&l!==void 0?l:0),O=d(0),ue=d(0),z=d(0),E=d(0);let N,W;S("config",a),S("slidesCount",f),S("currentSlide",u),S("maxSlide",z),S("minSlide",E),S("slideWidth",c);function Q(){_=Object.assign({},e.breakpoints),m=Object.assign(Object.assign(Object.assign({},m),e),{i18n:Object.assign(Object.assign({},m.i18n),e.i18n),breakpoints:void 0}),de(m)}function R(){if(!_||!Object.keys(_).length)return;const n=Object.keys(_).map(p=>Number(p)).sort((p,y)=>+y-+p);let g=Object.assign({},m);n.some(p=>{const y=window.matchMedia(`(min-width: ${p}px)`).matches;return y&&(g=Object.assign(Object.assign({},g),_[p])),y}),de(g)}function de(n){Object.entries(n).forEach(([g,p])=>a[g]=p)}const me=nt(()=>{R(),G(),D()},16);function D(){if(!o.value)return;const n=o.value.getBoundingClientRect();c.value=n.width/a.itemsToShow}function G(){f.value<=0||(ue.value=Math.ceil((f.value-1)/2),z.value=Ze({config:a,slidesCount:f.value}),E.value=et({config:a,slidesCount:f.value}),a.wrapAround||(u.value=se({val:u.value,max:z.value,min:E.value})))}Ee(()=>{De(()=>D()),setTimeout(()=>D(),1e3),R(),ge(),window.addEventListener("resize",me,{passive:!0}),t("init")}),Ie(()=>{W&&clearTimeout(W),N&&clearInterval(N),window.removeEventListener("resize",me,{passive:!0})});let x=!1;const X={x:0,y:0},Y={x:0,y:0},k=V({x:0,y:0}),q=d(!1),J=d(!1),Ne=()=>{q.value=!0},$e=()=>{q.value=!1};function pe(n){["INPUT","TEXTAREA","SELECT"].includes(n.target.tagName)||(x=n.type==="touchstart",x||n.preventDefault(),!(!x&&n.button!==0||j.value)&&(X.x=x?n.touches[0].clientX:n.clientX,X.y=x?n.touches[0].clientY:n.clientY,document.addEventListener(x?"touchmove":"mousemove",fe,!0),document.addEventListener(x?"touchend":"mouseup",ve,!0)))}const fe=it(n=>{J.value=!0,Y.x=x?n.touches[0].clientX:n.clientX,Y.y=x?n.touches[0].clientY:n.clientY;const g=Y.x-X.x,p=Y.y-X.y;k.y=p,k.x=g},a.throttle);function ve(){const n=a.dir==="rtl"?-1:1,g=Math.sign(k.x)*.4,p=Math.round(k.x/c.value+g)*n;if(p&&!x){const y=Se=>{window.removeEventListener("click",y,!0)};window.addEventListener("click",y,!0)}C(u.value-p),k.x=0,k.y=0,J.value=!1,document.removeEventListener(x?"touchmove":"mousemove",fe,!0),document.removeEventListener(x?"touchend":"mouseup",ve,!0)}function ge(){!a.autoplay||a.autoplay<=0||(N=setInterval(()=>{a.pauseAutoplayOnHover&&q.value||F()},a.autoplay))}function he(){N&&(clearInterval(N),N=null),ge()}const j=d(!1);function C(n){const g=a.wrapAround?n:se({val:n,max:z.value,min:E.value});u.value===g||j.value||(t("slide-start",{slidingToIndex:n,currentSlideIndex:u.value,prevSlideIndex:O.value,slidesCount:f.value}),j.value=!0,O.value=u.value,u.value=g,W=setTimeout(()=>{if(a.wrapAround){const p=le({val:g,max:z.value,min:0});p!==u.value&&(u.value=p,t("loop",{currentSlideIndex:u.value,slidingToIndex:n}))}t("update:modelValue",u.value),t("slide-end",{currentSlideIndex:u.value,prevSlideIndex:O.value,slidesCount:f.value}),j.value=!1,he()},a.transition))}function F(){C(u.value+a.itemsToScroll)}function K(){C(u.value-a.itemsToScroll)}const _e={slideTo:C,next:F,prev:K};S("nav",_e),S("isSliding",j);const xe=$(()=>tt({config:a,currentSlide:u.value,slidesCount:f.value}));S("slidesToScroll",xe);const Me=$(()=>{const n=a.dir==="rtl"?-1:1,g=xe.value*c.value*n;return{transform:`translateX(${k.x-g}px)`,transition:`${j.value?a.transition:0}ms`,margin:a.wrapAround?`0 -${f.value*c.value}px`:"",width:"100%"}});function be(){Q(),R(),G(),D(),he()}Object.keys(ke).forEach(n=>{["modelValue"].includes(n)||ae(()=>e[n],be)}),ae(()=>e.modelValue,n=>{n!==u.value&&C(Number(n))}),ae(f,G),t("before-init"),Q();const we={config:a,slidesCount:f,slideWidth:c,next:F,prev:K,slideTo:C,currentSlide:u,maxSlide:z,minSlide:E,middleSlide:ue};r({updateBreakpointsConfigs:R,updateSlidesData:G,updateSlideWidth:D,initDefaultConfigs:Q,restartCarousel:be,slideTo:C,next:F,prev:K,nav:_e,data:we});const Z=i.default||i.slides,ee=i.addons,ye=V(we);return()=>{const n=ze(Z==null?void 0:Z(ye)),g=(ee==null?void 0:ee(ye))||[];n.forEach((te,ie)=>te.props.index=ie);let p=n;if(a.wrapAround){const te=n.map((ne,I)=>Ae(ne,{index:-n.length+I,isClone:!0,key:`clone-before-${I}`})),ie=n.map((ne,I)=>Ae(ne,{index:n.length+I,isClone:!0,key:`clone-after-${I}`}));p=[...te,...n,...ie]}v.value=n,f.value=Math.max(n.length,1);const y=M("ol",{class:"carousel__track",style:Me.value,onMousedownCapture:a.mouseDrag?pe:null,onTouchstartPassiveCapture:a.touchDrag?pe:null},p),Se=M("div",{class:"carousel__viewport"},y);return M("section",{ref:o,class:{carousel:!0,"is-sliding":j.value,"is-dragging":J.value,"is-hover":q.value,"carousel--rtl":a.dir==="rtl"},dir:a.dir,"aria-label":a.i18n.ariaGallery,tabindex:"0",onMouseenter:Ne,onMouseleave:$e},[Se,g,M(ot)])}}}),je;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(je||(je={}));var st=B({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:i}){const t=T("config",V(Object.assign({},h))),r=T("currentSlide",d(0)),l=T("slidesToScroll",d(0)),o=T("isSliding",d(!1)),v=$(()=>e.index===r.value),c=$(()=>e.index===r.value-1),f=$(()=>e.index===r.value+1),a=$(()=>{const m=Math.floor(l.value),_=Math.ceil(l.value+t.itemsToShow-1);return e.index>=m&&e.index<=_});return()=>{var m;return M("li",{style:{width:`${100/t.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":a.value,"carousel__slide--active":v.value,"carousel__slide--prev":c.value,"carousel__slide--next":f.value,"carousel__slide--sliding":o.value},"aria-hidden":!a.value},(m=i.default)===null||m===void 0?void 0:m.call(i,{isActive:v.value,isClone:e.isClone,isPrev:c.value,isNext:f.value,isSliding:o.value,isVisible:a.value}))}}});const lt={class:""},ct={class:"flex items-center"},ut={class:"flex gap-2 mx-auto mt-4"},dt=["onClick"],mt=B({__name:"Gallery",props:{items:{},config:{}},setup(e){const i=d(0);return(t,r)=>{const l=st,o=rt;return b(),w("div",lt,[A(o,Le(t.config,{modelValue:U(i),"onUpdate:modelValue":r[0]||(r[0]=v=>Be(i)?i.value=v:null),class:"w-full",autoplay:5e3,"items-to-show":1,"wrap-around":!0,"pause-autoplay-on-hover":!0}),{default:P(()=>[(b(!0),w(L,null,H(t.items,(v,c)=>(b(),Ve(l,{key:c},{default:P(()=>[Pe(t.$slots,"item",{item:v,index:c})]),_:2},1024))),128))]),_:3},16,["modelValue"]),s("div",ct,[s("ul",ut,[(b(!0),w(L,null,H(t.items,(v,c)=>(b(),w("li",{key:c},[s("button",{class:re(["w-3 h-3 transition-all duration-700 rounded-full bg-primary-300",{active:U(i)===c}]),"aria-label":"Call to action",onClick:Re(f=>i.value=c,["prevent"])},null,10,dt)]))),128))])])])}}}),pt={class:"grid md:grid-cols-2 gap-6 md:gap-16 pb-12 md:py-24"},ft=s("div",{class:"prose max-w-md text-balance md:py-12 px-8 md:px-0"},[s("h2",{class:"text-5xl text-primary-500"}," Chi siamo "),s("p",{class:"text-pretty"},[s("strong",null,"Valfleur"),ce(" offre ai propri clienti un vasto assortimento di fiori recisi e in vaso, piante ornamentali, da interno ed esterno, vasi in ceramica, vetro e plastica, accessori per la casa e idee regalo. Siamo un punto di riferimento per la creazione di stupendi bouquet e composizioni di mazzi di fiori recisi. Realizziamo addobbi floreali di grande eleganza per festeggiamenti, celebrazioni religiose, civili, eventi e ricorrenze. ")])],-1),vt={class:"py-12 bg-primary-50 flex items-center justify-center px-8 md:px-0"},gt={class:""},ht=s("div",{class:"col-span-full text-center"},[s("h2",{class:""}," I nostri punti di forza ")],-1),_t={class:"grid md:grid-cols-3 max-w-6xl w-full mx-auto gap-6"},xt={class:"p-8 text-center font-bold text-xl"},bt={class:"px-6 py-4 md:py-12 justify-center bg-neutral-100"},wt={class:"max-w-4xl mx-auto"},yt=s("h2",{class:"w-full text-center md:text-left"}," Cosa offriamo ",-1),St={class:"w-full flex flex-col md:flex-row justify-between px-4 py-8 gap-4 md:gap-24"},At={class:"text-xl md:text-3xl mb-8 font-body text-primary-500"},kt={class:"flex flex-col gap-1 md:gap-4 list-disc ml-4 text-sm"},Nt=B({__name:"index",setup(e){const{$seo:i}=Ge();i("Benvenuti","Valfleur offre ai propri clienti un vasto assortimento di fiori recisi e in vaso, piante ornamentali, da interno ed esterno, vasi in ceramica, vetro e plastica, accessori per la casa e idee regalo.","/hero.jpg");const t=d([{title:"Professionalità",img:"/professionalita.jpg"},{title:"Esperienza",img:"/esperienza.jpg"},{title:"Qualità",img:"/qualita.jpg"}]),r=d([{img:"/composizioni.jpg",name:"Fiori e composizioni",children:["Fiori freschi recisi","Bouquet","Ghirlande","Composizioni originali","Corone di laurea"]},{img:"/servizi_speciali.jpg",name:"Servizi speciali",children:["Addobbi floreali","Servizi per matrimoni","Allestimenti per eventi","Decori e arredi floreali"]},{img:"/piante_tropicali.jpg",name:"Piante da appartamento",children:["Piante tropicali","Piante da interni pendenti","Piante profumate","Piante resistenti per appartamenti","Piante che vivono con poca luce"]},{img:"/giardino_verticale.jpg",name:"Giardini e terrazzi",children:["Assistenza alla progettazione","Manutenzione giardini e terrazzi","Giardini verticali","Giardini sempreverdi","Terrazzi con piante"]}]);return(l,o)=>{const v=Ke,c=Ce,f=Te,a=mt;return b(),w("main",null,[A(v),s("div",pt,[A(c,{format:"webp",src:"/chi_siamo.jpg",class:"w-full max-h-[50vh] object-cover md:object-contain md:object-right md:rounded-lg"}),ft]),s("section",vt,[s("div",gt,[ht,s("ul",_t,[(b(!0),w(L,null,H(U(t),(m,_)=>(b(),w("li",{key:_,class:"card"},[A(c,{format:"webp",src:m.img,class:"w-full h-64 aspect-square object-cover rounded-t-md"},null,8,["src"]),s("div",xt,oe(m.title),1)]))),128))])])]),s("section",bt,[s("div",wt,[yt,A(a,{items:U(r)},{item:P(({item:m,index:_})=>[s("div",St,[s("div",{class:re(["w-full md:w-1/3 h-48 md:h-96",{"md:order-last ":_%2===0}])},[A(c,{format:"webp",src:m.img,class:"md:aspect-square w-full md:w-auto h-full object-center object-cover rounded-lg shadow-md"},null,8,["src"])],2),s("div",{class:re(["text-left flex-grow",{"md:-order-first":_%2===1}])},[s("h3",At,oe(m.name),1),s("ul",kt,[(b(!0),w(L,null,H(m.children,(u,O)=>(b(),w("li",{key:O},oe(u),1))),128))]),A(f,{to:`/servizi#${m.name}`,class:"mt-12 font-bold underline inline-block"},{default:P(()=>[ce(" Scopri di più ")]),_:2},1032,["to"])],2)])]),_:1},8,["items"])])])])}}});export{Nt as default};
