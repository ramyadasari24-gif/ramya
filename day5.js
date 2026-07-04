console.log("Ramya")
// console.log(Ramya)
console.log(1)
console.log(true)
const a=10;
console.log(a)
// a=20
{
    const b=20;
    console.log(b)
}
// console.log(b)
console.log(a)
{
    var c=50;
    console.log(c)
}
console.log(c)
let d=30;
console.log(d)
d="Ramya"
d=19
{
    console.log(1);

}
let i=0;
do{
    console.log(i);
    i++;
}while(i<=5)

    
let j=5;
do{
    console.log(j);
    j++;
}while(j<=5)
    // array declaration
    let arr=[10,20,30,"Ramya",true];
        console.log(arr);
        for(let x of arr){
            console.log(x);
        }
        console.log("************object*************")
        let obj={
            "Key":"value",
            "Name":"Ramya",
            "age":19,
            "City":"tpg"
        }
        for(let x in obj){
            console.log(x);
            console.log(x+":"+obj[x]); 
        }