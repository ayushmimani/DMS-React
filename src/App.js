import About from './About';
import './App.css';
import Contact from './component/Contact';
import Header from './component/Header';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import MainContainer from './component/MainContainer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './component/Body';


function App() {

  const systemrouter = createBrowserRouter([{
    path:'/',
    element: <Body/>,
    children:[
      {
        path:'/',
        element:<MainContainer/>
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
       <Navbar/>
       <RouterProvider router={systemrouter}/>
       <Footer/>

    
    </div>
  );
}

export default App;
