let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } 
        ] 
let a=[
    studentRecords[0].name.toUpperCase(),
    studentRecords[1].name.toUpperCase(),
    studentRecords[2].name.toUpperCase(),
    studentRecords[3].name.toUpperCase()
];
console.log(a);

let b=[];
 for(let i=0;i<studentRecords.length;i++){
     if(studentRecords[i].marks>50){
         b.push(studentRecords[i]);
     }
 }
 console.log(b);

 let c=[];
 for(let i=0;i<studentRecords.length;i++){
     if((studentRecords[i].marks>50)&&(studentRecords[i].id>120)){
         c.push(studentRecords[i]);
     }
 }
 console.log(c); 

 let sum=0;
 for(let i=0;i<studentRecords.length;i++){
     sum+=studentRecords[i].marks;       
     
 }
 console.log(sum);

 let d=[];
 for(let i=0;i<studentRecords.length;i++){
     if(studentRecords[i].marks>50){
         d.push(studentRecords[i].name);
     }
 }
 console.log(d);

 let total=0;
 for(let i=0;i<studentRecords.length;i++){
     if(studentRecords[i].id>120){
         total+=studentRecords[i].marks;
     }
 }
 console.log(total);

let total1=0;
for(let i=0;i<studentRecords.length;i++){
    if((studentRecords[i].marks<50)){
        studentRecords[i].marks+= 15;
    }
    if(studentRecords[i].marks>50){
        total1+=studentRecords[i].marks;
    }
}
console.log(total1);

function Student(Name,Class,RollNo){
    this.Name=Name;
    this.Class=Class;
    this.RollNo=RollNo;
}
let s1= new Student("vishnu",10,15);
let s2= new Student("sachin",9,14);
let s3= new Student("sourav",11,16);
let s4= new Student("virat",12,17);
let s5= new Student("hardik",8,13);
let s6= new Student("krunal",9,14);
let array=[];
array.push(s1);
array.push(s2);
array.push(s3);
array.push(s4);
array.push(s5);
array.push(s6);
console.log(array);