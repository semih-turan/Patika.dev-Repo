// User input
var nameInput = prompt("What's your name?");
var myName =document.getElementById("myName");

// Check user input
var regEx = /[^0-9]+$/;
    if (nameInput.match(regEx)){
        myName.innerHTML = nameInput;
    }
    else {
        alert("Please re-enter your name")
        location.reload();
    }

// Date and Time Function 

let Days = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cumar",
    "Cumartesi",
    "Pazar"
];

let Months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
];

function showTime(){
    const currentTime = new Date()
    var second = currentTime.getSeconds();
    var minute = currentTime.getMinutes();
    var hour = currentTime.getHours();
    var day = Days[currentTime.getDay()];
    var date = currentTime.getDate();
    var month = Months[currentTime.getMonth()];
    var year = currentTime.getFullYear();

    document.getElementById("myClock").innerHTML =
    year +
    " " +
    month +
    " " + 
    day +
    " " +
    hour +
    ":" +
    minute +
    ":" +
    second; 
  setTimeout(showTime, 1000);
}
showTime();