import fruits from "./assets/fruits.jpg";
import machinery from "./assets/machinery.jpg";
import tool from "./assets/tool.jpg";
import meat from "./assets/meat.jpg";
import snacks from "./assets/snacks.jpg";
import dairy from "./assets/dairy.jpg";

export const categories = [
  { name: "Fruits & Vegetables", img: fruits },
  { name: "Heavy Machinery", img: machinery },
  { name: "Farming Tools", img: tool },
  { name: "Meat & Fish", img: meat },
  { name: "Snacks", img: snacks },
  { name: "Dairy Product", img: dairy },
];

export const shoppingCarts = [
  {
    itemImg:
      "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
    itemName: " Iphone 11 pro",
    description: "256GB, Navy Blue",
    currency: ["USD", "$"],
    price: "900",
    quantity: 2,
  },
  {
    itemImg:
      "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp",
    itemName: "Samsung galaxy Note 10",
    description: "256GB, Navy Blue",
    currency: ["USD", "$"],
    price: "900",
    quantity: 2,
  },
  {
    itemImg:
      "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp",
    itemName: "Canon EOS M50",
    description: "Onyx Black",
    currency: ["USD", "$"],
    price: "1199",
    quantity: 1,
  },
  {
    itemImg:
      "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp",
    itemName: "MacBook Pro",
    description: "1TB, Graphite",
    currency: ["USD", "$"],
    price: "1799",
    quantity: 1,
  },
];
