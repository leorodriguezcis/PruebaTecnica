import { Grid, SelectChangeEvent } from "@mui/material";
import { FC, useState } from "react";
import { Categoria, SelectComponentProps } from "../../interfaces/interfaces";
import useStyles from "./style";
import { SelectItem } from "../SelectItem";
import { SelectItemCategoria } from "../SelectItemCategoria";

export const SelectComponent: FC<SelectComponentProps> = ({
  data,
  select,
  selected,
}) => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const { classes } = useStyles();
  const [categoriaReseted, setCategoriaReseted] = useState<string>("1");

  const handleChangeComidaSelect = (event: SelectChangeEvent<string>) => {
    setCategorias(
      data.filter((item) => item.nombre === event.target.value)[0].categorias
    );
    select({ comida: event.target.value, categoria: "" });

    setCategoriaReseted("1");
  };
  const handleChangeCategoria = (event: SelectChangeEvent<string>) => {
    if (event.target.value === "1") {
      select({ ...selected, categoria: "" });
      return;
    }
    select({ ...selected, categoria: event.target.value });
  };
  return (
    <Grid className={classes.gridMain}>
      <SelectItem values={data} onChange={handleChangeComidaSelect} />
      <SelectItemCategoria
        values={categorias}
        setValuereseted={setCategoriaReseted}
        value={categoriaReseted}
        onChange={handleChangeCategoria}
      />
    </Grid>
  );
};
