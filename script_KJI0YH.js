function createWindow() {
    winDiv = document.createElement("div");
    winDiv.innerHTML = "<div id=\"orderModal\" class=\"modal\">\n" +
        "  <div class=\"modal-content\">\n" +
        "    <span class=\"close\">&times;</span>\n" +
        "    <p>Registraion</p>\n"+
        "    <div class=\"namebox\"><input type=\"text\" id=\"namebox\" value='' required='required'><span>Name</span></div>\n" +
        "    <div class=\"emailbox\"><input type=\"text\" id=\"emailbox\" value='' required='required'><span>Email</span></div>\n" +
        "    <div class=\"phonebox\"><input type=\"text\" id=\"phonebox\" value='' required='required'><span>Phone</span></div>\n" +
        "    <div><input id=\"modal-send\" class = \"submit\" type=\"submit\" value=\"send\"></div>\n" +
        "  </div>\n" +
        "</div>";
    document.body.append(winDiv);
}

function createSuccess() {
    winSuc = document.createElement("div");
    winSuc.innerHTML = "<div id=\"orderSuc\" class=\"modal\">\n" +
        "  <div class=\"modal-content\">\n" +
        "  <span>Successfully sent</span>\n" +
        "  </div>\n" +
        "</div>";
    document.body.append(winSuc);
    return winSuc;
}

function createDone() {
    winDone = document.createElement("div");
    winDone.innerHTML = "<div id=\"orderDone\" class=\"modal\">\n" +
        "  <div class=\"modal-content\">\n" +
        "  <span>The order has already been made</span>\n" +
        "  </div>\n" +
        "</div>";
    document.body.append(winDone);
    return winDone;
}

function closeWindow(modal){
    modal.style.display = "none";
}

function showWindow(win) {
    let ordered = sessionStorage.getItem('ordered');
    console.log("ordered", ordered);
    console.log(ordered === 'true');
    if (win === modal && ordered === 'true') {
        showWindow(done);
        let timerID = setTimeout(closeWindow, 5000, done);
    }
    else
        win.style.display = "block";
}

function validateName(name) {
    var reg = /(\s*[а-яА-ЯёЁa-zA-Z])+$/;

    if (reg.test(name) == false) {
        alert('Enter correct name');
        return false;
    }
    else
        return true;
}

function validateEmail(email){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(reg.test(email) == false) {
        alert('Enter correct e-mail');
        return false;
    }
    else
        return true;
}

function validatePhone(phone) {
    var reg = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/;

    if(reg.test(phone) == false) {
        alert('Enter correct phone');
        return false;
    }
    else
        return true;
}

function sendWindow(success) {
    //validation
    let name = document.getElementById("namebox").value;
    let email = document.getElementById("emailbox").value;
    let phone = document.getElementById("phonebox").value;

    if (validateName(name) && validateEmail(email) && validatePhone(phone)) {
        closeWindow(modal);
        showWindow(success);
        sessionStorage.setItem('ordered', true);
        let timerID = setTimeout(closeWindow, 5000, success);
    }
}

winDiv = createWindow();
winSuc = createSuccess();
winDone = createDone();

var modal = document.getElementById("orderModal");
var success = document.getElementById("orderSuc");
var done = document.getElementById("orderDone");

if (!sessionStorage.getItem('ordered'))
    sessionStorage.setItem('ordered', false);


var btn = document.getElementsByClassName("btnOrder");
for (let i = 0; i < btn.length; i++)
    btn[i].addEventListener("click", () => { showWindow(modal); });


var span = document.getElementsByClassName("close")[0];
span.addEventListener("click", () => { closeWindow(modal); });

var send = document.getElementById("modal-send");
send.addEventListener("click", () => {sendWindow(success); });

window.onclick = function(event) {
    if (event.target == modal) {
       closeWindow(modal);
    }
}

window.onclose = () => {
    sessionStorage.clear();
}