window.onload = function show() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
    ajax_.open('get', 'http://localhost:3000/report/new');

    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                render(data);
            }
        }
    }
}



function render(data_) {
    var str = '';
    for (var i of data_) {
        str += `
        <li>
        <a href="../guid/detail.html">
            <img src="${i.img}" width="700" height="412" />
            <div class="info">
                <p class="title">${i.text}</p>
                <div class="btm fix">
                    <div class="userInfo left">
                        <span class="avt"></span>
                        <span class="name">${i.uName}</span>
                        <span class="time">${i.endTime}</span>
                    </div>
                    <div class="right icon">
                        <span class="zan">3</span>
                        <span class="look">3</span>
                    </div>
                </div>
            </div>
        </a>
    </li>
        `;
    }
    var ul = document.getElementById('myDiv');
    ul.innerHTML = str;
}