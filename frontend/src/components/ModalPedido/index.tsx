import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { ModalPedidoProps } from "../../interfaces/interfaces";
import useStyles from "./style";
import CloseIcon from "@mui/icons-material/Close";

export const ModalPedido: FC<ModalPedidoProps> = ({ open, onClose }) => {
  const { classes } = useStyles();
  return (
    <Dialog open={open} PaperProps={{ style: { borderRadius: "8px" } }}>
      <DialogTitle>
        <Typography className={classes.typTitle}>Pedido Exitoso</Typography>
      </DialogTitle>
      <IconButton onClick={onClose} className={classes.closeButton}>
        <CloseIcon />
      </IconButton>
      <DialogContent className={classes.dialogContent}>
        <Typography className={classes.typContent}>
          Tu pedido fue realizado con éxito. Llegará
          <br /> en 30 minutos
        </Typography>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button
          variant="contained"
          className={classes.continueButton}
          onClick={onClose}
        >
          Continuar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
