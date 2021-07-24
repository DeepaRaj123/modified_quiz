

  class Question2 {

    constructor() {
      this.input_2 = createInput('Enter Option No..');
      this.button_2 = createButton('SUBMIT');
      
      this.question_2 = createElement('h3');
      this.option1_2 = createElement('h4');
      this.option2_2 = createElement('h4');
      this.option3_2 = createElement('h4');
      this.option4_2 = createElement('h4');
      
      this.answer_2 = createElement('h3')
      this.answer2_2 = createElement('h3')
      this.answer3_2 = createElement('h3')
      this.answer4_2 = createElement('h3')
    
      this.A2 = createElement('h3')
    
    }
  

    hide(){
      this.question_2.hide();
      this.option1_2.hide();
      this.option2_2.hide();
      this.option3_2.hide();
      this.option4_2.hide();
      this.answer_2.hide();
      this.answer2_2.hide();
      this.answer3_2.hide();
      this.answer4_2.hide();
    
      this.A2.hide();
      this.button_2.hide();
      this.input_2.hide();
     
    }

display(){


  this.question_2.html("What happens to plastic waste?" );
  this.question_2.position(640, 170);
  this.question_2.style('color','darkblue') 
  this.question_2.style('font-size','25px')
  this.question_2.size(200,45)
  this.option1_2.html("It is a biodegradable material so it eventually disintegrates" );
  this.option1_2.position(620, 380);
  this.option1_2.style('color','blue') 
  this.option1_2.style('font-size','15px')
  this.option1_2.size(150,65)
  this.option2_2.html("It never fully goes away, it just breaks into little pieces" );
  this.option2_2.position(855, 375);
  this.option2_2.style('color','blue') 
  this.option2_2.style('font-size','15px')
  this.option2_2.size(100,55)
  this.option3_2.html("There is no such thing as plastic waste, all plastic is recycled" );
  this.option3_2.position(650, 495);
  this.option3_2.style('color','blue') 
  this.option3_2.style('font-size','15px')
  this.option3_2.size(110,55)
  this.option4_2.html(" It is dumped in the ocean for fish to eat" );
  this.option4_2.position(855, 500);
  this.option4_2.style('color','blue') 
  this.option4_2.style('font-size','15px')
  this.option4_2.size(100,55)

  this.input_2.position(1105, 430);
  this.input_2.style('background','transparent') 
  this.input_2.style('font-size','19px')
  this.input_2.style('color','yellow')
  this.input_2.style('border','white')
  this.input_2.size(140,80)
  this.button_2.position(1092, 538);
  this.button_2.style('background','transparent') 
  this.button_2.style('border','white')
  this.button_2.style('font-size','34px')
  this.button_2.style('color','transparent')

 

  this.button_2.mousePressed(()=>{    
    this.answer_2.html("North Pacific Expedition 2012, a 36-day nautical research journey through the North Pacific subtropical gyre down to the Hawaiian islands, found this to be true.The team was studying plastic pollution in the ocean and found that out of the66,077 pieces of plastic collected in samples, 95% of it was millimeters in size.");
    this.answer_2.position(1070,285);
    this.answer_2.size(300,80)
    this.answer_2.style('font-size','16px')
    this.answer_2.style('color','blue')


    this.A2.html("Correct Option: 2");
    this.A2.position(1110,250)
    this.A2.style('font-size','20px')
    this.A2.style('color','darkblue')

    answer.scale = 0.33;
    answer.y = 370
    answer.x = 1210
    nextButton_2=createSprite(1300,470,10,10);
    nextButton_2.addImage("button", buttonImg);
    nextButton_2.scale=0.15;

  })

  if(mousePressedOver(nextButton_2)){
    this.hide();
    nextButton_2.visible=false;
    answer.scale = 0.15;
    answer.y = 460
    answer.x = width/1.2
 
    Q=3;
    if(Q===3){
     
      question3=new Question3();
      question3.display();
      w3.destroy();
   }

  }


}


  }