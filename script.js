console.log( "Привет, мир!" );

let userName = prompt( "Как вас зовут?" );
alert( "Привет, " + userName + "!" );

const myButton = document .getElementById( "myBtn" );
myButton.addEventListener( "click" , function () {   alert( "Кнопка нажата!" ); });

let clickCount = 0;
const clickCounterBtn = document.getElementById("clickCounterBtn");
const clickCountDisplay = document.getElementById("clickCount");
clickCounterBtn.addEventListener("click", function() {
    clickCount++;
    console.log("Количество кликов: " + clickCount);
    clickCountDisplay.textContent = clickCount;
});