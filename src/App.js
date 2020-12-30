import React from "react";
import "./App.css";
import { Switch, Route,Redirect} from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SigninAndSignUpPage from "./pages/sign-in-and-sign-up/SigninAndSignUp";
import { auth, createUserProfileDocument } from "./firebase/util";
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
class App extends React.Component {
  
  unsubscribeFromAuth = null;
  componentDidMount() {
       const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser(
            {
              currentUser: {
                id: snapShot.id,

                ...snapShot.data(),
              },
            },
            () => console.log(this.state)
          );
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  
  }
  
  render() {
    return (
<div>      



  <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SigninAndSignUpPage />
              )

            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps= user =>({
  currentUser:user.user.currentUser
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
