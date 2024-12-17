import{r as c,j as R,R as x,D as C}from"./index-53e6f5e0.js";import{u as B}from"./Button-00b2b4ee.js";function q(t){const e=c.useRef(t);return c.useEffect(()=>{e.current=t},[t]),e}function kt(t){const e=q(t);return c.useCallback(function(...r){return e.current&&e.current(...r)},[e])}function J(t){const e=c.useRef(t);return c.useEffect(()=>{e.current=t},[t]),e}function Q(t){const e=J(t);return c.useCallback(function(...r){return e.current&&e.current(...r)},[e])}const tt=["onKeyDown"];function et(t,e){if(t==null)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}function nt(t){return!t||t.trim()==="#"}const $=c.forwardRef((t,e)=>{let{onKeyDown:r}=t,n=et(t,tt);const[o]=B(Object.assign({tagName:"a"},n)),i=Q(s=>{o.onKeyDown(s),r==null||r(s)});return nt(n.href)||n.role==="button"?R.jsx("a",Object.assign({ref:e},n,o,{onKeyDown:i})):R.jsx("a",Object.assign({ref:e},n,{onKeyDown:r}))});$.displayName="Anchor";const Nt=$;function D(){return D=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},D.apply(null,arguments)}function A(t,e){if(t==null)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.includes(n))continue;r[n]=t[n]}return r}function j(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function rt(t){var e=it(t,"string");return typeof e=="symbol"?e:String(e)}function it(t,e){if(typeof t!="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ot(t,e,r){var n=c.useRef(t!==void 0),o=c.useState(e),i=o[0],s=o[1],a=t!==void 0,u=n.current;return n.current=a,!a&&u&&i!==e&&s(e),[a?t:i,c.useCallback(function(f){for(var l=arguments.length,p=new Array(l>1?l-1:0),d=1;d<l;d++)p[d-1]=arguments[d];r&&r.apply(void 0,[f].concat(p)),s(f)},[r])]}function _t(t,e){return Object.keys(e).reduce(function(r,n){var o,i=r,s=i[j(n)],a=i[n],u=A(i,[j(n),n].map(rt)),f=e[n],l=ot(a,s,t[f]),p=l[0],d=l[1];return D({},u,(o={},o[n]=p,o[f]=d,o))},t)}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},P(t,e)}function st(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,P(t,e)}function at(t){return t&&t.ownerDocument||document}function ut(t){var e=at(t);return e&&e.defaultView||window}function ct(t,e){return ut(t).getComputedStyle(t,e)}var ft=/([A-Z])/g;function lt(t){return t.replace(ft,"-$1").toLowerCase()}var pt=/^ms-/;function S(t){return lt(t).replace(pt,"-ms-")}var dt=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function vt(t){return!!(t&&dt.test(t))}function K(t,e){var r="",n="";if(typeof e=="string")return t.style.getPropertyValue(S(e))||ct(t).getPropertyValue(S(e));Object.keys(e).forEach(function(o){var i=e[o];!i&&i!==0?t.style.removeProperty(S(o)):vt(o)?n+=o+"("+i+") ":r+=S(o)+": "+i+";"}),n&&(r+="transform: "+n+";"),t.style.cssText+=";"+r}const Et=!!(typeof window<"u"&&window.document&&window.document.createElement);var k=!1,N=!1;try{var O={get passive(){return k=!0},get once(){return N=k=!0}};Et&&(window.addEventListener("test",O,O),window.removeEventListener("test",O,!0))}catch{}function ht(t,e,r,n){if(n&&typeof n!="boolean"&&!N){var o=n.once,i=n.capture,s=r;!N&&o&&(s=r.__once||function a(u){this.removeEventListener(e,a,i),r.call(this,u)},r.__once=s),t.addEventListener(e,s,k?n:i)}t.addEventListener(e,r,n)}function mt(t,e,r,n){var o=n&&typeof n!="boolean"?n.capture:n;t.removeEventListener(e,r,o),r.__once&&t.removeEventListener(e,r.__once,o)}function W(t,e,r,n){return ht(t,e,r,n),function(){mt(t,e,r,n)}}function xt(t,e,r,n){if(r===void 0&&(r=!1),n===void 0&&(n=!0),t){var o=document.createEvent("HTMLEvents");o.initEvent(e,r,n),t.dispatchEvent(o)}}function bt(t){var e=K(t,"transitionDuration")||"",r=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*r}function gt(t,e,r){r===void 0&&(r=5);var n=!1,o=setTimeout(function(){n||xt(t,"transitionend",!0)},e+r),i=W(t,"transitionend",function(){n=!0},{once:!0});return function(){clearTimeout(o),i()}}function yt(t,e,r,n){r==null&&(r=bt(t)||0);var o=gt(t,r,n),i=W(t,"transitionend",e);return function(){o(),i()}}function M(t,e){const r=K(t,e)||"",n=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*n}function Lt(t,e){const r=M(t,"transitionDuration"),n=M(t,"transitionDelay"),o=yt(t,i=>{i.target===t&&(o(),e(i))},r+n)}function jt(t){t.offsetHeight}const U={disabled:!1},F=x.createContext(null);var Ct=function(e){return e.scrollTop},T="unmounted",h="exited",m="entering",y="entered",_="exiting",v=function(t){st(e,t);function e(n,o){var i;i=t.call(this,n,o)||this;var s=o,a=s&&!s.isMounting?n.enter:n.appear,u;return i.appearStatus=null,n.in?a?(u=h,i.appearStatus=m):u=y:n.unmountOnExit||n.mountOnEnter?u=T:u=h,i.state={status:u},i.nextCallback=null,i}e.getDerivedStateFromProps=function(o,i){var s=o.in;return s&&i.status===T?{status:h}:null};var r=e.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(o){var i=null;if(o!==this.props){var s=this.state.status;this.props.in?s!==m&&s!==y&&(i=m):(s===m||s===y)&&(i=_)}this.updateStatus(!1,i)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var o=this.props.timeout,i,s,a;return i=s=a=o,o!=null&&typeof o!="number"&&(i=o.exit,s=o.enter,a=o.appear!==void 0?o.appear:s),{exit:i,enter:s,appear:a}},r.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===m){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:C.findDOMNode(this);s&&Ct(s)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===h&&this.setState({status:T})},r.performEnter=function(o){var i=this,s=this.props.enter,a=this.context?this.context.isMounting:o,u=this.props.nodeRef?[a]:[C.findDOMNode(this),a],f=u[0],l=u[1],p=this.getTimeouts(),d=a?p.appear:p.enter;if(!o&&!s||U.disabled){this.safeSetState({status:y},function(){i.props.onEntered(f)});return}this.props.onEnter(f,l),this.safeSetState({status:m},function(){i.props.onEntering(f,l),i.onTransitionEnd(d,function(){i.safeSetState({status:y},function(){i.props.onEntered(f,l)})})})},r.performExit=function(){var o=this,i=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:C.findDOMNode(this);if(!i||U.disabled){this.safeSetState({status:h},function(){o.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:_},function(){o.props.onExiting(a),o.onTransitionEnd(s.exit,function(){o.safeSetState({status:h},function(){o.props.onExited(a)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},r.setNextCallback=function(o){var i=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,i.nextCallback=null,o(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},r.onTransitionEnd=function(o,i){this.setNextCallback(i);var s=this.props.nodeRef?this.props.nodeRef.current:C.findDOMNode(this),a=o==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],f=u[0],l=u[1];this.props.addEndListener(f,l)}o!=null&&setTimeout(this.nextCallback,o)},r.render=function(){var o=this.state.status;if(o===T)return null;var i=this.props,s=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var a=A(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return x.createElement(F.Provider,{value:null},typeof s=="function"?s(o,a):x.cloneElement(x.Children.only(s),a))},e}(x.Component);v.contextType=F;v.propTypes={};function g(){}v.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:g,onEntering:g,onEntered:g,onExit:g,onExiting:g,onExited:g};v.UNMOUNTED=T;v.EXITED=h;v.ENTERING=m;v.ENTERED=y;v.EXITING=_;const Tt=v,I=t=>!t||typeof t=="function"?t:e=>{t.current=e};function St(t,e){const r=I(t),n=I(e);return o=>{r&&r(o),n&&n(o)}}function wt(t,e){return c.useMemo(()=>St(t,e),[t,e])}function Ot(t){return t&&"setState"in t?C.findDOMNode(t):t??null}const Rt=x.forwardRef(({onEnter:t,onEntering:e,onEntered:r,onExit:n,onExiting:o,onExited:i,addEndListener:s,children:a,childRef:u,...f},l)=>{const p=c.useRef(null),d=wt(p,u),L=b=>{d(Ot(b))},E=b=>w=>{b&&p.current&&b(p.current,w)},G=c.useCallback(E(t),[t]),X=c.useCallback(E(e),[e]),H=c.useCallback(E(r),[r]),V=c.useCallback(E(n),[n]),Y=c.useCallback(E(o),[o]),Z=c.useCallback(E(i),[i]),z=c.useCallback(E(s),[s]);return R.jsx(Tt,{ref:l,...f,onEnter:G,onEntered:H,onEntering:X,onExit:V,onExited:Z,onExiting:Y,addEndListener:z,nodeRef:p,children:typeof a=="function"?(b,w)=>a(b,{...w,ref:L}):x.cloneElement(a,{ref:L})})}),Mt=Rt;export{Nt as A,h as E,Mt as T,q as a,kt as b,Lt as c,Q as d,_ as e,m as f,y as g,Et as h,ht as i,wt as j,W as l,at as o,K as s,jt as t,_t as u};
