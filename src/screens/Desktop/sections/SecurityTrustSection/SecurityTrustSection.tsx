import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Progress } from "../../../../components/ui/progress";
import { Separator } from "../../../../components/ui/separator";

export const SecurityTrustSection = (): JSX.Element => {
  // Card data for mapping
  const launchpadCards = [
    { id: 1, groupImageSuffix: "" },
    { id: 2, groupImageSuffix: "-3" },
    { id: 3, groupImageSuffix: "-7" },
    { id: 4, groupImageSuffix: "-10" },
    { id: 5, groupImageSuffix: "-13" },
    { id: 6, groupImageSuffix: "-16" },
  ];

  return (
    <section className="flex flex-col items-center gap-9 w-full max-w-[1076px] mx-auto">
      <h2 className="w-full [font-family:'Poppins',Helvetica] font-bold text-[#afabbf] text-5xl text-center">
        Launchpad List
      </h2>

      <div className="flex flex-col items-start gap-[50px] w-full">
        {/* First row of cards */}
        <div className="flex flex-wrap items-center justify-center gap-[50px] w-full">
          {launchpadCards.slice(0, 3).map((card) => (
            <LaunchpadCard
              key={card.id}
              groupImageSuffix={card.groupImageSuffix}
            />
          ))}

          {/* Decorative elements */}
          <div className="hidden md:block w-[390.47px] h-[136.66px] rounded-[195.24px/68.33px] border-[3.47px] border-solid border-[#544bbf4c] rotate-[42.98deg]" />
          <div className="hidden md:block w-[390.47px] h-[136.66px] rounded-[195.24px/68.33px] border-[3.47px] border-solid border-[#544bbf4c] rotate-[42.98deg]" />
        </div>

        {/* Second row of cards */}
        <div className="flex flex-wrap items-center justify-center gap-[50px] w-full">
          {launchpadCards.slice(3, 6).map((card) => (
            <LaunchpadCard
              key={card.id}
              groupImageSuffix={card.groupImageSuffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// LaunchpadCard component for reusability
const LaunchpadCard = ({ groupImageSuffix }: { groupImageSuffix: string }) => {
  return (
    <Card className="flex flex-col w-[325px] items-start gap-[15px] px-4 py-[15px] bg-[#a097ff1a] rounded-[20px] border-none">
      <CardContent className="p-0 w-full">
        <div className="flex w-full items-center justify-between mb-[15px]">
          <div className="w-16 h-16 bg-[url(/ic-pinksale-61500ae2-svg.svg)] bg-[100%_100%]" />

          <Badge className="flex items-center gap-[3px] px-[15px] py-1.5 bg-[#2e286e] rounded-[47px] border border-solid border-[#afaabf80] shadow-[inset_0px_-4px_11.7px_#907ce640]">
            <div className="w-[9px] h-[9px] bg-[#f3ba2f] rounded-[4.5px]" />
            <span className="[font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-xs">
              Upcoming
            </span>
          </Badge>
        </div>

        <div className="flex flex-col w-full items-start gap-1.5 mb-[15px]">
          <div className="flex flex-col items-start gap-[11px] w-full">
            <div className="flex flex-col items-start gap-0.5 w-full">
              <h3 className="w-full [font-family:'Poppins',Helvetica] font-medium text-white text-lg">
                Defi Kings Lending
              </h3>
              <p className="w-full [font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-[15px]">
                1 BNB=69,4444.44 DKL
              </p>
            </div>

            <div className="flex flex-col items-start w-full">
              <p className="w-full [font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-sm">
                Soft/Hard18 BNB-36 BNB
              </p>
              <div className="flex flex-col items-start gap-1 -mt-px">
                <p className="text-[#a097ff] text-base [font-family:'Poppins',Helvetica] font-medium">
                  18 BNB - 36 BNB
                </p>
                <p className="[font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-sm">
                  Progress (0.00%)
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-1.5 w-full">
            <Progress
              value={30}
              className="h-1.5 w-full bg-[#d9d9d9] rounded-xl"
            />
            <div className="flex items-center justify-between w-full">
              <span className="text-[#afaabf] text-sm [font-family:'Poppins',Helvetica] font-medium">
                0 BNB
              </span>
              <span className="text-[#afaabf] text-sm [font-family:'Poppins',Helvetica] font-medium">
                36 BNB
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full items-start gap-2">
          <div className="flex flex-col items-start gap-3.5 w-full">
            <div className="flex flex-col w-full items-start gap-[5px]">
              <div className="flex items-center justify-between w-full">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-sm">
                  Liquidity % :
                </span>
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-sm">
                  15%
                </span>
              </div>
              <div className="flex items-center justify-between w-full">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-sm">
                  Lockup Time:
                </span>
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-sm">
                  180 days
                </span>
              </div>
            </div>
            <Separator className="w-full h-px" />
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start gap-[5px]">
              <span className="[font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-sm">
                Sale Starts In:
              </span>
              <span className="[font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-sm">
                26:19:11:11
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-end gap-[11px]">
                <img className="w-[33px]" alt="Frame" src="/frame-16.svg" />
                <div className="flex items-center gap-2.5 p-2.5 bg-[#252054] rounded-[26px]">
                  <div className="relative w-[13px] h-[13px]">
                    <div className="relative w-[11px] h-[13px] left-px">
                      <img
                        className="absolute w-0.5 h-0.5 top-0 left-1"
                        alt="Group"
                        src={`/group${groupImageSuffix}.png`}
                      />
                      <img
                        className="absolute w-1 h-0.5 top-[11px] left-1"
                        alt="Group"
                        src={`/group-1${groupImageSuffix}.png`}
                      />
                      <img
                        className="absolute w-[11px] h-2.5 top-0.5 left-0"
                        alt="Group"
                        src={`/group-2${groupImageSuffix}.png`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Button className="flex items-center justify-center px-[17px] py-[5px] bg-[#060232] rounded-[91px] border border-solid border-[#afaabf80] shadow-[inset_0px_-4px_11.7px_#907ce640] h-auto">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-[11px]">
                  View
                </span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
