//!
var number = 5; // inline comment
/* Multi
line
comment*/
number = 9;

//!
/* Data Types ine JS :
undefined : Not defined, like variable not seted yet
null : nothing, set ito be something but tyhat thing is nothing
boolean : true / false
string : text
symbol : unique value
number : number
objet : can store hips of key
*/

var myName = "Mael"
// var can be used in the all the program

myName = 19

let ourName = "learneJS"
// let only in teh scope where you use it

const pi = 3.14
// Never change

//!
var a;
var b = 2;
console.log(a); // null
a = 7;
b = a;
console.log(a); // 7
console.log(b); // 7

//!
var a = 9;
/* 
var a ===> declare it
= 9 ===> initialize it
*/

//! initialize variables
var a = 5
var b = 10
var c = 1
var d = "Je vais "
 
f = a + b + c + c + c + c;
g = d + "y arriver"
d = d + "y arriver"

console.log(f); // 19
console.log(g); //" Je vais y arriver "
console.log(d); //" Je vais y arriver "

//! Case sensitivity in var
var studlyCapVar
var properCamelCase

studlyCapVar = 10
properCamelCase = 5

console.log(properCamelCase); // 5

//! Adding numbers
var sum = 10 + 10 
console.log(sum); // 20

//! Sub numbers
var diff = 45 - 33
console.log(diff); // 12

//! mult numbers
var prod = 8 * 10 
console.log(prod); // 80

//! divide numbers
var quot = 66 / 33
console.log(quot); // 2

//! increment number ( +1 +1 +1 ...)
var myVar = 87
myVar++
console.log(myVar); // 88

//! decrement number ( -1 -1 -1 ...)
var myVar = 87
myVar--
console.log(myVar); // 86

//! decimal numbers
var ourDecimal = 5.7
var myDecimal = 0.009 

decimal = myDecimal + ourDecimal
console.log(decimal); // 5.7090000000000005

//! multiplay Decimals
var prod = 2.0 * 2.5
console.log(prod); // 5

//! divide Decimals
var quot = 4.4 / 2.0
console.log(quot); // 2.2

//! finding a remainder, reliquat 
var reliquat 
reliquat = 11 % 3
console.log(reliquat); // 2

//! Campound Assignment with Augmented Addition
var a = 3
var b = 17 
var c = 12 

a = a + 12
b = 9 + b
c = c + 7 
// You can do the same with +=
a += 12
b += 9
c += 7 
console.log(a); // 15

//! Campound Assignment with Augmented Substraction
var a = 3
var b = 17 
var c = 12 

a = a - 12
b = 9 - b
c = c - 7 
// You can do the same with +=
a -= 12
b -= 9
c -= 7 
console.log(a); // -9

//! Campound Assignment with Augmented Mutltiplication
var a = 3
var b = 17 
var c = 12 

a = a * 12
b = 9 * b
c = c * 7 
// You can do the same with +=
a *= 12
b *= 9
c *= 7 
console.log(a); // 36

//! Campound Assignment with Augmented Division
var a = 3
var b = 17 
var c = 12 

a = a / 12
b = 9 / b
c = c / 7 
// You can do the same with +=
a /= 12
b /= 9
c /= 7 
console.log(a); // 0.25

//! Declare String Variables
var firstName = "Herve"
var lastName = "Dumont"
var myFirstName = "Jean-claude" 
var myLastName = " Convenant"

//!Escaping litteral string . Quote inside a quote
// Using back slash
var myStr =  "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr); // "I am a 'double quoted' string inside 'double quotes'"

//! Quoting Strings with single quote
// Using single and double quotes
var myStr =  'I am a "double quoted" string inside "double quotes"';
console.log(myStr); // "I am a 'double quoted' string inside 'double quotes'"

//! Escape sequencing in Strings
/***
CODE  OUPUT
\'    single quote
\"    double quote
\\    backslash
\n    newline
\r    carriage return
\t    tab
\b    backspace
\f    formfeed
***/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr); /* "FirstLine
                            \SecondLine
                        ThirdLine" 
                    */
 
//! Concatenating strings with + operator
var myStr = " J'ai faim " + "Je mange"
console.log(myStr); // " J'ai faim Je mange"

//! Concatenating strings with += operator    
var ourStr = "I come first "
ourStr += "I come second."                
console.log(ouStr); // "I come first I come second."

//! Constructing Strings with variables
var myName = "Herve"
var myStr = "My name is " + myName + " and I am well"
console.log(myStr); // "My name is Herve and I am well"

//! Appending var to strings
var hibou = "la nuit "
var loup = " le loup hurle "
loup += hibou
console.log(loup); // " le loup hurle la nuit "

//! Find lenght in string 
var lenghName = 0 
var nameDo = "Herve"
lenghName = nameDo.lengh
console.log(lenghName); // 5

//! string immutability
var myStr = "Jello World"
myStr = "Hello World"
console.log(myStr); // "Hello World"


