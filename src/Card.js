import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Container = styled.div`
width:360px;
margin-bottom:45px;
cursor:pointer;
`

const Image = styled.img`
width:100%;
height:202px;
background-color:#999;

`

const Details = styled.div`
display:flex;
margin-top:16px
`

const ChannelImage  = styled.img`
width:36px;
height:36px;
border-radius:50%;
background-color:#999`

const Texts = styled.div`
padding:0px 5px;
`
const Title = styled.h1`
font-size:12px;
font-weight:500;
color:${({theme})=>theme.text}

`
const ChannelNme = styled.h2`
font-size:14px;
color:${({theme})=>theme.textSoft}
margin:10px 0;
`
const Info = styled.div`
font-size:14px;
`

const Card = () => {
  return (
    <Link to="/video/test" style={{textDecoration:'none'}}>
    <Container>
      <Image src="https://img.freepik.com/free-vector/realistic-ice-text-effect_23-2149763489.jpg"/>
    <Details>
        <ChannelImage src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"/>
        <Texts>
            <Title>
             Test Video
            </Title>
            <ChannelNme>Ma Video</ChannelNme>
            <Info>660,908 views 1 day ago</Info>
        </Texts>
    </Details>
    </Container>
    </Link>
  )
}

export default Card