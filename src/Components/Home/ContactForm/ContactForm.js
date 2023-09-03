import React, { useState } from 'react'
import ControlMUItextField from '../../Customs/ControlMUItextField';
import { useForm } from 'react-hook-form';
import FormButton from '../../Customs/FormButton';
import { Typography, Paper, Collapse, Container, Box } from '@mui/material'
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import contact from '../../../asset/img/contact.svg'
import { send } from 'emailjs-com';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import axios from 'axios'

import { enqueueSnackbar } from 'notistack';
import ButtonLoading from '../../Customs/loading/LoadingButon';
import SectionWrapper from '../../Layouts/SectionWrapper';

const PREFIX = 'ContactUs';
const classes = {
    spacing: `${PREFIX}-spacing`,
    mainGrid: `${PREFIX}-mainGrid`,
    paper: `${PREFIX}-paper`,
    form: `${PREFIX}-form`,
    instructions: `${PREFIX}-instructions`,
    avatar: `${PREFIX}-avatar`,
    ListItemText: `${PREFIX}-ListItemText`,
    iconBackground: `${PREFIX}-iconBackground`,
};
const Root = styled('div')((
    {
        theme
    }
) => ({
    [`& .${classes.spacing}`]: {
        width: "50%",
        margin: theme.spacing(2, 0, 0, 0),
    },
    [`& .${classes.form}`]: {
        width: "100%",
        display: "flex"
        // [theme.breakpoints.up('md')]: {
        //     maxWidth: "405px"
        // },
    },
    [`& .${classes.instructions}`]: {
        width: "90%",
        margin: 0,
        color: "#fff",
        padding: theme.spacing(5, 1),
        backgroundColor: theme.palette.primary.light,
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(7, 3),
            maxWidth: "380px",
        },
    },

    [`& .${classes.mainGrid}`]: {
        position: "relative",
        width: "100%",
        margin: theme.spacing(0),
        padding: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            flexDirection: "column",
            "& .instructions": {
                margin: 0
            }
        },
    },
    [`& .${classes.avatar}`]: {
        height: "30px",
        width: "30px"
    },
    [`& .${classes.ListItemText}`]: {
        opacity: 0.6,
        fontSize: '1rem',
        '@media (min-width:600px)': {
            fontSize: '1rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2rem',
        },
    },
    [`& .${classes.iconBackground}`]: {
        height: "35px",
        width: "35px",
        background: theme.palette.primary.light,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: theme.spacing(1),
        marginRight: theme.spacing(2),
    },
}))
export default function ContactForm() {
    const {
        handleSubmit,
        control,
        formState,
    } = useForm();
    const { errors } = formState;
    // const [sendBefore, setSendBefore] = useState(localStorage.getItem("sendBefore"));
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        setLoading(true)
        console.log(data);
        send(
            'service_a2qhbkf',
            'template_6yil7fe',
            data,
            '3MRu-SjkSc1Mx-NWK'
        )
            .then((response) => {
                // setSendBefore("ok")
                setLoading(false)
                localStorage.setItem("sendBefore", "ok")
                enqueueSnackbar("Your Email was sent.", {
                    variant: "success",
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left",
                    },
                    TransitionComponent: Collapse,
                });
            })
            .catch((err) => {
                setLoading(false)
                enqueueSnackbar("Your Request Failed Try Again Leter.", {
                    variant: "error",
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left",
                    },
                    TransitionComponent: Collapse,
                });
            });
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Root id='contactMe'>
                <SectionWrapper title={"Contact Me"} background={"#fafafa"}>
                    <Container>
                        {/* <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            className={clsx(classes.mainGrid)git }
                            spacing={2}
                        > */}
                        <Paper container spacing={2} component={Grid} className={clsx(classes.spacing, classes.form)}>
                            <Grid item md={6} xs={12}>
                                <Grid
                                    container
                                    justifyContent="center"
                                    alignItems="center"
                                    // className={clsx(classes.mainGrid)}
                                    spacing={2}
                                >
                                    <Grid
                                        justifyContent="space-between"
                                        xs={12}
                                        sx={{ display: "flex", flexWrap: "wrap" }}
                                    >
                                        <Typography variant="h4">Get in touch !</Typography>
                                    </Grid>

                                    {/* <Grid xs={12} alignItems="flex-start">
                                        <ControlMUItextField
                                            control={control}
                                            errors={errors}
                                            name={"firstName"}
                                            label="First Name"
                                            variant="outlined"
                                            rules={{ required: "field Is Required" }}
                                        />
                                    </Grid> */}

                                    <Grid xs={12} alignItems="flex-start">
                                        <ControlMUItextField
                                            control={control}
                                            errors={errors}
                                            name={"name"}
                                            label="Your Name"
                                            variant="outlined"
                                            rules={{ required: "field Is Required" }}
                                        />
                                    </Grid>
                                    <Grid xs={12} alignItems="flex-start">
                                        <ControlMUItextField
                                            control={control}
                                            errors={errors}
                                            name={"email"}
                                            label="Email"
                                            variant="outlined"
                                            rules={{ required: "field Is Required" }}
                                        />
                                    </Grid>
                                    <Grid xs={12} alignItems="flex-start">
                                        <ControlMUItextField
                                            control={control}
                                            errors={errors}
                                            name={"phone"}
                                            label="mobile"
                                            variant="outlined"
                                            rules={{ required: "field Is Required" }}
                                        />
                                    </Grid>
                                    <Grid xs={12} alignItems="flex-start">
                                        <ControlMUItextField
                                            control={control}
                                            errors={errors}
                                            label="How we can help you?"
                                            name={"message"}
                                            variant="outlined"
                                            rows={3}
                                            rules={{ required: "field Is Required" }}
                                        />
                                    </Grid>
                                    <Grid xs={12}>
                                        <FormButton>
                                            {loading ? <ButtonLoading /> : "send email"}
                                        </FormButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Grid
                                    container
                                    justifyContent="center"
                                    alignItems="center"
                                    // className={clsx(classes.mainGrid)}
                                    spacing={2}
                                >
                                    <Grid item xs={12} textAlign={"center"}>
                                        <img src={contact} alt='' height={200} />
                                    </Grid>
                                    <Grid item xs={12} textAlign={"center"}>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: "8px" }}>
                                            <Box className={classes.iconBackground}>
                                                <SmartphoneIcon />
                                            </Box>
                                            <Box>
                                                <Typography variant='h6'>+201157143609</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <Box className={classes.iconBackground}>
                                                <MailOutlineIcon />
                                            </Box>
                                            <Box>
                                                <Typography variant='h6'>mamdouh.mohammed919@gmail.com</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        {/* <Paper container component={Grid} className={clsx(classes.spacing, classes.instructions)}>
                            <Grid
                                justifyContent="space-between"
                                xs={12}
                                sx={{ display: "flex", flexWrap: "wrap" }}
                            >
                                <Typography variant="h5">What Happens Next?</Typography>
                                <List sx={{ width: '100%', maxWidth: 360 }}>
                                    {contactData.map((ele) =>
                                        <ListItem key={ele.id}>
                                            <ListItemAvatar>
                                                <Avatar className={classes.avatar}>
                                                    {ele.id}
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={ele.text} className={classes.ListItemText} />
                                        </ListItem>
                                    )}
                                </List>
                            </Grid>
                        </Paper> */}
                        {/* </Grid> */}
                    </Container>
                </SectionWrapper>
            </Root>
        </form>
    )
}
