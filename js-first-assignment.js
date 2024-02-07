// ------------------Problem 1----------------//

function calculateMoney(ticketSale) {
    if (ticketSale <= 0) {
        return 'Invalid Number.';
    }
    const ticketValue = ticketSale * 120;
    const dailyCost = (8 * 50) + 500;
    return ticketValue - dailyCost;
}
const totalTicket = -93;
const totalMoney = calculateMoney(totalTicket);
// console.log(totalMoney);



// -------------  Problem- 2----------------//

function checkName(name) {
    if (typeof name !== 'string') {
        return 'Invalid';
    }

    const nameCase = name.toLowerCase();
    const letterArr = nameCase.split('');
    const letterArrLstIndex = letterArr[letterArr.length - 1];

    const nameLastLetters = 'A, y, i , e , o , u, w';
    const nameLastLetter = nameLastLetters.toLowerCase();

    if (nameLastLetter.includes(letterArrLstIndex)) {
        return 'Good Name';
    }
    return 'Bad Name';
}

const childName = checkName('SalmaN');
// console.log(childName);


//-----------------------Problem -3---------------//

function deleteInvalids(numbers) {
    if (Array.isArray(numbers) === false) {
        return 'Please provide and array.';
    }

    const finalArr = [];

    for (const num of numbers) {
        if (!isNaN(num)) {
            if (typeof num === 'number') {
                finalArr.push(num);
            }
        }
    }
    return finalArr;
}
const myArray = 3;
const finalArray = deleteInvalids(myArray);
// console.log(finalArray);


//-----------------------problem 4----------------//

function password(obj) {
    const objName = obj.name;
    const objBirtYear = obj.birthYear;
    const objSiteName = obj.siteName;

    if (objBirtYear < 1000 || typeof objName === 'undefined' || typeof objBirtYear === 'undefined' || typeof objSiteName === 'undefined') {

        return 'Invalid';
    }

    const siteNameCap = objSiteName.charAt(0).toUpperCase() + objSiteName.slice(1);
    const getPassword = `${siteNameCap}#${objName}@${objBirtYear}`;
    return getPassword;

}

const person = { birthYear: 1995, name: 'rimon', siteName: 'webanalyticspark' };
const getResult = password(person);
// console.log(getResult);


// -------------Problem 5----------------//


function monthlySavings(arr, livingCost) {

    if (Array.isArray(arr) === false || isNaN(livingCost) || typeof livingCost !== 'number') {
        return 'Invalid Input';
    }

    let livingCostValue = livingCost;
    let totalTax = 0;
    let getPaymentTotal = 0;

    for (const value of arr) {

        if (value >= 3000) {
            let tax = value * 20 / 100;
            totalTax += tax;
        }
        getPaymentTotal += value;
    }

    const totalSaving = (getPaymentTotal - totalTax - livingCostValue);

    if (totalSaving < 0) {
        return 'earn more';
    }
    return totalSaving;
}

const savingValue = monthlySavings(100, [900, 2700, 3400]);
// console.log('Total Savings:',savingValue);