import React from 'react';
import classes from './Comment.module.css';

export default ({author, text}) => {
    return (
        <div className={classes.Comment}>
            <h2>{author}</h2>
            <p>{text}</p>
        </div>
    );
}