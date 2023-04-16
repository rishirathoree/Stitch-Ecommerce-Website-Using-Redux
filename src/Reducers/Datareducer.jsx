import image2 from '../images/shoe.jpg';
import image3 from '../images/shoe2.jpg';
import jeans1 from '../images/jeans.jpg';
import jeans2 from '../images/jeans2.jpg';
import image9 from '../images/shoe3.jpg';
import jacket from '../images/jacket.jpg';
import image1 from '../images/tshirt.jpg';
import imagea1 from '../images/shoe4.jpg';
import image4 from '../images/hoodies.jpg';
import image6 from '../images/shirt2.jpg';
import image5 from '../images/hoodies2.jpg';
import image7 from '../images/shirt3.jpg';
import image8 from '../images/shirt1.jpg';

const Initialstate = [
  { id: 1, name: "Blue T-Shirt", category: "tshirts", price: 20, image: image1 },
  { id: 2, name: "Red Hoodie", category: "Hoodies", price: 40, image:image4  },
  { id: 3, name: "Black Jeans", category: "Jeans", price: 50, image: jeans1 },
  { id: 4, name: "White Sneakers", category: "Shoes", price: 80, image: image3 },
  { id: 5, name: "Black Leather Jacket", category: "Jackets", price: 120, image: jacket },
  { id: 6, name: "Gray Sweatpants", category: "Pants", price: 30, image: image1 },
  { id: 7, name: "Brown Leather Boots", category: "Shoes", price: 100, image: image2 },
  { id: 8, name: "Navy Blue Blazer", category: "Jackets", price: 150, image: jacket },
  { id: 9, name: "Charcoal Dress Pants", category: "Pants", price: 60, image: image4 },
  { id: 10, name: "Black Dress Shoes", category: "Shoes", price: 90, image: image9 },
  { id: 11, name: "Striped Polo Shirt", category: "Shirts", price: 25, image: image6 },
  { id: 12, name: "Dark Wash Jeans", category: "Jeans", price: 70, image: jeans2 },
  { id: 13, name: "Gray Henley Shirt", category: "Shirts", price: 30, image: image7 },
  { id: 15, name: "Brown Leather Jacket", category: "Jackets", price: 110, image: jacket },
  { id: 16, name: "White Oxford Shirt", category: "Shirts", price: 35, image: image8 },
  { id: 17, name: "Black Dress Pants", category: "Pants", price: 70, image: image2 },
  { id: 18, name: "Tan Chukka Boots", category: "Shoes", price: 80, image: imagea1 },
  { id: 19, name: "Gray Hoodie", category: "Hoodies", price: 45, image: image5 },
  { id: 20, name: "Navy Blue Chinos", category: "Pants", price: 50, image: image4 },
]


export const datareducer = (state=Initialstate, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
