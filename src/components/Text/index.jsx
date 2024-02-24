import React from "react";

const sizeClasses = {
  txtSFProTextRegular14: "font-normal font-sfprotext",
  txtInterMedium16Gray800: "font-inter font-medium",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterSemiBold28: "font-inter font-semibold",
  txtInterMedium12Bluegray40003: "font-inter font-medium",
  txtInterBold24: "font-bold font-inter",
  txtInterMedium1512: "font-inter font-medium",
  txtInterMedium16TealA700: "font-inter font-medium",
  txtInterRegular16Gray90005: "font-inter font-normal",
  txtInterBold20: "font-bold font-inter",
  txtInterMedium14Bluegray400: "font-inter font-medium",
  txtInterRegular15WhiteA70095: "font-inter font-normal",
  txtSFProTextRegular14Bluegray700: "font-normal font-sfprotext",
  txtInterRegular1356: "font-inter font-normal",
  txtSFProTextMedium14: "font-medium font-sfprotext",
  txtInterSemiBold16Gray90001: "font-inter font-semibold",
  txtInterMedium13Blue800: "font-inter font-medium",
  txtInterBold18: "font-bold font-inter",
  txtIBMPlexSansRegular1454: "font-ibmplexsans font-normal",
  txtInterMedium12: "font-inter font-medium",
  txtInterMedium13: "font-inter font-medium",
  txtInterBold16: "font-bold font-inter",
  txtInterBold17: "font-bold font-inter",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtInterMedium15: "font-inter font-medium",
  txtInterMedium1425: "font-inter font-medium",
  txtInterMedium3641: "font-inter font-medium",
  txtInterRegular11: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular15: "font-inter font-normal",
  txtRobotoMedium14: "font-medium font-roboto",
  txtInterRegular16: "font-inter font-normal",
  txtInterSemiBold16Blue800: "font-inter font-semibold",
  txtInterRegular14Bluegray800: "font-inter font-normal",
  txtInterMedium1562Bluegray40002: "font-inter font-medium",
  txtInterSemiBold16Gray900: "font-inter font-semibold",
  txtInterRegular112: "font-inter font-normal",
  txtInterMedium14Gray100: "font-inter font-medium",
  txtInterMedium13Gray90002: "font-inter font-medium",
  txtInterSemiBold11: "font-inter font-semibold",
  txtInterRegular14WhiteA700: "font-inter font-normal",
  txtInterMedium16Gray900: "font-inter font-medium",
  txtInterRegular1378: "font-inter font-normal",
  txtInterSemiBold1891: "font-inter font-semibold",
  txtInterSemiBold1891Gray900: "font-inter font-semibold",
  txtInterMedium14Gray90002: "font-inter font-medium",
  txtInterSemiBold15: "font-inter font-semibold",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterSemiBold24Gray900: "font-inter font-semibold",
  txtInterMedium1562: "font-inter font-medium",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular14Gray900: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
