var React = require('react');

// var Example = React.createClass({
//   render : function(){
//     return (
//          <h2>Example Component</h2>
//       );
//   }
// });
var Example = (props)=>{
  return (
    <div>
         <h2>Example Component!</h2>
         <p>Welcome to Example Page!</p>
    </div>
      );
}
module.exports=Example;