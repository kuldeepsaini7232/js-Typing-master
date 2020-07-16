window.addEventListener("load",start);//start game when window will be load
let time=5;//after 5 second game will be stoped
let score=0;
let isplaying;
let word=document.getElementById("word");
let userinput=document.getElementById("userinput");
let timedisplay=document.getElementById("time");
let scoredisplay=document.getElementById("score");
let Message=document.getElementById("message");
   
const words=[//store the word in array 
'score','programing','array','computer',
'hardware','software','typing','ideapad'
];
function start()
{
    showword();//word display so user can play the game
    userinput.addEventListener("input",startmatch)//when user give input validate given word
    setInterval(countdown,1000);
}
function showword()
{ 
    let randomnumber=Math.floor(Math.random()*words.length);//genrate random number so user get different word each time
    word.innerHTML=words[randomnumber];//show the word based on random number
}
function startmatch()
{
    if(matchwords())
    {
       isplaying=true;
       showword();
       userinput.value="";
       score++;//increase the score
       time=6;
    }
    scoredisplay.innerHTML=score;
}
function matchwords()
{
  if(userinput.value===word.innerHTML)
  {
      Message.innerHTML='correct';
      return true;
  }
  else{
      Message.innerHTML='';
      return false;
  }
}
function countdown()
{
    if(time>0)
    {
        time--;
    }
    else if(time===0)
    {
        Message.innerHTML="game over!!!"
    }
    timedisplay.innerHTML=time;
}



