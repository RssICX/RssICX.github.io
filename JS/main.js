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
    var aboutWindow = document.getElementById('window');
    aboutWindow.style.display = 'block'; // 先显示窗口
}

// 隐藏悬浮窗口
function hideWindow() {
    var aboutWindow = document.getElementById('window');
    
    // 添加关闭动画类
    aboutWindow.classList.add('dong1');
    
    // 监听动画结束事件
    aboutWindow.addEventListener('animationend', function animationEnded() {
        // 隐藏窗口
        this.style.display = 'none';
        
        // 移除关闭动画类
        this.classList.remove('dong1');
        
        // 移除动画结束事件监听器，防止重复触发
        this.removeEventListener('animationend', animationEnded);
        
        // 重置动画状态（如果需要在下一次显示时从头开始）
        // 这一步取决于进入动画的实现方式，如果进入动画也有一个类，比如'.dongEnter'，那么需要在显示前移除这个类
        // aboutWindow.classList.remove('dongEnter'); 
    });
}

// 隐藏输入窗口
function hideiput() {
    var inputWindow = document.getElementById('input_window');
    
    // 添加关闭动画类
    inputWindow.classList.add('dong0101-close');
    
    // 监听动画结束事件
    inputWindow.addEventListener('animationend', function() {
        // 动画结束后隐藏元素并移除关闭动画类
        this.style.display = 'none';
        this.classList.remove('dong0101-close');
        
        // 移除事件监听器，避免重复执行
        this.removeEventListener('animationend', arguments.callee);
    });
}

// 显示输入窗口
function showipyt() {
    var inputWindow = document.getElementById('input_window');
    inputWindow.style.display = 'block'; // 显示元素
    inputWindow.classList.remove('dong0101'); // 确保动画可以重新播放
    void inputWindow.offsetWidth; // 触发重绘，确保动画生效
    inputWindow.classList.add('dong0101'); // 重新应用进入动画类
}