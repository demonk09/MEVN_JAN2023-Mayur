const arr1 = ['lion','tiger','cat'];
const arr2 = [1,2,,3];

arr1.push('monkey');
arr1.forEach(element =>{
    console.log(element);
});

arr2.forEach(element=>{
    console.log(element);
});

const fruits = ['banana','orange'];
fruits.unshift('apple');
console.log(fruits);
// console.log(findFruits('banana'));
//  fruits.findIndex(findFruits('apple')); //need to be corrected

//  fruits.findIndex();
//  function findFruits(fruits){
//     return fruits == "banana";
//  }
 const ages=[6,2,3,4];
 ages.findIndex(checkAge());
 ages.sort();
 ages.reverse();


 function checkAge(ages){
    return ages => 3;  //need to be checked
 }

 const cars =["bmw","audi"];
 const car={type:"fiat",model:"400",color:"white"};

