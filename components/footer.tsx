import React from "react";
import styles from "../style/style.module.css";
import Link from "next/link";

const Footer = () => {
  const curryear:number = new Date().getFullYear();
  return (
    <div className="text-white bg-slate-800">
      <div className={`${styles.footerImg} -mt-96 bg-slate-200  sm:h-[625px] `}>
        <div className="sm:pt-[36rem] pt-[33rem] lg:mx-32 sm:mx-16 mx-5 gap-x-5 justify-items-center py-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          <div className="hidden sm:block">
            <h1 className="font-bold !text-xl mb-2">Get to Know Us</h1>
            <div className="grid justify-items-start items-start">
              <div className={`${styles.footerHover}`}>About Us</div>
              <div className={`${styles.footerHover}`}>Careers</div>
              <div className={`${styles.footerHover}`}>
                Biss Stands Social Impact
              </div>
              <div className={`${styles.footerHover}`}>
                Supply Chain Transparency
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <h1 className="font-bold !text-xl mb-2">Connect with Us</h1>
            <div className="grid justify-items-start items-start">
              <p className={`${styles.footerHover}`}>Facebook</p>
              <p className={`${styles.footerHover}`}>Twitter</p>
              <p className={`${styles.footerHover}`}>Instagram</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold !text-xl mb-2">Help & FAQs</h1>
            <div className="grid justify-items-start items-start">
              <p className={`${styles.footerHover}`}>Online Ordering</p>
              <p className={`${styles.footerHover}`}>Shipping</p>
              <p className={`${styles.footerHover}`}>Billing</p>
              <p className={`${styles.footerHover}`}>Return & Exchanges</p>
              <p className={`${styles.footerHover}`}>Customer Service </p>
              <p className={`${styles.footerHover}`}>Contact US</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold !text-xl mb-2">My biss</h1>
            <div className="grid justify-items-start items-start">
              <p className={`${styles.footerHover}`}>My Account</p>
              <p className={`${styles.footerHover}`}>Order Status</p>
              <p className={`${styles.footerHover}`}>Rewards Bazaar</p>
              <p className={`${styles.footerHover}`}>
                Flash Unlimited Shipping
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 py-4  !text-2xl text-center">
          <Link href="#navbar" className="p-3 rounded-md bg-blue-500">
            Back to Top
          </Link>
        </div>
      </div>
      <hr />
      <div className="text-center pt-10 pb-2 mx-5">
        <p>Conditions of Use & Sale Privacy Notice Interest-Based Ads</p>
        <p>@1996-{curryear},Bizz.com</p>
      </div>
    </div>
  );
};

export default Footer;
