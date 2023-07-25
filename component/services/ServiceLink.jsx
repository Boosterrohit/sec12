import React from "react";

const ServiceLink = () => {
  const connects = [
    {
      paragraph:
        "Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum volutpat nibh, accumsan purus. Lorem ipsum dolor sit semper amet, consectetur adipiscing elit. In maximus ligula metus pellentesque mattis.",
    },
  ];
  return (
    <>
      {connects.map((connect) => (
        <div>
          <div>
            <p>{connect.paragraph}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceLink;
