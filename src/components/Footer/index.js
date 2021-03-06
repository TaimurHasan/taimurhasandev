import React from "react";
import classes from "./Footer.module.css"

function Footer() {
    return (
        <div className = {classes.Footer}>
                <a className={classes.EmailButton} href="mailto:taimurhasan11@gmail.com?subject=Lets%20Connect!">
                    <button>Contact Me</button>
                </a>            
                <p>Built with React &trade; </p>
                <p >&copy; 2022</p>
        </div>
    )
};

export default Footer;