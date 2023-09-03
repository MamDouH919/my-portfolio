import { Box, Button, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'
import { styled } from '@mui/material/styles';
import Banner from "../../../asset/img/banner-bg.jpg"
import Dots from "../../../asset/img/dot.png"
import BannerImage from "../../../asset/img/home-font.png"
import cv from "../../../asset/files/Mamdouh-Mohammed.pdf"
import './Hero.css'
import { data } from './data';

const PREFIX = 'Hero';
const classes = {
    root: `${PREFIX}-root`,
    heroPaper: `${PREFIX}-heroPaper`,
    subTitleHero: `${PREFIX}-subTitleHero`,
    detailsHero: `${PREFIX}-detailsHero`,
    imgHero: `${PREFIX}-imgHero`,
    dots: `${PREFIX}-dots`,
    heroTitle: `${PREFIX}-heroTitle`,
};
const Root = styled('div')((
    {
        theme
    }
) => ({
    [`& .${classes.heroPaper}`]: {
        display: "flex",
        minHeight: "660px",
        padding: theme.spacing(15, 4),
        height: "100%",
        // backgroundColor: "gray",
        background: "linear-gradient(0deg, #9b9797, #2f3863)",
        // backgroundImage: `url(${Banner})`,
        position: "relative",
        width: "100%",
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(6, 1),
        },
    },
    [`& .${classes.heroTitle}`]: {
        marginBottom: theme.spacing(0),
        fontWeight: 600,
        lineHeight: 1.2,
        // [theme.breakpoints.down('md')]: {
        //     fontSize: "30px",
        // },
        // [theme.breakpoints.down('sm')]: {
        //     fontSize: "30px",
        // },
    },
    [`& .${classes.detailsHero}`]: {
        position: "relative",
        zIndex: 4,
        // [theme.breakpoints.down('md')]: {
        textAlign: "center"
        // },
    },
    [`& .${classes.dots}`]: {
        position: "absolute",
        right: 0,
        top: 0,
        width: "400px",
        height: "100%",
        opacity: 0.5,
        backgroundImage: `url(${Dots})`,
    },
    [`& .${classes.imgHero}`]: {
        display: "flex",
        justifyContent: "center",
        position: "relative",
        zIndex: 4,
        animation: "bounce 3s infinite ease-in-out",
        [theme.breakpoints.down('md')]: {
            textAlign: "center"
        },
    },
    [`& .${classes.subTitleHero}`]: {
        color: theme.palette.primary.light,
        margin: theme.spacing(2, 0),
        textShadow: "1px 2px 3px #fafafa",
        // '@media (min-width:600px)': {
        //     fontSize: '1rem',
        // },
        // [theme.breakpoints.up('md')]: {
        //     fontSize: '0.9rem',
        // },
    },
}));
export default function Hero() {
    return (
        <Root>
            <Box className={classes.heroPaper} id="home">
                <Container>
                    <Grid container spacing={2} justifyContent='center' alignItems="center">
                        <Grid xs={12} md={6} item className={classes.detailsHero}>
                            <Typography variant='h6' color={"white"} className={classes.heroTitle}>
                                Hi I'm Mamdouh Mohammed
                            </Typography>
                            <Typography variant='h3' className={classes.subTitleHero} >
                                I'm a front-end developer
                            </Typography>
                            <a href={cv} download={"mamdouh-mohammed"}>
                                <Button variant="contained" size="large">Download CV</Button>
                            </a>
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.imgHero}>
                            <img src={BannerImage} alt='BannerImage' width={"80%"} />
                        </Grid>
                    </Grid>
                </Container>
                <div className={classes.dots}></div>
            </Box>
        </Root>
    )
}
