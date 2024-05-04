// Write a JavaScript program to find out if 1st January will be a Sunday 
// between 2024 and 2050.

// let now = new Date()

for(var i = 2024; i <=2050; i++){
    let now = new Date(`1 jan ${i}`)
    if(now.getDay()==0){
        console.log(now.getFullYear())
    } 
}