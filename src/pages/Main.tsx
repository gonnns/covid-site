import { useState } from 'react';
import Content from '../layout/Content';
import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';

function Main() {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      {/* <Header /> */}
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Content />
    </>
  );
}

export default Main;
