import {  Grid, makeStyles, Typography, Box, TextareaAutosize} from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    
    root :{
        '& .MuiTypography-root':{
            display: 'flex',
            alignItems: 'center'
        }
    },
    alignItemsAndJustifyContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        alignItems:'bottom',
        padding:theme.spacing(1),
        border:'solid white 1px',
        height:'80%'
    },
    hash:{
        display: 'flex',
        justifyContent : 'space-between',
        marginBottom:'8px'
    },
    price:{
        color:'rgb(55,174,171)',
        fontWeight:'bolder',
        fontSize:'18px',
    },
    place:{
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign:'left',
        fontSize:'12px',
        color: 'rgb(208,208,208)'
    },
    artistName:{
        fontWeight:'600',
        fontSize:'22px',
        textAlign:'left',
        fontFamily:'Fira Sans',
        color:'white',
        textShadow: '1px 1px 0px #F56B9A'
    },
    dateAndMonth:{
        margin:TextareaAutosize,
        fontWeight:'bolder',
        fontSize:'16px',
        color: 'rgb(208,208,208)'
    },
    eventTime:{
        fontWeight: 'bolder',
        textAlign:'left',
        color: 'rgb(208,208,208)'
    }
}));

export default function Event({ singleEvent }) {

    const [params, setParams] = useState('');
    const classes = useStyles();

    useEffect(() =>{
        setQueryString();
    });

    const setQueryString = () => {
        setParams("/buy/" + singleEvent.id)
    }

    return (
        <Grid item container spacing={5}>
            <Grid item  xs={4} ms={4} >
                <Box border={1} className={classes.alignItemsAndJustifyContent} alignItems="stretch"> 
                    <Typography component={'span'}>
                        <span className={classes.dateAndMonth}>
                            <div>{singleEvent.datum}</div>
                            <div>{singleEvent.manad}</div>
                        </span>
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={8} ms={4}  >
                <Box borderBottom={1} style={{ borderBottom:'solid 1px rgb(100,98,123)'}}>
                    <Typography component={'span'}>
                        <div className={classes.artistName}>
                            <Link to={params}>{singleEvent.artist}</Link>
                        </div>
                        <div className={classes.place}>{singleEvent.place}</div>
                        <div className={classes.hash}>
                            <span className={classes.eventTime}> 
                                {singleEvent.start + ' - ' + singleEvent.end}
                            </span>
                            <span className={classes.price}> 
                                {singleEvent.price}
                            </span>
                        </div>
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}
