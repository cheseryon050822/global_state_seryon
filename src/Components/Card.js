import React from'react';
import {makeStyles}from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root:{
        minWindh:275,
        width:300,
        border:'1px solid #ccc',
        margin:'0px'
    },
bullet:{
    display:'inline=block',
    margin:'0 2px',
    transfrom:'scale(0.8)',
},
title:{
    fontSize:0,
},
pos:{
    marginBottom:6,
},
});
export default function SimpleCard({user}){
    const classes=useStyles();
    console.log(user)

    return(
        <Card className={classes.root}>
            <CardContent>
            <Typography className={classes.title}
            color="textSecondary" gutterBottom>
                ID:{user.id}
            </Typography>
            <Typography variant="h5"component="h2">
                Name:{user.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                NickName:{user.username}
            </Typography>
            <Typography  variant="body2"component="p">
                email:{user.email}
            </Typography>
            <Typography variant="body2"component="p">
                zip-code:{user.name}
            </Typography>
            </CardContent>
        </Card>
    );
}