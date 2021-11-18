const Joke = ({ joke }) => {
  return (
    <div className="container">
      <div className="joke-container">
        <div className="joke-bubble">
          <span>
            {joke}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Joke;
