import React, { Component } from 'react'
import { config } from '../config'
import './Form.css'


class Form extends Component {
      styles = {
        button: {
          border: `solid 2px ${config.colors.pinkMexican}`,
          borderRadius: '5px',
          padding: '5px',
          cursor: 'pointer',
          textAlign: 'center',
          width: '100%',
        },
        input: {
          margin: '5px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          border: 'none',
          height: '150px',
          width: '350px',
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
                    style={this.styles.input}
                    value={this.state.value} 
                    onChange={(event) => this.props.handleChange(event)}
                    placeholder={'Writte your message here... :-)'}
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