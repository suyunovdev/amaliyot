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
    





















