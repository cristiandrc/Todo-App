import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import BurgerButton from "../components/BurgerButton/BurgerButton";
import NavMenu from "../components/NavMenu/NavMenu";

const Layout = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <header>
        <BurgerButton click={() => setIsOpenMenu(!isOpenMenu)} />
      </header>
      {<NavMenu isOpen={isOpenMenu} click={() => setIsOpenMenu(!isOpenMenu)} />}

      <Outlet />
    </>
  );
};

export default Layout;
