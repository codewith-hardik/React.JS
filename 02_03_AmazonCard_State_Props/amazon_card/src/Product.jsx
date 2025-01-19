import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrice = ["12,495", "11,900", "1,599", "599"];
  let newPrice = ["8,999", "9,199", "899", "278"];

  let descreption = [
    ["8,000 DPI", "5 Programmable Buttons"],
    ["Intuitive touch surface", "Designed for iPad Pro"],
    ["Intuitive touch surface", "Designed for iPad Pro"],
    ["Wierless Mouse 2.4 GHz", "Optical Origntation"],
  ];
  return (
    <div className="product">
      <h3>{title}</h3>
      <p>{descreption[idx][0]}</p>
      <p>{descreption[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default Product;
