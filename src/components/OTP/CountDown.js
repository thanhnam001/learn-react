import React, { useEffect, useState } from "react";

const CountDown = (props) => {
  const [timeLeft, setTimeLeft] = useState(3);
  useEffect(() => {
    if (timeLeft === 0) {
      props.setIsDisable(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  return <div className="count-down">{timeLeft}</div>;
};

// class CountDown extends React.Component {
//   constructor(props) {
//     // console.log('run constructor')
//     super(props);
//     this.state = {
//       timeLeft: 3,
//     };
//   }
//   componentDidMount() {
//     // console.log('run didmount')
//     this.timer = setInterval(() => {
//       let current = this.state.timeLeft;
//       this.setState({ timeLeft: current - 1 });
//     }, 1000);
//   }
//   componentDidUpdate(prevProps, prevState) {
//     // console.log('run didupdate')
//     if (
//       // this.state.timeLeft !== prevState.timeLeft &&
//       this.state.timeLeft === 0
//     ) {
//       if (this.timer) {
//         clearInterval(this.timer);
//       }
//     }
//   }

//   render() {
//     // console.log('run render')
//     return <div className="count-down">{this.state.timeLeft}</div>;
//   }
// }

export default CountDown;
