function Card({ title, text, link }) {
  return (
    <a href={link}>
      <div className="card">
        <div className="card-content">
          <div className="content">
            <p className="title">{title}</p>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Card;
