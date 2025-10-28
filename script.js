console.log( "Привет, мир!" );

if (!sessionStorage.getItem('greetingShown')) {
    let userName = prompt("Как вас зовут?");
    if (userName) {
        alert("Привет, " + userName + "!");
    }
    sessionStorage.setItem('greetingShown', 'true');
}

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