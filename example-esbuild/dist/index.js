(()=>{var i=Object.defineProperty;var b=(e,o)=>()=>(o||(o={exports:{}},e(o.exports,o)),o.exports),z=e=>i(e,"__esModule",{value:!0}),p=(e,o)=>{z(e);for(var a in o)i(e,a,{get:o[a],enumerable:!0})};var d=b(c=>{p(c,{default:()=>f,empty:()=>n,generateName:()=>r,getRandomQuote:()=>t,zombie:()=>u,zombieFactory:()=>m});var f={empty:n,generateName:r,getRandomQuote:t,zombieFactory:m,zombie:u}});function n(){}const u={};p(u,{default:()=>m,generateName:()=>r,getRandomQuote:()=>t});function t(){return Math.random()<.5===!0?"No guts, no gory.":"Me eat brains!"}function r(e="Ghoul"){return"z"+e}function m(){return{name:r(),damage:42,say:t}}d();})();