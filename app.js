//  Chapter 21-38 =============================================================================================



// Q#1

// var firstNmae = prompt("Enter Your First Name","First Name");
// var lastName = prompt("Enter your Last Name","Last Name");
// var fullName = firstNmae + " " + lastName;
// alert("Welcome " + fullName);



// Q#2

// var mobile = prompt("Write Your Favorite Mobile");
// var lengthOfMobile = mobile.length;

// alert("My favorite phone is: " + mobile + "\n" + "Length Of string: " + lengthOfMobile);




// Q#3

//  var country = "Pakistan";
//  var indexOfCountry =country.indexOf("n");

//  alert("String: " + country + "\n" + "Index of 'n' : " + indexOfCountry);





// Q#4

// var hello = "Hello World";
// var indexOf = hello.lastIndexOf("l");

// alert("String: " + hello + "\n" + "Last Index: " + indexOf);





// Q#5

// var country = "Pakistani";
// alert("String: " + country + "\n" + "Character at index 3: " + country[3]);




// Q#6

// var firstNmae = prompt("Enter Your First Name","First Name");
// var lastName = prompt("Enter your Last Name","Last Name");
// var fullName = firstNmae + " " + lastName;
// alert("Welcome " + fullName);





// Q#7

// var city = "Hydrabad";
// var indexOfA = city.indexOf("a");
// var copyCity = city.slice(indexOfA);
// var replacement = "Islam";
// alert("City: " + city + "\n" + "After replacement: " + replacement +copyCity );




// Q#8

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var replacement = message.replace(/and/g,"&");
// alert(replacement);






// Q#9

// var value = "472";
// var convert = parseInt(value);
// alert("Value: " + value + "\n" + "Type: " + typeof(value) + "\n" + "Value: " + convert + "\n" + "Type: " + typeof(convert) )







// Q#10 


// var userInput = prompt("Write Your Name");
// var convertToCapital = userInput.toUpperCase();
// alert("Your Name In Capilat Letters " + convertToCapital);







// Q#11

// var userInput = prompt("Enter Your Firstname In any Formate")
// var firstChar = userInput.slice(0,1);
// firstChar = firstChar.toUpperCase();

// var otherChar = userInput.slice(1);
// otherChar = otherChar.toLowerCase();

// var userInput = firstChar + otherChar;
// alert("Your Firstname In Capilization Formate: "+ userInput)





// Q#12


// var num = 35.36;
// var convertToString = num.toString();
// convertToString=convertToString.replace(".","");
// alert("Number: " + num + "\n"+ "Result: "+ convertToString);






// Q#13


// var char = prompt("Pleas Enter Your Username");

// for(let i = 0; i <= char.length; i++)
// {
//     var charCode = char.charCodeAt(i);
//     if( charCode == 33 || charCode == 44 || charCode == 46 ||charCode == 64)
//     {
//         alert("Pleas enter a Valid Username.");
//         var matchfound = 1;
//         break;
//     }
// }

// if(matchfound !== 1){
//     alert("Your username is valid, thanks")
// }





// Q#14



// var inputUser = prompt("Welcome to lucky Bakery, What do you want to order\nsir/ma'am?")
// var convertText = inputUser.toLowerCase();
// var automs = ["cake","apple pie","cookie","chips","patties"]
// for( var i = 0; i < automs.length; i++ )
// {
//     if(automs[i] === convertText)
//     {
//         alert(automs[i] + " is a available at index " + i + " in our bakery")
//         var result = 1;
//         break;
//     }   
// }
// if(result !== 1){
//     alert("We are sorry. " + convertText +" is not available in our bakery")
    
// }





// Q#15



// var pass = prompt("Enter Your Password")

// if(pass.length < 6)
// {
//     alert("Pleas enter valid password")
// }

// if()
// {

// }


// for(var i = 0; i < pass.length; i++)
// {

// }






//Q#16




// var university = "University of Karachi";
 
// for(var i = 0; i < university.length; i++)
// {
    
//     document.write(university[i] + "<br>")
// }







//Q#17



// var userInput = prompt("Enter Any World To Find Last Character");
// var lastIndex = userInput.length;
// var lastChar = userInput[lastIndex - 1];
// alert("User Input: " +  userInput + "\nLast Character Of Input: " + lastChar );







// Q#18



var para = "the quick brown fox jumps over the lazy dog"
var count = 0;
for(var i = 0; i < para.length; i++)
{
    if (para.slice(i,i+3) == "the" )
    {
        ++count;
    }
}


document.write("Text: " + para + "<br>" + "There are " + count + " occurrence(s) of the Word 'the'")












//  Chapter 26-30 =============================================================================================




// Q#1


// var userInput = prompt("Pleas Enter Positive Integer");
// var roundOf = Math.round(userInput);
// var floor  = Math.floor(userInput);
// var ceil = Math.ceil(userInput);

// alert("Number: "+ userInput +"\nRound Of Value: " + roundOf + "\nFloor Value: " + floor + "\nCeil Value: " + ceil);






// Q#2


// var userInput = prompt("Pleas Enter Positive Integer");
// var roundOf = Math.round(userInput);
// var floor  = Math.floor(userInput);
// var ceil = Math.ceil(userInput);

