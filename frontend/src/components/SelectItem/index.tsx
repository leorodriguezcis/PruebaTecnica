import { Grid, MenuItem, Select, Typography } from "@mui/material";
import { FC } from "react";
import { Comida, SelectItemProps } from "../../interfaces/interfaces";
import useStyles from "./style";

export const SelectItem: FC<SelectItemProps> = ({ values, onChange }) => {
  const { classes } = useStyles();
  return (
    <Grid className={classes.gridMain}>
      <Typography className={classes.label}>Tipo de Comida</Typography>
      <Select defaultValue={"1"} onChange={onChange} className={classes.select}>
        <MenuItem value={"1"} disabled>
          Seleccioná un Tipo
        </MenuItem>
        {values.map((value: Comida) => (
          <MenuItem value={value.nombre} key={value.id}>
            {value.nombre}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  );
};