//! Bracket notationt to find first character in string
var firstLetterNameDo = ""
var nameDo = "Herve"
firstLetterNameDo = nameDo [0]
console.log(firstLetterNameDo); // "H"

//! bracket notation to find nth character in string
var firstLetterNameDo = ""
var nameDo = "Herve"
firstLetterNameDo = nameDo[2]
console.log(firstLetterNameDo); // "r"

//! bracket notation to find the last character in string
var nameDo = "Herve"
var lastLetterOfNameDo = nameDo[nameDo.length - 1]
console.log(lastLetterOfNameDo); // "e"

//! bracket notation to find nth to last character in string
var nameDo = "Herve"
var thirdToLastLetterOfNameDo = nameDo[nameDo.length - 2]
console.log(thirdToLastLetterOfNameDo); // "v"

//! Word Blanks
function wordBlanks (myCommun, myVerb, myAdverb, myAdj) {
    var result = "" 
    result += "The " + myCommun + " " + myVerb + " " + myAdverb + " " + myAdj + " to the restaurant "
    return result
}
console.log(wordBlanks("dog", "ran", "beautifully", "huge")); // "The dog ran beautifully huge to the restaurant "

function wordBlanks (monNomCommun, monVerbe, monAdjectif, monAdverbe) {
    var result = "" 
    result += "Le " + monNomCommun + " " + monVerbe + " " + monAdjectif + " retourné " + " " + monAdverbe  + " dans le port "
    return result
}
console.log(wordBlanks("bateau", "s est", "apparement", "hier")); // "Le bateau s est apparement retourné  hier dans le port "

//! store multiple value in Array
var myArray = ["Béré", 11]
console.log(myArray); // ["Béré" , 11[]

//! Nested Array, multidimensional array
var myArrays = [["Béré", 11 ], [ "Maël", 19]]
console.log(myArrays); // [["Béré", 11 ], [ "Maël", 19]]

//! Acces Array data with index
var myArray = [15,25,35,73]
var myData = myArray [1]
console.log(myData); // 25

//! modify Array data with index
var myArray = [15,25,35,73]
myArray[1] = 19
console.log(myArray); //[15,19,35,73]

//! Acces multidimensioanl arrays with index
var yourArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]]
var yourData = yourArray [2][2] //  3eme case, 3eme numero de la 3eme case 
console.log(yourData); // 9

//! Manipualte Array with push
var manArray = ["simpsons", "american dad"]
manArray.push (["griffins", "south park", 57])
console.log(manArray); //  ["simpsons", "american dad", ["griffins", "south park", 57]]

//! Manipulate Array with pop, remove the laste one
var ourArray = [1,2,3]
var removedFromOurArray = ourArray.pop()
console.log(ourArray); // [1,2]

//! Manipulate Array with shift, remove the first one
var ourArray = [1,2,3]
var removedFromOurArray = ourArray.shift()
console.log(ourArray); // [2,3]

//! Manipulate Array with unshift, add element at the beggining
var ourArray = [1,2,3]
ourArray.unshift(0)
console.log(ourArray); // [0,1,2,3]

var yrArray = [5,6,7]
yrArray.shift()
yrArray.unshift(4)
console.log(yrArray); // [4,6,7]

//! Shopping list
var myList = [["cereal", 3], ["milk"], 2], ["bananas", 3]

//! Write resusable code function
function ourReusableFunction () {
    console.log("Heyyya, Wrold");
}
ourReusableFunction() // Heyya Wrold
ourReusableFunction() // Heyya Wrold
ourReusableFunction() // Heyya Wrold

function reusableFunction() {
     console.log("Hi World");
}

reusableFunction() // Hi World

//! Passing value to function with arguments
function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(10, 5) // 15

//! global scope functions
var myGlobal = 10
function fun1() {
    oopsGlobal = 5
}
function fun2() {
    var output = ""
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal
    }
    console.log(output);
}
fun1()
fun2()

//! Local scope and functions
function myLocalScope () {
    var myVar = 5;
    console.log(myVar); // 5
}
myLocalScope()
console.log(myVar); // Error

//! Global vs Local scope in function . Can have the same name
var outerWear = "T-shirt"
function myOutfit () {
    return outerWear
}
console.log(myOutfit()); // T-shirt

var outerWear = "T-shirt"
function myOutfit () {
    var outerWear = "sweater"
    return outerWear
}
console.log(myOutfit()); // Sweater
console.log(outerWear); // T-shirt

//! Return a Value from a function with return
function minusSeven (num) {
return num - 7
}
console.log(minusSeven(10)); // 3
console.log(minusSeven(27)); // 20

//! Understanding undefined value restunet from a  function
var sum = 0
function addthree (3) {
    sum = sum + 3
}
console.log(sum); // 0

//! Assignement with returned value
var changed = 0
function change (num) {
    return (num + 5) / 3
}
changed = change(10)
console.log(changed); // 5 ==> 0 + 15 / 3 = 5

