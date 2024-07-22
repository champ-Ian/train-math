let rate = 0;
let score = 0;
let questionsCount = 0;
let streak = 0;
let questionOn = false;
let questionAnswer = null;
let questionsRight = 0;

const questions = {
    "Cities A and B are 45 miles apart. Alicia lives in A and Beth lives in B. Alicia bikes towards B at 18 miles per hour. Leaving at the same time, Beth bikes toward A at 12 miles per hour. How many miles from City A will they be when they meet?" : ["20", "24", "25", "26", "27", "E"], 

    "The weight of 1/3 of a large pizza together with 3 1/2 cups of orange slices is the same weight of 3/4 of a large pizza together with 1/2 cups of orange slices. A cup of orange slices weigh 1/4} of a pound. What is the weight, in pounds, of a large pizza?" : ["1 4/5", "2", "2 2/5", "3", "3 3/5", "A"], 

    "How many positive perfect squares less than 2023 are divisible by 5?" : ["8", "9", "10", "11", "12", "A"], 

    "A quadrilateral has all integer side lengths, a perimeter of 26, and one side of length 4. What is the greatest possible length of one side of this quadrilateral?" : ["9", "10", "11", "12", "13", "D"], 

    "An integer is assigned to each vertex of a cube. The value of an edge is defined to be the sum of the values of the two vertices it touches, and the value of a face is defined to be the sum of the values of the four edges surrounding it. The value of the cube is defined as the sum of the values of its six faces. Suppose the sum of the integers assigned to the vertices is 21. What is the value of the cube?" : ["42", "63", "84", "126", "252", "D"], 

    "Janet rolls a standard 6-sided die 4 times and keeps a running total of the numbers she rolls. What is the probability that at some point, her running total will equal 3?" : ["2/9", "49/216", "25/108", "17/72", "13/54", "B"], 

    "Barb the baker has developed a new temperature scale for her bakery called the Breadus scale, which is a linear function of the Fahrenheit scale. Bread rises at 110 degrees Fahrenheit, which is 0 degrees on the Breadus scale. Bread is baked at 350 degrees Fahrenheit, which is 100 degrees on the Breadus scale. Bread is done when its internal temperature is 200 degrees Fahrenheit. What is this, in degrees, on the Breadus scale?" : ["33", "34.5", "36", "37.5", "39", "D"], 

    "A digital display shows the current date as an 8-digit integer consisting of a 4-digit year, followed by a 2-digit month, followed by a 2-digit date within the month. For example, Arbor Day this year is displayed as 20230428. For how many dates in 2023 does each digit appear an even number of times in the 8-digital display for that date?" : ["5", "6", "7", "8", "9", "E"], 

    "Maureen is keeping track of the mean of her quiz scores this semester. If Maureen scores an 11 on the next quiz, her mean will increase by 1. If she scores an 11 on each of the next three quizzes, her mean will increase by 2. What is the mean of her quiz scores currently?" : ["4", "5", "6", "7", "8", "D"], 

    "Mrs. Jones is pouring orange juice into four identical glasses for her four sons. She fills the first three glasses completely but runs out of juice when the fourth glass is only 1/3 full. What fraction of a glass must Mrs. Jones pour from each of the first three glasses into the fourth glass so that all four glasses will have the same amount of juice?" : ["1/12", "1/4", "1/6", "1/8", "2/9", "C"], 

    "Carlos went to a sports store to buy running shoes. Running shoes were on sale, with prices reduced by 20% on every pair of shoes. Carlos also knew that he had to pay a 7.5% sales tax on the discounted price. He had 43 dollars. What is the original (before discount) price of the most expensive shoes he could afford to buy?" : ["46", "50", "48", "47", "49", "B"], 

    "A 3-4-5 right triangle is inscribed in circle A, and a 5-12-13 right triangle is inscribed in circle B. What is the ratio of the area of circle A to the area of circle B?" : ["9/25", "1/9", "1/5", "25/169", "4/25", "D"], 

    "Jackson's paintbrush makes a narrow strip with a width of 6.5 millimeters. Jackson has enough paint to make a strip 25 meters long. How many square centimeters of paper could Jackson cover with paint?" : ["162500", "162.5", "1625", "1625000", "16250", "C"], 

    "Maddy and Lara see a list of numbers written on a blackboard. Maddy adds 3 to each number in the list and finds that the sum of her new numbers is 45. Lara multiplies each number in the list by 3 and finds that the sum of her new numbers is also 45. How many numbers are written on the blackboard?" : ["10", "5", "6", "8", "9", "A"], 

    "The numbers 16 and 25 are a pair of consecutive positive squares whose difference is 9. How many pairs of consecutive positive perfect squares have a difference of less than or equal to 2023?" : ["674", "1011", "1010", "2019", "2017", "B"], 

    "You are playing a game. A 2 times 1 rectangle covers two adjacent squares (oriented either horizontally or vertically) of a 3 times 3 grid of squares, but you are not told which two squares are covered. Your goal is to find at least one square that is covered by the rectangle. A 'turn' consists of you guessing a square, after which you are told whether that square is covered by the hidden rectangle. What is the minimum number of turns you need to ensure that at least one of your guessed squares is covered by the rectangle?" : ["3", "5", "4", "8", "6", "C"], 

    "Mike cycled 15 laps in 57 minutes. Assume he cycled at a constant speed throughout. Approximately how many laps did he complete in the first 27 minutes?" : ["5", "7", "9", "11", "13", "B"], 

    "The sum of three numbers is 96. The first number is 6 times the third number, and the third number is 40 less than the second number. What is the absolute value of the difference between the first and second numbers?" : ["1", "2", "3", "4", "5", "E"], 

    "In some countries, automobile fuel efficiency is measured in liters per 100 kilometers while other countries use miles per gallon. Suppose that 1 kilometer equals m miles, and 1 gallon equals l liters. Which of the following gives the fuel efficiency in liters per 100 kilometers for a car that gets x miles per gallon?" : ["x/100lm", "xlm/100", "lm/100x", "100/xlm", "100lm/x", "E"], 

    "Square ABCD has side length 1. Points P, Q, R, and S each lie on a side of ABCD such that APQCRS is an equilateral convex hexagon with side length s. What is s?" : ["sqrt(2)/3", "1/2", "2-sqrt(2)", "1-sqrt(2)/4", "2/3", "C"], 

    "The least common multiple of a positive integer n and 18 is 180, and the greatest common divisor of n and 45 is 15. What is the sum of the digits of n?" : ["3", "6", "8", "9", "12", "B"], 

    "A data set consists of 6 (not distinct) positive integers: 1, 7, 5, 2, 5, and X. The average (arithmetic mean) of the 6 numbers equals a value in the data set. What is the sum of all possible values of X?" : ["10", "26", "32", "36", "40", "D"], 

    "How many three-digit positive integers have an odd number of even digits?" : ["150", "250", "350", "450", "550", "D"], 

    "How many of the first ten numbers of the sequence 121, 11211, 1112111, ... are prime numbers?" : ["0", "1", "2", "3", "4", "A"], 

    "For how many values of the constant k will the polynomial x^2+kx+36 have two distinct integer roots?" : ["6", "8", "9", "14", "16", "B"], 

    "Camila writes down five positive integers. The unique mode of these integers is 2 greater than their median, and the median is 2 greater than their arithmetic mean. What is the least possible value for the mode?" : ["5", "7", "9", "11", "13", "D"], 

    "A pair of fair 6-sided dice is rolled n times. What is the least value of n such that the probability that the sum of the numbers face up on a roll equals 7 at least once is greater than 1/2?" : ["2", "3", "4", "5", "6", "C"]

};

