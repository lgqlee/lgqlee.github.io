webpackJsonp([1,2],{0:function(t,e,n){n(84);var i=n(2)(n(906),n(72),null,null);t.exports=i.exports},17:function(t,e,n){n(83);var i=n(2)(n(911),n(71),"data-v-54bfd554",null);t.exports=i.exports},18:function(t,e,n){n(79);var i=n(2)(n(912),n(67),"data-v-13555697",null);t.exports=i.exports},19:function(t,e,n){n(85);var i=n(2)(n(913),n(73),"data-v-c1708f26",null);t.exports=i.exports},20:function(t,e,n){n(86);var i=n(2)(n(914),n(74),"data-v-f5c470b4",null);t.exports=i.exports},28:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i="getUserInfo"},3:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r});var i="setUserInfo",r="getUserInfo"},31:function(t,e,n){n(78);var i=n(2)(n(907),n(66),null,null);t.exports=i.exports},33:function(t,e,n){"use strict";function i(t){t.forEach(function(t){a.a.mock(t.path,t.data)})}var r=n(60),a=n.n(r);i(n(915).a);a.a},34:function(t,e,n){"use strict";function i(t){return"m-"+t.match(/(\w*)\.vue/)[1].toLowerCase()}var r=n(5),a=n.n(r),o=n(925);o.keys().map(function(t){a.a.component(i(t),o(t))})},35:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(920);n.d(e,"getLastTimeStr",function(){return r});var r=function(t,e){return e?i.a(t):i.b(new Date,"yyyy-MM-dd hh:mm")}},36:function(t,e,n){"use strict";function i(t){var e=["name","path","alias","redirect","meta","query"],r=c.a.pick(e)(t);return r.component=n(926)("./"+t.router),r.children=c.a.map(i)(t.children),r}var r=n(5),a=n.n(r),o=n(875),s=n(29),c=n.n(s),u=n(59);n.n(u);a.a.use(o.a);var l=c.a.map(i)(u.ROUTERS);e.a=new o.a({mode:"history",routes:l,scrollBehavior:function(t,e,n){return n?n:{x:0,y:0}}})},37:function(t,e,n){"use strict";var i=n(5),r=n.n(i),a=n(21),o=n(917),s=n(918),c=n(919);r.a.use(a.a),e.a=new a.a.Store({actions:o,getters:s,modules:{user:c.a},strict:0})},57:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAArCAYAAAB4pah1AAABvElEQVRIS+1XUU7CQBScB/jvDeQG4g3wBB6B7gmExDYhQMQAIaEf4gm23oAbiDeoN8Ab+C/wTAvFUrbdrSkkJvSzfTuZ9zpvOiUUfFEW3tCVTTA1QKiFdQyfQV7PabyknVMC9p/lZeWb3nZAydMMf3nBt/2W+Eo+UgIOXOkT6DpzGgy/61g3WsDRRFpMJE1GS8yi4wgvXnvA0IhdhKBgeQA4dD02YRfVdG1rD+P4gHlaZvBHzxYbSW0vBUPZBOjZrG1udW0xzQQMNFheYq6TjYpdAKzU4Wgia2uClwYagJUYVscRvlaHUcGWaZMAC6CrzX3+ZMBbVTBVbUkqQ7P5qasyzeEvwMcFDPZ4DbojoAZCVWMOCwZ8KtGs+9B43dOh1q50vcfsLGw5z3akYm+NgkJXNt4MLdUWFcIuZmeU1650HM+Augnpn/+DGRapw8B4i9+UcJcnckpE9/qRp1cw+Klni/7OD8djWV2XUTeNITu7YhalFebttlgoPwF5V/H0yeHMUKskg5ciF79JIRvPKH0NXNkn0KOWWvhTsBFzYelrVUE9mXFOl76CNoJPLANWFOuY+Z0Is2TIjLf8A9QO7iQnwWsyAAAAAElFTkSuQmCC"},58:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAcCAYAAAATFf3WAAAAaUlEQVRYR+2VwQ3AIAzEyKYs0V+f/Fiim7bqDNZJETL/I8aJQq39vKPxKQFhd/obhA+MxyteARYQEAocGtQgNUDz8UV9XxPNuYDnG6RDnM6jAU7D/fcLSC1rUIPUAM3HvzoBqQGab9/iDywGJY3D7k1WAAAAAElFTkSuQmCC"},59:function(t,e){t.exports={ROUTERS:[{name:"login",title:"login",path:"/login",router:"login"},{name:"index",title:"index",path:"/",router:"index",meta:{requiresAuth:!1}},{name:"land",title:"land",path:"/land",router:"land",meta:{requiresAuth:!1}}]}},61:function(t,e,n){n(77);var i=n(2)(n(908),n(65),"data-v-0cc29964",null);t.exports=i.exports},62:function(t,e,n){n(82);var i=n(2)(n(909),n(70),"data-v-34ceb87d",null);t.exports=i.exports},63:function(t,e,n){n(81);var i=n(2)(n(910),n(69),"data-v-2d25fa6a",null);t.exports=i.exports},64:function(t,e,n){n(80);var i=n(2)(null,n(68),"data-v-1b26c324",null);t.exports=i.exports},65:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},66:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},67:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},staticRenderFns:[]}},68:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"loaders"},[n("span",{staticClass:"loader loader-double"}),t._v(" 加载中...")])}]}},69:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("img",{staticClass:"logo",attrs:{src:n(58)}}),i("div",{staticClass:"text"},[t._v("BLOCKS")]),i("img",{staticClass:"icon",attrs:{src:n(57)}})])}]}},70:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box",class:t.type,on:{click:t.clickBox}},[n("div",{staticClass:"content"},[n("span",[t._v("12")]),n("icon",{staticClass:"icon",attrs:{name:"list"}})],1),n("p",{staticClass:"tag"},[t._v("Links ")])])},staticRenderFns:[]}},71:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body",attrs:{id:"boxWrap"}},t._l(t.boxes,function(e){return n("m-box",{key:e.index,staticClass:"box",attrs:{type:e.type,href:e.href},nativeOn:{click:function(n){t.normalToSpecia(e.index)}}})}))},staticRenderFns:[]}},72:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon?n("path",{attrs:{d:t.icon.d}}):t._e()])],2)},staticRenderFns:[]}},73:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[n("m-header"),n("div",{staticClass:"main"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],attrs:{type:"text",placeholder:"随便写一个"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}}),n("div",{staticClass:"button",on:{click:function(e){e.preventDefault(),t.login(e)}}},[t._v("登录")])]),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"base"},[n("div",{staticClass:"title"},[n("span",[t._v("Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. ")])]),n("div",{staticClass:"pagination"},[n("div",{staticClass:"item"}),n("div",{staticClass:"item"}),n("div",{staticClass:"item"})])])}]}},74:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},staticRenderFns:[]}},77:function(t,e){},78:function(t,e){},79:function(t,e){},80:function(t,e){},81:function(t,e){},82:function(t,e){},83:function(t,e){},84:function(t,e){},85:function(t,e){},86:function(t,e){},906:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(873),r={};e.default={name:"icon",props:{name:{type:String,validator:function(t){return t?t in r:null}},scale:[Number,String],spin:Boolean,inverse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(n.i(i.a)('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse}},icon:function(){return this.name?r[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},width:function(){return this.childrenWidth||this.icon&&this.icon.width/112*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/112*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,n=0;this.$children.forEach(function(t){e=Math.max(e,t.width),n=Math.max(n,t.height)}),this.childrenWidth=e,this.childrenHeight=n,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(n-t.height)/2})}},register:function(t){for(var e in t)r[e]=t[e]},icons:r}},907:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",mounted:function(){setTimeout(function(){document.getElementById("loaders").style.display="none"},500)}}},908:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},909:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{isLeave:!1}},methods:{mouseOut:function(){console.log("out")},clickBox:function(){return!1}},props:{type:{type:String,default:"normal"},bg:{type:String,default:""},href:{type:String,default:""}}}},910:function(t,e){},911:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(29),r=n.n(i);n(21);e.default={data:function(){return{size:120,all:0,col:-1,row:-1,allCol:-1,allRow:-1,boxes:[],specias:[{index:5,href:"land"}]}},mounted:function(){this.initWrap(),window.addEventListener("resize",r.a.debounce(200)(this.initWrap))},methods:{initWrap:function(){var t=this.size,e=document.getElementById("app").clientWidth,n=document.getElementById("app").clientHeight,i=Math.floor(e/t),r=Math.floor(n/t),a=Math.ceil(e/t),o=Math.ceil(n/t);document.getElementById("boxWrap").style.width=a*t+"px",this.col=i,this.row=r,this.allCol=a,this.allRow=o,this.all=a*o,this.checkSpeciaIndex(),this.createNormal(),this.createDisabled(),this.createSpecia()},createNormal:function(){for(var t=this.all,e=[],n=0;n<t;n++)e.push({index:n,type:"normal"});return this.boxes=e},createSpecia:function(){var t=this.boxes,e=this.specias;e.forEach(function(e){var n=e.index;t[n].type="specia",t[n].href=e.href}),this.specias=e,this.boxes=t},createDisabled:function(){var t=this.col,e=this.row,n=this.allCol,i=this.allRow,r=this.boxes;(t<n||e<i)&&(r.forEach(function(i){(i.index%n==t||i.index>t*e+1)&&(r[i.index].type="disabled")}),this.boxes=r)},checkSpeciaIndex:function(){var t=this.specias,e=this.col;return e<this.allCol?t.map(function(t){var n=t.index;return t.index=n+Math.floor(n/e),t}):t},normalToSpecia:function(t){var e=this.boxes;return"disabled"===e[t].type?void 0:(e[t].type="specia",this.boxes=e)}}}},912:function(t,e){},913:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(903),r=n.n(i),a=n(916),o=n(3);e.default={data:function(){return{input:""}},methods:{login:function(){var t=this;this.input?a.a().then(function(e){e.data&&(t.$store.dispatch(o.a,e.data),window.sessionStorage.setItem("userInfo",r()(e.data)),t.$router.push("/"))}).catch(function(t){return alert("获取用户信息失败: "+t)}):alert("email不能为空")}}}},914:function(t,e){},915:function(t,e,n){"use strict";var i=n(28);n.d(e,"a",function(){return r});var r=[{path:i.a,data:{name:"molysama",age:16}}]},916:function(t,e,n){"use strict";var i=n(39),r=n.n(i),a=n(28);n.d(e,"a",function(){return o});var o=function(){return r()({method:"get",url:a.a})}},917:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(3)},918:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(3)},919:function(t,e,n){"use strict";var i=n(905),r=n.n(i),a=n(3),o={userInfo:{}},s=r()({},a.b,function(t){return t.userInfo}),c=r()({},a.a,function(t,e){(0,t.commit)(a.a,e)}),u=r()({},a.a,function(t,e){t.userInfo=e});e.a={state:o,getters:s,actions:c,mutations:u}},920:function(t,e,n){"use strict";var i=n(11),r=n.n(i),a=n(76),o=n.n(a);n.d(e,"b",function(){return s}),n.d(e,"a",function(){return c});var s=function(t,e){var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};return/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),r()(n).forEach(function(t){new RegExp("("+t+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?n[t]:("00"+n[t]).substr(""+n[t]).length))}),e},c=function(t){var e="";return null!==t&&""!==t&&(e=(new o.a).format(t,"zh_CN")),e}},925:function(t,e,n){function i(t){return n(r(t))}function r(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var a={"./Hello.vue":61,"./box.vue":62,"./header.vue":63,"./loading.vue":64};i.keys=function(){return Object.keys(a)},i.resolve=r,t.exports=i,i.id=925},926:function(t,e,n){function i(t){return n(r(t))}function r(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var a={"./index":17,"./index.vue":17,"./land":18,"./land.vue":18,"./login":19,"./login.vue":19,"./template":20,"./template.vue":20};i.keys=function(){return Object.keys(a)},i.resolve=r,t.exports=i,i.id=926},927:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),r=n.n(i),a=n(5),o=n.n(a),s=n(31),c=n.n(s),u=n(36),l=n(30),f=n.n(l),d=(n(32),n(0)),h=n.n(d),v=n(35),p=(n(34),n(33),n(3)),m=n(37);o.a.component("icon",h.a),r()(v).forEach(function(t){return o.a.filter(t,v[t])}),f.a.attach(document.body),window.sessionStorage.userInfo&&m.a.dispatch(p.a,JSON.parse(window.sessionStorage.userInfo)),u.a.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requiresAuth})?m.a.state.user.userInfo.name?n():n({path:"/login"}):n()}),new o.a({el:"#app",router:u.a,template:"<App/>",components:{App:c.a},store:m.a})}},[927]);
//# sourceMappingURL=app.df326f1430f422c2e6aa.js.map