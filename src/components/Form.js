import React, { Component } from 'react'
import { config } from '../config'
import './Form.css'

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

        return (
          <>
            {postcardView ||
              <form>
                <label>
                  <textarea 
                    value={this.state.value} 
                    onChange={this.handleChange}
                  />
                </label>
              </form>
            }
            <div 
              className="button"
              style={this.styles.button}
              onClick={() => toggleView()}
            >
              {postcardView ? "Back to map" : "Switch to postcard"}
            </div>
          </>
        );
      }
    }
export default Form;