import React from "react";

const FooterData = [
  {
    shop: "/",
    account: "/users",
    cart: "/cart",
    wishlist: "/wishlist",
  },
  {
    website: `https://rakesh.website`,
    mail: `mailto:iamrakeshkumar@pm.me`,
    github: `https://github.com/ra-kesh`,
    linkedin: `https://www.linkedin.com/in/iamrakeshkumar/`,
    twitter: `https://twitter.com/kumarakeshh`,
  },
];

const Footer = () => {
  return (
    <div className="border-y-light center-vertically m-top-ten">
      <div className="container  ">
        <div className="flex-dir-col center-vertically gap-2 border-bottom-light p-y-5">
          <span className="logo-text ">M . A . D</span>
        </div>
        <div className="h-4 flex-row space-between">
          {FooterData.map((dataItem, index) => {
            return (
              <div className="center-vertically gap-1" key={index}>
                {Object.entries(dataItem).map(([key, value], index) => {
                  return (
                    <a href={value} key={index}>
                      <span className="text-sm text-mute">{key}</span>
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
