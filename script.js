const JSON_FILE = './data.json'
const listElements = document.querySelectorAll('.listElement')

async function getData(timePeriod) {
    const response = await fetch(JSON_FILE)
    const data = await response.json()
    
    data.forEach(element => {
        let currentHours = document.querySelector(`.timeBlock.${element.title.toLowerCase().replace(' ','')} .hours`)
        let lastWeekHours = document.querySelector(`.timeBlock.${element.title.toLowerCase().replace(' ','')} .lastWeekHours`)
        
        switch(timePeriod) {
            case 'daily':
                currentHours.innerText = element.timeframes.daily.current + 'hrs'
                lastWeekHours.innerText = 'Last Week - ' + element.timeframes.daily.previous + 'hrs'
                break
            case 'weekly':
                currentHours.innerText = element.timeframes.weekly.current + 'hrs'
                lastWeekHours.innerText = 'Last Week - ' + element.timeframes.weekly.previous + 'hrs'
                break
            case 'monthly':
                currentHours.innerText = element.timeframes.monthly.current + 'hrs'
                lastWeekHours.innerText = 'Last Week - ' + element.timeframes.monthly.previous + 'hrs'
                break
        }
    })
}

listElements.forEach(element => {
    element.addEventListener('click', () => {
        getData(element.id)
    })
})
