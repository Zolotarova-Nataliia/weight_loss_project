"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[520],{1875:function(n,e,i){i.d(e,{Z:function(){return D}});i(2791);var t,r,o,a,d,l,s,p,c,h,x,u=i(5705),g=i(132),m=g.Ry().shape({height:g.Rx().min(100,"\u0420\u0456\u0441\u0442 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0432\u0456\u0434 100 \u0441\u043c").max(250,"\u0420\u0456\u0441\u0442 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0434\u043e 250 \u0441\u043c").typeError("\u0420\u0456\u0441\u0442 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0447\u0438\u0441\u043b\u043e\u043c").required("\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435"),age:g.Rx().min(18,"\u0412\u0456\u043a \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0432\u0456\u0434 18 \u043b\u0435\u0442").max(100,"\u0412\u0456\u043a \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0434\u043e 100 \u043b\u0435\u0442").typeError("\u0412\u0456\u043a \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0447\u0438\u0441\u043b\u043e\u043c").required("\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435"),currentWeight:g.Rx().min(20,"\u0412\u0430\u0433\u0430 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0432\u0456\u0434 20 \u043a\u0433").max(500,"\u0412\u0430\u0433\u0430 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0434\u043e 500 \u043a\u0433").typeError("\u0412\u0430\u0433\u0430 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0447\u0438\u0441\u043b\u043e\u043c").required("\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435"),goalWeight:g.Rx().min(20,"\u0412\u0430\u0433\u0430 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0432\u0456\u0434 20 \u043a\u0433").max(500,"\u0412\u0430\u0433\u0430 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0434\u043e 500 \u043a\u0433").typeError("\u0412\u0430\u0433\u0430 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0447\u0438\u0441\u043b\u043e\u043c").required("\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435").when("currentWeight",(function(n,e){return e.test({test:function(e){return!!n&&e<n},message:"\u0411\u0430\u0436\u0430\u043d\u0430 \u0432\u0430\u0433\u0430 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043c\u0435\u043d\u0448\u043e\u044e \u0437\u0430 \u043f\u043e\u0442\u043e\u0447\u043d\u0438\u0439"})})),bloodType:g.Rx().required("\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u043e")}),f=i(168),b=i(7939),w=i(7050),y=b.ZP.div(t||(t=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 32px;\n  margin-left: 10px;\n  margin-right: auto;\n  width: 280px;\n\n  @media screen and (min-width: 768px) {\n    margin-left: 30px;\n    padding-top: 100px;\n    width: 545px;\n    align-items: start;\n  }\n\n  @media screen and (min-width: 1280px) {\n    padding-top: 140px;\n  }\n"]))),Z=b.ZP.h2(r||(r=(0,f.Z)(["\n  margin: 0 0 32px;\n  font-family: 'Verdana';\n  font-weight: 700;\n  font-size: ",";\n  line-height: 1.44;\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    font-size: ",";\n    line-height: 1.2;\n    margin: 0 0 68px;\n  }\n"])),w.Cv,w.lU,w.aZ),v=b.ZP.div(o||(o=(0,f.Z)(["\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: -32px;\n    margin-left: -32px;\n  }\n"]))),j=b.ZP.div(a||(a=(0,f.Z)(["\n  height: 40px;\n  :last-child {\n    position: relative;\n  }\n  @media screen and (max-width: 767px) {\n    :not(:last-child) {\n      margin-bottom: 32px;\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    flex-basis: calc((100% - 64px) / 2);\n    margin-top: 32px;\n    margin-left: 32px;\n\n    :first-child {\n      order: 1;\n    }\n    :nth-child(2) {\n      order: 3;\n    }\n    :nth-child(3) {\n      order: 5;\n    }\n    :nth-child(4) {\n      order: 2;\n    }\n    :nth-child(5) {\n      order: 4;\n    }\n  }\n"]))),k=(0,b.ZP)(u.gN)(d||(d=(0,f.Z)(["\n  padding: 0;\n  width: 240px;\n  height: 40px;\n  border: none;\n  border-bottom: 1px solid ",";\n\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: ",";\n  font-weight: 700;\n  line-height: 1.21;\n  color: ",";\n  background-color: rgba(117, 190, 218, 0);\n\n  ::placeholder {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-weight: 700;\n    font-size: ",";\n    line-height: 1.21;\n    color: ",";\n  }\n\n  :hover,\n  :focus {\n    outline: none;\n  }\n"])),w.$k,w.iS,w.lU,w.iS,w.Vz),P=b.ZP.p(l||(l=(0,f.Z)(["\n  font-size: ",";\n  color: #ec2a2a;\n  margin: 4px 0 0;\n"])),w.iS),z=b.ZP.div(s||(s=(0,f.Z)(["\n  height: 40px;\n  display: flex;\n  align-items: center;\n  font-family: Verdana;\n  font-style: normal;\n  font-weight: 700;\n  font-size: ",";\n  line-height: 1.21;\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    border-bottom: 1px solid ",";\n  }\n"])),w.iS,w.Vz,w.$k),T=b.ZP.div(p||(p=(0,f.Z)(["\n  position: absolute;\n  top: 30px;\n  left: -5px;\n\n  @media screen and (min-width: 768px) {\n    top: 40px;\n  }\n"]))),W=(0,b.ZP)(u.gN)(c||(c=(0,f.Z)(["\n  appearance: none;\n  display: inline-block;\n  position: relative;\n  top: 4px;\n  color: ",";\n  height: 18px;\n  width: 18px;\n  border: 1px solid ",";\n  border-radius: 10px;\n  cursor: pointer;\n  outline: none;\n\n  &:checked::before {\n    content: '';\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    background: ",";\n\n    border-radius: 100%;\n    left: 3px;\n    top: 3px;\n  }\n"])),w.$k,w.Vz,w.tY),V=b.ZP.label(h||(h=(0,f.Z)(["\n  margin-left: 8px;\n\n  font-family: Verdana;\n  font-style: normal;\n  font-weight: 400;\n  font-size: ",";\n  line-height: 1.21;\n  color: ",";\n\n  &:not(:last-of-type) {\n    margin-right: 24px;\n  }\n\n  ",":checked + & {\n    color: orange;\n  }\n"])),w.iS,w.Vz,W),C=b.ZP.button(x||(x=(0,f.Z)(["\n  margin-top: 65px;\n  display: block;\n  padding: 0;\n  width: 210px;\n  height: 44px;\n  font-family: Verdana;\n  font-weight: 700;\n  font-size: ",";\n  line-height: 1.21;\n  letter-spacing: 0.04em;\n  color: ",";\n  background: ",";\n  box-shadow: 0 4px 10px rgb(252 132 45 / 50%);\n  border: 2px solid ",";\n  border-radius: 30px;\n  cursor: pointer;\n  transition: color 250ms ease-in;\n  margin-left: auto;\n  margin-right: auto;\n  @media screen and (min-width: 768px) {\n    margin-top: 60px;\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  @media screen and (min-width: 1280px) {\n    margin-left: auto;\n  }\n\n  :disabled {\n    background: #edb084;\n    pointer-events: none;\n    border: none;\n  }\n\n  :hover {\n    background: #ea7827;\n  }\n"])),w.iS,w.ou,w.tY,w.tY),R=i(5687),S=i(6030),E=i(4289),F=i(6960),O=(i(5462),i(6871)),q=i(184),D=function(n){var e=n.onOpen,i=n.getData,t=(0,S.I0)(),r=(0,O.s0)(),o=(0,S.v9)(E.M7);return(0,q.jsxs)(y,{children:[(0,q.jsx)(Z,{children:"\u041f\u043e\u0440\u0430\u0445\u0443\u0439 \u0441\u0432\u043e\u044e \u0434\u0435\u043d\u043d\u0443 \u043d\u043e\u0440\u043c\u0443 \u043a\u0430\u043b\u043e\u0440\u0456\u0439 \u043f\u0440\u044f\u043c\u043e \u0437\u0430\u0440\u0430\u0437"}),(0,q.jsx)(u.J9,{initialValues:{height:"",age:"",currentWeight:"",goalWeight:"",bloodType:"1"},validationSchema:m,onSubmit:function(n,a){var d=a.resetForm;try{o?(t(R.fetchDailyRateAuthorized(n)),r("/diary")):(i(n),e())}catch(l){F.Am.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0456\u0437\u043d\u0456\u0448\u0435!")}finally{d()}},validateOnBlur:!0,children:function(n){var e=n.errors,i=n.touched,t=n.isValid,r=n.dirty;return(0,q.jsxs)(u.l0,{children:[(0,q.jsxs)(v,{children:[(0,q.jsxs)(j,{children:[(0,q.jsx)(k,{name:"height",placeholder:"\u0417\u0440\u0456\u0441\u0442 *"}),i.height&&e.height&&(0,q.jsx)(P,{children:e.height})]}),(0,q.jsxs)(j,{children:[(0,q.jsx)(k,{id:"age",name:"age",placeholder:"\u0412\u0456\u043a *"}),i.age&&e.age&&(0,q.jsx)(P,{children:e.age})]}),(0,q.jsxs)(j,{children:[(0,q.jsx)(k,{id:"currentWeight",name:"currentWeight",placeholder:"\u041f\u043e\u0442\u043e\u0447\u043d\u0430 \u0432\u0430\u0433\u0430 *"}),i.currentWeight&&e.currentWeight&&(0,q.jsx)(P,{children:e.currentWeight})]}),(0,q.jsxs)(j,{children:[(0,q.jsx)(k,{id:"goalWeight",name:"goalWeight",placeholder:"\u0411\u0430\u0436\u0430\u043d\u0430 \u0432\u0430\u0433\u0430 *"}),i.goalWeight&&e.goalWeight&&(0,q.jsx)(P,{children:e.goalWeight})]}),(0,q.jsxs)(j,{children:[(0,q.jsx)(z,{id:"blood-group",children:"\u0413\u0440\u0443\u043f\u0430 \u043a\u0440\u043e\u0432\u0456 *"}),(0,q.jsxs)(T,{role:"group","aria-labelledby":"blood-group",children:[(0,q.jsx)(W,{type:"radio",id:"bloodType1",name:"bloodType",value:"1",checked:!0}),(0,q.jsx)(V,{htmlFor:"bloodType1",children:"1"}),(0,q.jsx)(W,{type:"radio",id:"bloodType2",name:"bloodType",value:"2"}),(0,q.jsx)(V,{htmlFor:"bloodType2",children:"2"}),(0,q.jsx)(W,{type:"radio",id:"bloodType3",name:"bloodType",value:"3"}),(0,q.jsx)(V,{htmlFor:"bloodType3",children:"3"}),(0,q.jsx)(W,{type:"radio",id:"bloodType4",name:"bloodType",value:"4"}),(0,q.jsx)(V,{htmlFor:"bloodType4",children:"4"})]})]})]}),(0,q.jsx)(C,{type:"submit",disabled:!t||!r,children:"\u041f\u043e\u0447\u0430\u0442\u0438 \u0445\u0443\u0434\u043d\u0443\u0442\u0438"})]})}})]})}},265:function(n,e,i){i.d(e,{I:function(){return r}});var t=i(885);function r(n,e){for(var i=0,r=Object.entries(n);i<r.length;i++){var o=(0,t.Z)(r[i],2),a=o[0],d=o[1];if(e===a)return d.ua}}},8520:function(n,e,i){i.r(e),i.d(e,{default:function(){return fn}});var t,r,o,a,d,l,s,p,c,h,x,u,g,m,f,b,w,y,Z=i(5861),v=i(885),j=i(7757),k=i.n(j),P=i(2791),z=i(1875),T=i(168),W=i(7939),V=i(5901),C=i(3356),R=W.ZP.main(t||(t=(0,T.Z)(["\n  @media screen and (min-width: 320px) and (max-width: 1279px) {\n    position: relative;\n  }\n"]))),S=W.ZP.div(r||(r=(0,T.Z)(["\n  display: none;\n  @media screen and (min-width: 768px) and (max-width: 1279px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-position: right bottom;\n    height: 100vh;\n    width: 100vw;\n    z-index: -1;\n  }\n"])),V),E=W.ZP.div(o||(o=(0,T.Z)(["\n  @media screen and (max-width: 1279px) {\n    display: none;\n  }\n  @media screen and (min-width: 1280px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: right;\n    height: 100vh;\n    width: 100vw;\n    z-index: -1;\n  }\n"])),C),F=i(2121),O=i(7050),q=i(6053),D=i(4373),L=W.ZP.div(a||(a=(0,T.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  z-index: 1200;\n  @media screen and (min-width: 768px) {\n    background-color: rgba(33, 33, 33, 0.12);\n  }\n"]))),U=W.ZP.div(d||(d=(0,T.Z)(["\nposition: relative;\nbackground-color: white;\n@media screen and (min-width: 120px) and (max-width: 767px) {\n    max-width: 350px;\n    border: 1px solid ",";\n}\n@media screen and (min-width: 768px) {\n    max-width: 672px;\n  }\n"])),O.$k),$=W.ZP.div(l||(l=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 120px;\n  @media screen and (min-width: 768px) {\n    padding: 72px 130px 72px 130px;\n  }\n  @media screen and (min-width: 1280px) {\n    padding-top: 64px;\n  }\n"]))),_=W.ZP.div(s||(s=(0,T.Z)(["\n@media screen and (min-width: 768px) {\n    display: none;\n  }\n"]))),N=W.ZP.div(p||(p=(0,T.Z)(["\n  width: 100%;\n  height: 40px;\n  background: #eff1f3;\n  margin-bottom: 40px;\n"]))),A=(0,W.ZP)(q.nfZ)(c||(c=(0,T.Z)(["\n  position: absolute;\n  right: 13px;\n  top: 20px;\n  width: 12px;\n  height: 12px;\n  cursor: pointer;\n  transition: 0.5s;\n  @media screen and (min-width: 320px) and (max-width: 767px) {\n    display: none;\n}\n :hover {\n      transform: scale(1.3);  \n    }\n"]))),I=(0,W.ZP)(D.iXN)(h||(h=(0,T.Z)(["\nmargin-top: 12px;\nmargin-left: 15px;\ncursor: pointer;\n"]))),X=i(5671),Y=i(3144),G=i(136),K=i(7277),M=i(4164),Q=i(184),B=document.querySelector("#modal-root"),H=function(n){(0,G.Z)(i,n);var e=(0,K.Z)(i);function i(){return(0,X.Z)(this,i),e.apply(this,arguments)}return(0,Y.Z)(i,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return(0,M.createPortal)((0,Q.jsx)(Q.Fragment,{children:this.props.children}),B)}}]),i}(P.Component),J=H,nn=i(3504),en=i(265),tn=i(4641),rn=i(1204),on=W.ZP.div(x||(x=(0,T.Z)(["\n  color: ",";\n  line-height: 1.2;\n  max-width: 410px;\n"])),O.lU),an=W.ZP.h2(u||(u=(0,T.Z)(["\n  font-size: ",";\n  margin-bottom: 20px;\n  text-align: center;\n  color: ",";\n  @media screen and (min-width: 768px) {\n    font-size: ","\n  }\n"])),O.QO,O.lU,O.HQ),dn=W.ZP.div(g||(g=(0,T.Z)(["\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 30px;\n  text-align: center;\n  letter-spacing: 0.04em;\n  color: ",";\n"])),O.Xu),ln=W.ZP.span(m||(m=(0,T.Z)(["\n  font-size: 48px;\n"]))),sn=W.ZP.h3(f||(f=(0,T.Z)(["\n  font-size: 14px;\n  padding-top: 12px;\n  border-top: 1px solid ",";\n  letter-spacing: 0.04em;\n"])),O.$k),pn=W.ZP.ol(b||(b=(0,T.Z)(["\n  font-size: 14px;\n  list-style: auto;\n  padding: 0 0 0 23px;\n  color: ",";\n  letter-spacing: 0.04em;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 20px;\n  margin-bottom: 40px;\n  max-height: 125px;\n  overflow: auto;\n  ::-webkit-scrollbar {\n    width: 6px;\n  }\n  ::-webkit-scrollbar-track {\n    background: ","; \n  }  \n  ::-webkit-scrollbar-thumb {\n    background: ","; \n  }\n"])),O.Vz,O.Ni,O.Xu),cn=W.ZP.div(w||(w=(0,T.Z)(["\n  color: ",";\n  margin: 20px 0 40px;\n"])),O.Vz),hn=(0,W.ZP)(rn.z)(y||(y=(0,T.Z)(["\n  margin: 0 auto;\n  display: block;\n  width: 210px;\n"])));function xn(n){var e=n.dailyRate,i=e.uniqCategories,t=e.dailyCalories;return(0,Q.jsxs)(on,{children:[(0,Q.jsx)(an,{children:"\u0412\u0430\u0448\u0430 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u0430 \u0434\u043e\u0431\u043e\u0432\u0430 \u043d\u043e\u0440\u043c\u0430 \u0441\u043f\u043e\u0436\u0438\u0432\u0430\u043d\u043d\u044f \u043a\u0430\u043b\u043e\u0440\u0456\u0439 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c"}),(0,Q.jsxs)(dn,{children:[(0,Q.jsx)(ln,{children:t})," \u043a\u041a\u0430\u043b"]}),(0,Q.jsx)(sn,{children:"\u041d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u043e \u0432\u0436\u0438\u0432\u0430\u0442\u0438"}),i.length>0?(0,Q.jsx)(pn,{children:i.map((function(n,e){return(0,Q.jsx)("li",{children:(0,en.I)(tn.Z,n)},e)}))}):(0,Q.jsx)(cn,{children:"\u0422\u0443\u0442 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u0438\u043c\u0435\u0442\u044c\u0441\u044f \u0432\u0430\u0448\u0430 \u0434\u0456\u0454\u0442\u0430"}),(0,Q.jsx)(nn.OL,{to:"/registration",children:(0,Q.jsx)(hn,{primary:!0,children:"\u041f\u043e\u0447\u0430\u0442\u0438 \u0445\u0443\u0434\u043d\u0443\u0442\u0438"})})]})}var un=function(n){var e=n.isOpen,i=n.onCancel,t=n.dailyRate;return(0,Q.jsx)(Q.Fragment,{children:e&&(0,Q.jsx)(J,{children:(0,Q.jsx)(L,{onClick:i,children:(0,Q.jsxs)(U,{onClick:function(n){n.stopPropagation()},children:[(0,Q.jsxs)(_,{children:[(0,Q.jsx)(F.Z,{}),(0,Q.jsx)(N,{children:(0,Q.jsx)("button",{type:"button",onClick:i,children:(0,Q.jsx)(I,{})})})]}),(0,Q.jsx)(A,{onClick:i}),(0,Q.jsx)($,{children:(0,Q.jsx)(xn,{dailyRate:t})})]})})})})},gn=i(2052),mn=i(6960),fn=function(){var n=(0,P.useState)(!1),e=(0,v.Z)(n,2),i=e[0],t=e[1],r=(0,P.useState)(null),o=(0,v.Z)(r,2),a=o[0],d=o[1];(0,P.useEffect)((function(){var n=function(n){"Escape"===n.key&&t(!1)};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[]);var l=function(){var n=(0,Z.Z)(k().mark((function n(e){var i,t;return k().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(null),n.prev=1,n.next=4,(0,gn.P)(e);case 4:i=n.sent,t=i.data,d(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),mn.Am.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0456\u0437\u043d\u0456\u0448\u0435");case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}();return(0,Q.jsxs)(P.Fragment,{children:[(0,Q.jsx)(F.Z,{}),(0,Q.jsxs)(R,{children:[(0,Q.jsx)(z.Z,{onOpen:function(){return t(!0)},getData:l}),(0,Q.jsx)(S,{}),(0,Q.jsx)(E,{}),a&&(0,Q.jsx)(un,{isOpen:i,onCancel:function(){return t(!1)},dailyRate:a})]})]})}},4641:function(n,e){e.Z={"\u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438":{ua:"\u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u0456 \u043d\u0430\u043f\u043e\u0457",en:"alcoholic drinks"},"\u0431\u0435\u0437\u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438":{ua:"\u0431\u0435\u0437\u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u0456 \u043d\u0430\u043f\u043e\u0457",en:"soft drinks"},"\u0433\u0440\u0438\u0431\u044b":{ua:"\u0433\u0440\u0438\u0431\u0438",en:"mushrooms"},"\u0437\u0435\u0440\u043d\u043e\u0432\u044b\u0435":{ua:"\u0437\u0435\u0440\u043d\u043e\u0432\u0456",en:"cereals"},"\u043a\u043e\u043b\u0431\u0430\u0441\u0430":{ua:"\u043a\u043e\u0432\u0431\u0430\u0441\u0430",en:"sausage"},"\u043a\u0443\u043d\u0436\u0443\u0442":{ua:"\u043a\u0443\u043d\u0436\u0443\u0442",en:"sesame"},"\u043c\u0430\u043a":{ua:"\u043c\u0430\u043a",en:"poppy"},"\u043c\u043e\u043b\u043e\u0447\u043d\u044b\u0435":{ua:"\u043c\u043e\u043b\u043e\u0447\u043d\u0456",en:"dairy products"},"\u043c\u0430\u0441\u043b\u0430 \u0438 \u0436\u0438\u0440\u044b":{ua:"\u043e\u043b\u0456\u0457 \u0442\u0430 \u0436\u0438\u0440\u0438",en:"oils and fats"},"\u043c\u0443\u0447\u043d\u044b\u0435":{ua:"\u0431\u043e\u0440\u043e\u0448\u043d\u044f\u043d\u0456",en:"flour products"},"\u043c\u044f\u0441\u043e":{ua:"\u043c'\u044f\u0441\u043e",en:"meat"},"\u043e\u0440\u0435\u0445\u0438":{ua:"\u0433\u043e\u0440\u0456\u0445\u0438",en:"nuts"},"\u043e\u0432\u043e\u0449\u0438 \u0438 \u0437\u0435\u043b\u0435\u043d\u044c":{ua:"\u043e\u0432\u043e\u0447\u0456 \u0442\u0430 \u0437\u0435\u043b\u0435\u043d\u044c",en:"vegetables and herbs"},"\u0440\u044b\u0431\u0430":{ua:"\u0440\u0438\u0431\u0430",en:"fish"},"\u0441\u0435\u043c\u0435\u043d\u0430":{ua:"\u043d\u0430\u0441\u0456\u043d\u043d\u044f",en:"seeds"},"\u0444\u0440\u0443\u043a\u0442\u044b":{ua:"\u0444\u0440\u0443\u043a\u0442\u0438",en:"fruit"},"\u0441\u0443\u0445\u043e\u0444\u0440\u0443\u043a\u0442\u044b":{ua:"\u0441\u0443\u0445\u043e\u0444\u0440\u0443\u043a\u0442\u0438",en:"dried fruits"},"\u044f\u0433\u043e\u0434\u044b":{ua:"\u044f\u0433\u043e\u0434\u0438",en:"berries"},"\u044f\u0439\u0446\u0430":{ua:"\u044f\u0439\u0446\u044f",en:"eggs"}}},3356:function(n,e,i){n.exports=i.p+"static/media/desctop_min.6c63c3e64fb26d672eff.png"},5901:function(n,e,i){n.exports=i.p+"static/media/bg-tablet.952e18454b8b60c84694.png"}}]);
//# sourceMappingURL=520.a5a9d670.chunk.js.map