// TODO: Declare any global variables we need




    // TODO: Add event listener and handler for flip and clear buttons
    let flip = document.querySelector("#flip")
    let image = document.querySelector("img")
    let displayHeads = document.querySelector("#heads")
    let displayTails = document.querySelector("#tails")
    flip.addEventListener("click", funtion() {
        let val = Math.random();
        if (val > 0.5)
        {
            image.setAttribuite("src", "assets/images/penny-heads.jpg")
            head = heads +1
            displayHeads.texContent =heads} 
            else {
                image.setAttribuite("src", "assets/images/penny-tails.jpg")
                head = tails +1
                displayTails.texContent =tails}


            }


        }
    })
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})