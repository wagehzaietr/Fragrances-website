import image1 from "../assets/Images/main-banner-1-1903x820.jpg";
import image2 from "../assets/Images/main-banner-2-1903x820.jpg";
import cardimage1 from "../assets/Images/perfume-1.png";
import cardimage2 from "../assets/Images/perfume-2.png";
import cardimage4 from "../assets/Images/perfume-4.png";
import cardimage5 from "../assets/Images/perfume-5.jpg";
import cardimage6 from "../assets/Images/perfume-6.jpg";
import cardimage7 from "../assets/Images/perfume-7.jpg";


const Fragrances = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
];


const CardData = [
  {
    id: 1,
    info: "Classic Cologne",
    price: "$60",
    image: cardimage1,
    category: "women",
    rating:  2,
  },

  {
    id: 2,
    info: "Luxury Perfume",
    price: "$120",
    image: cardimage2,
    category: "women",
    rating:  5,
  },
  {
    id: 3,
    info: "Luxury Perfume",
    price: "$120",
    image: cardimage1,
    category: "women",
    rating:  2,
  },
  {
    id: 4,
    info: "Citrus Scented Cologne",
    price: "$45",
    image: cardimage4,
    category: "women",
    rating:  4,
  },

  {
    id: 5,
    info: "Woody Eau de Parfum",
    price: "$90",
    image: cardimage5,
    category: "men",
    rating:  3,
  },

  {
    id: 6,
    info: "Exotic Fragrance Oil",
    price: "$35",
    image: cardimage6,
    category: "men",
    rating:  1,
  },

  {
    id: 7,
    info: "Unisex Eau de Cologne",
    price: "$55",
    image: cardimage7,
    category: "men",
    rating:  4,
  },
  {
    id: 8,
    info: "Unisex Eau de Cologne",
    price: "$55",
    image: cardimage7,
    category: "men",
    rating:  3,
  },
];

const AboutData = [
  {
    id:1,
    info: "Lorem ollitia magni ipsa. Minima, odio?",
  },
];

export { Fragrances,CardData , AboutData  };
