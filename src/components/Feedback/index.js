import './index.css'

import {Component} from 'react'

import Emoji from '../emojis'

class Feedback extends Component {
  state = {greet: false}

  onclick = () => {
    this.setState(prevState => ({greet: !prevState.greet}))
  }

  render() {
    const {greet} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="app-container">
        <div className="card-container">
          {greet ? (
            <div className="love-container">
              <img src={loveEmojiUrl} alt="love emoji" className="loveEmoji" />
              <h1 className="greet">Thank you!</h1>
              <p className="description">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          ) : (
            <>
              <h1 className="heading">
                How satisfied are you with our customer support performance
              </h1>
              <ul className="emoji-container">
                {emojis.map(each => (
                  <Emoji
                    key={each.id}
                    emojiDetails={each}
                    onclick={this.onclick}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
