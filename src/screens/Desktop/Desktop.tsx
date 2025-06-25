import React from "react";
import { Button } from "../../components/ui/button";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { LaunchpadListSection } from "./sections/LaunchpadListSection";
import { NavigationSection } from "./sections/NavigationSection";
import { SecurityTrustSection } from "./sections/SecurityTrustSection/SecurityTrustSection";
import { TokenUtilitySection } from "./sections/TokenUtilitySection";

export const Desktop = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Terrs", href: "#" },
    { label: "Docs", href: "#" },
    { label: "FAQs", href: "#" },
  ];

  // Decorative elements data
  const stars = [
    {
      className:
        "absolute w-4 h-[21px] top-44 left-[1015px] opacity-50 bg-[url(/star.svg)] bg-[100%_100%]",
    },
    {
      className:
        "absolute w-4 h-[23px] top-[516px] left-[1250px] opacity-50 bg-[url(/star-1.svg)] bg-[100%_100%]",
    },
    {
      className:
        "absolute w-4 h-[21px] top-[236px] left-[119px] bg-[url(/star.svg)] bg-[100%_100%]",
    },
  ];

  const dots = [
    {
      className:
        "absolute w-[5px] h-[7px] top-[433px] left-[119px] bg-white rounded-[2.5px/3.5px]",
    },
    {
      className:
        "absolute w-[5px] h-2 top-[595px] left-[1361px] bg-[#bb2ada] rounded-[2.5px/4px]",
    },
    {
      className:
        "absolute w-[5px] h-[7px] top-[290px] left-[1283px] bg-[#bb2ada] rounded-[2.5px/3.5px]",
    },
    {
      className:
        "absolute w-[5px] h-[7px] top-[605px] left-[278px] bg-[#3bcbff] rounded-[2.5px/3.5px]",
    },
    {
      className:
        "absolute w-[5px] h-[7px] top-[130px] left-[705px] bg-[#bb2ada] rounded-[2.5px/3.5px]",
    },
  ];

  // Decorative borders data
  const decorativeBorders = [
    {
      className:
        "absolute w-[390px] h-[164px] top-[111px] left-11 rounded-[195.24px/82.15px] border-[3.47px] border-solid border-[#544bbf4c] rotate-[42.98deg]",
    },
    {
      className:
        "absolute w-[390px] h-[164px] top-[119px] left-6 rounded-[195.24px/82.15px] border-[3.47px] border-solid border-[#544bbf4c] rotate-[42.98deg]",
    },
    {
      className:
        "absolute w-[390px] h-[164px] top-[135px] left-1 rounded-[195.24px/82.15px] border-[3.47px] border-solid border-[#544bbf4c] rotate-[42.98deg]",
    },
    {
      className:
        "absolute w-[390px] h-[137px] top-[115px] left-px rounded-[195.24px/68.33px] border-[3.47px] border-solid border-[#544bbf4c] rotate-[42.98deg]",
    },
    {
      className:
        "absolute w-[390px] h-[137px] top-[141px] -left-1.5 rounded-[195.24px/68.33px] border-[3.47px] border-solid border-[#544bbf4c] rotate-[42.98deg]",
    },
    {
      className:
        "absolute w-[390px] h-[137px] top-[303px] left-[1084px] rounded-[195.24px/68.33px] border-[3.47px] border-solid border-[#544bbf4c] rotate-[42.98deg]",
    },
    {
      className:
        "absolute w-[390px] h-[137px] top-[332px] left-[1077px] rounded-[195.24px/68.33px] border-[3.47px] border-solid border-[#544bbf4c] rotate-[42.98deg]",
    },
    {
      className:
        "absolute w-[390px] h-[137px] top-[266px] left-[1091px] rounded-[195.24px/68.33px] border-[3.47px] border-solid border-[#544bbf4c] rotate-[42.98deg]",
    },
  ];

  return (
    <div className="bg-[#020022] flex flex-row justify-center w-full">
      <div className="bg-[#020022] overflow-hidden w-[1440px] relative">
        <div className="relative w-full">
          <div className="relative w-full">
            <div className="relative w-full">
              {/* Header Navigation */}
              <div className="flex items-center justify-between px-8 py-4">
                {/* Logo */}
                <div className="flex items-end gap-[5px]">
                  <img
                    className="relative w-[37px] h-[42px]"
                    alt="Frame"
                    src="/img/frame.svg"
                  />
                  <div className="relative w-fit [font-family:'SeoulHangang_CEB-Regular',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Launchhood
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center gap-12">
                  {navItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-xl tracking-[0] leading-[normal]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                {/* Connect Wallet Button */}
                <Button className="px-5 py-[18px] bg-[#060232] rounded-[15px] border border-solid border-[#afaabf80] shadow-[inset_0px_-4px_11.7px_#907ce640] [font-family:'Poppins',Helvetica] font-medium text-[#afaabf] text-xl">
                  Connect Wallet
                </Button>
              </div>

              {/* Hero Section */}
              <HeroSection />

              {/* Decorative Elements */}
              {stars.map((star, index) => (
                <div key={`star-${index}`} className={star.className} />
              ))}

              {dots.map((dot, index) => (
                <div key={`dot-${index}`} className={dot.className} />
              ))}

              {/* Navigation Section */}
              <NavigationSection />

              {/* Decorative Glow */}
              <div className="absolute w-[402px] h-[402px] top-[257px] left-[899px] bg-[#a097ffcc] rounded-[201px] blur-[88.6px]" />

              {/* Background Image */}
              <img
                className="absolute w-[839px] h-[927px] top-0 left-[619px] object-cover"
                alt="Freepik background"
                src="/freepik--background--35766-1.png"
              />
            </div>

            {/* Decorative Borders Container */}
            <div className="relative w-full">
              <div className="absolute w-[438px] h-[410px] top-[822px] left-0">
                {decorativeBorders.slice(0, 3).map((border, index) => (
                  <div key={`border-${index}`} className={border.className} />
                ))}
              </div>
            </div>
          </div>

          {/* Security Trust Section */}
          <SecurityTrustSection />

          {/* More Decorative Borders */}
          <div className="absolute w-[386px] h-[392px] top-[1179px] left-[1571px]">
            {decorativeBorders.slice(3, 5).map((border, index) => (
              <div key={`border-extra-${index}`} className={border.className} />
            ))}
          </div>
        </div>

        {/* Token Utility Section */}
        <TokenUtilitySection />

        {/* Decorative Group */}
        <div className="absolute w-[456px] h-[470px] top-[2103px] left-[-358px]">
          <img
            className="absolute w-[445px] h-[1166px] top-[-348px] left-[358px]"
            alt="Group"
            src="/group-5-1.png"
          />
        </div>

        {/* Footer and Launchpad Sections Container */}
        <div className="relative w-full mt-8">
          <div className="relative w-full">
            {/* More Decorative Borders */}
            {decorativeBorders.slice(5).map((border, index) => (
              <div
                key={`border-footer-${index}`}
                className={border.className}
              />
            ))}

            {/* Footer Section */}
            <FooterSection />
          </div>

          {/* Launchpad List Section */}
          <LaunchpadListSection />
        </div>

        {/* Call To Action Section */}
        <CallToActionSection />

        {/* Copyright Footer */}
        <div className="relative w-full mt-8">
          <img
            className="w-full h-[3px] object-cover"
            alt="Line"
            src="/line-2.svg"
          />
          <div className="flex w-full items-end justify-between px-[349px] py-4">
            <div className="relative [font-family:'Poppins',Helvetica] font-normal text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap">
              Copyright © ABC
            </div>
            <div className="relative [font-family:'Poppins',Helvetica] font-normal text-white text-[15px] text-center tracking-[0] leading-[17.4px] whitespace-nowrap">
              © 2025&nbsp;&nbsp;All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
