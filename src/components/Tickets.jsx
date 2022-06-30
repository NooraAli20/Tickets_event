import React from 'react'
import { useParams } from 'react-router-dom';
import { Grid, Typography, makeStyles, Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    
    thankYou:{
        fontWeight:'bold', 
        fontSize:'40px', 
        color:'rgb(244,108,153)',
        fontStyle:'italic',
        fontFamily:'Sansita',
        padding:'15px 0 15px 0'
    },
    artistName:{
        fontWeight:'bold', 
        fontSize:'30px', 
        color:'rgb(244,108,153)',
        fontStyle:'italic',
        fontFamily:'Sansita',
        display:'flex',
        padding:'15px 0 20px 0'
    },
    recapLetters:{
        color:'rgba(0, 0, 0, 0.4)',
        fontFamily: 'Fira Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '13px',
        lineHeight: '12px',
        margin: '8px 0px 0px 0px',
        display: 'flex'
    },
    placeLetters:{
        fontFamily: 'Fira Sans',
        fontWeight: '600',
        fontStyle: 'normal',
        fontSize: '18px',
        lineHeight: '21.6px',
        display: 'flex',
        color: 'rgba(0, 0, 0, 0.7)',
        padding:'10px 0 10px 0'

    }, 
    boxWrapper:{
        backgroundColor:'white', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        borderRadius:'5px',
        padding: ''
    },

    secondBox: {
        backgroundColor:'rgba(0, 0, 0, 0.03)',
        borderStyle: 'dashed none dashed none', 
        borderColor:'rgba(0, 0, 0, 0.4)',
        padding:'5px 0 80px 15px'
    }, 


    thirdBox:{ 
        backgroundColor:'rgba(0, 0, 0, 0.08)', 
        display:'flex', 
        flexDirection: 'row', 
        justifyContent:'space-evenly', 
        margin:'-6px 0 -6px 0', 
        borderColor:'rgba(0, 0, 0, 0.4)',
        borderStyle: 'none none dashed none',
        padding: '5px'

    },

    dateTime:{
        fontFamily: 'Fira Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '18px',
        lineHeight: '22px',
        color:' rgba(0, 0, 0, 0.6)',
        padding: '15px 0 15px 0'
    }


}));

export default function Tickets() {

    const classes = useStyles();

    let eventsCollection = require('../assets/evanemang');

    let { id } = useParams();
    const se = eventsCollection.filter(x => x.id == id)[0];

    console.log(id);
    console.log(se);

    return (
        <Grid container spacing={2}>
            <Grid item xs={1} sm={3}></Grid>
            <Grid item container xs={10} sm={6} justify='center'>
                <Grid item container spacing={10}>
                    <Grid item container 
                            align="center"
                            justify="center"
                            direction="column" style={{textAlign:'center'}}>
                        <Typography component={'span'}>
                            <div className={classes.thankYou}>
                                <div>Tack för din <br></br>beställning</div>
                            </div>
                        </Typography> 
                        <Box className={classes.boxWrapper}>
                             <div style={{padding:'5px 0 10px 15px'}}>
                                <p className={classes.recapLetters}>What</p>
                                <div className={classes.artistName}>{se.artist}</div>
                             </div>   
                             <div  className={classes.secondBox}>
                                <p className={classes.recapLetters}>Where</p>
                                <div className={classes.placeLetters}>{se.place}</div>
                            </div>
                            <div  className={classes.thirdBox}>
                               <div>
                                    <p className={classes.recapLetters}>When</p>
                                    <div className={classes.dateTime}>{se.datum + ' ' + se.manad}</div>
                                </div>

                                <div style={{borderColor:'rgba(0, 0, 0, 0.4)',borderStyle: 'none dashed none dashed', padding: '0 15% 0 15%'}}>
                                     <p className={classes.recapLetters}>From</p>
                                     <div className={classes.dateTime}>{se.start}</div>
                                </div>
                                <div>
                                    <p className={classes.recapLetters}>To</p>
                                    <div className={classes.dateTime}>{se.end}</div>

                                </div>

                            </div>

                            
                            
                        </Box> 
                       
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={1} sm={3}></Grid>
        </Grid>
    )
}
