import React from "react";

export default ({ author, date, title, desc, commentCount }) => {
  return (
    <>
      <div>{author}</div>
      <small>{date}</small>
      <h2>{title}</h2>
      <p>{desc}</p>
      <div>Comments: {commentCount}</div>
    </>
  );
};
