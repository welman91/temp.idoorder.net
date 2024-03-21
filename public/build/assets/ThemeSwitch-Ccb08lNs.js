import{r as s,b as le,c as oe,e as D,g as ne,ab as de,E as ie,j as h,L as E,a6 as ue}from"./app-BIZ5UUjZ.js";import{t as ce,h as pe,m as be,l as me,g as ge,c as l,e as p}from"./index-BsDyj3j9.js";import{a as fe,$ as he}from"./import-BNBOnbT8.js";import xe from"./SunFilledIcon-DgpnawAO.js";import ye from"./MoonFilledIcon-DZIu5Rxt.js";var L=ce({slots:{base:"group relative max-w-fit inline-flex items-center justify-start cursor-pointer touch-none tap-highlight-transparent",wrapper:["px-1","relative","inline-flex","items-center","justify-start","flex-shrink-0","overflow-hidden","bg-default-200","rounded-full",...pe],thumb:["z-10","flex","items-center","justify-center","bg-white","shadow-small","rounded-full","origin-right"],startContent:"z-0 absolute left-1.5 text-current",endContent:"z-0 absolute right-1.5 text-default-600",thumbIcon:"text-black",label:"relative text-foreground select-none"},variants:{color:{default:{wrapper:["group-data-[selected=true]:bg-default-400","group-data-[selected=true]:text-default-foreground"]},primary:{wrapper:["group-data-[selected=true]:bg-primary","group-data-[selected=true]:text-primary-foreground"]},secondary:{wrapper:["group-data-[selected=true]:bg-secondary","group-data-[selected=true]:text-secondary-foreground"]},success:{wrapper:["group-data-[selected=true]:bg-success","group-data-[selected=true]:text-success-foreground"]},warning:{wrapper:["group-data-[selected=true]:bg-warning","group-data-[selected=true]:text-warning-foreground"]},danger:{wrapper:["group-data-[selected=true]:bg-danger","data-[selected=true]:text-danger-foreground"]}},size:{sm:{wrapper:"w-10 h-6 mr-2",thumb:["w-4 h-4 text-tiny","group-data-[selected=true]:ml-4 rtl:group-data-[selected=true]:ml-0 rtl:group-data-[selected=true]:mr-4"],endContent:"text-tiny",startContent:"text-tiny",label:"text-small"},md:{wrapper:"w-12 h-7 mr-2",thumb:["w-5 h-5 text-small","group-data-[selected=true]:ml-5 rtl:group-data-[selected=true]:ml-0 rtl:group-data-[selected=true]:mr-5"],endContent:"text-small",startContent:"text-small",label:"text-medium"},lg:{wrapper:"w-14 h-8 mr-2",thumb:["w-6 h-6 text-medium","group-data-[selected=true]:ml-6 rtl:group-data-[selected=true]:ml-0 rtl:group-data-[selected=true]:mr-6"],endContent:"text-medium",startContent:"text-medium",label:"text-large"}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},disableAnimation:{true:{wrapper:"transition-none",thumb:"transition-none"},false:{wrapper:"transition-background",thumb:"transition-all",startContent:["opacity-0","scale-50","transition-transform-opacity","group-data-[selected=true]:scale-100","group-data-[selected=true]:opacity-100"],endContent:["opacity-100","transition-transform-opacity","group-data-[selected=true]:translate-x-3","group-data-[selected=true]:opacity-0"]}}},defaultVariants:{color:"primary",size:"md",isDisabled:!1,disableAnimation:!1},compoundVariants:[{disableAnimation:!1,size:"sm",class:{thumb:["group-data-[pressed=true]:w-5","group-data-[selected]:group-data-[pressed]:ml-3"]}},{disableAnimation:!1,size:"md",class:{thumb:["group-data-[pressed=true]:w-6","group-data-[selected]:group-data-[pressed]:ml-4"]}},{disableAnimation:!1,size:"lg",class:{thumb:["group-data-[pressed=true]:w-7","group-data-[selected]:group-data-[pressed]:ml-5"]}}]});function we(n,r,o){let{labelProps:b,inputProps:d,isSelected:i,isPressed:m,isDisabled:g,isReadOnly:f}=fe(n,r,o);return{labelProps:b,inputProps:{...d,role:"switch",checked:i},isSelected:i,isPressed:m,isDisabled:g,isReadOnly:f}}function ve(n={}){const[r,o]=be(n,L.variantKeys),{ref:b,as:d,name:i,value:m="",isReadOnly:g=!1,autoFocus:f=!1,startContent:v,endContent:P,defaultSelected:w,isSelected:j,children:x,thumbIcon:M,className:B,classNames:t,onChange:K,onValueChange:I,...y}=r,W=d||"label",C=s.useRef(null),R=me(b,C),$=s.useId(),S=s.useMemo(()=>{const e=y["aria-label"]||typeof x=="string"?x:void 0;return{name:i,value:m,children:x,autoFocus:f,defaultSelected:w,isSelected:j,isDisabled:!!n.isDisabled,isReadOnly:g,"aria-label":e,"aria-labelledby":y["aria-labelledby"]||$,onChange:I}},[m,i,$,x,f,g,j,w,n.isDisabled,y["aria-label"],y["aria-labelledby"],I]),H=he(S),{inputProps:u,isPressed:q,isReadOnly:z}=we(S,H,C),{focusProps:G,isFocused:F,isFocusVisible:N}=le({autoFocus:u.autoFocus}),{hoverProps:J,isHovered:O}=oe({isDisabled:u.disabled}),A=S.isDisabled||z,[Q,T]=s.useState(!1),{pressProps:U}=ge({isDisabled:A,onPressStart(e){e.pointerType!=="keyboard"&&T(!0)},onPressEnd(e){e.pointerType!=="keyboard"&&T(!1)}}),V=A?!1:Q||q,c=u.checked,k=u.disabled,a=s.useMemo(()=>L({...o}),[...Object.values(o)]),X=l(t==null?void 0:t.base,B),Y=e=>({...D(J,U,y,e),ref:R,className:a.base({class:l(X,e==null?void 0:e.className)}),"data-disabled":p(k),"data-selected":p(c),"data-readonly":p(z),"data-focus":p(F),"data-focus-visible":p(N),"data-hover":p(O),"data-pressed":p(V)}),Z=s.useCallback((e={})=>({...e,"aria-hidden":!0,className:l(a.wrapper({class:l(t==null?void 0:t.wrapper,e==null?void 0:e.className)}))}),[a,t==null?void 0:t.wrapper]),_=(e={})=>({...D(u,G,e),ref:C,id:u.id,onChange:ne(K,u.onChange)}),ee=s.useCallback((e={})=>({...e,className:a.thumb({class:l(t==null?void 0:t.thumb,e==null?void 0:e.className)})}),[a,t==null?void 0:t.thumb]),te=s.useCallback((e={})=>({...e,id:$,className:a.label({class:l(t==null?void 0:t.label,e==null?void 0:e.className)})}),[a,t==null?void 0:t.label,k,c]),ae=s.useCallback((e={includeStateProps:!1})=>D({width:"1em",height:"1em",className:a.thumbIcon({class:l(t==null?void 0:t.thumbIcon)})},e.includeStateProps?{isSelected:c}:{}),[a,t==null?void 0:t.thumbIcon,c]),se=s.useCallback((e={})=>({width:"1em",height:"1em",...e,className:a.startContent({class:l(t==null?void 0:t.startContent,e==null?void 0:e.className)})}),[a,t==null?void 0:t.startContent,c]),re=s.useCallback((e={})=>({width:"1em",height:"1em",...e,className:a.endContent({class:l(t==null?void 0:t.endContent,e==null?void 0:e.className)})}),[a,t==null?void 0:t.endContent,c]);return{Component:W,slots:a,classNames:t,domRef:R,children:x,thumbIcon:M,startContent:v,endContent:P,isHovered:O,isSelected:c,isPressed:V,isFocused:F,isFocusVisible:N,isDisabled:k,getBaseProps:Y,getWrapperProps:Z,getInputProps:_,getLabelProps:te,getThumbProps:ee,getThumbIconProps:ae,getStartContentProps:se,getEndContentProps:re}}const De=({className:n,classNames:r})=>{const{theme:o,setTheme:b}=de(),d=ie(),i=()=>{b(o==="light"?"dark":"light")},{Component:m,slots:g,isSelected:f,getBaseProps:v,getInputProps:P,getWrapperProps:w}=ve({isSelected:o==="light"||d,"aria-label":`Switch to ${o==="light"||d?"dark":"light"} mode`,onChange:i});return h.jsxs(m,{...v({className:E("px-px transition-opacity hover:opacity-80 cursor-pointer",n,r==null?void 0:r.base)}),children:[h.jsx(ue,{children:h.jsx("input",{...P()})}),h.jsx("div",{...w(),className:g.wrapper({class:E(["w-auto h-auto","bg-transparent","rounded-lg","flex items-center justify-center","group-data-[selected=true]:bg-transparent","!text-default-500","pt-px","px-0","mx-0"],r==null?void 0:r.wrapper)}),children:!f||d?h.jsx(xe,{size:22}):h.jsx(ye,{size:22})})]})};export{De as ThemeSwitch};