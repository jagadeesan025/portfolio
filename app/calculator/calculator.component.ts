import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})

export class calculatorComponent implements OnInit {
  title = 'calculator';
  number1 : string = "";
  number2 : string = "";
  display:string = "";
  isOperatorClicked : boolean = true;
  selOperator:string = ""
    res:string=""
    first:string=""
    sec:string=""


  ngOnInit()
  {

  }


PressPlus()
{
  this.isOperatorClicked =false;
this.selOperator = "+";
this.display = "+"
}
presssubtraction(){
  this.isOperatorClicked= false;
  this.selOperator="-"
  this.display="-"
}
pressmultiplication(){
  this.isOperatorClicked= false;
  this.selOperator="x"
  this.display="x"
}
pressdevision(){
  this.isOperatorClicked= false;
  this.selOperator="÷"
  this.display="÷"
}


Equals()
{

  let first = parseFloat(this.number1)
  let sec = parseFloat(this.number2)
  let res = 0

    if
    (this.selOperator == "+")
  {
 res = first + sec;
 this.display = res.toString();
  }
  else
   if (this.selOperator == "-")
  {
    res = first - sec;
    this.display = res.toString();

  }
  else if(this.selOperator == "x"){
    res = first*sec  ;
    this.display = res.toString();

  }
  else if(this.selOperator == "÷"){
    res = first/sec;
    this.display = res.toString();

  }
  this.number1 = this.display
  this.number2 = "";
  this.isOperatorClicked = true;
  //this.display = this.number1;

  console.log(res);

}
Pressdd()
{
  if(this.isOperatorClicked)
  {
    this.number1 += ".";
    this.display = this.number1
  }
  else
  {
    this.number2 += "."
    this.display = this.number2
  }
  console.log(this.number1)
  console.log(this.number2)
}
Press1()
{
  if(this.isOperatorClicked)
  {
    this.number1 += "1";
    this.display = this.number1
  }
  else
  {
    this.number2 += "1"
    this.display = this.number2
  }
  console.log(this.number1)
  console.log(this.number2)
}

press2(){
 if( this.isOperatorClicked)
{
  this.number1 +=2
  this.display=this.number1

}
else{
  this.number2 += 2
  this.display=this.number2
}
console.log(this.number2);
console.log(this.number1);


}press3(){
  if( this.isOperatorClicked)
 {
   this.number1 +=3
   this.display=this.number1
 }
 else{
   this.number2 += 3
   this.display=this.number2
 }
 console.log(this.number2);
 console.log(this.number1);


 }
 press4(){
  if( this.isOperatorClicked)
 {
   this.number1 +=4
   this.display=this.number1
 }
 else{
   this.number2 += 4
   this.display=this.number2
 }
 console.log(this.number2);
 console.log(this.number1);


 }
 press5(){
  if( this.isOperatorClicked)
 {
   this.number1 +=5
   this.display=this.number1
 }
 else{
   this.number2 += 5
   this.display=this.number2
 }
 console.log(this.number2);
 console.log(this.number1);


 } press6(){
  if( this.isOperatorClicked)
 {
   this.number1 +=6
   this.display=this.number1
 }
 else{
   this.number2 += 6
   this.display=this.number2
 }
 console.log(this.number2);
 console.log(this.number1);


 } press7(){
  if( this.isOperatorClicked)
 {
   this.number1 +=7
   this.display=this.number1
 }
 else{
   this.number2 += 7
   this.display=this.number2
 }
 console.log(this.number2);
 console.log(this.number1);


 } press8(){
  if( this.isOperatorClicked)
 {
   this.number1 +=8
   this.display=this.number1
 }
 else{
   this.number1 += 8
   this.display=this.number1
 }
 console.log(this.number2);
 console.log(this.number1);


 } press9(){
  if(
  this.isOperatorClicked
  )
{
  this.number1+=9
  this.display=this.number1
}
else{
  this.number2+=9
  this.display=this.number2
}
 }
 press0(){
  if(
  this.isOperatorClicked
  )
{
  this.number1+=0
  this.display=this.number1
}
else{
  this.number2+=0
  this.display=this.number2
}
 }


 kid(){

  this.isOperatorClicked= false;
  this.selOperator="x^2"
  let first = parseFloat(this.number1)
  let sec = parseFloat(this.number2)
  let res = 0
 if
 (this.selOperator == "x^2")
  {
 res =first*first;
 console.log(res);

 this.display = res.toString();
  }
  this.number1 = this.display
  this.number2 = "";
  this.isOperatorClicked = true;
  //this.display = this.number1;

  console.log(res);

 }
divi(){
  this.isOperatorClicked =false;
  this.selOperator="1/x"
let first=parseFloat(this.number1)
let sec=parseFloat(this.number2)
let res =0
if(this.selOperator=="1/x"){
  res=1/first
  console.log(res);
  this.display=res.toString();

}
this.number1 = this.display
this.number2 = "";
this.isOperatorClicked = true;
//this.display = this.number1;

console.log(res);


}
opp(){

this.isOperatorClicked=false
this.selOperator="+/-"
let first=parseFloat(this.number1)
let sec=parseFloat(this.number2)
let res =0
if(this.selOperator="+/-")
{ res=-1*first
  console.log(res);
  this.display=res.toString();

}
this.number1 = this.display
this.number2 = "";
this.isOperatorClicked = true;
//this.display = this.number1;

console.log(res);

}
dee(){

  this.isOperatorClicked=false
  this.selOperator="%"
  let first=parseFloat(this.number1)
  let sec=parseFloat(this.number2)
  let res =0
  if(this.selOperator="%")
  {

    res=first/100
    console.log(res);
    this.display=res.toString();

  }
  this.number1 = this.display
  this.number2 = "";
  this.isOperatorClicked = true;
  //this.display = this.number1;

  console.log(res);}

  backsp(){

    this.number1 = this.display
    this.number2 = "";
 let len=this.display.length
  if(this.selOperator="⌫")
{
  this.res = this.display.substr(0,len-1)
  console.log(this.res);
  this.display=this.res
}
if(this.isOperatorClicked)
{
  this.number1 = this.display
}
else
{
  this.number2 = this.display;
}
}

c(){
  this.isOperatorClicked=false
  this.selOperator="c"
  this.display="0"
  this.number1=""
  this.number2=""
  this.isOperatorClicked=true;
}

root(){

  let x = parseInt(this.display);
  this.display = Math.sqrt(x).toString();
  this.isOperatorClicked = false;
  this.number2 = "";
  this.first = this.display;

// this.isOperatorClicked=false

// let first=this.display
// let res =0

//   if (this.selOperator=="√x")
//  {
//     res=Math.sqrt(parseFloat(first));
//     console.log(res);
//     this.display=res.toString();
//     this.isOperatorClicked=true;

//   }

}

}

