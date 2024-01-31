import { styled, keyframes } from "@mui/system";
import { Theme } from "@mui/material";

export const StyledContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: 64,
  heigt: 64,
}));

const lineAnimation1 = keyframes`
      1% { transform: rotate(0deg) }
      100% { transform: rotate(360deg) }
  `;
interface SpectrumProps {
  theme?: Theme;
  animation?: number;
}

export const StyledLoader = styled("div")<SpectrumProps>(() => ({
  display: "flex",
  animationName: lineAnimation1,
  animationDuration: "1000ms",
  animationIterationCount: "infinite",
  animationDirection: "normal",
  width: 100,
  heigt: 100,
}));
