class Hangman{
    constructor(word){
    this.word=word.split();
    this.correctLetter="_".repeat(this.word.length).split('');
    for(let i=0;i<=this.word.length;i++){
        if(!/\w/.test(this.word[i])){
            this.correctLetter[i]=this.word[i];
        }
    }
    this.guessesLeft=6;
    this.wrongGuesses=[];
    }
    
    display(char){
        if(this.guessesLeft===0){
            return false;
        }
        let charChanged=false;
        for(let i=0;i<=this.word.length;i++){
            if(this.word[i].toLowerCase()==char.toLowerCase()){
                this.correctLetter[i]=this.word[i];
                charChanged=true;
            }
        }

        if(!charChanged && this.wrongGuesses.indexOf(char.toLowerCase()===-1)){
            this.guessesLeft-=1;
            this.wrongGuesses.push(char.toLowerCase());  
        }

        if(this.correctLetter.join('')===this.word.join('')){
            fill("orange");
            text('You Win!',335,displayHeight/5);
        }

        else if(this.guessesLeft===0){
            fill(255,0,0);
            text("Game Over, the word was: "+ wordlist,300,displayHeight/5);
        }

        return charChanged;
    }
    
}