(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{181:function(t,e,r){},182:function(t,e){},186:function(t,e,r){"use strict";var n=r(5),i=r(38).filter,a=r(59),s=r(31),o=a("filter"),c=s("filter");n({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},187:function(t,e,r){"use strict";var n=r(181);r.n(n).a},188:function(t,e,r){"use strict";var n=r(182),i=r.n(n);e.default=i.a},190:function(t,e,r){"use strict";r.r(e);r(141),r(142),r(186);var n={data:function(){return{activeAnchor:"",observer:null}},computed:{page:function(){return this.$page.markdownPage},headings:function(){return this.page.headings.filter((function(t){return t.depth>1}))}},watch:{$route:function(){window.location.hash&&(this.activeAnchor=window.location.hash),this.observer.disconnect(),this.$nextTick(this.initObserver)}},methods:{observerCallback:function(t,e){if(!(t.length>1)){var r=t[0].target.id;r&&(this.activeAnchor="#"+r,history.replaceState&&history.replaceState(null,null,"#"+r))}},initObserver:function(){this.observer=new IntersectionObserver(this.observerCallback,{rootMargin:"0px 0px 99999px",threshold:1});for(var t=document.querySelectorAll(".content h2, .content h3, .content h4, .content h5, .content h6"),e=0;e<t.length;e++)this.observer.observe(t[e])}},mounted:function(){window.location.hash&&(this.activeAnchor=window.location.hash),this.$nextTick(this.initObserver)}},i=r(14),a=Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-8 sm:pl-4 md:pl-6 md:pt-12 lg:pl-8 sm:pb-16 sm:border-l border-ui-border md:mt-0"},[r("h3",{staticClass:"pt-0 mt-0 text-sm tracking-wide uppercase border-none"},[t._v("On this page")]),r("div",[r("ul",t._l(t.headings,(function(e,n){var i;return r("li",{key:""+t.page.path+e.anchor,class:(i={"border-t border-dashed border-ui-border pt-2 mt-2":n>0&&2===e.depth,"font-semibold":2===e.depth},i["depth-"+e.depth]=!0,i)},[r("g-link",{staticClass:"relative flex items-center py-1 text-sm transition transform hover:translate-x-1",class:{"pl-2":3===e.depth,"pl-3":4===e.depth,"pl-4":5===e.depth,"pl-5":6===e.depth,"font-bold text-ui-primary":t.activeAnchor===e.anchor},attrs:{to:""+t.page.path+e.anchor}},[r("span",{staticClass:"absolute w-2 h-2 -ml-3 rounded-full opacity-0 bg-ui-primary transition transform scale-0 origin-center",class:{"opacity-100 scale-100":t.activeAnchor===e.anchor}}),t._v("\n          "+t._s(e.value)+"\n        ")])],1)})),0)])])}),[],!1,null,null,null).exports,s=(r(143),r(58),r(21)),o={components:{ArrowLeftIcon:s.a,ArrowRightIcon:s.c},computed:{page:function(){return this.$page.markdownPage},pages:function(){return this.$page.allMarkdownPage.edges.map((function(t){return t.node}))},next:function(){var t=this;return!(this.pages&&!this.page.next)&&this.pages.find((function(e){return e.path===t.page.next}))},prev:function(){var t=this;return!(this.pages&&!this.page.prev)&&this.pages.find((function(e){return e.path===t.page.prev}))}}},c={components:{OnThisPage:a,NextPrevLinks:Object(i.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"flex flex-col sm:flex-row justify-between items-center"},[t.prev?r("g-link",{staticClass:"mb-4 sm:mb-0 flex items-center mr-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors",attrs:{to:t.prev.path}},[r("ArrowLeftIcon",{staticClass:"mr-2",attrs:{size:"1x"}}),t._v("\n      "+t._s(t.prev.title)+"\n    ")],1):t._e(),t.next?r("g-link",{staticClass:"flex items-center ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors",attrs:{to:t.next.path}},[t._v("\n      "+t._s(t.next.title)+"\n      "),r("ArrowRightIcon",{staticClass:"ml-2",attrs:{size:"1x"}})],1):t._e()],1)])}),[],!1,null,null,null).exports},metaInfo:function(){var t=this.$page.markdownPage.title,e=this.$page.markdownPage.description||this.$page.markdownPage.excerpt;return{title:t,meta:[{name:"description",content:e},{key:"og:title",name:"og:title",content:t},{key:"twitter:title",name:"twitter:title",content:t},{key:"og:description",name:"og:description",content:e},{key:"twitter:description",name:"twitter:description",content:e}]}}},l=(r(187),r(188)),p=Object(i.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"flex flex-wrap items-start justify-start"},[e("div",{staticClass:"order-2 w-full md:w-1/3 sm:pl-4 md:pl-6 lg:pl-8 sticky",staticStyle:{top:"4rem"}},[e("OnThisPage")],1),e("div",{staticClass:"order-1 w-full md:w-2/3"},[e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"content",domProps:{innerHTML:this._s(this.$page.markdownPage.content)}}),e("div",{staticClass:"mt-8 pt-8 lg:mt-12 lg:pt-12 border-t border-ui-border"},[e("NextPrevLinks")],1)])])])}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(p);e.default=p.exports}}]);