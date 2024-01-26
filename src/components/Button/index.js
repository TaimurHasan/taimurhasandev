import React from "react";
import classes from './Button.module.css';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Button = (props) => {
    const {
        text,
        forward,
        nextPage,
        history,
    } = props;

    return(
        <div className={classes.NavBtns}>
            <span className={classes.AboutLink} onClick={() => history.push(`/${nextPage}`)}> 
                    {forward ? (
                        <>
                            {text}
                            <BsFillArrowRightCircleFill className={classes.btnArrow}/>
                        </>
                    )
                    :  
                    (
                        <>
                            Read More
                            <BsFillArrowLeftCircleFill className={classes.btnArrow}/>
                        </>
                    )
                    } 
            </span>
        </div>
    )
};

export default Button;
