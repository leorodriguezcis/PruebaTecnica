import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
    gridMain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {    
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            },
    }
}))

export default useStyles