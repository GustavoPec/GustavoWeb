import * as Styles from "./style.js";
import Loadign from "../../../../assets/loading.png";

export const Preloader = () => {
  return (
    <Styles.Main>
      <img src={Loadign} alt="logo" />
    </Styles.Main>
  );
};
