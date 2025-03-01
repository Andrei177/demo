import Card from "../../../shared/components/Card/ui/Card";
import s from "./Catalog.module.css";

const Catalog = () => {
  const cards = [
    { id: 1, imgUrl: "" },
    { id: 2, imgUrl: "" },
    { id: 3, imgUrl: "" },
    { id: 4, imgUrl: "" },
    { id: 5, imgUrl: "" },
    { id: 6, imgUrl: "" },
    { id: 7, imgUrl: "" },
  ];

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Catalog</h1>
      <div className={s.catalog}>
        {cards.map((card) => (
          <Card cardId={card.id} cardImg={card.imgUrl} key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
