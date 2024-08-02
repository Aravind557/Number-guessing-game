
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNum+1)+minNum);


let attempt = 0;
let running = true;
let guess;

while(running){
  guess = window.prompt(`Enter a number between ${minNum} and ${maxNum}`);
  guess = Number(guess);

  if(guess<minNum || guess>maxNum){
     window.alert("Please enter a valid number");
  }
  else if(isNaN(guess)){
    window.alert("Please enter a valid number");
  }
  else{
    attempt++;
    if(guess<answer){
      window.alert("TOO LOW!! Try again");
    }
    else if(guess > answer){
      window.alert("TOO HIGH!! Try again");
    }
    else{
      window.alert(`CORRECT. The answer is ${answer}. It took you ${attempt} attempts`);
      running = false;
    }

  }
}