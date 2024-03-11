import * as Styles from "./style.js";
import Loadign from "../../../../assets/Loading.svg";

export const Preloader = () => {
  return (
    <Styles.Main>
      <img src={Loadign} alt="logo" width={300}/>
    </Styles.Main>
  );
};
