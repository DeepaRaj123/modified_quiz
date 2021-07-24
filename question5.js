class Question5 {

  constructor() {
    this.input_5 = createInput('Enter Option No..');
    this.button_5 = createButton('SUBMIT');
    
    this.question_5 = createElement('h3');
    this.option1_5 = createElement('h4');
    this.option2_5 = createElement('h4');
    this.option3_5 = createElement('h4');
    this.option4_5 = createElement('h4');
    
    this.answer_5 = createElement('h3')
    this.answer2_5 = createElement('h3')
    this.answer3_5 = createElement('h3')
    this.answer4_5 = createElement('h3')

    this.A5= createElement('h3') 
  
  }


hide(){
this.question_5.hide();
this.option1_5.hide();
this.option2_5.hide();
this.option3_5.hide();
this.option4_5.hide();
this.answer_5.hide();
this.answer2_5.hide();
this.answer3_5.hide();
this.answer4_5.hide();
this.button_5.hide();
this.input_5.hide();
this.A5.hide();
}

display(){


this.question_5.html("Which are the top 5 contributing countries to the world’s plastic pollution?" );
this.question_5.position(640, 160);
this.question_5.style('color','darkblue') 
this.question_5.style('font-size','25px')
this.question_5.size(200,45)
this.option1_5.html("Russia, France, USA, Vietnam, India" );
this.option1_5.position(620, 375);
this.option1_5.style('color','blue') 
this.option1_5.style('font-size','17px')
this.option1_5.size(140,55)
this.option2_5.html("Indonesia, Thailand, USA, China, France" );
this.option2_5.position(845, 375);
this.option2_5.style('color','blue') 
this.option2_5.style('font-size','17px')
this.option2_5.size(140,55)
this.option3_5.html("USA, China, India, UK, Australia" );
this.option3_5.position(645, 510);
this.option3_5.style('color','blue') 
this.option3_5.style('font-size','17px')
this.option3_5.size(130,55)
this.option4_5.html("Thailand, China, Indonesia, Vietnam, Philippines" );
this.option4_5.position(845, 495);
this.option4_5.style('color','blue') 
this.option4_5.style('font-size','17px')
this.option4_5.size(140,55)

this.input_5.position(1105, 430);
this.input_5.style('background','transparent') 
this.input_5.style('font-size','19px')
this.input_5.style('color','yellow')
this.input_5.style('border','white')
this.input_5.size(140,80)
this.button_5.position(1092, 538);
this.button_5.style('background','transparent') 
this.button_5.style('border','white')
this.button_5.style('font-size','34px')
this.button_5.style('color','transparent')



this.button_5.mousePressed(()=>{    
  this.answer_5.html("These countries have all achieved significant growth in recent years, and although this is a good thing in terms of the improvement of quality of life, it also means that consumer demand of disposable plastics is outstripping the ability of the local waste management infrastructure to keep up with it.");
  this.answer_5.position(1070,285);
  this.answer_5.size(300,80)
  this.answer_5.style('font-size','17px')
  this.answer_5.style('color','blue')


  this.A5.html("Correct Option: 4");
  this.A5.position(1110,250)
  this.A5.style('font-size','20px')
  this.A5.style('color','darkblue')

  answer.scale = 0.33;
  answer.y = 370
  answer.x = 1210
  nextButton_5=createSprite(1300,470,10,10);
  nextButton_5.addImage("button", buttonImg);
  nextButton_5.scale=0.15;

})

if(mousePressedOver(nextButton_5)){
  this.hide();
  nextButton_5.visible=false;
  answer.scale = 0.15;
  answer.y = 460
  answer.x = width/1.2
  w4.visible = false;
  submit.visible = false;
  q.visible = false;
  q1.visible = false;
  q2.visible = false;
  q3.visible = false;
  q4.visible = false;
  answer.visible = false;
  title.visible = false;
  quizcompleted.visible = true;
  turtle.y = 480;
  thank.visible = true;


}


}


}