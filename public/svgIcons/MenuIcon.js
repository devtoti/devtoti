import * as React from "react";

const SvgMenuIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.6 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 0 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 6Z"
      fill="url(#menu-icon_svg__a)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.6 12a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 12Z"
      fill="url(#menu-icon_svg__b)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.8 18a1.2 1.2 0 0 1 1.2-1.2h7.2a1.2 1.2 0 1 1 0 2.4H12a1.2 1.2 0 0 1-1.2-1.2Z"
      fill="url(#menu-icon_svg__c)"
    />
    <defs>
      <linearGradient
        id="menu-icon_svg__a"
        x1={12}
        y1={4.8}
        x2={12}
        y2={19.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F2A44A" />
        <stop offset={1} stopColor="#F2C34B" />
      </linearGradient>
      <linearGradient
        id="menu-icon_svg__b"
        x1={12}
        y1={4.8}
        x2={12}
        y2={19.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F2A44A" />
        <stop offset={1} stopColor="#F2C34B" />
      </linearGradient>
      <linearGradient
        id="menu-icon_svg__c"
        x1={12}
        y1={4.8}
        x2={12}
        y2={19.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F2A44A" />
        <stop offset={1} stopColor="#F2C34B" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgMenuIcon;
