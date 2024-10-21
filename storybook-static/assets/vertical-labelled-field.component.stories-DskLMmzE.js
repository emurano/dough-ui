import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{I as t}from"./input.component-BlO0F_Ow.js";import{C as y}from"./column-stack.component-9cHvKGoz.js";import{R as N}from"./row-stack.component-D3P-nwYQ.js";import{$ as I,L as M}from"./types-_EHAop3p.js";import{c}from"./use-font-context.hook-C8Me2VC6.js";import{L as $}from"./label.component-CKfPnnIb.js";const k="_VerticalLabelledField_9uotv_1",w="_LabelContainer_9uotv_6",O="_Label_9uotv_6",R="_Width_small_9uotv_13",E="_Width_medium_9uotv_17",z="_Width_large_9uotv_21",A="_FieldContainer_9uotv_29",i={VerticalLabelledField:k,LabelContainer:w,Label:O,"Width_extra-small":"_Width_extra-small_9uotv_9",Width_small:R,Width_medium:E,Width_large:z,"Width_extra-large":"_Width_extra-large_9uotv_25",FieldContainer:A};function r({children:a,className:l,testId:g,style:V,width:n="medium",...p}){const{labelProps:P,fieldProps:j}=I(p),{label:C}=p,W=c(l,i.VerticalLabelledField,i[`Width_${n}`]),v=c(i.Label,i[`Width_${n}`]),S=c(i.FieldContainer,i[`Width_${n}`]);return e.jsxs("div",{style:V,"data-testid":g,className:W,children:[e.jsx($,{...P,className:v,children:C}),e.jsx("div",{className:S,children:a(j)})]})}r.__docgenInfo={description:"",methods:[],displayName:"VerticalLabelledField",props:{children:{required:!0,tsType:{name:"signature",type:"function",raw:"(fieldProps: LabelAria['fieldProps']) => ReactNode",signature:{arguments:[{type:{name:"LabelAria['fieldProps']",raw:"LabelAria['fieldProps']"},name:"fieldProps"}],return:{name:"ReactNode"}}},description:""},width:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof LabelledFieldFieldWidths)[number]"},description:"",defaultValue:{value:"'medium'",computed:!1}}},composes:["BaseComponentProps","LabelAriaProps"]};const T={title:"Components/VerticalLabelledField",component:r,argTypes:{label:{control:"text"},width:{control:"select",options:[...M]}},args:{label:"Expected Delivery Date"}},s={name:"example",render:a=>e.jsx(r,{...a,children:l=>e.jsx(t,{...l})})},o={name:"multiple (horizontal)",render:a=>e.jsxs(N,{children:[e.jsx(r,{...a,label:"Name",children:l=>e.jsx(t,{...l})}),e.jsx(r,{...a,label:"Occupation",children:l=>e.jsx(t,{...l})}),e.jsx(r,{...a,label:"Message",children:l=>e.jsx(t,{...l})})]})},d={name:"multiple (vertical)",render:a=>e.jsxs(y,{children:[e.jsx(r,{...a,label:"Name",children:l=>e.jsx(t,{...l})}),e.jsx(r,{...a,label:"Occupation",children:l=>e.jsx(t,{...l})}),e.jsx(r,{...a,label:"Message",children:l=>e.jsx(t,{...l})})]})};var m,u,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'example',
  render: args => <VerticalLabelledField {...args}>
      {fieldProps => <Input {...fieldProps} />}
    </VerticalLabelledField>
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var _,f,L;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'multiple (horizontal)',
  render: args => <RowStack>
      <VerticalLabelledField {...args} label="Name">
        {fieldProps => <Input {...fieldProps} />}
      </VerticalLabelledField>

      <VerticalLabelledField {...args} label="Occupation">
        {fieldProps => <Input {...fieldProps} />}
      </VerticalLabelledField>

      <VerticalLabelledField {...args} label="Message">
        {fieldProps => <Input {...fieldProps} />}
      </VerticalLabelledField>
    </RowStack>
}`,...(L=(f=o.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var h,x,F;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'multiple (vertical)',
  render: args => <ColumnStack>
      <VerticalLabelledField {...args} label="Name">
        {fieldProps => <Input {...fieldProps} />}
      </VerticalLabelledField>

      <VerticalLabelledField {...args} label="Occupation">
        {fieldProps => <Input {...fieldProps} />}
      </VerticalLabelledField>

      <VerticalLabelledField {...args} label="Message">
        {fieldProps => <Input {...fieldProps} />}
      </VerticalLabelledField>
    </ColumnStack>
}`,...(F=(x=d.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};const q=["Example","MultipleHorizontal","MultipleVertical"],U=Object.freeze(Object.defineProperty({__proto__:null,Example:s,MultipleHorizontal:o,MultipleVertical:d,__namedExportsOrder:q,default:T},Symbol.toStringTag,{value:"Module"}));export{s as E,U as V};
