
function create_window()
{
    let winDiv = document.createElement("div");
    winDiv.className = "aq_modal";

    let divContent = document.createElement("div");
    divContent.className = "aq_modal_content";

    let spanClose = createSpanText('close', '×');

    let pReg = document.createElement("p");
    pReg.appendChild(document.createTextNode("Registration"));

    let divName = createInputBox('namebox', 'text', 'namebox', '', 'required', "Name");
    let divEmail = createInputBox('emailbox', 'text', 'emailbox', '', 'required', "Email");
    let divPhone = createInputBox('phonebox', 'text', 'phonebox', '', 'required', "Phone");
    let divSend = createInputBox('sendbox', 'submit', 'modal-send', 'send', '', '');

    divContent.append(spanClose, pReg, divName, divEmail, divPhone, divSend);
    winDiv.append(divContent);
    document.body.append(winDiv);
    console.log(winDiv);
    return winDiv;
}

function show_window()
{
    console.log("Hello!!!");
    
    modal.style.display = "block";

    let timerID = setTimeout(close_window, 5000);
}
function close_window()
{
    modal.style.display = "none";
}

console.log("Init!!!");
create_window();

var btns = document.getElementsByClassName("aq_table_button");
for (let i = 0; i < btns.length; i++) {
    //let parent = btns[i].parentElement;

    btns[i].addEventListener("click", () => {
        show_window();
    });
};

