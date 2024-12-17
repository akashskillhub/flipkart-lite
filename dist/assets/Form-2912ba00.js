import{u as i,c as d}from"./ThemeProvider-f1165dbe.js";import{P as N}from"./index-cf459d82.js";import{r as l,j as r}from"./index-53e6f5e0.js";import{a as p,b as K,F as Q}from"./FormControl-64724359.js";import{h as U}from"./ElementChildren-e9003714.js";import{C as W}from"./Col-90b11745.js";const R=l.forwardRef(({id:e,bsPrefix:o,className:a,type:s="checkbox",isValid:t=!1,isInvalid:n=!1,as:m="input",...f},F)=>{const{controlId:c}=l.useContext(p);return o=i(o,"form-check-input"),r.jsx(m,{...f,ref:F,type:s,id:e||c,className:d(a,o,t&&"is-valid",n&&"is-invalid")})});R.displayName="FormCheckInput";const k=R,v=l.forwardRef(({bsPrefix:e,className:o,htmlFor:a,...s},t)=>{const{controlId:n}=l.useContext(p);return e=i(e,"form-check-label"),r.jsx("label",{...s,ref:t,htmlFor:a||n,className:d(o,e)})});v.displayName="FormCheckLabel";const g=v,L=l.forwardRef(({id:e,bsPrefix:o,bsSwitchPrefix:a,inline:s=!1,reverse:t=!1,disabled:n=!1,isValid:m=!1,isInvalid:f=!1,feedbackTooltip:F=!1,feedback:c,feedbackType:u,className:V,style:_,title:q="",type:j="checkbox",label:y,children:C,as:z="input",...A},D)=>{o=i(o,"form-check"),a=i(a,"form-switch");const{controlId:w}=l.useContext(p),H=l.useMemo(()=>({controlId:e||w}),[w,e]),$=!C&&y!=null&&y!==!1||U(C,g),J=r.jsx(k,{...A,type:j==="switch"?"checkbox":j,ref:D,isValid:m,isInvalid:f,disabled:n,as:z});return r.jsx(p.Provider,{value:H,children:r.jsx("div",{style:_,className:d(V,$&&o,s&&`${o}-inline`,t&&`${o}-reverse`,j==="switch"&&a),children:C||r.jsxs(r.Fragment,{children:[J,$&&r.jsx(g,{title:q,children:y}),c&&r.jsx(K,{type:u,tooltip:F,children:c})]})})})});L.displayName="FormCheck";const h=Object.assign(L,{Input:k,Label:g}),I=l.forwardRef(({className:e,bsPrefix:o,as:a="div",...s},t)=>(o=i(o,"form-floating"),r.jsx(a,{ref:t,className:d(e,o),...s})));I.displayName="FormFloating";const X=I,T=l.forwardRef(({controlId:e,as:o="div",...a},s)=>{const t=l.useMemo(()=>({controlId:e}),[e]);return r.jsx(p.Provider,{value:t,children:r.jsx(o,{...a,ref:s})})});T.displayName="FormGroup";const b=T,S=l.forwardRef(({as:e="label",bsPrefix:o,column:a=!1,visuallyHidden:s=!1,className:t,htmlFor:n,...m},f)=>{const{controlId:F}=l.useContext(p);o=i(o,"form-label");let c="col-form-label";typeof a=="string"&&(c=`${c} ${c}-${a}`);const u=d(t,o,s&&"visually-hidden",a&&c);return n=n||F,a?r.jsx(W,{ref:f,as:"label",className:u,htmlFor:n,...m}):r.jsx(e,{ref:f,className:u,htmlFor:n,...m})});S.displayName="FormLabel";const Y=S,G=l.forwardRef(({bsPrefix:e,className:o,id:a,...s},t)=>{const{controlId:n}=l.useContext(p);return e=i(e,"form-range"),r.jsx("input",{...s,type:"range",ref:t,className:d(o,e),id:a||n})});G.displayName="FormRange";const Z=G,O=l.forwardRef(({bsPrefix:e,size:o,htmlSize:a,className:s,isValid:t=!1,isInvalid:n=!1,id:m,...f},F)=>{const{controlId:c}=l.useContext(p);return e=i(e,"form-select"),r.jsx("select",{...f,size:a,ref:F,className:d(s,e,o&&`${e}-${o}`,t&&"is-valid",n&&"is-invalid"),id:m||c})});O.displayName="FormSelect";const P=O,E=l.forwardRef(({bsPrefix:e,className:o,as:a="small",muted:s,...t},n)=>(e=i(e,"form-text"),r.jsx(a,{...t,ref:n,className:d(o,e,s&&"text-muted")})));E.displayName="FormText";const ee=E,M=l.forwardRef((e,o)=>r.jsx(h,{...e,ref:o,type:"switch"}));M.displayName="Switch";const oe=Object.assign(M,{Input:h.Input,Label:h.Label}),B=l.forwardRef(({bsPrefix:e,className:o,children:a,controlId:s,label:t,...n},m)=>(e=i(e,"form-floating"),r.jsxs(b,{ref:m,className:d(o,e),controlId:s,...n,children:[a,r.jsx("label",{htmlFor:s,children:t})]})));B.displayName="FloatingLabel";const ae=B,se={_ref:N.any,validated:N.bool,as:N.elementType},x=l.forwardRef(({className:e,validated:o,as:a="form",...s},t)=>r.jsx(a,{...s,ref:t,className:d(e,o&&"was-validated")}));x.displayName="Form";x.propTypes=se;const ie=Object.assign(x,{Group:b,Control:Q,Floating:X,Check:h,Switch:oe,Label:Y,Text:ee,Range:Z,Select:P,FloatingLabel:ae});export{ie as F};
