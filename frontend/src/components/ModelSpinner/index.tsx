import { Dialog, DialogContent } from "@mui/material";
import { FC } from "react";
import { StyledContainer, StyledLoader } from "./style";
import loader from "../../assets/loader.svg";
import { LoaderProps } from "../../interfaces/interfaces";

export const SpinnerLoading: FC<LoaderProps> = ({ open }) => {
  return (
    <Dialog
      open={open}
      PaperProps={{
        style: { backgroundColor: "transparent", boxShadow: "none" },
      }}
    >
      <DialogContent>
        <StyledContainer>
          <StyledLoader animation={1}>
            <img src={loader} alt="voz.register" height={64} width={64} />
          </StyledLoader>
        </StyledContainer>
      </DialogContent>
    </Dialog>
  );
};
