import React from 'react';
import WindyCam from './WindyCam';
import Form from './Form';
import Message from './Message';
import MyCam from './MyCam'


class SideBar extends React.Component {
    state = {
        value: ''
    };  

    styles = {
        side: {
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            padding: '2.5%',
            borderRadius: '12px',
            position: 'absolute',
            height: '80%',
            width: '30vw',
            margin: '0',
            top: '10vh',
            right: '5vw'
        },
        full: {
            height: '100vh',
            width: '100vw',
            margin: '0',
        }
    }
        
    handleChange = event => {
        this.setState({value: event.target.value});
    }

    render() {
        const { choosenCam, toggleView, postcardView } = this.props
        const { value } = this.state;

        return (
            <div style={postcardView ? this.styles.full : this.styles.side}>
                <WindyCam
                    choosenCam={choosenCam}
                    postcardView={postcardView}
                />
                <Form
                    toggleView={toggleView}
                    postcardView={postcardView}
                    value={this.state.value} 
                    handleChange={this.handleChange}
                />
                <MyCam 
                    postcardView={postcardView}
                />
                {postcardView &&
                    <Message
                        choosenCam={choosenCam}
                        value={value}
                    />
                }
            </div>
        );
    }
}
export default SideBar;