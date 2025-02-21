import React, { useState } from 'react';
import styled,{ThemeProvider} from 'styled-components';
import Menu from './Menu';
import Navbar from './Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { darkTheme, lightTheme } from './Utils/Theme';
import Home from './Pages/Home'
import Videos from './Pages/Videos';

const Container = styled.div`
display:flex; 
background-color:#181818
`;

const Main = styled.div`
flex:7;
background-color:${({theme})=>theme.bg}
`;
const Wrapper = styled.div`
padding:22px 96px
`;

const App = () => {
  const[darkMode,setDarkMode] = useState(true)
  return (
   <ThemeProvider theme={darkMode ? darkTheme : lightTheme
   }>
    <Container>
      <BrowserRouter>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Main>
       <Navbar/>
       <Wrapper>
        <Routes>
          <Route Path='/'></Route>
          <Route index element={<Home/>}></Route>
          <Route path="video">
                    <Route path=":id" element={<Videos />} />
                  </Route>
        </Routes>
       </Wrapper>
      </Main>
      </BrowserRouter>
    </Container>
 
   </ThemeProvider>
  )
}

export default App