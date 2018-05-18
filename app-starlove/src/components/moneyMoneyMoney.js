import React, { Component } from 'react'
import './count.css'


class MoneyMoneyMoney extends Component {
  loop = () => {
    this.forceUpdate()
    this.requestId = requestAnimationFrame(this.loop)
  }

  getCredit = () => ((Date.now() - this.props.callStart) / 1000).toFixed(2)

  componentDidMount() {
    this.loop()
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.requestId)
  }

  render() {
    console.log(this.props)
    return (
      <div className="count">
        <p><span>Sold :</span> {this.getCredit()}<span> Ȼ$</span></p>
      </div>
    )
  }
}

export default MoneyMoneyMoney
