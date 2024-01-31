import { Grid } from "@mui/material";
import { FC, useEffect, useState } from "react";
import useStyles from "./style";
import { SelectComponent } from "../../components/Select";
import { Api_Comida } from "../../services/Comida";
import { Comida, MenuItem, SelectedItems } from "../../interfaces/interfaces";
import { Api_Menu } from "../../services/Menu";
import { TableMenu } from "../../components/TableMenu";
import { SpinnerLoading } from "../../components/ModelSpinner";
import { sleep } from "../../utils/utils";

export const HomePage: FC = () => {
  const { classes } = useStyles();
  const [dataSelect, setDataSelect] = useState<Comida[]>([]);
  const [dataMenu, setDataMenu] = useState<MenuItem[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<SelectedItems>({
    comida: "",
    categoria: "",
  });

  useEffect(() => {
    Api_Comida.comida().then((res) => {
      setDataSelect(res.data);
    });
  }, []);
  useEffect(() => {
    if (selected.comida === "" || selected.categoria === "") {
      setDataMenu([]);
      return;
    }
    setOpen(true);
    sleep(300).then(() => {
      Api_Menu.menu(selected.comida, selected.categoria)
        .then((res) => {
          setOpen(false);
          setDataMenu(res.data);
        })
        .catch(() => {
          setOpen(false);
          setDataMenu([]);
        });
    });
  }, [selected]);
  return (
    <Grid className={classes.gridMain}>
      <SelectComponent
        data={dataSelect}
        select={setSelected}
        selected={selected}
      />
      <Grid className={classes.gridTable}>
        <TableMenu
          data={dataMenu}
          openLoad={() => setOpen(true)}
          closeLoad={() => setOpen(false)}
        />
      </Grid>
      <SpinnerLoading open={open} />
    </Grid>
  );
};
