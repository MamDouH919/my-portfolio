import { Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react'
import { styled } from '@mui/material/styles';
import config from '../../config.json'
import clsx from 'clsx'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './footerStyle.css'
import { BiCopyright } from 'react-icons/bi'
import { FiGithub } from 'react-icons/fi';

const PREFIX = 'FooterSection';

const classes = {
    background: `${PREFIX}-background`,
    container: `${PREFIX}-container`,
};

const Root = styled('div')((
    {
        theme
    }
) => ({
    background: '#80808024',
    [`& .${classes.background}`]: {
        margin: 0,
        "& li a": {
            "&:hover": {
                background: theme.palette.primary.main,
                color: theme.palette.common.white,
            },
        },
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'
        },
    },
    [`& .${classes.container}`]: {
        // padding: theme.spacing(2,0),
        [theme.breakpoints.down('sm')]: {
            // padding: theme.spacing(0, 2),
            // flexDirection: "column"
        },
        [`& .info`]: {
            display: "flex",
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                justifyContent: 'center'
            },
        },
        [`& .social`]: {
            [theme.breakpoints.down('sm')]: {
                justifyContent: "center"
            },
        },
    },
}));
export default function Footer() {
    return (
        <Root>

            <Container className={classes.container}>
                <Grid container spacing={2} >
                    <Grid item xs={12} lg={8} className='info'>
                        <BiCopyright />
                        <Typography ml={1} >All rights reserved to {config.siteName} 2023</Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <ul className={clsx(classes.background, "d-flex social")}>
                            {config.facebook && (
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={config.facebook}
                                    >
                                        <FaFacebookF />
                                    </a>
                                </li>
                            )}
                            {config.linkedIn && (
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={config.linkedIn}
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                </li>
                            )}
                            {config.twitter && (
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={config.twitter}
                                    >
                                        <FaTwitter />
                                    </a>
                                </li>
                            )}
                            {config.github && (
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={config.github}
                                    >
                                        <FiGithub />
                                    </a>
                                </li>
                            )}
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </Root >
    )
}
