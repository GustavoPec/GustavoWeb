import * as Styles from "./style.js";

export const ButtonProfile = (props) => {
  return (
    <Styles.Button
      onClick={() => {
        window.open(
          "https://wa.me/48999565527?text=Ol%C3%A1,%Preciso%20de%20um%20or%C3%A7amento"
        );
      }}
    >
      {props.title}
    </Styles.Button>
  );
};
