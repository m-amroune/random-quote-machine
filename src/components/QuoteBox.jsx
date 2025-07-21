import React from 'react'
import { FaTwitter, FaTumblr } from 'react-icons/fa'


const QuoteBox = () => {
  return (
    <div>
      
    <div id="quote-box">
        <span id="text"></span>
        <span id="author"></span>
        <div className='actions-container'>
            <div className='social-links'>
            <a href="https://twitter.com" target='_blank' rel="noreferrer" id="tweet-quote"><FaTwitter/></a>
            <a href="https://www.tumblr.com/" target='_blank' rel="noreferrer" className='social-icon'><FaTumblr/></a>
            </div>
            <button id="new-quote">New quote</button>
        </div>
    </div>

    </div>
  )
}

export default QuoteBox