var processed = 0
function processArg (num) {
    return (num + 3) / 5
}
processed - processArg(7)
console.log(processed); // 0

//! Stand in Line
function nextInLine (arr, item) {
    arr.push(item)
    return arr.shift()
}
var testArr = [1,2,3,4,5]
console.log("Before: " + JSON.stringify(testArr)); // "Before: [ 1,2,3,4,5]"
console.log(nextInLine(testArr, 6)); // 1
console.log("After: " + JSON.stringify(testArr)); // After [2,3,4,5,6]"

function modifChiffre (arr, item) {
    arr.push(item)
    return arr.shift()
}
var testChiffre = [1,2,3,4,5,6,7,8]
console.log("Before: " + JSON.stringify(testChiffre)); // "Before: [ 1,2,3,4,5,6,7,8]"
console.log(modifChiffre(testChiffre, 9)); // 1
console.log("After: " + JSON.stringify(testChiffre)); // After [2,3,4,5,6,7,8,9]"

//! Boolean Value. True or False
function welcomeToBooleans () {
    return false
}
console.log(WelcomeToBooleans); // false

//! Use conditional logic with if
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return " Yes, true"
    }
    return " No, false"
}
console.log(trueOrFalse(true)); // "Yes, true "

//! Comparaison withg equality operator. == To check if. the == allow string to be converted as a number
function testEqual(val) {
    if (val == 12) {
    return "Equal"
    }
        return "Not Equal"
}
console.log(testEqual(10)); " Not Equal"
console.log(testEqual(12)); " Equal"

//! Comparaison with strict equality operator === Check the type too
function testEqual(val) {
    if (val == 12) {
    return "Equal"
    }
        return "Not Equal"
}
console.log(testEqual(12)); " Equal"
console.log(testEqual("12")); " Not Equal"
console.log(testEqual(10)); " Not Equal"

//! Practice comparing value
function compareEquality(a, b) {
    if (a === b ) {
        return "Equal"
    }
    return "Not Equal"
}
console.log(compareEquality(10, "10")); // not equal

function compareEquality(a, b) {
    if (a == b ) {
        return "Equal"
    }
    return "Not Equal"
}
console.log(compareEquality(10, "10")); // equal

//! Comaprison with teh inequality operator !=
function testNotEqual(val) {
    if(val != 99) {
        return "Not equal"
    }
    return "Equal"
}
console.log(testNotEqual(10)); // Not equal

function testNotEqual(val) {
    if(val != 99) {
        return "Not equal"
    }
    return "Equal"
}
console.log(testNotEqual(99)); // Equal
console.log(testNotEqual("99")); // Equal

//! Comparison with the strict inequality operator !==
function testStrickNotEqual (val) {
    if (val !== 17) {
        return "Not Equal"
    }
    return "Equal"
}
console.log(testStrictNotEqual(17)); // Equal
console.log(testStrictNotEqual("17")); // Not Equal

//! COMPARISON WITH LOGICAL AND OPERATOR >
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100"
    }
    if (val > 10) {
        return "over 10"
    }
    return "10 or Under"
}
console.log(testGreaterThan(10)); // 10 or under
console.log(testGreaterThan(35)); // over 10
console.log(testGreaterThan(2535)); // over 100

//! Comparison with the greater than or Equal operator >=
function testGreaterOrEqual(val) {
    if (val >= 100) {
        return "Over 100"
    }
    if (val >= 10) {
        return "over 10"
    }
    return "10 or Under"
}
console.log(testGreaterOrEqual(10)); // over 10
console.log(testGreaterOrEqual(35)); // over 10
console.log(testGreaterOrEqual(2535)); // over 100

//! Comparison with less than operator
function testLessThan(val) {
    if (val < 25) {
        return "under 25"
    }
    if (val < 55) {
        return "under 55"
    }
    return "55 or over"
}
console.log(testLessThan(10)); // under 25
console.log(testLessThan(35)); // under 55
console.log(testLessThan(2535)); // 55 or over

//! Comparison with lmess tahn or equal operator
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller than or equal to 12"
    }
    if (val < 24) {
        return "Smaller than or Equal to 24"
    }
    return "More than 24"
}
console.log(testLessOrEqual(8)); // Smaller than or equal to 12
console.log(testLessOrEqual(19)); //Smaller than or Equal to 24
console.log(testLessOrEqual(35)); // More than 24

//! Comparison with the logical and operator
function testLogicalAnd(val) {
    if (val <= 50) {
        if (val >= 25) {
            return "Yes"
        }
    }
    return "No"
}    
console.log(testLogicalAnd(10)) // No

    //? This can be written easily that way wit && operator, means AND
    function testLogicalAnd(val) {
        if (val <= 50 && val >= 25) {
            return "Yes"
        }
        return "No"
    }    
    console.log(testLogicalAnd(35)) // Yes

