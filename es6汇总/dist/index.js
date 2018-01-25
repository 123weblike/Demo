'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//1.搭建ES6的开发环境；
var a = 1;
console.log(a);
//2.var 声明的是全局变量   全局变量会污染外部的区块
//let 局部变量
//const 常量  声明了就不能改变
var b = 'zhangfan';
//console.log(b);
window.onload = function () {
    //console.log(b);   //zhangfan  能看出是全局变量
};
{
    var b = 'zf';
}
//console.log(b);//zf  覆盖了zhangfan
{
    var _b = 'fz';
    console.log(_b); //fz
}
console.log(b); //zf
var c = 'zfa';
console.log(c);
for (var f = 1; f < 10; f++) {
    console.log('循环内' + f); //1~9
}
console.log('循环外' + f); //10
for (var h = 1; h < 10; h++) {
    console.log('循环内' + h); //1~9
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
var aa = 0,
    bb = 1,
    cc = 2,
    dd = 3;

console.log(aa);
console.log(bb);
console.log(cc);
console.log(dd);
var _ref = [],
    _ref$ = _ref[0],
    foo = _ref$ === undefined ? true : _ref$;

console.log(foo); //true
var _ref2 = ['sg'],
    uu = _ref2[0],
    _ref2$ = _ref2[1],
    mm = _ref2$ === undefined ? 'zd' : _ref2$;

console.log(uu + mm); //sgzd
//undefined,null
var uu1 = 'sg',
    _undefined = undefined,
    mm1 = _undefined === undefined ? 'zd' : _undefined; //没有值，所以取默认值

console.log(uu1 + mm1); //sgzd
var uu2 = 'sg',
    _ref3 = null,
    mm2 = _ref3 === undefined ? 'zd' : _ref3; //null有值但为空

console.log(uu2 + mm2); //sgnull
//对象解构
var _foo1$bar = { foo1: 'sd', bar: 'sf' },
    foo1 = _foo1$bar.foo1,
    bar = _foo1$bar.bar; //必须一一对应

console.log(foo1 + bar); //sdsf
var foo2 = void 0;
//必须加（）
var _foo = { foo2: 'jspang' };
foo2 = _foo.foo2;
console.log(foo2);
//字符串的解构

var _jspang = 'jspang',
    _jspang2 = _slicedToArray(_jspang, 6),
    w = _jspang2[0],
    e = _jspang2[1],
    r = _jspang2[2],
    t = _jspang2[3],
    y = _jspang2[4],
    g = _jspang2[5];

console.log(w); //j
console.log(e); //s
console.log(r); //p
console.log(t); //a
console.log(y); //n
console.log(g); //g
// 4.对象扩展运算符和rest运算符
//对象扩展运算符
function jspang() {
    console.log(arguments.length <= 0 ? undefined : arguments[0]); //1
    console.log(arguments.length <= 1 ? undefined : arguments[1]); //2
    console.log(arguments.length <= 2 ? undefined : arguments[2]); //3
    console.log(arguments.length <= 3 ? undefined : arguments[3]); //undefined
}
jspang(1, 2, 3);
//以前的写法：
function js(a, b, c) {
    console.log(a); //1
    console.log(b); //2
    console.log(c); //3
}
js(1, 2, 3);

var arr1 = ['happy', 'ha', 'fa'];
var arr2 = arr1;
console.log(arr2); //["happy", "ha", "fa"]
arr2.push('ma');
console.log(arr1); //["happy", "ha", "fa", "ma"]
// 运用扩展运算符解决问题：
var arr3 = ['happy', 'ha', 'fa'];
var arr4 = [].concat(arr3);
console.log(arr4); //["happy", "ha", "fa"]
arr4.push('ma');
console.log(arr4); //["happy", "ha", "fa", "ma"]
console.log(arr3); //["happy", "ha", "fa"]
//rest(剩余)运算符...
function Jspang(first) {
    for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        arg[_key - 1] = arguments[_key];
    }

    console.log(arg.length); //7
    //获取元素以前的写法：
    for (var i = 0; i < arg.length; i++) {
        console.log(arg[i]); //1,2,3,4,5,6,7
    }
    //新的写法：
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            console.log(val); //1 2 3 4 5 6 7
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
Jspang(0, 1, 2, 3, 4, 5, 6, 7);
//5.字符串模板
//以前的写法：
var happy = 'haha';
var blog = '今天非常高兴' + happy + '啊';
console.log(blog); //今天非常高兴ha
//es6的新写法：
var happy1 = 'haha';
var g1 = 5;
var l = 6;
var blog1 = '<h1>\u4ECA\u5929</h1>\u975E\u5E38<br/>\u9AD8\u5174' + happy1 + '\u554A' + (g1 + l);
console.log(blog1);
//查找
var hh = '我很好';
var ll = '今天天气很冷，但是我很好';
console.log(ll.indexOf(hh)); //9
console.log(ll.includes(hh)); //true  //查找有没有此字符串
console.log(ll.startsWith(hh)); //false//查找开头有没有此字符串
console.log(ll.endsWith(hh)); //true//查找结尾有没有此字符串
//字符串的复制
document.write('zhangfan'.repeat(3)); //zhangfan zhangfan zhangfan
//6.数字的操作
//二进制声明Binary
var binary = 4161;
console.log(binary); //4161
//八进制声明Octal
var octal = 438;
console.log(octal); //438
var aw = 11 / 4;
console.log(Number.isFinite(aw)); //true//isFinite判断是否是数字
console.log(Number.isFinite('aa')); //false//isFinite判断是否是数字
console.log(Number.isFinite(NaN)); //false
console.log(Number.isFinite(undefined)); //false
//NaN
console.log(Number.isNaN(NaN)); //true
//Number.isInteger  判断是否是一个整数
var ee = 918.16;
console.log(Number.isInteger(ee)); //整型 //false
console.log(!Number.isInteger(ee)); //浮点型  //true
console.log(Number.parseInt(ee)); //转换成整型 //918
console.log(Number.parseFloat(ee)); //转换成浮点型 //918.16
var jsp = Math.pow(2, 53) + 1;
console.log(jsp); //9007199254740992  2的53次方 最大值
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991最大安全整数
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991最小安全整数
console.log(Number.isSafeInteger(jsp)); //false判断是否是安全整数 false，将+1去掉就是true;
//7.有关数组的知识
//json数组格式
var json = {
    '0': 'jspa',
    '1': '技术胖',
    '2': 'jspa',
    length: 3
};
//Array.from方法
var arr = Array.from(json); //将对象转换成数组
console.log(arr); //['jspa','技术胖','jspa']
//Array.of方法
//‘3，4，5，6’
var arry = Array.of(3, 4, 5, 6);
console.log(arry); //[3,4,5,6]

//普通方法：

var stt = '[3,4,5,6]';

var arr5 = eval(stt);

console.log(arr5); //[3, 4, 5,
// //find() 实例方法  查找数组元素
var arr6 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr6.find(function (value, index, arr) {
    //value查找的值 index值的索引 arr原型
    return value > 5;
})); //6
var arr0 = ['jspa', '技术胖', 'jspaa'];
console.log(arr0.find(function (value, index, arr) {
    //value查找的值 index值的索引 arr原型
    return value == 'jspa';
})); //jspa
//fill  填充替换
var arr7 = ['jspa', '技术胖', 'jspaa'];
arr7.fill('web', 1, 3); //将数组中1-3中间的元素换成web;
console.log(arr7); //['jspa','web','web']
//数组循环
//以前的方法：
var arr8 = [1, 2, 3, 4, 5, 6, 7, 8];
for (var i = 0; i < arr8.length; i++) {
    console.log(arr8[i]); //1 2 3 4 5 6 7 8
}
//新方法：
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = arr8[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _item = _step2.value;

        console.log(_item); //1,2,3,4,6,7,8
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = arr8.keys()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _item2 = _step3.value;
        //输出数组的下标
        console.log(_item2); //0,1,2,3,4,6,7
    }
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
    for (var _iterator4 = arr8.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _item3 = _step4.value;
        //输出数组的下标和元素
        console.log(_item3); //[0,1] [1,2] [2,3]
    }
} catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
        }
    } finally {
        if (_didIteratorError4) {
            throw _iteratorError4;
        }
    }
}