// alert("Number: "+ userInput +"\nRound Of Value: " + roundOf + "\nFloor Value: " + floor + "\nCeil Value: " + ceil);







// Q#3


// var val = prompt("Enter any number to conver to absolute number");
// var val1 = Math.abs(val);
// alert("The absolute Value of " + val + " is " +val1)







// Q#4


// var toss = Math.random() * 6;
// var ceil = Math.ceil(toss);
// alert("Random dice value: " + ceil);








// Q#5


// var toss = Math.random() *2;
// var clearify = Math.ceil(toss);
// if( clearify === 2)
// {
//     alert(clearify + "\nrandom coin value: Head")
// }
// else
// {
//     alert(clearify + "\nrandom coin value: Tails")
// }







// Q#6


// var val = Math.random() *100;
// var roundOf = Math.floor(val);
// alert("random number between 1 and 100: " + roundOf);





// Q#7


// var weight = prompt("Enter your wait");
// var indexOf = weight.indexOf("k");
// var weight1 = weight.slice(0,indexOf);
// alert("The weight of user is "+ weight1 + " Kilograms");







// Q#8


// var prom = prompt("Enter a number between 1 and 10")
// var ran = Math.random()*10;
// var flo = Math.floor(ran);

// if(prom == flo)
// {
//     alert("Congratulation Your Are Win")
// }
// else
// {
//     alert("Try Again!")
// }








//  Chapter 31-34 =============================================================================================




// Q#1


// var date = Date();
// alert(date);





// Q#2


// var arr = ["January","February","March","April","May","June","July","August","September","Oct0ber","November","December"]
// var now = new Date();
// var theDay = now.getMonth();
// alert("Current Month: " + arr[theDay]);








// Q#3 


// var day = Date();
// var b = day.toString();
// var c = b.slice(0,3)
// alert("Today is " + c );





// Q#4 


// var now = new Date();
// var theDay = now.getDay()

// if( theDay == 0 || theDay == 6 )
// {
//     alert("It's Fun day");
// }

// else
// {
//     alert("It's note Fun day");
// }





// Q#5


// var now = new Date();
// var dat = now.getDate()

// if( dat <= 15)
// {
//     alert("First fifteen days of the month")
// }
// else
// {
//     alert("Last days of the month")
// }






// Q#6


// var now = new Date();
// var getTime =now.getTime();
// var minutes = getTime/60;

// alert("Current Date: " + now + "\nElapsed miliseconds since Jan 1,1970: " + getTime +"\nElapsed minutes since Jan 1,1970: " + minutes )







// Q#7



// var now = new Date();
// var hour = now.getHours();

// if( hour < 12)
// {
//     alert("It's AM");
// }
// else
// {
//     alert("It's PM");
// }





// Q#8



// var now = new Date();
// var dateSet = now.setDate(30);
// var monthSet = now.setMonth(11);
// var laterDate = now;
// alert("Later Date: " + laterDate);





// Q#9

// var now = new Date();
// var today = now.getTime();
// var previous = new Date("JUN 18, 2015");
// var back  = previous.getTime();

// var diff = today - back;
// var conv = Math.floor(diff/(1000*60*60*24));
// document.write(conv + " days have passed since 1st Ramadan 2015");










// Q#10


// var first = new Date("DEC 05, 2015 22:30:16");
// var firstmilli = first.getTime();
// var second = new Date("Jan 01, 2015");
// var seconmilli = second.getTime();
// var diff = firstmilli - seconmilli;
// var conv = Math.floor(diff/(1000*60));

// document.write("on refrence date " + first + "<br>" + conv + " seconds had passed since baginning of 2015");








// Q#11



// var currentTime = new Date();
// var time = new Date();
// var extract = time.setHours(time.getHours() - 1);

// document .write("Currenr date: " + currentTime + "<br>");
// document.write("1 hour ago, it was " + time);







// Q#12



// var currentTime = new Date();
// var time = new Date();
// var extract = time.setFullYear(time.getFullYear() - 100);

// document .write("Currenr date: " + currentTime + "<br>");
// document.write("100 years back, it was " + time);









// Q#13



// var userInput = prompt("Enter Your age in numbers");
// var now = new Date();
// var runingYear = now.getFullYear();
// var birthYear = runingYear - userInput;

// alert("Your age is: " + userInput + "\nYour birth year is " + birthYear);








// Q#14

// var now =new Date();
// var name = prompt("Enter Customer Name")
// var arr = ["January","February","March","April","May","June","July","August","September","Oct0ber","November","December"]
// var month = now.getMonth();
// var monthName = arr[month];
// var units = prompt("Enter Consumer used units")
// var chargeUnit = 16;
// var amountPay = units * chargeUnit;
// var lateFee = 350;
// var lateAmount = amountPay + lateFee;



// document.write("K-Electric Bill" + "<br>" + "<br>" )
// document.write("Customer Name: " + name + "<br>" );
// document.write("Month: " + monthName + "<br>");
// document.write("Number Of Units: " + units + "<br>");
// document.write("Charges Per Unit: " + chargeUnit + "<br>");
// document.write("Net Amount Payable (within Due Date): " + amountPay + "<br>");
// document.write("Late Fee surcharges: " + lateFee + "<br>");
// document.write("Grous Amount Payable (after Due Date): " + lateAmount + "<br>");