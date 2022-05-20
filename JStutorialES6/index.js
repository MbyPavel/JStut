// var->function
// let->block
// const->block
/*
function sayHello(){
    for(leti=0;i<5;i++){
      console.log(i);
   }
    console.log(i);
  }
  sayHello();
*/

/*
const person={
    name:'Mosh',
   walk(){},
    talk(){}
  };
  person.talk();
  person.name="';
  const targetMember='name';
  person[targetMember.value]='John';
*/

/*
const person={
  name:"Mosh",
 walk(){
 }
    console.log(this);
};
person.walk();
const walk=person.walk;
walk();
// window
*/

/*
const person={
 name:"Mosh",
 walk(){
 }
    console.log(this);
};
person.walk();
const walk=person.walk.bind(person);
walk();
*/

/*
const jobs=
  {id:1,isActive:true},
  {id:2,isActive:true},
  {id:3,isActive:false},
];
const activeJobs jobs.filter(function(job){return job.isActive;});
const activeJobs=jobs.filter(job=>job.isActive);
*/

/*
const person={
  talk(){
?var self=this;I
    setTimeout(()={
      console.log("this",this);
    },1000);
};
person.talk();
 }
*/

/*
const colors=["red","green","blue"];
const items=colors.map(color=>`<li>${color}</li>`);
console.log(items);
*/

/*
const address={
  street:'',
  city:'',
  country:
};
const street=address.street;
const city=address.city;
const country=address.country;
const{street:st}=address;
*/

/*
const first=[1,2,3];
const second=[4,5,6];
// const combined=first.concat(second);
// const combined=[... first,'a',... second,'b'];
const clone=[... first];
console.log(first);
console.log(clone);
*/

/*
const person={
  name:"Mosh",
 walk(){
 }
    console.log("walk");
};
const person2={
  name:"Mosh",
 walk(){
 }
};
    console.log("walk");

// Příklad 2 (Správně)

class Person{
  constructor
 }
 walk(){
 }
             (name){
    this.name this.name=name;
    console.log("walk");
}
const person=new Person('Mosh');
person.
*/

/*
class Person{
  constructor
 }
 walk(){
 }
             (name){
    this.name=name;
    console.log("walk");
}
class Teacher extends Person{
?constructor(name,degree){
 }
  teach(){
    console.log("teach");
 }
}
const teacher=new Teacher('Mosh','MBA');
*/

/*
import{Teacher}from"./teacher";
const teacher=new Teacher("Mosh","MSc");
teacher.teach();
*/

/*
import Teacher,{promote}from"./teacher";
import React,{Component}from'react';
from'';// Default->import ... from
// Named->import{...}from
const teacher=new Teacher("Mosh","MSc");
teacher.teach();
*/