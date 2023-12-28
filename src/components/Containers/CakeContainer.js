import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/Cake/CakeAction";

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

const CakeContainer = (props) => {
  const [cakeBuy, setCakeBuy] = useState(1);
  const handleBuyCake = () => {
    return props.buyCake(cakeBuy);
  };
  return (
    <div>
      <div>Remaining cakes: {props.numberOfCakes}</div>
      <input
        value={cakeBuy}
        type="number"
        min={1}
        onChange={(event) => setCakeBuy(event.target.value)}
      />
      <button
        onClick={() => {
          handleBuyCake();
        }}
      >
        Buy cake
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
