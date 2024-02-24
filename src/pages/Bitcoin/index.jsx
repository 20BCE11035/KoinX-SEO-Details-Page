import React from "react";

import { registerDeviceAuth } from "service/api";

import { Button, Img, Line, List, Text } from "components";
import BitcoinFooter from "components/BitcoinFooter";
import Header from "components/Header";

const BitcoinPage = () => {
  const [register, setRegister] = React.useState();
  const [register1, setRegister1] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi1() {
    const req = {};

    registerDeviceAuth(req)
      .then((res) => {
        setRegister1(res?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi() {
    const req = {};

    registerDeviceAuth(req)
      .then((res) => {
        setRegister(res?.data);

        callApi1();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-inter gap-[17px] items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-white-A700 border-b border-gray-300 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
        </div>
        <div className="flex flex-row items-center justify-start md:ml-[0] ml-[55px] md:px-5 w-auto">
          <div className="flex flex-row gap-[9px] items-start justify-between w-3/4">
            <Text
              className="text-blue_gray-700 text-sm"
              size="txtInterRegular14"
            >
              Cryptocurrencies
            </Text>
            <Img
              className="h-2.5 mr-1 mt-0.5 w-2.5"
              src="images/img_f2e67366f4954f67be7da93f9dad4137.svg"
              alt="arrowright"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-gray-900 text-sm w-auto"
              size="txtInterMedium14"
            >
              Bitcoin
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="flex md:h-auto max-w-[1328px] mx-auto md:px-5 relative w-full">
            <div className="flex flex-col gap-5 h-[5019px] md:h-auto items-center justify-start my-auto w-auto">
              <div className="flex flex-col h-[711px] md:h-auto items-start justify-start max-w-[881px] pb-5 w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start sm:pl-5 pl-6 py-6 rounded-lg w-full">
                  <div className="flex flex-col gap-10 items-start justify-start mb-[9px] w-auto md:w-full">
                    <div className="flex flex-row gap-10 items-center justify-start max-w-[857px] w-full">
                      <div className="flex flex-col items-center justify-start w-1/5">
                        <div className="flex flex-col items-center justify-start w-auto">
                          <div className="flex flex-row items-center justify-start w-auto">
                            <div className="flex flex-col h-9 items-center justify-start w-9">
                              <Img
                                className="h-9 md:h-auto object-cover w-9"
                                src="images/img_image160.png"
                                alt="image160"
                              />
                            </div>
                            <div className="flex flex-col items-end justify-start pl-2 w-[79%]">
                              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                                <div className="flex flex-col items-center justify-start">
                                  <Text
                                    className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                                    size="txtInterSemiBold24"
                                  >
                                    Bitcoin
                                  </Text>
                                </div>
                                <Text
                                  className="text-base text-blue_gray-600 w-auto"
                                  size="txtInterSemiBold16"
                                >
                                  BTC
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="border border-blue_gray-400_01 border-solid cursor-pointer font-medium min-w-[80px] rounded-lg text-base text-center"
                        color="blue_gray_400"
                        size="sm"
                        variant="fill"
                      >
                        Rank #1
                      </Button>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                      <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-auto"
                            size="txtInterSemiBold28"
                          >
                            $46,953.04
                          </Text>
                          <Text
                            className="text-base text-gray-900_01 w-auto"
                            size="txtInterMedium16"
                          >
                            ₹ 39,42,343
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start pb-0.5 pr-0.5 w-full">
                            <div className="flex flex-col items-center justify-start w-auto">
                              <div className="flex flex-row gap-3 items-start justify-between py-[3px] w-full">
                                <Button
                                  className="cursor-pointer flex items-center justify-center mb-0.5 min-w-[84px]"
                                  leftIcon={
                                    <div className="mt-1.5 mb-[5px] mr-2 bg-teal-500">
                                      <Img
                                        src="images/img_polygon_2.svg"
                                        alt="Polygon 2"
                                      />
                                    </div>
                                  }
                                  shape="round"
                                  color="blue_gray_50_01"
                                  size="xs"
                                  variant="fill"
                                >
                                  <div className="font-medium leading-[normal] text-base text-center">
                                    2.51%
                                  </div>
                                </Button>
                                <Text
                                  className="mt-1 text-blue_gray-400 text-sm"
                                  size="txtInterMedium14Bluegray400"
                                >
                                  (24H)
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="bg-gray-300_01 h-px w-[97%]" />
                      <div className="flex flex-col items-start justify-start w-auto md:w-full">
                        <div className="flex flex-col gap-10 items-start justify-start max-w-[857px] w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between max-w-[820px] w-full">
                            <Text
                              className="text-base text-gray-900_01 w-auto"
                              size="txtInterSemiBold16Gray90001"
                            >
                              Bitcoin Price Chart (USD)
                            </Text>
                            <div className="flex sm:flex-1 flex-row items-start justify-between w-[36%] sm:w-full">
                              <Text
                                className="h-4 text-[13px] text-blue_gray-600"
                                size="txtInterMedium13"
                              >
                                1H
                              </Text>
                              <Text
                                className="text-[13px] text-blue_gray-600"
                                size="txtInterMedium13"
                              >
                                24H
                              </Text>
                              <Text
                                className="bg-blue-50 h-5 justify-center px-[9px] rounded-[10px] text-[13px] text-blue-800 w-[35px]"
                                size="txtInterMedium13Blue800"
                              >
                                7D
                              </Text>
                              <Text
                                className="mt-0.5 text-blue_gray-600 text-xs"
                                size="txtInterMedium12"
                              >
                                1M
                              </Text>
                              <Text
                                className="mt-0.5 text-blue_gray-600 text-xs"
                                size="txtInterMedium12"
                              >
                                3M
                              </Text>
                              <Text
                                className="mt-0.5 text-blue_gray-600 text-xs"
                                size="txtInterMedium12"
                              >
                                6M
                              </Text>
                              <Text
                                className="h-4 text-[13px] text-blue_gray-600"
                                size="txtInterMedium13"
                              >
                                1Y
                              </Text>
                              <Text
                                className="text-[13px] text-blue_gray-600"
                                size="txtInterMedium13"
                              >
                                ALL
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-center justify-start pr-[3px] py-[3px] w-[97%] md:w-full">
                                <div className="flex flex-col gap-1.5 justify-start w-full">
                                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
                                    <div className="flex flex-col gap-[45px] items-center justify-start">
                                      <Text
                                        className="text-[11px] text-gray-900_01 text-right"
                                        size="txtInterRegular11"
                                      >
                                        47,000
                                      </Text>
                                      <Text
                                        className="text-[11px] text-gray-900_01 text-right"
                                        size="txtInterRegular11"
                                      >
                                        46,000
                                      </Text>
                                      <Text
                                        className="text-[11px] text-gray-900_01 text-right"
                                        size="txtInterRegular11"
                                      >
                                        45,000
                                      </Text>
                                      <Text
                                        className="text-[11px] text-gray-900_01 text-right"
                                        size="txtInterRegular11"
                                      >
                                        44,000
                                      </Text>
                                      <Text
                                        className="text-[11px] text-gray-900_01 text-right"
                                        size="txtInterRegular11"
                                      >
                                        42,000
                                      </Text>
                                      <Text
                                        className="text-[11px] text-gray-900_01 text-right"
                                        size="txtInterRegular11"
                                      >
                                        42,000
                                      </Text>
                                    </div>
                                    <div className="flex flex-col md:mt-0 mt-[5px] relative w-[96%] md:w-full">
                                      <div
                                        className="bg-cover bg-no-repeat flex flex-col h-[356px] items-center justify-end m-auto pt-9 w-full"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group115.svg')",
                                        }}
                                      >
                                        <Img
                                          className="h-[318px] md:h-auto object-cover"
                                          src="images/img_group.png"
                                          alt="group"
                                        />
                                      </div>
                                      <Img
                                        className="h-2.5 mt-[-0.5px] mx-auto z-[1]"
                                        src="images/img_group_indigo_100.svg"
                                        alt="group_One"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[33px] w-[88%] md:w-full">
                                    <div className="flex flex-row items-center justify-between w-full">
                                      <Text
                                        className="text-[11px] text-center text-gray-900_01"
                                        size="txtInterRegular11"
                                      >
                                        16 Dec
                                      </Text>
                                      <Text
                                        className="text-[11px] text-center text-gray-900_01"
                                        size="txtInterRegular11"
                                      >
                                        17 Dec
                                      </Text>
                                      <Text
                                        className="text-[11px] text-center text-gray-900_01"
                                        size="txtInterRegular11"
                                      >
                                        18 Dec
                                      </Text>
                                      <Text
                                        className="text-[11px] text-center text-gray-900_01"
                                        size="txtInterRegular11"
                                      >
                                        19 Dec
                                      </Text>
                                      <Text
                                        className="text-[11px] text-center text-gray-900_01"
                                        size="txtInterRegular11"
                                      >
                                        20 Dec
                                      </Text>
                                      <Text
                                        className="text-[11px] text-center text-gray-900_01"
                                        size="txtInterRegular11"
                                      >
                                        21 Dec
                                      </Text>
                                      <Text
                                        className="text-[11px] text-center text-gray-900_01"
                                        size="txtInterRegular11"
                                      >
                                        22 Dec
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:h-[228px] h-[70px] relative w-[881px] md:w-full">
                <div className="absolute border-b border-blue_gray-100 border-solid flex flex-col md:h-auto h-max inset-[0] items-center justify-start m-auto max-w-[881px] w-full">
                  <Text
                    className="border-b-[3px] border-blue-A700 border-solid h-12 py-[13px] text-base text-blue-800 tracking-[-0.16px] w-auto"
                    size="txtInterSemiBold16Blue800"
                  >
                    Overview
                  </Text>
                </div>
                <div className="absolute flex md:flex-col flex-row gap-8 h-full inset-[0] items-center justify-center m-auto w-[77%]">
                  <List
                    className="sm:flex-col flex-row gap-8 grid grid-cols-2 w-[37%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col h-[70px] md:h-auto items-center justify-center sm:ml-[0] w-auto">
                      <Text
                        className="text-base text-gray-800 tracking-[-0.16px] w-auto"
                        size="txtInterMedium16Gray800"
                      >
                        Fundamentals
                      </Text>
                    </div>
                    <div className="flex flex-col h-[70px] md:h-auto items-center justify-center sm:ml-[0] w-auto">
                      <Text
                        className="text-base text-gray-800 tracking-[-0.16px] w-auto"
                        size="txtInterMedium16Gray800"
                      >
                        News Insights
                      </Text>
                    </div>
                  </List>
                  <div className="flex flex-col h-[70px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-gray-800 tracking-[-0.16px] w-auto"
                      size="txtInterMedium16Gray800"
                    >
                      Sentiments
                    </Text>
                  </div>
                  <div className="flex flex-col h-[70px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-gray-800 tracking-[-0.16px] w-auto"
                      size="txtInterMedium16Gray800"
                    >
                      Team
                    </Text>
                  </div>
                  <div className="flex flex-col h-[70px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-gray-800 tracking-[-0.16px] w-auto"
                      size="txtInterMedium16Gray800"
                    >
                      Technicals
                    </Text>
                  </div>
                  <div className="flex flex-col h-[70px] md:h-auto items-center justify-center w-auto">
                    <Text
                      className="text-base text-gray-800 tracking-[-0.16px] w-auto"
                      size="txtInterMedium16Gray800"
                    >
                      Tokenomics
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col relative w-full">
                <div className="flex flex-col mx-auto w-full">
                  <div className="md:h-[1322px] sm:h-[838px] h-[859px] mx-auto p-6 sm:px-5 w-[916px] md:w-full">
                    <div className="absolute bg-white-A700 h-[632px] inset-x-[0] mx-auto rounded-lg top-[0] w-[97%]"></div>
                    <div className="absolute flex flex-col h-max inset-[0] items-center justify-start m-auto w-auto">
                      <div className="flex flex-col items-center justify-start pb-[276px] w-full">
                        <div className="flex flex-col gap-6 items-start justify-start max-w-[892px] w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                              size="txtInterSemiBold24Gray900"
                            >
                              Performance
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <List
                                className="flex flex-col gap-[15px] items-start max-w-[830px] pb-[15px] w-full"
                                orientation="vertical"
                              >
                                <div className="my-0 relative w-full">
                                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly m-auto max-w-[830px] w-full">
                                    <div className="flex flex-col gap-2.5 items-start justify-start pb-[13px] w-auto">
                                      <div className="flex flex-col items-start justify-start pr-3 pt-1.5 w-full">
                                        <Text
                                          className="text-[13.78px] text-blue_gray-800 w-auto"
                                          size="txtInterRegular1378"
                                        >
                                          Today’s Low
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-start justify-start sm:pr-5 pr-[38px] w-full">
                                        <Text
                                          className="text-[15.63px] text-blue_gray-800 w-auto"
                                          size="txtInterMedium1562"
                                        >
                                          46,930.22
                                        </Text>
                                      </div>
                                    </div>
                                    <Img
                                      className="flex-1 md:flex-none h-11 sm:h-auto max-h-11 object-cover sm:w-[] md:w-[]"
                                      src="images/img_divpbar29range.png"
                                      alt="divpbar29range"
                                    />
                                    <div className="flex flex-col gap-2.5 items-start justify-start pb-[13px] w-auto">
                                      <div className="flex flex-col items-end justify-start pl-[8.2px] pt-1.5 w-full">
                                        <Text
                                          className="text-[13.56px] text-blue_gray-800 text-right w-auto"
                                          size="txtInterRegular1356"
                                        >
                                          Today’s High
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-end justify-start sm:pl-5 pl-[37.2px] w-full">
                                        <Text
                                          className="text-[15.63px] text-blue_gray-800 text-right w-auto"
                                          size="txtInterMedium1562"
                                        >
                                          49,343.83
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute bottom-[0] flex flex-col font-sfprotext gap-[7px] items-center justify-start right-[26%] w-auto">
                                    <Img
                                      className="h-2 w-3"
                                      src="images/img_divabsolute.svg"
                                      alt="divabsolute"
                                    />
                                    <Text
                                      className="text-blue_gray-800 text-sm w-auto"
                                      size="txtSFProTextRegular14"
                                    >
                                      $48,637.83
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start my-0 w-full">
                                  <div className="flex flex-col gap-2.5 items-start justify-start pb-[13px] w-auto">
                                    <div className="flex flex-col items-start justify-start sm:pr-5 pr-[29px] pt-1.5 w-full">
                                      <Text
                                        className="text-blue_gray-800 text-sm w-auto"
                                        size="txtInterRegular14Bluegray800"
                                      >
                                        52W Low
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[46px] w-full">
                                      <Text
                                        className="text-[15.63px] text-blue_gray-800 w-auto"
                                        size="txtInterMedium1562"
                                      >
                                        16,930.22
                                      </Text>
                                    </div>
                                  </div>
                                  <Img
                                    className="flex-1 md:flex-none h-11 sm:h-auto max-h-11 object-cover sm:w-[] md:w-[]"
                                    src="images/img_divpbar29range.png"
                                    alt="divpbar29range"
                                  />
                                  <div className="flex flex-col gap-2.5 items-start justify-start pb-[13px] w-auto">
                                    <div className="flex flex-col items-end justify-start sm:pl-5 pl-[25.2px] pt-1.5 w-full">
                                      <Text
                                        className="text-[13.78px] text-blue_gray-800 text-right w-auto"
                                        size="txtInterRegular1378"
                                      >
                                        52W High
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-end justify-start sm:pl-5 pl-[37.2px] w-full">
                                      <Text
                                        className="text-[15.63px] text-blue_gray-800 text-right w-auto"
                                        size="txtInterMedium1562"
                                      >
                                        49,743.83
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </List>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                            <div className="flex flex-row gap-[0.04px] items-center justify-start md:pr-10 sm:pr-5 pr-[526.96px] w-[523px] sm:w-full">
                              <div className="flex flex-col items-start justify-start w-auto">
                                <Text
                                  className="text-[18.91px] text-blue_gray-800 w-auto"
                                  size="txtInterSemiBold1891"
                                >
                                  Fundamentals
                                </Text>
                              </div>
                              <Img
                                className="h-full w-[26px]"
                                src="images/img_06e34dce122a44269109d9a9dc3cf785.svg"
                                alt="inbox"
                              />
                            </div>
                            <div className="flex md:flex-col flex-row gap-12 items-start justify-start w-auto md:w-full">
                              <div className="flex flex-col items-start justify-start w-[383px] sm:w-full">
                                <List
                                  className="flex flex-col gap-px pt-[54px] w-[90%]"
                                  orientation="vertical"
                                >
                                  <div className="border-b border-blue_gray-100 border-solid flex md:h-auto relative w-[344px]">
                                    <div className="border border-gray-300_02 border-solid flex flex-col items-start justify-end my-auto pb-[13.02px] md:pr-10 sm:pr-5 pr-[72.88px] pt-[12.5px] w-[188px]">
                                      <Text
                                        className="text-blue_gray-400 text-sm w-auto"
                                        size="txtInterMedium14Bluegray400"
                                      >
                                        24h Low / 24h High
                                      </Text>
                                    </div>
                                    <Text
                                      className="border border-gray-300_02 border-solid ml-[-53.47px] my-auto sm:pl-5 pl-[35px] pr-[11px] py-3.5 text-[13px] text-gray-900_02 text-right w-auto z-[1]"
                                      size="txtInterMedium13Gray90002"
                                    >
                                      $16,382.07 / $16,874.12
                                    </Text>
                                  </div>
                                  <div className="border-b border-blue_gray-100 border-solid flex flex-row h-[54px] md:h-auto items-center justify-between pb-[12.5px] pr-[12.08px] pt-3 w-[343px]">
                                    <Text
                                      className="text-blue_gray-400 text-sm w-auto"
                                      size="txtInterMedium14Bluegray400"
                                    >
                                      Bitcoin Price
                                    </Text>
                                    <Text
                                      className="text-[13px] text-gray-900_02 text-right w-auto"
                                      size="txtInterMedium13Gray90002"
                                    >
                                      $16,815.46
                                    </Text>
                                  </div>
                                  <div className="border-b border-blue_gray-100 border-solid flex md:h-auto relative w-[344px]">
                                    <div className="flex flex-col items-start justify-end my-auto pb-[13.02px] md:pr-10 sm:pr-5 pr-[86.88px] pt-[12.5px] w-[188px]">
                                      <Text
                                        className="text-blue_gray-400 text-sm w-auto"
                                        size="txtInterMedium14Bluegray400"
                                      >
                                        7d Low / 7d High
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-end justify-start ml-[-53.47px] my-auto pb-[13.02px] md:pl-10 sm:pl-5 pl-[50.64px] pr-[11.83px] pt-[12.5px] w-auto z-[1]">
                                      <Text
                                        className="text-[13px] text-gray-900_02 text-right w-auto"
                                        size="txtInterMedium13Gray90002"
                                      >
                                        $16,382.07 / $16,874.12
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="border-b border-blue_gray-100 border-solid flex md:h-auto relative w-[344px]">
                                    <div className="flex flex-col items-start justify-end my-auto pb-[13.02px] md:pr-10 sm:pr-5 pr-[87.88px] pt-[12.5px] w-[188px]">
                                      <Text
                                        className="text-blue_gray-400 text-sm w-auto"
                                        size="txtInterMedium14Bluegray400"
                                      >
                                        Trading Volume
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-end justify-start ml-[-60.47px] my-auto pb-[13.02px] md:pl-10 sm:pl-5 pl-[88.36px] pr-[12.11px] pt-[12.5px] w-auto z-[1]">
                                      <Text
                                        className="text-gray-900_02 text-right text-sm w-auto"
                                        size="txtInterMedium14Gray90002"
                                      >
                                        $23,249,202,782
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="border-b border-blue_gray-100 border-solid flex md:h-auto relative w-[344px]">
                                    <div className="flex flex-col items-start justify-end my-auto pb-[13.02px] md:pr-10 sm:pr-5 pr-[78.88px] pt-[12.5px] w-[188px]">
                                      <Text
                                        className="text-blue_gray-400 text-sm w-auto"
                                        size="txtInterMedium14Bluegray400"
                                      >
                                        Market Cap Rank
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-end justify-start ml-[-48.47px] my-auto pb-[13.02px] md:pl-10 sm:pl-5 pl-[176.89px] pr-[12.58px] pt-[12.5px] w-auto z-[1]">
                                      <Text
                                        className="text-[13px] text-gray-900_02 text-right"
                                        size="txtInterMedium13Gray90002"
                                      >
                                        #1
                                      </Text>
                                    </div>
                                  </div>
                                </List>
                              </div>
                              <div className="flex flex-col items-start justify-start w-[389px] sm:w-full">
                                <List
                                  className="flex flex-col gap-px items-center w-full"
                                  orientation="vertical"
                                >
                                  <div className="border-b border-blue_gray-100 border-solid flex md:h-auto relative w-[389px] sm:w-full">
                                    <div className="flex flex-col items-start justify-end my-auto md:pr-10 sm:pr-5 pr-[113.88px] py-[12.5px] w-[188px]">
                                      <Text
                                        className="text-blue_gray-400 text-sm w-auto"
                                        size="txtInterMedium14Bluegray400"
                                      >
                                        Market Cap
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-end justify-start ml-[-15.47px] my-auto md:pl-10 sm:pl-5 pl-[80.58px] pr-[11.89px] py-[12.5px] w-auto z-[1]">
                                      <Text
                                        className="text-gray-900_02 text-right text-sm w-auto"
                                        size="txtInterMedium14Gray90002"
                                      >
                                        $323,507,290,047
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="border-b border-blue_gray-100 border-solid flex md:h-auto relative w-[389px] sm:w-full">
                                    <div className="flex flex-col items-start justify-end my-auto pb-[13.02px] sm:pr-5 pr-[39.88px] pt-[12.5px] w-[188px]">
                                      <Text
                                        className="text-blue_gray-400 text-sm w-auto"
                                        size="txtInterMedium14Bluegray400"
                                      >
                                        Market Cap Dominance
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-end justify-start ml-[-10.47px] my-auto pb-[13.02px] md:pl-10 sm:pl-5 pl-[139.19px] pr-[12.28px] pt-[12.5px] w-auto z-[1]">
                                      <Text
                                        className="text-gray-900_02 text-right text-sm w-auto"
                                        size="txtInterMedium14Gray90002"
                                      >
                                        38.343%
                                      </Text>
                                    </div>
                                  </div>
                                </List>
                                <div className="flex flex-col relative w-full">
                                  <div className="flex flex-col mx-auto w-full">
                                    <div className="border-b border-blue_gray-100 border-solid flex md:h-auto mx-auto w-[389px] sm:w-full">
                                      <div className="flex flex-col items-start justify-end my-auto pb-[13.02px] md:pr-10 sm:pr-5 pr-[62.88px] pt-[12.5px] w-[188px]">
                                        <Text
                                          className="text-blue_gray-400 text-sm w-auto"
                                          size="txtInterMedium14Bluegray400"
                                        >
                                          Volume / Market Cap
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-end justify-start ml-[-5.47px] my-auto pb-[13.02px] md:pl-10 sm:pl-5 pl-[152.64px] pr-[11.83px] pt-[12.5px] w-auto z-[1]">
                                        <Text
                                          className="text-[13px] text-gray-900_02 text-right w-auto"
                                          size="txtInterMedium13Gray90002"
                                        >
                                          0.0718
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="md:h-[60px] h-[61px] mt-[-3.5px] mx-auto w-[389px] sm:w-full z-[1]">
                                      <div className="md:h-[54px] h-[61px] m-auto w-full">
                                        <div className="absolute border-b border-blue_gray-100 border-solid h-[54px] inset-[0] m-auto w-full"></div>
                                        <div className="absolute flex flex-col md:h-auto h-full inset-y-[0] items-center justify-end left-[0] my-auto md:pr-10 sm:pr-5 pr-[107.88px] py-[12.5px] w-[188px]">
                                          <Text
                                            className="text-blue_gray-400 text-sm w-auto"
                                            size="txtInterMedium14Bluegray400"
                                          >
                                            All-Time High
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="absolute flex flex-col md:h-auto h-full inset-y-[0] items-center justify-start my-auto md:pl-10 sm:pl-5 pl-[54.16px] pr-3 py-[14.5px] right-[0] w-auto">
                                        <div className="flex flex-col gap-1 items-end justify-start w-auto">
                                          <Text
                                            className="text-gray-900_02 text-right text-sm w-[127px]"
                                            size="txtRobotoMedium14"
                                          >
                                            <span className="text-gray-900_02 font-inter font-medium">
                                              $69,044.77{" "}
                                            </span>
                                            <span className="text-red-500 font-inter font-medium">
                                              -75.6%
                                            </span>
                                          </Text>
                                          <Text
                                            className="text-[11.2px] text-gray-900_02 text-right w-auto"
                                            size="txtInterRegular112"
                                          >
                                            Nov 10, 2021 (about 1 year)
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="md:h-14 h-[61px] mt-[-7px] mx-auto w-[389px] sm:w-full z-[1]">
                                    <div className="md:h-[54px] h-[61px] m-auto w-full">
                                      <div className="absolute border-b border-blue_gray-100 border-solid h-[54px] inset-[0] m-auto w-full"></div>
                                      <div className="absolute flex flex-col md:h-auto h-full inset-y-[0] items-center justify-start left-[0] my-auto md:pr-10 sm:pr-5 pr-[107.88px] py-[12.5px] w-[188px]">
                                        <Text
                                          className="text-blue_gray-400 text-sm w-auto"
                                          size="txtInterMedium14Bluegray400"
                                        >
                                          All-Time Low
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="absolute flex flex-col md:h-auto h-full inset-y-[0] items-center justify-start my-auto md:pl-10 sm:pl-5 pl-[54.16px] pr-3 py-[14.5px] right-[0] w-auto">
                                      <div className="flex flex-col gap-1 items-end justify-start w-auto">
                                        <Text
                                          className="text-gray-900_02 text-right text-sm w-[110px]"
                                          size="txtRobotoMedium14"
                                        >
                                          <span className="text-gray-900_02 font-inter font-medium">
                                            $67.81{" "}
                                          </span>
                                          <span className="text-teal-A700 font-inter font-medium">
                                            24729.1%
                                          </span>
                                        </Text>
                                        <Text
                                          className="text-[11.2px] text-gray-900_02 text-right w-auto"
                                          size="txtInterRegular112"
                                        >
                                          Jul 06, 2013 (over 9 years)
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sm:h-[1020px] h-[1305px] md:h-[1332px] mt-[-207px] mx-auto p-6 sm:px-5 w-[881px] md:w-full z-[1]">
                    <div className="absolute bg-white-A700 h-[1198px] inset-x-[0] mx-auto rounded-lg top-[0] w-full"></div>
                    <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto pb-[156px] w-[95%] md:w-full">
                      <div className="flex flex-col gap-[33px] items-start justify-start w-auto md:w-full">
                        <div className="flex flex-col gap-[17px] items-start justify-start w-auto md:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                              size="txtInterSemiBold24Gray900"
                            >
                              Sentiment
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[0.04px] items-center justify-start max-w-[710px] md:pr-10 sm:pr-5 pr-[526.96px] w-full">
                            <div className="flex flex-col items-start justify-start w-auto">
                              <Text
                                className="text-[18.91px] text-blue_gray-800 w-auto"
                                size="txtInterSemiBold1891"
                              >
                                Key Events
                              </Text>
                            </div>
                            <Img
                              className="h-full w-[26px]"
                              src="images/img_82b71778ad8941c59463f2bce4e4d67d.svg"
                              alt="inbox_One"
                            />
                          </div>
                          <div className="flex md:flex-col flex-row font-sfprotext gap-3.5 items-start justify-start w-auto md:w-full">
                            <div className="bg-blue-50_01 border border-blue-50_01 border-solid flex flex-col h-[204px] md:h-auto items-start justify-start pb-[38px] pt-[18px] px-[18px] rounded-[12px] w-[456px] sm:w-full">
                              <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-full">
                                <Img
                                  className="h-[147px] w-11"
                                  src="images/img_aside.svg"
                                  alt="aside"
                                />
                                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex flex-col items-start justify-start sm:pr-5 pr-[21px] w-auto">
                                      <Text
                                        className="leading-[20.00px] max-w-[347px] md:max-w-full text-gray-900_03 text-sm"
                                        size="txtSFProTextMedium14"
                                      >
                                        Lorem ipsum dolor sit amet consectetur.
                                        Dui vel quis dignissim mattis enim
                                        tincidunt.
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start pr-[3px] w-auto">
                                    <Text
                                      className="leading-[20.00px] max-w-[365px] md:max-w-full text-blue_gray-700 text-sm"
                                      size="txtSFProTextRegular14Bluegray700"
                                    >
                                      Lorem ipsum dolor sit amet consectetur. Ac
                                      phasellus risus est faucibus metus quis.
                                      Amet sapien quam viverra adipiscing
                                      condimentum. Ac consectetur et pretium in
                                      a bibendum in. Sed vitae sit nisi viverra
                                      natoque lacinia libero enim.
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-blue_gray-50_02 border border-blue-50_01 border-solid flex flex-col h-[204px] md:h-auto items-start justify-start pb-[38px] pt-[18px] px-[18px] rounded-[12px] w-[361px]">
                              <div className="flex flex-row gap-2 items-start justify-end w-full">
                                <Img
                                  className="h-11 rounded-[50%] w-11"
                                  src="images/img_c9ceffffc5f04d958c402ef52007b737.svg"
                                  alt="frame1116601921"
                                />
                                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex flex-col items-start justify-start sm:pr-5 pr-[21px] w-auto">
                                      <Text
                                        className="leading-[20.00px] max-w-[291px] md:max-w-full text-gray-900_03 text-sm"
                                        size="txtSFProTextMedium14"
                                      >
                                        Lorem ipsum dolor sit amet consectetur.
                                        Dui vel quis dignissim mattis enim
                                        tincidunt.
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="pr-[3px] relative w-[291px]">
                                    <Text
                                      className="leading-[20.00px] m-auto text-blue_gray-700 text-sm"
                                      size="txtSFProTextRegular14Bluegray700"
                                    >
                                      <>
                                        Lorem ipsum dolor sit amet consectetur.
                                        Ac phasellus risus est faucibus metus
                                        quis. Amet sapien quam viverra
                                        adipiscing condimentum. Ac consectetur
                                        et pretium in a bibendum in. Sed vitae
                                        sit nisi viverra <br />
                                        in a adipisinc metus quis del
                                      </>
                                    </Text>
                                    <Img
                                      className="absolute h-[60px] right-[0] top-[7%] w-[60px]"
                                      src="images/img_644ad9ea85f24e9c8b8aa2fe254ea723.svg"
                                      alt="clock"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[21px] items-center justify-start pb-[22px] w-[86%] md:w-full">
                          <div className="flex flex-row gap-[0.04px] items-center justify-start max-w-[710px] md:pr-10 sm:pr-5 pr-[526.96px] w-full">
                            <div className="flex flex-col items-start justify-start w-auto">
                              <Text
                                className="text-[18.91px] text-blue_gray-800 w-auto"
                                size="txtInterSemiBold1891"
                              >
                                Analyst Estimates
                              </Text>
                            </div>
                            <Img
                              className="h-full w-[26px]"
                              src="images/img_82b71778ad8941c59463f2bce4e4d67d.svg"
                              alt="inbox_Two"
                            />
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[710px] w-full">
                            <div className="flex flex-col h-[120px] md:h-auto items-start justify-start pr-10 sm:pr-5 w-[156px]">
                              <div className="bg-blue_gray-50_02 flex flex-col h-[120px] md:h-auto items-center justify-center pl-[29.78px] pr-[27.48px] sm:px-5 py-[32.25px] rounded-[58px] w-full">
                                <div className="flex flex-row gap-0.5 h-[55px] md:h-auto items-center justify-center w-[60px]">
                                  <div className="flex flex-col items-start justify-start pb-[3px] pt-[1.5px] w-auto">
                                    <Text
                                      className="sm:text-[32.41px] md:text-[34.41px] text-[36.41px] text-teal-A700"
                                      size="txtInterMedium3641"
                                    >
                                      76
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-auto">
                                    <Text
                                      className="text-base text-teal-A700 w-auto"
                                      size="txtInterMedium16TealA700"
                                    >
                                      %
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <List
                              className="flex flex-1 flex-col items-center w-full"
                              orientation="vertical"
                            >
                              <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 pl-2 md:pr-10 sm:pr-5 pr-[101.16px] py-2 w-full">
                                <div className="flex flex-col items-start justify-start sm:pr-5 pr-[26.71px] w-[53px]">
                                  <Text
                                    className="text-[15px] text-blue_gray-400_02 w-auto"
                                    size="txtInterMedium15"
                                  >
                                    Buy
                                  </Text>
                                </div>
                                <div className="bg-teal-500_01 h-2 rounded-sm w-[79%]"></div>
                                <div className="flex flex-col items-start justify-start pl-2.5 w-[41px]">
                                  <Text
                                    className="text-[14.25px] text-blue_gray-400_02 w-auto"
                                    size="txtInterMedium1425"
                                  >
                                    76%
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-1 flex-row items-center justify-start my-0 pl-2 md:pr-10 sm:pr-5 pr-[383.85px] py-2 w-full">
                                <div className="flex flex-col items-start justify-start sm:pr-5 pr-[27.71px] w-[53px]">
                                  <Text
                                    className="text-[15.13px] text-blue_gray-400_02 w-auto"
                                    size="txtInterMedium1512"
                                  >
                                    Hold
                                  </Text>
                                </div>
                                <div className="bg-gray-400 h-2 rounded-sm w-[21%]"></div>
                                <div className="flex flex-col items-start justify-start pl-2.5 w-[41px]">
                                  <Text
                                    className="text-[15.63px] text-blue_gray-400_02 w-auto"
                                    size="txtInterMedium1562Bluegray40002"
                                  >
                                    8%
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-1 flex-row items-center justify-start my-0 pl-2 md:pr-10 sm:pr-5 pr-[383.85px] py-2 w-full">
                                <div className="flex flex-col items-start justify-start sm:pr-5 pr-[27.71px] w-[53px]">
                                  <Text
                                    className="text-[15.13px] text-blue_gray-400_02 w-auto"
                                    size="txtInterMedium1512"
                                  >
                                    Sell
                                  </Text>
                                </div>
                                <div className="bg-red-500 h-2 rounded-sm w-[41%]"></div>
                                <div className="flex flex-col items-start justify-start pl-2.5 w-[41px]">
                                  <Text
                                    className="text-[15.63px] text-blue_gray-400_02 w-auto"
                                    size="txtInterMedium1562Bluegray40002"
                                  >
                                    16%
                                  </Text>
                                </div>
                              </div>
                            </List>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-100_99 h-px w-full" />
                        <div className="flex flex-col gap-[33px] items-start justify-start w-auto md:w-full">
                          <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                            <div className="flex flex-row gap-[0.04px] items-center justify-start max-w-[710px] md:pr-10 sm:pr-5 pr-[526.96px] w-full">
                              <div className="flex flex-col items-start justify-start w-auto">
                                <Text
                                  className="text-[18.91px] text-blue_gray-800 w-auto"
                                  size="txtInterSemiBold1891"
                                >
                                  Rating
                                </Text>
                              </div>
                              <Img
                                className="h-full w-[26px]"
                                src="images/img_82b71778ad8941c59463f2bce4e4d67d.svg"
                                alt="inbox_Three"
                              />
                            </div>
                            <div className="flex sm:flex-col flex-row gap-[17px] items-center justify-between w-full">
                              <div className="flex flex-col items-center justify-start w-auto">
                                <Text
                                  className="text-[18.91px] text-gray-900 w-auto"
                                  size="txtInterSemiBold1891Gray900"
                                >
                                  <span className="text-gray-900 font-inter text-left font-semibold">
                                    Rating Breakdown: 79.83
                                  </span>
                                  <span className="text-blue_gray-400_03 font-inter text-left font-semibold">
                                    /100
                                  </span>
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[17px] items-center justify-start w-auto">
                                <Text
                                  className="sm:text-[32.41px] md:text-[34.41px] text-[36.41px] text-teal-A700 w-auto"
                                  size="txtInterMedium3641"
                                >
                                  AAA
                                </Text>
                                <Text
                                  className="text-[18.91px] text-gray-900 w-auto"
                                  size="txtInterSemiBold1891Gray900"
                                >
                                  Stable
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start sm:px-5 px-9 w-full">
                            <div className="flex flex-col gap-2 items-center justify-start w-full">
                              <div className="flex flex-col gap-1.5 items-center justify-start w-auto">
                                <Text
                                  className="text-base text-gray-900 w-auto"
                                  size="txtInterRegular16"
                                >
                                  Underlying Technology
                                </Text>
                                <Text
                                  className="text-gray-900 text-lg w-auto"
                                  size="txtInterSemiBold18"
                                >
                                  95.32%
                                </Text>
                              </div>
                              <div className="font-ibmplexsans md:h-[286px] h-[383px] relative w-full">
                                <div className="absolute md:h-[286px] h-[358px] inset-x-[0] mx-auto top-[0] w-[358px]">
                                  <Img
                                    className="h-[245px] ml-auto mr-[26px] mt-[37px]"
                                    src="images/img_star1.svg"
                                    alt="starOne"
                                  />
                                  <div className="absolute md:h-[286px] h-[358px] inset-[0] justify-center m-auto outline outline-[0.5px] outline-blue_gray-400_75 pb-[9px] px-[9px] rounded-[50%] w-[358px]">
                                    <div className="absolute md:h-[286px] h-[325px] right-[3%] top-[0] w-[88%]">
                                      <div className="absolute md:h-[286px] h-[322px] inset-[0] justify-center m-auto w-full">
                                        <div className="absolute md:h-[286px] h-[322px] inset-y-[0] left-[0] my-auto w-[92%]">
                                          <div className="absolute bottom-[0] h-[286px] inset-x-[0] mx-auto w-[286px]">
                                            <div className="absolute h-[71px] inset-[0] justify-center m-auto outline outline-[0.5px] outline-black-900_63 rounded-[35px] w-[71px]"></div>
                                            <div className="absolute h-[143px] inset-[0] justify-center m-auto outline outline-[0.5px] outline-black-900_63 rounded-[71px] w-[143px]"></div>
                                            <div className="absolute h-[214px] inset-[0] justify-center m-auto outline outline-[0.5px] outline-black-900_63 rounded-[50%] w-[214px]"></div>
                                            <div className="absolute h-[286px] inset-[0] justify-center m-auto outline outline-[0.5px] outline-black-900_63 rounded-[50%] w-[286px]"></div>
                                          </div>
                                          <Line className="absolute bg-black-900_63 h-[179px] inset-x-[0] mx-auto top-[0] w-px" />
                                        </div>
                                        <div className="absolute h-[55px] right-[0] top-[38%] w-[54%]">
                                          <Line className="bg-black-900_63 h-px m-auto rotate-[-162deg] w-full" />
                                          <div className="absolute flex flex-row items-start justify-between right-[7%] top-[0] w-[78%]">
                                            <Text
                                              className="mt-[9px] text-[14.54px] text-gray-900_99"
                                              size="txtIBMPlexSansRegular1454"
                                            >
                                              20
                                            </Text>
                                            <div className="bg-amber-700 h-3 mb-4 outline outline-[2px] outline-white-A700 rounded-[50%] w-3"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="absolute bottom-[1%] h-36 right-[21%] w-[33%]">
                                        <Line className="bg-black-900_63 h-px m-auto rotate-[125deg] w-full" />
                                        <div className="absolute bg-amber-700 bottom-[23%] h-3 outline outline-[2px] outline-white-A700 right-[21%] rounded-[50%] w-3"></div>
                                      </div>
                                      <div className="absolute bottom-[0] h-[146px] left-[12%] w-[35%]">
                                        <Line className="bg-black-900_63 h-px m-auto rotate-[54deg] w-full" />
                                        <div className="absolute bg-amber-700 bottom-[38%] h-3 left-[36%] outline outline-[2px] outline-white-A700 rounded-[50%] w-3"></div>
                                      </div>
                                    </div>
                                    <div className="absolute h-[58px] left-[3%] top-[34%] w-[49%]">
                                      <Line className="bg-black-900_63 h-px m-auto rotate-[-19deg] w-full" />
                                      <div className="absolute bg-amber-700 h-3 left-[26%] outline outline-[2px] outline-white-A700 rounded-[50%] top-[16%] w-3"></div>
                                    </div>
                                    <div className="absolute flex flex-row items-start justify-center right-[9%] top-1/4 w-1/4">
                                      <Text
                                        className="mt-[27px] text-[14.54px] text-gray-900_99"
                                        size="txtIBMPlexSansRegular1454"
                                      >
                                        40
                                      </Text>
                                      <Text
                                        className="mb-3 ml-3 mt-[15px] text-[14.54px] text-gray-900_99"
                                        size="txtIBMPlexSansRegular1454"
                                      >
                                        60
                                      </Text>
                                      <Text
                                        className="mb-[27px] ml-[19px] text-[14.54px] text-gray-900_99"
                                        size="txtIBMPlexSansRegular1454"
                                      >
                                        80
                                      </Text>
                                    </div>
                                    <div className="absolute bg-amber-700 h-3 inset-x-[0] mx-auto outline outline-[2px] outline-white-A700 rounded-[50%] top-[8%] w-3"></div>
                                  </div>
                                </div>
                                <Text
                                  className="absolute right-[21%] text-[14.54px] text-gray-900_99 top-[18%]"
                                  size="txtIBMPlexSansRegular1454"
                                >
                                  100
                                </Text>
                                <div className="absolute flex flex-col font-inter gap-1.5 items-center justify-start left-[0] top-[16%] w-auto">
                                  <Text
                                    className="text-base text-gray-900 w-auto"
                                    size="txtInterRegular16"
                                  >
                                    Roadmap & Progress
                                  </Text>
                                  <Text
                                    className="text-gray-900 text-lg w-auto"
                                    size="txtInterSemiBold18"
                                  >
                                    67.89%
                                  </Text>
                                </div>
                                <div className="absolute flex flex-col font-inter gap-1.5 items-center justify-start right-[0] top-[26%] w-auto">
                                  <Text
                                    className="text-base text-gray-900 w-auto"
                                    size="txtInterRegular16"
                                  >
                                    Token Performance
                                  </Text>
                                  <Text
                                    className="text-gray-900 text-lg w-auto"
                                    size="txtInterSemiBold18"
                                  >
                                    95.32%
                                  </Text>
                                </div>
                                <div className="absolute bottom-[0] flex flex-col font-inter gap-1.5 items-center justify-start right-[7%] w-auto">
                                  <Text
                                    className="text-base text-gray-900 w-auto"
                                    size="txtInterRegular16"
                                  >
                                    Ecosystem Development
                                  </Text>
                                  <Text
                                    className="text-gray-900 text-lg w-auto"
                                    size="txtInterSemiBold18"
                                  >
                                    53.32%
                                  </Text>
                                </div>
                                <div className="absolute bottom-[0] flex flex-col font-inter gap-1.5 items-center justify-start left-[2%] w-auto">
                                  <Text
                                    className="text-base text-gray-900 w-auto"
                                    size="txtInterRegular16"
                                  >
                                    Team, Partners & Investors
                                  </Text>
                                  <Text
                                    className="text-gray-900 text-lg w-auto"
                                    size="txtInterSemiBold18"
                                  >
                                    24.78%
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[1007px] md:h-[1047px] sm:h-[908px] mt-[-87px] mx-auto p-6 sm:px-5 w-[916px] md:w-full z-[1]">
                  <div className="absolute bg-white-A700 h-[995px] inset-[0] m-auto rounded-lg w-[97%]"></div>
                  <div className="absolute flex flex-col md:h-auto h-max inset-[0] items-center justify-start m-auto w-auto">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                          size="txtInterSemiBold24Gray900"
                        >
                          About Bitcoin
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[15px] items-start justify-start w-auto md:w-full">
                        <div className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full">
                          <Text
                            className="text-gray-900_01 text-lg w-auto"
                            size="txtInterBold18"
                          >
                            What is Bitcoin?
                          </Text>
                          <Text
                            className="leading-[160.00%] max-w-[830px] md:max-w-full text-base text-gray-800"
                            size="txtInterMedium16Gray800"
                          >
                            Bitcoin’s price today is US$16,951.82, with a
                            24-hour trading volume of $19.14 B. BTC is +0.36% in
                            the last 24 hours. It is currently -7.70% from its
                            7-day all-time high of $18,366.66, and 3.40% from
                            its 7-day all-time low of $16,394.75. BTC has a
                            circulating supply of 19.24 M BTC and a max supply
                            of 21 M BTC.
                          </Text>
                        </div>
                        <Line className="bg-blue_gray-100_99 h-px w-full" />
                        <div className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full">
                          <Text
                            className="text-gray-900_01 text-lg w-auto"
                            size="txtInterBold18"
                          >
                            Lorem ipsum dolor sit amet
                          </Text>
                          <Text
                            className="leading-[160.00%] text-base text-gray-800"
                            size="txtInterMedium16Gray800"
                          >
                            <>
                              Lorem ipsum dolor sit amet consectetur. Aliquam
                              placerat sit lobortis tristique pharetra. Diam id
                              et lectus urna et tellus aliquam dictum at.
                              Viverra diam suspendisse enim facilisi diam ut
                              sed. Quam scelerisque fermentum sapien morbi
                              sodales odio sed rhoncus. Ultricies urna volutpat
                              pendisse enim facilisi diam ut sed. Quam
                              scelerisque fermentum sapien morbi sodales odio
                              sed rhoncus. <br />
                              <br />
                              Diam praesent massa dapibus magna aliquam a
                              dictumst volutpat. Egestas vitae pellentesque
                              auctor amet. Nunc sagittis libero adipiscing
                              cursus felis pellentesque interdum. Odio cursus
                              phasellus velit in senectus enim dui. Turpis
                              tristique placerat interdum sed volutpat. Id
                              imperdiet magna eget eros donec cursus nunc.
                              Mauris faucibus diam mi nunc praesent massa turpis
                              a. Integer dignissim augue viverra nulla et quis
                              lobortis phasellus. Integer pellentesque enim
                              convallis ultricies at.
                              <br />
                              <br />
                              Fermentum hendrerit imperdiet nulla viverra
                              faucibus. Sit aliquam massa vel convallis duis ac.
                              Mi adipiscing semper scelerisque porttitor
                              pulvinar nunc risus. Fermentum potenti iaculis
                              lacinia congue ipsum fames amet dui. Purus
                              ultrices tincidunt volutpat in eget. Ullamcorper
                              dui
                            </>
                          </Text>
                        </div>
                        <Line className="bg-blue_gray-100_99 h-px w-full" />
                        <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                          <div className="flex flex-col h-[47px] md:h-auto items-start justify-start w-[388px] sm:w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-[285px]"
                              size="txtInterSemiBold24Gray900"
                            >
                              Already Holding Bitcoin?
                            </Text>
                          </div>
                          <List
                            className="sm:flex-col flex-row gap-4 grid md:grid-cols-1 grid-cols-2 justify-start max-w-[822px] w-full"
                            orientation="horizontal"
                          >
                            <div className="h-[151px] pr-[15px] relative w-full">
                              <Img
                                className="h-[151px] m-auto object-cover"
                                src="images/img_group27361.png"
                                alt="group27361"
                              />
                              <div className="absolute flex flex-row gap-[27px] h-max inset-y-[0] items-center justify-between left-[3%] my-auto w-[87%]">
                                <Img
                                  className="h-32 md:h-auto object-cover rounded-lg w-32"
                                  src="images/img_rectangle11947.png"
                                  alt="rectangle11947"
                                />
                                <div className="flex flex-col gap-4 items-start justify-center w-auto">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <div className="flex flex-col items-start justify-start w-auto">
                                        <Text
                                          className="leading-[140.00%] max-w-[195px] md:max-w-full text-white-A700 text-xl"
                                          size="txtInterBold20"
                                        >
                                          Calculate your Profits
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-[68%] md:w-full">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div className="flex flex-col items-center justify-start w-full">
                                        <Button
                                          className="cursor-pointer flex h-8 items-center justify-center rounded-lg w-[132px]"
                                          rightIcon={
                                            <Img
                                              className="h-5 ml-1.5"
                                              src="images/img_2592cb8a348d45b9b4d07d348268fc72.svg"
                                              alt="arrow_left"
                                            />
                                          }
                                          color="white_A700"
                                          size="xs"
                                          variant="fill"
                                        >
                                          <div className="font-semibold text-left text-sm">
                                            Check Now
                                          </div>
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-[151px] pr-[15px] relative w-full">
                              <Img
                                className="h-[151px] m-auto object-cover"
                                src="images/img_group27361.png"
                                alt="group27361"
                              />
                              <div className="absolute flex flex-row gap-[27px] h-max inset-y-[0] items-center justify-between left-[3%] my-auto w-[87%]">
                                <Img
                                  className="h-32 md:h-auto object-cover rounded-lg w-32"
                                  src="images/img_rectangle11947_128x128.png"
                                  alt="rectangle11947"
                                />
                                <div className="flex flex-col gap-4 items-start justify-center w-auto">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <div className="flex flex-col items-start justify-start w-auto">
                                        <Text
                                          className="leading-[140.00%] max-w-[195px] md:max-w-full text-white-A700 text-xl"
                                          size="txtInterBold20"
                                        >
                                          Calculate your tax liability
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-[68%] md:w-full">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div className="flex flex-col items-center justify-start w-full">
                                        <Button
                                          className="cursor-pointer flex h-8 items-center justify-center rounded-lg w-[132px]"
                                          rightIcon={
                                            <Img
                                              className="h-5 ml-1.5"
                                              src="images/img_2592cb8a348d45b9b4d07d348268fc72.svg"
                                              alt="arrow_left"
                                            />
                                          }
                                          color="white_A700"
                                          size="xs"
                                          variant="fill"
                                        >
                                          <div className="font-semibold text-left text-sm">
                                            Check Now
                                          </div>
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                        <Line className="bg-blue_gray-100_99 h-px w-full" />
                        <div className="flex flex-col items-start justify-start w-auto md:w-full">
                          <Text
                            className="leading-[160.00%] max-w-[830px] md:max-w-full text-base text-gray-800"
                            size="txtInterMedium16Gray800"
                          >
                            Fermentum hendrerit imperdiet nulla viverra
                            faucibus. Sit aliquam massa vel convallis duis ac.
                            Mi adipiscing semper scelerisque porttitor pulvinar
                            nunc risus. Fermentum potenti iaculis lacinia congue
                            ipsum fames amet dui. Purus ultrices tincidunt
                            volutpat in eget. Ullamcorper dui
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:h-[439px] sm:h-[488px] h-[539px] p-6 sm:px-5 relative w-[916px] md:w-full">
                <div className="absolute bg-white-A700 flex flex-col md:h-auto h-full inset-[0] items-center justify-end m-auto max-w-[881px] p-6 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start max-w-[810px] w-full">
                      <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[531px] w-full">
                        <Text
                          className="text-gray-900_04 text-xl w-auto"
                          size="txtInterSemiBold20"
                        >
                          Initial Distribution
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-6 h-[210px] md:h-auto items-center justify-start md:pr-10 sm:pr-5 pr-[354px] w-full">
                        <Img
                          className="h-[179px] w-[179px]"
                          src="images/img_frame1116601936.svg"
                          alt="frame1116601936"
                        />
                        <div className="flex flex-col items-center justify-start w-auto">
                          <div className="flex flex-col gap-4 h-[111px] md:h-auto items-start justify-center w-auto">
                            <div className="flex flex-row items-center justify-start w-auto">
                              <Img
                                className="h-full w-[21px]"
                                src="images/img_97680c95d1cc4feaa3d3c8479655017a.svg"
                                alt="close"
                              />
                              <div className="flex flex-col items-start justify-start w-auto">
                                <Text
                                  className="text-base text-gray-900_05 w-auto"
                                  size="txtInterRegular16Gray90005"
                                >
                                  Crowdsale investors: 80%
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-start md:pr-10 sm:pr-5 pr-[67.69px] w-auto">
                              <Img
                                className="h-full w-[21px]"
                                src="images/img_7c94e0503bfb4a96a5051aa0b81ca2c9.svg"
                                alt="user"
                              />
                              <div className="flex flex-col items-start justify-start w-auto">
                                <Text
                                  className="text-base text-gray-900_05 w-auto"
                                  size="txtInterRegular16Gray90005"
                                >
                                  Foundation: 20%
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[833px] md:max-w-full text-base text-gray-800"
                      size="txtInterMedium16Gray800"
                    >
                      Lorem ipsum dolor sit amet consectetur. Cras aliquet
                      tristique ornare vestibulum nunc dignissim vel consequat.
                      Leo etiam nascetur bibendum amet enim sit eget leo amet.
                      At metus orci augue fusce eleifend lectus eu fusce
                      adipiscing. Volutpat ultrices nibh sodales massa habitasse
                      urna felis augue. Gravida aliquam fermentum augue eu.
                      Imperdiet bibendum amet aliquam donec. Eget justo dui
                      metus odio rutrum. Vel ipsum eget in at curabitur sem
                      posuere facilisis vitae. Sed lorem sit mauris id eget arcu
                      ut. Vulputate ipsum aliquet odio nisi eu ac risus.
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[4%]">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                    size="txtInterSemiBold24Gray900"
                  >
                    Tokenomics
                  </Text>
                </div>
              </div>
              <div className="md:h-[1087px] sm:h-[701px] h-[776px] p-6 sm:px-5 relative w-[916px] md:w-full">
                <div className="absolute bg-white-A700 flex flex-col gap-6 md:h-auto h-full inset-[0] items-center justify-center m-auto max-w-[881px] p-6 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col items-start justify-start w-auto md:w-full">
                    <div className="flex flex-col items-start justify-start w-auto md:w-full">
                      <Text
                        className="leading-[160.00%] max-w-[830px] md:max-w-full text-base text-gray-800"
                        size="txtInterMedium16Gray800"
                      >
                        Lorem ipsum dolor sit amet consectetur. Id consequat
                        adipiscing arcu nibh. Eget mattis in mi integer sit
                        egestas. Proin tempor id pretium quam. Facilisis purus
                        convallis quam augue.
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-[23px] items-center w-[99%]"
                    orientation="vertical"
                  >
                    <div className="bg-blue-50_01 border border-light_blue-A700 border-solid flex md:flex-col flex-row gap-4 items-center justify-start max-w-[821px] p-[11.19px] rounded-[7px] w-full">
                      <div className="flex flex-col gap-[13.19px] items-center justify-start w-32">
                        <div className="bg-blue_gray-800_01 flex flex-col items-center justify-start rounded-md w-3/4 md:w-full">
                          <div className="flex flex-col items-center justify-start rounded-md w-full">
                            <Img
                              className="h-[105px] md:h-auto object-cover rounded-tl-md rounded-tr-md w-full"
                              src="images/img_image209.png"
                              alt="image209"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[4.12px] items-center justify-start w-auto">
                          <Text
                            className="text-[15px] text-center text-gray-900 w-auto"
                            size="txtInterSemiBold15"
                          >
                            John Smith
                          </Text>
                          <Text
                            className="text-blue_gray-400_03 text-center text-xs w-auto"
                            size="txtInterMedium12Bluegray40003"
                          >
                            Designation here
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[160.00%] max-w-[646px] md:max-w-full text-gray-900 text-sm"
                        size="txtInterRegular14Gray900"
                      >
                        Lorem ipsum dolor sit amet consectetur. In justo rutrum
                        sit sit fermentum ut libero hendrerit id. Tellus sit
                        ornare netus sagittis in nunc convallis mattis maecenas.
                        Tempus arcu leo sociis laoreet nec neque sed
                        pellentesque viverra. Consectetur proin amet ut id
                        facilisi quis consectetur. Tellus gravida ultricies
                        feugiat sed eu egestas dolor est ipsum. Malesuada etiam
                        mi gravida praesent interdu
                      </Text>
                    </div>
                    <div className="bg-blue-50_01 border border-light_blue-A700 border-solid flex md:flex-col flex-row gap-4 items-center justify-start max-w-[821px] p-[11.19px] rounded-[7px] w-full">
                      <div className="flex flex-col gap-[13.19px] items-center justify-start w-32">
                        <div className="bg-blue_gray-800_01 flex flex-col items-center justify-start rounded-md w-3/4 md:w-full">
                          <div className="flex flex-col items-center justify-start rounded-md w-full">
                            <Img
                              className="h-[105px] md:h-auto object-cover rounded-tl-md rounded-tr-md w-full"
                              src="images/img_image209_105x96.png"
                              alt="image209"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[4.12px] items-center justify-start w-auto">
                          <Text
                            className="text-[15px] text-center text-gray-900 w-auto"
                            size="txtInterSemiBold15"
                          >
                            Elina Williams
                          </Text>
                          <Text
                            className="text-blue_gray-400_03 text-center text-xs w-auto"
                            size="txtInterMedium12Bluegray40003"
                          >
                            Designation here
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[160.00%] max-w-[646px] md:max-w-full text-gray-900 text-sm"
                        size="txtInterRegular14Gray900"
                      >
                        Lorem ipsum dolor sit amet consectetur. In justo rutrum
                        sit sit fermentum ut libero hendrerit id. Tellus sit
                        ornare netus sagittis in nunc convallis mattis maecenas.
                        Tempus arcu leo sociis laoreet nec neque sed
                        pellentesque viverra. Consectetur proin amet ut id
                        facilisi quis consectetur. Tellus gravida ultricies
                        feugiat sed eu egestas dolor est ipsum. Malesuada etiam
                        mi gravida praesent interdu
                      </Text>
                    </div>
                    <div className="bg-blue-50_01 border border-light_blue-A700 border-solid flex md:flex-col flex-row gap-4 items-center justify-start max-w-[821px] p-[11.19px] rounded-[7px] w-full">
                      <div className="flex flex-col gap-[13.19px] items-center justify-start w-32">
                        <div className="bg-blue_gray-800_01 flex flex-col items-center justify-start rounded-md w-3/4 md:w-full">
                          <div className="flex flex-col items-center justify-start rounded-md w-full">
                            <Img
                              className="h-[104px] md:h-auto object-cover rounded-tl-md rounded-tr-md w-full"
                              src="images/img_image209_104x96.png"
                              alt="image209"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[4.12px] items-center justify-start w-auto">
                          <Text
                            className="text-[15px] text-center text-gray-900 w-auto"
                            size="txtInterSemiBold15"
                          >
                            John Smith
                          </Text>
                          <Text
                            className="text-blue_gray-400_03 text-center text-xs w-auto"
                            size="txtInterMedium12Bluegray40003"
                          >
                            Designation here
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[160.00%] max-w-[646px] md:max-w-full text-gray-900 text-sm"
                        size="txtInterRegular14Gray900"
                      >
                        Lorem ipsum dolor sit amet consectetur. In justo rutrum
                        sit sit fermentum ut libero hendrerit id. Tellus sit
                        ornare netus sagittis in nunc convallis mattis maecenas.
                        Tempus arcu leo sociis laoreet nec neque sed
                        pellentesque viverra. Consectetur proin amet ut id
                        facilisi quis consectetur. Tellus gravida ultricies
                        feugiat sed eu egestas dolor est ipsum. Malesuada etiam
                        mi gravida praesent interdu
                      </Text>
                    </div>
                  </List>
                </div>
                <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[3%]">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                    size="txtInterSemiBold24Gray900"
                  >
                    Team
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 h-[1923px] md:h-auto items-center justify-start ml-[-15px] pb-[820.52px] w-[427px] sm:w-full z-[1]">
              <div className="flex flex-col h-[515px] md:h-auto items-start justify-start rounded-[16px] w-[426px] sm:w-full">
                <div className="bg-blue-A700 flex flex-col gap-[19px] h-[515px] md:h-auto items-center justify-start px-4 py-[31px] rounded-[16px] w-[426px] sm:w-full">
                  <div className="flex flex-col gap-3.5 h-[182px] md:h-auto items-center justify-start w-auto">
                    <Text
                      className="leading-[40.00px] max-w-[268px] md:max-w-full text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                      size="txtInterBold24"
                    >
                      Get Started with KoinX for FREE
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[327px] md:max-w-full text-center text-gray-100 text-sm"
                      size="txtInterMedium14Gray100"
                    >
                      <>
                        With our range of features that you can equip for
                        free,KoinX allows you to be more educated and aware of
                        your tax reports.
                      </>
                    </Text>
                  </div>
                  <Img
                    className="h-[166px] w-[178px]"
                    src="images/img_1koinxlogo.svg"
                    alt="frame"
                  />
                  <div className="flex flex-col items-center justify-start w-[61%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Button
                          className="cursor-pointer flex h-12 items-center justify-center min-w-[237px] rounded-lg"
                          rightIcon={
                            <Img
                              className="h-5 ml-2.5"
                              src="images/img_2592cb8a348d45b9b4d07d348268fc72.svg"
                              alt="arrow_left"
                            />
                          }
                          color="white_A700"
                          size="md"
                          variant="fill"
                        >
                          <div className="font-semibold text-base text-left">
                            <>Get Started for FREE</>
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-6 items-center justify-start p-6 sm:px-5 rounded-lg w-[427px] sm:w-full">
                <div className="flex flex-col items-center justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                    size="txtInterSemiBold24Gray900"
                  >
                    Trending Coins (24h)
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <List
                    className="flex flex-col gap-5 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
                      <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                        <Button
                          className="flex h-6 items-center justify-center w-6"
                          shape="circle"
                          color="indigo_400"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            src="images/img_dc681a42cb1c4f3f8dcab562139ad7d4.svg"
                            alt="lightbulb"
                          />
                        </Button>
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtInterMedium16Gray900"
                        >
                          Ethereum(ETH)
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[84px]"
                        leftIcon={
                          <div className="mt-1.5 mb-[5px] mr-2 bg-teal-500">
                            <Img
                              src="images/img_polygon_2.svg"
                              alt="Polygon 2"
                            />
                          </div>
                        }
                        shape="round"
                        color="blue_gray_50_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium leading-[normal] text-base text-center">
                          8.21%
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
                      <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                        <div className="flex flex-col h-6 items-center justify-start w-6">
                          <Img
                            className="h-6 md:h-auto object-cover w-6"
                            src="images/img_image160.png"
                            alt="image160"
                          />
                        </div>
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtInterMedium16Gray900"
                        >
                          Bitcoin (BTC)
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[84px]"
                        leftIcon={
                          <div className="mt-1.5 mb-[5px] bg-teal-500">
                            <Img
                              src="images/img_polygon_2.svg"
                              alt="Polygon 2"
                            />
                          </div>
                        }
                        shape="round"
                        color="blue_gray_50_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium leading-[normal] text-base text-center">
                          5.26%
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
                      <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                        <div className="flex flex-col h-6 items-center justify-start w-6">
                          <Img
                            className="h-6 md:h-auto rounded-[50%] w-6"
                            src="images/img_image163.png"
                            alt="image163"
                          />
                        </div>
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtInterMedium16Gray900"
                        >
                          Polygon (MATIC)
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[84px]"
                        leftIcon={
                          <div className="mt-1.5 mb-[5px] bg-teal-500">
                            <Img
                              src="images/img_polygon_2.svg"
                              alt="Polygon 2"
                            />
                          </div>
                        }
                        shape="round"
                        color="blue_gray_50_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium leading-[normal] text-base text-center">
                          4.32%
                        </div>
                      </Button>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <footer className="flex items-center justify-center md:px-5 w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start p-9 sm:px-5 w-full">
                <Img
                  className="h-[484px] md:h-auto my-9 object-cover w-full"
                  src="images/img_image280.png"
                  alt="image280"
                />
              </div>
              <BitcoinFooter className="bg-black-900 flex flex-col h-[651px] md:h-auto items-start justify-center max-w-[1440px] md:px-10 sm:px-5 px-[116px] py-8 w-full" />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default BitcoinPage;
