import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
// import SwiperBanner from '../Components/Customs/Swiper';
import Title from '../Components/Customs/Title/Title';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import homeData from "./homeData.json";
import { getIcon } from './svgIcons';
// import logo from '../asset/img/slide1.jpg'
import Hero from '../Components/Home/Hero/Hero';
import About from '../Components/Home/About/About';
import ContactForm from '../Components/Home/ContactForm/ContactForm';
import Features from '../Components/Home/Features/Features';
import VideoContainer from '../Components/Home/VideoContainer/VideoContainer';
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';
import Services from '../Components/Home/Services/Services';
import Projects from '../Components/Home/Projects/Projects';

const PREFIX = 'ContactForm';
const classes = {
    root: `${PREFIX}-root`,
    paper: `${PREFIX}-paper`,
    offer: `${PREFIX}-offer`,
    title: `${PREFIX}-title`,
    description: `${PREFIX}-description`,
    sliderContent: `${PREFIX}-sliderContent`,
    sliderContainer: `${PREFIX}-sliderContainer`,
    tabListContainer: `${PREFIX}-tabListContainer`,
    tab: `${PREFIX}-tab`,
    offerCard: `${PREFIX}-offerCard`,
    contact: `${PREFIX}-contact`,
    clientSuccess: `${PREFIX}-clientSuccess`,
};
const Root = styled('div')((
    {
        theme
    }
) => ({
    [`& .${classes.paper}`]: {
        // margin: theme.spacing(4, 0),
        padding: theme.spacing(8, 4),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(6, 1),
        },
    },
    [`& .${classes.contact}`]: {
        padding: theme.spacing(8, 0),
        position: "relative",
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(6, 0),
        },
        "&:before": {
            content: "''",
            position: "absolute",
            left: 0,
            top: 0,
            // backgroundImage: `url(${logo})`,
            backgroundPosition: "50%",
            backgroundSize: "cover",
            width: "100%",
            height: "350px",
        },
    },
    [`& .${classes.title}`]: {
        marginBottom: theme.spacing(4),
    },
    [`& .${classes.offer}`]: {
        backgroundColor: "#e0e0e0"
    },
    [`& .${classes.clientSuccess}`]: {
        backgroundColor: "#e0e0e0"
    },
    [`& .${classes.description}`]: {
        margin: theme.spacing(3, 0),
        opacity: 0.6,
        textAlign: 'center',
        fontSize: '1rem',
        '@media (min-width:600px)': {
            fontSize: '1rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2rem',
        },
    },
    [`& .${classes.sliderContainer}`]: {
        width: '100%',
        height: '600px',
        position: "relative"
    },
    [`& .${classes.sliderContent}`]: {
        position: 'absolute',
        top: "50%",
        transform: "translateY(-50%)",
        left: 20,
        width: "70%",
        color: "white",
        [theme.breakpoints.up('sm')]: {
            left: 100,
            width: "60%",
        },
        [theme.breakpoints.up('md')]: {
            width: "50%",
        },
        "& .title": {
            textTransform: "uppercase",
            fontSize: '1.6rem',
            '@media (min-width:600px)': {
                fontSize: '1.9rem',
            },
            [theme.breakpoints.up('md')]: {
                fontSize: '2rem',
            },
        },
    },
    [`& .${classes.tabListContainer}`]: {
        display: "flex",
        justifyContent: 'center',
        "& .MuiTabs-flexContainer": {
            justifyContent: "center"
        },
    },
    [`& .${classes.tab}`]: {
        borderBottom: 1,
        transition: "all 1s",
        borderColor: 'divider',
        width: "33%",
        fontSize: '0.8rem',
        '@media (min-width:600px)': {
            fontSize: '1rem',
            width: "30%",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2rem',
            width: "20%",
        },
        "&:hover": {
            color: theme.palette.primary.main,
            cursor: "pointer",
        },
    },
    [`& .${classes.offerCard}`]: {
        margin: "2px",
        "& .card": {
            transition: "all 0.5s",
            height: "190px",
            backgroundColor: "#fff",
            padding: theme.spacing(3, 2),
            "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
                cursor: "pointer",
            },
            "& .icon": {
                marginBottom: theme.spacing(2)
            },
            "& .icon svg": {
                display: "inline-block",
                width: "80px"
            },
            "& .icon img": {
                display: "inline-block",
                width: "80px"
            },
            "& .title": {
                fontWeight: 600,
                marginBottom: theme.spacing(1),
                lineHeight: 1.1
            },
            "& .description": {
                opacity: 0.6,
            },
            [theme.breakpoints.down('md')]: {
                height: "250px",
                textAlign: "center",
                padding: theme.spacing(1),
            },
        },
    },
}));

