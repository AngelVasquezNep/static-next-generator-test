(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3Hq7":function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("q1tI"),o=n.n(r),i=n("YFqc"),a=n.n(i),s=o.a.createElement,u={marginRight:15};function c(){return s("div",null,s(a.a,{href:"/"},s("a",{style:u},"Home")),s(a.a,{href:"/about"},s("a",{style:u},"About")))}var f=o.a.createElement,l={margin:20,padding:20,border:"1px solid #DDD"};function p(t){return f("div",{style:l},f(c,null),t.children)}},Juyh:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s}));var r=n("q1tI"),o=n.n(r),i=n("3Hq7"),a=o.a.createElement;function s(){return a(i.a,null,a("p",null,"This is the about page"))}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("a1gu"),a=n("Nsbk"),s=n("7W2i");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var c=n("TqRt"),f=n("284h");e.__esModule=!0,e.default=void 0;var l,p=f(n("q1tI")),h=n("QmWs"),v=n("g/15"),d=c(n("nOHt"));function y(t){return t&&"object"===typeof t?(0,v.formatWithValidation)(t):t}var w=new Map,g=window.IntersectionObserver,m={};function _(){return l||(g?l=new g((function(t){t.forEach((function(t){if(w.has(t.target)){var e=w.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),w.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var E=function(t){s(f,t);var e,c=(e=f,function(){var t,n=a(e);if(u()){var r=a(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return i(this,t)});function f(t){var e;return r(this,f),(e=c.call(this,t)).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var a=t(o,i);return e=o,n=i,r=a,a}}((function(t,e){return{href:y(t),as:e?y(e):e}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),a=i.href,s=i.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(a)){var u=window.location.pathname;a=(0,h.resolve)(u,a),s=s?(0,h.resolve)(u,s):a,t.preventDefault();var c=e.props.scroll;null==c&&(c=s.indexOf("#")<0),d.default[e.props.replace?"replace":"push"](a,s,{shallow:e.props.shallow}).then((function(t){t&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return o(f,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&g&&t&&t.tagName&&(this.cleanUpListeners(),m[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=_();return n?(n.observe(t),w.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}w.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();d.default.prefetch(e[0],e[1],t).catch((function(t){0})),m[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,r=this.formatUrls(this.props.href,this.props.as),o=r.href,i=r.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var a=p.Children.only(e),s={ref:function(e){t.handleRef(e),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(e):"object"===typeof a.ref&&(a.ref.current=e))},onMouseEnter:function(e){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};!this.props.passHref&&("a"!==a.type||"href"in a.props)||(s.href=i||o);var u=n("P5f7").rewriteUrlForNextExport;return s.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(s.href=u(s.href)),p.default.cloneElement(a,s)}}]),f}(p.Component);e.default=E},rB5V:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])}},[["rB5V",0,2,1]]]);