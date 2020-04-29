import React, {Component} from 'react'
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ''
        };
      }
      handleChange = (event) => {
        console.log("yo")
        this.setState({value: event.target.value});
      }
      handleSubmit = (event) => {
        alert('Un essai a été envoyé : ' + this.state.value);
        event.preventDefault();
      }
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <button type="submit">Send</button>
          </form>
        );
      }
    }
export default Form;