function bigger () {
    document.getElementById("text_box").style.fontSize = "24pt";
}

function decorate () {
    let elementStyle = document.getElementById("text_box").style;

    elementStyle.fontWeight = "bold";
    elementStyle.color = "blue";
    elementStyle.textDecoration = "underline";
}

function boring () {
    let elementStyle = document.getElementById("text_box").style;

    elementStyle.fontWeight = "initial";
    elementStyle.color = "initial";
    elementStyle.textDecoration = "none";
}

function moo () {
    let text = document.getElementById("text_box").value;

    let sentences = text.split(".");

    text = sentences.join(". -Moo ");

    document.getElementById("text_box").value = text;
}