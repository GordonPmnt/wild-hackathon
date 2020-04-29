import React, { Component } from 'react'

class Form extends Component {
      state = {
        value: ''
      };

      styles = {
        button: {
          border: 'solid 1px',
          borderRadius: '10px',
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
              <textarea 
                value={this.state.value} 
                onChange={this.handleChange}
              />
            </label>
            <div style={this.styles.button}
              onClick={() => toggleView()}
            >
              {postcardView ? "Back to map" : "Generate postcard"}
            </div>
          </form>
        );
      }
    }
export default Form;