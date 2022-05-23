// create an instance from my matching days factory function
const matchDays = MatchingDays()

// make the script run when the DOM has fully loaded
const myTemplate = () => {
    // get the template from inside the script tag
    let template = document.querySelector(".weekdaysTemplate").innerHTML

    // make crayon helper
    Handlebars.registerHelper('crayon', day => {
        if(day === matchDays.getFirstWeekday()) return matchDays.updateColors().color1
        if(day === matchDays.getSecondWeekday()) return matchDays.updateColors().color2
    })

    // compile the template using Handlebars
    let weekdaysTemplate = Handlebars.compile(template)

    // create HTML using my template
    let weekdaysTemplateHTML = weekdaysTemplate({
        weekdays: matchDays.getWeekdays()
    })

    // use the template HTML and display the data
    document.querySelector(".weekdaysData").innerHTML = weekdaysTemplateHTML
}

// use the template when the page reloads
myTemplate()

// select the date fields and loop through them and add an event listener for each
document.querySelectorAll(".showColors").forEach(input => {
    input.addEventListener("change", () => {
        // set the first date from the first date input
        matchDays.setFirstDate(document.querySelector("#firstDate").value)
        // set the second date from the second date input
        matchDays.setSecondDate(document.querySelector("#secondDate").value)
        // update the template with the new values
        myTemplate()
    })
})