//1.搭建ES6的开发环境；
let a=1;
console.log(a);
//2.var 声明的是全局变量   全局变量会污染外部的区块
//let 局部变量
//const 常量  声明了就不能改变
var b='zhangfan';
//console.log(b);
window.onload=function(){
    //console.log(b);   //zhangfan  能看出是全局变量
};
{
    var b='zf';
}
//console.log(b);//zf  覆盖了zhangfan
{
    let b='fz';
    console.log(b);//fz
}
console.log(b);//zf
const c='zfa';
console.log(c);
for(var f=1;f<10;f++){
    console.log('循环内'+f);//1~9
}
console.log('循环外'+f);//10
for(let h=1;h<10;h++){
    console.log('循环内'+h);//1~9
}
//console.log('循环外'+h);//报错
//3.解构赋值 常用于前后端分离对json文件的解构
/*let [aa,bb,cc]=[0,1,2];
console.log(aa);
console.log(bb);
console.log(cc);*/
/*let [aa,[bb,cc],dd]=[0,1,2,3]
console.log(aa);
console.log(bb);
console.log(cc);
console.log(dd);*/ //报错
let [aa,[bb,cc],dd]=[0,[1,2],3];
console.log(aa);
console.log(bb);
console.log(cc);
console.log(dd);
let [foo=true]=[];
 console.log(foo);//true
let [uu,mm='zd']=['sg'];
console.log(uu + mm);//sgzd
//undefined,null
let [uu1,mm1='zd']=['sg',undefined];//没有值，所以取默认值
console.log(uu1 + mm1);//sgzd
let [uu2,mm2='zd']=['sg',null];//null有值但为空
console.log(uu2 + mm2);//sgnull
//对象解构
let {foo1,bar}= {foo1:'sd',bar:'sf'};//必须一一对应
console.log(foo1 + bar);//sdsf
let foo2;
({foo2}={foo2:'jspang'});//必须加（）
console.log(foo2);
//字符串的解构
const [w,e,r,t,y,g]='jspang';
console.log(w);//j
console.log(e);//s
console.log(r);//p
console.log(t);//a
console.log(y);//n
console.log(g);//g
// 4.对象扩展运算符和rest运算符
//对象扩展运算符
function jspang(...arg){
    console.log(arg[0]);//1
    console.log(arg[1]);//2
    console.log(arg[2]);//3
    console.log(arg[3]);//undefined
}
jspang(1,2,3);
//以前的写法：
function js(a,b,c){
    console.log(a);//1
    console.log(b);//2
    console.log(c);//3
}
js(1,2,3);

