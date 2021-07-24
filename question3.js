 class Question3 {

    constructor() {
      this.input_3 = createInput('Enter Option No..');
      this.button_3 = createButton('SUBMIT');
      
      this.question_3 = createElement('h3');
      this.option1_3 = createElement('h4');
      this.option2_3 = createElement('h4');
      this.option3_3 = createElement('h4');
      this.option4_3 = createElement('h4');
      
      this.answer_3 = createElement('h3')
      this.answer2_3 = createElement('h3')
      this.answer3_3 = createElement('h3')
      this.answer4_3 = createElement('h3')

      this.A3 = createElement('h3')
    
    }
  

    hide(){
      this.question_3.hide();
      this.option1_3.hide();
      this.option2_3.hide();
      this.option3_3.hide();
      this.option4_3.hide();
      this.answer_3.hide();
      this.answer2_3.hide();
      this.answer3_3.hide();
      this.answer4_3.hide();
    
    this.A3.hide();
    
      this.button_3.hide();
      this.input_3.hide();
    }

display(){


  this.question_3.html("How many marine species are harmed by plastic pollution?" );
  this.question_3.position(640, 160);
  this.question_3.style('color','darkblue') 
  this.question_3.style('font-size','25px')
  this.question_3.size(200,45)
  this.option1_3.html("52" );
  this.option1_3.position(630, 375);
  this.option1_3.style('color','blue') 
  this.option1_3.style('font-size','25px')
  this.option1_3.size(100,55)
  this.option2_3.html("693" );
  this.option2_3.position(855, 375);
  this.option2_3.style('color','blue') 
  this.option2_3.style('font-size','25px')
  this.option2_3.size(100,55)
  this.option3_3.html("1,326" );
  this.option3_3.position(650, 495);
  this.option3_3.style('color','blue') 
  this.option3_3.style('font-size','25px')
  this.option3_3.size(100,55)
  this.option4_3.html("5,749" );
  this.option4_3.position(855, 495);
  this.option4_3.style('color','blue') 
  this.option4_3.style('font-size','25px')
  this.option4_3.size(100,55)

  this.input_3.position(1105, 430);
  this.input_3.style('background','transparent') 
  this.input_3.style('font-size','19px')
  this.input_3.style('color','yellow')
  this.input_3.style('border','white')
  this.input_3.size(140,80)
  this.button_3.position(1092, 538);
  this.button_3.style('background','transparent') 
  this.button_3.style('border','white')
  this.button_3.style('font-size','34px')
  this.button_3.style('color','transparent')

 

  this.button_3.mousePressed(()=>{    
    this.answer_3.html("A 2015 Plymouth University study compiled reports recorded from around the world and found evidence of 44,000 animals becoming entangled or swallowing plastic debris, accounting for a total of 693 marine species. At least 17% of those affected species are listed as threatened or near threatened.");
    this.answer_3.position(1070,285);
    this.answer_3.size(300,80)
    this.answer_3.style('font-size','16px')
    this.answer_3.style('color','blue')


    this.A3.html("Correct Option: 2");
    this.A3.position(1110,250)
    this.A3.style('font-size','20px')
    this.A3.style('color','darkblue')

    answer.scale = 0.33;
    answer.y = 370
    answer.x = 1210
    nextButton_3=createSprite(1300,470,10,10);
    nextButton_3.addImage("button", buttonImg);
    nextButton_3.scale=0.15;

  })

  if(mousePressedOver(nextButton_3)){
    this.hide();
    nextButton_3.visible=false;
    answer.scale = 0.15;
    answer.y = 460
    answer.x = width/1.2
 
    Q=4;

    if(Q===4){
     
      question4=new Question4();
      question4.display();
      w5.destroy();
      }

  }


}


  }