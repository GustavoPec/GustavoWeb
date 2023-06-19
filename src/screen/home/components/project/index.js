import { useState } from "react";
import { ButtonInfo } from "../buttonInfo/index.js";
import * as Styles from "./style.js";

export const Project = (props) => {
  const [name, setName] = useState(props.name);

  return (
    <Styles.Main>
      <div className="BgPurple">
        <img src={props.img} alt="projeto" />
        <div className="Project" onClick={props.onClick}>
          <ButtonInfo Project={name} />
        </div>
      </div>
    </Styles.Main>
  );
};
