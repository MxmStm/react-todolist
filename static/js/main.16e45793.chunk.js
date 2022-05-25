(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],{118:function(t,e,n){},119:function(t,e,n){},142:function(t,e,n){"use strict";n.r(e);var a,c,i=n(0),s=n.n(i),r=n(11),o=n.n(r),l=n(18),d=n(48),u=(n(118),n(9)),j=(n(119),n(68)),b=n(92),O=n(65),f=n(36),h=n(8),m=n(93),T=n.n(m).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"193fc14b-7133-4358-b157-8b260b27418c"}}),g=function(){return T.get("todo-lists")},p=function(t){return T.post("todo-lists",{title:t})},x=function(t){return T.delete("todo-lists/".concat(t))},v=function(t,e){return T.put("todo-lists/".concat(t),{title:e})},k=function(t){return T.get("todo-lists/".concat(t,"/tasks"))},S=function(t,e){return T.delete("todo-lists/".concat(t,"/tasks/").concat(e))},I=function(t,e){return T.post("todo-lists/".concat(t,"/tasks"),{title:e})},y=function(t,e,n){return T.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},C=function(t){return T.post("auth/login",t)},E=function(){return T.get("auth/me")},A=function(){return T.delete("auth/login")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(c||(c={}));var D=function(t,e){t.messages.length?e(R(t.messages[0])):e(R("Some error occurred")),e(F("failed"))},L=function(t,e){e(R(t)),e(F("failed"))},w={isLoggedIn:!1},P=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},N={status:"loading",error:null,isInitialized:!1},F=function(t){return{type:"APP/SET-STATUS",status:t}},R=function(t){return{type:"APP/SET-ERROR",error:t}},G={},K=function(t,e,n){return function(a,c){var i=c().tasks[n].find((function(e){return e.id===t}));if(i){var s=Object(h.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);a(F("loading")),y(n,t,s).then((function(c){0===c.data.resultCode?(a(function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n)),a(F("succeeded"))):D(c.data,a)})).catch((function(t){L(t.message,a)}))}else console.warn("task not found in the state")}},M=[],U=Object(j.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(h.a)(Object(h.a)({},t),{},Object(f.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(h.a)(Object(h.a)({},t),{},Object(f.a)({},e.task.todoListId,[e.task].concat(Object(O.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(h.a)(Object(h.a)({},t),{},Object(f.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(h.a)(Object(h.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(h.a)(Object(h.a)({},t),{},Object(f.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(h.a)({},t);return delete n[e.id],n;case"SET-TODOLISTS":var a=Object(h.a)({},t);return e.todolists.forEach((function(t){a[t.id]=[]})),a;case"SET-TASKS":return Object(h.a)(Object(h.a)({},t),{},Object(f.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[Object(h.a)(Object(h.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(O.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(h.a)(Object(h.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(h.a)(Object(h.a)({},t),{},{filter:e.filter}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(h.a)(Object(h.a)({},t),{},{filter:"all",entityStatus:"idle"})}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(h.a)(Object(h.a)({},t),{},{entityStatus:e.entityStatus}):t}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(h.a)(Object(h.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(h.a)(Object(h.a)({},t),{},{error:e.error});case"APP/SET-IS-INITIALIZED":return Object(h.a)(Object(h.a)({},t),{},{isInitialized:e.isInitialized});default:return t}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"login/SET-IS-LOGGED-IN":return Object(h.a)(Object(h.a)({},t),{},{isLoggedIn:e.value});default:return t}}}),H=Object(j.c)(U,Object(j.a)(b.a)),V=l.c;window.store=H;var z=n(23),Z=n(187),q=n(198),B=n(94),Y=n.n(B),J=n(3),_=s.a.memo((function(t){var e=Object(i.useState)(""),n=Object(z.a)(e,2),a=n[0],c=n[1],s=Object(i.useState)(null),r=Object(z.a)(s,2),o=r[0],l=r[1],d=function(){""!==a.trim()?(t.addItem(a),c("")):l("Title is required")};return Object(J.jsxs)("div",{children:[Object(J.jsx)(q.a,{variant:"outlined",error:!!o,value:a,onChange:function(t){c(t.currentTarget.value)},onKeyPress:function(t){null!==o&&l(null),"Enter"===t.key&&d()},label:"Title",helperText:o,size:"small",disabled:t.disabled}),Object(J.jsx)(Z.a,{onClick:d,children:Object(J.jsx)(Y.a,{})})]})})),W=s.a.memo((function(t){var e=Object(i.useState)(t.title),n=Object(z.a)(e,2),a=n[0],c=n[1],s=Object(i.useState)(!1),r=Object(z.a)(s,2),o=r[0],l=r[1],d=function(){l(!1),t.changeTitle(a)};return o?Object(J.jsx)(q.a,{autoFocus:!0,value:a,onChange:function(t){c(t.currentTarget.value)},onBlur:d,onKeyPress:function(t){return"Enter"===t.key&&d()}}):Object(J.jsx)("span",{onDoubleClick:function(){t.disabled?l(!1):l(!0)},children:t.title})})),$=n(200),Q=n(188),X=n(95),tt=n.n(X),et=s.a.memo((function(t){var e=Object(i.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t]),n=Object(i.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t]),c=Object(i.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t]);return Object(J.jsxs)(Q.a,{divider:!0,children:[Object(J.jsxs)("span",{className:t.task.status===a.Completed?"is-done":"",children:[Object(J.jsx)($.a,{size:"small",color:"primary",checked:t.task.status===a.Completed,onChange:n}),Object(J.jsx)(W,{title:t.task.title,changeTitle:c,disabled:t.disabled})]}),Object(J.jsx)(Z.a,{onClick:e,children:Object(J.jsx)(tt.a,{})})]})})),nt=n(66),at=n(96),ct=n.n(at),it=function(t){var e=t.title,n=t.removeTodolist,a=Object(nt.a)(t,["title","removeTodolist"]);return Object(J.jsx)("div",{style:{textAlign:"center"},children:Object(J.jsxs)("h3",{children:[Object(J.jsx)(W,{title:e,changeTitle:a.changeTodolistTitle,disabled:a.disabled}),Object(J.jsx)(Z.a,{onClick:n,disabled:a.disabled,children:Object(J.jsx)(ct.a,{})})]})})},st=n(144),rt=n(189),ot=function(t){var e=t.filter,n=t.setFilterValue;Object(nt.a)(t,["filter","setFilterValue"]);return Object(J.jsxs)(rt.a,{variant:"contained",size:"small",fullWidth:!0,children:[Object(J.jsx)(st.a,{color:"all"===e?"primary":"secondary",onClick:n("all"),children:"All"}),Object(J.jsx)(st.a,{color:"active"===e?"primary":"secondary",onClick:n("active"),children:"Active"}),Object(J.jsx)(st.a,{color:"completed"===e?"primary":"secondary",onClick:n("completed"),children:"Completed"})]})},lt=n(186),dt=s.a.memo((function(t){var e=Object(l.b)();Object(i.useEffect)((function(){var n,a=(n=t.id,function(t){t(F("loading")),k(n).then((function(e){var a=e.data.items;t(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(a,n)),t(F("succeeded"))})).catch((function(e){L(e.message,t)}))});e(a)}),[e,t.id]);var n=Object(i.useCallback)((function(e){t.addTask(e,t.id)}),[t]),c=Object(i.useCallback)((function(e){t.changeTodolistTitle(t.id,e)}),[t]),s=Object(i.useCallback)((function(e){return function(){t.changeFilter(e,t.id)}}),[t]),r=t.tasks;return"active"===t.filter&&(r=t.tasks.filter((function(t){return t.status===a.New}))),"completed"===t.filter&&(r=t.tasks.filter((function(t){return t.status===a.Completed}))),Object(J.jsxs)("div",{className:"todolist",children:[Object(J.jsx)(it,{title:t.title,disabled:"loading"===t.entityStatus,removeTodolist:function(){t.removeTodolist(t.id)},changeTodolistTitle:c}),Object(J.jsx)(_,{addItem:n,disabled:"loading"===t.entityStatus}),Object(J.jsx)(lt.a,{children:r.map((function(e){return Object(J.jsx)(et,{task:e,todolistId:t.id,removeTask:t.removeTask,changeTaskTitle:t.changeTaskTitle,changeTaskStatus:t.changeTaskStatus,disabled:"loading"===t.entityStatus},e.id)}))}),Object(J.jsx)(ot,{filter:t.filter,setFilterValue:s})]})})),ut=n(190),jt=n(143),bt=function(){var t=Object(l.c)((function(t){return t.todolists})),e=Object(l.c)((function(t){return t.tasks})),n=V((function(t){return t.auth.isLoggedIn})),a=Object(l.b)(),c=Object(u.g)();Object(i.useEffect)((function(){if(n){var t=function(t){t(F("loading")),g().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data}),t(F("succeeded"))})).catch((function(e){L(e.message,t)}))};a(t)}else c("login")}),[a,n,c]);var s=Object(i.useCallback)((function(t,e){var n=function(t,e){return function(n){n(F("loading")),S(e,t).then((function(a){n(function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e)),n(F("succeeded"))})).catch((function(t){L(t.message,n)}))}}(t,e);a(n)}),[a]),r=Object(i.useCallback)((function(t,e){var n=function(t,e){return function(n){n(F("loading")),I(e,t).then((function(t){0===t.data.resultCode?(n({type:"ADD-TASK",task:t.data.data.item}),n(F("succeeded"))):D(t.data,n)})).catch((function(t){L(t.message,n)}))}}(t,e);a(n)}),[a]),o=Object(i.useCallback)((function(t,e,n){var c=K(t,{status:e},n);a(c)}),[a]),d=Object(i.useCallback)((function(t,e,n){var c=K(t,{title:e},n);a(c)}),[a]),j=Object(i.useCallback)((function(t,e){var n={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};a(n)}),[a]),b=Object(i.useCallback)((function(t){var e,n=(e=t,function(t){t(F("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,entityStatus:"loading"}),x(e).then((function(n){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(F("succeeded"))})).catch((function(e){L(e.message,t)}))});a(n)}),[a]),O=Object(i.useCallback)((function(t,e){var n=function(t,e){return function(n){n(F("loading")),v(t,e).then((function(a){0===a.data.resultCode?(n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e)),n(F("succeeded"))):D(a.data,n)})).catch((function(t){L(t.message,n)}))}}(t,e);a(n)}),[a]),f=Object(i.useCallback)((function(t){var e=function(t){return function(e){e(F("loading")),p(t).then((function(t){0===t.data.resultCode?(e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(F("succeeded"))):D(t.data,e)})).catch((function(t){L(t.message,e)}))}}(t);a(e)}),[a]);return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(ut.a,{container:!0,justifyContent:"center",style:{padding:"25px 0"},children:Object(J.jsx)(_,{addItem:f})}),Object(J.jsx)(ut.a,{container:!0,justifyContent:"center",spacing:6,children:t.map((function(t){var n=e[t.id];return Object(J.jsx)(ut.a,{item:!0,children:Object(J.jsx)(jt.a,{elevation:10,style:{padding:"20px"},children:Object(J.jsx)(dt,{id:t.id,title:t.title,entityStatus:t.entityStatus,tasks:n,removeTask:s,changeFilter:j,addTask:r,changeTaskStatus:o,filter:t.filter,removeTodolist:b,changeTaskTitle:d,changeTodolistTitle:O})})},t.id)}))})]})},Ot=n(202),ft=n(199),ht=s.a.forwardRef((function(t,e){return Object(J.jsx)(ft.a,Object(h.a)({elevation:6,ref:e,variant:"filled"},t))})),mt=function(){var t=V((function(t){return t.app.error})),e=Object(l.b)(),n=function(t,n){"clickaway"!==n&&e(R(null))};return Object(J.jsx)(Ot.a,{open:null!==t,autoHideDuration:7e3,onClose:n,children:Object(J.jsxs)(ht,{onClose:n,severity:"error",children:["\ud83d\ude20 ",t]})})},Tt=n(99),gt=n(185),pt=n(184),xt=n(192),vt=n(191),kt=function(){var t=V((function(t){return t.auth.isLoggedIn})),e=Object(l.b)(),n=Object(Tt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<3&&(e.password="Must be 3 characters or less"):e.password="Required",e},onSubmit:function(t){var a;e((a=t,function(t){t(F("loading")),C(a).then((function(e){0===e.data.resultCode?(t(P(!0)),t(F("succeeded"))):D(e.data,t)})).catch((function(e){L(e.message,t)}))})),n.resetForm()}});return t?Object(J.jsx)(u.a,{to:"/"}):Object(J.jsx)(ut.a,{container:!0,justifyContent:"center",children:Object(J.jsx)(ut.a,{item:!0,children:Object(J.jsx)("form",{onSubmit:n.handleSubmit,children:Object(J.jsxs)(pt.a,{children:[Object(J.jsxs)(gt.a,{children:[Object(J.jsxs)("p",{children:["To log in get registered",Object(J.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",rel:"noreferrer",children:" here"})]}),Object(J.jsx)("p",{children:"or use common test account credentials:"}),Object(J.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(J.jsx)("p",{children:"Password: free"})]}),Object(J.jsxs)(vt.a,{children:[Object(J.jsx)(q.a,Object(h.a)({label:"Email",margin:"normal"},n.getFieldProps("email"))),n.touched.email&&n.errors.email&&Object(J.jsx)("div",{style:{color:"red"},children:n.errors.email}),Object(J.jsx)(q.a,Object(h.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password"))),n.touched.password&&n.errors.password&&Object(J.jsx)("div",{style:{color:"red"},children:n.errors.password}),Object(J.jsx)(xt.a,{label:"Remember me",control:Object(J.jsx)($.a,Object(h.a)({checked:n.values.rememberMe},n.getFieldProps("rememberMe")))}),Object(J.jsx)(st.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})},St=n(145),It=n(194),yt=n(197),Ct=n(196),Et=n(195),At=n(193);var Dt=function(){var t=V((function(t){return t.app.status})),e=V((function(t){return t.app.isInitialized})),n=V((function(t){return t.auth.isLoggedIn})),a=Object(l.b)();return Object(i.useEffect)((function(){a((function(t){t(F("loading")),E().then((function(e){0===e.data.resultCode?(t(P(!0)),t(F("succeeded"))):D(e.data,t)})).catch((function(e){L(e.message,t)})).finally((function(){t({type:"APP/SET-IS-INITIALIZED",isInitialized:!0})}))}))}),[a]),e?Object(J.jsxs)("div",{className:"App",children:[Object(J.jsxs)(It.a,{position:"static",children:[Object(J.jsxs)(Et.a,{style:{justifyContent:"space-between"},children:[Object(J.jsx)(St.a,{variant:"h6",children:"To Do List"}),n&&Object(J.jsx)(st.a,{color:"inherit",variant:"outlined",onClick:function(){a((function(t){t(F("loading")),A().then((function(e){0===e.data.resultCode?(t(P(!1)),t(F("succeeded"))):D(e.data,t)})).catch((function(e){L(e.message,t)}))}))},children:"Logout"})]}),"loading"===t&&Object(J.jsx)(Ct.a,{color:"secondary"})]}),Object(J.jsx)(yt.a,{fixed:!0,children:Object(J.jsxs)(u.d,{children:[Object(J.jsx)(u.b,{path:"react-todolist",element:Object(J.jsx)(u.a,{to:"/"})}),Object(J.jsx)(u.b,{path:"/",element:Object(J.jsx)(bt,{})}),Object(J.jsx)(u.b,{path:"login",element:Object(J.jsx)(kt,{})}),Object(J.jsx)(u.b,{path:"404",element:Object(J.jsx)("h1",{style:{textAlign:"center"},children:"404: PAGE NOT FOUND"})}),Object(J.jsx)(u.b,{path:"*",element:Object(J.jsx)(u.a,{to:"404"})})]})}),Object(J.jsx)(mt,{})]}):Object(J.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(J.jsx)(At.a,{})})},Lt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,203)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),i(t),s(t)}))};o.a.render(Object(J.jsx)(l.a,{store:H,children:Object(J.jsx)(d.a,{children:Object(J.jsx)(Dt,{})})}),document.getElementById("root")),Lt()}},[[142,1,2]]]);
//# sourceMappingURL=main.16e45793.chunk.js.map