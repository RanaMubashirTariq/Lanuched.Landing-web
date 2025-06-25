import React from "react";

export const LaunchpadListSection = (): JSX.Element => {
  // Social media icons data
  const socialIcons = [
    { url: "/svg-4.svg" },
    { url: "/svg-1.svg" },
    { url: "/svg.svg" },
    { url: "/svg-2.svg" },
    { url: "/svg-3.svg" },
  ];

  // Footer links data
  const footerSections = [
    {
      title: "General",
      links: ["Pools alert", "KYC & Audit", "Docs", "Shop"],
    },
    {
      title: "Help",
      links: ["Pools alert", "KYC & Audit", "Docs", "Shop"],
    },
    {
      title: "Communities",
      links: ["Pools alert", "KYC & Audit", "Docs", "Shop"],
    },
  ];

  return (
    <footer className="flex justify-between w-full py-8 mt-8">
      <div className="flex flex-col w-[330px] gap-6">
        <div className="flex flex-col gap-3">
          <h3 className="font-medium text-xl text-white font-['Poppins',Helvetica]">
            Launchhood
          </h3>
          <p className="text-xs text-[#afaabf] font-medium font-['Poppins',Helvetica] leading-[27px]">
            Lorem ipsum dolor sit amet consectetur mi urna tellus dignissim duis
            at in tempor mauris morbi fermentum dolor lobortis aliquam maecenas.
          </p>
        </div>

        <div className="flex flex-wrap gap-[18px]">
          {socialIcons.map((icon, index) => (
            <div
              key={`social-icon-${index}`}
              className={`w-[33.83px] h-[33.83px] bg-[url(${icon.url})] bg-[100%_100%]`}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-[94px]">
        {footerSections.map((section, index) => (
          <div
            key={`footer-section-${index}`}
            className="flex flex-col w-[93px] gap-5"
          >
            <h4
              className={`font-medium text-sm text-white font-['Poppins',Helvetica] ${section.title === "Communities" ? "w-[103px]" : ""}`}
            >
              {section.title}
            </h4>
            <div className="flex flex-col gap-[18px]">
              {section.links.map((link, linkIndex) => (
                <a
                  key={`${section.title}-link-${linkIndex}`}
                  href="#"
                  className="text-sm text-gray-400 font-['Segoe_UI-Regular',Helvetica]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};
