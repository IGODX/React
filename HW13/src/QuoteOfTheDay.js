import React, { Component } from 'react';
import './QuoteOfTheDay.css';

class QuoteOfTheDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
    };
  }

  quotes = [
    {
      text: 'That\'s one small step for a man, a giant leap for mankind.',
      author: 'Neil Armstrong',
    },
    {
      text: 'The only thing we have to fear is fear itself.',
      author: 'Franklin D. Roosevelt',
    },
    {
      text: 'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.',
      author: 'Steve Jobs',
    },
  ];
  usedQuotes = [];
  generateRandomQuote = () => {
    if (this.quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.quotes.length);
      const element = this.quotes.splice(randomIndex, 1);;
      this.usedQuotes.push(element[0]);
      const { text, author } = element[0];
      this.setState({ quote: text, author });
    }
    else {
      const element = this.usedQuotes.splice(0, 1);
       const { text, author } = element[0];
      this.setState({ quote: text, author });
      this.quotes = this.usedQuotes;
      this.usedQuotes = [];
      this.usedQuotes.push(element[0]);
    }
  };

  render() {
    const { quote, author } = this.state;

    return (
      <div className="quote-container">
        <h1>Quote of the day</h1>
        <button onClick={this.generateRandomQuote}>Get quote</button>
          <div className="quote">
            <p>{quote}</p>
            <p>- {author}</p>
          </div>
      </div>
    );
  }
}

export default QuoteOfTheDay;