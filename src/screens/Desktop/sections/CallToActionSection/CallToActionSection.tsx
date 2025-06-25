import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  // Data for Token Utility card
  const tokenUtilityFeatures = [
    "Fee Discount",
    "Governance",
    "Launch Participation",
  ];

  // Data for Security & Trust card
  const securityFeatures = ["Audited by Certik", "KYC Bypass", "BlockPass"];

  return (
    <div className="flex gap-11 w-full justify-center py-12">
      {/* Token Utility and Tokonomics Card */}
      <Card className="w-[618px] bg-[#06023380] rounded-[35px] border border-solid border-[#a097ff33]">
        <CardHeader className="px-[37px] pt-4 pb-0">
          <CardTitle className="font-bold text-4xl text-[#afabbf] font-['Poppins',Helvetica]">
            Token Utility and Tokonomics
          </CardTitle>
          <img
            className="w-full h-[3px] object-cover mt-3"
            alt="Line"
            src="/line-1-5.svg"
          />
        </CardHeader>
        <CardContent className="px-[37px] py-4">
          <div className="flex items-center gap-[90px]">
            <div className="flex flex-col gap-[22px] justify-center">
              {tokenUtilityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img
                    className="w-[30px] h-[30px]"
                    alt="Check icon"
                    src="/fi-4315445.svg"
                  />
                  <span className="font-['Poppins',Helvetica] font-medium text-white text-xl">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative w-[180.65px] h-[180.65px]">
              <div className="relative w-36 h-36 top-[18px] left-[18px] bg-[url(/ellipse-195.svg)] bg-[100%_100%]">
                <img
                  className="absolute w-[57px] h-[69px] top-[3px] left-[87px]"
                  alt="Ellipse"
                  src="/ellipse-196.svg"
                />
                <img
                  className="absolute w-[94px] h-[114px] top-0 left-0"
                  alt="Ellipse"
                  src="/ellipse-197.svg"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security & Trust Card */}
      <Card className="w-[417px] bg-[#06023380] rounded-[35px] border border-solid border-[#a097ff33]">
        <CardHeader className="px-[37px] pt-[19px] pb-0">
          <CardTitle className="font-bold text-4xl text-[#afabbf] font-['Poppins',Helvetica]">
            Security &amp; Trust
          </CardTitle>
          <img
            className="w-[343px] h-px object-cover mt-3"
            alt="Line"
            src="/line-1-3.svg"
          />
        </CardHeader>
        <CardContent className="px-[37px] py-4">
          <div className="flex items-center">
            <div className="flex flex-col gap-[22px] justify-center">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img
                    className="w-[30px] h-[30px]"
                    alt="Check icon"
                    src="/fi-4315445.svg"
                  />
                  <span className="font-['Poppins',Helvetica] font-medium text-white text-xl">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
