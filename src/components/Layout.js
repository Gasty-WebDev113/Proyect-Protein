import React from 'react';
import '../styles/Layout.css';
import Logo from '../images/logo.svg';
import Logo2 from '../images/logo_corazon.svg';

import {Link} from 'react-router-dom'

class Layout extends React.Component{


    constructor(props){
        super(props)
        this.state = { 
            ClassLayout: 'Menu_Layout', //Define la clase que tiene el componente en este momento
            Menu_options: 'Menu_Lettes_White' //El estilo de las letras que hara un cambio de estilo
     };
    }

    

    componentDidMount() {    
        window.onscroll = () => this.WindOfChange(); //Se activa la funcion que hara el cambio ---- Scorpions
    };


    WindOfChange = () => {    //Funcion para que cambie cuando se baja cuando estamos por arriba de 200 pixeles  
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
                            {/* Estableciendo la funcion del Menu */}
                            
                            <a href="/" className="Logo"> 
                                <img className="Logo" src={Logo} alt=""/>
                                <img className="Logo2" src={Logo2} alt=""/>
                            </a>
                            <li className="Menu">
                                <Link to="/">
                                    <div className={this.state.Menu_options}>Home</div>
                                </Link>
                            </li>
                            <li className="Menu">
                                <Link to="/blogs">
                                    <div className={this.state.Menu_options}>Blogs</div>
                                </Link>
                            </li>
                            <li className="Menu">
                                <Link to="/blogs">
                                    <div className={this.state.Menu_options}>Shop</div>
                                </Link>
                            </li>
                            <li className="Menu">
                                <Link to="/blogs">
                                    <div className={this.state.Menu_options}>Contact</div>
                                </Link>
                            </li>
                        </ul>
                
            </div>



        )
    }




}

export default Layout 