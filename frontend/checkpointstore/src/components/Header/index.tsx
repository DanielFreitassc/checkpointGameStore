import * as Styles from "./Header.styles";
import { useThemeStore } from "../../store/themeStore";
import { Sun, Moon } from "lucide-react";
import Switch from "react-switch";

export const Header = () => {
  const { changeTheme, theme } = useThemeStore();

  return (
    <Styles.HeaderContainer>
      <Styles.Header>
        <h2>
          CheckPoint<span>Store</span>
        </h2>
        <Switch
          onChange={changeTheme}
          checked={theme.name === "dark"}
          checkedIcon={<Sun size={20} color="white" />}
          uncheckedIcon={<Moon size={20} color="white" />}
          onColor={theme.colors.background}
          offColor="#bbb"
          onHandleColor="#fff"
          offHandleColor="#999"
          width={60}
          height={30}
        />
      </Styles.Header>
    </Styles.HeaderContainer>
  );
};
