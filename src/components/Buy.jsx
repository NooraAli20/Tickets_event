import React from 'react'
import { Grid, Typography, makeStyles, Link } from '@material-ui/core'
import { useParams } from 'react-router-dom';
import { Link as Lenk}  from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    
    eventTime:{
        fontWeight: 'bolder',
        textAlign:'center',
        fontSize:'20px',
        color: 'rgb(55,174,171)'
    },
    price:{
        fontWeight:'600',
        fontSize:'50px',
        textAlign:'center',
        fontFamily:'Fira Sans',
        color:'white',
        padding:'60px',
        marginBottom:'60px',
        marginTop:'60px',
        textShadow: '1px 1px 0px #F56B9A'
    },
    place:{
        fontWeight:'600',
        textAlign:'center',
        fontFamily:'Fira Sans',
        color:'rgb(189,188,198)'
        
    },
    artistName:{
        fontWeight:'bold', 
        fontSize:'40px', 
        color:'rgb(244,108,153)',
        fontStyle:'italic',
        fontFamily:'Sansita'
    }
}));

export default function Buy() {

    const classes = useStyles();

    let eventsCollection = require('../assets/evanemang');

    let { id } = useParams();
    
    const se = eventsCollection.filter(x => x.id == id)[0];

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
                            <div style={{ color:'white', padding:'40px', fontSize:'20px', textAlign:'center'}}>
                                <div>You are about to score</div>
                                <div>some tickets to</div>
                            </div>
                            <div>
                                <span className={classes.artistName}>{se.artist}</span>
                            </div>
                            <div className={classes.eventTime}>
                                {se.datum + ' ' + se.manad.toLowerCase() + ' kl ' +se.start + ' - ' + se.end}
                            </div>
                            <div className={classes.place}>
                                {'@' + ' ' + se.place}
                            </div>
                            <div className={classes.price}>
                                {se.price}
                            </div>
                            <div>
                                <Lenk to={'../tickets/' + id }>
                                    <Link 
                                        component="button"
                                        underline='none'
                                        style={{ 
                                            backgroundColor: 'rgb(55,174,171)', 
                                            color:'white',
                                            fontWeight:'bolder',
                                            fontSize:'30px',
                                            width:'100%',
                                            height:'100px',
                                            borderRadius:'8px',
                                            textTransform: 'none'}} >
                                        Beställ
                                    </Link>
                                </Lenk>
                            </div>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={1} sm={3}></Grid>
        </Grid>
    )
}
