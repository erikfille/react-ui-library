import{j as $}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";const g=({label:a="Botón",type:y="primary",action:b=()=>{},disabled:B=!1,size:T="medium",fontColor:n,backgroundColor:o,borderColor:s,borderWidth:i,icon:l,className:q=""})=>{const v={"aria-label":`button:${a}`,"data-test":`button:${a}`},e={};return n&&(e.color=n),o&&(e.backgroundColor=o),s&&(i?e.border=`${i} solid ${s}`:e.border=`2px solid ${s}`),$.jsxs("button",{className:`button button--${y} button--${T} ${q}`,style:e||void 0,onClick:b,disabled:B,...v,children:[l||null,a]})};g.__docgenInfo={description:"",methods:[],displayName:"UiButton",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Botón"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"primary" | "outlined"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"outlined"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},action:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"medium"',computed:!1}},width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},fontColor:{required:!1,tsType:{name:"string"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},borderColor:{required:!1,tsType:{name:"string"},description:""},borderWidth:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const h={title:"Basics/UiButton",component:g,tags:["autodocs"],argTypes:{type:{control:"select",options:["primary","secondary","outlined"]}}},t={args:{type:"primary",label:"Button",disabled:!1,action:()=>{console.log("Button action triggered")}}},r={args:{type:"outlined",label:"Button",disabled:!1,action:()=>{console.log("Button action triggered")},borderColor:"grey",fontColor:"grey"}};var d,u,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: "primary",
    label: "Button",
    disabled: false,
    action: () => {
      console.log("Button action triggered");
    }
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,m,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: "outlined",
    label: "Button",
    disabled: false,
    action: () => {
      console.log("Button action triggered");
    },
    borderColor: "grey",
    fontColor: "grey"
  }
}`,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const C=["Primary","Outlined"];export{r as Outlined,t as Primary,C as __namedExportsOrder,h as default};
