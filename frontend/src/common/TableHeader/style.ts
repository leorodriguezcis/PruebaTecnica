import { makeStyles } from 'tss-react/mui'
import "@fontsource/poppins";

const useStyles = makeStyles()(() => ({
    tableHeader: {
        '& .MuiTableCell-root':{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 500, color: '#667085'},
       
        backgroundColor: '#EAECF0'
        }
}));

export default useStyles;
