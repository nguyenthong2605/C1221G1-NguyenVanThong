let inputWidght;
let inputHeight;
inputWidght = prompt("Chọn chiều rộng");
inputHeight = prompt("Chọn chiều cao");
let widght = parseInt(inputWidght);
let height = parseInt(inputHeight);
let area = widght * height;
document.write('Chiều rộng: ' +inputWidght);
document.write("<br>");
document.write('Chiều cao: ' +inputHeight);
document.write("<br>");
document.write('Diện tích hình chữ nhật: ' + area)