//! Comparison with Logical or operator
function testLogicalOr(val) {
    if (val < 10) {
        return "Outside"
    }
    if (val > 20) {
        return "Outside"
    }
    return "Inside"
}
console.log(testLogicalOr(15)); // Inside

    //? This can be written easily that way wit || operator, means OR
    function testLogicalOr(val) {
        if (val < 10 || val > 20) {
            return "Outside"
        }
        return "Inside"
    }
    console.log(testLogicalOr(28)); // Outside

//! Else statement
function testElse(val) {
    var result = ""
    if (val > 5) {
        result = "Bigger than 5"
    }
    if (val <= 5) {
        result = "5 or smaller"
    }
    return result
}
console.log(testElse(4)); // 5 or smaller

    //? This can be written easily that way with ELSE
    function testElse(val) {
        var result = ""
        if (val > 5) {
            result = "Bigger than 5"
        } else {
            result = "5 or smaller"
        }
        return result
    }
    console.log(testElse(14)); // Bigger than 5

//! Else if Statement  
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }
    if (val < 5) {
        return "Smaller than 5";
    }
    return "Between 5 and 10";
}
console.log(testElseIf(12)); // Greater than 10

    //? This can be written easily that way with ELSE IF
    function testElseIf(val) {
        if (val > 10) {
        return "Greater than 10";
        } else if (val < 5) {
        return "Smaller than 5";
        } else { 
        return "Between 5 and 10";
        }
    }
    console.log(testElseIf(12)); // Greater than 10

//! Logical order in If statement. If the first condition is meet, it doent check for the other ones. Order is important with else if
function testElseIfOrder(val) {
    if (val < 10) {
    return "Less than 10";
    } else if (val < 5) {
    return "Less than 5";
    } else { 
    return "Greater than or equal to 10";
    }
}
console.log(testElseIfOrder(4)); // Less than 10

    //? With good order ------------------
    function testElseIfOrder(val) {
        if (val < 5) {
        return "Less than 5";
        } else if (val < 10) {
        return "Less than 10";
        } else { 
        return "Greater than or equal to 10";
        }
    }
    console.log(testElseIfOrder(4)); // Less than 5

//! Chaining If Else statement
/* Write chained if/else if statement to fullfill the following conditions
num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return " Large"
num >= 20 - return "Huge"
*/

function testSize (num) {
    if (num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large" 
    } else (num <=20) 
        return "Huge"
}
console.log(testSize(18)); // Large
console.log(tesSize(2)); // Tiny

//! Golf Code LA DIFF donne le resultat
 var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "You suck, go home"]
 function golfScore(par, strokes) {
     if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par ) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4] 
    } else if (strokes == par + 2) {
        return names[5]
    } else if (strokes == par + 3) {
        return names[6]
    }
}
console.log(golfScore(2, 4)); // Double boggey
console.log(golfScore(0, 3)); // You suck, go home
console.log(golfScore(3,1)); // Hole-in-one
console.log(golfScore(2,0)); // Eagle


//! Switch statements    Switch test the value
function caseInSwitch (val) {
    var answer = ""
    switch(val) {
        case 1:
            answer = "alpha"
            break;
        case 2:
            answer = "beta"
            break;
        case 3:
            answer = "gamma"
            break;
        case 4:
            answer = "delta"
            break;
    }
    return answer
}
console.log(caseInSwitch(1)); // alpha

//! Default Option in Switch Statement
function switchOfStuff(val) {
    var answer = ""
    switch (val) {
        case "a":
            answer = "apple";
            break
        case "b":
            answer = "bird"
            break
        case "c":
            answer = "cat"
            break  
        default:
            answer = "stuff"          
            break
    }
    return answer
}
console.log(switchOfStuff("b")); // "bird"
console.log(switchOfStuff(5)); // ""
    //? If you add Default 
    console.log(switchOfStuff("b")); // "bird"
    console.log(switchOfStuff(5)); // "stuff"

//! multiple identical option in switch statement. Multiple input give same output
function sequentialSizes(val) {
    var answer = ""
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low"
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid"
            break;
        case 7:
        case 8:
        case 9:
            answer = "High"
            break;        
    }
    return answer
}
console.log(sequentialSizes(5)); // Mid
console.log(sequentialSizes(4)); // Mid
console.log(sequentialSizes(8)); // High
console.log(sequentialSizes(10)); // ""

//! Replacing If Else Chains with Switch. Sometime switch can be an easyest way to undertsand the code
function chainToSwitch(val) {
    var answer = ""
    if (val ==="bob") {
        answer = "Marley"
    } else if (val === 42) {
        answer = "The Answer"
    } else if (val === 1) {
        answer = "there is no #1"
    } else if (val === 99) {
        answer = "baloons"
    } else if (val === 7) {
        answer = "Seven"
    }
    return answer
}
console.log(chainToSwitch(42)); // "The answer"
console.log(chainToSwitch(35)); // ""

    //? Else if to Switch ----------- 
    function chainToSwitch(val) {
        var answer = ""

        switch(val) {
            case "bob":
                answer = "Marley"
                break
            case 42:
                answer = "The answer"  
                break
            case 99:
                answer = "baloons"
                break
            case 7:
                answer = "seven"      
                break
            default:
                answer = "par default"
                break        
        }
        return answer
    }
    console.log(chainToSwitch(42)); // undefined
    console.log(chainToSwitch(35)); // undefined 

