import React from 'react';
import './App.css';
import './bootstrap.css'
import AuthScreen from './views/screen/AuthScreen';
import LifeCycleScreen from './LifeCycleScreen';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import HomeScreen from './views/screen/HomeScreen';
import CounterScreen from './views/screen/CounterScreen'
import PageNotFound from './views/screen/PageNotFound';
import Navbar from './views/components/Navbar';
import InputScreen from './views/screen/InputScreen';
import ProfileScreen from './views/WeeklyTask/ProfileScreen';
import RegScreen from './views/WeeklyTask/RegScreen';
import LoginScreen from './views/WeeklyTask/LoginScreen';
import TodoReduxScreen from './views/screen/TodoReduxScreen';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/todo" component={TodoReduxScreen}/>
        <Route exact path="/input" component={InputScreen}/>
        <Route exact path="/" component={RegScreen}/>
        <Route exact path="/login" component={LoginScreen}/>
        <Route exact path="/profile/:username" component={ProfileScreen}/>
        <Route path="*" component={PageNotFound}/>{/*path="*" cocok untuk semua,jadi apapun hasilnya bakal nampilin error not found, tapi kalo yg diatasnya udh ketemu dulu, maka ga dieksekusi*/}
      </Switch>
    </BrowserRouter>
  );
}

//<Route exact path="/" component={HomeScreen}/>{/*EXACT BIAR PATH YG SAMA PERSIS YG DITAMPILIN, SOALNYA KALO GAPAKE EXACT UDH KETEMU YG COCOK LANGSUNG DITAMPILIN*/}
{/* <Route exact path="/auth" component={AuthScreen}/>
<Route exact path="/lifecycle" component={LifeCycleScreen}/>
<Route exact path="/counter" component={CounterScreen}/>
<Route exact path="/input" component={InputScreen}/> */}
//<Route exact path="/profile/:username" component={ProfileScreen /*:username adalah nama parameter yg akan di ambil oleh profilescreen setelah welcome, ...*/}/>


export default withRouter(App);