export default function Home() {
    // const slides = [
    //     {
    //         id: "1",
    //         title: "Blockchain Development",
    //         subTitle: "Maximize Efficiency and Security with Our Top-Notch Blockchain Development Services.",
    //         img: "slide1.jpg"
    //     },
    //     {
    //         id: "2",
    //         title: "Ai and Machine learning development",
    //         subTitle: "Elevate Your Business with Custom AI and Machine Learning Solutions.",
    //         img: "slide2.jpg"
    //     },
    //     {
    //         id: "3",
    //         title: "Web and mobile app Development",
    //         subTitle: "Innovative Web and Mobile Apps to Take Your Business to the Next Level.",
    //         img: "slide4.jpg"
    //     },
    // ]



    const [valueTab, setValueTab] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValueTab(newValue);
    };

    let servicesTab = null,
        // technologiesTab = null,
        industriesTab = null

    servicesTab = (
        <Grid container justifyContent={'center'}>
            {homeData.servicesTab.map((ele) =>
                <Grid key={ele.id} item xs={12} md={5} lg={3} className={classes.offerCard}>
                    <Grid container className='card'>
                        <Grid item xs={12} md={4}>
                            <div className='icon'>
                                {getIcon(0, ele.icon)}
                            </div>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <div className='title'>{ele.title}</div>
                            <div className='description'>{ele.description}</div>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </Grid>
    )
    // technologiesTab = (
    //     <Grid container justifyContent={'center'}>
    //         {homeData.technologiesTab.map((ele) =>
    //             <Grid key={ele.id} item xs={12} md={5} lg={5} className={classes.offerCard}>
    //                 <Grid container className='card'>
    //                     <Grid item xs={12} md={3}>
    //                         <div className='icon'>
    //                             {getIcon(0, ele.icon)}
    //                         </div>
    //                     </Grid>
    //                     <Grid item xs={12} md={9}>
    //                         <div className='title'>{ele.title}</div>
    //                         <div className='description'>{ele.description}</div>
    //                     </Grid>
    //                 </Grid>
    //             </Grid>
    //         )}
    //     </Grid>
    // )
    industriesTab = (
        <Grid container justifyContent={'center'}>
            {homeData.industriesTab.map((ele) =>
                <Grid key={ele.id} item xs={12} md={5} lg={3} className={classes.offerCard}>
                    <Grid container className='card'>
                        <Grid item xs={12} display={"flex"} flexDirection={'column'} justifyContent={"center"} alignItems={"center"}>
                            <div className='icon'>
                                {getIcon(0, ele.icon)}
                            </div>
                            <div className='title'>{ele.title}</div>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </Grid>
    )

    const GridTitle = (props) => {
        return (
            <Grid xs={12} {...props}>
                {props.children}
            </Grid>
        );
    };

    return (
        <Root>
            <Header />
            <Hero />
            <About />
            <Services />
            {/* <Features /> */}
            <VideoContainer />
            <Projects />
            {/* <Box className={clsx(classes.paper, classes.offer)} id='ourServices'>
                <Grid container spacing={2} justifyContent='center'>
                    <GridTitle item className={classes.title}>
                        <Title title={"what we offer"} />
                    </GridTitle>
                    <Grid item xs={12}>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={valueTab}>
                                <Box className={classes.tabListContainer}>
                                    <TabList sx={{ width: "100%" }} onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab className={classes.tab} label="services" value="1" />
                                        <Tab className={classes.tab} label="industries" value="3" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    {servicesTab}
                                </TabPanel>
                                <TabPanel value="3">{industriesTab}</TabPanel>
                            </TabContext>
                        </Box>
                    </Grid>
                </Grid>
            </Box> */}
            {/* <Box className={clsx(classes.paper, classes.clientSuccess)} id='clientSuccess'>
                <Grid container spacing={2} justifyContent='center' >
                    <GridTitle item >
                        <Title title={"client success"} />
                    </GridTitle>
                    <Grid item xs={12} md={10}>
                        <ClientSwiper />
                    </Grid>
                </Grid>
            </Box> */}
            <ContactForm />
            <Footer />
        </Root>
    )
}
