import React from "react";
import classes from "./Hero.module.css";
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"

function Hero (props) {
    const {
        currentSection
    } = props;

    return (

        <section className={`${classes.hero}`}>
            {currentSection ? (
                <div className={classes.HeroContent}>
                    <div className = {classes.HeroIntro}>
                        <h2>{currentSection.description}</h2>                    
                    </div>
                </div>
            ) : (
                <div className={classes.HeroContent}>
                    <div className = {classes.HeroIntro}>
                        <h2>Full Stack Developer</h2>
                        <p>Currently Senior Finance Analyst @ Align Technology</p>
                        <p>A University of Toronto Full-Stack Development and Wilfrid Laurier Business school graduate with a passion for user-centric and scalable technology.</p>
                        <div className = {classes.HeroLinks}> 
                            <a href="https://www.linkedin.com/in/taimur-h/" target="_blank" rel="noreferrer">
                             <AiFillLinkedin className = {classes.Link} size = "40px" />
                            </a>
                            <a href="https://github.com/TaimurHasan" target="_blank" rel="noreferrer">
                             <AiFillGithub className = {classes.Link} size = "40px" />
                            </a>
                        </div>
                    </div>
                    <div className = {classes.imageContainer}>
                        <img alt="taimur hasan's headshot" className = {classes.HeroImage} src = {require("../../images/Headshot.jpg")} />
                    </div>
                </div>
            )}   
        </section>

    )
};

export default Hero;