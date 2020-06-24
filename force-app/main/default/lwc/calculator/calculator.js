import { LightningElement , track } from 'lwc';

export default class Calculator extends LightningElement {

   
@track firstNumber ;
@track secondNumber;
@track operator;
@track answer;

firstNumberChange(event){
    this.firstNumber = event.target.value;
}

secondNumberChange(event){
this.secondNumber = event.target.value ; 
}

operatorChange(event){
this.operator = event.target.label;
}

calculate(event){
//this.answer = this.firstNumber  this.operator   this.firstNumber ;

console.log('operator :' , this.operator);
console.log('1  : ' , eval(" this.firstNumber  *   this.secondNumber "));
console.log( '2 : ' , eval('this.firstNumber ==  this.secondNumber'));
console.log('3 ::' , eval('2 * 8'));
console.log('numbers ' , this.firstNumber  , this.secondNumber );


this.answer = eval(this.firstNumber   + " " + this.operator + " "  +  this.secondNumber) ;

console.log('answer ' , this.answer );
}




}