import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class NewPostForm extends Component {
    render() {
      return(
            <form onSubmit={this.props.handleSubmit}>
             <div className='row'>
                <div className='col-md-8'>
                  <label>Title</label>
                  <Field className='form-control' name='title' component='input' type='text' autoComplete='off'/>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-8'>
                  <label>Content</label>
                  <Field className='form-control' name='content' component='textarea' type='text'/>
                 </div>
              </div>

              <button type='submit' className="btn btn-primary">Submit</button>
          </form>
      );
    }
}

export default reduxForm({
        form: 'newPost',
    }
)(NewPostForm);