//! Returning booleans Value from functions
function isLess (a, b) {
    if (a < b) {
        return true 
    } else {
        return false
    }
}
console.log(isLess(10, 15)); // true

    //? MAke it booleans
    function isLess(a, b) {
        return a < b
    }
    console.log(isLess(10, 15)); // true

//! Returning early pattern from functions
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined
    }
  return 6
}
console.log(abTest(2,-2)); // undefined

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined
    }
  return 6
}
console.log(abTest(2,2)); // 6

//! Counting cards 
var count = 0
function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++
            break;
        case 10:   
        case "J":   
        case "Q":
        case "K":   
        case "A":
            count--
            break;    
    }

    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'Bet'
    }
    return count + " " + holdbet
}
cc(2); cc('K'); cc(10); cc('K'); cc('A');cc(3); cc(3); cc(4); cc(5); // Carte sortie
console.log(cc(count)); // 1 Bet

//! Build JS Objects
var ourDog = { 
    "name":"Camper"
    "legs": 4
    "tails": 1
    "friends": ["everything"]
}

var myDog = { 
    "name":"Quincy"
    "legs": 3
    "tails": 2
    "friends": []
}

//! Accesing Object with dot notation
var testObj = {
    "hat": "ballcap"
    "shirt": "jersey"
    "shoes": "cleats"
}
var hatValue = testObj.hat
var shirtValue =  testObj.shirt

//! Accessing Object with brakcet notation. You HAVE tyo use it if there is a space
var testObj = {
    "a hat": "ballcap"
    "the shirt": "jersey"
    "the shoes": "cleats"
}
var hatValue = testObj["a hat"]
var shirtValue =  testObj["the drink"]

//! Accessing Object with varibales
var testObj = {
    12: "Namath"
    14: "Montana"
    19: "Unitas"
}
var playerNumber = 16
var player = testObj[playerNumber]

//! Updating Obj properties
var ourDog = { 
    "name":"Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"],
}
ourDog.name = "Happy Camper"

var myDog = { 
    "name":"Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
}
myDog.name = "Happy Coder"

console.log(ourDog.name) // Happy Camper
console.log(myDog.name) // Happy Coder
    
//! Add new propertie to an object
var ourDog = { 
    "name":"Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"],
}
ourDog.bark = "bow bow"

var myDog = { 
    "name":"Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
}
myDog['bark'] = "woof!"
console.log(ourDog.bark) // bow bow
console.log(myDog.bark) // woof!

//! Delete properties from an Object
var ourDog = { 
    "name":"Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"],
    "bark": "bow bow"
}
delete ourDog.bark 

//! Using object for lookup
function phoneticLookup(val) {
    var result = ""

    switch(val) {
        case "alpha":
            result = "Adams"
            break
        case "bravo":
            result = "Boston"   
            break
        case "Clpha":
            result = "Cdams"
            break
        case "Dravo":
            result = "Doston"   
            break
        case "Elpha":
            result = "Edams"
            break
        case "Fravo":
            result = "Foston"   
            break        
    }   
}
    //? Using object -----------------
    function phoneticLookup(val) {
        var result = ""
    
        var lookup = {
            "alpha": "Adams"
            "bravo": "Boston"
            "charlie": "Chicago"
            "delta": "Denver"
        }
        result = lookup[val]
        return result
    }
    console.log(phoneticLookup("charlie")); // Chicago

    //! Testing object for properties

var myObj = { 
    gift: "pony",
    pet: "kitten", 
    bed: "sleigh"
}
function checkObj(checkProp) {
    if(myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp]
    } else {
        return "Not Found"
    }
}
console.log(checkObj("Hello")); // not found
console.log(checkObj("pet")); // kitten
console.log(checkObj("kitten")); // not found

//! Manipulating complex object
var myMusic = [ 
    {
        "artist":"Billy Joel",
        "title": "Piano Man",
        "release_year": "1973",
        "format": [
            "CD"
            "8T"
            "LP"
        ],
        "gold":  true
    }
    {
        "artist":"Herve Dumont",
        "title": "cfds",
        "release_year": 2002,
        "format": [
            "youtube"
            "deezer"
            "spotify"
    },    
    }
]
    
//! Acessing nested object
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion",
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch",
        ]
    }
]
var secondTree = myPlants[1].list[1];
console.log(secondTree); // "pine"

