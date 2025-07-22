import React from "react";
import { FaTwitter, FaTumblr } from "react-icons/fa";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "So many books, so little time.",
    author: " Frank Zappa ",
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein ",
  },
  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero ",
  },
  {
    text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch ",
  },
  {
    text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss",
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West ",
  },
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi ",
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost ",
  },
  {
    text: "If you tell the truth, you don't have to remember anything.",
    author: "Maya Angelou ",
  },
  {
    text: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard ",
  },
  {
    text: "It is better to be hated for what you are than to be loved for what you are not.",
    author: "Andre Gide",
  },
  {
    text: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    author: "Mark Twain ",
  },
  {
    text: "As he read, I fell in love the way you fall asleep: slowly, and then all at once.",
    author: " John Green",
  },
  {
    text: "The fool doth think he is wise, but the wise man knows himself to be a fool",
    author: " William Shakespeare",
  },
  {
    text: "Life is what happens to us while we are making other plans.",
    author: "Allen Saunders ",
  },
  {
    text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    author: "Bill Keane ",
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison ",
  },
  {
    text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    author: " Lao Tzu ",
  },
  {
    text: "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.",
    author: " Haruki Murakami",
  },
];

// Main functional component for the quote machine
const QuoteBox = () => {
   // State to hold the currently displayed quote
  const [quote, setQuote] = useState(quotes[0]);
  // Function to select a random quote from the list
  const quoteRandom = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let selectedQuote = quotes[randomIndex];
    setQuote(selectedQuote);
  };

  return (
    <div>
      <div id="quote-box">
        <span id="text"> <FontAwesomeIcon icon={faQuoteLeft}/> {quote.text} </span>
        <span id="author">{quote.author}</span>
        <div className="actions-container">
          {/* Buttons section : social links */}
          <div className="social-links">
            <a
              href="https://twitter.com/intent/tweet"
              target="_blank"
              rel="noreferrer"
              id="tweet-quote"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.tumblr.com/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaTumblr />
            </a>
          </div>

          {/* Button with Event for new random quote */}
          <button id="new-quote"  onClick={quoteRandom}  >New quote</button>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