var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
    for (var _iterator5 = arr8.entries()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var _step5$value = _slicedToArray(_step5.value, 2),
            index = _step5$value[0],
            val = _step5$value[1];

        //输出数组的下标和元素
        console.log(index + ':' + val); //0:1 1:2 2:3...
    }
    //entries 条目 记录
} catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
        }
    } finally {
        if (_didIteratorError5) {
            throw _iteratorError5;
        }
    }
}

var arr9 = ['jspa', '技术胖', 'jspaa'];
var list = arr9.entries();
console.log(list.next().value); //[0,'jspa']
console.log('........');
console.log(list.next().value); //[1,'技术胖']
console.log('........');
console.log(list.next().value); //[2,'jspaa']  //8
//9.函数的扩展  箭头函数
//es5函数
function add(a, b) {
    return a + b;
}
console.log(add(1, 2)); //3
//es6函数  默认值
function add2(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    if (a == 0) {
        throw new Error('A is Error');
    }
    return a + b;
}
console.log(add2(1)); //2
function add3(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    //'use strict';  //严谨模式
    return a + b;
}
//console.log(add3(1));//报错
console.log(add3(1, 2)); //3
console.log(add2.length); //1  获得需要传递参数的个数
//箭头函数
var add4 = function add4(q) {
    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return q + o;
};
console.log(add4(1)); //2
var add4 = function add4(q) {
    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return q + o;
};
console.log(add4(2)); //3
var add4 = function add4(q) {
    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    console.log('11111');
    return q + o;
};
console.log(add4(3)); //4
//10.函数和数组
//对象的函数解构json
var json2 = {
    a: 'jspang',
    b: 'web'
};
function fun(_ref4) {
    var a = _ref4.a,
        _ref4$b = _ref4.b,
        b = _ref4$b === undefined ? 'web2' : _ref4$b;

    console.log(a, b); //jspang web
}
fun(json2);
//数组解构
var aar = ['jspang', 'jishu', '前端教程'];
function fun2(a, b, c) {
    console.log(a, b, c);
}
fun2.apply(undefined, aar); //jspang jishu 前端教程
//in的用法
var obj = {
    a: 'jishupang',
    b: 'fafa'
};
console.log('a' in obj); //true 判断对象里是否有a
//判断数组
var aaa = [,,,];
console.log(1 in aaa); //false
var aaa1 = ['gg',,,];
console.log(0 in aaa1); //t
//数组遍历 1.forEach
var ss = ['aa', 'ff', 'gg'];
ss.forEach(function (val, index) {
    return console.log(index, val);
}); //0 'aa' 1 'ff' 2 'gg'
//2.filter
ss.filter(function (x) {
    return console.log(x);
}); //aa ff gg
//3.some
ss.some(function (x) {
    return console.log(x);
}); //aa ff gg
//4.map 替换
console.log(ss.map(function (x) {
    return 'web';
})); //["web", "web", "web"]
//数组转换成字符串
console.log(ss.toString()); //aa,ff,gg
console.log(ss.join('|')); //加入 aa|ff|gg
//11.es6对象
//对象的赋值
//es5对象的赋值：
var name = 'zhangfan';
var skill = 'web';
var obj1 = {
    name: name,
    skill: skill
};
console.log(obj1); //{name: "zhangfan", skill: "web"}
//es6对象的赋值：
var obj2 = {
    name: name,
    skill: skill
};
console.log(obj2); //{name: "zhangfan", skill: "web"}
//key值的构建
var key = 'skill';
var obj0 = _defineProperty({}, key, 'web');
console.log(obj0); //{skill:'web'}
//自定义对象的方法：
var obj3 = {
    add: function add(a, b) {
        return a + b;
    }
};
console.log(obj3.add(1, 2)); //3
//is() 对两个对象进行比较
var obj4 = { name: "zzzz" };
var obj5 = { name: "zzzz" };
//es5方法：
console.log(obj4.name === obj5.name); //true
//es6方法：
console.log(Object.is(obj4.name, obj5.name)); //true
//同值相等
console.log(+0 === -0); //true
console.log(NaN === NaN); //false
//严格相等
console.log(Object.is(+0, -0)); //false
console.log(Object.is(NaN, NaN)); //true
//assign  对象的合并
var dd1 = { dd: 'ww' };
var ddd = { ddd: 'www' };
var dddd = { dddd: 'wwww' };
var d2 = Object.assign(dd1, ddd, dddd);
console.log(d2); //{dd: "ww", ddd: "www", dddd: "wwww"}
//12.Symbol 数据类型
var p1 = new String();
var p2 = new Number();
var p3 = new Boolean();
var p4 = new Array();
var p5 = new Object();
var f1 = Symbol();
console.log(typeof f1 === 'undefined' ? 'undefined' : _typeof(f1)); //symbol
console.log(typeof p1 === 'undefined' ? 'undefined' : _typeof(p1)); //object
console.log(typeof p2 === 'undefined' ? 'undefined' : _typeof(p2)); //object
console.log(typeof p3 === 'undefined' ? 'undefined' : _typeof(p3)); //object
console.log(typeof p4 === 'undefined' ? 'undefined' : _typeof(p4)); //object
console.log(typeof p5 === 'undefined' ? 'undefined' : _typeof(p5)); //object

