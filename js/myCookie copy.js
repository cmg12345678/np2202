//封装cookie
//-------------------------
//第一步  setCookie()——创建添加cookie  键名key 值val 时间time
function setCookie(key, val, time) {
    var date = new Date()
    date.setDate(date.getDate() + time)
    document.cookie = `${key}=${val};expires=${date}`
}

//第二步 getCookie()——获取cookie
function getCookie(key) {
    var arry = document.cookie.split('; ')
    for (var item of arry) {
        var newArry = item.split('=')
        if (newArry[0] == key) {
            return newArry[1]
        }
    }
}


//第三步 removeCookie()——删除cookie
function removeCookie(key) {
    // 调用当前的设置setCookie  把时间改成-1 
    // 相当于调用function setCookie(key, val, time)
    this.setCookie(key, '', -1);
}

//清除 clearCookie()——清除cookie
function clearCookie() {
    var arry = document.cookie.split('; ')
    for (var item of arry) {
        var newArry = item.split('=')
        this.setCookie(newArry[0], '', -1)
    }
}

