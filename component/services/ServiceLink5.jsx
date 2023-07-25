import React from "react";

const ServiceLink5 = () => {
  const connects = [
    {
      paragraph:
        "Cras mi tortor, laoreet id ornare et, accumsan non magna. Maecenas vulputate accumsan velit. Curabitur a nulla ex. Nam a tincidunt ante. Vitae gravida turpis. Vestibulum varius nulla non nulla scelerisque tristique.",
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

export default ServiceLink5;
