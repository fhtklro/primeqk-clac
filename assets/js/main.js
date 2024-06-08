docTextInputNumber = document.getElementById("textInputNumber")

// 「ダブルタップで拡大」を無効
document.addEventListener("dblclick", function(e){ e.preventDefault();}, { passive: false });

// 文字の追加
function addText(c) {
    docTextInputNumber.value += c;

}

// // ボタン
// docButton_1.addEventListener("click", addText("1"));

// docButton_2.onclick = () => {
//     addText("2");

// }

// docButton_3.onclick = () => {
//     addText("3");

// }

// docButton_4.onclick = () => {
//     addText("4");

// }

// docButton_5.onclick = () => {
//     addText("1");

// }

// docButton_6.onclick = () => {
//     addText("6");

// }

// docButton_7.onclick = () => {
//     addText("7");

// }

// docButton_8.onclick = () => {
//     addText("8");

// }

// docButton_9.onclick = () => {
//     addText("9");

// }

// docButton_10.onclick = () => {
//     addText("10");

// }

// docButton_11.onclick = () => {
//     addText("11");

// }

// docButton_12.onclick = () => {
//     addText("12");

// }

// docButton_13.onclick = () => {
//     addText("13");

// }

// docButton_X.onclick = () => {
//     addText("?");

// }

