import { Route , Routes } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('../pages/HomePage'))
const Profile = lazy(() => import('../pages/ProfilePage'))
const SearchRooms = lazy(() => import('../pages/AvailableRooms'))
const HostelReview = lazy(() => import('../pages/HostelReviewPage'))
const SignIn = lazy(() => import('../pages/SignInPage'))
const LogIn = lazy(() => import('../pages/LogInPage'))


const routes = [
  { path: '/', element: <Home /> },
  { path: '/profile', element: <Profile />},
  { path: '/search-rooms', element: <SearchRooms />},
  { path: '/reviews', element: <HostelReview />},
  { path: '/sign-in', element: <SignIn/>},
  { path: '/log-in', element: <LogIn />}
]

const RouteConfig = () => {
  return (
    <Routes>{routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element} />
  ))}</Routes>)
}

export default RouteConfig