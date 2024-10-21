import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{S as N,a as x}from"./size-mode.type-CSJTD4N0.js";import{P as z}from"./paragraph-text.component-BNGWNwMi.js";import{H as u,a as M}from"./heading.component-PQiNkCI9.js";const q={title:"Components/Heading",component:u,parameters:{layout:"padded"},argTypes:{children:{control:"text"},size:{control:"select",options:[...N]},sizeMode:{control:"select",options:[...x]},level:{control:"select",options:[...M]}},args:{size:"medium",children:"The overall pleasantness of all things pink"}},n={render:({children:t,...i})=>e.jsx(u,{...i,children:t})},s={name:"with parent with own font-size (36px)",render:({children:t,size:i,sizeMode:a,...l})=>e.jsxs("div",{style:{fontSize:"36px",outline:"1px dotted red"},children:[e.jsx(u,{...l,size:i,sizeMode:a,children:t}),e.jsx(z,{size:i,sizeMode:a,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt posuere nunc ut porttitor. Nullam efficitur ultricies ullamcorper. Morbi nec dictum massa, non egestas justo. Nulla vel dignissim nibh. Nunc porta felis turpis, non tempor est pulvinar at. Etiam laoreet orci at nisi lobortis, sit amet porta ligula tristique. Aliquam nisi nunc, lacinia eu magna eget, euismod interdum nulla. Cras sodales tellus vel urna feugiat, eu mollis nisi hendrerit. Nulla placerat velit ac malesuada imperdiet. Mauris tellus felis, tincidunt vitae rhoncus ut, aliquet et neque. Nam vitae felis diam. Vivamus tincidunt erat ac urna feugiat, et iaculis sem cursus. Aenean interdum molestie metus at auctor."})]}),args:{sizeMode:"parent-relative"}},r={name:"With paragraphs",render:({children:t,size:i,sizeMode:a,...l})=>e.jsxs(e.Fragment,{children:[e.jsx(u,{...l,size:i,sizeMode:a,children:t}),e.jsx(z,{size:i,sizeMode:a,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt posuere nunc ut porttitor. Nullam efficitur ultricies ullamcorper. Morbi nec dictum massa, non egestas justo. Nulla vel dignissim nibh. Nunc porta felis turpis, non tempor est pulvinar at. Etiam laoreet orci at nisi lobortis, sit amet porta ligula tristique. Aliquam nisi nunc, lacinia eu magna eget, euismod interdum nulla. Cras sodales tellus vel urna feugiat, eu mollis nisi hendrerit. Nulla placerat velit ac malesuada imperdiet. Mauris tellus felis, tincidunt vitae rhoncus ut, aliquet et neque. Nam vitae felis diam. Vivamus tincidunt erat ac urna feugiat, et iaculis sem cursus. Aenean interdum molestie metus at auctor."})]})};var o,c,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: ({
    children,
    ...args
  }) => <Heading {...args}>{children}</Heading>
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'with parent with own font-size (36px)',
  render: ({
    children,
    size,
    sizeMode,
    ...args
  }) => <div style={{
    fontSize: '36px',
    outline: '1px dotted red'
  }}>
      <Heading {...args} size={size} sizeMode={sizeMode}>
        {children}
      </Heading>
      <ParagraphText size={size} sizeMode={sizeMode}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt
        posuere nunc ut porttitor. Nullam efficitur ultricies ullamcorper. Morbi
        nec dictum massa, non egestas justo. Nulla vel dignissim nibh. Nunc
        porta felis turpis, non tempor est pulvinar at. Etiam laoreet orci at
        nisi lobortis, sit amet porta ligula tristique. Aliquam nisi nunc,
        lacinia eu magna eget, euismod interdum nulla. Cras sodales tellus vel
        urna feugiat, eu mollis nisi hendrerit. Nulla placerat velit ac
        malesuada imperdiet. Mauris tellus felis, tincidunt vitae rhoncus ut,
        aliquet et neque. Nam vitae felis diam. Vivamus tincidunt erat ac urna
        feugiat, et iaculis sem cursus. Aenean interdum molestie metus at
        auctor.
      </ParagraphText>
    </div>,
  args: {
    sizeMode: 'parent-relative'
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,f,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'With paragraphs',
  render: ({
    children,
    size,
    sizeMode,
    ...args
  }) => <>
      <Heading {...args} size={size} sizeMode={sizeMode}>
        {children}
      </Heading>
      <ParagraphText size={size} sizeMode={sizeMode}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt
        posuere nunc ut porttitor. Nullam efficitur ultricies ullamcorper. Morbi
        nec dictum massa, non egestas justo. Nulla vel dignissim nibh. Nunc
        porta felis turpis, non tempor est pulvinar at. Etiam laoreet orci at
        nisi lobortis, sit amet porta ligula tristique. Aliquam nisi nunc,
        lacinia eu magna eget, euismod interdum nulla. Cras sodales tellus vel
        urna feugiat, eu mollis nisi hendrerit. Nulla placerat velit ac
        malesuada imperdiet. Mauris tellus felis, tincidunt vitae rhoncus ut,
        aliquet et neque. Nam vitae felis diam. Vivamus tincidunt erat ac urna
        feugiat, et iaculis sem cursus. Aenean interdum molestie metus at
        auctor.
      </ParagraphText>
    </>
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const b=["Primary","WithParentWithOwnFontSize","WithParagraphs"],W=Object.freeze(Object.defineProperty({__proto__:null,Primary:n,WithParagraphs:r,WithParentWithOwnFontSize:s,__namedExportsOrder:b,default:q},Symbol.toStringTag,{value:"Module"}));export{W as H,n as P,r as W};
