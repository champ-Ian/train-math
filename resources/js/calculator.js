

function calculate(){
    document.querySelector('.outputBox').innerHTML = '';
    try{
        value1 = document.querySelector('.firstValue').value;
        value2 = document.querySelector('.secondValue').value;
        operation = document.querySelector('.operation').value;
    }catch{
        turnOnPopup('Please enter proper values.')
    }
    value1 = +value1;
    value2 = +value2;
    if (value1=='NaN' || value2=="NaN"){
        turnOnPopup('Please enter proper values.')
        return
    }
    result= null;
    if (operation == 'add'){
        result = value1 + value2;
    }else if (operation == 'subtract'){
        result = value2-value1;
    }else if (operation == 'divide'){
        result = value2/value1;
    }else if (operation == 'multiply'){
        result = value1 * value2;
    }else if (operation == 'mod'){
        result = value1 % value2;
    }else if (operation =='choose'){
        result = (factorialize(value1))/(factorialize(value2) * factorialize(value1-value2));
    }else if (operation == 'power'){
        result = value1**value2;
    }else {
        result = (value1/value2)*100 + '%'
    }
    document.querySelector('.outputBox').innerHTML = result;

}

function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
}

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