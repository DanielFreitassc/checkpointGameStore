import controllerImg from "../../assets/fluent_xbox-controller-32-filled.png";
import checkImg from "../../assets/bxs_badge-check.png";
import * as Styles from "./SectionAbout.styles";

export const SectionAbout = () => {
  return (
    <Styles.AboutContainer>
      <Styles.InfoText>
        <h2>O que é a CheckpointStore?</h2>
        <p>
          Oferecemos um catálogo diversificado de <br /> videogames em vários
          gêneros.
        </p>
      </Styles.InfoText>
      <Styles.InfoImg>
        <Styles.InfoImgContent>
          <img src={controllerImg} alt="Imagem de um controle" />
          <p>50+ jogos disponíveis</p>
        </Styles.InfoImgContent>
        <Styles.InfoImgContent>
          <img src={checkImg} alt="Imagem de um Check" />
          <p>
            Confiado por mais de <br /> 5000 clientes.
          </p>
        </Styles.InfoImgContent>
      </Styles.InfoImg>
    </Styles.AboutContainer>
  );
};
