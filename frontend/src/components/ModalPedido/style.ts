import { makeStyles } from "tss-react/mui";
import "@fontsource/poppins";
const useStyles = makeStyles()((theme) => ({
  dialogContent: {
    padding: '20px',
    paddingTop: '0px',
  },
  closeButton: {
    color: "black",
    position: "absolute",
    right: 8,
    top: 8,
  },
  dialogActions: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "2vh",
  },
  continueButton:{
      fontFamily: 'Poppins',
      textTransform: 'none',
      backgroundColor: "black",
      borderRadius: "8px",
      '&:hover': {
        backgroundColor: "#18171c",
      }
  },
  typTitle: {
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: 600,
  },
  typContent:{
    fontFamily: 'Poppins',
    color: '#646464',
    [theme.breakpoints.down('sm')]: {  
      fontSize: '14px',
      },
  }
}));

export default useStyles;
