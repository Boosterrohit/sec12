import React from "react";

const ServiceLink6 = () => {
  const connects = [
    {
      paragraph:
        "Mauris id viverra augue, eu porttitor diam. Praesent faucibus est a interdum elementum. Nam varius at ipsum id dignissim. Nam a tincidunt ante lorem. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor.",
    },
    {
      heading1:
        "Never fall in love with an idea. They’re whores. If the one you’re with isn’t doing the job, there’s always another.",
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

export default ServiceLink6;
