webpackJsonp([1],[,,,,,,,,,,,,,,function(t,e,a){var s=a(26);$(document).on("click",".ivue-doc-code-toggle",function(){$(this).siblings(".ivue-doc-code-content").toggle()});var n=void 0;$(document).on("mouseenter",".ivue-doc-code-copy",function(){var t=$(this);n=new s(".ivue-doc-code-copy",{text:function(){return t.siblings(".ivue-doc-code-content").text()}})}),$(document).on("mouseleave",".ivue-doc-code-copy",function(){n&&n.destroy()})},function(t,e,a){"use strict";var s=a(2),n=a(91),i=a(77);a.n(i);s.a.use(n.a),e.a=new n.a({routes:[{path:"/",component:a(79)},{path:"/button",component:a(78)},{path:"/page",component:a(80)},{path:"*",redirect:"/"}]})},function(t,e,a){"use strict";var s=a(2),n=a(93);s.a.use(n.a);var i={count:0},l={INCREMENT:function(t){t.count++},DECREMENT:function(t){t.count--}},r={incrementAsync:function(t){var e=t.commit;setTimeout(function(){e("INCREMENT")},200)}},c=new n.a.Store({state:i,mutations:l,actions:r});e.a=c},function(t,e,a){"use strict";var s=a(82),n=a.n(s);n.a.install=function(t){t.component("page",n.a)},e.a=n.a},function(t,e){},function(t,e){},function(t,e,a){function s(t){a(75)}var n=a(0)(a(31),a(90),s,null,null);t.exports=n.exports},,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(2),n=a(20),i=a.n(n),l=a(15),r=a(16),c=a(21),o=(a.n(c),a(13)),u=a.n(o),v=a(18),p=(a.n(v),a(14)),g=(a.n(p),a(19)),_=(a.n(g),a(17));window.$=u.a,a.i(c.sync)(r.a,l.a),s.a.config.productionTip=!1,s.a.use(_.a),new s.a({el:"#app",router:l.a,store:r.a,template:"<App/>",components:{App:i.a}})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(76),n=a.n(s);e.default={components:{Basis:n.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{pageConfig:{pageSize:5,page:1,total:200}}},methods:{pageChange:function(){}}}},function(t,e){},function(t,e,a){"use strict";function s(t){return/^[1-9][0-9]*$/.test(t+"")}Object.defineProperty(e,"__esModule",{value:!0});e.default={name:"PageOption",props:{locale:{},pageSizeOpts:Array,showSizer:Boolean,showElevator:Boolean,current:Number,_current:Number,pageSize:Number,allPages:Number,isSmall:Boolean,placement:String},data:function(){return{currentPageSize:this.pageSize}},watch:{pageSize:function(t){this.currentPageSize=t}},computed:{size:function(){return this.isSmall?"small":"default"},optsClasses:function(){return["page-options"]},sizerClasses:function(){return["page-options-sizer"]},ElevatorClasses:function(){return["page-options-elevator"]}},methods:{changeSize:function(){this.$emit("on-size",this.currentPageSize)},changePage:function(t){var e=t.target.value.trim(),a=0;if(s(e)){if((e=Number(e))!=this.current){var n=this.allPages;a=e>n?n:e}}else a=1;a&&(this.$emit("on-page",a),t.target.value=a)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(41),n=a.n(s),i=a(42),l=a.n(i),r=a(81),c=a.n(r),o=function(t,e){for(var a=0;a<e.length;a++)if(t===e[a])return!0;return!1};e.default={name:"Page",components:{Options:c.a},props:{customLocale:{},current:{type:Number,default:1},total:{type:Number,default:0},pageSize:{type:Number,default:10},pageSizeOpts:{type:Array,default:function(){return[10,20,30,40]}},placement:{validator:function(t){return o(t,["top","bottom"])},default:"bottom"},size:{validator:function(t){return o(t,["small"])}},simple:{type:Boolean,default:!1},showTotal:{type:Boolean,default:!1},showElevator:{type:Boolean,default:!1},showSizer:{type:Boolean,default:!1},className:{type:String},styles:{type:Object}},data:function(){return{prefixCls:"page",currentPage:this.current,currentPageSize:this.pageSize,defaultLocale:{prev:"上一页",next:"下一页",total:"共",item:"条",items:"条",prev5:"向前 5 页",next5:"向后 5 页",page:"条/页",goto:"跳至",p:"页"}}},watch:{current:function(t){this.currentPage=t},pageSize:function(t){this.currentPageSize=t}},computed:{isSmall:function(){return!!this.size},locale:function(){return l()({},this.defaultLocale,this.customLocale)},allPages:function(){var t=Math.ceil(this.total/this.currentPageSize);return 0===t?1:t},simpleWrapClasses:function(){return["page","page-simple",n()({},""+this.className,!!this.className)]},simplePagerClasses:function(){return"page-simple-pager"},wrapClasses:function(){var t;return["page",(t={},n()(t,""+this.className,!!this.className),n()(t,"mini",!!this.size),t)]},prevClasses:function(){return["page-prev",n()({},"page-disabled",1===this.currentPage)]},nextClasses:function(){return["page-next",n()({},"page-disabled",this.currentPage===this.allPages)]},firstPageClasses:function(){return["page-item",n()({},"page-item-active",1===this.currentPage)]},lastPageClasses:function(){return["page-item",n()({},"page-item-active",this.currentPage===this.allPages)]}},methods:{changePage:function(t){this.currentPage!=t&&(this.currentPage=t,this.$emit("on-change",t))},prev:function(){var t=this.currentPage;if(t<=1)return!1;this.changePage(t-1)},next:function(){var t=this.currentPage;if(t>=this.allPages)return!1;this.changePage(t+1)},fastPrev:function(){var t=this.currentPage-5;t>0?this.changePage(t):this.changePage(1)},fastNext:function(){var t=this.currentPage+5;t>this.allPages?this.changePage(this.allPages):this.changePage(t)},onSize:function(t){this.currentPageSize=t,this.$emit("on-page-size-change",t),this.changePage(1)},onPage:function(t){this.changePage(t)},keyDown:function(t){var e=t.keyCode;e>=48&&e<=57||e>=96&&e<=105||8==e||37==e||39==e||t.preventDefault()},keyUp:function(t){var e=t.keyCode,a=parseInt(t.target.value);if(38===e)this.prev();else if(40===e)this.next();else if(13==e){var s=1;s=a>this.allPages?this.allPages:a<=0?1:a,t.target.value=s,this.changePage(s)}}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){function s(t){a(70)}var n=a(0)(a(36),a(83),s,null,null);t.exports=n.exports},function(t,e,a){function s(t){a(72)}var n=a(0)(a(32),a(85),s,"data-v-17760952",null);t.exports=n.exports},function(t,e,a){var s=a(0)(a(33),a(88),null,null,null);t.exports=s.exports},function(t,e,a){function s(t){a(73)}var n=a(0)(a(34),a(86),s,null,null);t.exports=n.exports},function(t,e,a){function s(t){a(71)}var n=a(0)(a(35),a(84),s,null,null);t.exports=n.exports},function(t,e,a){var s=a(0)(a(37),a(87),null,null,null);t.exports=s.exports},function(t,e,a){function s(t){a(74)}var n=a(0)(a(38),a(89),s,null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ivue-doc-demo"},[a("div",{staticClass:"ivue-doc-instance"},[a("button",{staticClass:"btn  btn-primary"},[t._v("按钮1")]),t._v(" "),a("button",{staticClass:"btn  btn-info"},[t._v("按钮1")]),t._v(" "),a("button",{staticClass:"btn  btn-danger"},[t._v("按钮1")]),t._v(" "),a("button",{staticClass:"btn  btn-warning"},[t._v("按钮1")]),t._v(" "),a("button",{staticClass:"btn  btn-default"},[t._v("按钮1")])]),a("div",{attrs:{id:"ivue-doc-text"}},[a("h1",{attrs:{id:"-"}},[t._v("按钮")]),t._v(" "),a("h2",{attrs:{id:"-1-"}},[t._v("普通 "),a("code",[t._v("1")]),t._v(" 按钮")])]),a("div",{staticClass:"ivue-doc-code"},[a("div",{staticClass:"ivue-doc-code-copy"},[t._v("copy")]),t._v(" "),a("div",{staticClass:"ivue-doc-code-toggle"},[t._v("toggle")]),t._v(" "),a("div",{staticClass:"ivue-doc-code-content"},[a("pre",[a("code",{staticClass:"lang-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"btn  btn-primary"')]),t._v(">")]),t._v("按钮1"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"btn  btn-info"')]),t._v(">")]),t._v("按钮1"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"btn  btn-danger"')]),t._v(">")]),t._v("按钮1"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"btn  btn-warning"')]),t._v(">")]),t._v("按钮1"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"btn  btn-default"')]),t._v(">")]),t._v("按钮1"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"undefined"},[t._v("\n\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page",{attrs:{total:t.pageConfig.total,"page-size":t.pageConfig.pageSize,current:t.pageConfig.page,"show-elevator":""},on:{"on-change":t.pageChange}}),t._v(" "),a("button",{staticClass:"btn  btn-primary"},[t._v("按钮")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"hello"})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-link",{attrs:{to:"/button"}},[t._v("按钮")]),t._v(" "),a("router-link",{attrs:{to:"/page"}},[t._v("分页")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showSizer||t.showElevator?a("div",{class:t.optsClasses},[t.showSizer?a("div",{class:t.sizerClasses},[a("div",{class:t.sizerClasses+"-select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.currentPageSize,expression:"currentPageSize"}],attrs:{size:t.size,placement:t.placement},on:{"on-change":t.changeSize,change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentPageSize=e.target.multiple?a:a[0]}}},t._l(t.pageSizeOpts,function(e){return a("option",{key:e,staticStyle:{"text-align":"center"},domProps:{value:e}},[t._v(t._s(e)+" ")])}))]),t._v("\n        "+t._s(t.locale.page)+"\n    ")]):t._e(),t._v(" "),t.showElevator?a("div",{class:t.ElevatorClasses},[t._v("\n        "+t._s(t.locale.goto)+"\n        "),a("input",{attrs:{type:"text"},domProps:{value:t._current},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.changePage(e)}}}),t._v("\n        "+t._s(t.locale.p)+"\n    ")]):t._e()]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("basis")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.simple?a("ul",{class:t.simpleWrapClasses,style:t.styles},[a("li",{class:t.prevClasses,attrs:{title:t.locale.prev},on:{click:t.prev}},[a("a",[t._v(t._s(t.locale.prev))])]),t._v(" "),a("div",{class:t.simplePagerClasses,attrs:{title:t.currentPage+"/"+t.allPages}},[a("input",{attrs:{type:"text"},domProps:{value:t.currentPage},on:{keydown:t.keyDown,keyup:t.keyUp,change:t.keyUp}}),t._v(" "),a("span",[t._v("/")]),t._v("\n        "+t._s(t.allPages)+"\n    ")]),t._v(" "),a("li",{class:t.nextClasses,attrs:{title:t.locale.next},on:{click:t.next}},[a("a",[t._v(t._s(t.locale.next))])])]):a("ul",{class:t.wrapClasses,style:t.styles},[t.showTotal?a("span",{class:[t.prefixCls+"-total"]},[t._t("default",[t._v(t._s(t.locale.total)+" "+t._s(t.total)+" "),t.total<=1?[t._v(t._s(t.locale.item))]:[t._v(t._s(t.locale.items))]])],2):t._e(),t._v(" "),a("li",{class:t.prevClasses,attrs:{title:t.locale.prev},on:{click:t.prev}},[a("a",[t._v(t._s(t.locale.prev))])]),t._v(" "),a("li",{class:t.firstPageClasses,attrs:{title:"1"},on:{click:function(e){t.changePage(1)}}},[a("a",[t._v("1")])]),t._v(" "),t.currentPage-3>1?a("li",{class:[t.prefixCls+"-item-jump-prev"],attrs:{title:t.locale.prev5},on:{click:t.fastPrev}},[a("a")]):t._e(),t._v(" "),t.currentPage-2>1?a("li",{class:[t.prefixCls+"-item"],attrs:{title:t.currentPage-2},on:{click:function(e){t.changePage(t.currentPage-2)}}},[a("a",[t._v(t._s(t.currentPage-2))])]):t._e(),t._v(" "),t.currentPage-1>1?a("li",{class:[t.prefixCls+"-item"],attrs:{title:t.currentPage-1},on:{click:function(e){t.changePage(t.currentPage-1)}}},[a("a",[t._v(t._s(t.currentPage-1))])]):t._e(),t._v(" "),1!=t.currentPage&&t.currentPage!=t.allPages?a("li",{class:[t.prefixCls+"-item",t.prefixCls+"-item-active"],attrs:{title:t.currentPage}},[a("a",[t._v(t._s(t.currentPage))])]):t._e(),t._v(" "),t.currentPage+1<t.allPages?a("li",{class:[t.prefixCls+"-item"],attrs:{title:t.currentPage+1},on:{click:function(e){t.changePage(t.currentPage+1)}}},[a("a",[t._v(t._s(t.currentPage+1))])]):t._e(),t._v(" "),t.currentPage+2<t.allPages?a("li",{class:[t.prefixCls+"-item"],attrs:{title:t.currentPage+2},on:{click:function(e){t.changePage(t.currentPage+2)}}},[a("a",[t._v(t._s(t.currentPage+2))])]):t._e(),t._v(" "),t.currentPage+3<t.allPages?a("li",{class:[t.prefixCls+"-item-jump-next"],attrs:{title:t.locale.next5},on:{click:t.fastNext}},[a("a")]):t._e(),t._v(" "),t.allPages>1?a("li",{class:t.lastPageClasses,attrs:{title:t.allPages},on:{click:function(e){t.changePage(t.allPages)}}},[a("a",[t._v(t._s(t.allPages))])]):t._e(),t._v(" "),a("li",{class:t.nextClasses,attrs:{title:t.locale.next},on:{click:t.next}},[a("a",[a("a",[t._v(t._s(t.locale.next))])])]),t._v(" "),a("Options",{attrs:{locale:t.locale,"show-sizer":t.showSizer,"page-size":t.currentPageSize,"page-size-opts":t.pageSizeOpts,placement:t.placement,"show-elevator":t.showElevator,_current:t.currentPage,current:t.currentPage,"all-pages":t.allPages,"is-small":t.isSmall},on:{"on-size":t.onSize,"on-page":t.onPage}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}}],[30]);
//# sourceMappingURL=app.d7c81379a617246cbeed.js.map