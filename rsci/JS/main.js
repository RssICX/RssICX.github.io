// alert (document.cookie);
var cookie1 = document.cookie;
var num2 = cookie1.replace(/[^\d]/g, " ");
var random, aup, aup_history = [0, 0, 0, 0, 0, 0, 0], aup2, aup_math = num2, aup_h = [0, 0, 0, 0];
// <!-- The `randomNum` function is a JavaScript function that generates a random number between a
// minimum and maximum value. -->
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
var bd=["0","原千惠","黄罄悦","贾金元","马研博","王子宁","颜家辉","王子煜","毋羽墨","董娜伶","郭治瑞","刘佳琪","屈弛越","田乐熙","姬婧涵","花子雯","赵睿健","冯思尧","李慧慧","刘轩颖","任丽媛","刘岳","刘炎汶","侯金妍","徐最睿","王耀萱","王怡萱","陈浩川","丁子悦","孙彦筠","高欣苒","朱振华","牛佳易","颜家兴","刘旭翔","李浩宇","秦子墨","李承志","李少博","高嘉悦","胡馨月","路吴霖","史涵祺","程昱歌","姬瑞甜","袁旖聪","陈炳宇","姬琉源","任悠然","赵亦凡","谷皓宇","范凌薇","李骁航","梁羽涵","郭鹏飞"],i = 0, u = 0, tyu = 0;
var id_0 = document.getElementById("0");
function cout() {
    for (let index = 0; index <= 10000; index++) {
        aup_history[index] = randomNum(1, 56);
    }
    let inr=0;
    inr=aup_history[randomNum(0, 10000)];
    u =bd[inr];
    aup = "请" +'\u0020'+inr+ "号 的"+ '\u0020' + u + '\u0020' + "同学起立";
    // aup="请学号为"+' '+"34"+'\u0020'+"号的同学起立";
    var _0___o_ = document.getElementById("0");
    _0___o_.innerHTML = aup;
}
function myse() {
    document.getElementById("0").style.display = "block";
}
// sleep(fun, 2000);
function for_() {
    cout();
    document.getElementById("0").style.display = "none";
    document.getElementById("0").setAttribute("class", "center u");
    myse();
}
var cou = 0, Math0;
// function name(count) {
//     var hhhhh = document.getElementById("ti");
//     if (count == 1) {
//         hhhhh.innerText = ("不可以输入0哦~");
//         // cin();
//         return false;
//     }
//     else if (count == 2) {
//         hhhhh.innerText = ("都说了不能输入0了，还输入，讨厌~");
//         // cin();
//         return false;
//     }
//     else if (count == 3) {
//         hhhhh.innerText = ("哼，你又输入0，不要改了！");
//         cou = 0;
//         // cin();
//         // setInterval(hideiput, 2000);
//         return false;
//     }
// }
// function cou2(count) {
//     var hhhhh = document.getElementById("ti");
//     if (count == 1) {
//         hhhhh.innerText = ("不可以输入负数哦~");
//         // cin();
//         return false;
//     }
//     else if (count == 2) {
//         hhhhh.innerText = ("都说了不可以输入负数了，讨厌~");
//         // cin();
//         return false;
//     }
//     else if (count == 3) {
//         hhhhh.innerText = ("哼，你又输入负数，不要改了！");
//         cou = 0;
//         // cin();
//         // hhhhh.innerText = ("");
//         // setInterval(hideiput0, 2000);
//         return false;
//     }
// }
// function hideiput0() {

// }
// let npoi=0;
// // <!-- The `cin()` function is used to handle user input for the number of names to generate. -->
// function cin() {
//     var bian, n = 0;
//     bian = document.getElementById("input").value;
//     // alert(bian);
//     // n++;
//     if (bian == 0 && bian != "") {
//         cou++;
//         name(cou);
//     }
//     else if (bian<0) {
//         npoi++;
//         cou2(npoi);
//     }
//     else if (bian>199) {
//         document.getElementById("ti").innerText="你是要给全世界的人点名吗？";
//         // document.getElementById("it").innerText=""
//     }
//     else {
//         document.getElementById("ti").innerText = "";
//         _o_(bian);
//         hideiput();
//     }
// }
function _o_(Math01) {
    aup_math = Math01;
    document.cookie = "aup_math=" + Math01;
    aup_m();
    _0er();
}
function aup_m() {
    return aup_math;
}
/*当点击调用此方法后,将悬浮窗口显示出来,背景变暗*/
// <!-- 该代码定义了四个 JavaScript 函数： -->
function displayWindow() {
    /*悬浮窗口的显示,需要将display变成block*/
    document.getElementById("window").style.display = "block";
    /*将背景变暗*/
    document.getElementById("shadow").style.display = "block";
}

/*当点击调用此方法,将悬浮窗口和背景全部隐藏*/
function hideWindow() {
    document.getElementById("window").style.display = "none";
    document.getElementById("shadow").style.display = "none";
}
function hideiput() {
    document.getElementById("input_window").style.display = "none";
    document.getElementById("shadow_down").style.display = "none";
}
function showipyt() {
    document.getElementById("input_window").style.display = "block";
    document.getElementById("shadow_down").style.display = "block";
}
