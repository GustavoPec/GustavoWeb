import * as Styles from "./style";

//

export const ServiceBoard = (props) => {
  return (
    <Styles.Main>
      <Styles.Title>
        <Styles.Text fontSize="40px" fontWeight="bold" color="#731aff">
          {props.title}
        </Styles.Text>
        <Styles.Text
          fontSize="30px"
          fontWeight="bold"
          color="#f8f8ff"
          text-align="end"
        >
          {props.subtitle}
        </Styles.Text>
      </Styles.Title>
      <Styles.Board>
        <Styles.Text text-align="center" color="#171717" fontSize="20px" width="200px">
          {props.description1}
          <strong>{props.description2}</strong>
          {props.description3}
        </Styles.Text>
      </Styles.Board>
    </Styles.Main>
  );
};
