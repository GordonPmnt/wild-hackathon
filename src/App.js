import React from 'react';
import PostCard from './components/PostCard';


class App extends React.Component {
    state = {
        postcardView: false,
    }

    toggleView = () => {
        this.setState(prevState => ({
            postcardView: !prevState.postcardView
        }))
    }

    render() {
        const { postcardView } = this.state;

        return (
            <PostCard
                postcardView={postcardView}
                toggleView={this.toggleView}
            />
        )
    }
}

export default App;