let arr1=['happy','ha','fa'];
let arr2=arr1;
console.log(arr2);//["happy", "ha", "fa"]
arr2.push('ma');
console.log(arr1);//["happy", "ha", "fa", "ma"]
// 运用扩展运算符解决问题：
let arr3=['happy','ha','fa'];
let arr4=[...arr3];
console.log(arr4);//["happy", "ha", "fa"]
arr4.push('ma');
console.log(arr4);//["happy", "ha", "fa", "ma"]
console.log(arr3);//["happy", "ha", "fa"]
//rest(剩余)运算符...
function Jspang(first,...arg){
    console.log(arg.length);//7
 //获取元素以前的写法：
 for(let i=0;i<arg.length;i++){
     console.log(arg[i]);//1,2,3,4,5,6,7
 }
 //新的写法：
 for(let val of arg){
     console.log(val);//1 2 3 4 5 6 7
 }
}
Jspang(0,1,2,3,4,5,6,7)
//5.字符串模板
//以前的写法：
let happy='haha';
let blog='今天非常高兴'+happy+'啊';
console.log(blog);//今天非常高兴ha
//es6的新写法：
let happy1='haha';
let g1=5;
let l=6;
let blog1=`<h1>今天</h1>非常<br/>高兴${happy1}啊${g1+l}`;
console.log(blog1);
//查找
let hh='我很好';
let ll='今天天气很冷，但是我很好';
console.log(ll.indexOf(hh));//9
console.log(ll.includes(hh));//true  //查找有没有此字符串
console.log(ll.startsWith(hh));//false//查找开头有没有此字符串
console.log(ll.endsWith(hh));//true//查找结尾有没有此字符串
//字符串的复制
document.write('zhangfan'.repeat(3))//zhangfan zhangfan zhangfan
//6.数字的操作
//二进制声明Binary
let binary=0o10101;
console.log(binary);//4161
//八进制声明Octal
let octal=0o666;
console.log(octal);//438
let aw=11/4;
console.log(Number.isFinite(aw));//true//isFinite判断是否是数字
console.log(Number.isFinite('aa'));//false//isFinite判断是否是数字
console.log(Number.isFinite(NaN));//false
console.log(Number.isFinite(undefined));//false
//NaN
console.log(Number.isNaN(NaN));//true
//Number.isInteger  判断是否是一个整数
let ee=918.16;
console.log(Number.isInteger(ee));//整型 //false
console.log(!Number.isInteger(ee));//浮点型  //true
console.log(Number.parseInt(ee));//转换成整型 //918
console.log(Number.parseFloat(ee));//转换成浮点型 //918.16
let jsp=Math.pow(2,53)+1;
console.log(jsp);//9007199254740992  2的53次方 最大值
console.log(Number.MAX_SAFE_INTEGER);//9007199254740991最大安全整数
console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991最小安全整数
console.log(Number.isSafeInteger(jsp));//false判断是否是安全整数 false，将+1去掉就是true;
//7.有关数组的知识
//json数组格式
let json={
    '0':'jspa',
    '1':'技术胖',
    '2':'jspa',
    length:3
};
//Array.from方法
let arr=Array.from(json);  //将对象转换成数组
console.log(arr);//['jspa','技术胖','jspa']
//Array.of方法
//‘3，4，5，6’
let arry=Array.of(3,4,5,6);
console.log(arry);//[3,4,5,6]

//普通方法：

let stt='[3,4,5,6]';

let arr5=eval(stt);

console.log(arr5);//[3, 4, 5,
// //find() 实例方法  查找数组元素
let arr6=[1,2,3,4,5,6,7];
console.log(arr6.find(function (value, index, arr) {//value查找的值 index值的索引 arr原型
    return value > 5;
}));//6
let arr0=['jspa','技术胖','jspaa'];
console.log(arr0.find(function (value, index, arr) {//value查找的值 index值的索引 arr原型
    return value =='jspa';
}));//jspa
 //fill  填充替换
 let arr7=['jspa','技术胖','jspaa'];
 arr7.fill('web',1,3);//将数组中1-3中间的元素换成web;
 console.log(arr7);//['jspa','web','web']
 //数组循环
 //以前的方法：
 let arr8=[1,2,3,4,5,6,7,8];
 for(let i=0;i<arr8.length;i++){
     console.log(arr8[i]);//1 2 3 4 5 6 7 8
 }
//新方法：
for(let item of arr8){
    console.log(item);//1,2,3,4,6,7,8
}
for(let item of arr8.keys()){  //输出数组的下标
    console.log(item);//0,1,2,3,4,6,7
}
for(let item of arr8.entries()){//输出数组的下标和元素
    console.log(item);//[0,1] [1,2] [2,3]
}
for(let [index,val] of arr8.entries()){//输出数组的下标和元素
    console.log(index+':'+val);//0:1 1:2 2:3...
}
 //entries 条目 记录
 let arr9=['jspa','技术胖','jspaa'];
 let list=arr9.entries();
 console.log(list.next().value);//[0,'jspa']
 console.log('........');
 console.log(list.next().value);//[1,'技术胖']
 console.log('........');
 console.log(list.next().value);//[2,'jspaa']  //8
//9.函数的扩展  箭头函数
//es5函数
function add(a,b){
    return a+b;
}
console.log(add(1, 2));//3
//es6函数  默认值
function add2(a,b=1){
    if(a==0){
        throw new Error('A is Error')
    }
    return a+b;
}
console.log(add2(1));//2
 function add3(a,b=1){
     //'use strict';  //严谨模式
     return a+b;
 }
 //console.log(add3(1));//报错
