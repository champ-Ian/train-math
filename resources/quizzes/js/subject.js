
mathQuestions = {
    "Four distinct circles are drawn in a plane. What is the maximum number of points where at least two of the circles intersect?" : ['12', 'CandD'],

    "How many different integers can be expressed as the sum of three distinct members of the set {1,4,7,10,13,16,19}?" : ['13', 'CandD'],

    "Alice has 24 apples. In how many ways can she share them with Becky and Chris so that each of the three people has at least two apples?" : ['190', 'CandD'],

    "Halfway through a 100-shot archery tournament, Chelsea leads by 50 points. For each shot, a bullseye scores 10 points, with other possible scores being 8, 4, 2, and 0 points. Chelsea always scores at least 4 points on each shot. If Chelsea's next n shots are bullseyes she will be guaranteed victory. What is the minimum value for n? " : ['42', 'algebra'],

    "Samia set off on her bicycle to visit her friend, traveling at an average speed of 17 kilometers per hour. When she had gone half the distance to her friend's house, a tire went flat, and she walked the rest of the way at 5 kilometers per hour. In all, it took her 44 minutes to reach her friend's house. In kilometers rounded to the nearest tenth, how far did Samia walk?" : ['2.8', 'algebra'],

    "A function f is defined recursively by f(1) = f(2) = 1 and f(n) = f(n-1) - f(n-2) + n for all integers n > 2. What is f(2018)?" : ['2017', 'algebra'],

    "In multiplying two positive integers a and b, Ron reversed the digits of the two-digit number a. His erroneous product was 161. What is the correct value of the product a and b?" : ['224', 'number-theory'],

    "What is the sum of the exponents of the prime factors of the square root of the largest perfect square that divides 12!?" : ['8', 'number-theory'],

    "Let S be the set of all positive integer divisors of 100,000. How many numbers are the product of two distinct elements of S?" : ['117', 'number-theory'],

    "An insect lives on the surface of a regular tetrahedron with edges of length 1. It wishes to travel on the surface of the tetrahedron from the midpoint of one edge to the midpoint of the opposite edge. What is the length of the shortest such trip? (Note: Two edges of a tetrahedron are opposite if they have no common endpoint.)" : ['1', 'geometry'],

    "In triangle ABC, AB = 13, BC = 14, AC = 15. Let D denote the midpoint of BC and let E denote the intersection of BC with the bisector of angle BAC. Which of the following is closest to the area of triangle ADE?" : ['3', 'geometry'],

    "Square PQRS lies in the first quadrant. Points (3,0), (5,0), (7,0), and (13,0) lie on lines SP, RQ, PQ, and SR, respectively. What is the sum of the coordinates of the center of the square PQRS?" : ['32/5', 'geometry'],
}

let curQuestion = 0;
// CanD, algebra, number-theory, geometry
let score = [0,0,0,0];

function answer(){
    answerthing = document.querySelector('.answer-input').value

    if (curQuestion>10){
        ending()
        return
    }
    if (answerthing==Object.values(mathQuestions)[curQuestion][0]){
        curQuestion+=1;
        
        topic = Object.values(mathQuestions)[curQuestion][1]
        if (topic=='CandD'){
            score[0] += 1;
        } else if (topic=='algebra'){
            score[1] += 1;
        } else if (topic == 'number-theory'){
            score[2] += 1;
        } else{
            score[3] += 1;
        }
        
        loadQuestion()
    } else{
        curQuestion+=1;
        loadQuestion()
    }
}

function loadQuestion(){
    clear();
    statUpdate()

    question = document.querySelector('.question-text')
    question.innerHTML = Object.keys(mathQuestions)[curQuestion]

}

function clear(){
    document.querySelector('.question-text').innerHTML = ''
    document.querySelector('.answer-input').value = ''
}

function ending(){
    bestSubject = []
    
    let max = -1;

    for (i=0; i<4; i++){
        if (score[i] > max){
            bestSubject = [i]
            max = score[i]
        } else if (score[i] == max){
            bestSubject.push(i)
        }
    }

    const CandP = bestSubject.indexOf(0)
    const algebra = bestSubject.indexOf(1)
    const number_theory = bestSubject.indexOf(2)
    const geometry = bestSubject.indexOf(3)

    if (CandP !== -1){
        bestSubject[CandP] = ' Counting and Probability'
    } 
    if (algebra !== -1){
        bestSubject[algebra] = ' Algebra'
    } 
    if (number_theory !== -1){
        bestSubject[number_theory] = ' Number Theory'
    } 
    if (geometry !== -1){
        bestSubject[geometry] = ' Geometry'
    } 


    if (bestSubject.length == 1){
        turnOnEnd('Your best math subject is,' + bestSubject[0]) 
    } else {   
        turnOnEnd('Your best math subject are,' + bestSubject)
    }
}

function statUpdate() {
    document.querySelector('.progress').innerHTML = 'Progress: ' +  curQuestion + '/12';
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

    curQuestion = 0;
    score = [0,0,0,0]

    loadQuestion();
    statUpdate()
}