function clear(){
    const questionElem = document.querySelector(".question");
    questionElem.innerHTML = "";
    const bigA = document.querySelector(".bigA");
    bigA.innerHTML = ""
    const choiceElemA = document.querySelector(".a-choice");
    choiceElemA.innerHTML = "";
    const bigB = document.querySelector(".bigB");
    bigB.innerHTML = ""
    const choiceElemB = document.querySelector(".b-choice");
    choiceElemB.innerHTML = "";
    const bigC = document.querySelector(".bigC");
    bigC.innerHTML = ""
    const choiceElemC = document.querySelector(".c-choice");
    choiceElemC.innerHTML = "";
    const bigD = document.querySelector(".bigD");
    bigD.innerHTML = ""
    const choiceElemD = document.querySelector(".d-choice");
    choiceElemD.innerHTML = "";
    const bigE = document.querySelector(".bigE");
    bigE.innerHTML = ""
    const choiceElemE = document.querySelector(".e-choice");
    choiceElemE.innerHTML = "";
}

function question(){

    if (questionOn == true){
        turnOnPopup("Please solve the current question first.")
        return
    }

    let randomQuestion = Math.floor(Math.random() * Object.keys(questions).length)
    const questionElem = document.querySelector(".question");
    questionElem.innerHTML = Object.keys(questions)[randomQuestion];

    const bigA = document.querySelector(".bigA");
    bigA.innerHTML = "A)"
    const choiceElemA = document.querySelector(".a-choice");
    choiceElemA.innerHTML = Object.values(questions)[randomQuestion][0];
    const bigB = document.querySelector(".bigB");
    bigB.innerHTML = "B)"
    const choiceElemB = document.querySelector(".b-choice");
    choiceElemB.innerHTML = Object.values(questions)[randomQuestion][1];
    const bigC = document.querySelector(".bigC");
    bigC.innerHTML = "C)"
    const choiceElemC = document.querySelector(".c-choice");
    choiceElemC.innerHTML = Object.values(questions)[randomQuestion][2];
    const bigD = document.querySelector(".bigD");
    bigD.innerHTML = "D)"
    const choiceElemD = document.querySelector(".d-choice");
    choiceElemD.innerHTML = Object.values(questions)[randomQuestion][3];
    const bigE = document.querySelector(".bigE");
    bigE.innerHTML = "E)"
    const choiceElemE = document.querySelector(".e-choice");
    choiceElemE.innerHTML = Object.values(questions)[randomQuestion][4];

    questionOn = true;
    questionAnswer = Object.values(questions)[randomQuestion][5];
};

