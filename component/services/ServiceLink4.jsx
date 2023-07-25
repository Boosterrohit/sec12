import React from "react";

const ServiceLink4 = () => {
  const connects = [
    {
      headeing:
        "It doesn’t matter how many times I have to click, as long as each click is a mindless, unambiguous choice.",
    },
  ];
  return (
    <>
      {connects.map((connect) => (
        <div>
          <h3 className="leading font-light	">{connect.headeing}</h3>
        </div>
      ))}
    </>
  );
};

export default ServiceLink4;
