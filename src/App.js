import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Route,Routes} from 'react-router-dom'
import Dashboard from './componet/Dashboard'
import Header from './componet/Header'
import Sidebar from "./componet/Sidebar";
import Genre from './componet/Genre'
import Song from'./componet/Song'
import Alumb from './componet/Album'
import Artist from './componet/Artist'
import Subscription from './componet/Subscription'
import Ticket from './componet/Ticket'
import Chart from './componet/Chart'
import Newsong from './componet/Newsong'
import User from './componet/User'
function App() {
  return (
    <>
    <body>
    <Sidebar/>
    <div className="content">
    <Header/>
    {/* {process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE} */}
    <Routes>
       <Route exact path='/' element={<Dashboard/>}/>
       <Route exact path='/song' element={<Song/>}/>
       <Route exact path='/genre' element={<Genre/>}/>
       <Route exact path='/alumb' element={<Alumb/>}/>
       <Route exact path='/artist' element={<Artist/>}/>
       <Route exact path='/subscription' element={<Subscription/>}/>
       <Route exact path='/user' element={<User/>}/>
       <Route exact path='/ticket' element={<Ticket/>}/>
       <Route exact path='/chart' element={<Chart/>}/>
       <Route exact path='/newSong' element={<Newsong/>}/>
</Routes>
   </div>
   
       </body>
     
   </>);
}

export default App;
