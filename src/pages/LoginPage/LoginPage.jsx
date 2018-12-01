import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Link } from 'react-router-dom'

// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import VpnKey from "@material-ui/icons/VpnKey";
import People from "@material-ui/icons/People";

// core components


import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";

import CardFooter from "../../components/Card/CardFooter.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import { Redirect } from 'react-router-dom'

import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";

import { getFromStorage, setInStorage,} from "../../Utils/storage.js";
import image from "../../assets/img/bg7.jpg";
import API from "../../Utils/API.js";
import Bandaid from "./redirect.js";


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      isLoading: true,
      bandaid:true,
      signUpError:'',
      signInError:'',
      signInEmail:'',
      signInPassword:'',
      signUpFirstName:'',
      signUpLastName:'',
      signUpPassword:'',
      signUpEmail:'',
    };
    this.onTextBoxChangeSignInEmail = this.onTextBoxChangeSignInEmail.bind(this);
    this.onTextBoxChangeSignInPassword = this.onTextBoxChangeSignInPassword.bind(this);
    this.onTextBoxChangeSignUpEmail = this.onTextBoxChangeSignUpEmail.bind(this);
    this.onTextBoxChangeSignUpPassword = this.onTextBoxChangeSignUpPassword.bind(this);
    this.onTextBoxChangeSignUpFirstName = this.onTextBoxChangeSignUpFirstName.bind(this);
    this.onTextBoxChangeSignUpLastName = this.onTextBoxChangeSignUpLastName.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.bandaidClickHandler = this.bandaidClickHandler.bind(this);
  }
  componentDidMount() {
    const token = getFromStorage("LoginApp");

    if(token) {
      fetch('/api/account/verify?token=' + token)
      .then(res => res.json())
      .then(json => {
        if(json.sucess){
          this.setState({
            token,
            isLoading:false
          });
        } else {
          this.setState({
            isLoading:false
          });
        }
        });
    } else {
      this.setState({
        isLoading:false,
      })
    }

    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function () {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  console(){
    console.log("hi");
  }
  onSignIn(){
    
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/target' />
    }
  }


// -----------------------

  bandaidClickHandler = () => {
    this.setState({bandaid:false})
    console.log(this.state.bandaid);

  };
  onSignUp = id => {

    API.saveUser({
      firstName: this.signUpFirstName,
      lastName: this.signUpLastName,
      email: this.signUpEmail,
      password:this.signUpPassword,
    }).then(() => this.console());
    
  
  }

  onTextBoxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }
  onTextBoxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }
  onTextBoxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }
  onTextBoxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }
  onTextBoxChangeSignUpFirstName(event) {
    this.setState({
      signUpFirstName: event.target.value,
    });
  }
  onTextBoxChangeSignUpLastName(event) {
    this.setState({
      signUpLastName: event.target.value,
    });
  }
  
  render() {
    const {
      isLoading,
      token,
      signInEmail,
      signInError,
      signInPassword,
      signUpEmail,
      signUpError,
      signUpFirstName,
      signUpLastName,
      signUpPassword,
    } = this.state;

    // if(isLoading) {
    //   return (<div><p>is loading...</p></div>)
    // }

    
    const { classes } = this.props;
    
    return (
      <div>

        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader style={{disply:"inline"}}color="success" className={classes.cardHeader}>
                      <h3>Welcome Back</h3>
                      <div>
                      <CustomInput
                        labelText="Email"
                        value={this.signInEmail}
                        onChange={this.onTextBoxChangeSignInEmail}
                        input={{
                          color:"white",
                        }}
                        id="ExistingUserEmail"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      /><CustomInput
                      labelText="Password"
                      id="ExistingUserPassword"
                      value={this.signInPassword}
                      onChange={this.onTextBoxChangeSignInPassword}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        color:"white",
                        endAdornment: (
                          <InputAdornment position="end">
                             <VpnKey className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                     <Button onClick={this.bandaidClickHandler}  round color="white" size="lg"><Link style={{ color: 'black',textDecoration: 'none' }} to={'/Home'}>
                        Login
                        </Link>
                      </Button>
                      </div>
                    </CardHeader>
{/*  -------------------------------------------------------------------------------------*/}
                    <div style={{ color: 'green', fontSize: '20px' }}>
                    
                      <h5 className={classes.divider}>Sign Up!</h5>
                    </div>
                    <CardBody>
                      <CustomInput
                        labelText="First Name..."
                        id="firstNameSignUp"
                        value={this.signUpFirstName}
                        onChange={this.onTextBoxChangeSignUpFirstName}
                        success
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor}  />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Last Name..."
                        id="last"
                        value={this.signUpLastName}
                        onChange={this.onTextBoxChangeSignUpLastName}
                        success
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        value={this.signUpEmail}
                        success
                        onChange={this.onTextBoxChangeSignUpEmail}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        value={this.signUpPassword}
                        onChange={this.onTextBoxChangeSignUpPassword}
                        success
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <VpnKey className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button onClick={this.onSignUp} round color="success" size="lg"><Link style={{ textDecoration: 'none' }}to={'/home'}>
                      Sign Up
                        </Link>
                        
                      </Button>
                     
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>

        </div>
      </div>
    );

}
}
export default withStyles(loginPageStyle)(LoginPage);
