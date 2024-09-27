// var name = "Minh";

// alert("Xin chào " + name);

const pi = 3.14; 

var a = 10;
var b = 5;

var chuViHCN = (a+b) * 2;

function calculateSum(x1, x2) {
    return x1 + x2;
}

// So sánh ==
var ketQua = a == b;    //  --> false

// So sánh
var ketQua = (a >= 5) && ((0.1 + 0.2) == 0.3); 
// ra false vì 0.1 + 0.2 = 0.3000000000000004

// Hàm in ra thông tin sinh viên
function getInfo(studentInfo) {
    var info = "Name: " + studentInfo.name + "<br>" 
    + "Age: " + studentInfo.age + "<br>"
    + "Sex: " + studentInfo.sex + "<br>"
    + "City: " + studentInfo.address.city + "<br>"
    + " District: " + studentInfo.address.district +"<br>"
    + ("Studying: " + studentInfo.studying ? "Đang học" : "Đã nghỉ") + "<br>";
    document.write(info)
}

