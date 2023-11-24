const Title =() =>{
    return (
      <a className="logo" href="/">
        <img src="https://cdn5.vectorstock.com/i/1000x1000/74/94/hot-meal-cup-steamy-bowl-food-court-logo-vector-5397494.jpg" />
      </a>
    )
  }
  
  const Header = () =>{
    return (
      <div className="navBar">
        <Title />
        <div className="nav-list">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>contact</li>
            <li>cart</li>
          </ul>
        </div>
      </div>
    )
  }
  export default Header