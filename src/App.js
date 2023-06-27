import './App.css';
import Allproducts from './pages/allproducts/products';
import Head from './pages/home/Home';
import { Fragment } from 'react';
import Layout from './component/layout';
import {createBrowserRouter,createRoutesFromElements , Route,RouterProvider} from 'react-router-dom' ;
const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element ={<Layout/>}> 
    <Route path='/' element = {<Head/>}/>
    <Route path='/products' element = {<Allproducts/>}/>

   

  </Route>
))
function App() {
  return (
    <Fragment>
      <RouterProvider router={routes} />
    
   </Fragment>
  );
}

export default App;
