


function calculateSum() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const sum = Number(num1) + Number(num2);
    document.getElementById('results').value = sum;
    console.log(sum);
}

document.getElementById('resultButton').addEventListener('click', calculateSum);

function calculateSub() {
    const num1 = document.getElementById('num11').value;
    const num2 = document.getElementById('num22').value;
    const sum = Number(num1) - Number(num2);
    document.getElementById('results').value = sum;
    console.log(sum);
}

document.getElementById('resultButtonn').addEventListener('click', calculateSub);

function calculateProd() {
    const num1 = document.getElementById('num111').value;
    const num2 = document.getElementById('num222').value;
    const sum = Number(num1) * Number(num2);
    document.getElementById('results').value = sum;
    console.log(sum);
}

document.getElementById('resultButtonnn').addEventListener('click', calculateProd);

function calculateDiv() {
    const num1 = document.getElementById('num11111').value;
    const num2 = document.getElementById('num22222').value;
    const sum = Number(num1) / Number(num2);
    document.getElementById('results').value = sum;
    console.log(sum);
}

document.getElementById('resultButtonnnn').addEventListener('click', calculateDiv);