//! Record Collection 
var collection = {
    2548: {
        "album": "Slippery When Wet",
        "artist": "Bon jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Crevettes"
        ]
    },
    1245: {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    5439: {
        "album": "ABBA GOLD",
    }
}
var collectionCopy = JSON.parse(JSON.stringify(collection));
function updateRecords(id, prop, value) {
    if (value === "") {
    delete collection [id][prop];
    } else if (prop === "tracks") {
      collection [id][prop] = collection[id][prop] || [];
      collection[id][prop].push(value);  
    } else {
     collection [id][prop] = value;
    }
    return collection;
}
updateRecords(2548, "tracks", "youpi");
updateRecords(2468, "tracks", "test");
updateRecords(5439, "tracks" "silver")
console.log(updateRecords(5439, "artist", "ABBA"));

//! Iterate with while loops. loops allow to use same code multiple time
var myArray = []
var i = 0
while(i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray); // [0,1,2,3,4]

//! Iterate with for loops. Most common loop in js
var myArray = []
for (var i = 0; i <= 7; i++) {
    myArray.push(i)
}
console.log(myArray); // [0, 1, 2, 3, 4, 5, 6, 7]

//! Iterate odd number with a for loop
var myArray = []
for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}
console.log(myArray); // [1, 3, 5, 7, 9]

var myArray = []
for (var i = 0; i < 10; i += 2) {
    myArray.push(i);
}
console.log(myArray); // [0, 2, 4, 6, 8]

//! Count backward with a for loop
var myArray = []
for(var i = 10; i > 0; i -=1) {
    myArray.push(i)
}
console.log(myArray); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

//! Iterate through an Array with a for loop. Additionne le tout
var myArray = [2,3,4,5,6]
var total = 0;
for(var i = 0; i < myArray.length; i++) {
    total += myArray(i) ------ //* (i) = [i] 
}
console.log(total); // 20

//!Nesting for loop
function multiplyAll(arr) {
    var product = 1
    for (var i=0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            product *= arr[i][j]
        }
    }
    return product
}
var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product); // ( 1*2*3*4*5*6*7 ) 5040

function multiplyTout(arr) {
    var product = 1
    for (var i=0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            product *= arr[i][j]
        }
    }
    return product
}
var product = multiplyTout([[1],[4],[6,71],[2]]);
console.log(product); // ( 1*4*6*71*2 ) 3408

//! Iterate with do... while loop run one time then check the condition
//? -------------------------------------------------------------------***********************

var myArray = []
var i = 10

do {
    myArray.push(i)
    i++;
}    while ( i < 5)
console.log(i, myArray); // 10 [11]

var myArray = []
var i = 10

do {
    myArray.push(i)
    i++;
}    while ( i < 15)
console.log(i, myArray); // 15 [10, 11, 12, 13, 14]

//! Profile Lookup 
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["pizza", "coding", "brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "02234545643",
        "likes": ["hogwart", "magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0157589715",
        "likes": ["Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "0658978714",
        "likes": ["Javascript", "html", "css"]
    }
];
function lookUpProfile(name, prop){
    for (var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}
var data = lookUpProfile ("Akira", "likes")
console.log(data);

//! Generate random fraction decimal
function randomFraction () {
    
    return Math.random()
}
console.log(randomFraction()); // number betwenn 0 and 0.9999999999999999999999999... Can be 0 be not 1

//! Generate random whole numbers. Math.random can not be the number you attribute to it  Math.random () * 20 can not be 20
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
console.log(randomNumberBetween0and19) // 17

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum()); // 5 


//! Generate Random Whole numbers within a range

function randomRange (myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin ++ 1)) + myMin;
}
var myRandom = randomRange(5, 15);
console.log(myRandom); // number between 5  and 15

//! Use the parseInt function
function convertToInteger(str) {
    return parseInt(str);
}
convertToInteger("56")
console.log(convertToInteger);

//! Use the parseInt function with a Radix
function convertToInteger(str) {
    return parseInt(str, 2) // Now it's base 2 so he know it's binary
}
convertToInteger("100101")

//! Use conditionnal  Ternary 
function checkEqual(a, b) {
    if(a === b) {
        return true
    } else {
        return false
    }
}
checkEqual (1, 2);
//? OR   ****???????????????

function checkEqual(a, b) {
    return a ==== b ? true : false
    return a === b
}

//! Use multiple Conditionnal ternary 
function checkSign(num) {
    return num > 0 ? "positive" :  num < 0 ? "negative" : "zero"
}
// Zero only if it's zero. it's false then false

console.log(checkSign(-10)) // negative
console.log(checkSign(0))   // zero
console.log(checkSign(10))  // positive

//! Difference between var and let. Let does not let your decrlare a varibale twice
let catName = " Quincy"
let quote
canName = "Beau"

function catTalk() {
    "use strict"
    catName = "Oliver"
    quote = catName + "says Meow!"
}
catTalk()

//! Compare scope of the var and let VAR =  Globally or locally if inside a funtion 
//! Scope of let is limited to the blocks or expression where it s declared

