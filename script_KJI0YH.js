function createWindow() {
    winDiv = document.createElement("div");
    winDiv.innerHTML = "<div id=\"orderModal\" class=\"modal\">\n" +
        "  <div class=\"modal-content\">\n" +
        "    <span class=\"close\">&times;</span>\n" +
        "    <div><p>Registration</p></div>\n" +
        "    <div class=\"namebox\"><span>Name</span><input type=\"text\"></div>\n" +
        "    <div class=\"emailbox\"><span>Email</span><input type=\"text\"></div>\n" +
        "    <div class=\"phonebox\"><span>Phone</span><input type=\"text\"></div>\n" +
        "    <div><input id=\"modal-send\" class = \"submit\" type=\"submit\" value=\"send\"></div>\n" +
        "  </div>\n" +
        "</div>";
    document.body.append(winDiv);
}

function createSuccess() {
    winSuc = document.createElement("div");
    winSuc.innerHTML = "<div id=\"orderSuc\" class=\"modal\">\n" +
        "  <div class=\"modal-content\">\n" +
        "  <span>Текст об успешной отправке</span>\n" +
        "  </div>\n" +
        "</div>";
    document.body.append(winSuc);
    return winSuc;
}

function createDone() {
    winDone = document.createElement("div");
    winDone.innerHTML = "<div id=\"orderDone\" class=\"modal\">\n" +
        "  <div class=\"modal-content\">\n" +
        "  <span>Заказ осуществлен клоун</span>\n" +
        "  </div>\n" +
        "</div>";
    document.body.append(winDone);
    return winDone;
}

function closeWindow(modal){
    modal.style.display = "none";
}

function showWindow(win) {

    if (win == modal && ordered) {
        showWindow(done);
        let timerID = setTimeout(closeWindow, 5000, done);
    }
    else
        win.style.display = "block";
}

function sendWindow(success) {
    //validation

    closeWindow(modal);
    showWindow(success);
    ordered = true;
    let timerID = setTimeout(closeWindow, 5000, success);
}

winDiv = createWindow();
winSuc = createSuccess();
winDone = createDone();

var modal = document.getElementById("orderModal");
var success = document.getElementById("orderSuc");
var done = document.getElementById("orderDone");
var ordered = false;

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