var React = require('react');

// var WeatherMessage = React.createClass({
//   render : function(){
//     var {location,temp} = this.props;
//     return (
//         <div>
//             <h3>its {temp} in {location}.</h3>
//          </div>
//       );
//   }
// });
var WeatherMessage =(props)=>{
  var {location,temp} = props;
  return (
        <div>
            <h3>its {temp} in {location}.</h3>
         </div>
      );
}
module.exports=WeatherMessage;

//Line#13 can also be written var WeatherMessage =(location,temp) and no need to write line 14