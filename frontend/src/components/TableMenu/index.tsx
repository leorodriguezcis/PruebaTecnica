import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import useStyles from "./style";
import { FC, useState } from "react";
import { TableProps } from "../../interfaces/interfaces";
import { ModalPedido } from "../ModalPedido";
import { Api_Pedido } from "../../services/Pedido";
import { sleep } from "../../utils/utils";
import { TableHeader } from "../../common/TableHeader";
import { TableRowMenu } from "../../common/TableRowMenu";

export const TableMenu: FC<TableProps> = ({ data, openLoad, closeLoad }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { classes } = useStyles();
  const handleSend = (id: number) => {
    openLoad();
    sleep(300).then(() => {
      Api_Pedido.pedido(id).then(() => {
        closeLoad();
        setOpenModal(true);
      });
    });
  };
  return (
    <TableContainer component={Paper} hidden={data.length === 0}>
      <Table className={classes.table} aria-label="simple table">
        <TableHeader />
        <TableBody>
          {data.map((row) => (
            <TableRowMenu
              data={row}
              onClick={() => handleSend(row.id)}
              key={row.id}
            />
          ))}
        </TableBody>
      </Table>
      <ModalPedido open={openModal} onClose={() => setOpenModal(false)} />
    </TableContainer>
  );
};
