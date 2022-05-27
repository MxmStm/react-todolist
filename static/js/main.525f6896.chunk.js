(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],{118:function(t,e,n){},119:function(t,e,n){},142:function(t,e,n){"use strict";n.r(e);var a,c,i=n(0),s=n.n(i),r=n(11),o=n.n(r),l=n(18),d=n(48),u=(n(118),n(9)),j=(n(119),n(68)),b=n(92),O=n(65),f=n(36),h=n(8),T=n(93),m=n.n(T).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/react-todolist",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_TODO_URL,withCredentials:!0,headers:{"API-KEY":"193fc14b-7133-4358-b157-8b260b27418c"}}),g=function(){return m.get("todo-lists")},p=function(t){return m.post("todo-lists",{title:t})},v=function(t){return m.delete("todo-lists/".concat(t))},x=function(t,e){return m.put("todo-lists/".concat(t),{title:e})},S=function(t){return m.get("todo-lists/".concat(t,"/tasks"))},k=function(t,e){return m.delete("todo-lists/".concat(t,"/tasks/").concat(e))},I=function(t,e){return m.post("todo-lists/".concat(t,"/tasks"),{title:e})},y=function(t,e,n){return m.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},E=function(t){return m.post("auth/login",t)},C=function(){return m.get("auth/me")},A=function(){return m.delete("auth/login")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(c||(c={}));var D=function(t,e){t.messages.length?e(F(t.messages[0])):e(F("Some error occurred")),e(N("failed"))},L=function(t,e){e(F(t)),e(N("failed"))},w={isLoggedIn:!1},P=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},R={status:"loading",error:null,isInitialized:!1},N=function(t){return{type:"APP/SET-STATUS",status:t}},F=function(t){return{type:"APP/SET-ERROR",error:t}},K={},_=function(t,e,n){return function(a,c){var i=c().tasks[n].find((function(e){return e.id===t}));if(i){var s=Object(h.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);a(N("loading")),y(n,t,s).then((function(c){0===c.data.resultCode?(a(function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n)),a(N("succeeded"))):D(c.data,a)})).catch((function(t){L(t.message,a)}))}else console.warn("task not found in the state")}},U=[],H=Object(j.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(h.a)(Object(h.a)({},t),{},Object(f.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(h.a)(Object(h.a)({},t),{},Object(f.a)({},e.task.todoListId,[e.task].concat(Object(O.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(h.a)(Object(h.a)({},t),{},Object(f.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(h.a)(Object(h.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(h.a)(Object(h.a)({},t),{},Object(f.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(h.a)({},t);return delete n[e.id],n;case"SET-TODOLISTS":var a=Object(h.a)({},t);return e.todolists.forEach((function(t){a[t.id]=[]})),a;case"SET-TASKS":return Object(h.a)(Object(h.a)({},t),{},Object(f.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[Object(h.a)(Object(h.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(O.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(h.a)(Object(h.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(h.a)(Object(h.a)({},t),{},{filter:e.filter}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(h.a)(Object(h.a)({},t),{},{filter:"all",entityStatus:"idle"})}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(h.a)(Object(h.a)({},t),{},{entityStatus:e.entityStatus}):t}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(h.a)(Object(h.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(h.a)(Object(h.a)({},t),{},{error:e.error});case"APP/SET-IS-INITIALIZED":return Object(h.a)(Object(h.a)({},t),{},{isInitialized:e.isInitialized});default:return t}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"login/SET-IS-LOGGED-IN":return Object(h.a)(Object(h.a)({},t),{},{isLoggedIn:e.value});default:return t}}}),G=Object(j.c)(H,Object(j.a)(b.a)),M=l.c;window.store=G;var V=n(23),z=n(187),Z=n(198),B=n(94),W=n.n(B),q=n(3),Y=s.a.memo((function(t){var e=Object(i.useState)(""),n=Object(V.a)(e,2),a=n[0],c=n[1],s=Object(i.useState)(null),r=Object(V.a)(s,2),o=r[0],l=r[1],d=function(){""!==a.trim()?(t.addItem(a),c("")):l("Title is required")};return Object(q.jsxs)("div",{children:[Object(q.jsx)(Z.a,{variant:"outlined",error:!!o,value:a,onChange:function(t){c(t.currentTarget.value)},onKeyPress:function(t){null!==o&&l(null),"Enter"===t.key&&d()},label:"Title",helperText:o,size:"small",disabled:t.disabled}),Object(q.jsx)(z.a,{onClick:d,children:Object(q.jsx)(W.a,{})})]})})),J=s.a.memo((function(t){var e=Object(i.useState)(t.title),n=Object(V.a)(e,2),a=n[0],c=n[1],s=Object(i.useState)(!1),r=Object(V.a)(s,2),o=r[0],l=r[1],d=function(){l(!1),t.changeTitle(a)};return o?Object(q.jsx)(Z.a,{autoFocus:!0,value:a,onChange:function(t){c(t.currentTarget.value)},onBlur:d,onKeyPress:function(t){return"Enter"===t.key&&d()}}):Object(q.jsx)("span",{onDoubleClick:function(){t.disabled?l(!1):l(!0)},children:t.title})})),$=n(200),Q=n(188),X=n(95),tt=n.n(X),et=s.a.memo((function(t){var e=Object(i.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t]),n=Object(i.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t]),c=Object(i.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t]);return Object(q.jsxs)(Q.a,{divider:!0,children:[Object(q.jsxs)("span",{className:t.task.status===a.Completed?"is-done":"",children:[Object(q.jsx)($.a,{size:"small",color:"primary",checked:t.task.status===a.Completed,onChange:n}),Object(q.jsx)(J,{title:t.task.title,changeTitle:c,disabled:t.disabled})]}),Object(q.jsx)(z.a,{onClick:e,children:Object(q.jsx)(tt.a,{})})]})})),nt=n(66),at=n(96),ct=n.n(at),it=function(t){var e=t.title,n=t.removeTodolist,a=Object(nt.a)(t,["title","removeTodolist"]);return Object(q.jsx)("div",{style:{textAlign:"center"},children:Object(q.jsxs)("h3",{children:[Object(q.jsx)(J,{title:e,changeTitle:a.changeTodolistTitle,disabled:a.disabled}),Object(q.jsx)(z.a,{onClick:n,disabled:a.disabled,children:Object(q.jsx)(ct.a,{})})]})})},st=n(144),rt=n(189),ot=function(t){var e=t.filter,n=t.setFilterValue;Object(nt.a)(t,["filter","setFilterValue"]);return Object(q.jsxs)(rt.a,{variant:"contained",size:"small",fullWidth:!0,children:[Object(q.jsx)(st.a,{color:"all"===e?"primary":"secondary",onClick:n("all"),children:"All"}),Object(q.jsx)(st.a,{color:"active"===e?"primary":"secondary",onClick:n("active"),children:"Active"}),Object(q.jsx)(st.a,{color:"completed"===e?"primary":"secondary",onClick:n("completed"),children:"Completed"})]})},lt=n(186),dt=s.a.memo((function(t){var e=Object(l.b)();Object(i.useEffect)((function(){var n,a=(n=t.id,function(t){t(N("loading")),S(n).then((function(e){var a=e.data.items;t(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(a,n)),t(N("succeeded"))})).catch((function(e){L(e.message,t)}))});e(a)}),[e,t.id]);var n=Object(i.useCallback)((function(e){t.addTask(e,t.id)}),[t]),c=Object(i.useCallback)((function(e){t.changeTodolistTitle(t.id,e)}),[t]),s=Object(i.useCallback)((function(e){return function(){t.changeFilter(e,t.id)}}),[t]),r=t.tasks;return"active"===t.filter&&(r=t.tasks.filter((function(t){return t.status===a.New}))),"completed"===t.filter&&(r=t.tasks.filter((function(t){return t.status===a.Completed}))),Object(q.jsxs)("div",{className:"todolist",children:[Object(q.jsx)(it,{title:t.title,disabled:"loading"===t.entityStatus,removeTodolist:function(){t.removeTodolist(t.id)},changeTodolistTitle:c}),Object(q.jsx)(Y,{addItem:n,disabled:"loading"===t.entityStatus}),Object(q.jsx)(lt.a,{children:r.map((function(e){return Object(q.jsx)(et,{task:e,todolistId:t.id,removeTask:t.removeTask,changeTaskTitle:t.changeTaskTitle,changeTaskStatus:t.changeTaskStatus,disabled:"loading"===t.entityStatus},e.id)}))}),Object(q.jsx)(ot,{filter:t.filter,setFilterValue:s})]})})),ut=n(190),jt=n(143),bt=function(){var t=Object(l.c)((function(t){return t.todolists})),e=Object(l.c)((function(t){return t.tasks})),n=M((function(t){return t.auth.isLoggedIn})),a=Object(l.b)(),c=Object(u.g)();Object(i.useEffect)((function(){if(n){var t=function(t){t(N("loading")),g().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data}),t(N("succeeded"))})).catch((function(e){L(e.message,t)}))};a(t)}else c("login")}),[a,n,c]);var s=Object(i.useCallback)((function(t,e){var n=function(t,e){return function(n){n(N("loading")),k(e,t).then((function(a){n(function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e)),n(N("succeeded"))})).catch((function(t){L(t.message,n)}))}}(t,e);a(n)}),[a]),r=Object(i.useCallback)((function(t,e){var n=function(t,e){return function(n){n(N("loading")),I(e,t).then((function(t){0===t.data.resultCode?(n({type:"ADD-TASK",task:t.data.data.item}),n(N("succeeded"))):D(t.data,n)})).catch((function(t){L(t.message,n)}))}}(t,e);a(n)}),[a]),o=Object(i.useCallback)((function(t,e,n){var c=_(t,{status:e},n);a(c)}),[a]),d=Object(i.useCallback)((function(t,e,n){var c=_(t,{title:e},n);a(c)}),[a]),j=Object(i.useCallback)((function(t,e){var n={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};a(n)}),[a]),b=Object(i.useCallback)((function(t){var e,n=(e=t,function(t){t(N("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,entityStatus:"loading"}),v(e).then((function(n){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(N("succeeded"))})).catch((function(e){L(e.message,t)}))});a(n)}),[a]),O=Object(i.useCallback)((function(t,e){var n=function(t,e){return function(n){n(N("loading")),x(t,e).then((function(a){0===a.data.resultCode?(n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e)),n(N("succeeded"))):D(a.data,n)})).catch((function(t){L(t.message,n)}))}}(t,e);a(n)}),[a]),f=Object(i.useCallback)((function(t){var e=function(t){return function(e){e(N("loading")),p(t).then((function(t){0===t.data.resultCode?(e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(N("succeeded"))):D(t.data,e)})).catch((function(t){L(t.message,e)}))}}(t);a(e)}),[a]);return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(ut.a,{container:!0,justifyContent:"center",style:{padding:"25px 0"},children:Object(q.jsx)(Y,{addItem:f})}),Object(q.jsx)(ut.a,{container:!0,justifyContent:"center",spacing:6,children:t.map((function(t){var n=e[t.id];return Object(q.jsx)(ut.a,{item:!0,children:Object(q.jsx)(jt.a,{elevation:10,style:{padding:"20px"},children:Object(q.jsx)(dt,{id:t.id,title:t.title,entityStatus:t.entityStatus,tasks:n,removeTask:s,changeFilter:j,addTask:r,changeTaskStatus:o,filter:t.filter,removeTodolist:b,changeTaskTitle:d,changeTodolistTitle:O})})},t.id)}))})]})},Ot=n(202),ft=n(199),ht=s.a.forwardRef((function(t,e){return Object(q.jsx)(ft.a,Object(h.a)({elevation:6,ref:e,variant:"filled"},t))})),Tt=function(){var t=M((function(t){return t.app.error})),e=Object(l.b)(),n=function(t,n){"clickaway"!==n&&e(F(null))};return Object(q.jsx)(Ot.a,{open:null!==t,autoHideDuration:7e3,onClose:n,children:Object(q.jsxs)(ht,{onClose:n,severity:"error",children:["\ud83d\ude20 ",t]})})},mt=n(99),gt=n(185),pt=n(184),vt=n(192),xt=n(191),St=function(){var t=M((function(t){return t.auth.isLoggedIn})),e=Object(l.b)(),n=Object(mt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<3&&(e.password="Must be 3 characters or less"):e.password="Required",e},onSubmit:function(t){var a;e((a=t,function(t){t(N("loading")),E(a).then((function(e){0===e.data.resultCode?(t(P(!0)),t(N("succeeded"))):D(e.data,t)})).catch((function(e){L(e.message,t)}))})),n.resetForm()}});return t?Object(q.jsx)(u.a,{to:"/"}):Object(q.jsx)(ut.a,{container:!0,justifyContent:"center",children:Object(q.jsx)(ut.a,{item:!0,children:Object(q.jsx)("form",{onSubmit:n.handleSubmit,children:Object(q.jsxs)(pt.a,{children:[Object(q.jsxs)(gt.a,{children:[Object(q.jsxs)("p",{children:["To log in get registered",Object(q.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",rel:"noreferrer",children:" here"})]}),Object(q.jsx)("p",{children:"or use common test account credentials:"}),Object(q.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(q.jsx)("p",{children:"Password: free"})]}),Object(q.jsxs)(xt.a,{children:[Object(q.jsx)(Z.a,Object(h.a)({label:"Email",margin:"normal"},n.getFieldProps("email"))),n.touched.email&&n.errors.email&&Object(q.jsx)("div",{style:{color:"red"},children:n.errors.email}),Object(q.jsx)(Z.a,Object(h.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password"))),n.touched.password&&n.errors.password&&Object(q.jsx)("div",{style:{color:"red"},children:n.errors.password}),Object(q.jsx)(vt.a,{label:"Remember me",control:Object(q.jsx)($.a,Object(h.a)({checked:n.values.rememberMe},n.getFieldProps("rememberMe")))}),Object(q.jsx)(st.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})},kt=n(145),It=n(194),yt=n(197),Et=n(196),Ct=n(195),At=n(193);var Dt=function(){var t=M((function(t){return t.app.status})),e=M((function(t){return t.app.isInitialized})),n=M((function(t){return t.auth.isLoggedIn})),a=Object(l.b)();return Object(i.useEffect)((function(){a((function(t){t(N("loading")),C().then((function(e){0===e.data.resultCode?(t(P(!0)),t(N("succeeded"))):D(e.data,t)})).catch((function(e){L(e.message,t)})).finally((function(){t({type:"APP/SET-IS-INITIALIZED",isInitialized:!0})}))}))}),[a]),e?Object(q.jsxs)("div",{className:"App",children:[Object(q.jsxs)(It.a,{position:"static",children:[Object(q.jsxs)(Ct.a,{style:{justifyContent:"space-between"},children:[Object(q.jsx)(kt.a,{variant:"h6",children:"To Do List"}),n&&Object(q.jsx)(st.a,{color:"inherit",variant:"outlined",onClick:function(){a((function(t){t(N("loading")),A().then((function(e){0===e.data.resultCode?(t(P(!1)),t(N("succeeded"))):D(e.data,t)})).catch((function(e){L(e.message,t)}))}))},children:"Logout"})]}),"loading"===t&&Object(q.jsx)(Et.a,{color:"secondary"})]}),Object(q.jsx)(yt.a,{fixed:!0,children:Object(q.jsxs)(u.d,{children:[Object(q.jsx)(u.b,{path:"react-todolist",element:Object(q.jsx)(u.a,{to:"/"})}),Object(q.jsx)(u.b,{path:"/",element:Object(q.jsx)(bt,{})}),Object(q.jsx)(u.b,{path:"login",element:Object(q.jsx)(St,{})}),Object(q.jsx)(u.b,{path:"404",element:Object(q.jsx)("h1",{style:{textAlign:"center"},children:"404: PAGE NOT FOUND"})}),Object(q.jsx)(u.b,{path:"*",element:Object(q.jsx)(u.a,{to:"404"})})]})}),Object(q.jsx)(Tt,{})]}):Object(q.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(q.jsx)(At.a,{})})},Lt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,203)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),i(t),s(t)}))};o.a.render(Object(q.jsx)(l.a,{store:G,children:Object(q.jsx)(d.a,{children:Object(q.jsx)(Dt,{})})}),document.getElementById("root")),Lt()}},[[142,1,2]]]);
//# sourceMappingURL=main.525f6896.chunk.js.map