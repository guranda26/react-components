import React from "react";
import Card from "./Card";
import theIdiot from "../assets/The Idiot.jpeg";
import AnnaKarenina from "../assets/Anna Karenina.jpeg";
import mockingbird from "../assets/To kill a mockingbird.jpg";
import pridePrejudice from "../assets/Pride and prejudice.jpeg";
import HarryPotter from "../assets/Harry Potter.jpg";

const data = [
  {
    id: 1,
    name: "To Kill a Mockingbird",
    image: mockingbird,
    description:
      "Set in small-town Alabama, the novel is a bildungsroman, or coming-of-age story, and chronicles the childhood of Scout and Jem Finch as their father Atticus defends a Black man falsely accused of rape.",
    characters: ["Atticus", "Scout", "Dill"],
  },
  {
    id: 2,
    name: "Pride and Prejudice",
    image: pridePrejudice,
    description:
      "Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner.",
    characters: ["Elizabeth", "Mr. Darcy", "Mrs. Bennet"],
  },
  {
    id: 3,
    name: "Harry Potter",
    image: HarryPotter,
    description:
      "The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
    characters: ["Harry", "Ron", "Hermione"],
  },

  {
    id: 4,
    name: "The Idiot",
    image: theIdiot,
    description:
      "Prince Myshkin has finally returned to St. Petersburg from Swiss. He is quickly drawn into a elaborate web of relationships driven by money, power and romance. The Prince finds himself caught in a love triangle between the beautiful young Aglaia and Nastasya, a notorious kept woman.",
    characters: ["Myshkin", "Aglaia", "Nastasya"],
  },

  {
    id: 5,
    name: "Anna Karenina",
    image: AnnaKarenina,
    description:
      "The narrative centres on the adulterous affair between Anna, wife of Aleksey Karenin, and Count Vronsky, a young bachelor. Karenin's discovery of the liaison arouses only his concern for his own public image. Anna promises discretion for the sake of her husband and young son but eventually becomes pregnant by Vronsky.",
    characters: ["Anna", "Vronsky", "Konstantin"],
  },
];
const CardList = () => {
  return (
    <div>
      {data.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          image={card.image}
          description={card.description}
          characters={card.characters}
        />
      ))}
    </div>
    // <div>
    //   <Card
    //     name="The Idiot"
    //     image={theIdiot}
    //     description="Prince Myshkin has finally returned to St. Petersburg from Swiss. He is quickly drawn into a elaborate web of relationships driven by money, power and romance. The Prince finds himself caught in a love triangle between the beautiful young Aglaia and Nastasya, a notorious kept woman."
    //     characters={["Myshkin", "Aglaia", "Nastasya"]}
    //     id={1}
    //   />
    //   <Card
    //     name="To Kill a Mockingbird"
    //     image={mockingbird}
    //     description="Set in small-town Alabama, the novel is a bildungsroman, or coming-of-age story, and chronicles the childhood of Scout and Jem Finch as their father Atticus defends a Black man falsely accused of rape."
    //     characters={["Atticus", "Scout", "Dill"]}
    //     id={2}
    //   />
    //   <Card
    //     name="Pride and Prejudice"
    //     image={pridePrejudice}
    //     description="Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner."
    //     characters={["Elizabeth", "Mr. Darcy", "Mrs. Bennet"]}
    //     id={3}
    //   />
    //   <Card
    //     name="Harry Potter"
    //     image={HarryPotter}
    //     description="The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry."
    //     characters={["Harry", "Ron", "Hermione"]}
    //     id={4}
    //   />
    //   <Card
    //     name="Anna Karenina"
    //     image={AnnaKarenina}
    //     description="The narrative centres on the adulterous affair between Anna, wife of Aleksey Karenin, and Count Vronsky, a young bachelor. Karenin's discovery of the liaison arouses only his concern for his own public image. Anna promises discretion for the sake of her husband and young son but eventually becomes pregnant by Vronsky."
    //     characters={["Anna", "Vronsky", "Konstantin"]}
    //     id={5}
    //   />
    // </div>
  );
};

export default CardList;
