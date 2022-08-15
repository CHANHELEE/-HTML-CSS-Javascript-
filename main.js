//랜덤 번호 지정 
//유저가 번호를 입력한다 * go 버튼을 누른다 
//유저가 랜덤번호를 맞추면 , 맞췄습니다 라는 메세지를 보여준다. 
//랜덤번호 < 유저번호= down , 랜덤번호 > 유저번호 = up , 랜덤번호 == 유저번호 = 게임끝
//reset 버튼을 누르면 게임이 리셋 된다. 
//5번의 기회를 다쓰면 게임이 끝난다.  
// 유저가 1~100 범위 밖의 숫자를 입력하면 기회를 깎지 않고 알려준다.
// 유저가 이미 입력한 수를 다시 입력하면 기회를 깎지 않고 알려준다.  

let computerNum = 0
let cnt = 5
let gameOver= false
let inputArray=[]


let playButton = document.getElementById('playButton');
let userInput = document.getElementById('userInput');
let resultArea = document.getElementById('resultArea');
let resetButton = document.getElementById('resetButton');
let cntUser = document.getElementById('cnt');


playButton.addEventListener('click',play)
resetButton.addEventListener('click',reset)

pickRandomNum()


function pickRandomNum(){
  computerNum =Math.floor(Math.random()*100)+1;
  console.log(computerNum)
}


function play() {
  let userValue = userInput.value;
  
  if (inputChecker() && arrayChecker()){
    cnt --;
    inputArray.push(userInput.value);
    if (userValue == computerNum){
      resultArea.textContent = "정답입니다!!"
      return playButton.disabled = true
    }
    else if(userValue > computerNum){
      resultArea.textContent = "Down!!"
    }
    else if(userValue < computerNum){
      resultArea.textContent = "Up!!"
      }
  }
  else if(inputChecker()==false){
    resultArea.textContent = "1~100 사이의 숫자만 입력해주세요!"
  }else{
    return resultArea.textContent = "전에 입력했던 수를 다시 입력했습니다."
  }

  cntUser.textContent = `남은기회: ${cnt}`

  if(cntChecker()== false ){
    resultArea.textContent = "5번의 기회를 모두 사용했습니다"
    return playButton.disabled = true
  }


}


function reset(){
  pickRandomNum()
  cnt = 5
  cntUser.textContent = `남은기회: ${cnt}`
  resultArea.textContent = ""
  playButton.disabled = false
  inputArray=[]
}

function cntChecker(){
  if(cnt >= 1){
    return true
  }
  else {
    return false
  }
}

function inputChecker(){
  if(userInput.value >= 1 && userInput.value <= 100){
      return true
  }else if(userInput.value == ""){
    return false
  }
  else{
    return false
  }
}

function arrayChecker(){
  if(inputArray.includes(userInput.value)){
    return false;
  }else{ return true; }
}

