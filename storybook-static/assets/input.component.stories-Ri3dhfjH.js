import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{S as M,a as w}from"./size-mode.type-CSJTD4N0.js";import{C as y}from"./column-stack.component-9cHvKGoz.js";import{R as j}from"./row-stack.component-D3P-nwYQ.js";import{B as l}from"./button.component-Dpo8TRij.js";import{P as b}from"./paragraph-text.component-BNGWNwMi.js";import{I as i,a as B,b as I}from"./input.component-BlO0F_Ow.js";const W={title:"Components/Input",component:i,argTypes:{size:{control:"select",options:[...M]},sizeMode:{control:"select",options:[...w]},width:{control:"select",options:[...B]},inputStyle:{control:"select",options:[...I]},type:{control:"select",options:["button","checkbox","color","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"]},value:{control:"text"},defaultValue:{control:"text"}},args:{size:"medium",sizeMode:"globally-relative",inputStyle:"bordered",type:"text",defaultValue:"111 Eagle Street",placeholder:"Start typing ..."}},a={name:"Example",render:({value:s,...e})=>t.jsx(i,{...e,value:s})},n={name:"Next to Buttons",render:({value:s,...e})=>t.jsxs(y,{horizontalAlignment:"start",style:{fontSize:"1rem"},children:[t.jsxs(j,{gapSize:e.size,children:[t.jsx(i,{...e,value:s}),t.jsx(l,{size:e.size,sizeMode:e.sizeMode,children:"Save Changes"}),t.jsx(l,{size:e.size,sizeMode:e.sizeMode,variant:"secondary",children:"Reset"}),t.jsx(l,{size:e.size,sizeMode:e.sizeMode,variant:"danger",buttonStyle:"link",children:"Delete"})]}),t.jsx(b,{size:e.size,sizeMode:e.sizeMode,children:"This demonstrates a small, inline form. See how the fields all align and are the same height."})]})},r={name:"with parent with set width (300px)",render:({value:s,...e})=>t.jsx("div",{style:{width:"300px",outline:"1px dashed green",padding:"1em"},children:t.jsx(i,{...e,value:s})})},o={name:"with parent with set font-size (40px)",render:({value:s,...e})=>t.jsx("div",{style:{fontSize:"40px"},children:t.jsx(i,{...e,value:s})}),args:{sizeMode:"parent-relative"}};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Example',
  render: ({
    value,
    ...args
  }) => <Input {...args} value={value} />
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,u,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Next to Buttons',
  render: ({
    value,
    ...args
  }) => <ColumnStack horizontalAlignment="start" style={{
    fontSize: '1rem'
  }}>
      <RowStack gapSize={args.size}>
        <Input {...args} value={value} />
        <Button size={args.size} sizeMode={args.sizeMode}>
          Save Changes
        </Button>
        <Button size={args.size} sizeMode={args.sizeMode} variant="secondary">
          Reset
        </Button>
        <Button size={args.size} sizeMode={args.sizeMode} variant="danger" buttonStyle="link">
          Delete
        </Button>
      </RowStack>
      <ParagraphText size={args.size} sizeMode={args.sizeMode}>
        This demonstrates a small, inline form. See how the fields all align and
        are the same height.
      </ParagraphText>
    </ColumnStack>
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var z,g,x;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'with parent with set width (300px)',
  render: ({
    value,
    ...args
  }) => <div style={{
    width: '300px',
    outline: '1px dashed green',
    padding: '1em'
  }}>
      <Input {...args} value={value} />
    </div>
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var S,v,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'with parent with set font-size (40px)',
  render: ({
    value,
    ...args
  }) => <div style={{
    fontSize: '40px'
  }}>
      <Input {...args} value={value} />
    </div>,
  args: {
    sizeMode: 'parent-relative'
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const k=["Example","NextToButton","WithParentWithSetWidth","WithParentWithSetFontSize"],O=Object.freeze(Object.defineProperty({__proto__:null,Example:a,NextToButton:n,WithParentWithSetFontSize:o,WithParentWithSetWidth:r,__namedExportsOrder:k,default:W},Symbol.toStringTag,{value:"Module"}));export{a as E,O as I};
