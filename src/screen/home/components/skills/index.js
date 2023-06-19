
import * as Styles from "./style.js";

export const Skills = (props) => {
  return (
    <Styles.Main>
      <span>{props.Skills}</span>
      <img src={props.img} alt="Skills" />
    </Styles.Main>
  );
};
