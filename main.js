// function getObject () {
//     return {};
// }
// console.log(getObject())

/////////////////////////////////////////////////////////////////

// function getobject(name,age) {
//         return{
//             name:name,
//             age:age,

//         }
        
//     }
//     const obj1 = getobject("John",23)
//     console.log(obj1)

/////////////////////////////////////////////////////////////////


// function getobject(name,age) {
//         return{
//             name:name,
//             age:age,

//         }
        
//     }
//     let obj1 = getobject("John",23)
//     console.log(obj1)


//     let obj2 = {...obj1}
//     console.log(obj1,obj2)


/////////////////////////////////////////////////////////////////

// function getobject(name,age) {
//         return{
//             name:name,
//             age:age,

//         }
        
//     }
//     let obj1 = getobject("John",23)
//     console.log(obj1)


//     /////spread operator///
//     // let obj2 = {...obj1}
//     // console.log(obj1,obj2)






//     const obj2 = {};

//     ///// loop (for in)////
//     for (const key in obj1) {
//         obj2 [key] = obj1[key];
       
//     console.log(obj1[key])        
//         }

//     obj1[age]
//     obj1.name



////////////////////////////////

// let arr1 = [1,2,3]
// arr1 .forEach(function(element,index,array){
//     console.log(element*2)
// })


// let arr2 = ['apple','orange','banana']
// arr2 .forEach(function(element,index,array){
//     console.log(element.toUpperCase());
// })

// const arr3 = arr2;
// console.log(arr3)


/////////////////////////////////

// let arr1 = ['apple','orange','banana']
// const arr3 = arr1.map(function(element,index,array){
//     return element. at(-1)

// })

// console.log(arr3)




////////////////////////////////////

// let arr1 = [1,2,3,5,8,6,4]
// const arr3 = arr1.filter(function(element,index,array){
//     return element !==5

// })

// console.log(arr3)




////////////////////////////////////////



// const student = [
//     {id: 123,name: "Ilyos", score:85},
//     {id: 586,name: "bobur", score:70},
//     {id: 457,name: "nodir", score:50},
// ]
// student.forEach(function(student,index,array){
//     if (student.score >=60 ){
//         console.log("%c" + student.name + " imtixondan o'tdi","color:green")
//     }else{
//         console.log("%c" + student.name + " imtixondan yiqildi", "color:red")
//     }
// })


// const students = [
//         {id: 123,name: "Ilyos", score:85},
//         {id: 586,name: "bobur", score:70},
//         {id: 457,name: "nodir", score:50},
//     ]
//     const otganlar = students.filter(function(students,index,array){
//        return students.score >=60 
//     })
//     console.log(otganlar)



// const students = [
//     {id: 123,name: "Ilyos", score:85},
//     {id: 586,name: "bobur", score:70},
//     {id: 457,name: "nodir", score:50},
// ]
// const uquvchilar = []
// students.forEach(function(students,index,array){
//    if (students.score >=60 ){
// uquvchilar.push(students.name)   }
// })
// console.log(uquvchilar)
    



// const students = [
//     {id: 123,name: "Ilyos", score:85},
//     {id: 586,name: "bobur", score:70},
//     {id: 457,name: "nodir", score:50},
// ]
// const uquvchilar = []
// students.forEach(function(students,index,array){
//    if (students.score >=60 ){
// uquvchilar.push(students.name)   }
// })
// console.log(uquvchilar.length)
    


// const students = [
//     {id: 123,name: "Ilyos", score:85},
//     {id: 586,name: "bobur", score:70},
//     {id: 457,name: "nodir", score:50},
// ]
// const uquvchilar = []
// const hammasi = students.every(function(students,index,array){
//   return students.score >= 60;
// })
// console.log(uquvchilar)
    






/////////////////////////////////////////////////////////////////
////////////////////////////HOMEWORK////////////////////////////



// 1. Shunday function yaratingki, u sonlardan iborat array qabul qilsin va juft sonlarni arraydan chiqarib(tozalab), arrayni qaytarsin:

//   filterEvens([1, 2, 3, 4, 5, 6]); // [1, 3,5 ]

                        // function filterEvens(array) {
                        //     return array.filter(num => num % 2 !== 0);
                        // }
                        
                        // console.log(filterEvens([1, 2, 3, 4, 5, 6]));
                        


// 2. Ismlardan iborat arrayni qabul qiladigan va ularni alfabit boyicha saralab, osha arrayni qaytaradigan funksiya yarating:

//   sortNames(["John", "Alice", "Bob", "Emily", "David"]); // ['Alice', 'Bob', 'David', 'Emily', 'John']




                        // function sortNames(names) {
                        //     names.sort();
                        //     return names;
                        // }
                        
                        // console.log(sortNames(["John", "Alice", "Bob", "Emily", "David"]));
                        

// 3. Quyidagi arrayni qabul qiladigan, va oquvchilarni olgan bahosi(score) boyicha saralab beradigan(eng baland ball tepada) function yarating:

