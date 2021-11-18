const Header = ({image}) => {
    return (
        <header className="header">
        <div className="container">
          <div className="header-container">
            <div className="logo-container">
              <img alt="logo" src={image} width="43" height="43" />
            </div>
            <div>
              <span>Chuck Norris</span>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;
