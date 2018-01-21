webpackJsonp([1],{"++zr":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","grid-list-sm":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":"",xs12:""}},[a("v-layout",{attrs:{column:""}},[a("v-flex",{attrs:{"d-flex":""}},[a("v-card",{staticClass:"pa-4",attrs:{color:"tile"}},[a("v-avatar",{attrs:{tile:!0,size:"100"}},[a("img",{attrs:{src:s("iQH9")}})]),t._v(" "),a("h1",{attrs:{title:""}},[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Perfect your spoken language skills with EloCute, \n                  a web site for teachers with a companion mobile app for their students.")])],1)],1)],1)],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"","child-flex":""}},[a("v-card",{staticClass:"pa-4",attrs:{color:"primary",tile:""}},[a("h3",{attrs:{"text-xs-center":""}},[t._v("I'm a Teacher")]),t._v(" "),a("h4",{attrs:{"text-xs-center":""}},[t._v("Access your account")]),t._v(" "),a("v-btn",{attrs:{large:"",color:"secondary"},on:{click:t.auth}},[t._v("Login")])],1)],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:""}},[a("v-card",{staticClass:"pa-4",attrs:{color:"accent",tile:""}},[a("h3",{attrs:{"text-xs-center":""}},[t._v("I'm a Student")]),t._v(" "),a("h4",{attrs:{"text-xs-center":""}},[t._v("Download the mobile apps")]),t._v(" "),a("v-btn",{attrs:{color:"secondary",large:""}},[t._v("iOS")]),t._v(" "),a("v-btn",{attrs:{color:"secondary",large:""}},[t._v("Android")])],1)],1)],1)],1)},n=[],r={render:a,staticRenderFns:n};e.a=r},"/tQP":function(t,e,s){t.exports=s.p+"static/img/seal.5d94882.png"},"1mfN":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.classroom?s("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[s("v-flex",[s("h3",[t._v("Add a Student to "+t._s(t.classroom.ClassName))]),t._v(" "),s("p",[t._v("This student is a currently registered member of Elocute. You can search for his or her email\n                    address, and if his or her record exists, it will be added to your classroom.")])]),t._v(" "),t.message?s("v-flex",{attrs:{xs12:""}},[s("v-alert",{attrs:{color:"error",icon:"warning",value:"true"}},[t._v("\n                     "+t._s(t.message)+"\n                ")])],1):t._e(),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-card",{staticClass:"pa-4",attrs:{tile:"",color:"tile"}},[s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-layout",{attrs:{row:""}},[s("v-text-field",{attrs:{label:"Student Email",rules:t.studentEmailRules,required:""},model:{value:t.studentEmail,callback:function(e){t.studentEmail=e},expression:"studentEmail"}}),t._v(" "),s("v-btn",{staticClass:"secondary",attrs:{disabled:!t.valid},on:{click:t.search}},[t._v("\n                                Search for a Student\n                            ")])],1)],1)],1)],1),t._v(" "),t.student?s("v-flex",{attrs:{xs12:""}},[s("v-card",{staticClass:"pa-3",attrs:{color:"primary"}},[s("v-layout",{attrs:{row:""}},[s("h3",[t._v(t._s(t.student.DisplayName))]),t._v(" "),s("v-btn",{staticClass:"secondary",on:{click:t.add}},[t._v("\n                            Add to Class\n                        ")])],1)],1)],1):t._e(),t._v(" "),t.students.length?s("v-flex",{attrs:{xs12:""}},[s("h3",[t._v("Enrolled Students")]),t._v(" "),s("v-layout",{attrs:{row:"",wrap:"",color:"tile"}},t._l(t.students,function(e){return s("v-flex",{key:e.id,attrs:{xs4:""}},[s("v-card",{staticClass:"pa-2 info-card",attrs:{color:"accent"}},[s("router-link",{staticClass:"white-link",attrs:{to:{name:"StudentHome",params:{id:e.id}}}},[s("h3",{staticClass:"white-link"},[t._v(t._s(e.StudentName))])])],1)],1)}))],1):t._e(),t._v(" "),s("hr",{staticClass:"ma-4"}),t._v(" "),t.info?s("v-flex",{attrs:{xs12:""}},[s("v-alert",{attrs:{color:"info",icon:"info",value:"true"}},[t._v("\n                     "+t._s(t.info)+"\n                ")])],1):t._e(),t._v(" "),s("h3",{staticClass:"pa-2"},[t._v("Add an Assignment")]),t._v(" "),s("v-card",{staticClass:"pa-4",attrs:{tile:"",color:"tile"}},[s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-text-field",{attrs:{label:"Assignment Title",rules:t.assignmentTitleRules,required:""},model:{value:t.assignmentTitle,callback:function(e){t.assignmentTitle=e},expression:"assignmentTitle"}}),t._v(" "),s("v-text-field",{attrs:{label:"Text",rules:t.assignmentTextRules,"multi-line":"",required:""},model:{value:t.assignmentText,callback:function(e){t.assignmentText=e},expression:"assignmentText"}}),t._v(" "),s("v-btn",{staticClass:"secondary",attrs:{disabled:!t.valid},on:{click:t.create}},[t._v("\n                            Create Assignment\n                        ")])],1)],1),t._v(" "),t.assignments.length?s("v-flex",{attrs:{xs12:""}},[s("h3",{staticClass:"pa-2"},[t._v("Assignments")]),t._v(" "),s("v-layout",{staticClass:"pa-4",attrs:{row:"",wrap:"",color:"tile"}},t._l(t.assignments,function(e){return s("v-flex",{key:e.id,attrs:{xs4:""}},[s("v-card",{staticClass:"pa-2 info-card",attrs:{color:"accent"}},[s("router-link",{staticClass:"white-link",attrs:{to:{name:"AssignmentHome",params:{id:e.id,classId:t.activeClassroom}}}},[s("h3",{staticClass:"white-link"},[t._v(t._s(e.Title))])])],1)],1)}))],1):t._e()],1):t._e()},n=[],r={render:a,staticRenderFns:n};e.a=r},"3QT2":function(t,e,s){"use strict";var a=s("Dd8w"),n=s.n(a),r=s("Sazm"),i=s.n(r),o=s("NYxO");e.a={computed:n()({},Object(o.d)(["user","classrooms"])),data:function(){return{valid:!0,item:{},classroomName:"",classroomNameRules:[function(t){return!!t||"Classroom name is required"},function(t){return t.length<=20||"Name must be fewer than 20 characters"}]}},created:function(){this.fetchClassrooms().then(this.updateUser())},methods:n()({},Object(o.b)(["fetchClassrooms"]),{logOut:function(){var t=this;i.a.auth().signOut().then(function(){t.$router.replace("Auth")})},updateUser:function(){this.$store.dispatch("updateUser",{Email:this.user.email,DisplayName:this.user.displayName,id:this.user.uid})},submit:function(){var t=this;this.$store.dispatch("createClassroom",{ClassName:this.classroomName,TeacherId:this.user.uid}).then(function(){t.classroomName=""})}})}},"5J7v":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[s("v-layout",{attrs:{column:""}},[s("v-flex",{attrs:{xs1:"","offset-xs11":""}},[s("v-btn",{attrs:{color:"secondary"},on:{click:t.logOut}},[t._v("Logout")])],1),t._v(" "),s("h1",{attrs:{"text-xs-center":""}},[t._v("Welcome "+t._s(t.user.displayName))]),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-card",{staticClass:"pa-4",attrs:{tile:"",color:"tile"}},[s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-layout",{attrs:{row:""}},[s("v-text-field",{attrs:{label:"Classroom Name",rules:t.classroomNameRules,counter:20,required:""},model:{value:t.classroomName,callback:function(e){t.classroomName=e},expression:"classroomName"}}),t._v(" "),s("v-btn",{staticClass:"secondary",attrs:{disabled:!t.valid},on:{click:t.submit}},[t._v("\n                                create a classroom\n                            ")])],1)],1)],1)],1)],1),t._v(" "),t.classrooms.length?s("h3",{staticClass:"pa-4"},[t._v("My Classrooms")]):t._e(),t._v(" "),s("v-layout",{attrs:{row:"",wrap:"",color:"tile"}},t._l(t.classrooms,function(e){return s("v-flex",{key:e.id,attrs:{xs4:""}},[s("v-card",{staticClass:"pa-2 info-card",attrs:{color:"accent"}},[s("router-link",{staticClass:"white-link",attrs:{to:{name:"ClassroomHome",params:{id:e.id}}}},[s("h3",{staticClass:"white-link"},[t._v(t._s(e.ClassName))])])],1)],1)}))],1)},n=[],r={render:a,staticRenderFns:n};e.a=r},"88M1":function(t,e,s){"use strict";var a=s("VQU+"),n=s("ODtU"),r=s("VU/8"),i=r(a.a,n.a,!1,null,null,null);e.a=i.exports},"8TZk":function(t,e,s){"use strict";var a=s("JvXP"),n=s("DHJI"),r=s("VU/8"),i=r(a.a,n.a,!1,null,null,null);e.a=i.exports},DHJI:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"pa-4",attrs:{color:"tile",tile:""}},[s("h1",[t._v("Student Home")]),t._v(" "),s("p",{attrs:{align:"left"}},[t._v("Here, you'll find a list of grades per student.")])])},n=[],r={render:a,staticRenderFns:n};e.a=r},EmOQ:function(t,e){},Fs8J:function(t,e,s){"use strict";e.a={name:"EloCute",data:function(){return{msg:"Welcome to EloCute"}},methods:{auth:function(){this.$router.push("/auth")}}}},"J+R/":function(t,e,s){"use strict";var a=s("ngLG"),n=s("vRJv"),r=s("VU/8"),i=r(a.a,n.a,!1,null,null,null);e.a=i.exports},JvXP:function(t,e,s){"use strict";e.a={name:"StudentHome"}},K956:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("v-navigation-drawer",{attrs:{"enable-resize-watcher":"",left:"",absolute:"",temporary:""},model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[a("v-list",t._l(t.menuItems,function(e){return a("v-list-tile",{key:e.title,attrs:{router:"",to:e.link}},[a("v-list-tile-action",[a("v-icon",{attrs:{medium:""}},[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",{attrs:{color:"accent"}},[t._v(t._s(e.title))])],1)}))],1),t._v(" "),a("v-toolbar",{attrs:{color:"primary"}},[a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.sideNav=!t.sideNav}}}),t._v(" "),a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:s("/tQP"),height:"50px"}})]),t._v(" "),a("v-toolbar-title",[t._v("EloCute: For Language Teachers and Students")])],1),t._v(" "),a("v-container",{staticClass:"pb-5",attrs:{"grid-list-md":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("router-view")],1)],1)],1),t._v(" "),a("v-footer",{staticClass:"hidden-sm-and-down",attrs:{fixed:"",color:"accent"}},[a("v-container",[a("v-spacer"),t._v(" "),a("h3",[t._v("© Ladeez First Media "+t._s((new Date).getFullYear()))])],1)],1)],1)},n=[],r={render:a,staticRenderFns:n};e.a=r},KWv7:function(t,e,s){"use strict";var a=s("7+uW"),n=s("/ocq"),r=s("lO7g"),i=s("c27y"),o=s("J+R/"),c=s("mTrH"),l=s("MoTM"),u=s("88M1"),m=s("8TZk"),d=s("wtEF"),v=s("Sazm");s.n(v);a.a.use(n.a);var f=new n.a({mode:"history",routes:[{path:"/",name:"landing",component:r.a},{path:"/about",name:"about",component:i.a},{path:"/auth",name:"login",component:o.a},{path:"/home",name:"home",component:c.a,meta:{requiresAuth:!0}},{path:"/classroomhome/:id",name:"ClassroomHome",component:l.a,meta:{requiresAuth:!0}},{path:"/assignmenthome/:classId/:id",name:"AssignmentHome",component:u.a,meta:{requiresAuth:!0}},{path:"/studenthome/:id",name:"StudentHome",component:m.a,meta:{requiresAuth:!0}}]});f.beforeEach(function(t,e,s){t.matched.some(function(t){return t.meta.requiresAuth})&&!d.a.state.user?s("auth"):s()}),e.a=f},M93x:function(t,e,s){"use strict";function a(t){s("eQzB")}var n=s("xJD8"),r=s("K956"),i=s("VU/8"),o=a,c=i(n.a,r.a,!1,o,null,null);e.a=c.exports},MoTM:function(t,e,s){"use strict";var a=s("qneW"),n=s("1mfN"),r=s("VU/8"),i=r(a.a,n.a,!1,null,null,null);e.a=i.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("M93x"),r=s("KWv7"),i=s("3EgV"),o=s.n(i),c=s("wtEF"),l=s("Sazm"),u=s.n(l),m=s("2ahc"),d=(s.n(m),s("EmOQ")),v=(s.n(d),{apiKey:"AIzaSyAUfOahJXp1Q5Z0JMzUDdRoqCRAaU6fxao",authDomain:"elocuteme.firebaseapp.com",databaseURL:"https://elocuteme.firebaseio.com",projectId:"elocuteme",storageBucket:"elocuteme.appspot.com",messagingSenderId:"262790300546"});a.a.config.productionTip=!1,a.a.use(o.a,{theme:{primary:"#F5D1E9",accent:"#A5DAD2",secondary:"#66A59A",tile:"#F3F3F3"}}),u.a.initializeApp(v),u.a.auth().onAuthStateChanged(function(t){c.a.commit("setUser",t),new a.a({el:"#app",store:c.a,router:r.a,render:function(t){return t(n.a)}})})},ODtU:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.assignment?s("v-card",{staticClass:"pa-4",attrs:{color:"tile",tile:""}},[s("h1",[t._v(t._s(t.assignment.Title))]),t._v(" "),s("p",{attrs:{align:"left"}},[s("pre",[t._v(t._s(t.assignment.Text))])])]):t._e()},n=[],r={render:a,staticRenderFns:n};e.a=r},"VQU+":function(t,e,s){"use strict";var a=s("Xxa5"),n=s.n(a),r=s("exGp"),i=s.n(r),o=s("Dd8w"),c=s.n(o),l=s("NYxO");e.a={computed:c()({},Object(l.d)(["user","activeClassroom"]),Object(l.c)(["assignment"])),watch:{"$route.params.id":{handler:function(t){this.$store.commit("setActiveAssignment",t)},immediate:!0},"$route.params.classId":{handler:function(t){this.$store.commit("setActiveClassroom",t)},immediate:!0}},created:function(){this.init()},methods:{init:function(){var t=this;return i()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("fetchAssignments",t.activeClassroom);case 2:case"end":return e.stop()}},e,t)}))()}}}},Zs8U:function(t,e,s){"use strict";e.a={name:"About"}},c27y:function(t,e,s){"use strict";var a=s("Zs8U"),n=s("ohsL"),r=s("VU/8"),i=r(a.a,n.a,!1,null,null,null);e.a=i.exports},eQzB:function(t,e){},iQH9:function(t,e,s){t.exports=s.p+"static/img/logo.df7199a.png"},lO7g:function(t,e,s){"use strict";var a=s("Fs8J"),n=s("++zr"),r=s("VU/8"),i=r(a.a,n.a,!1,null,null,null);e.a=i.exports},mTrH:function(t,e,s){"use strict";var a=s("3QT2"),n=s("5J7v"),r=s("VU/8"),i=r(a.a,n.a,!1,null,null,null);e.a=i.exports},ngLG:function(t,e,s){"use strict";var a=s("Sazm"),n=s.n(a),r=s("2ahc"),i=s.n(r);e.a={name:"auth",mounted:function(){var t={signInSuccessUrl:"home",signInOptions:[n.a.auth.EmailAuthProvider.PROVIDER_ID],credentialHelper:i.a.auth.CredentialHelper.NONE};if(i.a.auth.AuthUI.getInstance()){i.a.auth.AuthUI.getInstance().start("#firebaseui-auth-container",t)}else{new i.a.auth.AuthUI(n.a.auth()).start("#firebaseui-auth-container",t)}}}},ohsL:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"pa-4",attrs:{color:"tile",tile:""}},[a("img",{attrs:{src:s("/tQP")}}),t._v(" "),a("h1",[t._v("About EloCute")]),t._v(" "),a("p",{attrs:{align:"left"}},[t._v("EloCute is a way for language, linguistics, and speech teachers to help their students perfect their spoken mastery of a language. A teacher can use this web site \n    to create a virtual 'classroom' with students associated to it. The students are invited to login to their classroom in the EloCute companion mobile app for iOS and Android,\n    and can be given assignments to complete. Students are given a written text that their teacher types into the EloCute web site, and they complete their assignment by speaking \n    the text into the mobile app. A grade is calculated automatically, based on the accuracy of the student input, by means of a speech-to-text utility in the app. The teacher is then\n    sent the score on completion of the assignment.")])])},n=[],r={render:a,staticRenderFns:n};e.a=r},qneW:function(t,e,s){"use strict";var a=s("Xxa5"),n=s.n(a),r=s("exGp"),i=s.n(r),o=s("Dd8w"),c=s.n(o),l=s("NYxO");e.a={computed:c()({},Object(l.d)(["user","student","students","classrooms","activeClassroom","assignments","message","info"]),Object(l.c)(["classroom","assignment"])),data:function(){return{valid:!0,item:{},studentEmail:"",studentEmailRules:[function(t){return!!t||"Student email address is required"}],assignmentTitle:"",assignmentTitleRules:[function(t){return!!t||"Assignment Title is required"}],assignmentText:"",assignmentTextRules:[function(t){return!!t||"Assignment Text is required"}]}},watch:{"$route.params.id":{handler:function(t){this.$store.commit("setActiveClassroom",t)},immediate:!0}},created:function(){this.init()},methods:{init:function(){var t=this;return i()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("fetchClassrooms");case 2:return e.next=4,t.$store.dispatch("fetchStudents",t.activeClassroom);case 4:return e.next=6,t.$store.dispatch("fetchAssignments",t.activeClassroom);case 6:case"end":return e.stop()}},e,t)}))()},search:function(){this.$store.dispatch("findUser",{Email:this.studentEmail})},add:function(){var t=this;return i()(n.a.mark(function e(){var s,a,r,i;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.classroom.id,a=t.classroom.ClassName,r=t.student.id,i=t.student.DisplayName,e.next=6,t.$store.dispatch("associateClassToStudent",{studentId:r,classId:s,className:a});case 6:return e.next=8,t.$store.dispatch("associateStudentToClass",{studentId:r,classId:s,studentName:i});case 8:case"end":return e.stop()}},e,t)}))()},create:function(){this.$store.dispatch("createAssignment",{ClassId:this.activeClassroom,Title:this.assignmentTitle,Text:this.assignmentText}).then(this.$store.commit("setInfo","Assignment added!"))}}}},vRJv:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"firebaseui-auth-container"}})},n=[],r={render:a,staticRenderFns:n};e.a=r},wtEF:function(t,e,s){"use strict";s.d(e,"a",function(){return l});var a=s("fZjL"),n=s.n(a),r=s("7+uW"),i=s("NYxO"),o=s("Sazm"),c=s.n(o);r.a.use(i.a);var l=new i.a.Store({state:{user:null,message:null,info:null,student:null,students:[],classrooms:[],assignments:[],activeClassroom:null,activeAssignment:null},getters:{classroom:function(t){return t.classrooms.find(function(e){return e.id===t.activeClassroom})},assignment:function(t){return t.assignments.find(function(e){return e.id===t.activeAssignment})}},mutations:{setUser:function(t,e){t.user=e},setActiveClassroom:function(t,e){t.activeClassroom=e},setActiveAssignment:function(t,e){t.activeAssignment=e},setStudent:function(t,e){t.message="",t.student=e},setClassrooms:function(t,e){t.classrooms=e},setAssignments:function(t,e){t.assignments=e},setStudents:function(t,e){t.students=e},clearStudent:function(t){t.student=null},setMessage:function(t,e){t.message=e},setInfo:function(t,e){t.info=e,setTimeout(function(){t.info=""},2e3)}},actions:{fetchClassrooms:function(t){var e=t.state,s=t.commit;c.a.database().ref("Classrooms").orderByChild("TeacherId").equalTo(e.user.uid).once("value",function(t){var e=t.val(),a=n()(e||{}).map(function(t){return{id:t,ClassName:e[t].ClassName}});s("setClassrooms",a)})},fetchStudents:function(t,e){var s=t.commit;c.a.database().ref("Classrooms/"+e+"/Students").on("value",function(t){var e=t.val(),a=n()(e||{}).map(function(t){return{id:t,StudentName:e[t].DisplayName}});s("setStudents",a)})},fetchAssignments:function(t,e){var s=t.commit;c.a.database().ref("Assignments").orderByChild("ClassId").equalTo(e).once("value",function(t){var e=t.val(),a=n()(e||{}).map(function(t){return{id:t,Title:e[t].Title,Text:e[t].Text}});s("setAssignments",a)})},createClassroom:function(t,e){var s=t.dispatch;return c.a.database().ref("Classrooms").push(e).then(function(t){s("fetchClassrooms")})},createAssignment:function(t,e){var s=t.dispatch;return c.a.database().ref("Assignments").push(e).then(function(t){s("fetchAssignments",e.ClassId)})},findUser:function(t,e){var s=t.commit;return c.a.database().ref("Users").orderByChild("Email").equalTo(e.Email).once("value",function(t){if(t.val()){var e=t.val(),a=n()(e||{}).map(function(t){return{id:t,DisplayName:e[t].DisplayName,Email:e[t].Email}});s("setStudent",a[0])}else s("setMessage","Sorry, we couldn't find this student")})},updateUser:function(t,e){var s=t.dispatch;return c.a.database().ref("Users/"+e.id).update(e).then(function(t){s("fetchStudents")})},associateClassToStudent:function(t,e){return c.a.database().ref("Users/"+e.studentId+"/Classes/"+e.classId).update({ClassName:e.className})},associateStudentToClass:function(t,e){var s=t.commit,a=t.dispatch;return c.a.database().ref("Classrooms/"+e.classId+"/Students/"+e.studentId).update({DisplayName:e.studentName}).then(s("clearStudent")).then(a("fetchStudents",e.classId))},addAssignmentToClass:function(t,e){return c.a.database().ref("Classrooms/"+e.classId+"/Assignments").update({AssignmentName:e.assignmentName,AssignmentContent:e.assignmentContent})}}})},xJD8:function(t,e,s){"use strict";e.a={name:"app",data:function(){return{sideNav:!1,menuItems:[{icon:"home",title:"Home",link:"/home"},{icon:"business",title:"About",link:"/about"},{icon:"email",title:"Contact Us",link:"/contact"}]}},methods:{},created:function(){}}}},["NHnr"]);
//# sourceMappingURL=app.cb1ddbd9818f2e7e52f0.js.map