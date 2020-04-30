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
          width: '100%',
        },
        cornerButton: {
          border: `solid 2px ${config.colors.pinkMexican}`,
          borderRadius: '5px',
          padding: '5px 20px 5px 20px',
          cursor: 'pointer',
          textAlign: 'center',
          position: 'absolute',
          top: '10vh',
          left: '10vw',
        },
        stamp1: {
          borderRadius: '100%',
          border: `solid 2px ${config.colors.pinkMexican}`,
          position: 'absolute',
          top: '10vh',
          right: '10vw',
          width: '7%',
          cursor: 'pointer',
          opacity: '0.65'
        },
        stamp2: {
          borderRadius: '100%',
          border: `solid 2px ${config.colors.pinkMexican}`,
          position: 'absolute',
          top: '10vh',
          right: '18vw',
          width: '7%',
          cursor: 'pointer',
          opacity: '0.60'
        }
      }
           
      render() {
        const { toggleView, postcardView, handleChange, value } = this.props;
        const facebook = require('../img/facebook.jpg')
        const instagram = require('../img/INSTAGRAM_01.png')

        return (
          <>
            {postcardView ||
              <form>
                <label>
                  <textarea 
                    style={this.styles.input}
                    value={value} 
                    onChange={(event) => handleChange(event)}
                    placeholder={'Writte your message here... :-)'}
                  />
                </label>
              </form>
            }
            <div 
              className="button"
              style={postcardView ? this.styles.cornerButton : this.styles.button}
              onClick={() => toggleView()}
            >
              {postcardView ? "Back to map" : "Previsualize your postcard"}
            </div>
            {postcardView &&
            <>
              <img src={facebook} alt="facebook" style={this.styles.stamp1} />
              <img src={instagram} alt="instagram" style={this.styles.stamp2} />
            </>
            }
          </>
        );
      }
    }
export default Form;