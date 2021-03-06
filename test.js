//This files holds all your unit testing for your calculation functions

function testAdd(){
    var result = addNumbers(17, 13);
    if(result.value !== 30){
        console.error('addition test - FAILED', result.value);
    } else {
        console.log('addition test - SUCCESS', result.value);
    }
}

testAdd();

function testSubtract(){
    var result = subtractNumbers(15, 10);
    if(result.value !== 5){
        console.error('subtraction test - FAILED', result.value);
    } else {
        console.log('subtraction test - SUCCESS', result.value);
    }
}

testSubtract();

function testMultiply(){
    var result = multiplyNumbers(6, 5);
    if(result.value !== 30){
        console.error('multiplication test - FAIL', result.value);
    } else {
        console.log('multiplication test - SUCCESS', result.value);
    }
}

testMultiply();

function testDivide(){
    var result = divideNumbers(2, 2);
    if(result.value !== 1){
        console.error('division test - FAILED', result.value);
    } else {
        console.log('division test - SUCCESS', result.value);
    }
}

testDivide();

function testHypot(){
    var result = hypotNumbers(3, 4);
    if(result.value !== 25){
        console.error('hypotenuse test - FAILED', result.value);
    } else {
        console.log('hypotenuse test - SUCCESS', result.value);
    }
}

testHypot();

function testEvenOdd(){
    var result = evenOdd(19);
    if(result.value === 0){
        console.log('This number is even!');
    } else {
        console.log('This number is odd!');
    }
}

testEvenOdd();

function testPrime(){
    var result = findPrime(24);
    if(result === true){
        console.log('This number is prime!');
    } else {
        console.log('This number is not prime!');
    }
    console.log('this is the result: ' + result);
}

testPrime();