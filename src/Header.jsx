import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_container">
          <Link to="/men">MEN</Link>
          <Link to="/women">WOMEN</Link>
          <a href="#">NEW ARRIVALS</a>
          <Link to="/">
            <img src="kpgarments.png" alt="" id="homeimg" />
          </Link>
          <div className="header-container2">
            <a>SUSTAINABILITY</a>
            <a>RETURN</a>
            <a>STORES</a>
            <Link to="/profile" className="icons" id="profile_icon">
              <IoPersonOutline />
            </Link>
            <AiOutlineQuestionCircle className="icons" />
            <FiShoppingCart className="icons" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
