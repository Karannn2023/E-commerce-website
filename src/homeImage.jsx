import { Link } from "react-router-dom";
const homeImage = () => {
  return (
    <>
      <div className="homeimage">
        <img src="homepage.png" alt="" />
        <Link to="/men" className="button button1">
          SHOP MEN
        </Link>
        <Link to="/women" className="button button2">
          SHOP WOMEN
        </Link>
      </div>
      <div className="homepara">
        <h1>Made From Tress. Designed for Sun.</h1>
        <p>Discover your style with our latest collection of fashionable</p>
        <span>Shop now for style that speaks volumes</span>
      </div>
    </>
  );
};
export default homeImage;
