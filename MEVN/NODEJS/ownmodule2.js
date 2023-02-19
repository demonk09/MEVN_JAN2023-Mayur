var url =require("url");
var add = "http://127.0.0.1:5500/loop.html?year=2023&month=february&day=21";
var q =url.parse(add,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata =q.query;
console.log(qdata.month);
console.log(qdata.day);
