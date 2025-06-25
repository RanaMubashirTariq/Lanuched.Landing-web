import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

// Token data for mapping
const tokens = [
  {
    name: "Toad",
    symbol: "$TOAD",
    mainImage: "/original-png.png",
    chainImage: "/solana.png",
  },
  {
    name: "Valu",
    symbol: "LIFE",
    mainImage: "/1745749714165-48d158fb4b73914242f6a1c11361930b-jpeg.png",
    chainImage: "/solana-1.png",
  },
  {
    name: "CowCoin",
    symbol: "COW",
    mainImage: "/1734711458548-9a933310e5c76125764f5d9ff136521c-png.png",
    chainImage: "/ic-bsc-a3213bd0-svg.svg",
    isSvgChain: true,
  },
  {
    name: "KOMA Inu",
    symbol: "KOMA",
    mainImage: "/1728231454398-f00432283d18f075f373bbdc425ec972-png.png",
    chainImage: "/ic-bsc-a3213bd0-svg.svg",
    isSvgChain: true,
  },
  {
    name: "Baby Neiro",
    symbol: "Baby",
    mainImage: "/1728995202100-867bfa0729040fbfaa700da0e73b4f3f-png.png",
    chainImage: "/ic-bsc-a3213bd0-svg.svg",
    isSvgChain: true,
  },
  {
    name: "Reploy",
    symbol: "RAI",
    mainImage: "/1729786687597-fe8569ba511de57b1cd4f7925a74de81-png.png",
    chainImage: "/ic-bsc-a3213bd0-svg.svg",
    isSvgChain: true,
  },
  {
    name: "Eagle AI",
    symbol: "EAI",
    mainImage: "/1716209527383-cf565b97cdd0b00b3f1b72f6283b2f20-png.png",
    chainImage: "/base-mainnet.png",
  },
  {
    name: "Eagle AI",
    symbol: "EAI",
    mainImage: "/1716209527383-cf565b97cdd0b00b3f1b72f6283b2f20-png-1.png",
    chainImage: "/base-mainnet-1.png",
  },
  {
    name: "Eagle AI",
    symbol: "EAI",
    mainImage: "/1716209527383-cf565b97cdd0b00b3f1b72f6283b2f20-png-2.png",
    chainImage: "/base-mainnet-2.png",
  },
  {
    name: "Eagle AI",
    symbol: "EAI",
    mainImage: "/1716209527383-cf565b97cdd0b00b3f1b72f6283b2f20-png-3.png",
    chainImage: "/base-mainnet-3.png",
  },
];

export const NavigationSection = (): JSX.Element => {
  return (
    <ScrollArea className="w-full py-4">
      <div className="flex items-center gap-[23px]">
        {tokens.map((token, index) => (
          <Card
            key={`token-${index}`}
            className="flex-none bg-[#544bbf1a] rounded-[23px] border border-solid border-[#a097ff33]"
          >
            <CardContent className="flex items-center gap-2 pl-[15px] pr-[30px] py-3">
              <div className="relative w-[45px] h-[45px]">
                <div className="relative w-full h-full">
                  <div
                    className="absolute w-[45px] h-[45px] top-0 left-0 rounded-[9374.06px] border-[0.94px] border-solid border-[#f1466833] bg-cover bg-[50%_50%]"
                    style={{ backgroundImage: `url(${token.mainImage})` }}
                  />

                  {token.isSvgChain ? (
                    <div className="absolute w-[22px] h-[22px] top-[26px] left-[26px] rounded-[9374.06px] border-[0.94px] border-solid border-[#f1466833] overflow-hidden">
                      <div className="relative h-[22px]">
                        <img
                          className="absolute w-[21px] h-[21px] top-px left-px"
                          alt="Chain logo"
                          src={token.chainImage}
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className="absolute w-[22px] h-[22px] top-[26px] left-[26px] rounded-[9374.06px] border-[0.94px] border-solid border-[#f1466833] bg-cover bg-[50%_50%]"
                      style={{ backgroundImage: `url(${token.chainImage})` }}
                    />
                  )}
                </div>
              </div>

              <div className="flex flex-col h-7 items-center gap-1.5">
                <div className="h-2.5 mt-[-1.00px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-[11.0px] whitespace-nowrap">
                  {token.name}
                </div>
                <div className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-gray-400 text-xs text-center tracking-[0] leading-[11.0px]">
                  {token.symbol}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
