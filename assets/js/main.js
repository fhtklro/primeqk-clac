docTextInputNumber = document.getElementById("textInputNumber")

// 「ダブルタップで拡大」を無効
document.addEventListener("dblclick", function(e){ e.preventDefault();}, { passive: false });

// 文字の追加
function addText(c) {
    docTextInputNumber.value += c;

}

function delText() {
    docTextInputNumber.value = docTextInputNumber.value.slice(0, -1)
} 