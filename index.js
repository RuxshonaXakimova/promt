let name = prompt('What is your name?').trim();

if (name.length % 2 === 0) {
   alert("You're welcome");
} else {
    alert("Go home");
}




let number = prompt('Enter any number').trim()

if (number % 2 === 0) {
    alert("even");
} else {
    alert("odd");
}



let season = +prompt('Enter number of month');

switch (season) {
    case 1:
    case 2:
    case 12:
        alert("It's winter")
        break;

    case 3:
    case 4:
    case 5:
        alert("It's spring")
        break;

    case 6:
    case 7:
    case 8:
        alert("It's summer")
        break;

    case 9:
    case 10:
    case 11:
        alert("It's autumn")
        break;
}