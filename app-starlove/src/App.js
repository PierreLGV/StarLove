import React, { Component } from 'react'
import Intro from './components/intro.js'
import introText from './intro-text.txt'
import Cockpit from './components/cockpit.js'
import HandleQuestion from './components/questions.js'
import ShowBitch from './components/yourbitch.js'
import MoneyMoneyMoney from './components/moneyMoneyMoney.js'
import HandleChat from './components/chatbot.js'
import ShowSpecialSelection from './components/special-selection.js'
import ShowSelection from './components/yourselection.js'
import ChatWindow from './components/ChatWindow.js'
import './index.css'

class App extends Component {
  state = {
    introIsPlaying: true,
    introText: 'loading',
    status: '',
    characters: [],
    currentStep: 0,
    currentList: [],
    questions: [
      {
        text: `T'aimes les poils ?`,
        yes: `Je veux du velu`,
        no:`I <3 les imberbes`,
        ifyes: list => list.filter(c => c.species !== 'droid'),
        ifno: list => list.filter(c => c.species === 'droid'
          || c.species === 'rodian'
          || c.species === 'hutt'
          || c.species === 'yoda\'s species'
          || c.species === 'trandoshan'
          || c.species === 'gungan')
      },
      {
        text: `As tu été vilain ?`,
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
        no:`Sans façon`,
        ifyes: list => list.sort((a, b) => b.mass - a.mass).slice(2),
        ifno: list => list.sort((a, b) => a.mass - b.mass).slice(2)
      }
    ],
    trainer:
      {
      name: 'Akaboobs',
      height: 3,
      mass: 'A lot !',
      gender: 'men',
      speciality: 'regard de chaton',
      image: 'https://image.noelshack.com/fichiers/2018/20/5/1526608297-akabab.jpg'
      },
    credit: 0,
    chatLines: [
      {
        text: 'Coucou mon mignon',
        choiceA: 'Salut poupée',
        choiceB: 'T bonne <3',
        choiceC: '*hennissement/sueurs*',
      },
      {
        text: 'T\'as des maxi pecs?',
        choiceA: 'Bien sûr mon loup',
        choiceB: '*RespireINTENSÉMENTdansLeCombiné*',
        choiceC: 'Non mais j\ai la mini puissance',
      },
      {
        text: 'Je suis super X-iT... ;)',
        choiceA: 'K-non',
        choiceB: 'RhooOoooH  HH oo oO hisoflsckmsk',
        choiceC: '*flop flop flop...*... *JICLE*... "Ho non....BOWDEL" *Bruit de Chute*',
      }
    ],
    currentLine: 0
  }

  handleCall = () => {
    this.setState({ status: 'calling' })
  }

  hangUpCall = () => {
    clearInterval(this.counter)
    this.setState({ status: '', credit: 0, currentStep: 0, currentList: this.state.characters })
  }

  handleAnswer = filter => {
    this.setState({
      currentStep: this.state.currentStep + 1,
      currentList: filter(this.state.currentList)
    })
  }

  chooseBitch = bitch => {
    console.log('got it');
    this.setState({ status: 'chatting', currentList: bitch })
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

    setTimeout(() => this.setState({ introIsPlaying: false }), 0)

    /// fetch char
    fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
      .then(res => res.json())
      .then(resJson => {
        this.setState({ characters: resJson, currentList: resJson })
      })
      .catch(console.error)
  }

  ['']() {}

  calling() {
    if (this.state.currentStep < this.state.questions.length) {
      return <HandleQuestion
        handleAnswer={this.handleAnswer}
        {...this.state.questions[this.state.currentStep]}/>
    }
    this.setState({ status: 'choosing' })
  }

  choosing() {
    return <div className="containerGlobal">
        <ChatWindow/>
      <ShowSelection chooseBitch={this.chooseBitch} character={this.state.currentList[0]} />
      <ShowSelection chooseBitch={this.chooseBitch} character={this.state.currentList[1]} />
      <ShowSpecialSelection chooseBitch={this.chooseBitch} trainer={this.state.trainer} />
    </div>
  }

  chatting() {
    if (this.state.currentLine < this.state.chatLines.length) {
        this.counter()
        return <div>
          <MoneyMoneyMoney credit={this.state.credit} />
          <ShowBitch character={this.state.currentList} />
          <HandleChat handleClientLine={this.handleClientLine}
          {...this.state.chatLines[this.state.currentLine]} />
        </div>
      }
      clearInterval(this.counter)
      this.setState({ status: '', credit: 0 })
  }

  render() {
    if (this.state.introIsPlaying) return <Intro text={this.state.introText} />
    console.log(this.state.currentList)
    return (
      <div>
        <Cockpit handleCall={this.handleCall} hangUpCall={this.hangUpCall}/>
        {typeof this[this.state.status] === 'function'
          ? this[this.state.status]()
          : undefined}
      </div>
    )
  }
}

export default App;
