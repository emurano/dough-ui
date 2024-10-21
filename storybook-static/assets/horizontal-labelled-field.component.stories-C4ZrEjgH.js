import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{I as t}from"./input.component-BlO0F_Ow.js";import{C as W}from"./column-stack.component-9cHvKGoz.js";import{R as v}from"./row-stack.component-D3P-nwYQ.js";import{$,L as O,a as R}from"./types-_EHAop3p.js";import{c as p}from"./use-font-context.hook-C8Me2VC6.js";import{L as T}from"./label.component-CKfPnnIb.js";const E="_HorizontalLabelledField_13a4p_1",V="_LabelContainer_13a4p_7",A="_Label_13a4p_7",q="_Width_small_13a4p_14",D="_Width_medium_13a4p_18",B="_Width_large_13a4p_22",G="_FieldContainer_13a4p_30",i={HorizontalLabelledField:E,LabelContainer:V,Label:A,"Width_extra-small":"_Width_extra-small_13a4p_10",Width_small:q,Width_medium:D,Width_large:B,"Width_extra-large":"_Width_extra-large_13a4p_26",FieldContainer:G};function r({children:a,className:l,testId:j,style:P,labelWidth:w="medium",fieldWidth:y="extra-small",...c}){const{labelProps:C,fieldProps:S}=$(c),{label:I}=c,N=p(l,i.HorizontalLabelledField),k=p(i.LabelContainer,i[`Width_${w}`]),M=p(i.FieldContainer,i[`Width_${y}`]);return e.jsxs("div",{style:P,"data-testid":j,className:N,children:[e.jsx(T,{...C,className:k,children:I}),e.jsx("div",{className:M,children:a(S)})]})}r.__docgenInfo={description:"",methods:[],displayName:"HorizontalLabelledField",props:{children:{required:!0,tsType:{name:"signature",type:"function",raw:"(fieldProps: LabelAria['fieldProps']) => ReactNode",signature:{arguments:[{type:{name:"LabelAria['fieldProps']",raw:"LabelAria['fieldProps']"},name:"fieldProps"}],return:{name:"ReactNode"}}},description:""},labelWidth:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof LabelledFieldLabelWidths)[number]"},description:"",defaultValue:{value:"'medium'",computed:!1}},fieldWidth:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof LabelledFieldFieldWidths)[number]"},description:"",defaultValue:{value:"'extra-small'",computed:!1}}},composes:["BaseComponentProps","LabelAriaProps"]};const J={title:"Components/HorizontalLabelledField",component:r,argTypes:{label:{control:"text"},fieldWidth:{control:"select",options:[...O]},labelWidth:{control:"select",options:[...R]}},args:{label:"Expected Delivery Date",labelWidth:"small",fieldWidth:"large"}},o={name:"example",render:a=>e.jsx(r,{...a,children:l=>e.jsx(t,{...l})})},s={name:"multiple (horizontally)",render:a=>e.jsxs(v,{children:[e.jsx(r,{...a,label:"Name",children:l=>e.jsx(t,{...l,width:"full"})}),e.jsx(r,{...a,label:"Occupation",children:l=>e.jsx(t,{...l,width:"full"})}),e.jsx(r,{...a,label:"Message",children:l=>e.jsx(t,{...l,width:"full"})})]})},d={name:"multiple (verically)",render:a=>e.jsxs(W,{children:[e.jsx(r,{...a,label:"Name",children:l=>e.jsx(t,{...l,width:"full"})}),e.jsx(r,{...a,label:"Occupation",children:l=>e.jsx(t,{...l,width:"full"})}),e.jsx(r,{...a,label:"Message",children:l=>e.jsx(t,{...l,width:"full"})})]})},n={name:"long label text",render:a=>e.jsx(W,{children:e.jsx(r,{...a,children:l=>e.jsx(t,{...l,width:"full"})})}),args:{label:"Very long label text right here",labelWidth:"small"}};var m,u,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'example',
  render: args => <HorizontalLabelledField {...args}>
      {fieldProps => <Input {...fieldProps} />}
    </HorizontalLabelledField>
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,h,_;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'multiple (horizontally)',
  render: args => <RowStack>
      <HorizontalLabelledField {...args} label="Name">
        {fieldProps => <Input {...fieldProps} width="full" />}
      </HorizontalLabelledField>

      <HorizontalLabelledField {...args} label="Occupation">
        {fieldProps => <Input {...fieldProps} width="full" />}
      </HorizontalLabelledField>

      <HorizontalLabelledField {...args} label="Message">
        {fieldProps => <Input {...fieldProps} width="full" />}
      </HorizontalLabelledField>
    </RowStack>
}`,...(_=(h=s.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var L,x,g;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'multiple (verically)',
  render: args => <ColumnStack>
      <HorizontalLabelledField {...args} label="Name">
        {fieldProps => <Input {...fieldProps} width="full" />}
      </HorizontalLabelledField>

      <HorizontalLabelledField {...args} label="Occupation">
        {fieldProps => <Input {...fieldProps} width="full" />}
      </HorizontalLabelledField>

      <HorizontalLabelledField {...args} label="Message">
        {fieldProps => <Input {...fieldProps} width="full" />}
      </HorizontalLabelledField>
    </ColumnStack>
}`,...(g=(x=d.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var F,z,H;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'long label text',
  render: args => <ColumnStack>
      <HorizontalLabelledField {...args}>
        {fieldProps => <Input {...fieldProps} width="full" />}
      </HorizontalLabelledField>
    </ColumnStack>,
  args: {
    label: 'Very long label text right here',
    labelWidth: 'small'
  }
}`,...(H=(z=n.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};const K=["Example","MultipleHorizontally","MultipleVertically","LongLabelText"],ae=Object.freeze(Object.defineProperty({__proto__:null,Example:o,LongLabelText:n,MultipleHorizontally:s,MultipleVertically:d,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{o as E,ae as H};