function checkScope () {
    "use strict";
    var i = "function scope"
    if (true) {
        i = "block scope";
        console.log("Block scope i is: ", i); // "Block scope i is: " "block scope"
    }
    console.log("Function scope i is:" , i); // "Function scope i is:" "block scope"
    return i;
}
checkScope();

//? DIFFERENCE WITH LET

function checkScope () {
    "use strict";
    let i = "function scope"
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i); // "Block scope i is: " "block scope"
    }
    console.log("Function scope i is:" , i); // "Function scope i is:" "function scope"
    return i;
}
checkScope();
 
//! Declare a read only variable with constant keyword
//! If sure never reassigned a variable ALWAYS use const
function printManyTimes(str) {
    "use strict";
    var sentence = str + " is cool!"
    sentence = str + " is amazing!"
    for(var i = 0; i < str.length; i+=2) {
        console.log(sentence);
    }
}
printManyTimes("freeCodeCamp") // "freeCodeCamp is amazing!" "freeCodeCamp is amazing!" "freeCodeCamp is amazing!"...

function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool!"
    for(let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp") // "freeCodeCamp is cool!" "freeCodeCamp is cool!" "freeCodeCamp is cool!"...

//! Mutate an Array declared with const Reassigned it
const S = [5, 7, 2];
function editInPlace () {
    "use strict";
    //s = [2,5,7]
    S[0] = 2;
    S[1] = 5;
    S[2] = 7;
}
editInPlace();
console.log(s);

//! Prevent object mutation with Object.freeze
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI:3.14
    };
    
    try {
        MATH_CONSTANTS.PI = 99
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI); // 99


//? WITH FREEZE
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI:3.14
    };
    Object.freeze(MATH_CONSTANTS)
    try {
        MATH_CONSTANTS.PI = 99
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI); // 3.14

//! Use arrow fun to write concise anonymous functions
var magic = function() {
    return new Date();
}

//? SAMETHING DOWN THERE
const MAGIC = () => new Date();

//!Write arrow fucntion with parameters
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5])); // [1, 2, 3, 4, 5]

//? 
const MYCONCAT = (arr1, arr2) => arr1.concat(arr2)
console.log(MYCONCAT([1, 2], [3, 4, 5])); // [1, 2, 3, 4, 5]

//! Write Higher Order arrow functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34 ,-2]
const squareList = (arr) => {
    const squaredIntegers = arr;
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers); // [4, 5.6, -9.8, 3.14, 42, 6, 8.34 ,-2]

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34 ,-2]
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isIntegrer(num) && num > 0);
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers); // [4, 42, 6]


const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34 ,-2]
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isIntegrer(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers); // [16, 1764, 36] // les num au carré. x= chaque élément

//! Write higher order arrow functions  default parameters
const increment = (function() {
    return function increment(number, value = 1) { // = 1 so it's 1 by default. Other if specified
        return number +  value;
    };
})();

console.log(increment(5,2)); // 7  ....  5 is the argument and 2 means increment by 2
console.log(increment(5)); //  6
console.log(increment(158,100)); // 250

//! Use the rest operator with fucntion parameters
const sum =  (function() {
    return function sum(x, y, z) {
        const args = [ x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3)); // 6

//? ... allows you to put more number more args. I mean that hat i understand 
const sum =  (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

//! Use the spread operator to evaluate Arrays in-place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function(){
    arr2 = arr1;
    arr1[0] = 'potato'
}) ();
console.log(arr2); // ["potato", "FEB", "MAR", "APR", "MAY"] 
console.log(arr1); // ["potato", "FEB", "MAR", "APR", "MAY"] 

//? with ... arr1 stay what in the []
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function(){
    arr2 = [...arr1];
    arr1[0] = 'potato'
}) ();
console.log(arr2); // ["JAN", "FEB", "MAR", "APR", "MAY"]
console.log(arr1); // ["potato", "FEB", "MAR", "APR", "MAY"]

//! use detructuring assignement to assign variable from object 
var voxel = {x: 3.6, y: 7.4 z: 6.54};

var x = voxel.x; 
var y = voxel.y; 
var z = voxel.z; 

const { x :a, y : b, z : c } = voxel;

const AVG_TEMPERATURES = {
    today: 77.5, // 'muricans...
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict"
    const { tomorrow : tempOfTomorrow } = avgTemperatures;
    return tempOfTomorrow;
}
console.log(getTempsOftmrw(AVG_TEMPERATURES)); // 79

