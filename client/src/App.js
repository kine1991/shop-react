import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import CheckoutPage from './pages/checkout/checkout.component'
import ShopPage from './pages/shop/shop.component'
import LoginAndRegister from './pages/login-and-register/login-and-register.components'
import { checkUserSession } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'
import './App.scss';



const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/login-register"
          render={() => currentUser ? <Redirect to="/" /> : <LoginAndRegister />}/>
        />
      </Switch>
    </div>
  );
};



const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)



// class App extends React.Component {
//   unsubscribeFromAuth = null;

//   componentDidMount() {
//     checkUserSession()
//   }

//   componentWillUnmount() {
//     // this.unsubscribeFromAuth();
//   }

//   render() {
//     return (
//       <div className="app">
//         <Header />
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route exact path="/checkout" component={CheckoutPage} />
//           <Route path="/shop" component={ShopPage} />
//           <Route
//             exact
//             path="/login-register"
//             render={() =>
//               currentUser ? (
//                 <Redirect to="/" />
//               ) : (
//                 <LoginAndRegister />
//               )
//             }
//           />
//           />
//         </Switch>
//       </div>
//     );
//   }
// }