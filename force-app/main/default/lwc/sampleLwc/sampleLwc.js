import { LightningElement ,track } from 'lwc';

export default class SampleLwc extends LightningElement {

@track   dynamicGreeting = "World";

@track displayDiv = false ;

changeDynamicGreeting (event){

    console.log('event.target  : ' , event.target);

this.dynamicGreeting = event.target.value;
}


checkboxChange(event){

    this.displayDiv =  event.target.checked ;
}

@track cityList = ['Jaipur' , 'Delhi'];

}