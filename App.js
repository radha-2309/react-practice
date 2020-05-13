import React, { Component } from 'react';
class App extends Component{
   render(){
      return(
         <div>
            <h1>Welcome to React Basics</h1>
            <h2>React is {5 + 5} times better with JSX</h2>
            <table>
               <caption>Monthly savings</caption>
               <tr>
                  <th>Month</th>
                  <th>Savings</th>
               </tr>
               <tr>
                  <td>January</td>
                  <td>$100</td>
               </tr>
               <tr>
                  <td>February</td>
                  <td>$50</td>
               </tr>
            </table>
         </div>
      );
   }
}
export default App;