import React from "react";
import classes from "./PostView.module.css";
import CommentFrom from "../comment-from/CommentFrom";
import Comment from '../comment/Comment'

export default ({ author, date, title, text, comments,onBackHandler}) => {
  return (
    <div>
      <button onClick={onBackHandler}>Back</button>
      <div>
        <h3>{author}</h3>
        <small>{date}</small>
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
      <hr />
      {comments.map((comment,index) => <Comment key={index} author={comment.author} text={comment.text}/>)}
      <CommentFrom />
    </div>
  );
};
