let hangman;
const wordlist='https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=7&maxLength=7&api_key=ac7d2c9c88e803fa4c12930cd2b025479691544d38f170946';

function preload(){
  loadJSON(wordlist,getword);
}

function getword(data){
  print(data.wordlist);
  hangman=new Hangman("random");
}

function setup(){
  createCanvas(1200,800);
  console.log(wordlist);
  textFont("Trebuchet");
  frameRate(12);
}

function draw(){
  background(196, 156, 24);
  textSize(36);
  text("Start typing!",500,50);

  for(i=0;i<=(drawing.length-hangman.guessesLeft);i++){
    for (const obj of drawing[i]){
      if(obj.circle){
        ellipse(obj.x,obj.y,obj.radius,obj.radius);
      }
      else{
        line(obj.x1,obj.y1,obj.x1+obj.x2,obj.y1+obj.y2);
      }
    }
  }

  textSize(36);
  textFont("Century Gothic");
  text("Guesses Left: " + hangman.guessesLeft, 480,775);

  textSize(36);
  textFont("Century Gothic");
  text(hangman.correctLetter.join(''),200,200);

  textSize(20);
  textFont("Century Gothic");
  text(hangman.wrongGuesses.join(',').replace(/(\S{22})/g,'$1'),700,400);
}

function keyPressed(){
  if(key.length == 1 && /\w/.test(key)){
    hangman.display(key);
  }
}
