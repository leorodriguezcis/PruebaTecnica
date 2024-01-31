import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
    header: {
        height: '100%',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'start',
    },
    img:{
        width: '100%',
        maxHeight: '300px',
        [theme.breakpoints.down('sm')]: {
            maxHeight: '180px',
            width: '100vw',
            height: '206px',
        },
    },
    typography:{
        marginBottom: '-60px',
        position: 'relative',
        width: '100%',
        textAlign: 'center',
        fontFamily: 'Poppins',
        top: '-100px',
        color: 'white',
        fontSize: '48px',
        lineHeight: '72px',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '-8px',
            position: 'relative',
            width: '100%',
            textAlign: 'center',
            fontFamily: 'Poppins',
            top: '-80px',
            color: 'white',
            fontSize: '24px',
            lineHeight: '28px',
            fontWeight: 'bold',
            },
    }
}));

export default useStyles;
