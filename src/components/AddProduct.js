import { useState } from "react";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isShow, setIsShow] = useState(false);
  const handleAddProduct = () => {
    const product = { name, price, size, quantity };
    let productInDB = JSON.parse(localStorage.getItem("product"));
    console.log(productInDB);
    if (productInDB) {
      productInDB.push(product);
      localStorage.setItem("product", JSON.stringify(productInDB));
    } else {
      localStorage.setItem("product", JSON.stringify([product]));
    }
    setName("");
    setPrice("");
    setSize("");
    setQuantity("");
  };

  return (
    <div>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow === true ? "Hide" : "Show"}
      </button>
      {isShow === true && (
        <fieldset>
          <legend>Add product infomations</legend>
          <div className="input-product">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              placeholder="Some product"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="input-product">
            <label>Price:</label>
            <input
              type="text"
              value={price}
              placeholder="0VND"
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <div className="input-product">
            <label>Size:</label>
            <input
              type="text"
              value={size}
              placeholder="XL"
              onChange={(event) => setSize(event.target.value)}
            />
          </div>
          <div className="input-product">
            <label>Quantity:</label>
            <input
              type="text"
              value={quantity}
              placeholder="0"
              onChange={(event) => setQuantity(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" onClick={() => handleAddProduct()}>
              Add product
            </button>
          </div>
        </fieldset>
      )}
    </div>
  );
};

export default AddProduct;
