class Question{
    constructor(){
    this.question1 = createElement('h3')
    this.title1 = createElement('h5')
    this.title2 = createElement('h5')
    this.input = createInput()
    this.input2 = createInput()
    this.button = createButton('Submit')
    }
    hide(){
    this.question1.hide()
    this.input.hide()
    this.input2.hide()
    this.button.hide()
    this.title1.hide();
    this.title2.hide();
    this
    }
    display(){
     this.question1.html('what makes you happy?')
     this.question1.position(50,20)
     this.title1.html('enter your name: ')
     this.title1.position(50,60)
     this.input.position(50,100)
     this.title2.html('your answer: ')
     this.title2.position(50,110)
     this.input2.position(50,150)
     this.button.position(50,200)
     this.button.mousePressed(
         ()=>{
            this.question1.hide()
            this.input.hide()
            this.input2.hide()
            this.title1.hide()
            this.button.hide()
            this.title2.hide()
            this.greeting = createElement('h2')
            this.greeting.html('Thank you!')
            this.greeting.position(100,20);
            player.name = this.input.value()
            player.answer = this.input2.value()
            playerCount = playerCount+1
            player.index = playerCount;
            gameState = 1
            player.update()
            player.updateCount(playerCount);
         }
     )
    }
}