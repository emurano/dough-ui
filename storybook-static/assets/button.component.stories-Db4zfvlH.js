import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{S as g,a as S}from"./size-mode.type-CSJTD4N0.js";import{C as z}from"./column-stack.component-9cHvKGoz.js";import{R as j}from"./row-stack.component-D3P-nwYQ.js";import{B as s,a as v}from"./button.component-Dpo8TRij.js";const y=["primary","secondary","warning","success","danger"],h={title:"Components/Button",component:s,argTypes:{children:{control:"text"},variant:{control:"select",options:y},size:{control:"select",options:[...g]},sizeMode:{control:"select",options:[...S]},buttonStyle:{control:"select",options:[...v]},onPress:{action:"onPress"}},args:{children:"Save Changes",variant:"primary"}},a={name:"example",render:({children:e,...t})=>r.jsx(s,{...t,children:e})},n={name:"multiple buttons",render:({children:e,...t})=>r.jsxs(j,{blockMode:"inline",children:[r.jsx(s,{...t,variant:"primary",children:e}),r.jsx(s,{...t,variant:"secondary",children:e}),r.jsx(s,{...t,variant:"danger",children:e}),r.jsx(s,{...t,variant:"warning",children:e}),r.jsx(s,{...t,variant:"success",children:e})]})},o={name:"all sizes",render:({children:e,...t})=>r.jsxs(z,{children:[r.jsx(s,{...t,size:"extra-small",children:e}),r.jsx(s,{...t,size:"small",children:e}),r.jsx(s,{...t,size:"medium",children:e}),r.jsx(s,{...t,size:"large",children:e}),r.jsx(s,{...t,size:"extra-large",children:e})]})};var i,l,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'example',
  render: ({
    children,
    ...args
  }) => <Button {...args}>{children}</Button>
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,u,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'multiple buttons',
  render: ({
    children,
    ...args
  }) => <RowStack blockMode="inline">
      <Button {...args} variant="primary">
        {children}
      </Button>
      <Button {...args} variant="secondary">
        {children}
      </Button>
      <Button {...args} variant="danger">
        {children}
      </Button>
      <Button {...args} variant="warning">
        {children}
      </Button>
      <Button {...args} variant="success">
        {children}
      </Button>
    </RowStack>
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,B,x;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'all sizes',
  render: ({
    children,
    ...args
  }) => <ColumnStack>
      <Button {...args} size="extra-small">
        {children}
      </Button>
      <Button {...args} size="small">
        {children}
      </Button>
      <Button {...args} size="medium">
        {children}
      </Button>
      <Button {...args} size="large">
        {children}
      </Button>
      <Button {...args} size="extra-large">
        {children}
      </Button>
    </ColumnStack>
}`,...(x=(B=o.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const b=["Example","Multiple","AllSizes"],_=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:o,Example:a,Multiple:n,__namedExportsOrder:b,default:h},Symbol.toStringTag,{value:"Module"}));export{_ as B,a as E};
