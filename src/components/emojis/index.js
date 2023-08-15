import './index.css'

const Emoji = props => {
  const {emojiDetails, onclick} = props
  const {name, imageUrl} = emojiDetails

  const Onclick = () => {
    onclick()
  }

  return (
    <li className="list" onClick={Onclick}>
      <img src={imageUrl} alt={name} className="emoji" />
      <p className="name">{name}</p>
    </li>
  )
}

export default Emoji
