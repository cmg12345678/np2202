// 1.验证手机号是否合法
// 1.获取输入框内容
var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');
var t4 = document.getElementById('t4');
var t5 = document.getElementById('t5');
var t6 = document.getElementById('t6');
var xx = document.getElementsByClassName('xx');
var agg = 0;
t1.oninput = function () {
    var arr_ = /^1[3578]\d{9}$/;
    // console.log(arr_.test(t1.value));
    if (!arr_.test(t1.value)) {
        // alert('请输入正确的手机号');
        xx[0].style.color = 'red'
        xx[0].innerHTML = '请输入正确的手机号';
    } else {
        xx[0].style.color = 'yellowgreen'
        xx[0].innerHTML = '输入正确';
        agg++;
        fu(agg)
    }
}

t2.onfocus = function () {
    xx[1].style.color = 'gray';
    xx[1].innerHTML = '图片校验';
}

t2.onblur = function () {

    if (t2.value == '') {
        xx[1].style.color = 'red';
        xx[1].innerHTML = '校验不能为空';
        return false;
    } else if (t2.value != 'r2B7') {
        xx[1].style.color = 'red';
        xx[1].innerHTML = '校验不正确';
        return false;
    } else {
        xx[1].style.color = 'green';
        xx[1].innerHTML = '校验正确';
        return true;
    }
}

t3.oninput = function () {
    if (t3.value != obj) {
        xx[2].style.color = 'red'
        xx[2].innerHTML = '验证码错误';
    } else {
        xx[2].style.color = 'yellowgreen'
        xx[2].innerHTML = '输入正确';
        agg++;
        fu(agg)
    }
}


t4.oninput = function () {
    var arr_ = /[\u4e00-\u9fa5]/gm;

    if (!arr_.test(t4.value)) {

        xx[3].style.color = 'red'
        xx[3].innerHTML = '请输入正确的用户名';
    } else {
        xx[3].style.color = 'yellowgreen'
        xx[3].innerHTML = '输入正确';
        agg++;
        fu(agg)
    }
}

t5.oninput = function () {
    var arr = /^\w{6,10}$/;
    if (!arr.test(t5.value)) {
        xx[4].style.color = 'red'
        xx[4].innerHTML = '请设置正确格式的密码:6-10位数';
    } else {
        xx[4].style.color = 'yellowgreen'
        xx[4].innerHTML = '输入正确';
        agg++;
        fu(agg)
    }
}

t6.oninput = function () {
    if (t6.value != t5.value) {
        xx[5].style.color = 'red'
        xx[5].innerHTML = '输入错误，请和上方密码一致';
    } else {
        xx[5].style.color = 'yellowgreen'
        xx[5].innerHTML = '输入正确';
        agg++;
        fu(agg)
    }
}

var tableText = document.getElementsByClassName('getCode')[0];
var obj;
var timer;
tableText.onclick = function () {
    tableText.style.pointerEvents = "none";
    var num_ = 60;
    obj = [];
    clearInterval(timer)
    timer = setInterval(function () {
        num_--;
        if (num_ == 0) {
            clearInterval(timer)
            num_ = 60;
            tableText.style.pointerEvents = "";
            tableText.innerHTML = '重新发送'
        } else {
            tableText.innerHTML = num_ + '秒后可重新发送';
        }
        if (num_ == 57) {
            for (var i = 0; i < 4; i++) {
                var num = Math.floor(Math.random() * 10);
                obj.push(num)
            }
            obj = obj.join('');
            alert('你的验证码为：' + obj);
        }
    }, 1000)
}

//   button按钮
var btn = document.getElementById('submit');

btn.onclick = function () {
    // console.log('&&&&&&&&&&&&&');
    if (t1.onblur() && t2.onblur() && t3.onblur() && t4.onblur() && t5.onblur()) {
        // console.log('66666666666666');
        alert('注册成功');
        t1 = document.getElementById('t1').value;
        t4 = document.getElementById('t4').value;
        t5 = document.getElementById('t5').value;
        setCookie('手机号', t1);
        setCookie('用户名', t4);
        setCookie('密码', t5);

    }
}
var submit = document.getElementById('submit');
submit.onclick = function () {
    submit.innerHTML = '注册成功'
}
