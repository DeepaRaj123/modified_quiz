class Question4 {

    constructor() {
      this.input_4 = createInput('Enter Option No..');
      this.button_4 = createButton('SUBMIT');
      
      this.question_4 = createElement('h3');
      this.option1_4 = createElement('h4');
      this.option2_4 = createElement('h4');
      this.option3_4 = createElement('h4');
      this.option4_4 = createElement('h4');
      
      this.answer_4 = createElement('h3')
      this.answer2_4 = createElement('h3')
      this.answer3_4 = createElement('h3')
      this.answer4_4 = createElement('h3')

      this.A4 = createElement('h3') 
    
    }
  

hide(){
  this.question_4.hide();
  this.option1_4.hide();
  this.option2_4.hide();
  this.option3_4.hide();
  this.option4_4.hide();
  this.answer_4.hide();
  this.answer2_4.hide();
  this.answer3_4.hide();
  this.answer4_4.hide();
  this.button_4.hide();
  this.input_4.hide();
  this.A4.hide();
}

display(){


  this.question_4.html("By what year is it predicted that plastic will outweigh fish in the ocean?" );
  this.question_4.position(640, 160);
  this.question_4.style('color','darkblue') 
  this.question_4.style('font-size','25px')
  this.question_4.size(200,45)
  this.option1_4.html("2020" );
  this.option1_4.position(630, 375);
  this.option1_4.style('color','blue') 
  this.option1_4.style('font-size','25px')
  this.option1_4.size(100,55)
  this.option2_4.html("3000" );
  this.option2_4.position(855, 375);
  this.option2_4.style('color','blue') 
  this.option2_4.style('font-size','25px')
  this.option2_4.size(100,55)
  this.option3_4.html("2050" );
  this.option3_4.position(650, 495);
  this.option3_4.style('color','blue') 
  this.option3_4.style('font-size','25px')
  this.option3_4.size(100,55)
  this.option4_4.html("2250" );
  this.option4_4.position(855, 495);
  this.option4_4.style('color','blue') 
  this.option4_4.style('font-size','25px')
  this.option4_4.size(100,55)

  this.input_4.position(1105, 430);
  this.input_4.style('background','transparent') 
  this.input_4.style('font-size','19px')
  this.input_4.style('color','yellow')
  this.input_4.style('border','white')
  this.input_4.size(140,80)
  this.button_4.position(1092, 538);
  this.button_4.style('background','transparent') 
  this.button_4.style('border','white')
  this.button_4.style('font-size','34px')
  this.button_4.style('color','transparent')

 

  this.button_4.mousePressed(()=>{    
    this.answer_4.html("A report done by the Ellen MacArthur Foundation found that there are over 150 million tons of plastic in the oceans today. That is about 1 ton of plastic for every 3 tons of fish. Keeping up a business-as-usual trend will have plastic outweighing fish in the ocean by 2050.");
    this.answer_4.position(1070,285);
    this.answer_4.size(300,80)
    this.answer_4.style('font-size','18px')
    this.answer_4.style('color','blue')


    this.A4.html("Correct Option: 3");
    this.A4.position(1110,250)
    this.A4.style('font-size','20px')
    this.A4.style('color','darkblue')

    answer.scale = 0.33;
    answer.y = 370
    answer.x = 1210
    nextButton_4=createSprite(1300,470,10,10);
    nextButton_4.addImage("button", buttonImg);
    nextButton_4.scale=0.15;

  })

  if(mousePressedOver(nextButton_4)){
    this.hide();
    nextButton_4.visible=false;
    answer.scale = 0.15;
    answer.y = 460
    answer.x = width/1.2
 
    Q=5;

    if(Q===5){
   
      question5=new Question5();
         question5.display();
         w2.destroy();
      }
  }


}


  }