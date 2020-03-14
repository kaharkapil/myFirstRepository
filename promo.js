//eligibl for promocode 


/*var itemPurchased=window.prompt("Enter no. of item purchased")

if (itemPurchased>3)
{
	alert("You are eligible for promocode")
}
else if(itemPurchased==3)
{
	alert("purchase one more to have promocode")
}
else
{
	alert("Sorry,you are not eligible for promocode")

}*/

//end of program


/*var isTopper=false

var marksObtained=window.prompt("enter the marks you obtained")

if(marksObtained<0 || marksObtained>100||marksObtained==undefined || marksObtained==null||marksObtained=='')
{
	alert("enter valid marks between(0-100)")
}
else
{
  marksObtained =Number(marksObtained)
  var totalMarks=100

  var percentage=(marksObtained/totalMarks)*100
 // if(percentage>90)
  //{
  	isTopper=true
  //}
  //else
  //{
  
  	//isTopper=false
  //}
  isTopper=(percentage>90)?true:false
  alert(isTopper)

} */
/*var grade=window.prompt("Enter your grade(A/B/C)")

alert(grade)

var result
switch (grade){
	case 'A':
	result="Excellent"
	break
	case 'B':
	result='Good'
	break
	case 'C':
	result="Average"
	break
	default:
	result="Enter valid grade"
}
alert(result)*/


//  LOOPS

// var fruits=["Mango","Banana","Apple","Grapes","Strawberry","Guava"]

//for (i=0;i<fruits.length;i++)
//{
//	alert(fruits[i])
//}
  // WHILE

  //var i=6

  //while(i>0 && i<=6)
  //{
  	//alert(i)
  	//i--
  //}

  // BREAK

  /* var searchFriend=window.prompt("Enter name you want to search")


  var myFriends=["Nayan","Rana","Akshay","Suren","Harshit","Ankit"]

 

  for(i=0;i<=myFriends.length;i++)
  {
  	if(myFriends[i]==searchFriend)
  	{
  		alert("user found at position"+(Number(i)+1))
        break;
  	}
  	else
  	{

  	}	

  }*/

              // For\In Loop

 /*  var myData={"name":"Kapil kahar",
               "email":"kaharkapil@gmail.com",
               "contact":7898440869}

   // var showName=myData["name"]
    //var showEmail=myData["email"]
    //alert(showName)
    //alert(showEmail)
   for(x in myData)
   {
   	alert(myData[x])
   }
*/

/*var customer=[{cid:123,
               signUpDate:"04/02/2020"},
              {cid:124,
               signUpDate:"05/02/2020"}]
for(x in customer)
{
	alert(customer[x].cid)
	alert(customer[x].signUpDate)
}
*/             
//        functional programming
/*function multiply(x,y)
{
	//return x*y
	alert(x*y)
}
multiply(4,8)
//var myproduct =multiply(2,3)
//alert(myproduct)
*/
/*var generateEmail=function(name,message)
{
	var emailMessage='HI' +name+"\n"+"Message for you\n"+message+"\n@Kapil Kahar"
	return emailMessage

}
 var emailToSent=generateEmail('Kapil','Welocme to edwisor.com')
 alert(emailToSent)
 */


 //                               emailLoginProgram

 /*
 var users =[{
 	'email':'kapil@gmail.com',
 	'password':'kapil'
 },{
 	'email':'kahar@gamil.com',
 	'password':'kahar'
 },{
 	'email':'sumit@gmail.com',
 	'password':'sumit'
 }]

 var checkEmail=function(email,password,allUsers)
 {
 	var isUserFound=false
 	var isPswrdCorrect=false

 	for(currentUser in allUsers)
 	{
 		console.log(currentUser)
 		if(allUsers[currentUser]['email']==email)
 		{
 			
 			if(allUsers[currentUser]['password']==password)
 			{    
 				isUserFound=true
 				isPswrdCorrect=true
 				break
 			}
 			else
 			{
 				isUserFound=true
 				isPswrdCorrect=false
 			    break
 			}

 		}
 		else
 		{   isUserFound=false
 			isUserFound=false
 			break
 		}
 	}//end of loop
 

	if(isUserFound==true && isPswrdCorrect==true)
	{
	alert('You are logged in')
	}
	else if(isUserFound==true &&isPswrdCorrect==false)
	{
		alert('Incorrect password')
	}
	else
	{
	alert('User not found')
	}
}


var email=prompt('Enter email')
var password=prompt('enter password')
checkEmail(email,password,users)

*/ //End of chekEmailProgram
   // Length
