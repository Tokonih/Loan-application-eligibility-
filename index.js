let currentBalance = document.getElementById('currentBalance')
let loanAmount = document.getElementById('loanAmount')
let creditHistory = document.getElementById('creditHistory')
let lastDeposit = document.getElementById('lastDeposit')
let lastLoan = document.getElementById('lastLoan')
let accountType = document.getElementById('accountType')
let repaymentPeriod = document.getElementById('repaymentPeriod')
let Points = document.getElementById('Points')
// Points = 0
// Points.innerHTML = Points 

function validation() {
    let loan = document.querySelectorAll('.Loan')
    let error = false
    for (let i = 0; i < loan.length; i++) {
        if (loan[i].value == "" || loan[i].value == null) {
            loan[i].nextElementSibling.innerHTML = loan[i].previousElementSibling.innerHTML + " is requied"
            // error=true
        } else {
            loan[i].nextElementSibling.innerHTML == ""
        }
    }
}

function eligibility() {
    if (currentBalance.value > loanAmount.value) {
        Points.innerHTML ++
    } else if (currentBalance.value < loanAmount.value) {
        Points.innerHTML--
        // Points.innerHTML = -10
    }


    // 6 months credit history
    if (creditHistory.value < 6) {
        Points.innerHTML++
    } else if (creditHistory.value > 6) {
        Points.innerHTML--
    }


    // last Deposite

    let inputDate = new Date(lastDeposit.value)
    let currentDate = new Date()

    let inputYear = inputDate.getFullYear()
    let inputMonth = inputDate.getMonth()

    let currentYear = currentDate.getFullYear()
    let currentMonth = currentDate.getMonth()

    let theYearDifference = currentYear - inputYear
    let theMonthDifference = currentMonth -inputMonth
    let totaldiff = theYearDifference*12 + theMonthDifference
    // console.log(totaldiff)

    if(totaldiff < 6){
        // Points.innerHTML++
        // console.log(totaldiff)
    }else if (totaldiff > 6){
        // Points.innerHTML--
        // console.log(totaldiff)
    }


    // last Loan
    let userDate = new Date(lastLoan.value);
    let systemDate = new Date();

    let useryear = userDate.getFullYear()
    let usermonth = userDate.getMonth()

    let systemYear = systemDate.getFullYear()
    let systemMonth = systemDate.getMonth()


    let monthDifference = systemMonth - usermonth
    let yearDifference = systemYear - useryear

    let totalMonthsDifference = yearDifference*12 + monthDifference
    console.log(totalMonthsDifference)


    if(totalMonthsDifference > 6){
        alert('youre eligible')
        // Points.innerHTM--
        // console.log(totalMonthsDifference)
    }else if(totalMonthsDifference < 6){
        alert('youre not eligible')
        // Points.innerHTML++
        // console.log(totalMonthsDifference)
    }

    // loan repayment period
    if (repaymentPeriod.value < 6){
        // console.log(repaymentPeriod.value)
        // Points.innerHTML++
    }else if (repaymentPeriod.value > 6 ){
        // Points.innerHTML--
    }

    // account type 
    if (accountType.value == "Current"){
        // Points.innerHTML++
        alert('nice')

    }else if (accountType.value == "Savings" ){
        // Points.innerHTML--
        alert('not nice')
    }else{
        // alert('select account type')

    }
}

document.getElementById('btn').onclick = () => {
    validation()
    eligibility()
    // alert('working')
}