"use strict";(self.webpackChunk_8_advice_generator=self.webpackChunk_8_advice_generator||[]).push([[826],{477:(e,t,n)=>{var _,l,o,r,i,u,s={},c=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function d(e,t){for(var n in t)e[n]=t[n];return e}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function p(e,t,n,_,r){var i={type:e,props:t,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++o:r};return null==r&&null!=l.vnode&&l.vnode(i),i}function h(e){return e.children}function v(e,t){this.props=e,this.context=t}function y(e,t){if(null==t)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?y(e):null}function m(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return m(e)}}function g(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!b.__r++||u!==l.debounceRendering)&&((u=l.debounceRendering)||i)(b)}function b(){for(var e;b.__r=r.length;)e=r.sort((function(e,t){return e.__v.__b-t.__v.__b})),r=[],e.some((function(e){var t,n,_,l,o,r;e.__d&&(o=(l=(t=e).__v).__e,(r=t.__P)&&(n=[],(_=d({},l)).__v=l.__v+1,A(r,l,_,t.__n,void 0!==r.ownerSVGElement,null!=l.__h?[o]:null,n,null==o?y(l):o,l.__h),N(n,l),l.__e!=o&&m(l)))}))}function k(e,t,n,_,l,o,r,i,u,a){var d,f,v,m,g,b,k,C=_&&_.__k||c,S=C.length;for(n.__k=[],d=0;d<t.length;d++)if(null!=(m=n.__k[d]=null==(m=t[d])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?p(null,m,null,null,m):Array.isArray(m)?p(h,{children:m},null,null,null):m.__b>0?p(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=C[d])||v&&m.key==v.key&&m.type===v.type)C[d]=void 0;else for(f=0;f<S;f++){if((v=C[f])&&m.key==v.key&&m.type===v.type){C[f]=void 0;break}v=null}A(e,m,v=v||s,l,o,r,i,u,a),g=m.__e,(f=m.ref)&&v.ref!=f&&(k||(k=[]),v.ref&&k.push(v.ref,null,m),k.push(f,m.__c||g,m)),null!=g?(null==b&&(b=g),"function"==typeof m.type&&m.__k===v.__k?m.__d=u=x(m,u,e):u=w(e,m,v,C,g,u),"function"==typeof n.type&&(n.__d=u)):u&&v.__e==u&&u.parentNode!=e&&(u=y(v))}for(n.__e=b,d=S;d--;)null!=C[d]&&("function"==typeof n.type&&null!=C[d].__e&&C[d].__e==n.__d&&(n.__d=y(_,d+1)),I(C[d],C[d]));if(k)for(d=0;d<k.length;d++)D(k[d],k[++d],k[++d])}function x(e,t,n){for(var _,l=e.__k,o=0;l&&o<l.length;o++)(_=l[o])&&(_.__=e,t="function"==typeof _.type?x(_,t,n):w(n,_,_,l,_.__e,t));return t}function w(e,t,n,_,l,o){var r,i,u;if(void 0!==t.__d)r=t.__d,t.__d=void 0;else if(null==n||l!=o||null==l.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(l),r=null;else{for(i=o,u=0;(i=i.nextSibling)&&u<_.length;u+=2)if(i==l)break e;e.insertBefore(l,o),r=o}return void 0!==r?r:l.nextSibling}function C(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||a.test(t)?n:n+"px"}function S(e,t,n,_,l){var o;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||C(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||C(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?_||e.addEventListener(t,o?T:P,o):e.removeEventListener(t,o?T:P,o);else if("dangerouslySetInnerHTML"!==t){if(l)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function P(e){this.l[e.type+!1](l.event?l.event(e):e)}function T(e){this.l[e.type+!0](l.event?l.event(e):e)}function A(e,t,n,_,o,r,i,u,s){var c,a,f,p,y,m,g,b,x,w,C,S=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(s=n.__h,u=t.__e=n.__e,t.__h=null,r=[u]),(c=l.__b)&&c(t);try{e:if("function"==typeof S){if(b=t.props,x=(c=S.contextType)&&_[c.__c],w=c?x?x.props.value:c.__:_,n.__c?g=(a=t.__c=n.__c).__=a.__E:("prototype"in S&&S.prototype.render?t.__c=a=new S(b,w):(t.__c=a=new v(b,w),a.constructor=S,a.render=M),x&&x.sub(a),a.props=b,a.state||(a.state={}),a.context=w,a.__n=_,f=a.__d=!0,a.__h=[]),null==a.__s&&(a.__s=a.state),null!=S.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=d({},a.__s)),d(a.__s,S.getDerivedStateFromProps(b,a.__s))),p=a.props,y=a.state,f)null==S.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==S.getDerivedStateFromProps&&b!==p&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(b,w),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(b,a.__s,w)||t.__v===n.__v){a.props=b,a.state=a.__s,t.__v!==n.__v&&(a.__d=!1),a.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),a.__h.length&&i.push(a);break e}null!=a.componentWillUpdate&&a.componentWillUpdate(b,a.__s,w),null!=a.componentDidUpdate&&a.__h.push((function(){a.componentDidUpdate(p,y,m)}))}a.context=w,a.props=b,a.state=a.__s,(c=l.__r)&&c(t),a.__d=!1,a.__v=t,a.__P=e,c=a.render(a.props,a.state,a.context),a.state=a.__s,null!=a.getChildContext&&(_=d(d({},_),a.getChildContext())),f||null==a.getSnapshotBeforeUpdate||(m=a.getSnapshotBeforeUpdate(p,y)),C=null!=c&&c.type===h&&null==c.key?c.props.children:c,k(e,Array.isArray(C)?C:[C],t,n,_,o,r,i,u,s),a.base=t.__e,t.__h=null,a.__h.length&&i.push(a),g&&(a.__E=a.__=null),a.__e=!1}else null==r&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=E(n.__e,t,n,_,o,r,i,s);(c=l.diffed)&&c(t)}catch(e){t.__v=null,(s||null!=r)&&(t.__e=u,t.__h=!!s,r[r.indexOf(u)]=null),l.__e(e,t,n)}}function N(e,t){l.__c&&l.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){l.__e(e,t.__v)}}))}function E(e,t,n,l,o,r,i,u){var c,a,d,p=n.props,h=t.props,v=t.type,m=0;if("svg"===v&&(o=!0),null!=r)for(;m<r.length;m++)if((c=r[m])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){e=c,r[m]=null;break}if(null==e){if(null===v)return document.createTextNode(h);e=o?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),r=null,u=!1}if(null===v)p===h||u&&e.data===h||(e.data=h);else{if(r=r&&_.call(e.childNodes),a=(p=n.props||s).dangerouslySetInnerHTML,d=h.dangerouslySetInnerHTML,!u){if(null!=r)for(p={},m=0;m<e.attributes.length;m++)p[e.attributes[m].name]=e.attributes[m].value;(d||a)&&(d&&(a&&d.__html==a.__html||d.__html===e.innerHTML)||(e.innerHTML=d&&d.__html||""))}if(function(e,t,n,_,l){var o;for(o in n)"children"===o||"key"===o||o in t||S(e,o,null,n[o],_);for(o in t)l&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===t[o]||S(e,o,t[o],n[o],_)}(e,h,p,o,u),d)t.__k=[];else if(m=t.props.children,k(e,Array.isArray(m)?m:[m],t,n,l,o&&"foreignObject"!==v,r,i,r?r[0]:n.__k&&y(n,0),u),null!=r)for(m=r.length;m--;)null!=r[m]&&f(r[m]);u||("value"in h&&void 0!==(m=h.value)&&(m!==e.value||"progress"===v&&!m||"option"===v&&m!==p.value)&&S(e,"value",m,p.value,!1),"checked"in h&&void 0!==(m=h.checked)&&m!==e.checked&&S(e,"checked",m,p.checked,!1))}return e}function D(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){l.__e(e,n)}}function I(e,t,n){var _,o;if(l.unmount&&l.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||D(_,null,t)),null!=(_=e.__c)){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(e){l.__e(e,t)}_.base=_.__P=null}if(_=e.__k)for(o=0;o<_.length;o++)_[o]&&I(_[o],t,"function"!=typeof e.type);n||null==e.__e||f(e.__e),e.__e=e.__d=void 0}function M(e,t,n){return this.constructor(e,n)}function U(e,t,n){var o,r,i;l.__&&l.__(e,t),r=(o="function"==typeof n)?null:n&&n.__k||t.__k,i=[],A(t,e=(!o&&n||t).__k=function(e,t,n){var l,o,r,i={};for(r in t)"key"==r?l=t[r]:"ref"==r?o=t[r]:i[r]=t[r];if(arguments.length>2&&(i.children=arguments.length>3?_.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===i[r]&&(i[r]=e.defaultProps[r]);return p(e,i,l,o,null)}(h,null,[e]),r||s,s,void 0!==t.ownerSVGElement,!o&&n?[n]:r?null:t.firstChild?_.call(t.childNodes):null,i,!o&&n?n:r?r.__e:t.firstChild,o),N(i,e)}_=c.slice,l={__e:function(e,t){for(var n,_,l;t=t.__;)if((n=t.__c)&&!n.__)try{if((_=n.constructor)&&null!=_.getDerivedStateFromError&&(n.setState(_.getDerivedStateFromError(e)),l=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),l=n.__d),l)return n.__E=n}catch(t){e=t}throw e}},o=0,v.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof e&&(e=e(d({},n),this.props)),e&&d(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),g(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},v.prototype.render=h,r=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0;var L=0;function W(e,t,n,_,o){var r,i,u={};for(i in t)"ref"==i?r=t[i]:u[i]=t[i];var s={type:e,props:u,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--L,__source:_,__self:o};if("function"==typeof e&&(r=e.defaultProps))for(i in r)void 0===u[i]&&(u[i]=r[i]);return l.vnode&&l.vnode(s),s}const F=class extends v{constructor(e){super(e)}render(){return W(h,{children:[W("h1",{className:"text-xs text-green uppercase tracking-[0.2rem] mb-6",children:["Advice #",this.props.adviceId]}),W("p",{className:"text-2xl mb-8",children:W("q",{children:this.props.adviceText})})]})}};var H=n(694);document.body.classList.add("min-h-screen","bg-blue-300","font-main","flex","items-center","justify-center","flex-wrap");const B=class extends v{constructor(e){super(e),this.state={adviceId:"none",adviceText:""},this.changeAdvice=this.changeAdvice.bind(this)}changeAdvice(){(async function(){let e=Math.floor(240*Math.random()),t=await fetch(`https://api.adviceslip.com/advice/${e}`,{method:"GET"});return(await t.json()).slip})().then((e=>{this.setState({adviceId:e.id,adviceText:e.advice})}))}componentDidMount(){("number"!=typeof this.state.adviceId||this.state.adviceId<221)&&this.changeAdvice()}render(){return W(h,{children:W("main",{className:"bg-blue-200 text-cyan text-center mx-auto w-[90vw] rounded-xl max-w-[480px] relative shadow-blue-300 shadow-md p-10 flex-[0_0_100%]",children:[W(F,{adviceId:this.state.adviceId,adviceText:this.state.adviceText}),W("div",{className:"bg-divider-mobile w-full h-4 md:bg-divider-desktop bg-no-repeat bg-center mb-6"}),W("button",{onClick:this.changeAdvice,className:"bg-green p-4 rounded-full absolute -bottom-6 left-0 right-0 m-auto hover:shadow-[0_0_20px_hsl(150_100%_66%)] focus:outline-4 focus:outline-[#e6bf42] focus:outline",children:[W("img",{src:H,alt:"dice icon"}),W("span",{className:"sr-only",children:"Change Advice"})]})]})})}};U(W(B,{}),document.getElementById("root"))},694:(e,t,n)=>{e.exports=n.p+"08691e4c24c11b5ba564.svg"}},e=>{var t;t=477,e(e.s=t)}]);