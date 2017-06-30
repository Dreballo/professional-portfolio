// Include React
var React = require("react");
//Importing the Navbar
var Navbar = require('./children/Navbar');
//Importing content
var Landing = require('./children/Landing');
//Importing the footer
var Footer = require('./children/Footer');
//Import the float button
var FloatBtn = require('./children/button-floating');
//Import title info
var Title = require('./children/title');
//Import about info
var About = require('./children/about');
//Import projects
var Projects = require('./children/projects');


//Creating the main component

var Main = React.createClass({
    render: function (){
        return(
            <div id="main">
                <Navbar/>
                <div className="container wrapper valign-wrapper">
                    <Landing />
                    <Title/>
                </div>

                    <About/>

                    <Projects/>

                <Footer/>
                <FloatBtn />
            </div>

        );
    }
});


module.exports = Main;