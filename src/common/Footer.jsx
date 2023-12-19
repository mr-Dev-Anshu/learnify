import React from "react";
// import logo from "../";
import logo from "../components/assets/logo.png"
import { HashLink } from "react-router-hash-link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full pr-40 pl-40 h-20  text-black flex flex-col justify-between mt-20">
      <div className="flex  justify-between ">
        <div className="w-[25%]">
         <HashLink to={"/"}><img className="h-12" src={logo} alt="" /></HashLink> 
          <p className="mt-4 font-semibold text-slate-500 ">
            Empower your education journey with Learnify—revolutionizing project
            uploads for engineering, medical, and more. Join now!
          </p>
        </div>
        <div className="flex gap-16">
          <div>
            <p className="font-bold tracking-wider text-slate-500 text-md">
              Help & support
            </p>
            <div className=" flex flex-col gap-4 mt-4">
              <HashLink>
                <p>User guidelines</p>
              </HashLink>
              <HashLink>
                <p>Site Map</p>
              </HashLink>
              <HashLink>
                <p>Contact Us</p>
              </HashLink>
            </div>
          </div>
          <div>
            <p className="font-bold tracking-wider text-slate-500 text-md">
              Website
            </p>
            <div className=" flex flex-col gap-4 mt-4">
              <HashLink>
                <p>About Us</p>
              </HashLink>
              <HashLink>
                <p>Careers</p>
              </HashLink>
              <HashLink>
                <p>Terms and conditions</p>
              </HashLink>
            </div>
          </div>
          <div>
            <p className="font-bold tracking-wider text-slate-500 text-md">
              More
            </p>
            <div className=" flex flex-col gap-4 mt-4">
              <HashLink>
                <p>Blogs</p>
              </HashLink>
              <HashLink>
                <p>Privacy Policy</p>
              </HashLink>
              <HashLink>
                <p>Grievance Redressal</p>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full outline outline-1 outline-slate-300 mt-4"></div>
      <div className="p-8 flex justify-between">
        <p className="mt-2">&#169; All rights reserved @IES College </p>
        <div className="flex gap-8 text-slate-500">
          <HashLink>
            <FacebookIcon />
          </HashLink>
          <HashLink>
            <TwitterIcon />
          </HashLink>
          <HashLink>
            <InstagramIcon />
          </HashLink>
          <HashLink>
            <YoutubeIcon />
          </HashLink>
          <HashLink>
            <LinkedinIcon />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