var jspang2 = Symbol('jishupang');
console.log(jspang2); //Symbol('jishupang') 红色的
console.log(jspang2.toString()); //Symbol('jishupang') 黑色的

var jspang3 = Symbol();
var obj6 = _defineProperty({}, jspang3, 'jspo');
console.log(obj6[jspang3]); //jspo
obj6[jspang3] = 'webd';
console.log(obj6[jspang3]); //webd

var obj7 = { name: 'jsp', skill: 'web' };
var age = Symbol();
obj7[age] = 18;
console.log(obj7); //{name: "jsp", skill: "web", Symbol(): 18}
for (var item in obj7) {
    console.log(obj7[item]); //jsp web
}
console.log(obj7[age]); //18
//13.Set  数组去重
var setArr = new Set(['jsp', '技术胖', 'webb', 'jsp']);
console.log(setArr); //Set{'jsp','技术胖'，'webb'}
//has 查找
console.log(setArr.has('jsp')); //true
//clear() 全部删除
//setArr.clear();
//console.log(setArr);//Set{}
//delete() 删除
setArr.delete('webb');
console.log(setArr); //Set{'jsp','技术胖'}
//循环输出  for...of
var _iteratorNormalCompletion6 = true;
var _didIteratorError6 = false;
var _iteratorError6 = undefined;

