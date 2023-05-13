let currentBalance = document.getElementById('currentBalance')
let loanAmount = document.getElementById('loanAmount')
let creditHistory = document.getElementById('creditHistory')
let lastDeposit = document.getElementById('lastDeposit')
let lastLoan = document.getElementById('lastLoan')
let accountType = document.getElementById('accountType')
let repaymentPeriod = document.getElementById('repaymentPeriod')
let Points = document.getElementById('Points')
// points = 0


function validation(){
    let loan = document.querySelectorAll('.Loan')
let error = false
for(let i = 0; i<loan.length; i++){
    if(loan[i].value == "" || loan[i].value == null){
        loan[i].nextElementSibling.innerHTML = loan[i].previousElementSibling.innerHTML + "'is requied"
        // error=true
    }else {
        loan[i].nextElementSibling.innerHTML == ""
    } 
}
}

function eligibility(){
    if(currentBalance.value > loanAmount.value ){
        Points.innerHTML = 10
    }else if(currentBalance.value < loanAmount.value){
        Points.innerHTML = -10
    }

    if()
}

document.getElementById('btn').onclick = () => {
    validation()
    eligibility()
    // alert('working')
}