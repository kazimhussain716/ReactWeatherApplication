var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  
  handleSearch : function(location){
    // alert(location);
    var that = this;

    this.setState({
      isLoading:true,
      errorMessage : undefined
    });

    openWeatherMap.getTemp(location)
                  .then(function(temp)
                  {
                   that.setState({location:location,temp :temp,isLoading:false});             
                  }
                  ,function(error){
                    
                  that.setState({isLoading:false,errorMessage:error.message});
                  });
   
  },
  
 getInitialState : function(){
    return {
        isLoading:false,
    }
 },
  render : function(){
    var {location,temp,isLoading,errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){

      return <h3>Fetching Weather...</h3>
      }
      else if(temp && location){
            return <WeatherMessage location={location} temp={temp} />;
      }
    }
    function renderError(){
        if(typeof errorMessage === 'string') {
          return (
             <ErrorModal message={errorMessage}/>
            )
        }     
    }
    return (
      <div>
         <h2 className='text-center page-title'>Get Weather</h2>
         <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div> 
      );
  }
});
module.exports=Weather;