try {
    for (var _iterator6 = setArr[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var _item4 = _step6.value;

        console.log(_item4);
    }
} catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion6 && _iterator6.return) {
            _iterator6.return();
        }
    } finally {
        if (_didIteratorError6) {
            throw _iteratorError6;
        }
    }
}

;
//forEach
setArr.forEach(function (value) {
    return console.log(value);
}); //jsp,技术胖
//size  属性
console.log(setArr.size); //2
//WeakSet
var weakObj = new WeakSet();
var obj9 = { a: 'jsp', b: 'webb' };
var obj99 = { a: 'jsp', b: 'webb' };
weakObj.add(obj9);
weakObj.add(obj99);
console.log(weakObj); //WeakSet{Object{a:'jsp',b:'webb'},Object{a:'jsp',b:'webb'}}
//14.map 数据类型  很重要，很灵活
var jason = {
    name: 'ff',
    skill: 'webl'
};
console.log(jason.name); //ff
//=>
var map = new Map();
//set
map.set(jason, 'iam');
console.log(map); ///Map(1) {{…} => "iam"}
map.set('jsonb', jason);
console.log(map); ///Map(2) {{…} => "iam", "jsonb" => {…}}
//map增删查
//get
console.log(map.get(jason)); //iam    jason为key iam为value
console.log(map.get('jsonb')); //{name: "ff", skill: "webl"}  //'jsonb'为key jason为value

