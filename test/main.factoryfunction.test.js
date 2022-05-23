describe("Testing my matching days factory function", () => {
    describe("setting the dates", () => {
        it("should be able to get the day of the week of the passed in date", () => {
            const matchDays = MatchingDays()
            matchDays.setFirstDate("2022-05-19")
            assert.equal("Thursday", matchDays.getFirstWeekday())
        })
    
        it("should be able to get the day of the week of the passed in date", () => {
            const matchDays = MatchingDays()
            matchDays.setSecondDate("2022-05-11")
            assert.equal("Wednesday", matchDays.getSecondWeekday())
        })

        it("should be able to set two dates at the same time", () => {
            const matchDays = MatchingDays()
            matchDays.setFirstDate("2022-05-19")
            matchDays.setSecondDate("2022-05-11")
            assert.equal("Thursday", matchDays.getFirstWeekday())
            assert.equal("Wednesday", matchDays.getSecondWeekday())
        })
    })

    describe("getting the colors", () => {
        it("should get the color green for dates with the same weekdays",() => {
            const matchDays = MatchingDays()
            matchDays.setFirstDate("2022-05-19")
            matchDays.setSecondDate("2022-05-12")

            let color1 = matchDays.updateColors().color1
            let color2 = matchDays.updateColors().color2

            assert.equal("green", color1)
            assert.equal("green", color2)
        })

        it("should get the color red for the first date and blue for the second date",() => {
            const matchDays = MatchingDays()
            matchDays.setFirstDate("2022-04-19")
            matchDays.setSecondDate("2022-05-12")

            let color1 = matchDays.updateColors().color1
            let color2 = matchDays.updateColors().color2

            assert.equal("red", color1)
            assert.equal("blue", color2)
        })

        it("should get the color red for the first date and nothing if the second date is not set",() => {
            const matchDays = MatchingDays()
            matchDays.setFirstDate("2022-04-19")
            matchDays.setSecondDate("")

            let color1 = matchDays.updateColors().color1
            let color2 = matchDays.updateColors().color2

            assert.equal("red", color1)
            assert.equal("", color2)
        })

        it("should get the nothing if both dates are not set or invalid dates set",() => {
            const matchDays = MatchingDays()
            matchDays.setFirstDate("")
            matchDays.setSecondDate("")

            let color1 = matchDays.updateColors().color1
            let color2 = matchDays.updateColors().color2

            assert.equal("", color1)
            assert.equal("", color2)
        })
    })
})