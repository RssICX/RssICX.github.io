// 获取文档的 cookie 信息
var cookie1 = document.cookie;
// 将 cookie 中的数字提取出来
var num2 = cookie1.replace(/[^\d]/g, " ");
// 定义变量和数组
var random, aup, aup_history = [0, 0, 0, 0, 0, 0, 0], aup2, aup_math = num2, aup_h = [0, 0, 0, 0];
// 生成指定范围内的随机数的 JavaScript 函数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

// 初始化变量
var i = 0, u = 0, tyu = 0;
var id_0 = document.getElementById("0");

// 在页面上显示学号
function cout() {
    for (let index = 0; index <= 10000; index++) {
        aup_history[index] = randomNum(1, aup_math);
    }
    u = aup_history[randomNum(0, 10000)];
    aup = "请学号为" + ' ' + u + '\u0020' + "号的同学起立";
   document.getElementById("0").innerHTML = aup;
}

// 显示学号悬浮窗口
function myse() {
    document.getElementById("0").style.display = "block";
}

// 隐藏学号悬浮窗口
function for_() {
    cout();
    document.getElementById("0").style.display = "none";
    document.getElementById("0").setAttribute("class", "center u");
    myse();
}
var delay=100;
// 占位函数
function onc() {
    let delay = 1;
    const maxDelay = 200;

    function intervalFunction() {
        delay = delay + 1;
        console.log(delay);
        if (delay >= maxDelay) {
            clearInterval(intervalId); // 停止循环
        }
        cout(); // 在每个间隔调用 cout
    }

    const intervalId = setInterval(intervalFunction, delay);
} // 调用函数开始进程
function wew(params) {
    
}
// 计数器函数，用于限制输入
var cou = 0, Math0;

// 处理不能输入 0 的情况
function name(count) {
    var hhhhh = document.getElementById("ti");
    if (count == 1) {
        hhhhh.innerText = ("不可以输入0哦~");
        return false;
    }
    else if (count == 2) {
        hhhhh.innerText = ("都说了不能输入0了，还输入，讨厌~");
        return false;
    }
    else if (count == 3) {
        hhhhh.innerText = ("哼，你又输入0，不要改了！");
        cou = 0;
        return false;
    }
}

// 处理不能输入负数的情况
function cou2(count) {
    var hhhhh = document.getElementById("ti");
    if (count == 1) {
        hhhhh.innerText = ("不可以输入负数哦~");
        return false;
    }
    else if (count == 2) {
        hhhhh.innerText = ("都说了不可以输入负数了，讨厌~");
        return false;
    }
    else if (count == 3) {
        hhhhh.innerText = ("哼，你又输入负数，不要改了！");
        cou = 0;
        return false;
    }
}

// 隐藏输入窗口
function hideiput0() {}

// 处理用户输入
let npoi=0;
function cin() {
    var bian, n = 0;
    bian = document.getElementById("input").value;
    if (bian == 0 && bian != "") {
        cou++;
        name(cou);
    }
    else if (bian<0) {
        npoi++;
        cou2(npoi);
    }
    else 
    {
        document.getElementById("ti").innerText = "";
        _o_(bian);
        hideiput();
    }
}

// 更新数值
function _o_(Math01) {
    aup_math = Math01;
    document.cookie = "aup_math=" + Math01;
    aup_m();
    _0er();
}

// 返回当前数值
function aup_m() {
    return aup_math;
}

// 显示悬浮窗口
function displayWindow() {
    document.getElementById("window").style.display = "block";
    document.getElementById("shadow").style.display = "block";
}

// 隐藏悬浮窗口
function hideWindow() {
    document.getElementById("window").style.display = "none";
    document.getElementById("shadow").style.display = "none";
}

// 隐藏输入窗口
function hideiput() {
    document.getElementById("input_window").style.display = "none";
    document.getElementById("shadow_down").style.display = "none";
}

// 显示输入窗口
function showipyt() {
    document.getElementById("input_window").style.display = "block";
    document.getElementById("shadow_down").style.display = "block";
}