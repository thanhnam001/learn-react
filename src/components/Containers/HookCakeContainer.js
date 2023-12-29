import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/Cake/CakeAction";

const HookCakeContainer = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  const dispatchBuyCake = () => dispatch(buyCake())
  return (
    <div>
      <div>Remaining cake: {numberOfCakes}</div>
      <button onClick={() => dispatchBuyCake()}>Buy cake</button>
    </div>
  );
};

export default HookCakeContainer;
