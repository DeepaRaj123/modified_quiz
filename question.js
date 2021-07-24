class Question {

    constructor() {
      this.input = createInput('Enter Option No..');
      this.button = createButton('SUBMIT');
      
      this.question = createElement('h3');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');
      
      this.answer = createElement('h3')
      this.answer2 = createElement('h3')
      this.answer3 = createElement('h3')
      this.answer4 = createElement('h3')

      this.A = createElement('h3') 
    
    }
  

hide(){
  this.question.hide();
  this.option1.hide();
  this.option2.hide();
  this.option3.hide();
  this.option4.hide();
  this.answer.hide();
  this.answer2.hide();
  this.answer3.hide();
  this.answer4.hide();
  this.button.hide();
  this.input.hide();
  this.A.hide();
}

display(){


  this.question.html("Approx how much of plastic trash winds up in our oceans each year?" );
  this.question.position(640, 160);
  this.question.style('color','darkblue') 
  this.question.style('font-size','25px')
  this.question.size(200,45)
  this.option1.html("18 billion pounds " );
  this.option1.position(630, 375);
  this.option1.style('color','blue') 
  this.option1.style('font-size','25px')
  this.option1.size(100,55)
  this.option2.html("20 billion pounds " );
  this.option2.position(855, 375);
  this.option2.style('color','blue') 
  this.option2.style('font-size','25px')
  this.option2.size(100,55)
  this.option3.html("15 billion pounds " );
  this.option3.position(650, 495);
  this.option3.style('color','blue') 
  this.option3.style('font-size','25px')
  this.option3.size(100,55)
  this.option4.html("13 billion pounds " );
  this.option4.position(855, 495);
  this.option4.style('color','blue') 
  this.option4.style('font-size','25px')
  this.option4.size(100,55)

  this.input.position(1105, 430);
  this.input.style('background','transparent') 
  this.input.style('font-size','19px')
  this.input.style('color','yellow')
  this.input.style('border','white')
  this.input.size(140,80)
  this.button.position(1092, 538);
  this.button.style('background','transparent') 
  this.button.style('border','white')
  this.button.style('font-size','34px')
  this.button.style('color','transparent')

 

  this.button.mousePressed(()=>{    
    this.answer.html("According to a study done by the University of Georgia, 18 billion pounds of plastic trash winds up in our oceans each year. That is enough trash to cover every foot of coastline around the world with five full trash bags of plastic compounding every year.");
    this.answer.position(1070,285);
    this.answer.size(300,80)
    this.answer.style('font-size','18px')
    this.answer.style('color','blue')


    this.A.html("Correct Option: 1");
    this.A.position(1110,250)
    this.A.style('font-size','20px')
    this.A.style('color','darkblue')

    answer.scale = 0.33;
    answer.y = 370
    answer.x = 1210
    nextButton=createSprite(1300,470,10,10);
    nextButton.addImage("button", buttonImg);
    nextButton.scale=0.15;

  })

  if(mousePressedOver(nextButton)){
    this.hide();
    nextButton.visible=false;
    answer.scale = 0.15;
    answer.y = 460
    answer.x = width/1.2
 
    Q=2;
    if(Q===2){
     
      question2=new Question2();
      question2.display();
      w1.destroy();
   }

  }


}


  }