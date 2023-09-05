import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import { Location } from "../Component/Pages/Location/Location";
import { Apart } from "../Component/Pages/Apart/Apart";
import { Form } from "../Component/Pages/Forms/Form/Form";
import { Form1f } from "../Component/Pages/Forms/Form1/Form1f";
import { Form2 } from "../Component/Pages/Forms/Form2/Form2";
import { Thanks } from "../Component/Pages/Thanks/Thanks";
import ScrollToTop from "../ScrollToTop";

const Router: FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/location" element={<Location />} />
        <Route path="/apartment" element={<Apart />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form1f" element={<Form1f />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </>
  );
};

export default Router;
