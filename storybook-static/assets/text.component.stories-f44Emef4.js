import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{S as W,a as _}from"./size-mode.type-CSJTD4N0.js";import{T as a}from"./text.component-BSQFrYy0.js";const G={title:"Components/Text",component:a,parameters:{layout:"padded"},argTypes:{size:{control:"select",options:[...W]},sizeMode:{control:"select",options:[..._]},children:{control:"text"}},args:{size:"medium",sizeMode:"parent-relative",children:"The quick brown fox jumped over the lazy dog"}},t={render:e=>r.jsx(a,{...e,children:e.children})},n={name:"Within parent with relative size",render:e=>r.jsxs("div",{style:{fontSize:"50px"},children:["Raw text (font-size 50px)",r.jsx("br",{}),r.jsx(a,{...e,children:e.children})]}),args:{sizeMode:"parent-relative"}},s={name:"Large Text",render:e=>r.jsx(a,{...e,children:e.children}),args:{size:"large",sizeMode:void 0}},i={name:"Parent relative with large text",render:e=>r.jsxs("div",{style:{fontSize:"25px"},children:["Raw text (font-size 25px)",r.jsx("br",{}),r.jsx(a,{...e,children:e.children})]}),args:{size:"large",sizeMode:"parent-relative"}},l={name:"Parent relative with small text",render:e=>r.jsxs("div",{style:{fontSize:"25px"},children:["Raw text (font-size 25px)",r.jsx("br",{}),r.jsx(a,{...e,children:e.children})]}),args:{size:"small",sizeMode:"parent-relative"}},o={name:"Parent relative with large text",render:e=>r.jsxs("div",{style:{fontSize:"25px"},children:["Raw text (font-size 25px)",r.jsx("br",{}),r.jsx(a,{...e,children:e.children})]}),args:{size:"large",sizeMode:"globally-relative"}},d={name:"Parent relative with small text",render:e=>r.jsxs("div",{style:{fontSize:"25px"},children:["Raw text (font-size 25px)",r.jsx("br",{}),r.jsx(a,{...e,children:e.children})]}),args:{size:"small",sizeMode:"globally-relative"}};var c,x,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Text {...args}>{args.children}</Text>
}`,...(p=(x=t.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var m,g,z;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Within parent with relative size',
  render: args => <div style={{
    fontSize: '50px'
  }}>
      Raw text (font-size 50px)
      <br />
      <Text {...args}>{args.children}</Text>
    </div>,
  args: {
    sizeMode: 'parent-relative'
  }
}`,...(z=(g=n.parameters)==null?void 0:g.docs)==null?void 0:z.source}}};var v,h,u;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Large Text',
  render: args => <Text {...args}>{args.children}</Text>,
  args: {
    size: 'large',
    sizeMode: undefined
  }
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var f,S,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Parent relative with large text',
  render: args => <div style={{
    fontSize: '25px'
  }}>
      Raw text (font-size 25px)
      <br />
      <Text {...args}>{args.children}</Text>
    </div>,
  args: {
    size: 'large',
    sizeMode: 'parent-relative'
  }
}`,...(y=(S=i.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var T,b,j;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Parent relative with small text',
  render: args => <div style={{
    fontSize: '25px'
  }}>
      Raw text (font-size 25px)
      <br />
      <Text {...args}>{args.children}</Text>
    </div>,
  args: {
    size: 'small',
    sizeMode: 'parent-relative'
  }
}`,...(j=(b=l.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var w,R,P;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Parent relative with large text',
  render: args => <div style={{
    fontSize: '25px'
  }}>
      Raw text (font-size 25px)
      <br />
      <Text {...args}>{args.children}</Text>
    </div>,
  args: {
    size: 'large',
    sizeMode: 'globally-relative'
  }
}`,...(P=(R=o.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var M,E,L;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Parent relative with small text',
  render: args => <div style={{
    fontSize: '25px'
  }}>
      Raw text (font-size 25px)
      <br />
      <Text {...args}>{args.children}</Text>
    </div>,
  args: {
    size: 'small',
    sizeMode: 'globally-relative'
  }
}`,...(L=(E=d.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const O=["Primary","WithinParentWithRelative","LargeExample","ParentRelativeLargeExample","ParentRelativeSmallExample","GloballyRelativeLargeExample","GloballyRelativeSmallExample"],A=Object.freeze(Object.defineProperty({__proto__:null,GloballyRelativeLargeExample:o,GloballyRelativeSmallExample:d,LargeExample:s,ParentRelativeLargeExample:i,ParentRelativeSmallExample:l,Primary:t,WithinParentWithRelative:n,__namedExportsOrder:O,default:G},Symbol.toStringTag,{value:"Module"}));export{o as G,s as L,t as P,A as T,i as a,l as b,d as c};
