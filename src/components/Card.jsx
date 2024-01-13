import "../App.css";
const Card = ({ name, description, image, characters }) => {
  function action() {
    console.log(name, characters);
  }
  return (
    <div className="book-card">
      <h1 className="book-name">{name}</h1>

      <div className="card-img">
        <img src={image} alt={name} />
      </div>
      <p className="book-description">{description}</p>
      {characters.map((char, id) => (
        <p key={id} className="book-char">
          {char}
        </p>
      ))}

      <button className="click-book" onClick={action}>
        Click here
      </button>
    </div>
  );
};

export default Card;

// ფუნქცია უნდა ბეჭდავდეს შესაფერისი
//წიგნის სათაურს და პერსონაჟებს,
//ბეჭდვისთვის გამოიყენე console.log()
