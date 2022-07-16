"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[634],{1875:function(n,e,i){i.d(e,{Z:function(){return D}});i(2791);var t,r,a,o,d,l,s,c,p,h,x,u=i(5705),g=i(132),m=g.Ry().shape({height:g.Rx().min(100,"\u0420\u0456\u0441\u0442 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0432\u0456\u0434 100 \u0441\u043c").max(250,"\u0420\u0456\u0441\u0442 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0434\u043e 250 \u0441\u043c").typeError("\u0420\u0456\u0441\u0442 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0447\u0438\u0441\u043b\u043e\u043c").required("\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435"),age:g.Rx().min(18,"\u0412\u0456\u043a \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0432\u0456\u0434 18 \u043b\u0435\u0442").max(100,"\u0412\u0456\u043a \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0434\u043e 100 \u043b\u0435\u0442").typeError("\u0412\u0456\u043a \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0447\u0438\u0441\u043b\u043e\u043c").required("\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435"),currentWeight:g.Rx().min(20,"\u0412\u0430\u0433\u0430 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0432\u0456\u0434 20 \u043a\u0433").max(500,"\u0412\u0430\u0433\u0430 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0434\u043e 500 \u043a\u0433").typeError("\u0412\u0430\u0433\u0430 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0447\u0438\u0441\u043b\u043e\u043c").required("\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435"),goalWeight:g.Rx().min(20,"\u0412\u0430\u0433\u0430 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0432\u0456\u0434 20 \u043a\u0433").max(500,"\u0412\u0430\u0433\u0430 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0434\u043e 500 \u043a\u0433").typeError("\u0412\u0430\u0433\u0430 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0447\u0438\u0441\u043b\u043e\u043c").required("\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435").when("currentWeight",(function(n,e){return e.test({test:function(e){return!!n&&e<n},message:"\u0411\u0430\u0436\u0430\u043d\u0430 \u0432\u0430\u0433\u0430 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043c\u0435\u043d\u0448\u043e\u044e \u0437\u0430 \u043f\u043e\u0442\u043e\u0447\u043d\u0438\u0439"})})),bloodType:g.Rx().required("\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u043e")}),f=i(168),b=i(7939),j=i(7050),y=b.ZP.div(t||(t=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 32px;\n  margin-left: 10px;\n  margin-right: auto;\n  width: 280px;\n\n  @media screen and (min-width: 768px) {\n    margin-left: 30px;\n    padding-top: 100px;\n    width: 545px;\n    align-items: start;\n  }\n\n  @media screen and (min-width: 1280px) {\n    padding-top: 140px;\n  }\n"]))),w=b.ZP.h2(r||(r=(0,f.Z)(["\n  margin: 0 0 32px;\n  font-family: 'Verdana';\n  font-weight: 700;\n  font-size: ",";\n  line-height: 1.44;\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    font-size: ",";\n    line-height: 1.2;\n    margin: 0 0 68px;\n  }\n"])),j.Cv,j.lU,j.aZ),Z=b.ZP.div(a||(a=(0,f.Z)(["\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: -32px;\n    margin-left: -32px;\n  }\n"]))),v=b.ZP.div(o||(o=(0,f.Z)(["\n  height: 40px;\n  :last-child {\n    position: relative;\n  }\n  @media screen and (max-width: 767px) {\n    :not(:last-child) {\n      margin-bottom: 32px;\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    flex-basis: calc((100% - 64px) / 2);\n    margin-top: 32px;\n    margin-left: 32px;\n\n    :first-child {\n      order: 1;\n    }\n    :nth-child(2) {\n      order: 3;\n    }\n    :nth-child(3) {\n      order: 5;\n    }\n    :nth-child(4) {\n      order: 2;\n    }\n    :nth-child(5) {\n      order: 4;\n    }\n  }\n"]))),k=(0,b.ZP)(u.gN)(d||(d=(0,f.Z)(["\n  padding: 0;\n  width: 240px;\n  height: 40px;\n  border: none;\n  border-bottom: 1px solid ",";\n\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: ",";\n  font-weight: 700;\n  line-height: 1.21;\n  color: ",";\n  background-color: rgba(117, 190, 218, 0);\n\n  ::placeholder {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-weight: 700;\n    font-size: ",";\n    line-height: 1.21;\n    color: ",";\n  }\n\n  :hover,\n  :focus {\n    outline: none;\n  }\n"])),j.$k,j.iS,j.lU,j.iS,j.Vz),P=b.ZP.p(l||(l=(0,f.Z)(["\n  font-size: ",";\n  color: #ec2a2a;\n  margin: 4px 0 0;\n"])),j.iS),z=b.ZP.div(s||(s=(0,f.Z)(["\n\nwidth: 240px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  font-family: Verdana;\n  font-style: normal;\n  font-weight: 700;\n  font-size: ",";\n  line-height: 1.21;\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    border-bottom: 1px solid ",";\n  }\n"])),j.iS,j.Vz,j.$k),T=b.ZP.div(c||(c=(0,f.Z)(["\n  position: absolute;\n  top: 30px;\n  left: -5px;\n\n  @media screen and (min-width: 768px) {\n    top: 40px;\n  }\n"]))),V=(0,b.ZP)(u.gN)(p||(p=(0,f.Z)(["\n  appearance: none;\n  display: inline-block;\n  position: relative;\n  top: 4px;\n  color: ",";\n  height: 18px;\n  width: 18px;\n  border: 1px solid ",";\n  border-radius: 10px;\n  cursor: pointer;\n  outline: none;\n\n  &:checked::before {\n    content: '';\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    background: ",";\n\n    border-radius: 100%;\n    left: 3px;\n    top: 3px;\n  }\n"])),j.$k,j.Vz,j.tY),W=b.ZP.label(h||(h=(0,f.Z)(["\n  margin-left: 8px;\n\n  font-family: Verdana;\n  font-style: normal;\n  font-weight: 400;\n  font-size: ",";\n  line-height: 1.21;\n  color: ",";\n\n  &:not(:last-of-type) {\n    margin-right: 24px;\n  }\n\n  ",":checked + & {\n    color: orange;\n  }\n"])),j.iS,j.Vz,V),F=b.ZP.button(x||(x=(0,f.Z)(["\n  margin-top: 65px;\n  display: block;\n  padding: 0;\n  width: 210px;\n  height: 44px;\n  font-family: Verdana;\n  font-weight: 700;\n  font-size: ",";\n  line-height: 1.21;\n  letter-spacing: 0.04em;\n  color: ",";\n  background: ",";\n  box-shadow: 0 4px 10px rgb(252 132 45 / 50%);\n  border: 2px solid ",";\n  border-radius: 30px;\n  cursor: pointer;\n  transition: color 250ms ease-in;\n  margin-left: auto;\n  margin-right: auto;\n  @media screen and (min-width: 768px) {\n    margin-top: 60px;\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  @media screen and (min-width: 1280px) {\n    margin-left: auto;\n  }\n\n  :disabled {\n    background: #edb084;\n    pointer-events: none;\n    border: none;\n  }\n\n  :hover {\n    background: #ea7827;\n  }\n"])),j.iS,j.ou,j.tY,j.tY),R=i(5687),S=i(6030),q=i(4289),C=i(6960),_=(i(5462),i(6871)),N=i(184),D=function(n){var e=n.onOpen,i=n.getData,t=(0,S.I0)(),r=(0,_.s0)(),a=(0,S.v9)(q.M7);return(0,N.jsxs)(y,{children:[(0,N.jsx)(w,{children:"\u041f\u043e\u0440\u0430\u0445\u0443\u0439 \u0441\u0432\u043e\u044e \u0434\u0435\u043d\u043d\u0443 \u043d\u043e\u0440\u043c\u0443 \u043a\u0430\u043b\u043e\u0440\u0456\u0439 \u043f\u0440\u044f\u043c\u043e \u0437\u0430\u0440\u0430\u0437"}),(0,N.jsx)(u.J9,{initialValues:{height:"",age:"",currentWeight:"",goalWeight:"",bloodType:"1"},validationSchema:m,onSubmit:function(n,o){var d=o.resetForm;try{a?(t(R.fetchDailyRateAuthorized(n)),r("/diary")):(i(n),e())}catch(l){C.Am.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0456\u0437\u043d\u0456\u0448\u0435!")}finally{d()}},validateOnBlur:!0,children:function(n){var e=n.errors,i=n.touched,t=n.isValid,r=n.dirty;return(0,N.jsxs)(u.l0,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsxs)(v,{children:[(0,N.jsx)(k,{name:"height",placeholder:"\u0417\u0440\u0456\u0441\u0442 *"}),i.height&&e.height&&(0,N.jsx)(P,{children:e.height})]}),(0,N.jsxs)(v,{children:[(0,N.jsx)(k,{id:"age",name:"age",placeholder:"\u0412\u0456\u043a *"}),i.age&&e.age&&(0,N.jsx)(P,{children:e.age})]}),(0,N.jsxs)(v,{children:[(0,N.jsx)(k,{id:"currentWeight",name:"currentWeight",placeholder:"\u041f\u043e\u0442\u043e\u0447\u043d\u0430 \u0432\u0430\u0433\u0430 *"}),i.currentWeight&&e.currentWeight&&(0,N.jsx)(P,{children:e.currentWeight})]}),(0,N.jsxs)(v,{children:[(0,N.jsx)(k,{id:"goalWeight",name:"goalWeight",placeholder:"\u0411\u0430\u0436\u0430\u043d\u0430 \u0432\u0430\u0433\u0430 *"}),i.goalWeight&&e.goalWeight&&(0,N.jsx)(P,{children:e.goalWeight})]}),(0,N.jsxs)(v,{children:[(0,N.jsx)(z,{id:"blood-group",children:"\u0413\u0440\u0443\u043f\u0430 \u043a\u0440\u043e\u0432\u0456 *"}),(0,N.jsxs)(T,{role:"group","aria-labelledby":"blood-group",children:[(0,N.jsx)(V,{type:"radio",id:"bloodType1",name:"bloodType",value:"1",checked:!0}),(0,N.jsx)(W,{htmlFor:"bloodType1",children:"1"}),(0,N.jsx)(V,{type:"radio",id:"bloodType2",name:"bloodType",value:"2"}),(0,N.jsx)(W,{htmlFor:"bloodType2",children:"2"}),(0,N.jsx)(V,{type:"radio",id:"bloodType3",name:"bloodType",value:"3"}),(0,N.jsx)(W,{htmlFor:"bloodType3",children:"3"}),(0,N.jsx)(V,{type:"radio",id:"bloodType4",name:"bloodType",value:"4"}),(0,N.jsx)(W,{htmlFor:"bloodType4",children:"4"})]})]})]}),(0,N.jsx)(F,{type:"submit",disabled:!t||!r,children:"\u041f\u043e\u0447\u0430\u0442\u0438 \u0445\u0443\u0434\u043d\u0443\u0442\u0438"})]})}})]})}},4810:function(n,e,i){i.d(e,{Z:function(){return u}});var t,r,a,o=i(17),d=i(9126),l=i(168),s=i(7939),c=i(7050),p=s.ZP.div(t||(t=(0,l.Z)(["\n  width: 100%;\n  height: 40px;\n  background-color: ",";\n  display: flex;\n  padding: 4px 20px;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 40px;\n  @media screen and (min-width: 768px) {\n    display: none;\n  }\n"])),c.Ni),h=s.ZP.button(r||(r=(0,l.Z)(["\n  display: block;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  padding: 1px;\n"]))),x=(s.ZP.div(a||(a=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 0;\n  padding: 0;\n  border-radius: 100%;\n  width: 48px;\n  height: 48px;\n  flex-shrink: 0;\n  flex-grow: 0;\n"]))),i(184));function u(n){var e=n.onGoBack,i=n.mobileAddSelected;return(0,x.jsxs)(p,{children:[(0,x.jsx)(h,{onClick:function(){return e()},children:(0,x.jsx)(d.R_q,{size:12,className:i?"":"hideOnMobile"})}),(0,x.jsx)("div",{children:(0,x.jsx)(o.Z,{})})]})}},5586:function(n,e,i){i.d(e,{Z:function(){return R}});var t,r,a,o,d,l=i(2791),s=i(6030),c=i(265),p=i(4641),h=i(168),x=i(7939),u=i(7050),g=i(5249),m=i(2496),f=x.ZP.aside(t||(t=(0,h.Z)(["\n  background-color: ",";\n  background-size: contain;\n  background-repeat: no-repeat;\n  overflow: hidden;\n  line-height: 1.2;\n  font-size: 14px;\n  color: ",";\n  padding: 40px 20px;\n  letter-spacing: 0.04em;\n  @media (min-width: 481px) {\n    padding: 80px 30px;\n  }\n  @media (min-width: 481px) and (max-width: 1279px) {\n    background-image: url(",");\n    background-position: bottom right;\n    display: flex;\n    justify-content: space-between;\n    gap: 30px;\n    > div {\n      flex: 0 0 45%;\n    }\n  }\n  @media screen and (min-width: 1280px) {\n    flex-direction: column;\n    max-width: 520px;\n    width: 35%;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    padding: 292px 8% 50px 5%;\n    background-image: url(",");\n    background-position: center right;\n  }\n"])),u.Ni,u.lU,m,g),b=x.ZP.h3(r||(r=(0,h.Z)(["\n  margin-bottom: 20px;\n  @media screen and (min-width: 481px) {\n    margin-bottom: 30px;\n  }\n"]))),j=x.ZP.ul(a||(a=(0,h.Z)(["\n  color: ",";\n  margin-bottom: 30px;\n  @media (min-width: 481px) and (max-width: 1279px) {\n    margin-bottom: 0;\n  }\n  @media screen and (min-width: 1280px) {\n    margin-bottom: 50px;\n  }\n  li {\n    margin-bottom: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    gap: 10px;\n    span:last-child {\n      white-space: nowrap;\n    }\n  }\n"])),u.Vz),y=x.ZP.div(o||(o=(0,h.Z)(["\n  color: ",";\n  line-height: 1.4;\n  :first-letter {\n    text-transform: uppercase;\n  }\n"])),u.Vz),w=x.ZP.div(d||(d=(0,h.Z)(["\n  color: ",";\n"])),u.Vz),Z=function(n){return n.dailyRate.dailyCalories},v=function(n){return n.dailyRate.uniqCategories},k=i(2745),P=i(9703),z=i(2426),T=i.n(z),V=i(6871),W=i(184),F=T()().format("DD.MM.yyyy");function R(n){var e=n.date,i=void 0===e?F:e,t=(0,s.v9)(v)||[],r=(0,s.v9)(Z),a=(0,s.v9)(k.o),o=(0,s.v9)(k.V),d=(0,V.TH)(),h=a.reduce((function(n,e){return n+e.calories_kcal}),0),x=r-h,u=x<0?"\u0412\u0438 \u0432\u0436\u0438\u043b\u0438 \u0431\u0456\u043b\u044c\u0448\u0435 \u043d\u043e\u0440\u043c\u0438":0===x?"\u0412\u0438 \u0432\u0436\u0438\u043b\u0438 \u0441\u0432\u043e\u044e \u043d\u043e\u0440\u043c\u0443 \u043a\u0430\u043b\u043e\u0440\u0456\u0439":"".concat(x," \u043a\u041a\u0430\u043b"),g=r>0?(100*h/r).toFixed(1):0;return(0,W.jsx)(f,{children:o?(0,W.jsx)(P.Z,{}):(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)("div",{children:[(0,W.jsxs)(b,{children:["\u0412\u0441\u044c\u043e\u0433\u043e \u0437\u0430 ",i]}),null!==r?(0,W.jsxs)(j,{children:["/calculator"===d.pathname?(0,W.jsx)(W.Fragment,{}):(0,W.jsxs)("li",{children:[(0,W.jsx)("span",{children:"\u0417\u0430\u043b\u0438\u0448\u0438\u043b\u043e\u0441\u044c"}),(0,W.jsx)("span",{children:0===r?0:u})]}),"/calculator"===d.pathname?(0,W.jsx)(W.Fragment,{}):(0,W.jsxs)("li",{children:[(0,W.jsx)("span",{children:"\u0412\u0436\u0438\u0442\u043e"}),(0,W.jsxs)("span",{children:[0===r?0:h," \u043a\u041a\u0430\u043b"]})]}),(0,W.jsxs)("li",{children:[(0,W.jsx)("span",{children:"\u0414\u043e\u0431\u043e\u0432\u0430 \u043d\u043e\u0440\u043c\u0430"}),(0,W.jsxs)("span",{children:[r," \u043a\u041a\u0430\u043b"]})]}),"/calculator"===d.pathname?(0,W.jsx)(W.Fragment,{}):(0,W.jsxs)("li",{children:[(0,W.jsx)("span",{children:"n% \u0432\u0456\u0434 \u043d\u043e\u0440\u043c\u0438"}),(0,W.jsxs)("span",{children:[g," %"]})]})]}):(0,W.jsx)(b,{children:" \u041d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0434\u0430\u043d\u0456 \u0432 \u0444\u043e\u0440\u043c\u0443!"})]}),(0,W.jsxs)("div",{children:[(0,W.jsx)(b,{children:"\u041d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u043e \u0432\u0436\u0438\u0432\u0430\u0442\u0438"}),t.length>0?(0,W.jsx)(y,{children:t.map((function(n,e){return(0,W.jsxs)(l.Fragment,{children:[(0,c.I)(p.Z,n),e!==t.length-1&&", "]},e)}))}):(0,W.jsx)(w,{children:"\u0422\u0443\u0442 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u0438\u043c\u0435\u0442\u044c\u0441\u044f \u0432\u0430\u0448\u0430 \u0434\u0456\u0454\u0442\u0430"})]})]})})}},265:function(n,e,i){i.d(e,{I:function(){return r}});var t=i(885);function r(n,e){for(var i=0,r=Object.entries(n);i<r.length;i++){var a=(0,t.Z)(r[i],2),o=a[0],d=a[1];if(e===o)return d.ua}}},1634:function(n,e,i){i.r(e),i.d(e,{default:function(){return u}});i(2791);var t,r,a=i(1875),o=i(2121),d=i(4810),l=i(5586),s=i(168),c=i(7939),p=c.ZP.main(t||(t=(0,s.Z)(["\n  @media screen and (max-width: 1279px) {\n    display: flex;\n    flex-direction: column;\n    height: calc(100vh - 85px);\n  }\n"]))),h=c.ZP.div(r||(r=(0,s.Z)(["\n  margin-top: auto;\n  @media screen and (max-width: 767px) {\n    padding-top: 40px;\n  }\n\n  @media screen and (min-width: 768px) and (max-width: 1279px) {\n    padding-top: 50px;\n  } ;\n"]))),x=i(184),u=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o.Z,{}),(0,x.jsx)(d.Z,{}),(0,x.jsxs)(p,{children:[(0,x.jsx)(a.Z,{}),(0,x.jsx)(h,{children:(0,x.jsx)(l.Z,{})})]})]})}},4641:function(n,e){e.Z={"\u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438":{ua:"\u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u0456 \u043d\u0430\u043f\u043e\u0457",en:"alcoholic drinks"},"\u0431\u0435\u0437\u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u043f\u0438\u0442\u043a\u0438":{ua:"\u0431\u0435\u0437\u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u0456 \u043d\u0430\u043f\u043e\u0457",en:"soft drinks"},"\u0433\u0440\u0438\u0431\u044b":{ua:"\u0433\u0440\u0438\u0431\u0438",en:"mushrooms"},"\u0437\u0435\u0440\u043d\u043e\u0432\u044b\u0435":{ua:"\u0437\u0435\u0440\u043d\u043e\u0432\u0456",en:"cereals"},"\u043a\u043e\u043b\u0431\u0430\u0441\u0430":{ua:"\u043a\u043e\u0432\u0431\u0430\u0441\u0430",en:"sausage"},"\u043a\u0443\u043d\u0436\u0443\u0442":{ua:"\u043a\u0443\u043d\u0436\u0443\u0442",en:"sesame"},"\u043c\u0430\u043a":{ua:"\u043c\u0430\u043a",en:"poppy"},"\u043c\u043e\u043b\u043e\u0447\u043d\u044b\u0435":{ua:"\u043c\u043e\u043b\u043e\u0447\u043d\u0456",en:"dairy products"},"\u043c\u0430\u0441\u043b\u0430 \u0438 \u0436\u0438\u0440\u044b":{ua:"\u043e\u043b\u0456\u0457 \u0442\u0430 \u0436\u0438\u0440\u0438",en:"oils and fats"},"\u043c\u0443\u0447\u043d\u044b\u0435":{ua:"\u0431\u043e\u0440\u043e\u0448\u043d\u044f\u043d\u0456",en:"flour products"},"\u043c\u044f\u0441\u043e":{ua:"\u043c'\u044f\u0441\u043e",en:"meat"},"\u043e\u0440\u0435\u0445\u0438":{ua:"\u0433\u043e\u0440\u0456\u0445\u0438",en:"nuts"},"\u043e\u0432\u043e\u0449\u0438 \u0438 \u0437\u0435\u043b\u0435\u043d\u044c":{ua:"\u043e\u0432\u043e\u0447\u0456 \u0442\u0430 \u0437\u0435\u043b\u0435\u043d\u044c",en:"vegetables and herbs"},"\u0440\u044b\u0431\u0430":{ua:"\u0440\u0438\u0431\u0430",en:"fish"},"\u0441\u0435\u043c\u0435\u043d\u0430":{ua:"\u043d\u0430\u0441\u0456\u043d\u043d\u044f",en:"seeds"},"\u0444\u0440\u0443\u043a\u0442\u044b":{ua:"\u0444\u0440\u0443\u043a\u0442\u0438",en:"fruit"},"\u0441\u0443\u0445\u043e\u0444\u0440\u0443\u043a\u0442\u044b":{ua:"\u0441\u0443\u0445\u043e\u0444\u0440\u0443\u043a\u0442\u0438",en:"dried fruits"},"\u044f\u0433\u043e\u0434\u044b":{ua:"\u044f\u0433\u043e\u0434\u0438",en:"berries"},"\u044f\u0439\u0446\u0430":{ua:"\u044f\u0439\u0446\u044f",en:"eggs"}}},2745:function(n,e,i){i.d(e,{o:function(){return t},V:function(){return r}});var t=function(n){return n.products.meal},r=function(n){return n.products.isLoading}},5462:function(){},5249:function(n,e,i){n.exports=i.p+"static/media/bg-3-health-calculator.07ec7143c40752d1b8ad.png"},2496:function(n,e,i){n.exports=i.p+"static/media/bg-1-tablet.5ed6e2d238c0e70f9e0d.png"}}]);
//# sourceMappingURL=634.ec20170d.chunk.js.map