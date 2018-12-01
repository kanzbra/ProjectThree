import React, { Component,Fragment  } from "react";
import ReactDropzone from "react-dropzone";
import Dashboard from "../Dashboard";
import SideDrawer from "../SideDrawer";
import BackDrop from "../Backdrop";
import Header from "../MainHeader";
import './Home.css';
import EnhancedTable from "../Table";


class Home extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        files: [],
      };
    }
  
    onPreviewDrop = (files) => {
      this.setState({
        files: this.state.files.concat(files),
       });
    }
  

    state ={
            sideDrawerOpen: false,
            selectedFile: null
    };
    drawerToggleClickHandler = () => {
     this.setState((prevState) => { 
     return {sideDrawerOpen : !prevState.sideDrawerOpen}; 
     });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen:false})
        };
  




    render () {
 
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop=   <BackDrop click={this.backdropClickHandler} />

            
        }


            const previewStyle = {
              display: 'inline',
              width: 50,
              height: 100,
        
      
            }
            

        return (
            <div style={{height: '100%'}}>
            <Dashboard drawerClickHandler = {this.drawerToggleClickHandler} />
            <SideDrawer show = {this.state.sideDrawerOpen} />
            <Header />
            <ReactDropzone 
          accept="image/*"
          onDrop={this.onPreviewDrop}
          className="dropZone"
        >
   Drop an image, <br/>get a preview!
      


        </ReactDropzone>
        {this.state.files.length > 0 &&
          <Fragment>
            <h3>Previews</h3>
            {this.state.files.map((file) => (
              <img
                alt="Preview"
                key={file.preview}
                src={file.preview}
                style={previewStyle}
              />
            ))}
          </Fragment>
        }

        <EnhancedTable />
           {backdrop}   
  
            </div>
        ); 
    }
}


const container = document.createElement("div");
document.body.appendChild(container);


export default Home;