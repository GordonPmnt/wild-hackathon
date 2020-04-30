import React from 'react';
import WindyCam from './WindyCam';
import Form from './Form';
import Message from './Message';


class SideBar extends React.Component {
    state = {
        value: ''
    };  

    styles = {
        container: {
            position: 'absolute',
            height: '80vh',
            width: this.props.postcardView ? '90vw' : '30vw',
            margin: '0',
            top: '10vh',
            right: '5vw'
        },
    };
        
   
    handleChange = event => {
        this.setState({value: event.target.value});
    }

    render() {
        const { choosenCam, toggleView, postcardView } = this.props

        return (
            <div style={this.styles.container}>
                <WindyCam
                    choosenCam={choosenCam}
                />
                <Form
                    toggleView={toggleView}
                    postcardView={postcardView}
                    value={this.state.value} 
                    handleChange={this.handleChange}
                />
                <Message 
                    handleChange={this.state.message} 
                    value={this.state.value}
                />
            </div>
        );
    }
}

export default SideBar;