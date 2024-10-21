import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as r}from"./index-BrnU7xv7.js";import"./index-DJO9vBfz.js";import{ae as i,af as n,ag as a}from"./index-D457VAi_.js";import{T as o,P as h,L as c,a as d,b as x,G as p,c as m}from"./text.component.stories-f44Emef4.js";import"./iframe-uxaDaVsF.js";import"../sb-preview/runtime.js";import"./index-BUNX8oyq.js";import"./index-D-8MO0q_.js";import"./index-0wbOH00J.js";import"./index-DrFu-skq.js";import"./size-mode.type-CSJTD4N0.js";import"./text.component-BSQFrYy0.js";import"./use-font-context.hook-C8Me2VC6.js";import"./font.context-DuSAQ3rx.js";import"./use-text-font.hook-j3ksqt15.js";function l(s){const t={code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:o}),`
`,e.jsx(t.h1,{id:"text",children:"Text"}),`
`,e.jsx(t.p,{children:"Formats the text given in the standard text style."}),`
`,e.jsx(t.p,{children:"Use this component to output generic text when other, more specific text-based components don't meet your requirements."}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsx(a,{}),`
`,e.jsx(t.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(t.p,{children:"Text has a set of preset sizes that you can use:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"extra-small"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"small"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"medium"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"large"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"extra-large"})}),`
`]}),`
`,e.jsx(n,{of:c,sourceState:"shown",withToolbar:!1}),`
`,e.jsx(t.h2,{id:"parent-relative-size",children:"Parent-relative size"}),`
`,e.jsx(t.p,{children:`By default, the size presets are based off the document's root font-size. You can make it so that the size is based on
the parent's font-size.`}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"parent-relative"})," - base the preset size on the parent's font-size"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"globally-relative"})," - base the preset size on the root font-size"]}),`
`]}),`
`,e.jsxs(t.p,{children:["Typically, you'll want the size mode to be ",e.jsx(t.code,{children:"globally-relative"}),", as most of the time text needs to be a predictable size."]}),`
`,e.jsxs(t.p,{children:["When building a compound component with many different components within it, you might want to use ",e.jsx(t.code,{children:"parent-relative"}),`,
as this will make the text's size relative to the rest of the component. This keeps the component's elements congruent
with each other.`]}),`
`,e.jsxs(t.h4,{id:"parent-relative-examples",children:[e.jsx(t.code,{children:"parent-relative"})," Examples"]}),`
`,e.jsx(t.p,{children:"These examples show that the preset size makes the text larger or smaller than the parent's font-size."}),`
`,e.jsxs(t.h4,{id:"parent-relative-with-large-preset",children:[e.jsx(t.code,{children:"parent-relative"})," with large preset"]}),`
`,e.jsx(n,{of:d,sourceState:"shown",withToolbar:!1}),`
`,e.jsxs(t.h4,{id:"parent-relative-with-small-preset",children:[e.jsx(t.code,{children:"parent-relative"})," with small preset"]}),`
`,e.jsx(n,{of:x,sourceState:"shown",withToolbar:!1}),`
`,e.jsxs(t.h4,{id:"globally-relative-examples",children:[e.jsx(t.code,{children:"globally-relative"})," Examples"]}),`
`,e.jsx(t.p,{children:`These examples show that the preset size makes the text larger or smaller than the document's font-size and the parent's
font-size has no effect.`}),`
`,e.jsxs(t.h4,{id:"globally-relative-with-large-preset",children:[e.jsx(t.code,{children:"globally-relative"})," with large preset"]}),`
`,e.jsx(n,{of:p,sourceState:"shown",withToolbar:!1}),`
`,e.jsxs(t.h4,{id:"globally-relative-with-small-preset",children:[e.jsx(t.code,{children:"globally-relative"})," with small preset"]}),`
`,e.jsx(n,{of:m,sourceState:"shown",withToolbar:!1})]})}function M(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(l,{...s})}):l(s)}export{M as default};
