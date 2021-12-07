// This was provided by CodeAcademy for their exercise, not applicable here
// import {getUserChoice,f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12} from './resources'

// I wrote these to get the script to compile correctly
function getUserChoice() { return Math.random(); }
function f1() { return 'kiwi.jpg'; }
function f2() { return 'strawberry.jpg'; }
function f3() { return 'apple.jpg'; }
function f4() { return 'starfruit.jpg'; }
function f5() { return 'pear.jpg'; }
function f6() { return 'orange.jpg'; }
function f7() { return 'blueberry.jpg'; }
function f8() { return 'lime.jpg'; }
function f9() { return 'lemon.jpg'; } // originally returned number
function f10() { return 'cherry.jpg'; }
function f11() { return 'dragonfruit.jpg'; }
function f12() { return 'passionfruit.jpg'; }

// By providing a type after the arguments,
// you can define the return type of the function
function returnFruit() : string {
  let num = getUserChoice();
  switch(num){
    case 1 : return f1();
		case 2 : return f2();
		case 3 : return f3();
		case 4 : return f4();
		case 5 : return f5();
		case 6 : return f6();
		case 7 : return f7();
		case 8 : return f8();
		case 9 : return f9();
		case 10 : return f10();
		case 11 : return f11();
		case 12 : return f12();
  }
  return 'durian.jpg'
}

console.log(returnFruit());
// The problematic function is f9()