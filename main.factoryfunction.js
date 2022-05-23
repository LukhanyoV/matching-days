const MatchingDays = () => {
    // initialise my variables
    let firstWeekday = ""
    let secondWeekday = ""
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    // this function will return the weekdays array
    const getWeekdays = () => weekdays

    // this function will recieve a date as a parameter and set the first day of the week variable
    const setFirstDate = date => firstWeekday = getWeekdays()[new Date(date).getDay()]
    // this function will return the first day of the week variable / it will be undefined if no valid date was given
    const getFirstWeekday = () => firstWeekday

    // this function will recieve a date as a parameter and set the second day of the week variable
    const setSecondDate = date => secondWeekday = getWeekdays()[new Date(date).getDay()]
    // this function will return the second day of the week variable / it will be undefined if no valid date was given
    const getSecondWeekday = () => secondWeekday

    // this function will return the color the weekdays depending on the rules
    const updateColors = () => {
        // if both dates are undefined or not valid return empty string for no colors
        if(getFirstWeekday() === undefined && getSecondWeekday() === undefined){
                return {
                    color1: "",
                    color2: ""
                }
        } 
        // if both dates are set and they have the same day of the week then they will have same color
        else if(getFirstWeekday() === getSecondWeekday()){
            return {
                color1: "green",
                color2: "green"
            }
        }
        // if the first date is set and the second date is not set only the first date will get a color
        else if(getFirstWeekday() && !getSecondWeekday()){
            return {
                color1: "red",
                color2: ""
            } 
        }
        // if the first date is not set and the second date is set only the second date will get a color
        else if(!getFirstWeekday() && getSecondWeekday()){
            return {
                color1: "",
                color2: "blue"
            }
        }
        // if both of the dates are set but they are not equal they will both get different colors
        else if(getFirstWeekday() && getSecondWeekday()){
            return {
                color1: "red",
                color2: "blue"
            }
        }
    }

    return {
        getWeekdays, setFirstDate, getFirstWeekday, setSecondDate, getSecondWeekday, updateColors
    }
}