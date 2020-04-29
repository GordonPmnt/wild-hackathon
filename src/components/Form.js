import React, { Component } from 'react'

class Form extends Component {
      state = {
        value: ''
      };

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
            <button
              onClick={() => toggleView()}
            >
              {postcardView ? "Back to map" : "Generate postcard"}
            </button>
          </form>
        );
      }
    }
export default Form;