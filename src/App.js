import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      number: '3',
      isDuplicate: true,
      party: [
        // {
        //   job: 'aaa',
        //   seed: { // リメイク用
        //     a: 0,
        //     b: 0,
        //     c: 0,
        //     d: 0,
        //     e: 0
        //   }
        // }
      ]
    }
    // 【ちからのたね】【すばやさのたね】【スタミナのたね】【かしこさのたね】【ラックのたね】

    this.onChangeNumber = this.onChangeNumber.bind(this)
    this.onChangeCheckbox = this.onChangeCheckbox.bind(this)
    this.onClickSubmit = this.onClickSubmit.bind(this)
  }

  onChangeNumber (e) {
    this.setState({
      number: e.target.value
    })
  }

  onChangeCheckbox (e) {
    this.setState({
      isDuplicate: !this.state.isDuplicate
    })
  }

  onClickSubmit (e) {
    let party = []

    for (let i = 0; i < this.state.number; i++) { // 本当はちゃんと変換しないといけない
      party.push({
        job: 'aaa',
        seed: {
          a: 0,
          b: 0,
          c: 0,
          d: 0,
          e: 0
        }
      })
    }

    this.setState({
      party: party
    })
  }

  render () {
    let options = []
    for (let i = 1; i < 5; i++) {
      options.push(
        <option value={i} key={i}>{i}</option>
      )
    }

    // let partyArea = ''
    // let party = []
    // for (key in customers) {
    //   alert(key + "さんの番号は、" + customers[key] + "です。");
    // }

    return (
      <MuiThemeProvider>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-title'>Welcome to React</h1>
          </header>
          {/* <p className='App-intro'>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
          <div style={{marginTop: '10px'}}>
            <div>
              <label>生成したい人数</label>
              <select value={this.state.number} onChange={this.onChangeNumber}>
                {options.map((optionElm) => {
                  return optionElm
                })}
              </select>
            </div>
            <div>
              <label>職業の重複ありなし</label>
              <input type='checkbox' name='checkbox' onChange={this.onChangeCheckbox} /><br />
            </div>
            <RaisedButton label='生成' primary={true} style={{ margin: 12 }} onClick={this.onClickSubmit} />

            <hr />
            {/* {partyArea} */}
            <div>
              {this.state.party.map((member, i) => {
                return (
                  <Card key={i} className='Card'>
                    <CardHeader
                      title={member.job}
                      subtitle='Subtitle'
                      // actAsExpander={true}
                      // showExpandableButton={true}
                    />
                    {/* <CardText expandable={true}> */}
                    <CardText>
                      {Object.keys(member.seed).map((key) => {
                        return (
                          <span key={key}>{key}: {member.seed[key]}</span>
                        )
                      })}
                    </CardText>
                    <CardActions>
                      <FlatButton label='Action1' />
                      <FlatButton label='Action2' />
                    </CardActions>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
