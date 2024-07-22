mathPeople = {
    "Shakuntala Devi" : ["Known as the Human Computer", "Had amazing mental math abilities", "Set a guiness world record"],
    "Pythagoras" : ["Made the Pythagorean Theorem", "Helped with understanding of triangular relationships", "Founded a school in Croton"],
    "Alan Turing" : ["Known as the Father of Modern Computing", "Made the turing machine", "Helped the allies win world war 2"],
    "Euclid" : ["Was in ancient Alexandria", "Made textbook. 'Elements'", "Helped unify and expand theories of geometry"],
    "Al-Khwarizmi" : ["Persian scholar", "Worked in feild of algebra", "Influnced many modern day algebra"],
    "Isaac Newton" : ["Developed laws of gravity and motion", "Studied alchemy", "Made contributions to calculus and astronomy"],
    "Maryan Mirzkhani" : ["Only woman to win a Fields Medal", "Worked in Riemann surfaces", "Contributed to hyperbolic geometry"],
    "Sophie Germain" : ["Faced adversity for being female", "Contributed in number theory and elasticity theory", "Taught herself with her father's textbooks"],
    "Grigori Perelman" : ["Is a russion mathematician", "Solved the Poincare conjecture", "After solving the conjecture he dvlined to take the prize money"],
    "Carl Friedrich Gauss" : ["Known as the Prince of Mathematicians", "Made contributions to statistics, differential equations, and number thoery", "Very gifted from young age"],
    "Srinivassa Ramanujan" : ["No formal education", "Contributed to number theory, analysis, and continued fractions", "Is and indian mathematician"],
    "Emmy Noether" : ["Contributed in theoretical physics and abstract algebra", "Is a german mathematician", "Made Noether's theroem"],
    "Albert Einstein" : ["Contributed to theoretical physics  but also mathematical physics", "Discovered the theory of relativity", "Didn't learn to speak until he was three"],
    "Katherine Johnson" : ["Pushed passed adversity from her black color", "Worked at NASA and helped for the success of many missions", "Movie, 'Hidden Figures' made after her"],
    "Terence Tao" : ["Won a gold medal in the International Math Olympiad", "Awarded the Fields Medal", "Made breakthroughs in representation theory, harmonic analysis, and more"],
    "Hypatia" : ["Lived in Alexandria", "First female mathematician to be recorded well", "Helped with math, astronomy, and philosophy"],
    "Fibonacci" : ["Made the fibonacci sequence", "Introduced the Hindu-Arabic numeral system to Europe", "Also known as Leonardo of Pisa"],
}

let curNum = 0;
let score = 0;
let curAnswer = null;
let finalArr = [];

function answer(num){
    if (finalArr[num-1] == curAnswer){
        score+=1;
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
    if (curNum > 16){
        ending()
        return
    }
    question = document.querySelector('.question-text')
    for (let i=0; i<3; i++){
        question.innerHTML += '• ' + Object.values(mathPeople)[curNum][i] + "<br>"
    }

    answerArray = [];
    curAnswer = Object.keys(mathPeople)[curNum];
    answerArray.push(curAnswer);

    while(answerArray.length < 4){
        var r = Math.floor(Math.random() * 17);
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
    turnOnEnd('You score was, ' + score + ". Your percent correct was, " + Math.round((score/curNum)*100) + '%.');
}   

function statUpdate() {
    document.querySelector('.progress').innerHTML = 'Progress: ' + curNum + '/17';
    document.querySelector('.score').innerHTML = 'Score: ' + score;
    document.querySelector('.percent').innerHTML = 'Percent: ' + Math.round((score/curNum)*100) + '%'
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