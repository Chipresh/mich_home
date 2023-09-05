import { FC } from "react";
import { Nav } from "./Nav/Nav";
import { Box } from "./Boxs/Box";
import { Box2 } from "./Boxs/Box2";
import { Box3 } from "./Boxs/Box3";
import { Box4 } from "./Boxs/Box4";
import { Footer } from "../../Footer/Footer";

export const Location: FC = () => {
  return (
    <>
      <Nav />
      <Box />
      <Box2 />
      <Box3 />
      <Box4 />
      <Footer />
    </>
  );
};
