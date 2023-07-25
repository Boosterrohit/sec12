import React from "react";

const ServiceLink3 = () => {
  const connects = [
    {
      paragraph:
        "Donec vel ultricies purus. Nam dictum sem, ipsum aliquam . Etiam sit amet fringilla lacus. Pelenteque suscipit ante at ullamcorper pulvinar neque portor. Integer lectus. Praesent sed nisi eleifend, fermetum orci amet, iaculis libero.",
    },
  ];
  return (
    <>
      {connects.map((connect) => (
        <div>
          <p>{connect.paragraph}</p>
        </div>
      ))}
    </>
  );
};

export default ServiceLink3;
