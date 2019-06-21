import React from 'react'
import '../styles/LittleIntro.css'
import ReactLogo from '../images/React.svg'
import NodeLogo from '../images/Node.svg'
import NextLogo from '../images/Next.svg'
import Router from '../images/React-Router.svg'
import Webpack from '../images/Webpack.svg'
import Sails from '../images/Sails.svg'
import Redux from '../images/Redux.png'
import GraphQL from '../images/GraphQL.svg'
import AOS from 'aos'

class SobreMi extends React.Component {


    render(){

        return(

            <div className="sobremi_container">
                
                <div>
                    <h1 className="title-little" data-aos="fade-up"
                    data-aos-duration="500" data-aos-easing="ease-out"
                    >Let's see my blogs about Web-Dev</h1>
                    <p className="text-little" data-aos="fade-up"
                    data-aos-duration="500" data-aos-easing="ease-out" >This is my blogs and content about Web Development, I'm Gaston and i work hard for learning and know all about 
                        this, in the blogs, i talk about all Libraries and Effects releated whit Node.Js and React</p>
                    <h2 className="subtitle-little"data-aos="fade-down"
                    data-aos-duration="500" data-aos-easing="ease-out">Languages and Tecnologies</h2>
                </div>
                <div data-aos="zoom-up-out"
                    data-aos-duration="1000" data-aos-easing="ease-out">
                    <div className="Programing-logo-container"><img className="Programing-logo" src={ReactLogo} alt="React"/></div>
                    <div className="Programing-logo-container"><img className="Programing-logo" src={NodeLogo} alt="React"/></div>
                    <div className="Programing-logo-container"><img className="Programing-logo" src={NextLogo} alt="React"/></div>
                    <div className="Programing-logo-container"><img className="Programing-logo" src={Router} alt="React"/></div>
                    <div className="Programing-logo-container"><img className="Programing-logo" src={Webpack} alt="React"/></div>
                    <div className="Programing-logo-container"><img className="Programing-logo" src={Sails} alt="React"/></div>
                    <div className="Programing-logo-container"><img className="Programing-logo" src={Redux} alt="React"/></div>
                    <div className="Programing-logo-container"><img className="Programing-logo" src={GraphQL} alt="React"/></div>
                </div>
            </div>
        )
    }




}

export default SobreMi