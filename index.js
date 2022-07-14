let namee = prompt('What is your name')
let age = prompt('What is your age')

document.querySelector('h4').innerHTML = 'Hello ' + namee.slice(0, 6).toLocaleUpperCase();
document.querySelector('h5').innerHTML = age
document.querySelector('h5').style.color = 'green';
document.getElementsByTagName('p')[3].style.color = 'yellow';
document.querySelectorAll('a')[2].style.color = 'black'
document.querySelectorAll('a')[4].style.color = 'green'
document.querySelectorAll('a')[1].style.color = 'black'
document.querySelectorAll('a')[3].style.color = 'green'

// var number = Math.floor(Math.random() * 100) + 1;
// console.log(number)

// if (number >= 70 && number <= 100) {
//     console.log('Excellent')
// } else if (number > 40 && number < 70) {
//     console.log(" fair ")
// } else { console.log('not a good match') }



// let randomDiceImage = 'dice' + randomNumber1 + '.png';
// let randomImageSource = 'images/' + randomDiceImage;
// let image1 = document.querySelectorAll('img')[0];
// image1.setAttribute('src', randomImageSource);



// document.querySelectorAll('img')[1].setAttribute('src', 'images/dice' + randomNumber2 + '.png');

// let randomNumber1 = Math.floor((Math.random() * 6) + 1);
// let randomNumber2 = Math.floor((Math.random() * 6) + 1);


// if (randomNumber1 > randomNumber2) {
//     document.querySelector('h2').innerHTML = 'Player 1 Wins &#128516';
// }
// else if (randomNumber2 > randomNumber1) {
//     document.querySelector('h2').innerHTML = 'Player 2 Wins &#128525';
// }
// else {
//     document.querySelector('h2').innerHTML = 'DRAW &#10071';
// }

// function getChocolate(strawberry, chocolate, Vanilla) {
//     alert('step outside')
//     alert('step outside')
//     alert('step outside')
//     alert('turn left')
//     alert(' enter shop to buy ' + strawberry + ' plastics of strawberry ice cream')
//     alert(' enter shop to buy ' + chocolate + ' plastics of chocolates ice cream')
//     alert(' enter shop to buy ' + Vanilla + ' plastics of Vanilla ice cream')
//     alert('turn back')
//     alert('turn back')
//     alert('turn back')
//     alert('step outside')
//     alert('step outside')
//     alert('step outside')
// }
// getChocolate(2, 6, 7);



// function bmiCalculator(weight, height) {
//     var bmi = weight / (height * height);
//     if (bmi < 18.5) {
//         return "Your BMI is " + bmi + ", so you are underweight."
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//         return "Your BMI is " + bmi + ", so you have a normal weight."
//     } else if (bmi > 24.9) {
//         return "Your BMI is " + bmi + ", so you are overweight."
//     }

//     //  return 0

// }
// bmiCalculator(80, 2)
// console.log(bmiCalculator)


// function isLeap(year) {

//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return "Leap year."
//             } else {
//                 return "Not leap year."
//             }
//         } else {
//             return "Leap year."
//         }
//     } else {
//         return "Not leap year."
//     }
// }



// var Name = prompt('namee');
// if (Name = Angela) {
//     console.log('name is Angela')
// } else if (name = 'grace')
//     console.log('name is Grace')
// else {
//     console.log('None')
// }
