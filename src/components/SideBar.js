import React, {Component} from 'react';
import WindyCam from './WindyCam';
import Form from './Form';
import Message from './Message';
import { render } from '@testing-library/react'

     

class SideBar extends React.Component {
           state = {
            value: ''
          };  

          styles = {
            container: {
                position: 'absolute',
                height: '80vh',
                width: postcardView ? '90vw' : '30vw',
                margin: '0',
                top: '10vh',
                right: '5vw'
            },
        
   
    handleChange = event => {
        this.setState({value: event.target.value});
      }

      render() {
         return (
            <div style={styles.container}>
                <WindyCam
                    choosenCam={choosenCam}
                />
                <Form
                    toggleView={toggleView}
                    postcardView={postcardView}
                    value={this.state.value} 
                    onChange={this.state.handleChange}
                />
                <Message 
                handleChange= {this.state.message } />
            </div>
    );
    }
}

export default SideBar;