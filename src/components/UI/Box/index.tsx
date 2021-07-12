import React, { createElement } from "react";
import { IBox } from "./interface";
import { useTypeof } from "../../../hooks/useTypeof";

const Box: React.FC<IBox> = ({
  as,
  bg,
  borderW,
  color,
  display,
  fontSize,
  h,
  maxH,
  maxW,
  mb,
  ml,
  mr,
  mt,
  overflow,
  p,
  pt,
  pr,
  pb,
  pl,
  radius,
  w,
  children,
  ...rest
}) => {
  return as ? (
    createElement(
      as,
      {
        style: {
          background: bg && bg,
          borderWidth: borderW && borderW,
          color: color && color,
          display: display ? display : "flex",
          fontSize:
            fontSize && typeof fontSize === "string"
              ? fontSize
              : fontSize + "px",
          height: h && h,
          maxHeight: maxH && maxH,
          maxWidth: maxW && maxW,
          marginBottom: mb && mb,
          marginLeft: ml && ml,
          marginRight: mr && mr,
          marginTop: mt && mt,
          overflow: overflow && overflow,
          padding: p && p,
          paddingTop: pt && pt,
          paddingRight: pr && pr,
          paddingBottom: pb && pb,
          paddingLeft: pl && pl,
          borderRadius: radius && radius,
          width: w && w,
        },
      },
      children
    )
  ) : (
    <div
      style={{
        background: bg && bg,
        borderWidth: borderW && borderW,
        color: color && color,
        display: display ? display : "flex",
        fontSize:
          fontSize && typeof fontSize === "string" ? fontSize : fontSize + "px",
        height: h && h,
        maxHeight: maxH && maxH,
        maxWidth: maxW && maxW,
        marginBottom: mb && mb,
        marginLeft: ml && ml,
        marginRight: mr && mr,
        marginTop: mt && mt,
        overflow: overflow && overflow,
        padding: p && p,
        paddingTop: pt && pt,
        paddingRight: pr && pr,
        paddingBottom: pb && pb,
        paddingLeft: pl && pl,
        borderRadius: radius && radius,
        width: w && w,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Box;
