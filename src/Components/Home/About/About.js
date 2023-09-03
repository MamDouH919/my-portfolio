import { Box, Button, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'
import { styled } from '@mui/material/styles';
import Wave from "../../../asset/img/wave-bottom-1.svg"
import Dots from "../../../asset/img/dot.png"
import AboutImage from "../../../asset/img/about.png"
// import './Hero.css'
import { socials, about, experience } from './data';
import SectionWrapper from '../../Layouts/SectionWrapper';
import clsx from 'clsx';

const PREFIXCOLOR = "#333";
const PREFIX = 'About';
const classes = {
    aboutPaper: `${PREFIX}-aboutPaper`,
    wave: `${PREFIX}-wave`,
    aboutDetails: `${PREFIX}-aboutDetails`,
    title: `${PREFIX}-title`,
    subTitle: `${PREFIX}-subTitle`,
    iconWrapper: `${PREFIX}-iconWrapper`,
    aboutWrapper: `${PREFIX}-aboutWrapper`,
    aboutProp: `${PREFIX}-aboutProp`,
    aboutValue: `${PREFIX}-aboutValue`,
    experienceWrapper: `${PREFIX}-experienceWrapper`,
    experienceBG: `${PREFIX}-experienceBG`,
};
const Root = styled('div')((
    {
        theme
    }
) => ({
    [`& .${classes.aboutPaper}`]: {
        position: "relative",
        zIndex: 1,
        // background: "linear-gradient(0deg, #f4f5fa, transparent)",
        // [theme.breakpoints.down('md')]: {
        //     textAlign: "center"
        // },
    },
    [`& .${classes.wave}`]: {
        position: "absolute",
        bottom: "-86px",
        width: "100%",
        zIndex: 2,
        [theme.breakpoints.down('md')]: {
            display: "none"
        },
    },
    [`& .${classes.aboutDetails}`]: {
        position: "relative",
        zIndex: 3,
        "& img": {
            [theme.breakpoints.down('md')]: {
                width: '60%',
            },
        }
    },
    [`& .${classes.title}`]: {
        marginBottom: theme.spacing(2),
        // fontWeight: 600,
        color: `${PREFIXCOLOR}`,
        lineHeight: 1.5,
    },
    [`& .${classes.subTitle}`]: {
        marginBottom: theme.spacing(2),
        textAlign: "left",
        fontSize: '1rem',
        color: `${PREFIXCOLOR}`,
        '@media (min-width:600px)': {
            fontSize: '1rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '0.9rem',
        },
    },
    [`& .${classes.iconWrapper}`]: {
        border: `1px solid ${theme.palette.grey[500]}`,
        marginRight: theme.spacing(1),
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        color: theme.palette.grey[500],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    [`& .${classes.aboutWrapper}`]: {
        display: "flex",
        // alignItems: "center",
        [theme.breakpoints.down('md')]: {
            justifyContent: "center"
        },
    },
    [`& .${classes.aboutProp}`]: {
        width: "168px",
        paddingRight: theme.spacing(1)
    },
    [`& .${classes.aboutValue}`]: {
        width: "168px",
        paddingLeft: theme.spacing(1),
        // opacity: 0.7,
        color: theme.palette.primary.light
    },
    [`& .${classes.experienceWrapper}`]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: theme.spacing(8),
    },
    [`& .${classes.experienceBG}`]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: theme.shadows[2],
        padding: theme.spacing(1, 2),
        margin: theme.spacing(1),
        background: "white",
        borderRadius: theme.spacing(1),
        // width: "168px",
    },
}));
export default function About() {
    return (
        <Root id='aboutMe'>
            <SectionWrapper title={"Personal Details"} background={"linear-gradient(0deg, #f4f5fa, transparent)"}>
                <Box className={classes.aboutPaper}>
                    <div className={classes.wave}>
                        <img src={Wave} alt='wave' />
                    </div>
                    <Container sx={{ position: "relative", zIndex: 5 }}>
                        <Grid container spacing={3} justifyContent='center' alignItems="flex-start" sx={{ position: "relative", zIndex: 5 }}>
                            <Grid xs={12} md={7} item className={classes.aboutDetails}>
                                <Typography variant='h5' className={classes.title}>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </Typography>
                                <Box sx={{ display: "flex" }}>
                                    {socials.map((el) => <Box className={classes.iconWrapper} key={el.id}><el.icon fontSize={"16px"} /></Box>)}
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                {about.map((el) =>
                                    <Box className={classes.aboutWrapper}>
                                        <Typography variant='h6' className={classes.aboutProp}>
                                            {el.prop}
                                        </Typography>
                                        <Typography variant='h5'>
                                            :
                                        </Typography>
                                        <Typography variant='h5' className={classes.aboutValue}>
                                            {el.value}
                                        </Typography>
                                    </Box>
                                )}
                            </Grid>
                        </Grid>
                        <Box className={classes.experienceWrapper}>
                            {experience.map((el) =>
                                <Box className={classes.experienceBG}>
                                    <Box sx={{ display: "flex", mr: 2 }}>
                                        <img width={30} alt='' src={el.img} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: "column", mx: 1 }}>
                                        <Typography variant='h6' sx={{ textTransform: "capitalize" }}>{el.name}</Typography>
                                        <Typography variant='subtitle2' sx={{ opacity: 0.8 }}>{el.experience}</Typography>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </Container>
                </Box>
            </SectionWrapper>
        </Root>
    )
}
