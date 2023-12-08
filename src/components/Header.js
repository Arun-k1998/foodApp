import { Link } from "react-router-dom";

const Title = () => {
  return (
    <a className="logo" href="/">
      <img src="https://cdn5.vectorstock.com/i/1000x1000/74/94/hot-meal-cup-steamy-bowl-food-court-logo-vector-5397494.jpg" />
    </a>
  );
};

const Header = () => {
  return (
    <div className="navBar">
      <Title />
      <div className="nav-list">
        <ul>
          <Link to={'/'}>
            <li>Home</li>
          </Link>
          <Link to={'/about'}>
            <li>About</li>
          </Link>
          <Link to={'/contact'}>
            <li>contact</li>
          </Link>
          <Link to={'/cart'}>
            <li>cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Header;
