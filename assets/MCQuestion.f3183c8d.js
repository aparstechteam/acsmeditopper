import{_ as y,q as v,x as k,y as L,s as T,r as M,o,c as r,F as _,e as f,a as s,f as l,t as a,b as S,n as m,g as x,p as C,l as H}from"./index.4f737677.js";import{_ as A}from"./loading.f6273bc4.js";const D={data(){return{timing:null,solutionv:!1,retake:!1,questions:[],solution:[],result:[],unknown:!1,loading:!0,eload:!1,minute:0,second:0,end:Date.now()+12e6,show:!1,starttime:Date.now(),ended:null,inttime:109090,immediate:!0,viewDetails:!1,score:null,status:{Correct:0,Wrong:0,Not_Answered:0}}},beforeRouteEnter(d,n,i){var t;if((t=JSON.parse(localStorage.getItem("acsmedtopper")))==null?void 0:t.roll){i();return}i({path:"/login"})},methods:{makeTitle(d){return this.subjectsData[d]},endalert(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink(){this.loading=!0;let d=null;this.ended=new Date("10 August 2025").getTime(),this.timelimit=5*6e4,this.immediate=!1,d=40,this.unknown=!0,fetch(v).then(n=>n.json()).then(n=>{this.questions=n.map(t=>({...t,selected:""}));let i=d;this.inttime=i*6e4,this.end=i*6e4,this.loading=!1,this.showRemaining(this.end+Date.now()),this.autoSubmit();let b=localStorage.getItem("potmedAttempt");b?localStorage.setItem("potmedAttempt",parseInt(b)+1):localStorage.setItem("potmedAttempt",1)})},startRetake(){this.retake=!0,this.showRemaining(Date.now()+this.end)},retakeResult(){let d=this.solution.reduce((n,i)=>(i.correct==i.selected?n+=10:i.selected?n-=2.5:this.status.Not_Answered+=1,n),0);this.$swal({icon:"success",title:"Success",text:`You Scored ${d}`}).then(()=>{this.retake=!1,this.show=!1,this.questions=this.solution,this.viewDetails=!this.viewDetails,this.inttime=this.solution.length,this.score=d,this.solution=this.solution.map(n=>({...n,selected:""})),window.scroll(0,0)})},submitAns(){this.eload=!0;let d=Date.now()-this.starttime,n=0;clearTimeout(this.timing);let{roll:i,name:b,phone:t,college:c,batch:g}=JSON.parse(localStorage.getItem("acsmedtopper")),e=this.questions.map(h=>{let w=[h.a,h.b,h.c,h.d].indexOf(h.selected);return{id:h.id,s:w}}).filter(h=>h.s!=-1),u=localStorage.getItem("potmedAttempt");fetch(k,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify({roll:i,name:b,batch:g,score:n,college:c,duration:d,submission:JSON.stringify(e),attempt:u?parseInt(u):1,phone:t})}).then(()=>{clearTimeout(this.timing),this.$swal({icon:"success",title:"Success",text:"\u09B0\u09C7\u099C\u09BE\u09B2\u09CD\u099F \u099C\u09BE\u09A8\u09A4\u09C7 \u099A\u09CB\u0996 \u09B0\u09BE\u0996\u09CB,  Apar's Student Group (ASG), Rhombus Parallel Science Hub, BioMission Group, Catalyst Group \u099B\u09BE\u09DC\u09BE\u0993 \u0985\u09AA\u09BE\u09B0, \u0985\u09AD\u09BF, \u09B8\u09BE\u0995\u09BF\u09AC, \u09B8\u099E\u09CD\u099C\u09DF, \u09B6\u09C1\u09AD\u09CD\u09B0 \u09AD\u09BE\u0987\u09DF\u09BE\u09A6\u09C7\u09B0 \u0987\u0989\u099F\u09BF\u0989\u09AC \u099A\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2\u09C7\u0964"}).then(()=>{localStorage.setItem("potentialmedr",JSON.stringify({duration:d,attempt:1,roll:i,name:b,college:c})),this.gotoLeaderboard()})})},gotoLeaderboard(){this.$router.replace("/")},autoSubmit(){this.timing=setTimeout(()=>{this.show=!1,this.submitAns()},this.inttime)},showRemaining(d){this.show=!0;const n=setInterval(()=>{const i=d-Date.now();if(i<0){clearInterval(n);return}const b=Math.floor(i/this._days),t=Math.floor(i%this._days/this._hours),c=Math.floor(i%this._hours/this._minutes),g=Math.floor(i%this._minutes/this._seconds);this.second=g<10?"0"+g:g,this.minute=c<10?"0"+c:c,this.hours=t<10?"0"+t:t,this.days=b<10?"0"+b:b},1e3)}},created(){this.getQuestionLink(),window.scrollTo(0,0)},computed:{...L(["user"]),_seconds:()=>1e3,_minutes(){return this._seconds*60},_hours(){return this._minutes*60},_days(){return this._hours*24},currentTime:()=>T.state.currentTime}},p=d=>(C("data-v-43f740d7"),d=d(),H(),d),I={key:0,class:"pb-10"},N=p(()=>s("div",{class:"py-4 text-center space-y-2"},[s("h1",{class:"text-2xl font-bold text-gray-900 uppercase"}," ACS MED TOPPER "),s("h2",{class:"text-2xl font-bold text-gray-700"},"BATCH 23 EXAM"),s("p",{class:"text-center"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ")],-1)),R={key:0,class:"mx-2 md:w-2/3 md:mx-auto"},O=["innerHTML"],j={class:"flex gap-3 my-2"},E={class:"badge badge-success"},Q={class:"badge badge-success"},B={class:"badge badge-success"},J=p(()=>s("span",{class:"badge badge-success"},"1 Marks",-1)),P={class:"mt-3"},G=["innerHTML","onClick"],V=["innerHTML","onClick"],W=["innerHTML","onClick"],F=["innerHTML","onClick"],Y={key:0,class:"my-2 text-center"},z={key:1,class:"mb-10 text-center"},X=["disabled"],K={key:1,class:"mx-2 md:w-2/3 md:mx-auto"},U={class:"flex flex-wrap justify-center"},Z={class:"w-full p-3 md:w-1/2"},$={class:"text-center"},q={class:"text-lg font-semibold text-gray-900 dark:text-white"},ee={class:"text-gray-600 dark:text-white"},te={class:"flex flex-wrap items-center justify-center gap-3 p-3 rounded bg-white"},se={class:"text-gray-900"},oe={class:"text-lg font-bold"},re={class:"text-lg font-bold"},ne={class:"text-lg font-bold"},ie={class:"text-lg font-bold"},de=["innerHTML"],le={class:"mt-3"},ae=["innerHTML"],ce=["innerHTML"],ue=["innerHTML"],he=["innerHTML"],be={key:0,class:"my-2 poppins"},me=["innerHTML"],ge={class:"material-icons"},_e={key:0,class:"my-2 text-center"},pe={key:1,class:"mb-10 text-center"},fe=["disabled"],xe={key:1,class:"white--text fixed__timer"},we={class:"text-white bg-blue-500 border border-white shadow"},ye={key:1,class:"flex items-center justify-center w-full h-screen"},ve=p(()=>s("div",{class:"flex items-center flex-col justify-center -mt-24 space-x-1 text-sm text-gray-700 p-5 rounded-xl border"},[s("img",{src:A,alt:""}),s("div",{class:"text-lg"},"Please wait...")],-1)),ke=[ve];function Le(d,n,i,b,t,c){const g=M("pie-chart");return t.loading?(o(),r("div",ye,ke)):(o(),r("div",{key:0,onContextmenu:e=>!1},[t.questions.length>0?(o(),r("div",I,[N,t.viewDetails?(o(),r("div",K,[s("div",null,[s("div",U,[s("div",Z,[s("div",$,[s("h3",q," You Scored: "+a(t.score),1),s("p",ee," out of "+a(t.questions.length),1)])])])]),s("div",null,[s("div",te,[s("div",null,[S(g,{data:t.status},null,8,["data"])]),s("div",se,[s("p",oe," Total: "+a(t.questions.length),1),s("p",re," Correct: "+a(t.status.Correct),1),s("p",ne," Incorrect: "+a(t.status.Wrong),1),s("p",ie," Not Answered: "+a(t.status.Not_Answered),1)])])]),(o(!0),r(_,null,f(t.questions,(e,u)=>(o(),r("div",{key:u,class:"p-5 mx-auto my-3 text-lg border border-gray-300 rounded-md shadow-lg bg-white dark:bg-black dark:text-white kalpurush"},[s("div",{class:"inline-flex mb-2 text-lg font-semibold",innerHTML:`<span class='mr-2'>${u+1})</span>`+e.question},null,8,de),s("div",le,[e.a?(o(),r("div",{key:0,innerHTML:e.a,class:m(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-black  my-3 p-3 rounded   ${e.a==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-white borderdark:text-white"} ${e.a==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-white borderdark:text-white"}`)},null,10,ae)):l("",!0),e.b?(o(),r("div",{key:1,innerHTML:e.b,class:m(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.b==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-white borderdark:text-white"} ${e.b==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-white borderdark:text-white"}`)},null,10,ce)):l("",!0),e.c?(o(),r("div",{key:2,innerHTML:e.c,class:m(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.c==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-white borderdark:text-white"} ${e.c==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-white borderdark:text-white"}`)},null,10,ue)):l("",!0),e.d?(o(),r("div",{key:3,innerHTML:e.d,class:m(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded   ${e.d==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-white borderdark:text-white"} ${e.d==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-white borderdark:text-white"}`)},null,10,he)):l("",!0)]),e.explain?(o(),r("h2",be,"Explain:")):l("",!0),e.explain?(o(),r("div",{key:1,class:"p-3 my-3 bg-white borderborder border-green-500 rounded dark:bg-gray-600",innerHTML:e.explain},null,8,me)):l("",!0),s("div",{class:m(["flex gap-2 my-2 text-xl font-semibold",{"text-red-500":e.correct!=e.selected,"text-green-500":e.correct==e.selected}])},[s("span",ge,a(e.correct==e.selected?"done":"close"),1),e.selected?(o(),r(_,{key:0},[x(a(e.correct==e.selected?"Correct":"Wrong"),1)],64)):l("",!0),x(" "+a(e.selected?"":"Not answered"),1)],2)]))),128)),t.viewDetails?(o(),r("div",_e,[s("button",{onClick:n[2]||(n[2]=(...e)=>c.gotoLeaderboard&&c.gotoLeaderboard(...e)),class:"btn btn-large btn-primary"}," Leaderboard ")])):l("",!0),t.viewDetails?l("",!0):(o(),r("div",pe,[s("button",{onClick:n[3]||(n[3]=(...e)=>c.submitAns&&c.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},a(t.eload?"Loading...":"Submit"),9,fe)]))])):(o(),r("div",R,[(o(!0),r(_,null,f(t.questions,(e,u)=>(o(),r("div",{key:u,class:m(["p-5 mx-auto my-3 text-lg border border-gray-300 rounded-md shadow-lg bg-white kalpurush",{"stop-events":t.questions[u].selected}])},[s("div",{class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,O),s("div",j,[s("span",E,"Q no. "+a(u+1),1),s("span",Q,a(e.subject),1),s("span",B,"set "+a(e.set),1),J]),s("div",P,[e.a?(o(),r("div",{key:0,innerHTML:e.a,onClick:h=>t.questions[u].selected=e.a,class:m(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500  ":" bg-white border"}`)},null,10,G)):l("",!0),e.b?(o(),r("div",{key:1,innerHTML:e.b,onClick:h=>t.questions[u].selected=e.b,class:m(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500  ":" bg-white border"}`)},null,10,V)):l("",!0),e.c?(o(),r("div",{key:2,innerHTML:e.c,onClick:h=>t.questions[u].selected=e.c,class:m(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500  ":" bg-white border"}`)},null,10,W)):l("",!0),e.d?(o(),r("div",{key:3,innerHTML:e.d,onClick:h=>t.questions[u].selected=e.d,class:m(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500  ":" bg-white border"}`)},null,10,F)):l("",!0)])],2))),128)),t.viewDetails?(o(),r("div",Y,[s("button",{onClick:n[0]||(n[0]=(...e)=>c.gotoLeaderboard&&c.gotoLeaderboard(...e)),class:"btn btn-large btn-primary"}," Leaderboard ")])):l("",!0),t.viewDetails?l("",!0):(o(),r("div",z,[s("button",{onClick:n[1]||(n[1]=(...e)=>c.submitAns&&c.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},a(t.eload?"Loading...":"Submit"),9,X)]))]))])):l("",!0),t.show?(o(),r("div",xe,[s("div",we,a(t.minute)+" : "+a(t.second),1)])):l("",!0)],32))}const Ce=y(D,[["render",Le],["__scopeId","data-v-43f740d7"]]);export{Ce as default};
