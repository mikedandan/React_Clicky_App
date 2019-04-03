import React, { Component } from 'react';
import Card from "./components/Card";
// import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import './App.css';
// import './bootstrap.min.css';

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    highscore: 0,
    message: "Click an image to begin!"
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(newCard => {
      newCard.count = 0;
      console.log(newCard);
    });
    this.setState({message:`You Guessed Wrong!`});
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
   this.state.cards.find((cardObject, i) => {
      if (cardObject.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            this.setState({message:`You Guessed right!`});
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
      return false;
    });
  }
  // Map over this.state.cards and render a cardCard component for each card object
  render() {

    return (
      <div>
        <Header message={this.state.message} score={this.state.score} highscore={this.state.highscore}></Header>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </div>
    );
  }
}

export default App;
