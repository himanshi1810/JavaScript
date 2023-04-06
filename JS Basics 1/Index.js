
// Line below is used to print on the console window
// console.log('Namaste Duniya version 4');
// let a=5;
// console.log(a);
// let b='himanshi';
// console.log(b);
// const num=2;
// //num=5;
// let lastName='Gandhi';
// console.log(lastName);
// lastName=3;
// console.log(lastName);
// let marks=35;
// if(marks>=90)
// {
//     console.log('A');
// }
// else if(marks>=80)
// {
//     console.log('B');
// }
// else if(marks>=60)
// {
//     console.log('c');
// }
// else if(marks>=40)
// {
//     console.log('D');
// }
// else
// {
//     console.log('Fail');
// }
// let i;
// for(i=0;i<5;i=i+1)
// {
//     console.log(i);
// }
console.log('Chalo shuru karte hain');
// let rectangle =
// {
//     length:1,
//     breadth:2, 

//    draw: function()
//     {
//           console.log('draw');
//     }
// };


//Factory  function


// function createRectangle(length,breadth)
// { 
//     return rectangle={
//     length:length,
//     breadth:breadth , 

//    draw()
//     {
//           console.log('draw');
//     }
//     };

// }
// let rectangleObj1=createRectangle(5,4);
// let rectangle2=createRectangle(2,3);
// let rectangle3=createRectangle(7,9);

//Constructor function->Pascal Notation->first letter of every word is capital
//constructor ->prop?methods->defined

// function Rectangle(len,bre)
// {
//    this.length=len;
//    this.breadth=bre;
//    this.draw=function()
//    {
//     console.log('drawing');
//    }
// }


 
//object creation using constructor 
// let rectangleObject = new Rectangle(4,6);
// rectangleObject.color='yellow';
// console.log(rectangleObject);
// delete rectangleObject.color;
// console.log(rectangleObject);

// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);

// let a={val:10};
// let b =a;

// a.val++;
// console.log(a.val);
//  console.log(b.val);

// let rectangle=
// {
//     length:2,
//     breadth:4
// };


//For in loop

// for(let key in rectangle)
// {
//     console.log(key,rectangle[key]);
// }

//for off loop

// for(let key of Object.entries(rectangle))
// {
//     console.log(key);
// }

// if('length' in rectangle)
// {
//     console.log('Present');
// }
// else
// {
//     console.log('Absent');
// }

// let src =
// {
//     a:10,
//     b:20,
//     c:30
// };

// let dest={};

// for(let key in src)
// {
//     dest[key]=src[key];
// }

// console.log(dest);
// src.a++;
// console.log(dest);

//Object Clone 2
// let src =
//  {
//     a:10,
//     b:20,
//     c:30
// };

// let dest=Object.assign({},src);

// console.log(dest);

// src.a++;

// console.log(dest);

//Object clone 3

// let src =
//  {
//     a:10,
//     b:20,
//     c:30
// };

// let dest={...src};

// console.log(dest);

// src.a++;

// console.log(dest);

// let lastName='Gandhi';
// let firstName= new String('Himanshi');

// let message =`This is
//  'my first' 
//  message`;


// console.log(message);
// let words=message.split(' ');

//  console.log(words);

// let date= new Date();

// let date2= new Date('June 20 1998 7:15');

// let date3 = new Date(2003, 9, 18, 8);


// date3.setFullYear(2002);
// console.log(date3);

// let numbers=[1,2,3,4,5];


// //End
// numbers.push(6);

// //Starting
// numbers.unshift(0);

// //Middle 
// numbers.splice(2,0,78);

// console.log(numbers);

// //Searching
// console.log(numbers.indexOf(6));

// console.log(numbers.includes(5));

// console.log(numbers.indexOf(4,6));

// let courses=
// [
//     {no:1, naam:'Love'},
//     {no:2, naam:'Rahul'}
// ];
// console.log(courses);

// let course = courses.find(course=> course.naam ===  'Love');

// console.log(course);

// let numbers=[1,2,3,4,5];
// let numbers2=numbers; 
// // numbers.length=0;
// numbers.splice(0,numbers.length);
// console.log(numbers);
// console.log(numbers2);
 
let arr=[5,10,4,40];

// for(let value of arr)
// {
//     console.log(arr);
// }

// arr.forEach(number=>console.log(number));

// const joined=arr.join(',');

// console.log(joined);

//Split method-> Create Array 

//Sorting Method 
// arr.sort();
// console.log(arr);

// arr.reverse();
// console.log(arr);

// let num=[1,2,-1,-4]

// // let filter=num.filter(function(value){
// //     return value>=0;
// // });

// // console.log(filter);

// run();

// //Function Declaration
// function run()
// {
//     console.log('running');
// }

// //Function call;

// //Name Function assignment
//  let stand=function walk(){
//     console.log('walking');
//  };

//  stand();

//  let jump=stand;

//  jump();

// let x=1;
// x='a';

// console.log(x);

// function sum()

// {
//  let total=0;
//  for(let value of arguments)
//    total=total+value;
//     return total; 
// }

// // console.log(sum(1,2));
// // console.log(sum());
// // console.log(sum(1));
// // console.log(sum(1,2,3,4,5));

// let ans=sum(5,4,3);
// console.log(ans);

// function sum(num, value, ...args){
//     console.log(args);
// }

// sum(1,2,3,4,5,6); 

//Default Parameters

function interest(p,r=6,y=10){
    return p*r*y/100;

}

console.log(interest(1000,undefined,8)); 

