import React, { Component } from 'react'
import Intro from './components/intro.js'
import introText from './intro-text.txt'
import Cockpit from './components/cockpit.js';
import HandleQuestion from './components/questions.js';

class App extends Component {
  state = {
    introIsPlaying: true,
    introText: 'loading',
    isCalling: false,
    isChatting: false,
    characters: [],
    currentStep: 0,
    currentList: [],
    questions: [
      {
        text: `T'aimes les poils ?`,
        yes: `yeahh`,
        no:`beurk`,
        ifyes: list => list.filter(c => c.species !== 'droid'),
        ifno: list => list.filter(c => c.species === 'droid')
      },
      {
        text: `T'es un petit vilain ?`,
        yes: `Un chouillat...`,
        no:`Non, je suis pur`,
        ifyes: list => list.filter(c => c.affiliations.includes('Sith')
          || c.affiliations.includes('Galactic Empire')),
        ifno: list => list.filter(c => !c.affiliations.includes('Sith')
          && !c.affiliations.includes('Galactic Empire'))
      },
      {
        text: `Tu veux du solide ?`,
        yes: `Je préfère, merci`,
        no:`J'aime les petits joueurs`,
        ifyes: list => list.sort((a, b) => b.mass - a.mass)[0],
        ifno: list => list.sort((a, b) => a.mass - b.mass)[0]
      }
    ]
  }

  handleCall = () => {
    this.setState({ isCalling: true })
  }

  handleAnswer = filter => {
    this.setState({
      currentStep: this.state.currentStep + 1,
      currentList: filter(this.state.currentList)
    })
  }

  constructor() {
    super()
    fetch(introText)
      .then(r => r.text())
      .then(introTextValue => this.setState({ introText: introTextValue }))

    setTimeout(() => this.setState({ introIsPlaying: false }), 2000)

    /// fetch char
    fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
      .then(res => res.json())
      .then(resJson => {
        this.setState({ characters: resJson, currentList: resJson })
      })
      .catch(console.error)
  }

  render() {
    if (this.state.introIsPlaying) return <Intro text={this.state.introText} />
    console.log(this.state.currentList)
    console.log(this.state.isChatting);

    const survey = () => {
      if (this.state.isCalling) {
        if (this.state.currentStep < this.state.questions.length) {
            return <HandleQuestion
            handleAnswer={this.handleAnswer}
            {...this.state.questions[this.state.currentStep]} />
          }
          this.setState({ isChatting: true })
          this.setState({ isCalling: false })
          return undefined
      }
      return undefined
    }

    return (
      <div>
        <Cockpit handleCall={this.handleCall}/>
        {survey()}

      </div>
    )
  }
}

export default App;
