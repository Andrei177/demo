import s from "./Card.module.css";
import defaultImg from "/img.svg";

const Card = ({ cardId, cardImg }) => {
  return (
    <div className={s.card}>
      <div className={s.card_img}>
        <img src={cardImg ? cardImg : defaultImg} />
      </div>
      <p className={s.card_title}>
        #{cardId}
      </p>
    </div>
  );
};

export default Card;
