import{r as d}from"./app-BIZ5UUjZ.js";function g(t={}){const{strict:i=!0,errorMessage:s="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:l}=t,o=d.createContext(void 0);o.displayName=l;function n(){var r;const a=d.useContext(o);if(!a&&i){const e=new Error(s);throw e.name="ContextError",(r=Error.captureStackTrace)==null||r.call(Error,e,n),e}return a}return[o.Provider,n,o]}var p=new Set(["id","type","style","title","role","tabIndex","htmlFor","width","height","abbr","accept","acceptCharset","accessKey","action","allowFullScreen","allowTransparency","alt","async","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","challenge","charset","checked","cite","class","className","cols","colSpan","command","content","contentEditable","contextMenu","controls","coords","crossOrigin","data","dateTime","default","defer","dir","disabled","download","draggable","dropzone","encType","for","form","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","headers","hidden","high","href","hrefLang","httpEquiv","icon","inputMode","isMap","itemId","itemProp","itemRef","itemScope","itemType","kind","label","lang","list","loop","manifest","max","maxLength","media","mediaGroup","method","min","minLength","multiple","muted","name","noValidate","open","optimum","pattern","ping","placeholder","poster","preload","radioGroup","referrerPolicy","readOnly","rel","required","rows","rowSpan","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","slot","sortable","span","spellCheck","src","srcDoc","srcSet","start","step","target","translate","typeMustMatch","useMap","value","wmode","wrap"]),u=new Set(["onCopy","onCut","onPaste","onLoad","onError","onWheel","onScroll","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onSubmit","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onPointerDown","onPointerEnter","onPointerLeave","onPointerUp","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd"]),m=/^(data-.*)$/,h=/^(aria-.*)$/,c=/^(on[A-Z].*)$/;function v(t,i={}){let{labelable:s=!0,enabled:l=!0,propNames:o,omitPropNames:n,omitEventNames:r}=i,a={};if(!l)return t;for(const e in t)n!=null&&n.has(e)||r!=null&&r.has(e)&&c.test(e)||c.test(e)&&!u.has(e)||(Object.prototype.hasOwnProperty.call(t,e)&&(p.has(e)||s&&h.test(e)||o!=null&&o.has(e)||m.test(e))||c.test(e))&&(a[e]=t[e]);return a}export{g as c,v as f};