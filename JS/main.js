
const num2 = document.cookie.replace(/[^\d]/g, "");
let aup_math = Number(num2);
const COOKIE_NAME = "cookie1";
const MAX_DELAY = 200;
var STUDENT_COUNT = aup_math;
const AUP_ELEMENT_ID = "0";
const TI_ELEMENT_ID = "ti";
let usedNumbers = []; // 用来存储已生成的随机数
// 从cookie获取学生总数
// 生成随机数的简化函数
function generateUniqueRandom(min,max) {
    if (usedNumbers.length >= max - min + 1) {
        console.warn("所有可能的数都已被使用，无法再生成不重复的随机数。");
        document.getElementById(AUP_ELEMENT_ID).innerHTML = "所有可能的数都已被使用，无法再生成不重复的随机数，请点击下方按钮重置。";
        document.getElementById("button").innerHTML = "重置";
        document.getElementById("button").onclick = resetUsedNumbers; // 直接赋值函数引用
        return;
    }
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (usedNumbers.includes(randomNumber));

    usedNumbers.push(randomNumber);
    return randomNumber;
}
function resetUsedNumbers() {
    usedNumbers = []; // 清空数组，使其准备好存储新的一系列随机数
    alert("已完成重置");
    document.getElementById("button").innerHTML = "点击以开始";
    document.getElementById("button").onclick = announceStudent; // 重新绑定点击事件到announceStudent函数
}
// 显示点名信息
function announceStudent() {
    console.log(document.getElementById('0'))
    const id_0Element = document.getElementById(AUP_ELEMENT_ID);
    id_0Element.innerHTML = "请学号为 "+ generateUniqueRandom(1,aup_math) + " 号的同学起立";
    id_0Element.style.display = "block";
    id_0Element.className = "center u";
}


// var count=0;

function validateInput(count) {
    var count1 =count;
    var hhhhh = document.getElementById("ti");
    if (count1 == 1) {
        hhhhh.innerText = ("不可以输入0哦~");
    }
    else if (count1 == 2) {
        hhhhh.innerText = ("都说了不可以输入0了，讨厌~");
    }
    else if (count1 == 3) {
        hhhhh.innerText = ("哼，你又输入0，不要改了！");
        cou=0;
    }
    
}
// 初始化调用或其他逻辑
// ...


// 处理不能输入负数的情况
function cou2(count) {
    var count1 =count;
    var hhhhh = document.getElementById("ti");
    if (count1 == 1) {
        hhhhh.innerText = ("不可以输入负数哦~");
    }
    else if (count1 == 2) {
        hhhhh.innerText = ("都说了不可以输入负数了，讨厌~");
    }
    else if (count1 == 3) {
        hhhhh.innerText = ("哼，你又输入负数，不要改了！");
        npoi=0;
    }
    
}

// 隐藏输入窗口
function hideiput0() {}
let cou=0; 
// 处理用户输入
let npoi=0;
function cin() {
    var bian, n = 0;
    bian = document.getElementById("input").value;
    if (bian == 0 && bian != "") {
        cou++;
        validateInput(cou);
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