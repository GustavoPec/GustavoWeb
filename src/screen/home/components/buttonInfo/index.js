import * as Styles from "./style.js";

export const ButtonInfo = (props) => {
  return (
    <Styles.Main>
      <div className="Main">
        <span>{props.Project}</span>
        <div className="Button">
          <Styles.Button>Ver mais</Styles.Button>
        </div>
      </div>
    </Styles.Main>
  );
};
