(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/+cc":function(e,t,a){
/*!
 * Fuse.js v3.6.1 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
e.exports=function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=a(1),i=a(7),h=i.get,c=(i.deepValue,i.isArray),s=function(){function e(t,a){var n=a.location,r=void 0===n?0:n,o=a.distance,i=void 0===o?100:o,c=a.threshold,s=void 0===c?.6:c,d=a.maxPatternLength,l=void 0===d?32:d,u=a.caseSensitive,p=void 0!==u&&u,v=a.tokenSeparator,f=void 0===v?/ +/g:v,g=a.findAllMatches,m=void 0!==g&&g,b=a.minMatchCharLength,y=void 0===b?1:b,k=a.id,M=void 0===k?null:k,x=a.keys,_=void 0===x?[]:x,S=a.shouldSort,w=void 0===S||S,P=a.getFn,I=void 0===P?h:P,A=a.sortFn,C=void 0===A?function(e,t){return e.score-t.score}:A,L=a.tokenize,E=void 0!==L&&L,O=a.matchAllTokens,D=void 0!==O&&O,B=a.includeMatches,T=void 0!==B&&B,j=a.includeScore,N=void 0!==j&&j,R=a.verbose,z=void 0!==R&&R;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:i,threshold:s,maxPatternLength:l,isCaseSensitive:p,tokenSeparator:f,findAllMatches:m,minMatchCharLength:y,id:M,keys:_,includeMatches:T,includeScore:N,shouldSort:w,getFn:I,sortFn:C,verbose:z,tokenize:E,matchAllTokens:D},this.setCollection(t),this._processKeys(_)}var t,a;return t=e,(a=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,a=e.length;t<a;t+=1){var n=e[t];this._keyWeights[n]=1,this._keyNames.push(n)}else{for(var r=null,o=null,i=0,h=0,c=e.length;h<c;h+=1){var s=e[h];if(!s.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var d=s.name;if(this._keyNames.push(d),!s.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var l=s.weight;if(l<0||l>1)throw new Error('"weight" property in key must bein the range of [0, 1)');o=null==o?l:Math.max(o,l),r=null==r?l:Math.min(r,l),this._keyWeights[d]=l,i+=l}if(i>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var a=this._prepareSearchers(e),n=a.tokenSearchers,r=a.fullSearcher,o=this._search(n,r);return this._computeScore(o),this.options.shouldSort&&this._sort(o),t.limit&&"number"==typeof t.limit&&(o=o.slice(0,t.limit)),this._format(o)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var a=e.split(this.options.tokenSeparator),n=0,r=a.length;n<r;n+=1)t.push(new o(a[n],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=this.list,n={},r=[];if("string"==typeof a[0]){for(var o=0,i=a.length;o<i;o+=1)this._analyze({key:"",value:a[o],record:o,index:o},{resultMap:n,results:r,tokenSearchers:e,fullSearcher:t});return r}for(var h=0,c=a.length;h<c;h+=1)for(var s=a[h],d=0,l=this._keyNames.length;d<l;d+=1){var u=this._keyNames[d];this._analyze({key:u,value:this.options.getFn(s,u),record:s,index:h},{resultMap:n,results:r,tokenSearchers:e,fullSearcher:t})}return r}},{key:"_analyze",value:function(e,t){var a=this,n=e.key,r=e.arrayIndex,o=void 0===r?-1:r,i=e.value,h=e.record,s=e.index,d=t.tokenSearchers,l=void 0===d?[]:d,u=t.fullSearcher,p=t.resultMap,v=void 0===p?{}:p,f=t.results,g=void 0===f?[]:f;!function e(t,r,o,i){if(null!=r)if("string"==typeof r){var h=!1,s=-1,d=0;a._log("\nKey: ".concat(""===n?"--":n));var p=u.search(r);if(a._log('Full text: "'.concat(r,'", score: ').concat(p.score)),a.options.tokenize){for(var f=r.split(a.options.tokenSeparator),m=f.length,b=[],y=0,k=l.length;y<k;y+=1){var M=l[y];a._log('\nPattern: "'.concat(M.pattern,'"'));for(var x=!1,_=0;_<m;_+=1){var S=f[_],w=M.search(S),P={};w.isMatch?(P[S]=w.score,h=!0,x=!0,b.push(w.score)):(P[S]=1,a.options.matchAllTokens||b.push(1)),a._log('Token: "'.concat(S,'", score: ').concat(P[S]))}x&&(d+=1)}s=b[0];for(var I=b.length,A=1;A<I;A+=1)s+=b[A];s/=I,a._log("Token score average:",s)}var C=p.score;s>-1&&(C=(C+s)/2),a._log("Score average:",C);var L=!a.options.tokenize||!a.options.matchAllTokens||d>=l.length;if(a._log("\nCheck Matches: ".concat(L)),(h||p.isMatch)&&L){var E={key:n,arrayIndex:t,value:r,score:C};a.options.includeMatches&&(E.matchedIndices=p.matchedIndices);var O=v[i];O?O.output.push(E):(v[i]={item:o,output:[E]},g.push(v[i]))}}else if(c(r))for(var D=0,B=r.length;D<B;D+=1)e(D,r[D],o,i)}(o,i,h,s)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,a=!!Object.keys(t).length,n=0,r=e.length;n<r;n+=1){for(var o=e[n],i=o.output,h=i.length,c=1,s=0;s<h;s+=1){var d=i[s],l=d.key,u=a?t[l]:1,p=0===d.score&&t&&t[l]>0?Number.EPSILON:d.score;c*=Math.pow(p,u)}o.score=c,this._log(o)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var a=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===n(t)&&null!==t){if(-1!==a.indexOf(t))return;a.push(t)}return t}),2)),a=null}var r=[];this.options.includeMatches&&r.push((function(e,t){var a=e.output;t.matches=[];for(var n=0,r=a.length;n<r;n+=1){var o=a[n];if(0!==o.matchedIndices.length){var i={indices:o.matchedIndices,value:o.value};o.key&&(i.key=o.key),o.hasOwnProperty("arrayIndex")&&o.arrayIndex>-1&&(i.arrayIndex=o.arrayIndex),t.matches.push(i)}}})),this.options.includeScore&&r.push((function(e,t){t.score=e.score}));for(var o=0,i=e.length;o<i;o+=1){var h=e[o];if(this.options.id&&(h.item=this.options.getFn(h.item,this.options.id)[0]),r.length){for(var c={item:h.item},s=0,d=r.length;s<d;s+=1)r[s](h,c);t.push(c)}else t.push(h.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&r(t.prototype,a),e}();e.exports=s},function(e,t,a){function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=a(2),o=a(3),i=a(6),h=function(){function e(t,a){var n=a.location,r=void 0===n?0:n,o=a.distance,h=void 0===o?100:o,c=a.threshold,s=void 0===c?.6:c,d=a.maxPatternLength,l=void 0===d?32:d,u=a.isCaseSensitive,p=void 0!==u&&u,v=a.tokenSeparator,f=void 0===v?/ +/g:v,g=a.findAllMatches,m=void 0!==g&&g,b=a.minMatchCharLength,y=void 0===b?1:b,k=a.includeMatches,M=void 0!==k&&k;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:h,threshold:s,maxPatternLength:l,isCaseSensitive:p,tokenSeparator:f,findAllMatches:m,includeMatches:M,minMatchCharLength:y},this.pattern=p?t:t.toLowerCase(),this.pattern.length<=l&&(this.patternAlphabet=i(this.pattern))}var t,a;return t=e,(a=[{key:"search",value:function(e){var t=this.options,a=t.isCaseSensitive,n=t.includeMatches;if(a||(e=e.toLowerCase()),this.pattern===e){var i={isMatch:!0,score:0};return n&&(i.matchedIndices=[[0,e.length-1]]),i}var h=this.options,c=h.maxPatternLength,s=h.tokenSeparator;if(this.pattern.length>c)return r(e,this.pattern,s);var d=this.options,l=d.location,u=d.distance,p=d.threshold,v=d.findAllMatches,f=d.minMatchCharLength;return o(e,this.pattern,this.patternAlphabet,{location:l,distance:u,threshold:p,findAllMatches:v,minMatchCharLength:f,includeMatches:n})}}])&&n(t.prototype,a),e}();e.exports=h},function(e,t){var a=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,r=new RegExp(t.replace(a,"\\$&").replace(n,"|")),o=e.match(r),i=!!o,h=[];if(i)for(var c=0,s=o.length;c<s;c+=1){var d=o[c];h.push([e.indexOf(d),d.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:h}}},function(e,t,a){var n=a(4),r=a(5);e.exports=function(e,t,a,o){for(var i=o.location,h=void 0===i?0:i,c=o.distance,s=void 0===c?100:c,d=o.threshold,l=void 0===d?.6:d,u=o.findAllMatches,p=void 0!==u&&u,v=o.minMatchCharLength,f=void 0===v?1:v,g=o.includeMatches,m=void 0!==g&&g,b=h,y=e.length,k=l,M=e.indexOf(t,b),x=t.length,_=[],S=0;S<y;S+=1)_[S]=0;if(-1!==M){var w=n(t,{errors:0,currentLocation:M,expectedLocation:b,distance:s});if(k=Math.min(w,k),-1!==(M=e.lastIndexOf(t,b+x))){var P=n(t,{errors:0,currentLocation:M,expectedLocation:b,distance:s});k=Math.min(P,k)}}M=-1;for(var I=[],A=1,C=x+y,L=1<<(x<=31?x-1:30),E=0;E<x;E+=1){for(var O=0,D=C;O<D;)n(t,{errors:E,currentLocation:b+D,expectedLocation:b,distance:s})<=k?O=D:C=D,D=Math.floor((C-O)/2+O);C=D;var B=Math.max(1,b-D+1),T=p?y:Math.min(b+D,y)+x,j=Array(T+2);j[T+1]=(1<<E)-1;for(var N=T;N>=B;N-=1){var R=N-1,z=a[e.charAt(R)];if(z&&(_[R]=1),j[N]=(j[N+1]<<1|1)&z,0!==E&&(j[N]|=(I[N+1]|I[N])<<1|1|I[N+1]),j[N]&L&&(A=n(t,{errors:E,currentLocation:R,expectedLocation:b,distance:s}))<=k){if(k=A,(M=R)<=b)break;B=Math.max(1,2*b-M)}}if(n(t,{errors:E+1,currentLocation:b,expectedLocation:b,distance:s})>k)break;I=j}var F={isMatch:M>=0,score:0===A?.001:A};return m&&(F.matchedIndices=r(_,f)),F}},function(e,t){e.exports=function(e,t){var a=t.errors,n=void 0===a?0:a,r=t.currentLocation,o=void 0===r?0:r,i=t.expectedLocation,h=void 0===i?0:i,c=t.distance,s=void 0===c?100:c,d=n/e.length,l=Math.abs(h-o);return s?d+l/s:l?1:d}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=[],n=-1,r=-1,o=0,i=e.length;o<i;o+=1){var h=e[o];h&&-1===n?n=o:h||-1===n||((r=o-1)-n+1>=t&&a.push([n,r]),n=-1)}return e[o-1]&&o-n>=t&&a.push([n,o-1]),a}},function(e,t){e.exports=function(e){for(var t={},a=e.length,n=0;n<a;n+=1)t[e.charAt(n)]=0;for(var r=0;r<a;r+=1)t[e.charAt(r)]|=1<<a-r-1;return t}},function(e,t){var a=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},n=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},r=function(e){return"string"==typeof e},o=function(e){return"number"==typeof e};e.exports={get:function(e,t){var i=[];return function e(t,h){if(h){var c=h.indexOf("."),s=h,d=null;-1!==c&&(s=h.slice(0,c),d=h.slice(c+1));var l=t[s];if(null!=l)if(d||!r(l)&&!o(l))if(a(l))for(var u=0,p=l.length;u<p;u+=1)e(l[u],d);else d&&e(l,d);else i.push(n(l))}else i.push(t)}(e,t),i},isArray:a,isString:r,isNum:o,toString:n}}])},wQbG:function(e,t,a){"use strict";a.r(t);a("FNk8");var n=a("/+cc"),r=a.n(n),o=a("CjXH"),i={components:{ChevronRightIcon:o.d,SearchIcon:o.j},data:()=>({query:"",focusIndex:-1,focused:!1}),computed:{results(){return new r.a(this.headings,{keys:["value"],threshold:.25}).search(this.query).slice(0,15)},headings(){let e=[];return this.$static.allMarkdownPage.edges.map(e=>e.node).forEach(t=>{t.headings.forEach(a=>{e.push({...a,path:t.path,title:t.title})})}),e},showResult(){return this.focused&&this.query.length>0}},methods:{increment(){this.focusIndex<this.results.length-1&&this.focusIndex++},decrement(){this.focusIndex>=0&&this.focusIndex--},go(){if(0===this.results.length)return;let e;e=-1===this.focusIndex?this.results[0]:this.results[this.focusIndex],this.$router.push(e.path+e.anchor),this.$refs.input.blur(),this.query=""}}},h=a("KHd+"),c=a("Kw5r");const{computed:s}=c.a.config.optionMergeStrategies,d={allMarkdownPage:{edges:[{node:{id:"12493f69bf65e7fc9bcc5e0b8c31d16d",path:"/bpm-concept/workflow/",title:"워크플로우",headings:[{depth:1,value:"워크플로우",anchor:"#워크플로우"},{depth:2,value:"1. 워크플로우 개념과 유형",anchor:"#1-워크플로우-개념과-유형"},{depth:2,value:"2. 워크플로우 구성 요소",anchor:"#2-워크플로우-구성-요소"},{depth:2,value:"3. 워크플로우 참조 모델",anchor:"#3-워크플로우-참조-모델"}]}},{node:{id:"6adbef562f21c42b92bdbc644d323329",path:"/bpm-concept/workflow-management-system/",title:"워크플로우 관리 시스템과 RTE BPM",headings:[{depth:1,value:"워크플로우 관리 시스템과 RTE BPM",anchor:"#워크플로우-관리-시스템과-rte-bpm"},{depth:2,value:"1. 워크플로우 관리 시스템 (WFMS)",anchor:"#1-워크플로우-관리-시스템-wfms"},{depth:2,value:"2. RTE (Real Time Enterprise)",anchor:"#2-rte-real-time-enterprise"},{depth:2,value:"3. BPM 역할과 향후 방향",anchor:"#3-bpm-역할과-향후-방향"},{depth:2,value:"4. BPM 시스템 예",anchor:"#4-bpm-시스템-예"}]}},{node:{id:"74a04a7011efcc5acd6229f7f7535c04",path:"/bpm-concept/open-source/",title:"오픈소스 BPMS uEngine 소개",headings:[{depth:1,value:"오픈소스 BPMS uEngine 소개",anchor:"#오픈소스-bpms-uengine-소개"}]}},{node:{id:"0605da7148a96c2096323c5d0e463830",path:"/bpm-concept/facebook/",title:"Facebook group",headings:[{depth:1,value:"Facebook group",anchor:"#facebook-group"}]}},{node:{id:"a6152efd9493440ea57fc0fc59f6d8bf",path:"/getting-started/soa-architecture/",title:"SOA (MSA) 아키텍처 예제",headings:[{depth:1,value:"SOA (MSA) 아키텍처 예제",anchor:"#soa-msa-아키텍처-예제"},{depth:2,value:"서비스 시나리오",anchor:"#서비스-시나리오"},{depth:2,value:"서비스 디컴퍼지션",anchor:"#서비스-디컴퍼지션"},{depth:2,value:"Registry & API Gateway 서비스",anchor:"#registry--api-gateway-서비스"},{depth:2,value:"설치 필요한 프로그램",anchor:"#설치-필요한-프로그램"},{depth:2,value:"테스트 과정",anchor:"#테스트-과정"}]}},{node:{id:"0760887bd278ab87514ee0b23640be7d",path:"/getting-started/soa-architecture-event/",title:"SOA (MSA) 아키텍처 예제 - Event",headings:[{depth:1,value:"SOA (MSA) 아키텍처 예제 - Event",anchor:"#soa-msa-아키텍처-예제---event"},{depth:2,value:"예제 영상",anchor:"#예제-영상"},{depth:2,value:"1. 동기 방식의 App 연동 시 문제점",anchor:"#1-동기-방식의-app-연동-시-문제점"},{depth:2,value:"2. 비동기 방식의 App 연동",anchor:"#2-비동기-방식의-app-연동"},{depth:3,value:"2.1 연동 원칙",anchor:"#21-연동-원칙"},{depth:3,value:"2.2 예제 시나리오",anchor:"#22-예제-시나리오"},{depth:3,value:"2.3 애플리케이션(Publisher)",anchor:"#23-애플리케이션publisher"},{depth:3,value:"2.4 Message Broker",anchor:"#24-message-broker"},{depth:3,value:"2.5 BPM(Subscriber)",anchor:"#25-bpmsubscriber"},{depth:4,value:"2.6 비동기 연동의 회복성",anchor:"#26-비동기-연동의-회복성"},{depth:2,value:"3. 프로세스 모델링",anchor:"#3-프로세스-모델링"},{depth:3,value:"3.1 프로세스 변수 설정",anchor:"#31-프로세스-변수-설정"},{depth:3,value:"3.2 외부 어플리케이션 연동",anchor:"#32-외부-어플리케이션-연동"},{depth:4,value:"3.2.1 App 화면 설정",anchor:"#321-app-화면-설정"},{depth:4,value:"3.2.2 이벤트정의 설정",anchor:"#322-이벤트정의-설정"},{depth:4,value:"3.2.3 이벤트 속성",anchor:"#323-이벤트-속성"},{depth:4,value:"3.2.4 이벤트 매핑",anchor:"#324-이벤트-매핑"},{depth:2,value:"4. 실행",anchor:"#4-실행"},{depth:2,value:"5. 정리",anchor:"#5-정리"},{depth:2,value:"참고 영상",anchor:"#참고-영상"}]}},{node:{id:"c37f14d659bda968613d6c14667c05b3",path:"/bpm-concept/example-video/",title:"Example Video",headings:[{depth:1,value:"Example Video",anchor:"#example-video"},{depth:2,value:"uEngine6 기능 데모 영상",anchor:"#uengine6-기능-데모-영상"}]}},{node:{id:"36f0513ef985626c30d3414414ffb9d3",path:"/getting-started/soa-architecture-message/",title:"SOA (MSA) 아키텍처 예제 - Message",headings:[{depth:1,value:"SOA (MSA) 아키텍처 예제 - Message",anchor:"#soa-msa-아키텍처-예제---message"},{depth:2,value:"예제 영상",anchor:"#예제-영상"},{depth:2,value:"개요",anchor:"#개요"},{depth:2,value:"예제 시나리오",anchor:"#예제-시나리오"},{depth:2,value:"예제 BPMN",anchor:"#예제-bpmn"},{depth:2,value:"예제 실행 과정",anchor:"#예제-실행-과정"},{depth:3,value:"Step 1: BPMN Process 작성",anchor:"#step-1-bpmn-process-작성"},{depth:3,value:"Step 1: BPMN Process 작성",anchor:"#step-1-bpmn-process-작성-1"},{depth:3,value:"Step 2: Process의 실행",anchor:"#step-2-process의-실행"}]}},{node:{id:"338da42353dc49417638e5a1157b0c80",path:"/bpm-concept/business-process/",title:"비즈니스 프로세스와 BPM",headings:[{depth:1,value:"비즈니스 프로세스와 BPM",anchor:"#비즈니스-프로세스와-bpm"},{depth:2,value:"1. 기업과 비즈니스 프로세스",anchor:"#1-기업과-비즈니스-프로세스"},{depth:2,value:"2. BPR(Business Process Reengineering)",anchor:"#2-bprbusiness-process-reengineering"},{depth:2,value:"3. 비즈니스 모델링과 분석",anchor:"#3-비즈니스-모델링과-분석"},{depth:2,value:"4. BPM(S)",anchor:"#4-bpms"}]}},{node:{id:"67f2b2a2288d50772aeae03b92283445",path:"/getting-started/process-workflow/",title:"사람간의 프로세스 Workflow",headings:[{depth:1,value:"사람간의 프로세스 Workflow",anchor:"#사람간의-프로세스-workflow"},{depth:2,value:"1. 조건분기 흐름제어",anchor:"#1-조건분기-흐름제어"},{depth:2,value:"2. 반복",anchor:"#2-반복"},{depth:2,value:"3. 서브프로세스",anchor:"#3-서브프로세스"}]}},{node:{id:"19c97746d36287379e98c940bd0b0249",path:"/getting-started/",title:"모델링 툴의 사용법",headings:[{depth:1,value:"모델링 툴의 사용법",anchor:"#모델링-툴의-사용법"},{depth:2,value:"프로세스 정의 생성",anchor:"#프로세스-정의-생성"},{depth:3,value:"1.1 프로세스 디자이너 도구",anchor:"#11-프로세스-디자이너-도구"},{depth:3,value:"1.2 프로세스 데이터",anchor:"#12-프로세스-데이터"},{depth:2,value:"예제 프로세스",anchor:"#예제-프로세스"},{depth:3,value:"1. 예제 프로세스 설명",anchor:"#1-예제-프로세스-설명"},{depth:3,value:"2. 프로세스 시나리오",anchor:"#2-프로세스-시나리오"},{depth:3,value:"3. 프로세스 정의",anchor:"#3-프로세스-정의"},{depth:4,value:"참여자 정의",anchor:"#참여자-정의"},{depth:4,value:"변수 정의",anchor:"#변수-정의"},{depth:4,value:"흐름 정의",anchor:"#흐름-정의"}]}},{node:{id:"86525e0ac2f3216a2493b866623e6abe",path:"/getting-started/process-monitoring/",title:"프로세스 실행",headings:[{depth:1,value:"프로세스 실행",anchor:"#프로세스-실행"},{depth:2,value:"프로세스 실행",anchor:"#프로세스-실행-1"},{depth:2,value:"워크아이템",anchor:"#워크아이템"},{depth:2,value:"업무 처리",anchor:"#업무-처리"}]}},{node:{id:"75e36d432761bd2c89cfb714790b0d53",path:"/getting-started/multiple-instance/",title:"멀티플 인스턴스",headings:[{depth:1,value:"멀티플 인스턴스",anchor:"#멀티플-인스턴스"},{depth:2,value:"서브 프로세스를 활용한 멀티플 인스턴스 처리",anchor:"#서브-프로세스를-활용한-멀티플-인스턴스-처리"},{depth:3,value:"멀티플 인스턴스의 정의",anchor:"#멀티플-인스턴스의-정의"},{depth:3,value:"멀티플 인스턴스 지정 요령",anchor:"#멀티플-인스턴스-지정-요령"},{depth:2,value:"Loop 방식 적용 예시",anchor:"#loop-방식-적용-예시"},{depth:2,value:"서브프로세스 적용 예시",anchor:"#서브프로세스-적용-예시"}]}},{node:{id:"33ec3a077afd1c92228e614b17aa3399",path:"/getting-started/form-mapping/",title:"폼 매핑",headings:[{depth:1,value:"폼 매핑",anchor:"#폼-매핑"},{depth:2,value:"Data Form Mapper",anchor:"#data-form-mapper"},{depth:3,value:"폼 매퍼의 정의",anchor:"#폼-매퍼의-정의"},{depth:3,value:"액티비티 간 폼 매핑 활용법",anchor:"#액티비티-간-폼-매핑-활용법"},{depth:2,value:"폼 매핑 과정 예시",anchor:"#폼-매핑-과정-예시"}]}},{node:{id:"edc451670933ce37812a876438a56687",path:"/getting-started/form-definition/",title:"폼 관리",headings:[{depth:1,value:"폼 관리",anchor:"#폼-관리"},{depth:2,value:"폼 기반 태스크 액티비티 수행",anchor:"#폼-기반-태스크-액티비티-수행"},{depth:2,value:"폼 생성",anchor:"#폼-생성"},{depth:2,value:"세부 폼 설정",anchor:"#세부-폼-설정"},{depth:2,value:"변수 정의",anchor:"#변수-정의"}]}},{node:{id:"51e41643a78c37c83986f739e74e18f3",path:"/getting-started/process-definition/",title:"",headings:[]}},{node:{id:"3d01052b325204b3edc3318c3afa5877",path:"/getting-started/database-table/",title:"테이블 정의",headings:[{depth:1,value:"테이블 정의",anchor:"#테이블-정의"},{depth:2,value:"개요",anchor:"#개요"},{depth:2,value:"bpm_audit",anchor:"#bpm_audit"},{depth:3,value:"DDL",anchor:"#ddl"},{depth:3,value:"테이블 설명",anchor:"#테이블-설명"},{depth:3,value:"컬럼 설명",anchor:"#컬럼-설명"},{depth:2,value:"BPM_EVENT_MAPPING",anchor:"#bpm_event_mapping"},{depth:3,value:"DDL",anchor:"#ddl-1"},{depth:3,value:"테이블 설명",anchor:"#테이블-설명-1"},{depth:3,value:"컬럼 설명",anchor:"#컬럼-설명-1"},{depth:2,value:"DEF_INFO",anchor:"#def_info"},{depth:3,value:"DDL",anchor:"#ddl-2"},{depth:3,value:"테이블 설명",anchor:"#테이블-설명-2"},{depth:3,value:"컬럼 설명",anchor:"#컬럼-설명-2"},{depth:2,value:"BPM_PROCINST",anchor:"#bpm_procinst"},{depth:3,value:"DDL",anchor:"#ddl-3"},{depth:3,value:"테이블 설명",anchor:"#테이블-설명-3"},{depth:3,value:"컬럼 설명",anchor:"#컬럼-설명-3"},{depth:2,value:"BPM_ROLEMAPPING",anchor:"#bpm_rolemapping"},{depth:3,value:"DDL",anchor:"#ddl-4"},{depth:3,value:"테이블 설명",anchor:"#테이블-설명-4"},{depth:3,value:"컬럼 설명",anchor:"#컬럼-설명-4"},{depth:2,value:"BPM_SERIVCE",anchor:"#bpm_serivce"},{depth:3,value:"DDL",anchor:"#ddl-5"},{depth:3,value:"테이블 설명",anchor:"#테이블-설명-5"},{depth:3,value:"컬럼 설명",anchor:"#컬럼-설명-5"},{depth:2,value:"BPM_WORKLIST",anchor:"#bpm_worklist"},{depth:3,value:"DDL",anchor:"#ddl-6"},{depth:3,value:"테이블 설명",anchor:"#테이블-설명-6"},{depth:3,value:"컬럼 설명",anchor:"#컬럼-설명-6"}]}},{node:{id:"1d92a1a0e540fda25d74633bb9af7265",path:"/api-customizing/new-activity/",title:"새로운 액티비티 타입 만들기",headings:[{depth:1,value:"새로운 액티비티 타입 만들기",anchor:"#새로운-액티비티-타입-만들기"},{depth:2,value:"Example",anchor:"#example"},{depth:2,value:"ServiceTask.vue",anchor:"#servicetaskvue"}]}},{node:{id:"cf033ad26917ae9b21d767273577c2e4",path:"/api-customizing/transaction-listener/",title:"uEngine6 트랜잭션 리스너",headings:[{depth:1,value:"uEngine6 트랜잭션 리스너",anchor:"#uengine6-트랜잭션-리스너"},{depth:2,value:"사용 확장",anchor:"#사용-확장"}]}},{node:{id:"f053b487b74311c01b572462ff1a4925",path:"/api-customizing/migration/",title:"uEngine3.x 마이그래이션",headings:[{depth:1,value:"uEngine3.x 마이그래이션",anchor:"#uengine3x-마이그래이션"}]}},{node:{id:"ed4b6385ea509db574467f3c93384660",path:"/getting-started/conditional-branch/",title:"조건 분기 처리",headings:[{depth:1,value:"조건 분기 처리",anchor:"#조건-분기-처리"},{depth:2,value:"게이트웨이를 활용한 프로세스 내 분기 처리",anchor:"#게이트웨이를-활용한-프로세스-내-분기-처리"},{depth:3,value:"프로세스 정의 시 조건 적용 및 분기 처리",anchor:"#프로세스-정의-시-조건-적용-및-분기-처리"},{depth:2,value:"조건분기 흐름제어 예시",anchor:"#조건분기-흐름제어-예시"}]}},{node:{id:"37667d7e2d69793b782edf9383d9eea9",path:"/api-customizing/message-listener/",title:"[API] Message Listener API",headings:[{depth:1,value:" Message Listener API",anchor:"#api-message-listener-api"},{depth:2,value:"Service Definition",anchor:"#service-definition"},{depth:2,value:"카카오톡 챗봇 예제",anchor:"#카카오톡-챗봇-예제"}]}},{node:{id:"e600db47303ade4d190c6c2f4e168e35",path:"/api-customizing/script-task/",title:"[Modeling] ScriptTask",headings:[{depth:1,value:" ScriptTask",anchor:"#modeling-scripttask"},{depth:2,value:"설정",anchor:"#설정"},{depth:2,value:"예제 프로세스 (json)",anchor:"#예제-프로세스-json"},{depth:2,value:"프로세스 배포",anchor:"#프로세스-배포"},{depth:2,value:"프로세스 실행",anchor:"#프로세스-실행"},{depth:2,value:"실행 확인",anchor:"#실행-확인"}]}},{node:{id:"3ef7a719ccd5a3d7da1be1c6c03d2df5",path:"/api-customizing/external-service/",title:"애플리케이션과 BPM 연동(비동기 방식)",headings:[{depth:1,value:"애플리케이션과 BPM 연동(비동기 방식)",anchor:"#애플리케이션과-bpm-연동비동기-방식"},{depth:2,value:"1. 동기 방식의 App 연동 시 문제점",anchor:"#1-동기-방식의-app-연동-시-문제점"},{depth:2,value:"2. 비동기 방식의 App 연동",anchor:"#2-비동기-방식의-app-연동"},{depth:3,value:"2.1 연동 원칙",anchor:"#21-연동-원칙"},{depth:3,value:"2.2 예제 시나리오",anchor:"#22-예제-시나리오"},{depth:3,value:"2.3 애플리케이션(Publisher)",anchor:"#23-애플리케이션publisher"},{depth:3,value:"2.4 Message Broker",anchor:"#24-message-broker"},{depth:3,value:"2.5 BPM(Subscriber)",anchor:"#25-bpmsubscriber"},{depth:4,value:"2.6 비동기 연동의 회복성",anchor:"#26-비동기-연동의-회복성"},{depth:2,value:"3. 프로세스 모델링",anchor:"#3-프로세스-모델링"},{depth:3,value:"3.1 프로세스 변수 설정",anchor:"#31-프로세스-변수-설정"},{depth:3,value:"3.2 외부 어플리케이션 연동",anchor:"#32-외부-어플리케이션-연동"},{depth:4,value:"3.2.1 App 화면 설정",anchor:"#321-app-화면-설정"},{depth:4,value:"3.2.2 이벤트정의 설정",anchor:"#322-이벤트정의-설정"},{depth:4,value:"3.2.3 이벤트 속성",anchor:"#323-이벤트-속성"},{depth:4,value:"3.2.4 이벤트 매핑",anchor:"#324-이벤트-매핑"},{depth:2,value:"4. 실행",anchor:"#4-실행"},{depth:2,value:"5. 정리",anchor:"#5-정리"},{depth:2,value:"참고 영상",anchor:"#참고-영상"}]}},{node:{id:"f3e2499a886c418fa3ee09fa7f036bf6",path:"/api-customizing/api-reference-old/",title:"uEngine6 API Reference",headings:[{depth:1,value:"uEngine6 API Reference",anchor:"#uengine6-api-reference"},{depth:2,value:"프로세스 폴더 관리",anchor:"#프로세스-폴더-관리"},{depth:2,value:"프로세스 정의 관리",anchor:"#프로세스-정의-관리"},{depth:2,value:"프로세스 instantiation 생성",anchor:"#프로세스-instantiation-생성"},{depth:2,value:"Hybind example",anchor:"#hybind-example"},{depth:2,value:"프로세스 버전관리",anchor:"#프로세스-버전관리"}]}},{node:{id:"bcbb26d193e3b72d880eb18e14dc6140",path:"/api-customizing/create-project/",title:"uEngine6 기반 프로젝트 만들기",headings:[{depth:1,value:"uEngine6 기반 프로젝트 만들기",anchor:"#uengine6-기반-프로젝트-만들기"},{depth:2,value:"설정 변경과 커스터마이징",anchor:"#설정-변경과-커스터마이징"}]}},{node:{id:"2c5cb1e035e28430f49fd47eaa487692",path:"/api-customizing/api-reference/",title:"uEngine6 API Reference",headings:[{depth:1,value:"uEngine6 API Reference",anchor:"#uengine6-api-reference"},{depth:2,value:"Definition 관리",anchor:"#definition-관리"},{depth:3,value:"/definition",anchor:"#definition"},{depth:3,value:"/versions/**",anchor:"#versions"},{depth:3,value:"/definition/**",anchor:"#definition-1"},{depth:3,value:"/definition/raw/**",anchor:"#definitionraw"},{depth:3,value:"/definition/system/**",anchor:"#definitionsystem"},{depth:3,value:"/definition/system",anchor:"#definitionsystem-1"},{depth:3,value:"/definition/map",anchor:"#definitionmap"},{depth:3,value:"/definition/release/{releaseVersion}",anchor:"#definitionreleasereleaseversion"},{depth:3,value:"/definition/upload",anchor:"#definitionupload"},{depth:2,value:"Instance 관리",anchor:"#instance-관리"},{depth:3,value:"/instance",anchor:"#instance"},{depth:3,value:"/instance/{instanceId}",anchor:"#instanceinstanceid"},{depth:3,value:"/instance/{instanceId}/eventList",anchor:"#instanceinstanceideventlist"},{depth:3,value:"/instance/{instanceId}/activity/{tracingTag}/backToHere",anchor:"#instanceinstanceidactivitytracingtagbacktohere"},{depth:3,value:"/instance/{instanceId}/variables",anchor:"#instanceinstanceidvariables"},{depth:3,value:"/instance/{instanceId}/status",anchor:"#instanceinstanceidstatus"},{depth:3,value:"/instance/{instanceId}/running",anchor:"#instanceinstanceidrunning"},{depth:3,value:"/instance/{instanceId}/completed",anchor:"#instanceinstanceidcompleted"},{depth:3,value:"/instance/{instId}/variable/{varName}",anchor:"#instanceinstidvariablevarname"},{depth:3,value:"/instance/{instId}/task/{taskId}/variable/{varName}",anchor:"#instanceinstidtasktaskidvariablevarname"},{depth:3,value:"/instance/{instId}/role-mapping/{roleName}",anchor:"#instanceinstidrole-mappingrolename"},{depth:3,value:"/instance/{instanceId}/fire-message",anchor:"#instanceinstanceidfire-message"},{depth:3,value:"/instance/shutdown",anchor:"#instanceshutdown"},{depth:3,value:"/definition-changes",anchor:"#definition-changes"},{depth:3,value:"/dry-run/**",anchor:"#dry-run"},{depth:3,value:"/dry-run/{defId:.+}",anchor:"#dry-rundefid"},{depth:3,value:"/serviceMessage",anchor:"#servicemessage"}]}}]}};var l=({options:e})=>{e.__staticData?e.__staticData.data=d:(e.__staticData=c.a.observable({data:d}),e.computed=s({$static:()=>e.__staticData.data},e.computed))},u=Object(h.a)(i,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative",on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.increment.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.decrement.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go.apply(null,arguments)}]}},[t("label",{staticClass:"relative block"},[t("span",{staticClass:"sr-only"},[e._v("Search Documentation")]),t("div",{staticClass:"absolute inset-y-0 left-0 flex items-center justify-center px-3 py-2 opacity-50"},[t("SearchIcon",{staticClass:"text-ui-typo",attrs:{size:"1.25x"}})],1),t("input",{ref:"input",staticClass:"block w-full py-2 pl-10 pr-4 border-2 rounded-lg bg-ui-sidebar border-ui-sidebar focus:bg-ui-background",class:{"rounded-b-none":e.showResult},attrs:{type:"search",placeholder:"Search Documentation..."},domProps:{value:e.query},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},input:function(t){e.focusIndex=-1,e.query=t.target.value},change:function(t){e.query=t.target.value}}})]),e.showResult?t("div",{staticClass:"fixed inset-x-0 z-50 overflow-y-auto border-2 border-t-0 rounded-lg rounded-t-none shadow-lg results bg-ui-background bottom:0 sm:bottom-auto sm:absolute border-ui-sidebar",staticStyle:{"max-height":"calc(100vh - 120px)"}},[t("ul",{staticClass:"px-4 py-2 m-0"},[0===e.results.length?t("li",{staticClass:"px-2"},[e._v("\n        No results for "),t("span",{staticClass:"font-bold"},[e._v(e._s(e.query))]),e._v(".\n      ")]):e._l(e.results,(function(a,n){return t("li",{key:a.path+a.anchor,staticClass:"border-ui-sidebar",class:{"border-b":n+1!==e.results.length},on:{mouseenter:function(t){e.focusIndex=n},mousedown:e.go}},[t("g-link",{staticClass:"block p-2 -mx-2 text-base font-bold rounded-lg",class:{"bg-ui-sidebar text-ui-primary":e.focusIndex===n},attrs:{to:a.path+a.anchor}},[a.value===a.title?t("span",[e._v("\n            "+e._s(a.value)+"\n          ")]):t("span",{staticClass:"flex items-center"},[e._v("\n            "+e._s(a.title)+"\n            "),t("ChevronRightIcon",{staticClass:"mx-1",attrs:{size:"1x"}}),t("span",{staticClass:"font-normal opacity-75"},[e._v(e._s(a.value))])],1)])],1)}))],2)]):e._e()])}),[],!1,null,null,null);"function"==typeof l&&l(u);t.default=u.exports}}]);