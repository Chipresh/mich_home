import { FC } from "react";
import { Nav } from "./Nav/Nav";
import { Box1 } from "./Boxs/Box1";
import { Box2 } from "./Boxs/Box2";
import { Box3 } from "./Boxs/Box3";
import { Footer } from "../../Footer/Footer";

const Landing: FC = () => {
  return (
    <>
      <Nav />
      <Box1 />
      {/* <Box2 />
      <Box3 />
      <Footer /> */}
    </>
  );
};

export default Landing;
