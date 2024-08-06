import React from 'react'
import styled from 'styled-components'
import MamaTube from '../src/img/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import HelpIcon from '@mui/icons-material/Help';
import LightModeIcon from '@mui/icons-material/LightMode';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

const Container = styled.div`
flex:1;
background-color:${({theme})=>theme.bg};
height:100vh;
color:${({theme})=>theme.text}; 
font-size:12px;
position:sticky;
top:0;
`
const Wrapper = styled.div`
padding:18px 26px;
`
const Logo = styled.div`
display:flex;
align-items:center;
gap:5px;
font-weight:bold;
margin-bottom:25px;
`
const Img = styled.img`
height:25px
`

const Login = styled.div`
`
const Button = styled.button`
padding:5px 15px;
background-color:transparent;
border:1px solid #3ea6ff;
color: #3ea6ff;
font-weight:500;
margin-top:10px;
display:flex;
align-items:center;
gap:5px
`

const Hr = styled.hr`
margin:10px 0px;
border: 0.5px solid ${({theme})=>theme.soft};
`

const Items = styled.div`
display:flex;
align-items:center;
gap:20px;
cursor:pointer;
padding:3.5px 0px; 
// height:18px
`

const Title = styled.h2`
font-size:12px;
font-weight:500;
color:#aaaaaa;
margin-bottom:10px
<Title>
`

const Menu = ({darkMode,setDarkMode}) => {
  return (
    <Container>
        <Wrapper> 
        <Link to="/" style={{textDecoration:'none', color:'inherit'}}>
            <Logo>
            <Img src={MamaTube}/>
             MaTube
        </Logo>
        </Link>
        <Items>
            <HomeIcon/>
            Home
        </Items>
        <Items>
            <ExploreIcon/>
            Explore
        </Items>
        <Items>
            <SubscriptionsIcon/>
            Subscriptions
        </Items>
        <Hr/>
        <Items>
            <LibraryAddIcon/>
            Library
        </Items>
        <Items>
            <HistoryIcon/>
            History
        </Items>
        <Hr/>
        <Login>
            Sign in to like videos,comment,and subscribe.
            <Button><AccountCircleIcon/>SIGN IN</Button>
        </Login>
        <Hr/>
        <Title>BEST OF MATUBE</Title>
        <Items>
            <LibraryMusicIcon/>
            Music
        </Items>
        <Items>
            <SportsTennisIcon/>
            Sports
        </Items>
        <Items>
            <SportsEsportsIcon/>
            Gaming
        </Items>
        <Items>
            <MovieCreationIcon/>
            Movies
        </Items>
        <Items>
            <NewspaperIcon/>
            News
        </Items>
        <Items>
            <LiveTvIcon/>
            Live
        </Items>
        <Hr/>
        <Items>
            <SettingsIcon/>
            settings
        </Items>
        <Items>
            <ReportIcon/>
            Report
        </Items>
        <Items>
            <HelpIcon/>
            Help
        </Items>
        <Items onClick={()=>setDarkMode(!darkMode)}>
            <LightModeIcon/>
            Light Mode
        </Items>
        </Wrapper>
       
    </Container>
  )
}

export default Menu