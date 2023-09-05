import {FC} from 'react';
import { Nav } from './Nav';
import { Formf } from './Formf';
import { Footer } from '../../../Footer/Footer';

export const Form: FC = () => {
  return (
    <>
      <Nav />
      <Formf />
      <Footer />
    </>
  );
}
