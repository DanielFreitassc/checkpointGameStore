import { Outlet } from "react-router-dom";
import * as Styles from "./DefaultLayout";
import { Header } from "../../components/Header";

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Styles.LayoutContainer>
        <Outlet />
      </Styles.LayoutContainer>
    </>
  );
};
