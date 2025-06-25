import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const FooterSection = (): JSX.Element => {
  return (
    <Card className="flex items-center gap-20 p-14 bg-[#a097ff26] rounded-[30px] border border-solid border-[#544bbf80]">
      <CardContent className="flex flex-col items-start gap-10 p-0">
        <h2 className="font-bold text-[#afabbf] text-[40px] font-['Poppins',Helvetica] leading-normal">
          Want to Launch your Project
          <br />
          on Launchpad.
        </h2>

        <div className="flex flex-wrap items-center gap-[9px]">
          <div className="relative flex-grow">
            <Input
              placeholder="Email Address"
              className="px-8 py-5 h-auto bg-[#060232b2] rounded-[15px] border border-solid border-[#544bbf80] text-[#9b9b9b] font-['Poppins',Helvetica] font-semibold text-base"
            />
          </div>

          <Button className="px-8 py-5 h-auto bg-[#a097ff] rounded-[15px] border border-solid border-[#544bbf80] text-[#060232] font-['Poppins',Helvetica] font-semibold text-base hover:bg-[#8c84e6]">
            Subscribe Now
          </Button>
        </div>
      </CardContent>

      <div className="relative w-[325px] h-[325px]">
        <div className="absolute w-[292px] h-[31px] top-[255px] left-[23px] bg-[#a097ff] rounded-[146px/15.5px] blur-[23.25px]" />
        <div className="absolute w-[268px] h-[295px] top-3 left-[38px] bg-[#a097ff33] rounded-[134.03px/147.35px] rotate-[-90.32deg] blur-[23.25px]" />
        <img
          className="absolute w-[325px] h-[325px] top-0 left-0 object-cover"
          alt="Futuristic crypto illustration"
          src="/freepik--create-a-new-version-of-the-3d-futuristic-crypto-v--357.png"
        />
      </div>
    </Card>
  );
};