//delete  clear
map.delete(json);
console.log(map);
console.log(map.size); //2
//查找 has
console.log(map.has('ff')); //false
// //15.proxy 代理  增强对象和函数（方法）vue生命周期 钩子函数 预处理
var obje = {
    add: function add(val) {
        return val + 100;
    },
    name: 'I am Jaspang'
};
console.log(obje.add(100)); //200
console.log(obje.name); //i am jaspang

var pro = new Proxy({
    add: function add(val) {
        return val + 100;
    },
    name: 'I am Jaspang'
}, {
    //预处理机制 get set apply
    get: function get(target, key, property) {
        console.log('come in get');
        return target[key];
    },
    set: function set(target, key, value, receiver) {
        console.log('setting ' + key + '=' + value); //setting name=技术胖
        return target[key] = value; //返回结果
    }
});
console.log(pro.name); //come in get
pro.name = '技术胖';
console.log(pro.name); //技术胖
//apply
var target = function target() {
    return 'i am zhangfan';
};
var handler = {
    apply: function apply(target, ctx, args) {
        console.log('do apply');
        return Reflect.apply.apply(Reflect, arguments);
    }
};
var pro1 = new Proxy(target, handler); //handler为预处理
console.log(pro1()); //i am zhangfan
//16.promise  解决es5中回调地狱问题
var state = 1;
function step1(resolve, reject) {
    console.log('1.开始，洗菜做饭');
    if (state == 1) {
        resolve('洗菜做饭完成');
    } else {
        reject('洗菜做饭错误');
    }
}
function step2(resolve, reject) {
    console.log('2.开始，坐下来吃饭');
    if (state == 1) {
        resolve('坐下来吃饭完成');
    } else {
        reject('坐下来吃饭错误');
    }
}
function step3(resolve, reject) {
    console.log('3.开始，收拾桌子洗碗');
    if (state == 1) {
        resolve('收拾桌子洗碗完成');
    } else {
        reject('收拾桌子洗碗错误');
    }
}
new Promise(step1).then(function (val) {
    console.log(val);
    return new Promise(step2);
}).then(function (val) {
    console.log(val);
    return new Promise(step3);
}).then(function (val) {
    console.log(val);
});
//17.class类

var Coder = function () {
    _createClass(Coder, [{
        key: 'name',
        value: function name(val) {
            console.log(val); //大技术胖
            return val;
        }
    }, {
        key: 'skill',
        value: function skill(val) {
            console.log(this.name('大技术胖') + ':' + 'skill-' + val);
        }
        //类的传参

    }]);

    function Coder(a, b) {
        _classCallCheck(this, Coder);

        this.a = a;
        this.b = b;
    }

    _createClass(Coder, [{
        key: 'add',
        value: function add() {
            return this.a + this.b;
        }
    }]);

    return Coder;
}();

var jspang1 = new Coder();
//jspang1.name('大技术胖');
jspang1.skill('web');
var ha = new Coder(1, 2);
console.log(ha.add()); //3
//类的继承

var htmler = function (_Coder) {
    _inherits(htmler, _Coder);

    function htmler() {
        _classCallCheck(this, htmler);

        return _possibleConstructorReturn(this, (htmler.__proto__ || Object.getPrototypeOf(htmler)).apply(this, arguments));
    }

    return htmler;
}(Coder);

;
var pang = new htmler();
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
