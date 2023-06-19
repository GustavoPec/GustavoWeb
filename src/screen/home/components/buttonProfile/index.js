import * as Styles from "./style.js";

export const ButtonProfile = (props) => {
  return (
    <Styles.Button
      onClick={() => {
        window.open("https://wa.me/48999565527");
      }}
    >
      {props.title}
    </Styles.Button>
  );
};