//   const students = [
//     {id: 123, name: 'Husanjon', score: 79},
//     {id: 456, name: 'Isfandiyor', score: 85},
//     {id: 789, name: 'Umar', score: 70},
//   ]

//   sortStudents(student);
//   /*
//   [
//     {id: 456, name: 'Isfandiyor', score: 85},
//     {id: 123, name: 'Husanjon', score: 79},
//     {id: 789, name: 'Umar', score: 70},
//   ]
//   */


                        // let students = [
                        //     { id: 123, name: 'Husanjon', score: 79 },
                        //     { id: 456, name: 'Isfandiyor', score: 85 },
                        //     { id: 789, name: 'Umar', score: 70 },
                        // ];
                        
                        // function counter(students) {
                        //     students.sort((a, b) => b.score - a.score);
                        //     return students;
                        // }

                        // console.log(counter(students));
                        
                        





// 4. sonlardan iborat arrayni qabul qiladigan va sonlarni har birini 2 martda oshirib, osha arrayni qayataradigan function yarating:

//   double([1, 2, 3]); // [2, 4, 6]


                        // function double(array) {
                        //     return array.map(num => num * 2);
                        // }
                        
                        // console.log(double([1, 2, 3]));
                        






// 5. Ismlardan iborat arrayni qabul qiladigan va har bir ismga "Salom" sozini qoshib console'ga chiqaradigan function yozing: 

//   sayHi(['Husanjon', 'Isfandiyor', 'Umar']); 
//   /*
//     Salom, Husanjon!
//     Salom, Isfandiyor!
//     Salom, Umar!
//   */


                    // function sayHi(names) {
                    //     names.forEach(name => {
                    //     console.log(`Salom, ${name}!`);
                    //     });
                    // }
                    
                    // sayHi(['Husanjon', 'Isfandiyor', 'Umar']);
                    


// 6. Sonlardan iborat arrayni qabul qiladigan va agar hamma sonlar musbat bolsa true, bolmasa false'ni qaytaradigan function yarating:

//   positive([1, 2, 3]); // true
//   positive([1, -2, 3]); // false



                    // function positive(array) {
                    //     return array.every(num => num > 0);
                    // }
                    
                    // console.log(positive([1, 2, 3]));   
                    // console.log(positive([1, -2, 3]));  
  


// 7. Sonlardan iborat arrayni qabul qiladigan va agar kamida bitta manfiy son bolsa ham true, bolmasa false'ni qaytaradigan function yarating:

//   positive([1, 2, 3]); // false
//   positive([1, -2, 3]); // true


                    // function negative(array) {
                    //     return array.some(num => num < 0);
                    // }
                    
                    // console.log(negative([1, 2, 3]));   
                    // console.log(negative([1, -2, 3]));  
                    

// 8. Argument sifatida raqamni oladigan funksiya yarating. 1 dan funktsiyaga o'tgan raqamgacha bo'lgan barcha raqamlarni qo'shing. Misol uchun, agar kirish 4 bo'lsa, sizning funktsiyangiz 10 ni qaytarishi kerak, chunki 1 + 2 + 3 + 4 = 10:

//   addUp(4) ➞ 10

//   addUp(5) ➞ 15

//   addUp(13) ➞ 91



                    // function addUp(num) {
                    //     let sum = 0;
                    //     for (let i = 1; i <= num; i++) {
                    //     sum += i;
                    //     }
                    //     return sum;
                    // }
                    
                    // console.log(addUp(4));   
                    // console.log(addUp(5));   
                    // console.log(addUp(13));  
  


// 9. Sonlardan iborat arrayni qabul qiladigan va eng kichik va eng katta sonlarni alohida arrayga joylashtiradigan function yarating:

//   minMax([1, 2, 3 ,4]); // [1, 4]
//   minMax([10, 17, 3 ,5]); // [3, 17]



                    // function minMax(array) {
                    //     const min = Math.min(...array);
                    //     const max = Math.max(...array);
                    //     return [min, max];
                    // }
                    
                    // console.log(minMax([1, 2, 3, 4]));    
                    // console.log(minMax([10, 17, 3, 5]));  

                    

// 10. Argument sifatida ikkita stringni oladigan funksiya yarating va birinchi string harflari soni ikkinchi stringni harfi soniga teng yoki teng emasligia qarab true yoki false'ni qaytaring:

//   comp("AB", "CD") ➞ true

//   comp("ABC", "DE") ➞ false

//   comp("hello", "apples") ➞ false




                        // function comp(str1, str2) {
                            
                        //     if (str1.length == str2.length ) {
                        //       return true;
                        //     }
                        //         else{
                        //             return false
                        //         }
                        // }
                        
                        //   console.log(comp("AB", "CD"));        // true
                        //   console.log(comp("ABC", "DE"));       // false
                        //   console.log(comp("hello", "apples")); // false
                        



  

  
















