import React, { Component } from 'react'
import Intro from './components/intro.js'
import introText from './intro-text.txt'
import Cockpit from './components/cockpit.js'
import HandleQuestion from './components/questions.js'
import ShowBitch from './components/yourbitch.js'
import MoneyMoneyMoney from './components/moneyMoneyMoney.js'
import HandleChat from './components/chatbot.js'

class App extends Component {
  state = {
    introIsPlaying: true,
    introText: 'loading',
    isCalling: false,
    isChatting: false,
    isDisplay: false,
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
    ],
    credit: 0,
    chatLines: [
      {
        text: 'Coucou mon mignon',
        choiceA: 'Salut poupée',
        choiceB: 'T bonne <3',
        choiceC: '*hennissement/sueurs*',
        ifChoiceA: 'fdf', // mv selon fonction
        ifChoiceB: 'jkgfd', // mv selon fonction
        ifChoiceC: 'kfo' // mv selon fonction
      },
      {
        text: 'T\'as des maxi pecs?',
        choiceA: 'Bien sûr mon loup',
        choiceB: '*RespireINTENSÉMENTdansLeCombiné*',
        choiceC: 'Non mais j\ai la mini puissance',
        ifChoiceA: 'fdf', // mv selon fonction
        ifChoiceB: 'jkgfd', // mv selon fonction
        ifChoiceC: 'kfo' // mv selon fonction
      },
      {
        text: 'Je suis super X-iT... ;)',
        choiceA: 'K-non',
        choiceB: 'RhooOoooH  HH oo oO hisoflsckmsk',
        choiceC: '*flop flop flop...*... *JICLE*... "Ho non....BOWDEL" *Bruit de Chute*',
        ifChoiceA: 'fdf', // mv selon fonction
        ifChoiceB: 'jkgfd', // mv selon fonction
        ifChoiceC: 'kfo' // mv selon fonction
      }
    ],
    currentLine: 0
  }

  handleCall = () => {
    this.setState({ isCalling: true })
    this.setState({ isDisplay: true })
  }

  // handleChat = () => {
  //   this.setState({ isDisplay: true })
  // }

  handleAnswer = filter => {
    this.setState({
      currentStep: this.state.currentStep + 1,
      currentList: filter(this.state.currentList)
    })
  }

  handleClientLine = () => {
    this.setState({
      currentLine: this.state.currentLine + 1,
    })
  }

  addCredit = () => this.setState({credit: this.state.credit += 1})
  counter = () => setInterval(this.addCredit, 1000)

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

   //  const showChatte = () => {
   //   if (this.state.isDisplay) {
   //     return <ChatWindow/>
   //   }
   // }

    const survey = () => {
      if (this.state.isCalling && this.state.isDisplay) {
        if (this.state.currentStep < this.state.questions.length) {
            return <HandleQuestion
            handleAnswer={this.handleAnswer}
            {...this.state.questions[this.state.currentStep]}/>
          }
          this.setState({ isChatting: true })
          this.setState({ isCalling: false })
          return undefined
      }
      return undefined
    }

    const chat = () => {
      if (this.state.isChatting) {
        if (this.state.currentLine < this.state.chatLines.length) {
            this.counter()
            return <div>
              <MoneyMoneyMoney credit={this.state.credit} />
              <ShowBitch character={this.state.currentList} />
              <HandleChat handleClientLine={this.handleClientLine}
              {...this.state.chatLines[this.state.currentLine]} />
            </div>
          }
          this.setState({ isChatting: false })
          return undefined
      }
      return undefined
    }

    return (
      <div>
        <Cockpit handleCall={this.handleCall}/> //handleChat={this.handleChat}/>
        {survey()}
        {chat()}
      </div>
    )
  }
}

export default App;
