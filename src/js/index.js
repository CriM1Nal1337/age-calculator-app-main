const btn = document.getElementById('btn')
const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
const currentDate = new Date()
const currentDay = currentDate.getDate()
const currentMonth = currentDate.getMonth() + 1
const currentYear = currentDate.getFullYear()
const lDay = document.getElementById('l-day')
const lMonth = document.getElementById('l-month')
const lYear = document.getElementById('l-year')
btn.addEventListener("click", function () {
    const dayValue = parseInt(day.value)
    const monthValue = parseInt(month.value)
    const yearValue = parseInt(year.value)

        if (dayValue >= 1 && dayValue <= 31 && monthValue >= 1 && monthValue <= 12 && yearValue >= 1900 && yearValue <= currentYear) {
            const birthDate = new Date(yearValue, monthValue - 1, dayValue)
            const diffInMilliseconds = currentDate - birthDate
            const ageDate = new Date(diffInMilliseconds)
    
            const ageYear = ageDate.getUTCFullYear() - 1970
            const ageMonth = ageDate.getUTCMonth()
            const ageDay = ageDate.getUTCDate() - 1
    
            const monthsSpan = document.getElementById('months')
            const daysSpan = document.getElementById('days')
            const yearsSpan = document.getElementById('years')
            monthsSpan.textContent = ageMonth
            daysSpan.textContent = ageDay
            yearsSpan.textContent = ageYear
        }


    if (dayValue === "") {
        day.nextElementSibling.classList.remove('hide')
        day.nextElementSibling.textContent = 'This field is required'
        day.classList.add('error-border')
        lDay.classList.add('error-color')
    } else if (dayValue >= 1 && dayValue <= 31) {
        day.nextElementSibling.classList.add('hide')
        day.classList.remove('error-border')
        lDay.classList.remove('error-color')
    } else {
        day.nextElementSibling.classList.remove('hide');
        day.nextElementSibling.textContent = 'Must be a valid day'
        day.classList.add('error-border')
        lDay.classList.add('error-color')
    }

    if (monthValue === "") {
        month.nextElementSibling.classList.remove('hide')
        month.nextElementSibling.textContent = 'This field is required'
        month.classList.add('error-border')
        lMonth.classList.add('error-color')
    } else if (monthValue >= 1 && monthValue <= 12) {
        month.nextElementSibling.classList.add('hide')
        month.classList.remove('error-border')
        lMonth.classList.remove('error-color')
    } else {
        month.nextElementSibling.classList.remove('hide')
        month.nextElementSibling.textContent = 'Must be a valid month'
        month.classList.add('error-border')
        lMonth.classList.add('error-color')
    }

    if (yearValue === "") {
        year.nextElementSibling.classList.remove('hide')
        year.nextElementSibling.textContent = 'This field is required'
        year.classList.add('error-border');
        lYear.classList.add('error-color')
    } else if (yearValue >= 1900 && yearValue <= currentYear) {
        year.nextElementSibling.classList.add('hide')
        year.classList.remove('error-border');
        lYear.classList.remove('error-color')
    } else {
        year.nextElementSibling.classList.remove('hide')
        year.nextElementSibling.textContent = 'Must be a valid year'
        year.classList.add('error-border')
        lYear.classList.add('error-color')
    }

})