/*var myString ="Hello I am Kapil kahar"
var strngLength=myString.length
alert(strngLength)
*/
  //indexOf 
/*
var myString ="Hello I am Kapil kahar"
var strngLength=myString.indexOf("am")
alert(strngLength)
*/
            //slice/substr 
/*
var myString ="Hello I am Kapil kahar"

 //var indexOfKapil=myString.indexOf("Kapil")
var strngLength=myString.slice(11,16)
alert(strngLength)
*/

            //replace
/*
var myString ="Hello I am Kapil kahar"
var strngLength=myString.replace("Kapil","Sumit")
alert(strngLength)
*/
//upperCase/lowerCase
/*
var myString ="Hello I am Kapil kahar"
alert(myString.toUpperCase())
alert(myString.toLowerCase())
*/
            //concat
            /*
var myString ="Hello I am Kapil kahar,"
var myString2="\tand Sumit is my brother"
var mergedString=myString.concat(myString2)
alert(mergedString)
*/
        //sPLIT TO aRRAY
/*
var myString ="Hello I am Kapil kahar"
var strngLength=myString.split(" ")
alert(strngLength)
alert(Array.isArray(strngLength))
*/
             //numToString
/*var aNumber=7898440869

var numrToString=aNumber.toString()
alert(typeof(numrToString))
*/
 
       //variableToNumber
/*var aNumber=7898440869

var numrToString=Number()
alert(typeof(numrToString))
*/

              //arrayToString

 /*var fruits=["mango","papaya","grapes","banana","apple"]
 var convertedString=fruits.toString()
 alert(convertedString)
*/
            //push()/pop()

 /*var fruits=["mango","papaya","grapes","banana","apple"]
 //fruits.push("orange")
  fruits.pop()
 var convertedString=fruits.toString()

 alert(convertedString)
*/
                  //shift()/unshift()

/*var fruits=["mango","papaya","grapes","banana","apple"]
 
 fruits.shift()
fruits.unshift("Strawberry")
 alert(fruits)
*/
//modifyElement
/*var fruits=["mango","papaya","grapes","banana","apple"]
 
 fruits[2]="guava"
alert(fruits)
*/

//deleteElement
/*var fruits=["mango","papaya","grapes","banana","apple"]
 
 delete fruits[2]
alert(fruits)
*/

//concatArray
/*var fruits=["mango","papaya","grapes","banana","apple"]
var vegetables=["brinjal","potato"]
 
 var mergedArray=fruits.concat(vegetables)
alert(mergedArray)
*/


                    //Date

// var today=new Date(Date.now())
 //alert(today)
 /*var someDay= new Date("97-12-09")
 alert(someDay)
 alert(someDay.getDate())
alert(someDay.getDay())
alert(someDay.getFullYear())
*/
/*var facto=function (x)
{
var fact=1;
  for(var i=1;i<=x;i++)
{
    fact=fact*i;
}
return fact;
};
alert(facto(4));
*/
/*let findFactorial = (x) => {
  var fact=1;
  for(var i=1;i<=x;i++)
    {
    fact=fact*i;
    }

return fact;
};

module.exports = { findFactorial: findFactorial };
*/
/*
function largestPrimeFactor(n){
var i=2;
while (i<=n){
    if (n%i == 0){
        n/=i;    
    }else{
        i++;
    }
}
console.log(i);
}
var a = "TYPE YOUR NUMBER HERE"; 
largestPrimeFactor(a);
*/
                 // variable hoisting

  //var carPrice=200000;
  //console.log(carPrice);
  
  //console.log(carPrice);
  //var carPrice=200000;
//console.log(carPrice)
//let carPrice=200000;
  
  //             blockScoping

 /* var x=1
  for(var x=0;x<10;x++){
  	console.log(x)

  }
console.log('x=',+x)*/
//replced var with 'let'

 /*let x=1
  for(let x=0;x<10;x++){
  	console.log(x)

  }
console.log('x=',+x)
*/

