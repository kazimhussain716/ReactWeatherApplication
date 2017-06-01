var React = require('react');
var {Link,IndexLink} = require('react-router');
// var Nav = React.createClass({
//   render : function(){
//     return (
//         <div>
//          <h2>Nav Component</h2>
//          <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink><span> </span>
//          <Link to='/about' activeClassName='active'  activeStyle={{fontWeight:'bold'}}>About</Link><span> </span>
//          <Link to='/example' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Examples</Link>
//          </div>
//       );
//   }
// });
var Nav =()=>{
   return (
        <div>
         <h2>Nav Component</h2>
         <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink><span> </span>
         <Link to='/about' activeClassName='active'  activeStyle={{fontWeight:'bold'}}>About</Link><span> </span>
         <Link to='/example' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Examples</Link>
         </div>
      );
  
}
module.exports=Nav;