import React from "react";

const UnfilteredList = props => {
  return (
    <div key={props.exercise.id}>
      <h2>{props.exercise.name}</h2>
      <p>
        {props.exercise.description
          .replace(/(<p[^>]+?>|<p>|<\/p>)/gim, "")
          .replace(/(<li[^>]+?>|<li>|<\/li>)/gim, "")
          .replace(/(<ol[^>]+?>|<ol>|<\/ol>)/gim, "")
          .replace(/(<ul[^>]+?>|<ul>|<\/ul>)/gim, "")
          .replace(/(<em[^>]+?>|<em>|<\/em>)/gim, "")
          .replace(/(<strong[^>]+?>|<strong>|<\/strong>)/gim, "")}
      </p>
      <button onClick={() => props.destroy(props.index)}>
        Delete Exercise
      </button>
      <br />
    </div>
  );
};
export default UnfilteredList;
