import { makeStyles } from 'tss-react/mui'
import "@fontsource/poppins";

const useStyles = makeStyles()((theme) => ({
    gridMain: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: { 
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            },
    },
    select:{
        width: '24vw',
        height: '5vh',
        marginLeft: '5%',
        color:'#667085',
        fontFamily: 'Poppins',
        fontSize: '14px',
        [theme.breakpoints.down('sm')]: {  
            width: '80vw',
            marginLeft: '10vw',
            marginRight: '10vw',
            color:'#667085'
            },
            
    },
    menuItem: {
        '& MuiMenuItem-root':{fontFamily: 'Poppins', color:'red'}
    },
    label:{ 
        fontFamily: 'Poppins',
        marginLeft: '5%',
        color:'#333333',
        textAlign: 'left',
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: '24px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10%',
            },
        }
}))

export default useStyles