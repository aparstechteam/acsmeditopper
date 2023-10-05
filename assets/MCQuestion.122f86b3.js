import{_ as w,q as v,x as k,y as L,s as T,r as M,o,c as r,F as _,e as x,a as s,f as a,t as c,b as S,n as m,g as f,p as C,l as H}from"./index.0be91968.js";import{_ as A}from"./loading.f6273bc4.js";const D={data(){return{timing:null,solutionv:!1,retake:!1,questions:[],solution:[],result:[],unknown:!1,loading:!0,eload:!1,minute:0,second:0,end:Date.now()+12e6,show:!1,starttime:Date.now(),ended:null,inttime:109090,immediate:!0,viewDetails:!1,score:null,status:{Correct:0,Wrong:0,Not_Answered:0}}},beforeRouteEnter(l,n,i){var t;if((t=JSON.parse(localStorage.getItem("acsmedtopper")))==null?void 0:t.roll){i();return}i({path:"/login"})},methods:{makeTitle(l){return this.subjectsData[l]},endalert(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink(){this.loading=!0;let l=null;this.ended=new Date("10 August 2025").getTime(),this.timelimit=5*6e4,this.immediate=!1,l=40,this.unknown=!0,fetch(v).then(n=>n.json()).then(n=>{this.questions=n.map(d=>({...d,selected:""}));let i=["Biology","Physics","Chemistry","English","GK"];this.questions.sort((d,g)=>i.indexOf(d.subject)-i.indexOf(g.subject));let b=l;this.inttime=b*6e4,this.end=b*6e4,this.loading=!1,this.showRemaining(this.end+Date.now()),this.autoSubmit();let t=localStorage.getItem("potmedAttempt");t?localStorage.setItem("potmedAttempt",parseInt(t)+1):localStorage.setItem("potmedAttempt",1)})},startRetake(){this.retake=!0,this.showRemaining(Date.now()+this.end)},retakeResult(){let l=this.solution.reduce((n,i)=>(i.correct==i.selected?n+=10:i.selected?n-=2.5:this.status.Not_Answered+=1,n),0);this.$swal({icon:"success",title:"Success",text:`You Scored ${l}`}).then(()=>{this.retake=!1,this.show=!1,this.questions=this.solution,this.viewDetails=!this.viewDetails,this.inttime=this.solution.length,this.score=l,this.solution=this.solution.map(n=>({...n,selected:""})),window.scroll(0,0)})},submitAns(){this.eload=!0;let l=Date.now()-this.starttime,n=0;clearTimeout(this.timing);let{roll:i,name:b,phone:t,college:d,batch:g}=JSON.parse(localStorage.getItem("acsmedtopper")),e=this.questions.map(h=>{let y=[h.a,h.b,h.c,h.d].indexOf(h.selected);return{id:h.id,s:y}}).filter(h=>h.s!=-1),u=localStorage.getItem("potmedAttempt");fetch(k,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify({roll:i,name:b,batch:g,score:n,college:d,duration:l,submission:JSON.stringify(e),attempt:u?parseInt(u):1,phone:t})}).then(()=>{clearTimeout(this.timing),this.$swal({icon:"success",title:"Success",text:"\u09B0\u09C7\u099C\u09BE\u09B2\u09CD\u099F \u099C\u09BE\u09A8\u09A4\u09C7 \u099A\u09CB\u0996 \u09B0\u09BE\u0996\u09CB,  Apar's Student Group (ASG), Rhombus Parallel Science Hub, BioMission Group, Catalyst Group \u099B\u09BE\u09DC\u09BE\u0993 \u0985\u09AA\u09BE\u09B0, \u0985\u09AD\u09BF, \u09B8\u09BE\u0995\u09BF\u09AC, \u09B8\u099E\u09CD\u099C\u09DF, \u09B6\u09C1\u09AD\u09CD\u09B0 \u09AD\u09BE\u0987\u09DF\u09BE\u09A6\u09C7\u09B0 \u0987\u0989\u099F\u09BF\u0989\u09AC \u099A\u09CD\u09AF\u09BE\u09A8\u09C7\u09B2\u09C7\u0964"}).then(()=>{localStorage.setItem("potentialmedr",JSON.stringify({duration:l,attempt:1,roll:i,name:b,college:d})),this.gotoLeaderboard()})})},gotoLeaderboard(){this.$router.replace("/")},autoSubmit(){this.timing=setTimeout(()=>{this.show=!1,this.submitAns()},this.inttime)},showRemaining(l){this.show=!0;const n=setInterval(()=>{const i=l-Date.now();if(i<0){clearInterval(n);return}const b=Math.floor(i/this._days),t=Math.floor(i%this._days/this._hours),d=Math.floor(i%this._hours/this._minutes),g=Math.floor(i%this._minutes/this._seconds);this.second=g<10?"0"+g:g,this.minute=d<10?"0"+d:d,this.hours=t<10?"0"+t:t,this.days=b<10?"0"+b:b},1e3)}},created(){this.getQuestionLink(),window.scrollTo(0,0)},computed:{...L(["user"]),_seconds:()=>1e3,_minutes(){return this._seconds*60},_hours(){return this._minutes*60},_days(){return this._hours*24},currentTime:()=>T.state.currentTime}},p=l=>(C("data-v-269e5ac1"),l=l(),H(),l),I={key:0,class:"pb-10"},N=p(()=>s("div",{class:"py-4 text-center space-y-2"},[s("h1",{class:"text-2xl font-bold text-gray-900 uppercase"}," ACS MEDI TOPPER "),s("h2",{class:"text-2xl font-bold text-gray-700"},"BATCH 23 EXAM"),s("p",{class:"text-center"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ")],-1)),O={key:0,class:"mx-2 md:w-2/3 md:mx-auto"},j=["innerHTML"],R={class:"flex gap-3 my-2"},E={class:"badge badge-success"},B={class:"badge badge-success"},P=p(()=>s("span",{class:"badge badge-success"},"1 Marks",-1)),Q={class:"mt-3"},G=["innerHTML","onClick"],J=["innerHTML","onClick"],V=["innerHTML","onClick"],W=["innerHTML","onClick"],F={key:0,class:"my-2 text-center"},Y={key:1,class:"mb-10 text-center"},z=["disabled"],K={key:1,class:"mx-2 md:w-2/3 md:mx-auto"},X={class:"flex flex-wrap justify-center"},U={class:"w-full p-3 md:w-1/2"},Z={class:"text-center"},$={class:"text-lg font-semibold text-gray-900 dark:text-white"},q={class:"text-gray-600 dark:text-white"},ee={class:"flex flex-wrap items-center justify-center gap-3 p-3 rounded bg-white"},te={class:"text-gray-900"},se={class:"text-lg font-bold"},oe={class:"text-lg font-bold"},re={class:"text-lg font-bold"},ne={class:"text-lg font-bold"},ie=["innerHTML"],de={class:"mt-3"},le=["innerHTML"],ae=["innerHTML"],ce=["innerHTML"],ue=["innerHTML"],he={key:0,class:"my-2 poppins"},be=["innerHTML"],me={class:"material-icons"},ge={key:0,class:"my-2 text-center"},_e={key:1,class:"mb-10 text-center"},pe=["disabled"],xe={key:1,class:"white--text fixed__timer"},fe={class:"text-white bg-blue-500 border border-white shadow"},ye={key:1,class:"flex items-center justify-center w-full h-screen"},we=p(()=>s("div",{class:"flex items-center flex-col justify-center -mt-24 space-x-1 text-sm text-gray-700 p-5 rounded-xl border"},[s("img",{src:A,alt:""}),s("div",{class:"text-lg"},"Please wait...")],-1)),ve=[we];function ke(l,n,i,b,t,d){const g=M("pie-chart");return t.loading?(o(),r("div",ye,ve)):(o(),r("div",{key:0,onContextmenu:e=>!1},[t.questions.length>0?(o(),r("div",I,[N,t.viewDetails?(o(),r("div",K,[s("div",null,[s("div",X,[s("div",U,[s("div",Z,[s("h3",$," You Scored: "+c(t.score),1),s("p",q," out of "+c(t.questions.length),1)])])])]),s("div",null,[s("div",ee,[s("div",null,[S(g,{data:t.status},null,8,["data"])]),s("div",te,[s("p",se," Total: "+c(t.questions.length),1),s("p",oe," Correct: "+c(t.status.Correct),1),s("p",re," Incorrect: "+c(t.status.Wrong),1),s("p",ne," Not Answered: "+c(t.status.Not_Answered),1)])])]),(o(!0),r(_,null,x(t.questions,(e,u)=>(o(),r("div",{key:u,class:"p-5 mx-auto my-3 text-lg border border-gray-300 rounded-md shadow-lg bg-white dark:bg-black dark:text-white kalpurush"},[s("div",{class:"inline-flex mb-2 text-lg font-semibold",innerHTML:`<span class='mr-2'>${u+1})</span>`+e.question},null,8,ie),s("div",de,[e.a?(o(),r("div",{key:0,innerHTML:e.a,class:m(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold text-black  my-3 p-3 rounded   ${e.a==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-white borderdark:text-white"} ${e.a==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-white borderdark:text-white"}`)},null,10,le)):a("",!0),e.b?(o(),r("div",{key:1,innerHTML:e.b,class:m(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.b==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-white borderdark:text-white"} ${e.b==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-white borderdark:text-white"}`)},null,10,ae)):a("",!0),e.c?(o(),r("div",{key:2,innerHTML:e.c,class:m(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded  ${e.c==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-white borderdark:text-white"} ${e.c==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-white borderdark:text-white"}`)},null,10,ce)):a("",!0),e.d?(o(),r("div",{key:3,innerHTML:e.d,class:m(`cursor-pointer transform hover:scale-105 transition duration-150 hover:font-semibold  my-3 p-3 rounded   ${e.d==e.selected&&e.selected!=e.correct?"border-2 border-red-500 bg-red-300":"dark:bg-gray-600 bg-white borderdark:text-white"} ${e.d==e.correct?"border-2 border-green-500 bg-green-300":"dark:bg-gray-600 bg-white borderdark:text-white"}`)},null,10,ue)):a("",!0)]),e.explain?(o(),r("h2",he,"Explain:")):a("",!0),e.explain?(o(),r("div",{key:1,class:"p-3 my-3 bg-white borderborder border-green-500 rounded dark:bg-gray-600",innerHTML:e.explain},null,8,be)):a("",!0),s("div",{class:m(["flex gap-2 my-2 text-xl font-semibold",{"text-red-500":e.correct!=e.selected,"text-green-500":e.correct==e.selected}])},[s("span",me,c(e.correct==e.selected?"done":"close"),1),e.selected?(o(),r(_,{key:0},[f(c(e.correct==e.selected?"Correct":"Wrong"),1)],64)):a("",!0),f(" "+c(e.selected?"":"Not answered"),1)],2)]))),128)),t.viewDetails?(o(),r("div",ge,[s("button",{onClick:n[2]||(n[2]=(...e)=>d.gotoLeaderboard&&d.gotoLeaderboard(...e)),class:"btn btn-large btn-primary"}," Leaderboard ")])):a("",!0),t.viewDetails?a("",!0):(o(),r("div",_e,[s("button",{onClick:n[3]||(n[3]=(...e)=>d.submitAns&&d.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},c(t.eload?"Loading...":"Submit"),9,pe)]))])):(o(),r("div",O,[(o(!0),r(_,null,x(t.questions,(e,u)=>(o(),r("div",{key:u,class:m(["p-5 mx-auto my-3 text-lg border border-gray-300 rounded-md shadow-lg bg-white kalpurush",{"stop-events":t.questions[u].selected}])},[s("div",{class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,j),s("div",R,[s("span",E,"Q no. "+c(u+1),1),s("span",B,c(e.subject),1),P]),s("div",Q,[e.a?(o(),r("div",{key:0,innerHTML:e.a,onClick:h=>t.questions[u].selected=e.a,class:m(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500  ":" bg-white border"}`)},null,10,G)):a("",!0),e.b?(o(),r("div",{key:1,innerHTML:e.b,onClick:h=>t.questions[u].selected=e.b,class:m(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500  ":" bg-white border"}`)},null,10,J)):a("",!0),e.c?(o(),r("div",{key:2,innerHTML:e.c,onClick:h=>t.questions[u].selected=e.c,class:m(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500  ":" bg-white border"}`)},null,10,V)):a("",!0),e.d?(o(),r("div",{key:3,innerHTML:e.d,onClick:h=>t.questions[u].selected=e.d,class:m(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500  ":" bg-white border"}`)},null,10,W)):a("",!0)])],2))),128)),t.viewDetails?(o(),r("div",F,[s("button",{onClick:n[0]||(n[0]=(...e)=>d.gotoLeaderboard&&d.gotoLeaderboard(...e)),class:"btn btn-large btn-primary"}," Leaderboard ")])):a("",!0),t.viewDetails?a("",!0):(o(),r("div",Y,[s("button",{onClick:n[1]||(n[1]=(...e)=>d.submitAns&&d.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},c(t.eload?"Loading...":"Submit"),9,z)]))]))])):a("",!0),t.show?(o(),r("div",xe,[s("div",fe,c(t.minute)+" : "+c(t.second),1)])):a("",!0)],32))}const Se=w(D,[["render",ke],["__scopeId","data-v-269e5ac1"]]);export{Se as default};
