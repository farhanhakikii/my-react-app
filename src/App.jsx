import React from 'react';
import './App.css';
import './bootstrap.css'
import AuthScreen from './views/screen/AuthScreen';
import LifeCycleScreen from './LifeCycleScreen';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import HomeScreen from './views/screen/HomeScreen';
import cookie from 'universal-cookie'
import CounterScreen from './views/screen/CounterScreen'
import PageNotFound from './views/screen/PageNotFound';
import Navbar from './views/components/Navbar';
import InputScreen from './views/screen/InputScreen';
import ProfileScreen from './views/WeeklyTask/ProfileScreen';
import RegisterScreen from './views/WeeklyTask/RegisterScreen';
import LoginScreen from './views/WeeklyTask/LoginScreen';
import LogScreen from './views/WeeklyTask/LogScreen';
import TodoReduxScreen from './views/screen/TodoReduxScreen';
import { keepLogin } from './redux/actions'

const cookieObject = new cookie()
class App extends React.Component{

  componentDidMount(){
    let cookieResult = cookieObject.get("authData")
    if(cookieResult){
      this.props.keepLogin(cookieResult)  
    }
  }
 render() {
   return (
    <BrowserRouter>
      <Navbar/>
      {/* <TodoReduxScreen/> */}
      <Switch>
        <Route exact path="/todo" component={TodoReduxScreen}/>
        <Route exact path="/input" component={InputScreen}/>
        <Route exact path="/" component={RegisterScreen}/>
        <Route exact path="/login" component={LoginScreen}/>
        <Route exact path="/profile/:username" component={ProfileScreen}/>
        <Route path="*" component={PageNotFound}/>{/*path="*" cocok untuk semua,jadi apapun hasilnya bakal nampilin error not found, tapi kalo yg diatasnya udh ketemu dulu, maka ga dieksekusi*/}
      </Switch>
    </BrowserRouter>

   )
 }
}

//<Route exact path="/" component={HomeScreen}/>{/*EXACT BIAR PATH YG SAMA PERSIS YG DITAMPILIN, SOALNYA KALO GAPAKE EXACT UDH KETEMU YG COCOK LANGSUNG DITAMPILIN*/}
{/* <Route exact path="/auth" component={AuthScreen}/>
<Route exact path="/lifecycle" component={LifeCycleScreen}/>
<Route exact path="/counter" component={CounterScreen}/>
<Route exact path="/input" component={InputScreen}/> */}
//<Route exact path="/profile/:username" component={ProfileScreen /*:username adalah nama parameter yg akan di ambil oleh profilescreen setelah welcome, ...*/}/>

const mapStatetoProps = (state) => {
  return{
    user: state.user
  }
}

const mapDispatchtoProps = {
  keepLogin,
}

export default connect(mapStatetoProps,mapDispatchtoProps)(withRouter(App));
