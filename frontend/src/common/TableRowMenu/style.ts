import { makeStyles } from 'tss-react/mui'
import "@fontsource/poppins";

const useStyles = makeStyles()(() => ({
    typPedir: {
        fontFamily: 'Poppins',
        marginLeft: '10%',
        color: '#219653',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 'bold',
    }    ,
    table:{ 
        minWidth: "55vw"
    },
    tableRow: {
        '& .MuiTableCell-root':{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 500, color: '#101828', height:'50px'},
    }
}))

export default useStyles
