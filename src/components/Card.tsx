interface Props {
    image: string;
    title: string;
    content: string;
}

function Card(props: Props) {
  return (
    <div className="card mx-auto m-5" style={{width: '18rem'}}>
      <img src='/src/assets/images/BB-icon.png' className="card-img-top" alt="Image not available"></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.content}
        </p>
        <a href="#" className="btn btn-primary">
          Link
        </a>
      </div>
    </div>
  );
}

export default Card;
