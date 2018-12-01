import React from 'react';
import ReactSignupLoginComponent from 'react-signup-login-component';


const LoginCard = (...props) => {
    const signupWasClickedCallback = (data) => {
        console.log(data);
        alert('Signup callback, see log on the console to see the data.');
    };
    const loginWasClickedCallback = (data) => {
        console.log(data);
        alert('Login callback, see log on the console to see the data.');
    };
    const recoverPasswordWasClickedCallback = (data) => {
        console.log(data);
        alert('Recover password callback, see log on the console to see the data.');
    };

    return (
        <div >
            <ReactSignupLoginComponent
                title="Pixie Shire"
                handleSignup={signupWasClickedCallback}
                handleLogin={loginWasClickedCallback}
                handleRecoverPassword={recoverPasswordWasClickedCallback}
                styles={{
                    mainWrapper: { borderRadius:'10px', width:'100%', },
                    mainTitle: { color: 'green', font:"Titillium Web" },
                    flipper: { transition: '0.1s' },
                    signup: {
                      wrapper: { backgroundColor: 'yellow' },
                      inputWrapper: { backgroundColor: 'AliceBlue' },
                      buttonsWrapper: { backgroundColor: 'Aqua' },
                      input: { backgroundColor: 'red' },
                      recoverPassword: {},
                      button: { backgroundColor: 'LightCoral' },
                    login: {
                        wrapper: { backgroundColor: 'yellow' },
                        inputWrapper: { backgroundColor: 'AliceBlue' },
                        buttonsWrapper: { backgroundColor: 'Aqua' },
                        input: { backgroundColor: 'red' },
                        recoverPasswordWrapper: { backgroundColor: 'MediumBlue' },
                        recoverPasswordButton: { backgroundColor: 'OldLace ' },
                        button: { backgroundColor: 'LightCoral' },
                      }
                    }}}
            />
        </div>
    );
};

// export default LoginCard;
export default LoginCard;