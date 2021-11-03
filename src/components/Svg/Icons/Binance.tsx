import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
          <circle id="Oval" fill="#103F68" cx="256" cy="256" r="256"></circle>
          <path d="M257.5,89.3149546 L401.853484,172.657477 L401.853484,339.342523 L257.5,422.685045 L113.146516,339.342523 L113.146516,172.657477 L257.5,89.3149546 Z" id="Polygon" stroke="#FFFFFF" stroke-width="17"></path>
          <polygon id="Path" fill="#FFFFFF" points="195.028577 156.491909 181.54368 217.549177 328.969372 217.549177 314.576822 156.491909"></polygon>
          <path d="M181.007047,238.384148 L141.092396,268.318024 L195.496244,363.584805 L217.374531,363.584805 L243.066779,339.421606 L243.066779,327.386202 L216.386695,301.757189 L216.386695,260.953943 C192.800263,245.907413 181.007047,238.384148 181.007047,238.384148 Z" id="Path-2" fill="#FFFFFF"></path>
          <path d="M306.979715,237.962783 L267.066779,267.895372 L321.468289,363.158059 L343.345635,363.158059 L369.036779,338.995898 L369.036779,326.961011 L342.357842,301.3331 L342.357842,260.531607 C318.772424,245.485724 306.979715,237.962783 306.979715,237.962783 Z" id="Path-2" fill="#FFFFFF" transform="translate(318.051779, 300.560421) scale(-1, 1) translate(-318.051779, -300.560421) "></path>
          <path d="" id="Path-3" stroke="#979797"></path>
          <polygon id="Path-4" fill="#FFFFFF" points="216.547802 226.899827 229.533283 260.953587 225.537827 299.123694 284.743967 298.933416 281.128702 260.953587 293.909023 226.899827"></polygon>
      </g>
    </Svg>
  );
};

export default Icon;
