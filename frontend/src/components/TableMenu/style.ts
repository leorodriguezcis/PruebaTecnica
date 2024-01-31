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
    }
}))

export default useStyles
