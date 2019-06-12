import React from 'react';
import '../styles/Layout.css';
import Logo from '../images/logo.svg';


class Layout extends React.Component{


    constructor(props){
        super(props)
        this.state = { 
            ClassLayout: 'Menu_Layout', //Define la clase que tiene el componente en este momento
            Menu_options: 'Menu_Lettes_White'
     };
    }

    

    componentDidMount() {    
        window.onscroll = () => this.handleAnimation();  
    };


    handleAnimation = () => {    //Funcion para que cambie cuando se baja    
        if (document.documentElement.scrollTop > 200 ) {           
            this.setState({ ClassLayout: 'Menu_Layout_White', Menu_options: 'Menu_Lettes'});   //Hace un cambio de clase para que este cambie de color
        }else{
            this.setState({ ClassLayout: 'Menu_Layout', Menu_options: 'Menu_Lettes_White'});
        }
    };

    render(){


        return(

            <div className= "Layout" >

                        <ul className className={this.state.ClassLayout}>
                            
                            <a href="/" className="Logo"> 
                                <img className="Logo" src={Logo} alt=""/>
                            </a>
                            <li className="Menu">
                                <a href="/" className={this.state.Menu_options}>Home</a>
                            </li>
                            <li className="Menu">
                                <a href="/" className={this.state.Menu_options}>Tips</a>
                            </li>
                            <li className="Menu">
                                <a href="/" className={this.state.Menu_options}>About Us</a>
                            </li>
                            <li className="Menu">
                            <a href="/" className={this.state.Menu_options}>Contact</a> 
                            </li>
                        </ul>
                
            </div>



        )
    }




}

export default Layout 