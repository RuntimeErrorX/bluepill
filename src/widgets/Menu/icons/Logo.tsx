import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 205 26" {...props}>
      <image width="200" height="70" href={isDark ? '/images/egg/20.png' : '/images/egg/20.png'}/>
    </Svg>
  )
};

export default Logo;
