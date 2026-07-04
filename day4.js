 let marks = 97;
 let Grade;
  if (marks >= 90){
    Grade = "A";  
  }
  else if (marks >= 75 && marks <= 89){
    Grade = "B";
  }
  else if (marks >= 50 && marks <= 74){
    Grade = "C";
  }
  else {
    Grade = "Fail"
  }
   console.log("Marks: ",marks);


  console.log("Grade: ",Grade);

