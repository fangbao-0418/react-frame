webpackJsonp([3],{1002:function(e,t){e.exports={container:"container-1EXYp",info:"info-3NKQ8",user:"user-tpml2","user-left":"user-left-3DAr5",avatar:"avatar-3efxn","user-right":"user-right-1WiZA",nickname:"nickname-3-nO6","edit-info":"edit-info-3hpBl",item:"item-2SHea",num:"num-ydCFA",title:"title-2QYi1"}},1003:function(e,t){e.exports={menu:"menu-2whiX",item:"item-byvWA","menu-name":"menu-name-nT62N",icon:"icon-kb834",message:"message-3OblS",collect:"collect-3MesY",topic:"topic-3vQLf",comment:"comment-zwbBG",task:"task-3nUqr",mark:"mark-1aavu",arrows:"arrows-12VMS"}},1004:function(e,t){e.exports={container:"container-BkX2O",btn:"btn-1OhT2",movement:"movement-czR9y",move:"move-1DNQx"}},833:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(135),a=i.n(n),s=i(42),o=i.n(s),r=i(43),l=i.n(r),c=i(45),h=i.n(c),p=i(44),m=i.n(p),d=i(5),u=i.n(d),g=i(136),f=i(210),v=i(859),y=i(988),w=i(986),E=i(987),b=i(341),x=function(e){function t(){return o()(this,t),h()(this,(t.__proto__||a()(t)).apply(this,arguments))}return m()(t,e),l()(t,[{key:"componentWillMount",value:function(){this.props.dispatch(b.b())}},{key:"render",value:function(){var e=this.props.loginState;return u.a.createElement("div",{className:"layout"},u.a.createElement(v.a,{titleContent:"我的"}),u.a.createElement("div",{className:"scroll-wrap bg-white"},"logined"===e&&u.a.createElement(w.a,null),"nologin"===e&&u.a.createElement(y.a,null),u.a.createElement(E.a,null)))}}]),t}(d.Component);t.default=i.i(g.e)(i.i(f.b)(function(e){return e.user})(x))},859:function(e,t,i){"use strict";var n=i(135),a=i.n(n),s=i(42),o=i.n(s),r=i(43),l=i.n(r),c=i(45),h=i.n(c),p=i(44),m=i.n(p),d=i(5),u=i.n(d),g=i(136),f=i(860),v=i.n(f),y=i(211),w=function(e){function t(e){o()(this,t);var i=h()(this,(t.__proto__||a()(t)).call(this,e));return i.goBack=i.goBack.bind(i),i}return m()(t,e),l()(t,[{key:"goBack",value:function(){var e=this;y.a.ready({app:function(t){"/"===e.props.match.path?t.touchClose():e.props.history.goBack()},other:function(){e.props.history.goBack()}})}},{key:"render",value:function(){var e=this.props,t=e.titleContent,i=e.rightContent,n=e.titleClass,a=e.leftClick;return u.a.createElement("div",{className:v.a.navbar},u.a.createElement("div",{className:v.a["navbar-left"]},u.a.createElement("div",{onClick:a||this.goBack,className:v.a["icon-go-back"]})),u.a.createElement("span",{className:v.a["navbar-title"]+" "+n},t),u.a.createElement("div",{className:v.a["navbar-right"]},i))}}]),t}(d.Component);t.a=i.i(g.e)(w)},860:function(e,t){e.exports={navbar:"navbar-2lIqS","navbar-left":"navbar-left-GfsH5","icon-go-back":"icon-go-back-1GjUQ","navbar-right":"navbar-right-2tOJ_","navbar-title":"navbar-title-2-lZC"}},948:function(e,t){e.exports={isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},964:function(e,t,i){"use strict";var n=i(110),a=i.n(n),s=i(135),o=i.n(s),r=i(42),l=i.n(r),c=i(43),h=i.n(c),p=i(45),m=i.n(p),d=i(44),u=i.n(d),g=i(5),f=i.n(g),v=i(94),y=(i.n(v),i(209),i(991)),w=i.n(y),E=i(990),b=i(989),x=function(e){function t(e){l()(this,t);var i=m()(this,(t.__proto__||o()(t)).call(this,e));return i.props.class.push("g-core-image-upload-btn"),i.state={formID:"g-core-upload-input-"+Math.floor(1e4*Math.random()),uploading:!1,hasImage:!1,class:i.props.class.join(" "),image:{src:"http://img1.vued.vanthink.cn/vuedcb0efb21e5f2ca013ca1480198bbf4b3.png",width:0,height:0}},i}return u()(t,e),h()(t,[{key:"render",value:function(){return f.a.createElement("div",{className:this.state.class,id:this.state.formID},this.props.text,f.a.createElement("form",{className:"g-core-image-upload-form",method:"post",encType:"multipart/form-data",action:"",style:{display:"block",cursor:"pointer",position:"absolute",left:0,top:0,width:1242,height:61,opacity:0,margin:0,padding:0,overflow:"hidden"}},f.a.createElement("input",{disabled:this.state.uploading,onChange:this.change.bind(this),name:this.props.inputOfFile,type:"file",accept:this.props.inputAccept,style:{width:"100%",height:"100%"}})),f.a.createElement("div",{className:"g-core-image-corp-container",style:{display:this.state.hasImage?"block":"none"}},f.a.createElement("div",{className:"image-aside"},f.a.createElement("div",{className:"g-crop-image-box"},f.a.createElement("div",{className:"g-crop-image-principal"},f.a.createElement("img",{src:this.state.image.src,style:{width:this.state.image.width,height:this.state.image.height}}),f.a.createElement("div",{className:"select-recorte",onMouseDown:this.drag.bind(this),onTouchStart:this.drag.bind(this),style:{width:100,height:100}},f.a.createElement("div",{className:"g-s-resize"}),f.a.createElement("div",{className:"g-e-resize"}),f.a.createElement("div",{className:"g-resize",onTouchStart:this.resize.bind(this),onMouseDown:this.resize.bind(this)}))))),f.a.createElement("div",{className:"info-aside"},f.a.createElement("div",{className:"btn-groups"},f.a.createElement("div",{onClick:this.cancel.bind(this),className:"btn btn-cancel"},this.props.cropBtn.cancel),f.a.createElement("div",{onClick:this.doCrop.bind(this),className:"btn btn-upload"},this.props.cropBtn.ok)))))}},{key:"__find",value:function(e){return document.getElementById(this.state.formID).querySelector(e)}},{key:"change",value:function(e){var t=this.__find("input").value.replace(/C:\\fakepath\\/i,""),i=t.substring(t.lastIndexOf(".")+1),n=this.props.extensions;if(n.length>1){if(!new RegExp("^["+n.join("|")+"]+$","i").test(i))return this.props.errorHandle("TYPE ERROR")}if(e.target.files[0].size>this.props.maxFileSize){var a;return parseInt(this.maxFileSize/1024/1024)>0?a=(this.maxFileSize/1024/1024).toFixed(2)+"MB":parseInt(this.maxFileSize/1024)>0&&(a=(this.maxFileSize/1024).toFixed(2)+"kB"),void this.props.errorHandle("FILE IS TOO LARGER THAN THE MAX VALUE "+a)}if(this.files=e.target.files,this.props.crop)return void this.__showImage();this.props.imageChanged(this.files[0]),this.tryAjaxUpload()}},{key:"__showImage",value:function(){document.body.style.overflow="hidden",this.setState({hasImage:!0}),this.__readFiles()}},{key:"__readFiles",value:function(){var e=new FileReader,t=this;e.onload=function(e){var i=e.target.result;t.__initImage(i)},e.readAsDataURL(this.files[0])}},{key:"__initImage",value:function(e){var t=new Image,i=this;t.src=e,t.onload=function(){i.setState({image:{src:e,width:t.naturalWidth,height:t.naturalHeight}}),i.__reseyLayout(),i.__initCropBox()}}},{key:"__initCropBox",value:function(){var e=this.__find(".select-recorte"),t=this.__find(".g-crop-image-principal"),i=parseInt(t.style.width),n=parseInt(t.style.height),a=this.props.cropRatio.split(":")[0],s=this.props.cropRatio.split(":")[1],o=i/100*80,r=o/a*s;e.style.cssText="width:"+o+"px;height: "+r+"px;left:"+(i-o)/2+"px;top:"+(n-r)/2+"px;",r>n&&(r=n/100*80,o=r*a/s,e.style.cssText="width:"+o+"px;height:"+r+"px;left:"+(i-o)/2+"px;top:"+(n-r)/2+"px")}},{key:"__reseyLayout",value:function(){var e=window.innerHeight-80,t=window.innerWidth-60,i=this.state.image.width,n=this.state.image.height,a=i/n,s=t/e,o=this.__find(".g-crop-image-principal");a>s?(this.setState({image:{src:this.state.image.src,width:t,height:t/a}}),o.style.cssText="width:"+t+"px;height:"+t/a+"px;margin-top:"+(e-t/a)/2+"px"):(this.setState({image:{src:this.state.image.src,width:e*a,height:e}}),o.style.cssText="width:"+e*a+"px;height:"+e+"px;margin-left:"+(t-e*a)/2+"px;"),this.imgChangeRatio=i/this.state.image.width}},{key:"doCrop",value:function(e){var t=e.target;t.value=t.value+"...",t.disabled=!0,"object"!==a()(this.data)&&(this.data={});var i=this.__find(".select-recorte");this.data.postionX=Math.ceil(parseInt(window.getComputedStyle(i).left)*this.imgChangeRatio),this.data.postionY=Math.ceil(parseInt(window.getComputedStyle(i).top)*this.imgChangeRatio),this.data.width=Math.ceil(parseInt(window.getComputedStyle(i).width)*this.imgChangeRatio),this.data.height=Math.ceil(parseInt(window.getComputedStyle(i).height)*this.imgChangeRatio),this.tryAjaxUpload(function(){t.value=t.value.replace("...",""),t.disabled=!1})}},{key:"cancel",value:function(){this.files="",this.setState({hasImage:!1}),this.__find("input").value="",document.body.removeAttribute("style")}},{key:"tryAjaxUpload",value:function(e){for(var t=this,i=new FormData,n=0;n<this.files.length;n++)i.append(t.props.inputOfFile,this.files[n]);if("object"===a()(this.data))for(var s in this.data)void 0!==this.data[s]&&i.append(s,this.data[s]);if(this.props.imageUploading(this.files),!this.props.isXhr)return this.props.crop&&this.setState({hasImage:!1}),"function"==typeof e&&e();w()("POST",this.props.url,this.props.header,i,function(i){"function"==typeof e&&e(),t.uploading=!1,t.props.crop&&t.cancel(),t.props.imageUploaded(i)})}},{key:"resize",value:function(e){var t=e.target.parentElement,i=this.__find(".g-crop-image-principal");new E.a(t,i,this.props.cropRatio,e)}},{key:"drag",value:function(e){var t=e.target,i=this.__find(".g-crop-image-principal");new b.a(t,i,e)}}]),t}(g.Component);x.propTypes={url:f.a.PropTypes.string,text:f.a.PropTypes.string,inputAccept:f.a.PropTypes.string,inputOfFile:f.a.PropTypes.string,class:f.a.PropTypes.array},x.defaultProps={url:"",text:"upload",inputAccept:"image/jpg,image/jpeg,image/png,image/gif",inputOfFile:"file",crop:!1,cropBtn:{ok:"Save",cancel:"Cancel"},class:[],extensions:[],cropRatio:"1:1",maxFileSize:10485760,isXhr:!0,header:null,imageUploaded:function(e){},imageUploading:function(e){console.info("uploading")},imageChanged:function(){},errorHandle:function(e){console.error(e)}},t.a=x},986:function(e,t,i){"use strict";var n=i(76),a=i.n(n),s=i(135),o=i.n(s),r=i(42),l=i.n(r),c=i(43),h=i.n(c),p=i(45),m=i.n(p),d=i(44),u=i.n(d),g=i(5),f=i.n(g),v=i(210),y=i(1002),w=i.n(y),E=i(964),b=i(209),x=function(e){function t(e){l()(this,t);var i=m()(this,(t.__proto__||o()(t)).call(this,e));return i.handleRes=i.handleRes.bind(i),i.imageChanged=i.imageChanged.bind(i),i.imageUploading=i.imageUploading.bind(i),i}return u()(t,e),h()(t,[{key:"handleRes",value:function(e){var t=this.props.dispatch,n=a()({},this.props.userinfo);e.data&&(n.head_img=e.data.picUrl,i.i(b.updateBbsUserHeadimg)(e.data.picUrl).then(function(e){e.result&&t({type:"change user info",userinfo:n})})),e.error_code&&this.Toast.show(e.error_code.error.message),this.props.dispatch({type:"loading hidden"})}},{key:"imageChanged",value:function(){console.log(arguments,"changed")}},{key:"imageUploading",value:function(){this.props.dispatch({type:"loading show"})}},{key:"render",value:function(){var e=this.props.userinfo;return f.a.createElement("div",{className:w.a.container},f.a.createElement("div",{className:w.a.user},f.a.createElement("div",{className:w.a["user-left"]},f.a.createElement(E.a,{text:"",className:"pure-button",crop:"server",inputOfFile:"img",cropBtn:{ok:"选取",cancel:"取消"},url:b.imgUpload,imageChanged:this.imageChanged,imageUploading:this.imageUploading,imageUploaded:this.handleRes}),f.a.createElement("img",{className:w.a.avatar,src:e.head_img})),f.a.createElement("div",{className:w.a["user-right"]},f.a.createElement("h1",{className:w.a.nickname},e.nickname),f.a.createElement("div",{className:w.a["edit-info"]},f.a.createElement("span",null,"编辑资料")))),f.a.createElement("div",{className:w.a.info},f.a.createElement("div",{className:w.a.item},f.a.createElement("div",{className:w.a.num},e.userZanNum),f.a.createElement("div",{className:w.a.title},f.a.createElement("span",null,"收到的赞"))),f.a.createElement("div",{className:w.a.item},f.a.createElement("div",{className:w.a.num},e.userCommentNum),f.a.createElement("div",{className:w.a.title},f.a.createElement("span",null,"收到的评论"))),f.a.createElement("div",{className:w.a.item},f.a.createElement("div",{className:w.a.num},e.userThreadCollectionNum),f.a.createElement("div",{className:w.a.title},f.a.createElement("span",null,"被收藏")))))}}]),t}(g.Component);t.a=i.i(v.b)(function(e){return e.user})(x)},987:function(e,t,i){"use strict";var n=i(135),a=i.n(n),s=i(42),o=i.n(s),r=i(43),l=i.n(r),c=i(45),h=i.n(c),p=i(44),m=i.n(p),d=i(5),u=i.n(d),g=i(93),f=i.n(g),v=i(1003),y=i.n(v),w=function(e){function t(){o()(this,t);var e=h()(this,(t.__proto__||a()(t)).call(this));return e.state={menu:[{name:"消息提醒",icon:"message",mark:!0},{name:"我的收藏",icon:"collect"},{name:"我的帖子",icon:"topic"},{name:"我的评论",icon:"comment"},{name:"我的任务",icon:"task",mark:!0}]},e}return m()(t,e),l()(t,[{key:"render",value:function(){var e=this.state.menu;return u.a.createElement("div",{className:f()(y.a.menu)},e.map(function(e,t){return u.a.createElement("div",{key:"mine-menu-"+t,className:y.a.item},u.a.createElement("span",{className:f()(y.a.icon,y.a[e.icon])}),u.a.createElement("span",{className:y.a["menu-name"]},e.name),e.mark&&u.a.createElement("span",{className:y.a.mark}),u.a.createElement("span",{className:y.a.arrows}))}))}}]),t}(d.Component);t.a=w},988:function(e,t,i){"use strict";var n=i(135),a=i.n(n),s=i(42),o=i.n(s),r=i(43),l=i.n(r),c=i(45),h=i.n(c),p=i(44),m=i.n(p),d=i(5),u=i.n(d),g=i(1004),f=i.n(g),v=i(209),y=i(211),w=function(e){function t(){o()(this,t);var e=h()(this,(t.__proto__||a()(t)).call(this));return e.toLogin=e.toLogin.bind(e),e.toRegister=e.toRegister.bind(e),e}return m()(t,e),l()(t,[{key:"toLogin",value:function(){y.a.ready({app:function(e){e.loginApp({refresh:1,url:""})},other:function(){window.location.href=v.currentHost+"/wechat/verify?next=/bbs/mine?source=app"}})}},{key:"toRegister",value:function(){y.a.ready({app:function(e){e.registerApp({refresh:1,url:""})},other:function(){window.location.href=v.currentHost+"/wechat/verify?next=/bbs/mine?source=app"}})}},{key:"render",value:function(){return u.a.createElement("div",{className:f.a.container},u.a.createElement("div",{className:f.a.btn},u.a.createElement("span",{onClick:this.toLogin},"登录"),u.a.createElement("span",null,"/"),u.a.createElement("span",{onClick:this.toRegister},"注册")),u.a.createElement("div",{className:f.a.movement},u.a.createElement("div",null),u.a.createElement("div",null)))}}]),t}(d.Component);t.a=w},989:function(e,t,i){"use strict";var n=i(42),a=i.n(n),s=i(43),o=i.n(s),r=i(948),l=i.n(r),c=l.a.isMobile,h=void 0,p=void 0,m=function(){function e(t,i,n){a()(this,e);var s=this;if(this.el=t,this.container=i,this.coor={x:(c?n.touches[0].clientX:n.clientX)-t.offsetLeft-t.parentElement.offsetLeft-document.getElementsByClassName("image-aside")[0].offsetLeft,y:(c?n.touches[0].clientY:n.clientY)-t.offsetTop-t.parentElement.offsetTop-document.getElementsByClassName("image-aside")[0].offsetTop,posX:c?n.touches[0].clientX:n.clientX,posy:c?n.touches[0].clientY:n.clientY,maxLeft:parseInt(this.container.style.width)-parseInt(this.el.style.width),maxTop:parseInt(this.container.style.height)-parseInt(this.el.style.height)},h=function(e){s.move(e)},p=function(e){s.stopMove(e)},c)return document.addEventListener("touchmove",h,!1),void document.addEventListener("touchend",p,!1);document.addEventListener("mousemove",h,!1),document.addEventListener("mouseup",p,!1)}return o()(e,[{key:"move",value:function(e){if(this.el){var t=c?e.changedTouches[0].clientX:e.clientX,i=c?e.changedTouches[0].clientY:e.clientY,n=t-this.el.parentElement.offsetLeft-document.getElementsByClassName("image-aside")[0].offsetLeft-this.coor.x,a=i-this.el.parentElement.offsetTop-document.getElementsByClassName("image-aside")[0].offsetTop-this.coor.y;n<=0&&(n=0),n>=this.coor.maxLeft&&(n=this.coor.maxLeft),a<=0&&(a=0),a>=this.coor.maxTop&&(a=this.coor.maxTop),this.el.style.left=n+"px",this.el.style.top=a+"px"}}},{key:"stopMove",value:function(){if(this.el=null,c)return document.removeEventListener("touchmove",h,!1),void document.removeEventListener("touchend",p,!1);document.removeEventListener("mousemove",h,!1),document.removeEventListener("mouseup",p,!1)}}]),e}();t.a=m},990:function(e,t,i){"use strict";var n=i(42),a=i.n(n),s=i(43),o=i.n(s),r=i(948),l=i.n(r),c=void 0,h=void 0,p=l.a.isMobile,m=document.body.offsetWidth,d=document.body.offsetHeight,u=function(){function e(t,i,n,s){a()(this,e),s.stopPropagation();var o=this;this.coor={x:p?s.touches[0].clientX:s.clientX,y:p?s.touches[0].clientY:s.clientY,w:parseInt(window.getComputedStyle(t).width,10),h:parseInt(window.getComputedStyle(t).height,10)},this.splitX=n.split(":")[0],this.splitY=n.split(":")[1],this.el=t,this.container=i,c=function(e){o.drag(e)},h=function(e){o.stopDrag(e)},p&&(document.addEventListener("touchmove",c,!1),document.addEventListener("touchend",h,!1)),document.addEventListener("mousemove",c,!1),document.addEventListener("mouseup",h,!1)}return o()(e,[{key:"drag",value:function(e){if(this.el){var t=this.container,i=parseInt(window.getComputedStyle(t).width),n=parseInt(window.getComputedStyle(t).height),a=document.querySelector(".info-aside"),s=m-i,o=d-n-window.getComputedStyle(a).height,r=p?e.changedTouches[0].clientX:e.clientX,l=p?e.changedTouches[0].clientY:e.clientY;this.splitX>this.splitY?parseInt(r)<=s/2+i&&(parseInt(this.el.offsetWidth)>=i&&(this.el.style.width=window.getComputedStyle(t).width),this.el.style.width=this.coor.w+(p?e.changedTouches[0].clientX:e.clientX)-this.coor.x+"px",this.el.style.height=parseInt(this.el.offsetWidth)*(this.splitY/this.splitX)+"px",i>n?parseInt(this.el.offsetWidth)>=parseInt(window.getComputedStyle(t).height)&&(this.el.style.height=window.getComputedStyle(t).height,this.el.style.width=parseInt(window.getComputedStyle(t).height)*(this.splitX/this.splitY)+"px"):i<n?parseInt(this.el.offsetWidth)>=i&&(this.el.style.width=window.getComputedStyle(t).width,this.el.style.height=i*(this.splitY/this.splitX)+"px"):parseInt(this.el.offsetHeight)>=i&&(this.el.style.width=i,this.el.style.height=i*(this.splitY/this.splitX)+"px")):this.splitX<this.splitY?parseInt(l)<=o/2+n+window.getComputedStyle(a).height&&(this.el.style.height=this.coor.h+(p?e.changedTouches[0].clientY:e.clientY)-this.coor.y+"px",this.el.style.width=parseInt(this.el.style.height)*(this.splitX/this.splitY)+"px",i>n?parseInt(this.el.offsetHeight)>=n&&(this.el.style.height=n,this.el.style.width=n*(this.splitX/this.splitY)+"px"):parseInt(this.el.offsetWidth)>=i&&(this.el.style.width=i,this.el.style.height=i*(this.splitY/this.splitX)+"px")):parseInt(r)<=s/2+i&&(this.el.style.width=this.coor.w+(p?e.changedTouches[0].clientX:e.clientX)-this.coor.x+"px",this.el.style.height=this.el.style.width,i>n?parseInt(this.el.offsetHeight)>=n&&(this.el.style.height=n,this.el.style.width=n):i<n?parseInt(this.el.offsetWidth)>=i&&(this.el.style.width=i,this.el.style.height=i):parseInt(this.el.offsetWidth)>=i&&(this.el.style.width=this.el.style.height=i))}}},{key:"stopDrag",value:function(){this.el=null,p&&(document.removeEventListener("touchmove",c,!1),document.removeEventListener("touchend",h,!1)),document.removeEventListener("mousemove",c,!1),document.removeEventListener("mouseup",h,!1)}}]),e}();t.a=u},991:function(e,t){e.exports=function(e,t,i,n,a,s){function o(e){for(var t={},i=/([a-z-]+):\s?(.*);?/gi,n=void 0;n===i.exec(e);)t[n[1]]=n[2];return t}var r=new XMLHttpRequest,l=s||function(){console.error("AJAX ERROR!")},c=!1;"blob"===e&&(c=e,e="GET"),e=e.toUpperCase(),r.onload=function(){var t=r.response;try{t=JSON.parse(r.responseText)}catch(e){401===r.status&&(t=l("access_denied",r.statusText))}var i=o(r.getAllResponseHeaders());i.statusCode=r.status,a(t||("GET"===e?l("empty_response","Could not get resource"):{}),i)},r.onerror=function(){var e=r.responseText;try{e=JSON.parse(r.responseText)}catch(e){console.error(e)}a(e||l("access_denied","Could not get resource"))};var h=void 0;if("GET"===e||"DELETE"===e)n=null;else if(n&&"string"!=typeof n&&!(n instanceof FormData)&&!(n instanceof File)&&!(n instanceof Blob)){var p=new FormData;for(h in n)n.hasOwnProperty(h)&&(n[h]instanceof HTMLInputElement?"files"in n[h]&&n[h].files.length>0&&p.append(h,n[h].files[0]):n[h]instanceof Blob?p.append(h,n[h],n.name):p.append(h,n[h]));n=p}if(r.open(e,t,!0),c&&("responseType"in r?r.responseType=c:r.overrideMimeType("text/plain; charset=x-user-defined")),i)for(h in i)r.setRequestHeader(h,i[h]);return r.send(n),r}}});