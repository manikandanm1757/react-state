import React, { Component } from "react";
import Child from "./Child";

export default class App extends Component {
  constructor() {
    super();
    console.log('Stage 1 in Constructor');
    this.state = {
      value: "",
      color: "red",
      count: 0,
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    this.setState(
      {
        value: event.target.value,
        color: event.target.value.length > 6 ? "green" : "pink",
      },
      () => {
        console.log(this.state);
      }
    );
  }

  getCount = (value)=> {
    this.setState({count : value});
  }

  componentDidMount() {
    console.log('Stage 3 Mount');
    // Data Fetching
    // Init timer, setTimeout
    // Any subscription
  }

  componentDidUpdate() {
    console.log('Update Stage 1 in update');
  }

  render() {
    console.log('Stage 2 Render');
    debugger
    return (
      <div className="mt-4" style={{border: '3px solid red', padding: '20px'}}>
        <input
          value={this.state.value}
          style={{ backgroundColor: this.state.color }}
          onChange={this.changeHandler}
        />
        <h4>App Count : {this.state.count} </h4>
       {this.state.count < 3 && <Child getCount={this.getCount} name={this.state.value + ' From App Comp'} innerElement={ <h4>Inner HTM fdfdL</h4>} >
           
        </Child>}
      </div>
    );
  }
}

// import Plans from "./Plans";
// import "./App.css";

// function App() {
//   const plans = [
//     {
//       name: "Free",
//       price: 0,
//       features: [
//         { name: "Single User", enabled: true },
//         { name: "5GB Storage", enabled: true },
//         { name: "Unlimited Public Projects", enabled: true },
//         { name: "Community Access", enabled: true },
//         { name: "Unlimited Private Projects", enabled: false },
//         { name: "Dedicated Phone Support", enabled: false },
//         { name: "Free Subdomain", enabled: false },
//         { name: "Monthly Status Reports", enabled: false }
//       ],
//     },
//     {
//       name: "Plus",
//       price: 9,
//       features: [
//         { name: "Single User", enabled: true },
//         { name: "5GB Storage", enabled: true },
//         { name: "Unlimited Public Projects", enabled: true },
//         { name: "Community Access", enabled: true },
//         { name: "Unlimited Private Projects", enabled: true },
//         { name: "Dedicated Phone Support", enabled: true },
//         { name: "Free Subdomain", enabled: true },
//         { name: "Monthly Status Reports", enabled: false }
//       ],
//     },
//     {
//       name: "pro",
//       price: 49,
//       features: [
//         { name: "Single User", enabled: true },
//         { name: "5GB Storage", enabled: true },
//         { name: "Unlimited Public Projects", enabled: true },
//         { name: "Community Access", enabled: true },
//         { name: "Unlimited Private Projects", enabled: true },
//         { name: "Dedicated Phone Support", enabled: true },
//         { name: "Free Subdomain", enabled: true },
//         { name: "Monthly Status Reports", enabled: true }
//       ],
//     },
//   ];
//   return (
//     <section className="pricing py-5">
//       <div className="container">
//         <div className="row">
//           {
//             plans.map((plan, index) => {
//               return <Plans key={index} name={plan.name} price={plan.price} features={plan.features} />
//             })
//           }
//         </div>
//       </div>
//     </section>
//   );
// }

// export default App;

// Number
// object
// Array
// function
//
