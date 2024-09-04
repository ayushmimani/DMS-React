import About from './About';
import './App.css';
import Contact from './component/Contact';
import Header from './component/Header';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import MainContainer from './component/MainContainer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './component/Body';
import  Form  from './component/Form';
import LoginForm from './component/Loginform';


function App() {

  const systemrouter = createBrowserRouter([
    {
      path:'/login',
      element:<LoginForm/>
    },
    {
    path:'/',
    element: <Body/>,
    children:[
      {
        index: true, 
        element:<MainContainer/>
      },
      {
        path: '/adduser', 
        element:   <Form/>
      },
      {
      path:'/about',
      element:<About/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
  ]
  }])

  return (
    <div className="">
       <Header/>
       
       <RouterProvider router={systemrouter}>
       </RouterProvider>
       <Footer/>

    
    </div>
  );
}

export default App;
