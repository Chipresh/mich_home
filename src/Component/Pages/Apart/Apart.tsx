import { FC } from "react";
import { Nav } from "../Location/Nav/Nav";
import { Box1 } from "./Boxs/Box1";
import { Box2 } from "./Boxs/Box2";
import { Box3 } from "./Boxs/Box3";
import { Footer } from "../../Footer/Footer";
import { Box2f } from "./Boxs/Box2f";
import { Box2f1 } from "./Boxs/Box2f1";
import { MobileNav } from "./Mobile_Nav";
import { MobileBox } from "./Boxs/Mobile_Box";
import { MobileBox2 } from "./Boxs/Mobile_Box2";
import { MobileBox3 } from "./Boxs/Mobile_Box3";
import { MobileBox4 } from "./Boxs/Mobile_Box4";

export const Apart: FC = () => {
  return (
    <>
      <div className="xl:block lg:block hidden sticky top-0">
        <Nav />
      </div>
      <div className="xl:hidden md:block lg:hidden block sticky top-0">
        <MobileNav />
      </div>
      <Box1 />
      <div className="xl:flex md:flex flex-col gap-[10px] py-[50px] hidden">
        <Box2 />
        <Box2f />
        <Box2f1 />
      </div>
      <div className="xl:hidden md:hidden flex flex-col py-[40px] gap-[10px]">
        <MobileBox />
        <MobileBox2 />
        <MobileBox3 />
        <MobileBox4 />
      </div>
      <Box3 />
      <Footer />
    </>
  );
};
