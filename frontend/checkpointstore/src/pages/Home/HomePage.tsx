import { SectionAbout } from "../../components/SectionAbout";
import { SectionGamesCatalog } from "../../components/SectionGamesCatalog";
import { SectionGenres } from "../../components/SectionGenres";

export const HomePage = () => {
  return (
    <>
      <SectionAbout />
      <SectionGenres />
      <SectionGamesCatalog />
    </>
  );
};
