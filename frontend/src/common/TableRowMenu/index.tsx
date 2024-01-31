import { IconButton, TableCell, TableRow, Typography } from "@mui/material";
import { FC } from "react";
import img from "../../assets/sendIcon.svg";
import { TableRowMenuProps } from "../../interfaces/interfaces";
import useStyles from "./style";

export const TableRowMenu: FC<TableRowMenuProps> = ({ data, onClick }) => {
  const { classes } = useStyles();
  return (
    <TableRow key={data.id} className={classes.tableRow}>
      <TableCell component="th" scope="row" size="small">
        {data.id}
      </TableCell>
      <TableCell align="left" size="small">
        {data.nombre}
      </TableCell>
      <TableCell align="right" size="small">
        {data.precio}
      </TableCell>
      <TableCell align="right" size="small">
        <IconButton onClick={onClick}>
          <img src={img} alt="headerImg" width="20px" height="20px" />{" "}
          <Typography className={classes.typPedir}>Pedir</Typography>
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
