import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{B as i}from"./button.component-Dpo8TRij.js";import{H as l}from"./heading.component-PQiNkCI9.js";import{P as c}from"./paragraph-text.component-BNGWNwMi.js";import{G as p,J as m,A as d,B as g}from"./justify.type-NDF0D5wW.js";import{R as s}from"./row-stack.component-D3P-nwYQ.js";const u={title:"Layout Primitives/RowStack",component:s,parameters:{layout:"padded"},argTypes:{gapSize:{control:"select",options:[...p]},horizontalJustify:{control:"select",options:[...m]},verticalAlignment:{control:"select",options:[...d]},blockMode:{control:"select",options:[...g]}},args:{}},o={render:n=>e.jsxs(s,{...n,children:[e.jsx(l,{children:"Good Afternoon"}),e.jsx(c,{children:"Hello, there!"}),e.jsx(i,{children:"Hello"})]})};var r,t,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <RowStack {...args}>
      <Heading>Good Afternoon</Heading>
      <ParagraphText>Hello, there!</ParagraphText>
      <Button>Hello</Button>
    </RowStack>
}`,...(a=(t=o.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const f=["Primary"],H=Object.freeze(Object.defineProperty({__proto__:null,Primary:o,__namedExportsOrder:f,default:u},Symbol.toStringTag,{value:"Module"}));export{o as P,H as S};
