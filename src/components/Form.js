import React from 'react'


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 'Écrivez un essai à propos de votre élément du DOM préféré'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Un essai a été envoyé : ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Essay:
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <button onClick={this.handleSubmit.bind(this)}>Send</button>
          </form>
       
        );
      }
    }
    
export default Form;
