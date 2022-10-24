export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  console.log();
  return (
    <div>
      <h2>Pleace leave feedback</h2>
    </div>
  );
};

// {this.countTotalFeedback() ? (
//     <div>
//       <h2>Statistics</h2>
//       <p>Good: {good}</p>
//       <p>Neutral: {neutral}</p>
//       <p>Bad: {bad}</p>
//       <p>total:{this.countTotalFeedback()} </p>
//       <p>Posittive feedback: {this.countPositiveFeedbackPercentage()}%</p>
//     </div>
//   ) : (
//     <div>
//       <p>There is no feedback</p>
//     </div>
//   )}

// <button
//           type="button"
//           onClick={() => {
//             this.setState(prevState => {
//               return {
//                 good: prevState.good + 1,
//               };
//             });
//           }}
//         >
//           Good
//         </button>
//         <button
//           type="button"
//           onClick={() => {
//             this.setState(prevState => {
//               return {
//                 neutral: prevState.neutral + 1,
//               };
//             });
//           }}
//         >
//           Neutral
//         </button>
//         <button
//           onClick={() => {
//             this.setState(prevState => {
//               return {
//                 bad: prevState.bad + 1,
//               };
//             });
//           }}
//         >
//           Bad
//         </button>