function answer(number){
    console.log(number);
    console.log(questionAnswer)
    console.log(questionOn)
    if (questionOn == true) {
        if (questionAnswer==number){
            turnOnPopup("Correct!")
            clear()
            questionOn = false;
            score+=1;
            document.querySelector(".curScore").innerHTML = "Score: " + score;
            streak+=1;
            document.querySelector(".streak").innerHTML = "Streak: " + streak;
            questionsCount+=1;
            document.querySelector(".questions").innerHTML = "Questions: " + questionsCount;
            questionsRight+=1;
            document.querySelector(".rate").innerHTML = "Rate: " + Math.round((questionsRight/questionsCount)*100) + "%";

        } else {
            turnOnPopup("Incorrect, the correct answer was, " + questionAnswer + '.');
            clear();
            
            questionOn = false;
            score-=1;
            document.querySelector(".curScore").innerHTML = "Score: " + score;
            streak=0;
            document.querySelector(".streak").innerHTML = "Streak: " + streak;
            questionsCount+=1;
            document.querySelector(".questions").innerHTML = "Questions: " + questionsCount;
            document.querySelector(".rate").innerHTML = "Rate: " + Math.round((questionsRight/questionsCount)*100) + "%";
        }
    };
};

function turnOnPopup(text) {
    myPopup.classList.add("show");
    elem = document.querySelector('.popup-text');
    elem.innerHTML = text;
}

function closePopup() {
    myPopup.classList.remove("show");
    elem = document.querySelector('.popup-text');
    elem.innerHTML = '';
}

