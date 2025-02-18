import { Outlet } from "react-router-dom";
import * as Styles from "./DefaultLayout";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Banner />
      <Styles.LayoutContainer>
        <Outlet />
      </Styles.LayoutContainer>
    </>
  );
};
