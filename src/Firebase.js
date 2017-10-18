import React from 'react';
import {connect} from 'react-redux';
import {signIn} from './actions';
import {Redirect} from 'react-router';
import {config} from './instance/config';
var firebase = require('firebase');
var firebaseui = require('firebaseui');

export var firebaseApp = firebase.initializeApp(config);
var authUi = new firebaseui.auth.AuthUI(firebase.auth());

class FirebaseComponent extends React.Component {
    componentDidMount() {
        var uiConfig = {
            'callbacks': {
                'signInSuccess': (user, credential, redirectUrl) => {
                    this.setState({loggedIn: true});
                    this.props.onLoginSuccess(user.displayName);
                }
            },
            'signInOptions': [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ]
        };
        authUi.start('#firebaseui-auth', uiConfig);
    }
    // componentWillUnmount() {
    //     authUi.reset();
    // }
    render() {
        return (<div id="firebaseui-auth" />);
    }
}


const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoginSuccess: user => {
            dispatch(signIn(user))
        }
    }
}


const Firebase = connect(
    mapStateToProps,
    mapDispatchToProps
)(FirebaseComponent)


export default Firebase;