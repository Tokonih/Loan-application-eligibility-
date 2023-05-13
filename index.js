let currentBalance = document.getElementById('currentBalance')
let loanAmount = document.getElementById('loanAmount')
let creditHistory = document.getElementById('creditHistory')
let lastDeposit = document.getElementById('lastDeposit')
let lastLoan = document.getElementById('lastLoan')
let accountType = document.getElementById('accountType')
let repaymentPeriod = document.getElementById('repaymentPeriod')
let Points = document.getElementById('Points')
let Point = 0
Points.innerHTML = Point

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
        Point = Point + 10
        Points.innerHTML = Point
    } else if (currentBalance.value < loanAmount.value) {
        Point = Point + 0
        Points.innerHTML = Point
    }


    // 6 months credit history
    if (creditHistory.value < 6) {
        Point = Point + 10
        Points.innerHTML = Point
    } else if (creditHistory.value > 6) {
        Point = Point + 0
        Points.innerHTML = Point
    }


    // last Deposite

    let inputDate = new Date(lastDeposit.value)
    let currentDate = new Date()

    let difference = (currentDate.getMonth() * 31 + currentDate.getDay()) - (inputDate.getMonth() * 31 + inputDate.getDay());


    if (difference < 31) {
        Point = Point + 5
        Points.innerHTML = Point
    } else if (difference > 31) {
        Point = Point + 0
        Points.innerHTML = Point
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

    let totalMonthsDifference = yearDifference * 12 + monthDifference
    console.log(totalMonthsDifference)


    if (totalMonthsDifference > 6) {
        Point = Point + 10
        Points.innerHTML = Point
    } else if (totalMonthsDifference < 6) {
        Point = Point + 0
        Points.innerHTML = Point
    }


    // loan repayment period
    if (repaymentPeriod.value < 6) {
        Point = Point + 10
        Points.innerHTML = Point
        
    } else if (repaymentPeriod.value > 6) {
        Point = Point + 0
        Points.innerHTML = Point
    }

    // account type 
    if (accountType.value == "Current") {
        Point = Point + 10
        Points.innerHTML = Point

    } else if (accountType.value == "Savings") {
        Point = Point + 5
        Points.innerHTML = Point
    
    } 
}

document.getElementById('btn').onclick = () => {
    validation()
    eligibility()
}