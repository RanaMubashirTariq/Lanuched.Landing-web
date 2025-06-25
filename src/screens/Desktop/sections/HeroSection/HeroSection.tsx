import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-3xl items-start gap-8 py-12">
      <div className="flex flex-col items-start gap-[11px] w-full">
        <h1 className="font-['IBM_Plex_Sans',Helvetica] font-bold text-white text-[80px] leading-tight">
          Launch The Future <br />
          of Web3
        </h1>

        <p className="font-['Poppins',Helvetica] font-medium text-[#afaabf] text-[32px] max-w-[586px]">
          Decentralized Multi-chain launched on Ethereum, BNS Chain and Doygon
        </p>
      </div>

      <div className="flex items-center gap-6">
        <Button className="px-5 py-[18px] bg-[#2e286e] rounded-[15px] border border-solid border-[#afaabf80] shadow-[inset_0px_-4px_11.7px_#907ce640] font-['Poppins',Helvetica] font-medium text-[#afaabf] text-xl h-auto">
          Join IDO
        </Button>

        <Button className="px-5 py-[18px] bg-[#060232] rounded-[15px] border border-solid border-[#afaabf80] shadow-[inset_0px_-4px_11.7px_#907ce640] font-['Poppins',Helvetica] font-medium text-[#afaabf] text-xl h-auto">
          Apply Launch
        </Button>
      </div>
    </section>
  );
};
