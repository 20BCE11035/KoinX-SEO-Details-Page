import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col h-[72px] md:h-auto items-center justify-start md:ml-[0] ml-[59px] md:mt-0 my-1 w-auto">
          <Img
            className="h-6 w-24"
            src="images/img_1koinxlogo.svg"
            alt="1koinxlogo"
          />
        </div>
        <div className="flex flex-row gap-[45px] items-center justify-center md:ml-[0] ml-[319px] mr-14 w-[64%] md:w-full">
          <ul className="flex sm:flex-col flex-row gap-8 md:hidden items-center justify-end max-w-[728px] w-full common-row-list">
            <li>
              <Text
                className="bg-white-A700 h-[79px] justify-center py-[29px] text-base text-gray-900 tracking-[-0.16px]"
                size="txtInterSemiBold16Gray900"
              >
                Crypto Taxes
              </Text>
            </li>
            <li>
              <Text
                className="bg-white-A700 h-[70px] justify-center py-6 text-base text-gray-900 tracking-[-0.16px]"
                size="txtInterSemiBold16Gray900"
              >
                Free Tools
              </Text>
            </li>
            <li>
              <Text
                className="bg-white-A700 h-[70px] justify-center py-6 text-base text-gray-900 tracking-[-0.16px]"
                size="txtInterSemiBold16Gray900"
              >
                Resource Center
              </Text>
            </li>
          </ul>
          <div className="flex flex-col h-[70px] md:h-auto items-center justify-center w-auto">
            <Button
              className="!text-white-A700 cursor-pointer font-inter font-semibold h-10 leading-[normal] rounded-lg text-base text-center tracking-[-0.16px] w-[135px]"
              size="sm"
              variant="gradient"
              color="blue_A400_indigo_A700"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
