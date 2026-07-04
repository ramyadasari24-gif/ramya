document.getElementById("heading 1").innerHTML="dom is awesome"
let p=document.getElementById("paragraph")
p.innerHTML="dom is easy to learn"
function addition(){
    let table=document.getElementById("table");
    let newrow=table.insertRow()
    let cell1=newrow.inssertcell(0);
     let cell2=newrow.inssertcell(1);
      let cell3=newrow.inssertcell(2);
      cell1.innerHTML="24K61A4229"
       cell2.innerHTML="mani"
        cell3.innerHTML="19"
}
addition()
console.log(document)