console.log(add3(1, 2));//3
console.log(add2.length);//1  获得需要传递参数的个数
//箭头函数
var add4=(q,o=1) => q+o;
console.log(add4(1));//2
var add4=(q,o=1) => {return q+o};
console.log(add4(2));//3
var add4=(q,o=1) => {
    console.log('11111');
    return q+o;
} ;
console.log(add4(3));//4
 //10.函数和数组
 //对象的函数解构json
 let json2={
     a:'jspang',
     b:'web'
 }
 function fun({a,b='web2'}){
     console.log(a, b);//jspang web
 }
 fun(json2);
 //数组解构
 let aar=['jspang','jishu','前端教程'];
 function fun2(a,b,c){
     console.log(a, b, c);
 }
 fun2(...aar);//jspang jishu 前端教程
//in的用法
let obj={
    a:'jishupang',
    b:'fafa'
};
console.log('a' in obj);//true 判断对象里是否有a
//判断数组
let aaa=[,,,];
console.log(1 in aaa);//false
let aaa1=['gg',,,];
console.log(0 in aaa1);//t
//数组遍历 1.forEach
let ss=['aa','ff','gg'];
ss.forEach((val,index)=>console.log(index,val));//0 'aa' 1 'ff' 2 'gg'
//2.filter
ss.filter(x=>console.log(x));//aa ff gg
//3.some
ss.some(x=>console.log(x));//aa ff gg
//4.map 替换
console.log(ss.map(x=>'web'));//["web", "web", "web"]
//数组转换成字符串
console.log(ss.toString());//aa,ff,gg
console.log(ss.join('|'));//加入 aa|ff|gg
//11.es6对象
//对象的赋值
//es5对象的赋值：
let name='zhangfan';
let skill='web';
let obj1={
    name:name,
    skill:skill
};
console.log(obj1);//{name: "zhangfan", skill: "web"}
//es6对象的赋值：
let obj2={
    name,
    skill
};
console.log(obj2);//{name: "zhangfan", skill: "web"}
//key值的构建
let key='skill';
var obj0={
    [key]:'web'
}
console.log(obj0);//{skill:'web'}
//自定义对象的方法：
let obj3={
    add:function(a,b){
        return a+b;
    }
}
console.log(obj3.add(1, 2));//3
//is() 对两个对象进行比较
let obj4={name:"zzzz"};
let obj5={name:"zzzz"};
//es5方法：
console.log(obj4.name === obj5.name);//true
//es6方法：
console.log(Object.is(obj4.name, obj5.name));//true
//同值相等
console.log(+0 === -0);//true
console.log(NaN === NaN);//false
//严格相等
console.log(Object.is(+0, -0));//false
console.log(Object.is(NaN, NaN));//true
//assign  对象的合并
let dd1={dd:'ww'};
let ddd={ddd:'www'};
let dddd={dddd:'wwww'};
let d2=Object.assign(dd1,ddd,dddd);
console.log(d2);//{dd: "ww", ddd: "www", dddd: "wwww"}
//12.Symbol 数据类型
let p1=new String;
let p2=new Number;
let p3=new Boolean;
let p4=new Array();
let p5=new Object;
let f1=Symbol();
console.log(typeof f1);//symbol
console.log(typeof p1);//object
console.log(typeof p2);//object
console.log(typeof p3);//object
console.log(typeof p4);//object
console.log(typeof p5);//object

 let jspang2=Symbol('jishupang');
 console.log(jspang2);//Symbol('jishupang') 红色的
 console.log(jspang2.toString());//Symbol('jishupang') 黑色的

 let jspang3=Symbol();
 let obj6={
     [jspang3]:'jspo'
 }
 console.log(obj6[jspang3]);//jspo
 obj6[jspang3]='webd';
 console.log(obj6[jspang3]);//webd

let obj7={name:'jsp',skill:'web'};
let age=Symbol();
obj7[age]=18;
console.log(obj7);//{name: "jsp", skill: "web", Symbol(): 18}
for(let item in obj7){
    console.log(obj7[item]);//jsp web
}
console.log(obj7[age]);//18
 //13.Set  数组去重
 let setArr=new Set(['jsp','技术胖','webb','jsp']);
 console.log(setArr);//Set{'jsp','技术胖'，'webb'}
 //has 查找
 console.log(setArr.has('jsp'))//true
 //clear() 全部删除
 //setArr.clear();
 //console.log(setArr);//Set{}
 //delete() 删除
 setArr.delete('webb');
 console.log(setArr)//Set{'jsp','技术胖'}
