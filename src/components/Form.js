
import React, { Component } from 'react'
import { config } from '../config'


const formStyle = {
cursor: 'pointer',
borderRadius: '5px',
width: '100%',
border: `solid 2px ${config.colors.pinkMexican}`
}


class Form extends Component {
      state = {
        value: ''
      };

      styles = {
        button: {
          border: `solid 2px ${config.colors.pinkMexican}`,
          borderRadius: '5px',
          padding: '5px',
          cursor: 'pointer',
        }
      }

      handleChange = event => {
        this.setState({value: event.target.value});
      }

      render() {
        const { toggleView, postcardView } = this.props;
        console.log(postcardView)

        return (
          <form>
            <label>
              <textarea style = {formStyle}
                value={this.state.value} 
                onChange={this.handleChange}
              />
            </label>
            <div style={this.styles.button}
              onClick={() => toggleView()}
            >
              {postcardView ? "Back to map" : "Switch to postcard"}
            </div>
          </form>
         
        );
      }
    }
export default Form;