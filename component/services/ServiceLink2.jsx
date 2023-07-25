import React from "react";

const ServiceLink2 = () => {
  const connects = [
    {
      header:
        "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
    },
  ];
  return (
    <>
      {connects.map((connect) => (
        <h3 className="leading font-light">{connect.header}</h3>
      ))}
    </>
  );
};

export default ServiceLink2;
