mathPeople = {
    "51" : ["30+17+4", 2],
    "386" : ["751-365", 2],
    "121" : ["What is the area of a sqaure with side length of, 11", 3],
    "80" : ["8*10", 3],
    "6" : ["There are 75 kids in a school. 4 buses that can hold 21 kids show up. How many seats will be left over?", 4],
    "4/5" : ["1/5 + 3/5", 4],
    "81.59" : ["52.38 + 29.21", 5],
    "1/6" : ["1/3 of a pie is left. Billy and Jean want to share the piece. How much of the pie will Billy get?", 5],
    "2/3" : ["(4 2/3) / 7", 6],
    "100" : ["Solve x in the ratio, 3:4 = 75:x", 6],
    "3" : ["What is the slope in the eqation, y = 3x + 7", 7],
    "135" : ["What is the supplementary angele to and angle with, 45 degrees", 7],
    "4" : ["The mass of a ant is, 10^-4. There are 4*10^4 ants in a hive. What is total mass of the ants?", 8],
    "29" : ["The sum of 5 consecutive odd numbers is 145. What is the third number in the sequence?", 8],
}

let curNum = 0;
let score = 0;
let curAnswer = null;
let finalArr = [];

function answer(num){
    if (finalArr[num-1] == curAnswer){
        score+= Object.values(mathPeople)[curNum][1];
        curNum += 1;
        statUpdate()
        loadQuestion();
    } else {
        curNum += 1;
        statUpdate()
        loadQuestion();
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

function loadQuestion(){
    clear();
    if (curNum > 13){
        ending()
        return
    }

    question = document.querySelector('.question-text')
    question.innerHTML = Object.values(mathPeople)[curNum][0];


    answerArray = [];
    curAnswer = Object.keys(mathPeople)[curNum];
    answerArray.push(curAnswer);

    while(answerArray.length < 4){
        var r = Math.floor(Math.random() * 14);
        if(answerArray.indexOf(Object.keys(mathPeople)[r]) ==  -1){
             answerArray.push(Object.keys(mathPeople)[r]);
        }    
    }
     
    finalArr = shuffleArray(answerArray)

    document.querySelector('.choice1').innerHTML = finalArr[0]
    document.querySelector('.choice2').innerHTML = finalArr[1]
    document.querySelector('.choice3').innerHTML = finalArr[2]
    document.querySelector('.choice4').innerHTML = finalArr[3]
}

function clear(){
    document.querySelector('.choice1').innerHTML = ''
    document.querySelector('.choice2').innerHTML = ''
    document.querySelector('.choice3').innerHTML = ''
    document.querySelector('.choice4').innerHTML = ''
    document.querySelector('.question-text').innerHTML = ''
}

function ending(){
    grade = null;

    if (score < 10){
        grade='kindergarten'
    } else if (score < 18) {
        grade= '2nd'
    } else if (score < 26) {
        grade= '3rd'
    }else if (score < 35) {
        grade= '4th'
    }else if (score < 40) {
        grade='5th'
    }else if (score < 48) {
        grade='6th'
    }else if (score < 55) {
        grade='7th'
    }else if (score < 68) {
        grade='8th'
    }else{
        grade='High school or above'
    }

    turnOnEnd('Your grade level is, ' + grade);
}   

function statUpdate() {
    document.querySelector('.progress').innerHTML = 'Progress: ' + curNum + '/14';
}

function turnOnEnd(text) {
    myEnd.classList.add("show");
    elem = document.querySelector('.end-text');
    elem.innerHTML = text;
}

function closeEnd() {

    myEnd.classList.remove("show");
    elem = document.querySelector('.end-text');
    elem.innerHTML = '';

    curNum = 0;
    score = 0;
    curAnswer = null;
    finalArr = [];

    loadQuestion();
    statUpdate()
}