import {
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { FC } from "react";
import {
  Categoria,
  SelectItemCategoriasProps,
} from "../../interfaces/interfaces";
import useStyles from "./style";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const SelectItemCategoria: FC<SelectItemCategoriasProps> = ({
  values,
  onChange,
  setValuereseted,
  value,
}) => {
  const { classes } = useStyles();
  const handleChange = (event: SelectChangeEvent<string>) => {
    setValuereseted(event.target.value as string);
    if (onChange) onChange(event);
  };
  return (
    <Grid className={classes.gridMain}>
      <Typography className={classes.label}>Categorías</Typography>
      <Select
        onChange={handleChange}
        value={value}
        className={classes.select}
        IconComponent={KeyboardArrowDownIcon}
      >
        <MenuItem value={"1"} disabled>
          Seleccioná una Categorias
        </MenuItem>
        {values.map((value: Categoria) => (
          <MenuItem value={value.nombre} key={value.id}>
            {value.nombre}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  );
};
