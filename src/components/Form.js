
import React, { Component } from 'react'
import { config } from '../config'
import './Form.css'


const formStyle = {
cursor: 'pointer',
borderRadius: '5px',
width: '100%',
border: `solid 2px ${config.colors.pinkMexican}`
}


class Form extends Component {

      styles = {
        button: {
          border: `solid 2px ${config.colors.pinkMexican}`,
          borderRadius: '5px',
          padding: '5px',
          cursor: 'pointer',
        }
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
                    onChange={(event) => this.props.handleChange(event)}
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