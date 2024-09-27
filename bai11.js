var studentInfo = {
    name: "Minh",
    age: 20
}
studentInfo.birth = new Date("8/23/2004");

document.write(studentInfo.birth.getFullYear() + "<br>");       // Lấy Năm
document.write(studentInfo.birth.getMonth() + "<br>");          // Lấy Tháng
document.write(studentInfo.birth.getDate() + "<br>");           // Lấy Ngày
document.write(studentInfo.birth.getDay() + "<br>");            // Lấy Thứ


// Mảng
// var arrayObj = new Array(); (Như cái dưới mà cách viết khác nhau)
var arr = [1, 2, "three", true, "five"];

function checkArray(_arr) {
    return Array.isArray(_arr);
};

document.write(checkArray(arr));

