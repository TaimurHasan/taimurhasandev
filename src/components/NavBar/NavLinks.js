import React, { useState } from "react"
import {motion} from 'framer-motion'
import classes from './NavBar.module.css'

function NavLinks (props) {
    const animateFrom = {opacity: 0, y: -40, padding: 13}
    const animateTo = {opacity: 1, y: 0, padding: 13}

    const {
        setCurrentSection
    } = props;

    const [sections] = useState([
        { 
          name: 'About',
          description: 'About Me' 
        },
        { name: 'Work',
          description: 'My Work & Projects' 
        }
    ])
    

    return (
            <ul className={classes.NavList}>
                <motion.li 
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.10}}
                >
                    <a href="./">Home</a>
                </motion.li>
                <motion.li 
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.20}}
                >
                    <span 
                        onClick={() => {
                            setCurrentSection(sections[0])
                        }}
                    >
                        About
                    </span>
                </motion.li>
                <motion.li 
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.30}}
                >
                    <span
                        onClick={() => {
                            setCurrentSection(sections[1])
                        }}
                    >
                        Work
                    </span>
                </motion.li>
                <motion.li 
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.40}}
                >
                    <a href="./">Resume</a>
                </motion.li>
            </ul>
    )
}

export default NavLinks;