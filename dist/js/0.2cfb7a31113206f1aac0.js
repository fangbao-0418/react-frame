webpackJsonp([0],{764:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(804),n=(l.n(a),l(803)),o=l.n(n),u=l(766),r=(l.n(u),l(776)),i=l.n(r),s=l(774),c=(l.n(s),l(772)),d=l.n(c),f=l(198),p=l.n(f),m=l(100),h=l.n(m),v=l(101),b=l.n(v),y=l(103),C=l.n(y),g=l(102),k=l.n(g),x=l(13),E=l.n(x),_=l(126),N=function(e){function t(){h()(this,t);var e=C()(this,(t.__proto__||p()(t)).call(this));return e.state={title:"",content:""},e.handleChange=e.handleChange.bind(e),e}return k()(t,e),b()(t,[{key:"componentWillMount",value:function(){}},{key:"handleChange",value:function(e){}},{key:"render",value:function(){return E.a.createElement("div",{className:"home"},E.a.createElement(i.a,{renderHeader:function(){return"Format"}},E.a.createElement(d.a,{placeholder:"money keyboard",clear:!0,type:"money",maxLength:10,locale:{confirmLabel:"计算"},onChange:this.handleChange,value:this.state.titile})),E.a.createElement(o.a,{title:"标题",placeholder:"auto focus in Alipay client","data-seed":"logId",autoFocus:!0,autoHeight:!1,rows:5,clear:!0,count:100,value:this.state.content,onChange:this.handleChange}))}}]),t}(x.Component);t.default=l.i(_.d)(N)},765:function(e,t,l){"use strict";var a=l(9);e.exports=function(e,t){for(var l=a({},e),n=0;n<t.length;n++){delete l[t[n]]}return l}},766:function(e,t,l){"use strict";l(307),l(778)},768:function(e,t,l){"use strict";function a(e,t,l,a){var n=t&&t.antLocale&&t.antLocale[l]?t.antLocale[l]:a(),o=(0,u.default)({},n);return e.locale&&(o=(0,u.default)(o,e.locale),e.locale.lang&&(o.lang=(0,u.default)({},n.lang,e.locale.lang))),o}function n(e){var t=e.antLocale&&e.antLocale.locale;return e.antLocale&&e.antLocale.exist&&!t?"zh-cn":t}Object.defineProperty(t,"__esModule",{value:!0}),t.getComponentLocale=a,t.getLocaleCode=n;var o=l(9),u=function(e){return e&&e.__esModule?e:{default:e}}(o)},769:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(196),o=a(n),u=l(100),r=a(u),i=l(101),s=a(i),c=l(103),d=a(c),f=l(102),p=a(f),m=l(13),h=a(m),v=l(197),b=a(v),y=l(770),C=a(y),g=function(e){function t(e){(0,r.default)(this,t);var l=(0,d.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l._blurEventListener=function(e){var t=l.props.value;e.target!==l.refs["input-container"]&&l.onInputBlur(t)},l.onInputBlur=function(e){l.state.focused&&(l.setState({focused:!1}),l.props.onBlur(e))},l.onInputFocus=function(e){l.setState({focused:!0}),l.props.onFocus(e)},l.onKeyboardClick=function(e){var t=l.props,a=t.value,n=t.onChange,o=t.maxLength;"delete"===e?n({target:{value:a.substring(0,a.length-1)}}):"confirm"===e?(n({target:{value:a}}),l.onInputBlur(a)):"hide"===e?l.onInputBlur(a):n(void 0!==o&&+o>=0&&(a+e).length>o?{target:{value:(a+e).substr(0,o)}}:{target:{value:a+e}})},l.onFakeInputClick=function(){var e=l.props.value;l.state.focused||l.onInputFocus(e)},l.state={focused:!1},l}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;"focused"in e&&e.focused!==this.state.focused&&(this.debounceFocusTimeout=setTimeout(function(){var l=t.props,a=l.disabled,n=l.editable;e.focused&&!a&&n&&t.onInputFocus(t.props.value)},10))}},{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,l=e.focused,a=e.value,n=e.disabled,o=e.editable;(t||l)&&!n&&o&&this.onInputFocus(a),document.addEventListener("click",this._blurEventListener,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this._blurEventListener,!1),this.debounceFocusTimeout&&(clearTimeout(this.debounceFocusTimeout),this.debounceFocusTimeout=null)}},{key:"render",value:function(){var e,t=this.props,l=t.placeholder,a=t.value,n=t.keyboardPrefixCls,u=t.disabled,r=t.editable,i=t.confirmLabel,s=this.state.focused,c=u||!r,d=(0,b.default)((e={},(0,o.default)(e,"fake-input",!0),(0,o.default)(e,"focus",s),(0,o.default)(e,"fake-input-disabled",u),e));return h.default.createElement("div",{className:"fake-input-container"},""===a&&h.default.createElement("div",{className:"fake-input-placeholder"},l),h.default.createElement("div",{className:d,ref:"input-container",onClick:c?function(){}:this.onFakeInputClick},a),!c&&h.default.createElement(C.default,{onClick:this.onKeyboardClick,hide:!s,confirmDisabled:""===a,preixCls:n,confirmLabel:i}))}}]),t}(h.default.Component);g.defaultProps={onChange:function(){},onFocus:function(){},onBlur:function(){},placeholder:"",value:"",disabled:!1,editable:!0,prefixCls:"am-input",keyboardPrefixCls:"am-number-keyboard"},t.default=g,e.exports=t.default},770:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.KeyboardItem=void 0;var n=l(104),o=a(n),u=l(196),r=a(u),i=l(100),s=a(i),c=l(101),d=a(c),f=l(103),p=a(f),m=l(102),h=a(m),v=l(13),b=a(v),y=l(197),C=a(y),g=l(767),k=a(g),x=function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(l[a[n]]=e[a[n]]);return l},E=t.KeyboardItem=function(e){function t(){return(0,s.default)(this,t),(0,p.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e,t=this.props,l=t.prefixCls,a=t.onClick,n=t.className,u=t.disabled,i=t.children,s=x(t,["prefixCls","onClick","className","disabled","children"]),c=i;"keyboard-delete"===n?c="delete":"keyboard-hide"===n?c="hide":"keyboard-confirm"===n&&(c="confirm");var d=(e={},(0,r.default)(e,n,n),(0,r.default)(e,l+"-item",!0),(0,r.default)(e,l+"-item-disabled",u),e);return b.default.createElement(k.default,{activeClassName:l+"-item-active"},b.default.createElement("td",(0,o.default)({onClick:function(e){a(e,c)},className:(0,C.default)(d)},s),i))}}]),t}(b.default.Component);E.defaultProps={prefixCls:"am-number-keyboard",onClick:function(){},disabled:!1};var _=function(e){function t(){(0,s.default)(this,t);var e=(0,p.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onKeyboardClick=function(t,l){t.nativeEvent.stopImmediatePropagation();var a=e.props.confirmDisabled;if("confirm"===l&&a)return null;e.props.onClick(l)},e.renderKetboardItem=function(t,l){return b.default.createElement(E,{onClick:e.onKeyboardClick,key:"item-"+t+"-"+l},t)},e}return(0,h.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e,t=this,l=this.props,a=l.prefixCls,n=l.confirmDisabled,o=l.hide,u=l.confirmLabel,i=(0,C.default)((e={},(0,r.default)(e,a+"-wrapper",!0),(0,r.default)(e,a+"-wrapper-hide",o),e));return b.default.createElement("div",{className:i},b.default.createElement("table",null,b.default.createElement("tbody",null,b.default.createElement("tr",null,["1","2","3"].map(function(e,l){return t.renderKetboardItem(e,l)}),b.default.createElement(E,{className:"keyboard-delete",rowSpan:2,onClick:this.onKeyboardClick})),b.default.createElement("tr",null,["4","5","6"].map(function(e,l){return t.renderKetboardItem(e,l)})),b.default.createElement("tr",null,["7","8","9"].map(function(e,l){return t.renderKetboardItem(e,l)}),b.default.createElement(E,{className:"keyboard-confirm",disabled:n,rowSpan:2,onClick:this.onKeyboardClick},u)),b.default.createElement("tr",null,[".","0"].map(function(e,l){return t.renderKetboardItem(e,l)}),b.default.createElement(E,{className:"keyboard-hide",onClick:this.onKeyboardClick})))))}}]),t}(b.default.Component);_.defaultProps={prefixCls:"am-number-keyboard",onClick:function(){},confirmDisabled:!1},t.default=_},771:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(104),o=a(n),u=l(100),r=a(u),i=l(101),s=a(i),c=l(103),d=a(c),f=l(102),p=a(f),m=l(13),h=a(m),v=l(765),b=a(v),y=function(e){function t(e){(0,r.default)(this,t);var l=(0,d.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.onInputBlur=function(e){"focused"in l.props||l.setState({focused:!1});var t=e.target.value;l.props.onBlur&&l.props.onBlur(t)},l.onInputFocus=function(e){"focused"in l.props||l.setState({focused:!0});var t=e.target.value;l.props.onFocus&&l.props.onFocus(t)},l.state={focused:e.focused||!1},l}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentWillReceiveProps",value:function(e){"focused"in e&&this.setState({focused:e.focused})}},{key:"componentDidMount",value:function(){(this.props.autoFocus||this.state.focused)&&navigator.userAgent.indexOf("AlipayClient")>0&&this.refs.input.focus()}},{key:"componentDidUpdate",value:function(){this.state.focused&&this.refs.input.focus()}},{key:"render",value:function(){var e=(0,b.default)(this.props,["onBlur","onFocus","focused","autoFocus"]);return h.default.createElement("input",(0,o.default)({ref:"input",onBlur:this.onInputBlur,onFocus:this.onInputFocus},e))}}]),t}(h.default.Component);t.default=y,e.exports=t.default},772:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(){}function o(e){return void 0===e||null===e?"":e}Object.defineProperty(t,"__esModule",{value:!0});var u=l(104),r=a(u),i=l(196),s=a(i),c=l(100),d=a(c),f=l(101),p=a(f),m=l(103),h=a(m),v=l(102),b=a(v),y=l(13),C=a(y),g=l(17),k=a(g),x=l(197),E=a(x),_=l(765),N=a(_),O=l(771),T=a(O),I=l(769),F=a(I),P=l(768),w=function(e){function t(e){(0,d.default)(this,t);var l=(0,h.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.onInputChange=function(e){var t=e.target.value,a=l.props,n=a.onChange;switch(a.type){case"text":break;case"bankCard":t=t.replace(/\D/g,"").replace(/(....)(?=.)/g,"$1 ");break;case"phone":t=t.replace(/\D/g,"").substring(0,11);var o=t.length;o>3&&o<8?t=t.substr(0,3)+" "+t.substr(3):o>=8&&(t=t.substr(0,3)+" "+t.substr(3,4)+" "+t.substr(7));break;case"number":t=t.replace(/\D/g,"")}n&&n(t)},l.onInputFocus=function(e){l.debounceTimeout&&(clearTimeout(l.debounceTimeout),l.debounceTimeout=null),l.setState({focus:!0}),"input"===document.activeElement.tagName.toLowerCase()&&(l.scrollIntoViewTimeout=setTimeout(function(){try{document.activeElement.scrollIntoViewIfNeeded()}catch(e){}},100)),l.props.onFocus&&l.props.onFocus(e)},l.onInputBlur=function(e){l.debounceTimeout=setTimeout(function(){l.setState({focus:!1})},200),l.props.onBlur&&l.props.onBlur(e)},l.onExtraClick=function(e){l.props.onExtraClick&&l.props.onExtraClick(e)},l.onErrorClick=function(e){l.props.onErrorClick&&l.props.onErrorClick(e)},l.clearInput=function(){"password"!==l.props.type&&l.props.updatePlaceholder&&l.setState({placeholder:l.props.value}),l.props.onChange&&l.props.onChange("")},l.state={placeholder:e.placeholder},l}return(0,b.default)(t,e),(0,p.default)(t,[{key:"componentWillReceiveProps",value:function(e){"placeholder"in e&&!e.updatePlaceholder&&this.setState({placeholder:e.placeholder})}},{key:"componentWillUnmount",value:function(){this.debounceTimeout&&(clearTimeout(this.debounceTimeout),this.debounceTimeout=null),this.scrollIntoViewTimeout&&(clearTimeout(this.scrollIntoViewTimeout),this.scrollIntoViewTimeout=null)}},{key:"render",value:function(){var e,t,a=this.props,n=a.prefixCls,u=a.prefixListCls,i=a.type,c=a.value,d=a.defaultValue,f=a.name,p=a.editable,m=a.disabled,h=a.style,v=a.clear,b=a.children,y=a.error,g=a.className,k=a.extra,x=a.labelNumber,_=a.maxLength,O=(0,N.default)(this.props,["prefixCls","prefixListCls","editable","style","clear","children","error","className","extra","labelNumber","onExtraClick","onErrorClick","updatePlaceholder","placeholderTextColor","type","locale"]),I=(0,P.getComponentLocale)(this.props,this.context,"InputItem",function(){return l(773)}),w=I.confirmLabel,L=this.state,S=L.placeholder,B=L.focus,j=(0,E.default)((e={},(0,s.default)(e,u+"-item",!0),(0,s.default)(e,n+"-item",!0),(0,s.default)(e,n+"-disabled",m),(0,s.default)(e,n+"-error",y),(0,s.default)(e,n+"-focus",B),(0,s.default)(e,n+"-android",B),(0,s.default)(e,g,g),e)),M=(0,E.default)((t={},(0,s.default)(t,n+"-label",!0),(0,s.default)(t,n+"-label-2",2===x),(0,s.default)(t,n+"-label-3",3===x),(0,s.default)(t,n+"-label-4",4===x),(0,s.default)(t,n+"-label-5",5===x),(0,s.default)(t,n+"-label-6",6===x),(0,s.default)(t,n+"-label-7",7===x),t)),D=(0,E.default)((0,s.default)({},n+"-control",!0)),K="text";"bankCard"===i||"phone"===i?K="tel":"password"===i?K="password":"digit"===i?K="number":"text"!==i&&"number"!==i&&(K=i);var V=void 0;V="value"in this.props?{value:o(c)}:{defaultValue:d};var R=void 0;"number"===i&&(R={pattern:"[0-9]*"});var W=void 0;return"digit"===i&&(W={className:"h5numInput"}),C.default.createElement("div",{className:j,style:h},b?C.default.createElement("div",{className:M},b):null,C.default.createElement("div",{className:D},"money"===i?C.default.createElement(F.default,(0,r.default)({type:i,maxLength:_,placeholder:S,onChange:this.onInputChange,onFocus:this.onInputFocus,onBlur:this.onInputBlur,disabled:m,editable:p,value:o(c)},void 0!==this.props.focused?{focused:this.props.focused}:{},void 0!==this.props.autoFocus?{autoFocus:this.props.autoFocus}:{},{prefixCls:n,confirmLabel:w})):C.default.createElement(T.default,(0,r.default)({},R,O,V,W,{type:K,maxLength:_,name:f,placeholder:S,onChange:this.onInputChange,onFocus:this.onInputFocus,onBlur:this.onInputBlur,readOnly:!p,disabled:m}))),v&&p&&!m&&c&&c.length>0?C.default.createElement("div",{className:n+"-clear",onClick:this.clearInput}):null,y?C.default.createElement("div",{className:n+"-error-extra",onClick:this.onErrorClick}):null,""!==k?C.default.createElement("div",{className:n+"-extra",onClick:this.onExtraClick},k):null)}}]),t}(C.default.Component);w.defaultProps={prefixCls:"am-input",prefixListCls:"am-list",type:"text",editable:!0,disabled:!1,placeholder:"",clear:!1,onChange:n,onBlur:n,onFocus:n,extra:"",onExtraClick:n,error:!1,onErrorClick:n,labelNumber:5,updatePlaceholder:!1},w.contextTypes={antLocale:k.default.object},t.default=w,e.exports=t.default},773:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={confirmLabel:"确定"},e.exports=t.default},774:function(e,t,l){"use strict";l(307),l(766),l(777)},775:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Brief=void 0;var n=l(104),o=a(n),u=l(196),r=a(u),i=l(100),s=a(i),c=l(101),d=a(c),f=l(103),p=a(f),m=l(102),h=a(m),v=l(13),b=a(v),y=l(197),C=a(y),g=l(767),k=a(g),x=l(765),E=a(x),_=function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(l[a[n]]=e[a[n]]);return l},N=t.Brief=function(e){function t(){return(0,s.default)(this,t),(0,p.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return b.default.createElement("div",{className:"am-list-brief",style:this.props.style},this.props.children)}}]),t}(b.default.Component),O=function(e){function t(e){(0,s.default)(this,t);var l=(0,p.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.onClick=function(e){var t=l.props,a=t.onClick,n=t.platform,o="android"===n||"cross"===n&&!!navigator.userAgent.match(/Android/i);if(a&&o){l.debounceTimeout&&(clearTimeout(l.debounceTimeout),l.debounceTimeout=null);var u=e.currentTarget,r=Math.max(u.offsetHeight,u.offsetWidth),i=e.currentTarget.getBoundingClientRect(),s=e.clientX-i.left-u.offsetWidth/2,c=e.clientY-i.top-u.offsetWidth/2,d={width:r+"px",height:r+"px",left:s+"px",top:c+"px"};l.setState({coverRippleStyle:d,RippleClicked:!0},function(){l.debounceTimeout=setTimeout(function(){l.setState({coverRippleStyle:{display:"none"},RippleClicked:!1})},1e3)})}a&&a(e)},l.state={coverRippleStyle:{display:"none"},RippleClicked:!1},l}return(0,h.default)(t,e),(0,d.default)(t,[{key:"componentWillUnmount",value:function(){this.debounceTimeout&&(clearTimeout(this.debounceTimeout),this.debounceTimeout=null)}},{key:"render",value:function(){var e,t,l,a,n=this,u=this.props,i=u.prefixCls,s=u.className,c=u.activeStyle,d=u.error,f=u.align,p=u.wrap,m=u.disabled,h=u.children,v=u.multipleLine,y=u.thumb,g=u.extra,x=u.arrow,N=u.onClick,O=_(u,["prefixCls","className","activeStyle","error","align","wrap","disabled","children","multipleLine","thumb","extra","arrow","onClick"]),T=this.state,I=T.coverRippleStyle,F=T.RippleClicked,P=(e={},(0,r.default)(e,s,s),(0,r.default)(e,i+"-item",!0),(0,r.default)(e,i+"-item-disabled",m),(0,r.default)(e,i+"-item-error",d),(0,r.default)(e,i+"-item-top","top"===f),(0,r.default)(e,i+"-item-middle","middle"===f),(0,r.default)(e,i+"-item-bottom","bottom"===f),e),w=(0,C.default)((t={},(0,r.default)(t,i+"-ripple",!0),(0,r.default)(t,i+"-ripple-animate",F),t)),L=(0,C.default)((l={},(0,r.default)(l,i+"-line",!0),(0,r.default)(l,i+"-line-multiple",v),(0,r.default)(l,i+"-line-wrap",p),l)),S=(0,C.default)((a={},(0,r.default)(a,i+"-arrow",!0),(0,r.default)(a,i+"-arrow-horizontal","horizontal"===x),(0,r.default)(a,i+"-arrow-vertical","down"===x||"up"===x),(0,r.default)(a,i+"-arrow-vertical-up","up"===x),a)),B=b.default.createElement("div",(0,o.default)({},(0,E.default)(O,["platform"]),{onClick:function(e){n.onClick(e)},className:(0,C.default)(P)}),y?b.default.createElement("div",{className:i+"-thumb"},"string"==typeof y?b.default.createElement("img",{src:y}):y):null,b.default.createElement("div",{className:L},void 0!==h&&b.default.createElement("div",{className:i+"-content"},h),void 0!==g&&b.default.createElement("div",{className:i+"-extra"},g),x&&b.default.createElement("div",{className:S,"aria-hidden":"true"})),b.default.createElement("div",{style:I,className:w}));return b.default.createElement(k.default,{disabled:m||!N,activeStyle:c,activeClassName:i+"-item-active"},B)}}]),t}(b.default.Component);O.defaultProps={prefixCls:"am-list",align:"middle",error:!1,multipleLine:!1,wrap:!1,platform:"cross"},O.Brief=N,t.default=O},776:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(104),o=a(n),u=l(196),r=a(u),i=l(100),s=a(i),c=l(101),d=a(c),f=l(103),p=a(f),m=l(102),h=a(m),v=l(13),b=a(v),y=l(775),C=a(y),g=l(197),k=a(g),x=function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(l[a[n]]=e[a[n]]);return l},E=function(e){function t(){return(0,s.default)(this,t),(0,p.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e,t=this.props,l=t.prefixCls,a=t.children,n=t.className,u=t.style,i=t.renderHeader,s=t.renderFooter,c=x(t,["prefixCls","children","className","style","renderHeader","renderFooter"]),d=(0,k.default)((e={},(0,r.default)(e,l,!0),(0,r.default)(e,n,n),e));return b.default.createElement("div",(0,o.default)({className:d,style:u},c),i?b.default.createElement("div",{className:l+"-header"},"function"==typeof i?i():i):null,a?b.default.createElement("div",{className:l+"-body"},a):null,s?b.default.createElement("div",{className:l+"-footer"},"function"==typeof s?s():s):null)}}]),t}(b.default.Component);t.default=E,E.Item=C.default,E.defaultProps={prefixCls:"am-list"},e.exports=t.default},777:function(e,t){},778:function(e,t){},803:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(){}function o(e){return void 0===e||null===e?"":e}function u(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(N,"_").length}Object.defineProperty(t,"__esModule",{value:!0});var r=l(104),i=a(r),s=l(196),c=a(s),d=l(100),f=a(d),p=l(101),m=a(p),h=l(103),v=a(h),b=l(102),y=a(b),C=l(13),g=a(C),k=l(197),x=a(k),E=l(765),_=a(E),N=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,O=function(e){function t(e){(0,f.default)(this,t);var l=(0,v.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.onChange=function(e){var t=e.target.value,a=l.props.onChange;a&&a(t),l.componentDidUpdate()},l.onBlur=function(e){l.debounceTimeout=setTimeout(function(){l.setState({focus:!1})},100),"focused"in l.props||l.setState({focused:!1});var t=e.target.value;l.props.onBlur&&l.props.onBlur(t)},l.onFocus=function(e){l.debounceTimeout&&(clearTimeout(l.debounceTimeout),l.debounceTimeout=null),"focused"in l.props||l.setState({focused:!0}),l.setState({focus:!0});var t=e.target.value;l.props.onFocus&&l.props.onFocus(t),"textarea"===document.activeElement.tagName.toLowerCase()&&(l.scrollIntoViewTimeout=setTimeout(function(){try{document.activeElement.scrollIntoViewIfNeeded()}catch(e){}},100))},l.onErrorClick=function(){l.props.onErrorClick&&l.props.onErrorClick()},l.clearInput=function(){l.props.onChange&&l.props.onChange("")},l.state={focus:!1,focused:e.focused||!1},l}return(0,y.default)(t,e),(0,m.default)(t,[{key:"componentDidMount",value:function(){this.componentDidUpdate(),(this.props.autoFocus||this.state.focused)&&navigator.userAgent.indexOf("AlipayClient")>0&&this.refs.textarea.focus()}},{key:"componentDidUpdate",value:function(){if(this.props.autoHeight){var e=this.refs.textarea;e.style.height="",e.style.height=e.scrollHeight+"px"}this.state.focused&&this.refs.textarea.focus()}},{key:"componentWillReceiveProps",value:function(e){"focused"in e&&this.setState({focused:e.focused})}},{key:"componentWillUnmount",value:function(){this.debounceTimeout&&(clearTimeout(this.debounceTimeout),this.debounceTimeout=null),this.scrollIntoViewTimeout&&(clearTimeout(this.scrollIntoViewTimeout),this.scrollIntoViewTimeout=null)}},{key:"render",value:function(){var e,t,l=this.props,a=l.prefixCls,n=l.prefixListCls,r=l.style,s=l.title,d=l.value,f=l.defaultValue,p=l.clear,m=l.editable,h=l.disabled,v=l.error,b=l.className,y=l.labelNumber,C=l.autoHeight,k=this.props.count,E=this.props.rows,N=(0,_.default)(this.props,["prefixCls","prefixListCls","editable","style","clear","children","error","className","count","labelNumber","title","onErrorClick","autoHeight","autoFocus","focused","placeholderTextColor"]),O=void 0;O="value"in this.props?{value:o(d)}:{defaultValue:f};var T=this.state.focus,I=(0,x.default)((e={},(0,c.default)(e,n+"-item",!0),(0,c.default)(e,a+"-item",!0),(0,c.default)(e,a+"-disabled",h),(0,c.default)(e,a+"-item-single-line",1===E&&!C),(0,c.default)(e,a+"-error",v),(0,c.default)(e,a+"-focus",T),(0,c.default)(e,b,b),e)),F=(0,x.default)((t={},(0,c.default)(t,a+"-label",!0),(0,c.default)(t,a+"-label-2",2===y),(0,c.default)(t,a+"-label-3",3===y),(0,c.default)(t,a+"-label-4",4===y),(0,c.default)(t,a+"-label-5",5===y),(0,c.default)(t,a+"-label-6",6===y),(0,c.default)(t,a+"-label-7",7===y),t)),P=u(d);return g.default.createElement("div",{className:I,style:r},s&&g.default.createElement("div",{className:F},s),g.default.createElement("div",{className:a+"-control"},g.default.createElement("textarea",(0,i.default)({ref:"textarea",maxLength:k},N,O,{onChange:this.onChange,onBlur:this.onBlur,onFocus:this.onFocus,readOnly:!m}))),p&&m&&d&&P>0&&g.default.createElement("div",{className:a+"-clear",onClick:this.clearInput,onTouchStart:this.clearInput}),v&&g.default.createElement("div",{className:a+"-error-extra",onClick:this.onErrorClick}),k>0&&E>1&&g.default.createElement("span",{className:a+"-count"},g.default.createElement("span",null,d?P:0),"/",k))}}]),t}(g.default.Component);t.default=O,O.defaultProps={prefixCls:"am-textarea",prefixListCls:"am-list",autoHeight:!1,editable:!0,disabled:!1,placeholder:"",clear:!1,rows:1,onChange:n,onBlur:n,onFocus:n,onErrorClick:n,error:!1,labelNumber:5},e.exports=t.default},804:function(e,t,l){"use strict";l(307),l(766),l(805)},805:function(e,t){}});