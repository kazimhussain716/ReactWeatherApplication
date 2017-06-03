var React = require('react');

// var About = React.createClass({
//   render : function(){
//     return (
//          <h2>About Component</h2>
//       );
//   }
// });

var About = (props) => {
   return (
      <div>
         <h2 className='text-center page-title'>About</h2>
         <p>This is weather application built on React.I have built this and its awesome.</p>
         <p>Here are som tools</p>
         <ul>
           <li>
             <a href='https://facebook.github.io/react'>React</a> -This was the javascript use.
           </li>
           <li>
             <a href='http://openweathermap.org'>Open weather map</a> -I use open weather map to serach for weather
             data by city name.
           </li>
         </ul>
      </div>
      );    
};
module.exports=About;