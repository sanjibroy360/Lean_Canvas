(this.webpackJsonpprops=this.webpackJsonpprops||[]).push([[0],{182:function(e,t,n){e.exports=n.p+"static/media/banner.321d6e1d.png"},193:function(e,t,n){e.exports=n(414)},413:function(e,t,n){},414:function(e,t,n){"use strict";n.r(t);var a=n(20),i=n.n(a),r=n(0),c=n.n(r),o=n(10),l=n(107),s=n(18),p=n(21),d={projectName:"",date:"",topics:[],enablePresentationMode:!1};var u="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||p.c,m=Object(p.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TOPICS":return Object(s.a)(Object(s.a)({},e),{},{topics:Object(l.a)(t.payload)});case"ADD_POINT":return e.topics=e.topics.map((function(e){return e.topicId===t.payload.topicId?Object(s.a)(Object(s.a)({},e),{},{points:[].concat(Object(l.a)(e.points),[t.payload])}):e})),Object(s.a)({},e);case"EDIT_POINT":return e.topics=e.topics.map((function(e){return e.topicId===t.payload.topicId&&(e.points=e.points.map((function(e){return e.pointId===t.payload.pointId?t.payload:e}))),e})),Object(s.a)({},e);case"REORDER_POINTS":return e.topics=e.topics.map((function(e){return e.topicId===t.payload.topicId&&(e.points=t.payload.points),e})),Object(s.a)({},e);case"DELETE_POINT":return e.topics=e.topics.map((function(e){return e.topicId===t.payload.topicId&&(e.points=e.points.filter((function(e){return e.pointId!==t.payload.pointId}))),e})),Object(s.a)({},e);case"TOGGLE_PRESENTATION_MODE":return"boolean"==typeof t.payload&&(e.enablePresentationMode=t.payload),Object(s.a)({},e);default:return e}}),u()),h=n(14),v=n(15),b=n(17),E=n(16),g=n(43);var f=n(419),O=n(32),y=n(70),I=n.n(y);var P=function(e){var t=e.pointInfo,n=e.value,a=e.enablePreview,i=e.handleSubmit,r=e.handlePreview,o=e.closeInputBox,l=e.handleInput,s=e.textareaName;return c.a.createElement("div",{className:"input_point"},c.a.createElement("textarea",{name:s,value:n,rows:"3",onChange:l}),n.trim()&&c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"checkbox",name:"preview",checked:a,onChange:r}),c.a.createElement("span",{className:"small_text"},"Preview text")),c.a.createElement("div",{className:"btn_wrapper"},c.a.createElement("button",{type:"submit",onClick:function(e){return i(e,t)},className:"btn save_btn"},"Add"),c.a.createElement("button",{type:"submit",onClick:o,className:"btn cancel_btn"},c.a.createElement("i",{className:"fas fa-times"}))))},w=n(71),N=n.n(w);var j=function(e){var t=e.source,n=e.enablePreview,a=e.handlePreview;return c.a.createElement("div",null,c.a.createElement("div",{className:"card preview_text"},c.a.createElement(N.a,{source:t,escapeHtml:!1}),c.a.createElement("input",{type:"checkbox",name:"preview",checked:n,onChange:a}),c.a.createElement("span",{className:"small_text"},"Preview text")))},k=function(e){Object(b.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleInput=function(e){e.target.style.height="inherit",e.target.style.height="".concat(e.target.scrollHeight,"px");var t=e.target,n=t.name,i=t.value;return a.setState(Object(O.a)({},n,i))},a.handlePreview=function(e){var t=e.target,n=t.name,i=t.checked;return a.setState(Object(O.a)({},n,i))},a.handleSubmit=function(e){var t=a.state.point;t=t.trim();var n={pointId:I()(),point:t,topicId:a.props.topic.topicId};if(t)return a.setState({point:"",preview:!1}),a.props.closeInputBox(),function(e,t){return t({type:"ADD_POINT",payload:e})}(n,a.props.dispatch)},a.closeInputBox=function(){return a.setState({point:"",preview:!1}),a.props.closeInputBox()},a.state={point:"",preview:!1},a}return Object(v.a)(n,[{key:"render",value:function(){var e=this.state,t=e.point,n=e.preview,a=this.props.topic;return c.a.createElement("div",{className:"add_points_form"},n?c.a.createElement(j,{source:t,enablePreview:n,handlePreview:this.handlePreview}):c.a.createElement(P,{textareaName:"point",value:t,enablePreview:n,handleInput:this.handleInput,handlePreview:this.handlePreview,closeInputBox:this.closeInputBox,handleSubmit:this.handleSubmit,pointInfo:a}))}}]),n}(r.Component),_=Object(o.b)()(k),x=function(e){Object(b.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleInput=function(e){e.target.style.height="inherit",e.target.style.height="".concat(e.target.scrollHeight,"px");var t=e.target,n=t.name,i=t.value;return a.setState(Object(O.a)({},n,i))},a.handlePreview=function(e){var t=e.target,n=t.name,i=t.checked;return a.setState(Object(O.a)({},n,i))},a.handleSubmit=function(e,t){return t=Object(s.a)(Object(s.a)({},t),{},{point:a.state.editPoint}),a.setState({editPoint:"",enableEditMode:!1}),function(e,t){return t({type:"EDIT_POINT",payload:e})}(t,a.props.dispatch)},a.handleEditMode=function(e,t){var n=t.point;a.setState({editPoint:n,enableEditMode:!0})},a.handleDelete=function(e,t){return function(e,t){return t({type:"DELETE_POINT",payload:e})}(t,a.props.dispatch)},a.closeInputBox=function(){return a.setState({editPoint:"",enableEditMode:!1})},a.state={editPoint:"",preview:"",enableEditMode:!1},a}return Object(v.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.enableEditMode,a=t.editPoint,i=t.preview,r=this.props,o=r.pointInfo,l=r.enablePresentationMode;return c.a.createElement("div",null,n&&!l?c.a.createElement(c.a.Fragment,null,i?c.a.createElement(j,{source:a,enablePreview:i,handlePreview:this.handlePreview}):c.a.createElement(c.a.Fragment,null,c.a.createElement(P,{textareaName:"editPoint",value:a,enablePreview:i,handleInput:this.handleInput,handlePreview:this.handlePreview,closeInputBox:this.closeInputBox,handleSubmit:this.handleSubmit,pointInfo:o}))):c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"text"},c.a.createElement(N.a,{escapeHtml:!1},o.point)),!l&&c.a.createElement("nobr",null,c.a.createElement("div",{className:"btns"},c.a.createElement("button",{onClick:function(t){return e.handleEditMode(t,o)}},"Edit"),c.a.createElement("button",{onClick:function(t){return e.handleDelete(t,o)}},"Delete"))))))}}]),n}(r.Component);var S=Object(o.b)((function(e){return{enablePresentationMode:e.enablePresentationMode}}))(x);var C=function(e){var t=e.point,n=e.index;return c.a.createElement(g.b,{key:t.pointId,draggableId:t.pointId,index:n},(function(e,n){return c.a.createElement("div",Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps),c.a.createElement(S,{pointInfo:t}))}))},M=function(e){Object(b.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={editPoint:"",preview:"",enableEditMode:!1},a}return Object(v.a)(n,[{key:"render",value:function(){var e=this.props,t=e.topic,n=e.state.enablePresentationMode;return c.a.createElement("div",null,t.points.map((function(e,t){return c.a.createElement(c.a.Fragment,{key:e.pointId},n?c.a.createElement(S,{pointInfo:e}):c.a.createElement(C,{point:e,index:t}))})))}}]),n}(r.Component);var T=Object(o.b)((function(e){return{state:e}}))(M),D=n(421),A={opacity:.7,padding:"0.375rem"},R=function(e){Object(b.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleInputTaking=function(){var e=a.state.isAddingPoints;return a.setState({isAddingPoints:!e})},a.state={isAddingPoints:!1},a}return Object(v.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.topic,a=t.boxNo,i=n.topicName,r=n.topicId,o=this.state.isAddingPoints,l=["https://img.icons8.com/dusk/32/000000/lock-2.png","","https://img.icons8.com/ultraviolet/26/000000/key.png","https://img.icons8.com/officel/22/000000/bar-chart.png","https://img.icons8.com/material-two-tone/30/000000/gift.png","","https://img.icons8.com/dusk/31/000000/fantasy.png","https://img.icons8.com/windows/28/000000/three-way-direction.png","https://img.icons8.com/dusk/34/000000/gender-neutral-user--v1.png","","https://img.icons8.com/pastel-glyph/32/000000/transaction-list--v5.png","https://img.icons8.com/plasticine/55/000000/economic-improvement.png"];return c.a.createElement(g.c,{droppableId:n.topicId},(function(t,s){return c.a.createElement("div",Object.assign({},t.droppableProps,{ref:t.innerRef,className:"topic box".concat(a),key:i+r}),c.a.createElement("div",{className:"topic_card_header"},c.a.createElement("p",{className:"title",key:r+1},i),c.a.createElement("div",null,c.a.createElement("img",{src:l[a-1],alt:""}))),o?c.a.createElement(_,{topic:n,closeInputBox:e.handleInputTaking}):c.a.createElement(D.a,{content:"Add Point",position:"right center",size:"mini",style:A,trigger:c.a.createElement("button",{className:"add_card_btn",onClick:e.handleInputTaking},c.a.createElement("i",{className:"fa fa-plus-circle"}))}),c.a.createElement(T,{topic:n}))}))}}]),n}(r.Component);var B=Object(o.b)((function(e){return{enablePresentationMode:e.enablePresentationMode}}))((function(e){var t=e.topic,n=e.boxNo,a=e.enablePresentationMode,i=t.topicName,r=t.topicId;return c.a.createElement(c.a.Fragment,null,a?c.a.createElement("div",{className:"topic box".concat(n)},c.a.createElement("div",{className:"topic_card_header"},c.a.createElement("p",{className:"title",key:r+1},i),c.a.createElement("div",null,c.a.createElement("img",{src:["https://img.icons8.com/dusk/32/000000/lock-2.png","","https://img.icons8.com/ultraviolet/26/000000/key.png","https://img.icons8.com/officel/22/000000/bar-chart.png","https://img.icons8.com/material-two-tone/30/000000/gift.png","","https://img.icons8.com/dusk/31/000000/fantasy.png","https://img.icons8.com/windows/28/000000/three-way-direction.png","https://img.icons8.com/dusk/34/000000/gender-neutral-user--v1.png","","https://img.icons8.com/pastel-glyph/32/000000/transaction-list--v5.png","https://img.icons8.com/plasticine/55/000000/economic-improvement.png"][n-1],alt:""}))),c.a.createElement(T,{topic:t})):c.a.createElement(R,{topic:t,boxNo:n}))}));var V=Object(o.b)((function(e){return{topics:e.topics}}))((function(e){var t=e.topics,n=e.gridView;return c.a.createElement("ul",{className:n?"grid_container":"grid_container row_view",key:"wrapper"},t.map((function(e,n){return c.a.createElement(c.a.Fragment,{key:e.topicId+n},n%2?c.a.createElement(c.a.Fragment,null):c.a.createElement("li",{className:"inner_wrapper",key:"".concat(n)},c.a.createElement(B,{topic:t[n],key:"".concat(e.topicId,"card"),boxNo:n+1}),c.a.createElement(B,{topic:t[n+1],boxNo:n+2,key:"".concat(e.topicId+1,"card")})))})))})),L=function(e){Object(b.a)(n,e);var t=Object(E.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handlePresentationMode=function(){var t=e.state.enablePresentationMode;e.setState({enablePresentationMode:!t},(function(){return t=e.state.enablePresentationMode,(0,e.props.dispatch)({type:"TOGGLE_PRESENTATION_MODE",payload:t});var t}))},e.handleRowView=function(){return console.log("Clicked"),e.setState({gridView:!1})},e.handleGridView=function(){return e.setState({gridView:!0})},e.reorder=function(t,n,a){var i,r=t.points.splice(n,1)[0];return t.points.splice(a,0,r),i=t,(0,e.props.dispatch)({type:"REORDER_POINTS",payload:i})},e.onDragEnd=function(t){var n=e.props.topics,a=t.source.droppableId,i=t.source.index,r=t.destination.index,c=n.filter((function(e){return e.topicId===a}))[0];return console.log(t),e.reorder(c,i,r)},e.state={enablePresentationMode:!1,gridView:!0},e}return Object(v.a)(n,[{key:"render",value:function(){var e=this.state,t=e.enablePresentationMode,n=e.gridView;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"board_wrapper"},c.a.createElement(g.a,{onDragEnd:this.onDragEnd},c.a.createElement("div",{className:"canvas_header"},c.a.createElement("div",{className:"toggle_btn"},c.a.createElement(f.a,{toggle:!0,checked:t,onChange:this.handlePresentationMode}),c.a.createElement("nobr",null," Presentation Mode")),c.a.createElement("div",{className:"view"},c.a.createElement("div",{onClick:this.handleGridView},c.a.createElement("img",{src:"https://img.icons8.com/fluent-systems-regular/30/000000/activity-grid.png",alt:""})),c.a.createElement("div",{onClick:this.handleRowView},c.a.createElement("i",{className:"fas fa-bars"})))),c.a.createElement(V,{gridView:n}))))}}]),n}(r.Component);var F=Object(o.b)((function(e){return{topics:e.topics}}))(L),G=n(182),H=n.n(G),U=n(420),J=n(45),X=function(e){Object(b.a)(n,e);var t=Object(E.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"hero"},c.a.createElement("div",{className:"hero_text"},c.a.createElement("p",null,"CAPTURE YOUR BUSINESS MODEL ON A LEAN CANVAS"),c.a.createElement("h1",null,"Communicate your idea clearly and concisely to others so they can get behind it.")," ",c.a.createElement("h3",null," ","Lean Canvas helps you deconstruct your idea into a business model using 9 building blocks."),c.a.createElement(U.a,{animated:!0},c.a.createElement(U.a.Content,{visible:!0},"GET STARTED"),c.a.createElement(U.a.Content,{hidden:!0},c.a.createElement(J.a,{name:"arrow right"})))),c.a.createElement("div",{className:"hero_image"},c.a.createElement("img",{src:H.a,alt:""}))))}}]),n}(r.Component),q=function(e){Object(b.a)(n,e);var t=Object(E.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"componentDidMount",value:function(){return function(e,t){return t({type:"ADD_TOPICS",payload:e})}(["Problem","Existing alternative","Solution","Key Metrics","Unique value proposition","High-Level concept","Unfair advantage","Channels","Customer segment","Early addopters","Cost structure","Revenue streams"].map((function(e){return{topicId:I()(),topicName:e,points:[]}})),this.props.dispatch)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(X,null),c.a.createElement(F,null))}}]),n}(r.Component);var z=Object(o.b)((function(e){return{state:e}}))(q);n(412),n(413);i.a.render(c.a.createElement(o.a,{store:m},c.a.createElement(z,null)),document.getElementById("root"))}},[[193,1,2]]]);
//# sourceMappingURL=main.d3bb0eb2.chunk.js.map