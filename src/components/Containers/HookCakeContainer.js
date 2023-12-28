import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/Cake/CakeAction";

const HookCakeContainer = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <div>Remaining cake: {numberOfCakes}</div>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
};

export default HookCakeContainer;
