import React, { useContext, } from 'react';
import { UserContext } from '../../../App';
import  firebase from "firebase/app";
import  "firebase/auth";
import LoginBg from '../../../images/Group 140.png'
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';



// Add the Firebase services that you want to use



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

if(firebase.apps.length === 0){  
    firebase.initializeApp(firebaseConfig);
}
    

    const handleGoogleSignIn = () => {

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then( function (result) {
               const {displayName, email} = result.user;
               const signedInUser = {name: displayName, email}
               setLoggedInUser(signedInUser);
               storeAuthToken();
                    console.log(signedInUser)
            }).catch((error) => {
                const errorMassege = error.message;
                console.log(errorMassege)

            });

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            // Send token to your backend via HTTPS
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function(error) {
            // Handle error
          });
    }


    }
    return (
        <div className="login-page container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow p-5">
                    <div className="from-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="from-group">
                        <label htmlFor=""> Password</label>
                        <input type="password" className="form-control" />
                    </div>

                    <div className="from-group">
                        <label htmlFor="" className="text-danger"> Forget your password</label>
                    </div>

                    <div className="form-group mt-5">
                        <button className="btn btn-brand" onClick={handleGoogleSignIn}>Google Sign in</button>
                    </div>

                </div>

                <div className="col-md-6 d-none d-md-block align-self-end">
                    <img src={LoginBg} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Login;