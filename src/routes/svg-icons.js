import { Email } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// let navigate = useNavigate();

// export function routeChange(route) {
//   let path = `${route}`;
//   console.log(path)
//   navigate(path)
// }

const JSIcon = (props) => {
  return (
    <>
      <svg
        onClick={() => props.setShowJs((o) => !o)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 630 630"
      >
        <title>Javascript Logo</title>
        <rect width="630" height="630" fill="#f7df1e" />
        <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
      </svg>
    </>
  );
};

const HTMLIcon = (props) => {
  return (
    <>
      <svg
        onClick={() => props.setShowHtml((h) => !h)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 452 520"
      >
        <title>HTML5 Logo</title>
        <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
        <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
        <path
          fill="#ecedee"
          d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
        />
        <path
          fill="#fff"
          d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
        />
      </svg>
    </>
  );
};

// function handleClick(n) {
//   setIsOpen((o) => !o);
//   return console.log(isOpen);
// setIsOpen(false));

// {!isOpen && (console.log("it is now false");
// setIsOpen(true))};
const CSSIcon = (props) => {
  return (
    <>
      <svg
        onClick={() => props.setShowCss((h) => !h)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 452 520"
      >
        <title>CSS Logo</title>
        <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52" />
        <path fill="#30a9dc" d="M226 472l149-41 35-394H226" />
        <path
          fill="#ecedee"
          d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"
        />
        <path
          fill="#fff"
          d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"
        />
      </svg>
    </>
  );
};
const ReactIcon = (props) => {
  return (
    <>
      <svg
        onClick={() => props.setShowReact((o) => !o)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-11.5 -10.23174 23 20.46348"
      >
        <title>React Logo</title>
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    </>
  );
};

const GithubIcon = (props) => {
  return <svg 
  onClick={event =>  window.location.href='https://github.com/devtoti'}
  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
}

const EmailIcon = (props) => {
  return <svg onClick={() => window.location = 'mailto:toti.webdev@gmail.com'}
  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
}

const CalendarIcon = (props) => {
  return <svg onClick={event =>  window.location.href='https://calendly.com/toti-webdev/30min'} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"
  ><path d="M24 2v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2zm6.687 13.482c0-.802-.418-1.429-1.109-1.695.528-.264.836-.807.836-1.503 0-1.346-1.312-2.149-2.581-2.149-1.477 0-2.591.925-2.659 2.763h1.645c-.014-.761.271-1.315 1.025-1.315.449 0 .933.272.933.869 0 .754-.816.862-1.567.797v1.28c1.067 0 1.704.067 1.704.985 0 .724-.548 1.048-1.091 1.048-.822 0-1.159-.614-1.188-1.452h-1.634c-.032 1.892 1.114 2.89 2.842 2.89 1.543 0 2.844-.943 2.844-2.518zm4.313 2.518v-7.718h-1.392c-.173 1.154-.995 1.491-2.171 1.459v1.346h1.852v4.913h1.711z"/></svg>
}
const icons = [HTMLIcon, CSSIcon, JSIcon, GithubIcon, CalendarIcon, EmailIcon];
export { icons, JSIcon, HTMLIcon, CSSIcon, ReactIcon, CalendarIcon, EmailIcon, GithubIcon };
