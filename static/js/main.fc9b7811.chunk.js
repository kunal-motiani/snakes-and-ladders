(this["webpackJsonpsnakes-and-ladders"]=this["webpackJsonpsnakes-and-ladders"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(2),i=a.n(l),d=(a(9),a(10),a(3)),o=function(e){var t=e.gridSize,a=Object(r.useState)([]),l=Object(d.a)(a,2),i=l[0],o=l[1];return Object(r.useEffect)((function(){for(var e=[],a=["yellow","white","red","blue","green","yellow","white","red","blue","green"],r=1,n="red",l=t;l>0;l--)if(l%2===0)for(var i=1;i<=t;i++,++r)n=a[i-1],e.push({x:l,y:i,number:r,bgColor:n});else for(var d=t;d>0;d--,++r)n=a[t-d],e.push({x:l,y:d,number:r,bgColor:n});o(e)}),[t]),n.a.createElement("div",{className:"game-board",style:{gridTemplate:"repeat(".concat(t,", 1fr) /repeat(").concat(t,", 1fr)")}},i.map((function(e,t){return n.a.createElement("div",{style:{gridRow:e.x,gridColumn:e.y,background:e.bgColor},key:t,className:"game-square"},e.number)})),n.a.createElement("div",{style:{gridRow:10,gridColumn:1,transition:"all 1s"},className:"player-avatar"},n.a.createElement("img",{alt:"Not found",className:"pawn",src:"./pawns/yellow-pawn.png"})),n.a.createElement("div",{style:{gridRow:10,gridColumn:1,transition:"all 1s"},className:"player-avatar"},n.a.createElement("img",{alt:"Not found",className:"pawn",src:"./pawns/blue-pawn.png"})),n.a.createElement("img",{id:"firstSnake",alt:"Not found",style:{width:"100%",height:"100%",opacity:"1",gridRowStart:1,gridColumnStart:3,gridRowEnd:10,gridColumnEnd:10},src:"./images/snake-3.png"}),n.a.createElement("div",{style:{gridRowStart:7,gridColumnStart:4,gridRowEnd:3,gridColumnEnd:7}},n.a.createElement("img",{alt:"Not found",style:{width:"100%",height:"100%",transform:"rotate(90deg)"},src:"./images/snake-3.png"})),n.a.createElement("div",{style:{gridRowStart:9,gridColumnStart:4,gridRowEnd:11,gridColumnEnd:4}},n.a.createElement("img",{alt:"Not found",style:{width:"100%",height:"100%",transform:"rotate(90deg)"},src:"./images/snake-3.png"})),n.a.createElement("div",{style:{gridRowStart:4,gridColumnStart:2,gridRowEnd:10,gridColumnEnd:6}},n.a.createElement("img",{alt:"Not found",style:{width:"100%",height:"100%"},src:"./images/snake-3.png"})),n.a.createElement("div",{style:{gridRowStart:5,gridColumnStart:3,gridRowEnd:2,gridColumnEnd:1}},n.a.createElement("img",{alt:"Not found",style:{width:"50%",height:"100%",paddingLeft:"50px",paddingTop:"15px",transform:"rotate(-45deg)"},src:"./images/ladder-1.png"})),n.a.createElement("div",{style:{gridRowStart:8,gridColumnStart:8,gridRowEnd:2,gridColumnEnd:8}},n.a.createElement("img",{alt:"Not found",style:{width:"70%",height:"95%",paddingRight:"50px",transform:"rotate(45deg)"},src:"./images/ladder-1.png"})))};var s=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{style:{fontSize:"2rem"}},n.a.createElement("p",{style:{marginLeft:"5vh"}},"Player 1"),n.a.createElement("img",{alt:"Not found",style:{height:"30vh"},src:"../pawns/blue-pawn.png"})),n.a.createElement(o,{gridSize:10}),n.a.createElement("div",{style:{fontSize:"2rem"}},n.a.createElement("p",{style:{marginLeft:"5vh"}},"Player 2"),n.a.createElement("img",{alt:"Not found",style:{height:"30vh"},src:"../pawns/yellow-pawn.png"})))};i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(s,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.fc9b7811.chunk.js.map