import React from "react";

export default function RenderImage({ props }) {
  console.log(props);
  return (
    <li key={props.id} className="place-item">
      <img src={props.image.src} alt={props.image.alt} />
      <h3>{props.name}</h3>
      {props.hobbies.map((hobby, index) => (
        <p key={index}>{hobby}</p>
      ))}
    </li>
  );
}
