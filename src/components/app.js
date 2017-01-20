import React, {Component} from 'react';
import { Link } from 'react-router';

// TODO: Set tab active based on app state
class App extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-default navbar-fixed-top'>
          <div className='container'>
            <ul className='nav navbar-nav nav-tabs'>
              <li>
                <Link to='/' className=''>Home</Link>
              </li>
              <li>
                <Link to='login' className=''>Login</Link>
              </li>
              <li>
                <Link to='post/new'>New Post</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className='container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
