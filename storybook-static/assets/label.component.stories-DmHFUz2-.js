import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{I as b}from"./input.component-BlO0F_Ow.js";import{C as S}from"./column-stack.component-9cHvKGoz.js";import{R as f}from"./row-stack.component-D3P-nwYQ.js";import{L as n}from"./label.component-CKfPnnIb.js";const h={title:"Components/Label",component:n,argTypes:{children:{control:"text"}},args:{children:"Food Preference"}},a={name:"example",render:({children:r,...t})=>e.jsx(n,{...t,children:r})},o={name:"next to text field",render:({children:r,...t})=>e.jsxs(f,{children:[e.jsx(n,{...t,children:r}),e.jsx(b,{type:"text"})]})},s={name:"above text field",render:({children:r,...t})=>e.jsxs(S,{horizontalAlignment:"start",gapSize:"extra-small",children:[e.jsx(n,{...t,children:r}),e.jsx(b,{type:"text"})]})};var l,c,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'example',
  render: ({
    children,
    ...args
  }) => <Label {...args}>{children}</Label>
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,d,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'next to text field',
  render: ({
    children,
    ...args
  }) => <RowStack>
      <Label {...args}>{children}</Label>
      <Input type="text" />
    </RowStack>
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var x,u,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'above text field',
  render: ({
    children,
    ...args
  }) => <ColumnStack horizontalAlignment='start' gapSize='extra-small'>
      <Label {...args}>{children}</Label>
      <Input type="text" />
    </ColumnStack>
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const j=["Example","NextToTextField","AboveTextField"],v=Object.freeze(Object.defineProperty({__proto__:null,AboveTextField:s,Example:a,NextToTextField:o,__namedExportsOrder:j,default:h},Symbol.toStringTag,{value:"Module"}));export{a as E,v as L};
