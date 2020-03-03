import React, { Component } from "react";
export default class Copyright extends Component {
  render() {
    return (
      <div>
        <h4>Key Learnings</h4>
        <ul>
          <li>
             Implemented Redux
          </li>
          <li>
            Implemented react-redux hooks (useSelector, useDispatch) and useEffects hook
          </li>
          <li>
            <a href="https://github.com/yinhowlew/ecommerce-shopping-cart">
              Source code
            </a>
          </li>    
          <li>
            <a href="https://github.com/basir/ecommerce-shopping-cart">
              Built from Basir's project
            </a>
          </li>              
        </ul>
      </div>
    );
  }
}