/*const discountPercentage=10
discountPercentage=20;
console.log(discountPercentage);
*/

                //arrowFunction

 /* let addTwoNumbers=(x,y)=>{
  	return x+y;
  }
  console.log(addTwoNumbers(2,4));
  */


 /*let addTwoNumbers=(x,y)=>{
 	console.log(x);
 	console.log(y);
  	return x+y;
  }
  console.log(addTwoNumbers(2));
 */

                    //REST Parameter


/*
  let allAddress=[];
 let storeAddress=(uId,...usrAddress)=>{            //...REST Parameter
 	console.log(uId);
 	console.log(usrAddress);
 	let customAddress={uId:uId,usrAddress:usrAddress}
 	allAddress.push(customAddress)
 	console.log(allAddress);



 }

 let user1Address={
 	"city":"indore",
 	"pin":"454660"
 }
 let user2Address={
 	"city":"Dhar",
 	"pin":"454662"
 }
 storeAddress('kapilkahar',user1Address,user2Address);
*/
    
/*let peopleToInvite=[];
let addPeople=(...people)=>{
	let newPeople=people;
	peopleToInvite=peopleToInvite.concat(newPeople);
	console.log(peopleToInvite);
}

addPeople("kapil","Sumit","nayan");
addPeople("motu","rana","ansh");
*/

                //Spread...(Array to csv)


/*let add=(x,y,z)=>{
	console.log(x);
	console.log(y);
	console.log(z);
	return x+y+z;

}

const numbers=[1,2,5];
console.log(add(...numbers))
*/

             // Object literals


/*let firstName="Kapil"
let lastName="Kahar";
let nameOfPerson={firstName:firstName,lastName:lastName}
console.log(nameOfPerson);
*/


/*let actualPrice=10000;
let discountPercentage=10;
let details={
	actualPrice,
	discountPercentage,
	 calculateDiscount(){
		return actualPrice-((actualPrice*discountPercentage)/100);
	}
}

console.log(actualPrice);
console.log(details.calculateDiscount());
*/

              // templateLiterals

 /*let someParagraph=`Fiber to the Premises (FTTP) is a form
  of fiber optic communication delivery in which an optical
   fiber is run directly onto customers'
    premises. This new technology brings 
 remarkable speed and an altogether new broadband experience.`
 console.log(someParagraph);
 */

/* let a=`Hello i am kapil`
 let b=`I am a engineering student`
 let combine=`${a}.${b}`;
 console.log(combine);
 let combine1=`${a} and ${b}`;
 console.log(combine1);
*/


/*var generateEmail=function(name,message)
{
	var emailMessage=`HI ${name} Message for you \n
	${message}\n@Kapil Kahar`         // template literals(``)
	return emailMessage;

}
 var emailToSent=generateEmail('Kapil','Welocme to edwisor.com')
 console.log(emailToSent);
 */
                // for of loop
 /*let customer=[{
 	'cId':123,
 	'cName':'Kapil'},    
 	{
 	 'cId':125,
 	 'cName':'Sumit'

 	}

 ]

 for (customer of customer)
 {   console.log(customer);
 	//console.log(customer[x].cId);
 	//console.log(customer[x].cName);
 }
 */
            //Assignment

/*let convertToKeyValuePair = (someKey,someValue)=>{

    // this function should return a single object which has 
    //key as the value of someKey and value as someValue
      return somekey;
   

};

module.exports = {convertToKeyValuePair:convertToKeyValuePair};
*/

     //assignment2

    // let someAns='';
/*let convertTemplate = (...input)=>{
   // start your code here.
  // let newInput=input;
   let someAns=input.concat(input);
   return someAns;

};

console.log(convertTemplate('aa',3));*/
/*let multiplyMagic = (a=1,b=1)=>{
  // start your code here.
  let res=a*b;
  return res;
  

};
console.log(multiplyMagic(2,3));
*/


let returnlength = (...input)=>{
  // start your code here.


  return input.length;
};
console.log(returnlength('a','b','c','d','e'));

