import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import BurgerButton from "../components/BurgerButton";
import NavMenu from "../components/NavMenu";

const Layout = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <header>
        <BurgerButton click={() => setIsOpenMenu(!isOpenMenu)} />
      </header>
      {!isOpenMenu && <NavMenu />}

      <Outlet />
    </>
  );
};

export default Layout;
