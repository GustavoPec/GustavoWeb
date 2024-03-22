import * as Styles from "./style.js";
// import Loadign from "../../../../assets/Loading.svg";
import Loadign from "../../../../assets/AnimatedLogo.gif";

export const Preloader = () => {
  return (
    <Styles.Main>
      <img src={Loadign} alt="logo" width={300}/>
    </Styles.Main>
  );
};
