import "./Main.css";
import Header from "../Header/Header";

import Promo from "./Promo/Promo";
import NavTab from "./NavTab/NavTab";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Footer from "../Footer/Footer";

function Main(props) {
  return (
    <div className="Main">
      <Header
        background="#073042"
        loggedIn={props.loggedIn}
        isOpen={props.openPopupMenu}
      />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default Main;
