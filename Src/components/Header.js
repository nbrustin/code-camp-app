import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContexts";
const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <img alt="ncc Home Page" src="./images/ncc.png"></img>
          </div>
          <div className="light">
            <h4 className="header-title">Nick's Code Camp</h4>
          </div>
          <div className={theme === "light" ? "" : "text-info"}>
            {/* Hello Mr. Smith &nbsp;&nbsp;
            <span>
              <a href="#">Sign-out</a>
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
