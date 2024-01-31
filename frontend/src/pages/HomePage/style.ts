import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
    gridMain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: { 
            maxHeight: '80vh',
            },
    },
    gridTable: {
        display: "flex",
        marginTop: '2%',
        [theme.breakpoints.down('sm')]: {
            height: '75%', 
            paddingTop: '5%',
            paddingLeft: '5%',
            paddingRight: '5%',
            },
    }
}))

export default useStyles
