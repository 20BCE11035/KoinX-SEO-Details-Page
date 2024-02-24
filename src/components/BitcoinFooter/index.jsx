import React from "react";

import { Button, Img, Line, Text } from "components";

const BitcoinFooter = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start pl-[11px] py-[11px] w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1197px] w-full">
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-col h-[72px] md:h-auto items-center justify-start w-auto">
                <Img
                  className="h-[34px] w-[136px]"
                  src="images/img_1koinxlogo.svg"
                  alt="1koinxlogo_One"
                />
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_d6552fafa88b410cbd0bc9a5135a597e.svg"
                alt="arrowleft"
              />
              <Img
                className="h-6 w-6"
                src="images/img_phyoutubelogofill.svg"
                alt="phyoutubelogofi"
              />
              <Img
                className="h-6 w-6"
                src="images/img_mdilinkedin.svg"
                alt="mdilinkedin"
              />
              <Img
                className="h-6 w-6"
                src="images/img_riinstagramfill.svg"
                alt="riinstagramfill"
              />
              <Img
                className="h-6 w-6"
                src="images/img_icbaselinetelegram.svg"
                alt="icbaselineteleg"
              />
              <Img
                className="h-6 w-6"
                src="images/img_brandicofacebookrect.svg"
                alt="brandicofaceboo"
              />
              <Img
                className="h-6 w-6"
                src="images/img_faangellist.svg"
                alt="faangellist"
              />
            </div>
          </div>
          <Line className="bg-white-A700_33 h-0.5 mt-3 w-[94%]" />
          <div className="flex md:flex-col flex-row gap-3 h-96 md:h-auto items-start justify-start mt-8 w-auto md:w-full">
            <div className="flex relative w-[45%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start my-auto pb-[72px] pt-[3px] w-[373px] sm:w-full">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtInterBold16"
                >
                  {props?.language}
                </Text>
                <ul className="flex flex-col gap-[19px] h-[116px] md:h-auto items-start justify-start md:pr-10 sm:pr-5 pr-[125.39px] py-[3px] w-auto sm:w-full">
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      {props?.individualsand}
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      {props?.taxprofessionalOne}
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      {props?.exchangesandwebOne}
                    </Text>
                  </li>
                </ul>
                <div className="flex flex-col h-36 items-center justify-end p-0.5 w-36">
                  <Img
                    className="h-[139px] md:h-auto rounded-[50%] w-[139px]"
                    src="images/img_image279.png"
                    alt="image279"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start ml-[-57.39px] pt-[3px] w-auto z-[1]">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtInterBold16"
                >
                  {props?.freetools}
                </Text>
                <ul className="flex flex-col gap-5 items-start justify-start sm:pr-5 pr-[30.41px] py-[3px] w-auto">
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      {props?.cryptopriceslivOne}
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      {props?.cryptotaxcalculOne}
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      {props?.cryptotaxsavingOne}
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      {props?.cryptoprofitcalOne}
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-sm text-white-A700"
                      size="txtInterRegular14WhiteA700"
                    >
                      {props?.cryptoconverterOne}
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      {props?.cryptostakingroOne}
                    </Text>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex relative w-[39%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start my-auto pb-9 pt-[3px] w-[287px]">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtInterBold16"
                >
                  {props?.resourcecenterOne}
                </Text>
                <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[91.39px] py-[3px] w-auto">
                  <ul className="flex flex-col gap-[19px] items-start justify-start w-auto">
                    <li>
                      <Text
                        className="text-[15px] text-white-A700"
                        size="txtInterRegular15"
                      >
                        {props?.cryptotaxguidesOne}
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-[15px] text-white-A700"
                        size="txtInterRegular15"
                      >
                        {props?.dumbwaystolose}
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-[15px] text-white-A700"
                        size="txtInterRegular15"
                      >
                        {props?.languageOne}
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-[15px] text-white-A700"
                        size="txtInterRegular15"
                      >
                        {props?.blogs}
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-[15px] text-white-A700"
                        size="txtInterRegular15"
                      >
                        {props?.cryptobuyingguiOne}
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-sm text-white-A700"
                        size="txtInterRegular14WhiteA700"
                      >
                        {props?.cryptostakingguOne}
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-sm text-white-A700"
                        size="txtInterRegular14WhiteA700"
                      >
                        {props?.cryptominingguiOne}
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-sm text-white-A700"
                        size="txtInterRegular14WhiteA700"
                      >
                        {props?.cryptopricepredOne}
                      </Text>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start ml-[-13.39px] pb-[72px] pt-[3px] w-auto z-[1]">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtInterBold16"
                >
                  {props?.helpandsupport}
                </Text>
                <ul className="flex flex-col gap-5 items-start justify-start md:pr-10 sm:pr-5 pr-[98.41px] py-[3px] w-auto">
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      {props?.productguides}
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      {props?.howtoguides}
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      {props?.templates}
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      {props?.contactus}
                    </Text>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start pb-9 pt-[3px] w-auto">
              <Text
                className="text-[17px] text-white-A700 w-auto"
                size="txtInterBold17"
              >
                {props?.company}
              </Text>
              <div className="flex flex-col items-start justify-start pr-0.5 pt-0.5 w-full">
                <ul className="flex flex-col gap-5 items-start justify-start w-auto">
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      {props?.aboutus}
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      {props?.backedby}
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      {props?.mediaandpress}
                    </Text>
                  </li>
                  <li>
                    <div className="flex flex-row gap-[11.94px] items-center justify-start">
                      <Text
                        className="text-[15px] text-white-A700 w-auto"
                        size="txtInterRegular15"
                      >
                        {props?.careers}
                      </Text>
                      <Text
                        className="bg-blue-500_7f justify-center px-2 py-0.5 rounded-sm text-[11px] text-white-A700 w-auto"
                        size="txtInterSemiBold11"
                      >
                        {props?.span}
                      </Text>
                    </div>
                  </li>
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      {props?.security}
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      {props?.refundpolicy}
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      {props?.brandassets}
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      {props?.termsofuse}
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtInterRegular15"
                    >
                      {props?.privacypolicy}
                    </Text>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-start justify-start mb-3 mt-1 w-auto md:w-full">
            <Line className="bg-white-A700_33 h-0.5 w-full" />
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between max-w-[1200px] w-full">
              <Text
                className="text-[15px] text-white-A700_95 w-auto"
                size="txtInterRegular15WhiteA70095"
              >
                {props?.allrightsreservOne}
              </Text>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[71px] rounded-[5px]"
                leftIcon={
                  <Img
                    className="h-4 mr-1 my-px"
                    src="images/img_5c01b8b7a7874df7bff60a637d58093b.svg"
                    alt="contrast"
                  />
                }
                shape="round"
                color="blue_gray_900_01"
                size="xs"
                variant="fill"
              >
                <div className="!text-white-A700_95 font-inter text-[15px] text-left">
                  {props?.lblIndia}
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BitcoinFooter.defaultProps = {
  language: "Crypto Taxes for ",
  individualsand: "Individuals and investors",
  taxprofessionalOne: "Tax Professionals and Accountants",
  exchangesandwebOne: "Exchanges and Web3 projects",
  freetools: "Free Tools",
  cryptopriceslivOne: "Crypto Prices Live",
  cryptotaxcalculOne: "Crypto Tax Calculator",
  cryptotaxsavingOne: "Crypto Tax Saving Speculator",
  cryptoprofitcalOne: "Crypto Profit Calculator",
  cryptoconverterOne: "Crypto Converter",
  cryptostakingroOne: "Crypto Staking ROI Calculator",
  resourcecenterOne: "Resource Center",
  cryptotaxguidesOne: "Crypto Tax Guides",
  dumbwaystolose: "Dumb Ways To Lose Money",
  languageOne: "Crypto Tax Savings Guide ",
  blogs: "Blogs",
  cryptobuyingguiOne: "Crypto Buying Guides",
  cryptostakingguOne: "Crypto Staking Guides",
  cryptominingguiOne: "Crypto Mining Guides",
  cryptopricepredOne: "Crypto Price Predictions",
  helpandsupport: "Help And Support",
  productguides: "Product Guides",
  howtoguides: "How To Guides",
  templates: "Templates",
  contactus: "Contact us",
  company: "Company",
  aboutus: "About Us",
  backedby: "Backed by",
  mediaandpress: "Media and Press",
  careers: "Careers",
  span: "We’re hiring",
  security: "Security",
  refundpolicy: "Refund Policy",
  brandassets: "Brand Assets",
  termsofuse: "Terms of use",
  privacypolicy: "Privacy Policy",
  allrightsreservOne: "© All rights reserved by Simplify Infotech Pvt. Ltd.",
  lblIndia: "India",
};

export default BitcoinFooter;
