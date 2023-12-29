import React, { useState } from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux/IceCream/IceCreamAction";

const mapStateToProps = (state) => {
  return {
    numberOfIceCreams: state.iceCream.numberOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: (number) => dispatch(buyIceCream(number)),
  };
};

const IceCreamContainer = (props) => {
  const [iceCream, setIceCreamBuy] = useState(1);
  const handleBuyIceCream = () => {
    return props.buyIceCream(iceCream);
  };
  return (
    <div>
      <div>Remaining iceCream: {props.numberOfIceCreams}</div>
      <input
        value={iceCream}
        type="number"
        min={1}
        onChange={(event) => setIceCreamBuy(event.target.value)}
      />
      <button
        onClick={() => {
          handleBuyIceCream();
        }}
      >
        Buy ice cream
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
