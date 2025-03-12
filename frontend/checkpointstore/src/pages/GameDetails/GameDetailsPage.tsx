import { GameInfo } from "../../components/GameInfo";
import { SectionGamesCatalog } from "../../components/SectionGamesCatalog";
import { SectionGenres } from "../../components/SectionGenres";

export const GameDetailsPage = () => {
  return (
    <>
      <GameInfo />
      <SectionGenres />
      <SectionGamesCatalog />
    </>
  );
};
