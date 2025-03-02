import './MainStyles.scss'
import MainPage from './Main/MainPage'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SigninPage from './Authorization/SigninPage'
import SignupPage from './Authorization/SignupPage'
import PlayPage from './Play/PlayPage'
import ProfilePage from './Profile/Profile'
import NotFoundPage from './NotFoundPage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <MainPage /> } />
        <Route path='/signin' element={ <SigninPage /> } />
        <Route path='/signup' element={ <SignupPage /> } />
        <Route path='/play' element={ <PlayPage /> } />
        <Route path='/profile' element={ <ProfilePage /> } />
        <Route path='/*' element={ <NotFoundPage /> } />
      </Routes>
      {/* <ResponsiveDrawer /> */}
    </BrowserRouter>
  )
}

export default App
