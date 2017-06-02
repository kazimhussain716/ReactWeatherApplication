var React = require('react');

var {Link} = require('react-router');
var Example = (props)=>{
  return (
    <div>
         <h1 className='text-center'>Example</h1>
         <p>Here are few examples locaton to try out.</p>
         <ol>
           <li>
             <Link to='/?locaton=lahore'>Lahore,Pk</Link>
           </li>
           <li>
             <Link to='/?locaton=Rio'>Rio,Brazil</Link>
           </li>
         </ol>
    </div>
      );
}
module.exports=Example;