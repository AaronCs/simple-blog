import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class newPost extends Component {
    render() {
      return(
        <div>
          <h3>
             New Post
          </h3>
          <form>
             <div className='row'>
                <div className='col-md-8'>
                  <label>Title</label>
                  <input className='form-control'/>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-8'>
                  <label>Content</label>
                  <textArea className='form-control'/>
                 </div>
              </div>

              <button type='submit' className="btn btn-default">Submit</button>
          </form>


        </div>
        );
    }
}

export default newPost;
