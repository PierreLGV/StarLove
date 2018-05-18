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
        text: 'Tu viens d\'où?',
        choiceA: 'La France ! Ca reste le pays des 400 fromages.',
        choiceB: 'PAYS DE GALLE INDÉPENDAAAAAAAANT',
        choiceC: 'Je suis formateur à la Wild...',
      },
      {
        text: 'T\'es marié ?',
        choiceA: 'Oui je suis marié j\'ai des enfants et tout ça ...',
        choiceB: 'Non..Non..Je suis pas marié avec des enfants, je suis pas un détraqué.',
        choiceC: 'Non, je suis fan de Jean-Luc Lahaye.',
      },
      {
        text: 'Parle moi mal, ça m\'excite...!',
        choiceA: 'Jacques a dit a dit pas de charcuterie !',
        choiceB: 'Shut up ! Kiss my ass !',
        choiceC: '<?php echo \'<p>Hello world</p>\'; ?>',
      },
      {
        text: 'Ca te plairait de venir me rejoindre ...?',
        choiceA: 'À l\'occasion, je vous mettrai un petit coup de polish',
        choiceB: 'Vous avez bien une amicale des anciens nazis ?',
        choiceC: 'Elle est où la poulette ?',
      },
      {
        text: 'Quel est ton pêché mignon ?',
        choiceA: 'J\'aime quand on m\'enduit d\'huile...',
        choiceB: 'Je démonte une poule et j\'envoie un fax à Noël Mamère',
        choiceC: '*hennissement/sueurs*',
      },
      {
        text: 'Partage moi un petit secret ...',
        choiceA: 'Je suis une gigantesque tarlouze',
        choiceB: 'J\'aime me beurrer la biscotte',
        choiceC: 'Je mets une moustache dans mon slip et je viole Cendrillon',
      },
      {
        text: 'Dis moi, c\'est quoi ton p\'tit nom ?',
        choiceA: 'Hubert bonisseur de la bath',
        choiceB: 'Jsuis pas une poukave',
        choiceC: 'Guy Georges',
      },
      {
        text: 'T\'as des maxi pecs?',
        choiceA: 'Bien sûr mon loup',
        choiceB: '*RespireINTENSÉMENTdansLeCombiné*',
        choiceC: 'Non mais j\ai la mini puissance',
      },
      {
        text: 'Je suis super X-iT... ;)',
        choiceA: 'Aime-moi tendre, aime-moi vrai',
        choiceB: 'Un engin comme vous, ça devrait être livré avec une notice !',
        choiceC: '*flop flop flop...*',
      },
      {
        text: 'Do you like to grab women by their pussies ?',
        choiceA: 'Donald ? Is this you ???',
        choiceB: 'Vous aimez les animaux madame ?',
        choiceC: 'MAIS TAIIIIISEZ-VOUS',
      },
      {
        text: 'T\'es bien membré mon chéri ?',
        choiceA: 'NaN',
        choiceB: 'Comme un wookie en rute',
        choiceC: 'Je crache sur le lama et je viole un pompier corse',
      },
      {
        text: 'Cuir ou moustache ?',
        choiceA: 'Je caresse un pompier et je pue du pull',
        choiceB: 'Pépito ou panini? Je prends la profiterole.',
        choiceC: 'J\'ai des mocassins à glands',
      },
      {
        text: 'Tu fais quoi ce soir... fais-moi envie',
        choiceA: 'Je m\'introduis chez Dark Vador et je mets du munster dans son casque',
        choiceB: 'Je mange une soutane et je tutoie David Charvet.',
        choiceC: 'Je savonne un scout et je suce une famille esquimaux.',
      },
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

    setTimeout(() => this.setState({ introIsPlaying: false }), 20000)

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