//循环输出  for...of
for(let item of setArr){
    console.log(item);
};
//forEach
setArr.forEach((value)=>console.log(value));//jsp,技术胖
//size  属性
console.log(setArr.size);//2
//WeakSet
let weakObj=new WeakSet();
let obj9={a:'jsp',b:'webb'};
let obj99={a:'jsp',b:'webb'};
weakObj.add(obj9);
weakObj.add(obj99);
console.log(weakObj);//WeakSet{Object{a:'jsp',b:'webb'},Object{a:'jsp',b:'webb'}}
 //14.map 数据类型  很重要，很灵活
 let jason={
     name:'ff',
     skill:'webl'
 };
 console.log(jason.name);//ff
//=>
var map=new Map();
//set
map.set(jason,'iam');
console.log(map);///Map(1) {{…} => "iam"}
map.set('jsonb',jason);
console.log(map);///Map(2) {{…} => "iam", "jsonb" => {…}}
//map增删查
//get
console.log(map.get(jason));//iam    jason为key iam为value
console.log(map.get('jsonb'));//{name: "ff", skill: "webl"}  //'jsonb'为key jason为value

//delete  clear
map.delete(json);
console.log(map);
console.log(map.size);//2
//查找 has
console.log(map.has('ff'));//false
// //15.proxy 代理  增强对象和函数（方法）vue生命周期 钩子函数 预处理
let obje={
    add:function(val){
        return val+100;
    },
    name:'I am Jaspang'
}
console.log(obje.add(100));//200
console.log(obje.name);//i am jaspang

 let pro=new Proxy({
     add:function(val){
         return val+100;
     },
     name:'I am Jaspang'
 },{
     //预处理机制 get set apply
     get:function(target,key,property){
         console.log('come in get');
         return target[key];
     },
     set:function(target,key,value,receiver){
         console.log(`setting ${key}=${value}`);//setting name=技术胖
         return target[key]=value;//返回结果
     }
 });
 console.log(pro.name);//come in get
 pro.name='技术胖';
 console.log(pro.name)//技术胖
//apply
let target=function(){
    return 'i am zhangfan'
}
let handler={
    apply(target,ctx,args){
        console.log('do apply');
        return  Reflect.apply(...arguments);
    }
};
let pro1=new Proxy(target,handler);//handler为预处理
console.log(pro1());//i am zhangfan
//16.promise  解决es5中回调地狱问题
let state=1;
function step1(resolve,reject){
    console.log('1.开始，洗菜做饭');
    if(state==1){
        resolve('洗菜做饭完成')
    }else{
        reject('洗菜做饭错误')
    }
}
function step2(resolve,reject){
    console.log('2.开始，坐下来吃饭');
    if(state==1){
        resolve('坐下来吃饭完成')
    }else{
        reject('坐下来吃饭错误')
    }
}
function step3(resolve,reject){
    console.log('3.开始，收拾桌子洗碗');
    if(state==1){
        resolve('收拾桌子洗碗完成')
    }else{
        reject('收拾桌子洗碗错误')
    }
}
new Promise(step1).then(
    function(val){
        console.log(val);
        return new Promise(step2)
    }
).then(
    function(val){
        console.log(val);
        return new Promise(step3)
    }
).then(
    function(val){
        console.log(val);
    }
)
//17.class类
class Coder{
    name(val){
        console.log(val);//大技术胖
        return val;
    }
    skill(val){
        console.log(this.name('大技术胖') + ':' + 'skill-' + val);
    }
    //类的传参
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    add(){
        return this.a+this.b;
    }
}
let jspang1=new Coder;
//jspang1.name('大技术胖');
jspang1.skill('web');
let ha=new Coder(1,2);
console.log(ha.add());//3
//类的继承
class htmler extends Coder{};
let pang=new htmler;
console.log(pang.name('大技术胖'));
//18.模块化操作
//export 输出操作
//import 引入操作
//1.export的引入方式
//import {name,cname,skill} from './temp';
//console.log(name);
//2.export default的引入方式
//import shy from './temp';
//console.log(shy);
//src/babel-node index.js
