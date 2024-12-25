import Card from "./Card";

interface Props {
  cards: string[][];
}

function CardContainer(props: Props) {
  return (
    <div className="container text-center">
      <div className="row row-cols-auto">
        {props.cards.map((_card, index) => (
          <div className="col">
            <Card
              image=""
              title={props.cards[index][1]}
              content={props.cards[index][2]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
