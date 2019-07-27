import React from 'react'
import '../styles/Footer.css'
import Github from '../images/socialmedia/github-logo.svg'
import Facebook from '../images/socialmedia/facebook.svg'
import Instagram from '../images/socialmedia/instagram.svg'
import Gmail from '../images/socialmedia/gmail.svg'
import Twitter from '../images/socialmedia/twitter-social-outlined-logo.svg'

class Footer extends React.Component {


    render(){
        return(
            <>
                    <div className="Footer_Container_Helper">
                        
                        <div className="Logo_Menu">
                            <a href="https://github.com/Gasty-WebDev113">
                                <img src={Github} alt="Github" className="Social_Media_Logos"/>
                            </a>
                            <a href="https://github.com/Gasty-WebDev113">
                                <img src={Facebook} alt="Facebook" className="Social_Media_Logos"/>
                            </a>
                            <a href="https://github.com/Gasty-WebDev113">
                                <img src={Instagram} alt="Github" className="Social_Media_Logos"/>
                            </a>
                            <a href="https://github.com/Gasty-WebDev113">
                                <img src={Gmail} alt="Github" className="Social_Media_Logos"/>
                            </a>
                            <a href="https://github.com/Gasty-WebDev113">
                                <img src={Twitter} alt="Github" className="Social_Media_Logos"/>
                            </a>
                        </div>

                        <div className="False_Footer_Menu">
                            
                            <ul>
                                <h2>Blogs</h2>
                                <li>See the Blogs</li>
                                <li>Top categories</li>
                                <li>Top entrances</li>

                            </ul>
                        </div>
                        
                        <div className="False_Footer_Menu">
                            <ul>
                                <h2>Suscription</h2>
                                <li>Suscribe</li>
                                <li>Follow Me!!!</li>
                                <li>Change Plan</li>
                                
                            </ul>
                        </div>
                        <div className="False_Footer_Menu">
                            <ul>
                                <h2>Support</h2>
                                <li>My Account</li>
                                <li>Contact Us</li>
                                <li>Directions</li>
                        
                            </ul>
                        </div>
                        
                    </div> 
            </>
        )}
}

export default Footer

/*<div className="Social_Media">
                    <a href="https://github.com/Gasty-WebDev113">
                        <img src={Github} alt="Github" className="Social_Media_Logos"/>
                    </a>
                </div>*/