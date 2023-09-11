import React from "react";
import Links from "./Links";

function About(props) {
  console.log(props.bio)
  const bio = props.bio
  return (
    <div id="about">
      <h2>About Me</h2>
     { {bio} ? <p>{bio}</p>: null }
     <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} link={props.linkedin} bio={props.bio} />
    </div>
  );
}


export default About;
