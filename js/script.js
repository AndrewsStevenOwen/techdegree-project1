/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

let quotes = [
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    source: "― Martin Fowler",
    citation: "Refactoring: Improving the Design of Existing Code, 1999"
  },
  {
    quote: "Don't wish it was easier wish you were better. Don't wish for less problems wish for more skills. Don't wish for less challenge wish for more wisdom",
    source: "- Jim Rohn",
    year: "1987"
  },
  {
    quote: "Pleasure in the job puts perfection in the work.",
    source: "- Aristotle"
  },
  {
    quote: "I count him braver who overcomes his desires than him who conquers his enemies; for the hardest victory is over self.",
    source: "- Aristotle"
  },
  {
    quote: "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.",
    source: "- Confucius"
  }
];

console.log(quotes);
/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
