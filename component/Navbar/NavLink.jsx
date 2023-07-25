import React from "react";

const NavLink = () => {
  const pings = [{ name: "search" }, { name: "cart(0)" }, { name: "Eng" }];
  return (
    <>
      {pings.map((ping) => (
        <div>
          <div>
            <h6 className="pt-1 size">{ping.name}</h6>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLink;
