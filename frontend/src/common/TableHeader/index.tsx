import { TableCell, TableHead, TableRow } from "@mui/material";
import { FC } from "react";
import useStyles from "./style";

export const TableHeader: FC = () => {
  const { classes } = useStyles();
  return (
    <TableHead>
      <TableRow className={classes.tableHeader}>
        <TableCell align="left">#</TableCell>
        <TableCell align="left">Plato</TableCell>
        <TableCell align="right">Precio</TableCell>
        <TableCell align="right" />
      </TableRow>
    </TableHead>
  );
};
