import { FC, ReactNode } from "react";
import img from "../../assets/foodpng.png";
import { Typography } from "@mui/material";
import useStyles from "./style";

interface HeaderProps {
  children: ReactNode;
}
export const Header: FC<HeaderProps> = ({ children }) => {
  const { classes } = useStyles();
  return (
    <header className={classes.header}>
      <img src={img} alt="headerImg" className={classes.img} />
      <Typography className={classes.typography}>
        ¡Pedí lo que quieras!
      </Typography>
      {children}
    </header>
  );
};
