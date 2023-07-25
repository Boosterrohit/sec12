import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import "../../style/Style.css";
const Link = () => {
  const links = [
    {
      name: "Home",
      submenu: true,
      sublinks: [
        {
          Head: "Multi Page",
          sublink: [
            { name: "Main Demo" },
            { name: "Image Parallax 1" },
            { name: "Image Parallax 2" },
            { name: "Image Parallax 3" },
            { name: "Image Parallax 4" },
            { name: "Image Parallax 5" },
            { name: "Fullwidth Image" },
            { name: "Text Rotator" },
            { name: "Slider Fullscreen" },
            { name: "Slider Zoom Effect" },
            { name: "Slider Fullwidth" },
          ],
        },
        {
          Head: " ",
          sublink: [
            { name: "Slider Background" },
            { name: "Slider Revolution 1" },
            { name: "Slider Revolution 2" },
            { name: "Content Slider" },
            { name: "With Play Button" },
            { name: "Bg Video Fullwidth" },
            { name: "Bg Video Fullscreen 1" },
            { name: "Bg Video Fullscreen 2" },
            { name: "Bg HTML5 Video (local)" },
            { name: "Agency Header" },
            { name: "Special Demos" },
          ],
        },
        {
          Head: " ",
          sublink: [
            { name: "Main Demo" },
            { name: "Image Parallax 1" },
            { name: "Image Parallax 2" },
            { name: "Image Parallax 3" },
            { name: "Image Parallax 4" },
            { name: "Image Parallax 5" },
            { name: "Fullwidth Image" },
            { name: "Text Rotator" },
            { name: "Slider Fullscreen" },
            { name: "Slider Zoom Effect" },
            { name: "Slider Fullwidth" },
          ],
        },
        {
          Head: "One Page",
          sublink: [
            { name: "Slider Background" },
            { name: "Slider Revolution 1" },
            { name: "Slider Revolution 2" },
            { name: "Content Slider" },
            { name: "With Play Button" },
            { name: "Bg Video Fullwidth" },
            { name: "Bg Video Fullscreen 1" },
            { name: "Bg Video Fullscreen 2" },
            { name: "Bg HTML5 Video (local)" },
            { name: "Agency Header" },
            { name: "Special Demos" },
          ],
        },
      ],
    },
    {
      name: "Pages",
      submenu: true,
      sublinks: [
        {
          Head: "Group 1",
          sublink: [
            { name: "About Us 1" },
            { name: "About Us 2" },
            { name: "About Us 3" },
            { name: "Services 1" },
            { name: "Services 2" },
            { name: "Services 3" },
            { name: "Client" },
            { name: "Landing Page" },
          ],
        },
        {
          Head: "Group 2",
          sublink: [
            { name: "Team 1" },
            { name: "Team 2" },
            { name: "FAQ 1" },
            { name: "FAQ 2" },
            { name: "Pricing 1" },
            { name: "Pricing 2" },
            { name: "Contact 1" },
            { name: "Contact 2" },
          ],
        },
        {
          Head: "Group 3",
          sublink: [
            { name: "Gallery Col 1" },
            { name: "Gallery Col 2" },
            { name: "Gallery Col 3" },
            { name: "Gallery Col 4" },
            { name: "Gallery Col 5" },
            { name: "Gallery Col 6" },
            { name: "Login/Register" },
            { name: "Under Construction" },
          ],
        },
        {
          Head: "Group 3",
          sublink: [
            { name: "Gallery Col 1" },
            { name: "Gallery Col 2" },
            { name: "Gallery Col 3" },
            { name: "Gallery Col 4" },
            { name: "Gallery Col 5" },
            { name: "Gallery Col 6" },
            { name: "Login/Register" },
            { name: "Under Construction" },
          ],
        },
      ],
    },
    { name: "Element" },
    { name: "Portfolio" },
    { name: "Blog" },
    { name: "Shop" },
  ];
  return (
    <>
      {links.map((link) => (
        <div className="group">
          <div className="py-2">
            <h6 className="size items-center flex font-bold">
              {link.name}
              <span>
                <RiArrowDownSLine size={13} />
              </span>
            </h6>
            {link.submenu && (
              <div>
                <div className="top-12  absolute hidden group-hover:block">
                  <div className=" p-4 to grid grid-cols-4 bg-stone-900 px-3">
                    {link.sublinks.map((mysublink) => (
                      <div className="rks">
                        <h6 className="size font-bold text-white">
                          {mysublink.Head}
                        </h6>
                        {mysublink.sublink.map((slink) => (
                          <h6 className="size px-3 py-2">{slink.name}</h6>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Link;
