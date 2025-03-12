import * as Styles from "./Header.styles";
import { useThemeStore } from "../../store/themeStore";
import { Sun, Moon } from "lucide-react";
import Switch from "react-switch";
import { Link } from "react-router-dom";

export const Header = () => {
  const { changeTheme, theme } = useThemeStore();

  return (
    <Styles.HeaderContainer>
      <Styles.Header>
        <Styles.HeaderInfo>
          <Link to="/">
            <h2>
              CheckPoint<span>Store</span>
            </h2>
          </Link>
          <Switch
            onChange={changeTheme}
            checked={theme.name === "dark"}
            checkedIcon={
              <Styles.SwitchIcon>
                <Sun size={20} color="white" />
              </Styles.SwitchIcon>
            }
            uncheckedIcon={
              <Styles.SwitchIcon>
                <Moon size={20} color="white" />
              </Styles.SwitchIcon>
            }
            onColor={theme.colors.background}
            offColor="#bbb"
            onHandleColor="#fff"
            offHandleColor="#999"
            width={60}
            height={30}
          />
        </Styles.HeaderInfo>
      </Styles.Header>
    </Styles.HeaderContainer>
  );
};