//! Destructuring assignement with nested object
const LOCAL_FORECAST = {
today: {min: 72, max: 83 },
tomorrow: {min: 73.3, max: 84.6}
};
function getMaxOfTmrw(forecast) {
    "use strict";
    const { tomorrow : { max : maxOfTomorrow }} = forecast;
    return maxOfTomorrow
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

//! Use detructuring Assignement to assign variablles from arrays
const [z, x] = [1,2,3,4,5,6];
console.log(z,x); // 1 2

const [z, x, y] = [1,2,3,4,5,6];
console.log(z,x, y); // 1 2 3

const [z, x, , y] = [1,2,3,4,5,6];
console.log(z,x,y); // 1 2 4

let a = 8, b = 6;
(() => {
    "use strict"
})();
console.log(a); // 8
console.log(b); // 6

let a = 8, b = 6;
(() => {
    "use strict";
    [a, b] = [b, a]
})();
console.log(a); // 6
console.log(b); // 8

//! Use destructuring Assignement with the rest operator
const source = [1,2,3,4,5,6,7,8,9,10]
function removeFirstTwo(list) {
    const [ , , ...arr] = list;
    return arr;
}
const arr = removeFristTwo(source);
console.log(arr); // [3, 4, 5, 6, 7, 8, 9, 10]
console.log(source); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//! Use destructuring Assignement to pass an object as a fucntion's parameters 
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    media: 34.54,
    mode: 23.87
    min: -0.75,
    average: 35.85
};


const half = (function() {
    return function half(stats) {
        return (stats.max + stats.min) / 2.0;
    };
})();
console.log(stats); // Object {average: 35.85,max: 56.78,media: 34.54,min: -0.75,mode: 23.87,standard_deviation: 4.34}
console.log(half(stats)); // 28.015

const half = (function() {
    return function half({max, min}) { // Same result but different here. Common with API
        return (max + min) / 2.0;
    };
})();
console.log(stats); // Object {average: 35.85,max: 56.78,media: 34.54,min: -0.75,mode: 23.87,standard_deviation: 4.34}
console.log(half(stats)); // 28.015

//! Create Strings using Template literals
const person = {
    name: "Zodiac Hasbro",
    age: 56
};
const greeting = `Hello, my name is ${person.name}! 
I am ${person.age} years old.`;
console.log(greeting); // "Hello, my name is Zodiac Hasbro! 
                       // I am 56 years old."
const result = {
    succes: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", ,"no-dup-keys"]
};
function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure)
console.log(resultDisplayArray); // "Hello, my name is Zodiac Hasbro! 
                                // I am 56 years old."  
                                // ["<li class='text-warning'>no-var</li>", "<li class='text-warning'>var-on-top</li>", "<li class='text-warning'>linebreak</li>"]

//! Write Concise Object Literal Declarations using simple Fields     
const creatPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};                            
console.log(creatPerson("Zodiac Hasbro", 56, "male")); // Object {age: 56,gender: "male",name: "Zodiac Hasbro"}

//? Or shorter like this
const creatPerson = (name, age, gender) => ( { name, age, gender } ); 
console.log(creatPerson("Zodiac Hasbro", 56, "male")); // Object {age: 56,gender: "male",name: "Zodiac Hasbro"}

//! Write concise declarative function
const bicycle = {
    gear: 2,
    setGear: function(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear); // 3

//? SHORTER
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear); // 3

//! Use class syntax to define a constructor function
var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet); // Jupiter

class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet
    }
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet); // Jupiter

function makeClass() {
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // carrot

//! Use getter and setters to control acces to an obj
class Book {
    constructor(author) {
        this._author = author;
    }
    get writer(){
        return this.-author;
    }
    set writter(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp); // 26

//! Understand the difference between import and require

//? Assuming that a string_function.js is in the same repertory
impor{capitalizeString} from "./string_function "
const cap = capitalizeString("hello!");
console.log(cap); // HELLO!

//? Whats in the string_function.js
export const capitalizeString = str => str.toUpperCase()

//! Use export to reuse a code block
const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export { capitalizeString};
export const foo = "bar";
export const bar = "foo";
// these files are exportable and importable

//! use * to import evereything from a file
//? evereything
import * as capitalizeStrings from from "capitalize_strings";

//! create an export fallback with export default
export default function substract(x,y) {return x - y;}

//! Import a default file
//? assuming substract.js is in the repertory
import substract from "math_functions";
substract (7,4);







//! EXO /////////////////////////////////////////////
var randomNumberBetween0and19 = (Math.random() * 20);
function randomWholeNum() {
    return Math.random();
}
console.log(randomWholeNum());
console.log (randomNumberBetween0and19)
console.log(Date.now())



var distance = (Math.random() * 20)
if ( distance >= 10 ) {
  console.log("chien pas content")
} else {
  console.log("chien content")
}
console.log(distance)



var liste = ["lapin", "chien"]
var number = Math.random() * 2
var number2 = Math.floor(number)                     
console.log(liste[number2])



var list = ["lapin", "chien", "canard"]
var number = Math.random() * list.length
var number2 = Math.floor(number)                     
if (list [number2] === "lapin") {
  console.log("ecouter Wagner")
} else if (list [number2] === "chien"){
  console.log("boire du thé")
}  else {
  console.log("un opposant politique à mysterieusement disparu lors d'une rencontre amicale")
}
//!EXO ///////////////////////////////////////////////





