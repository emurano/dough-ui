import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{B as l}from"./button.component-Dpo8TRij.js";import{H as i}from"./heading.component-PQiNkCI9.js";import{P as c}from"./paragraph-text.component-BNGWNwMi.js";import{G as m,A as p,J as d,B as u}from"./justify.type-NDF0D5wW.js";import{C as s}from"./column-stack.component-9cHvKGoz.js";const g={title:"Layout Primitives/ColumnStack",component:s,parameters:{layout:"padded"},argTypes:{gapSize:{control:"select",options:[...m]},horizontalAlignment:{control:"select",options:[...p]},verticalJustify:{control:"select",options:[...d]},blockMode:{control:"select",options:[...u]}},args:{}},o={render:n=>e.jsxs(s,{...n,children:[e.jsx(i,{children:"Good Afternoon"}),e.jsx(c,{children:"Hello, there!"}),e.jsx(l,{children:"Hello"})]})};var r,t,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <ColumnStack {...args}>
      <Heading>Good Afternoon</Heading>
      <ParagraphText>Hello, there!</ParagraphText>
      <Button>Hello</Button>
    </ColumnStack>
}`,...(a=(t=o.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const f=["Primary"],H=Object.freeze(Object.defineProperty({__proto__:null,Primary:o,__namedExportsOrder:f,default:g},Symbol.toStringTag,{value:"Module"}));export{o as P,H as S};
