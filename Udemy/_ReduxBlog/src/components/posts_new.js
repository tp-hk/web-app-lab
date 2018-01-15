import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
// redux-form https://redux-form.com/7.2.0/docs/api/field.md/
// redux-form 1: 
// redux-form handles states and validation, not form submission 
// Field is a input. It only knows how to react with redux form. component = {} = JSX to show the UI
// reduxForm is very similar to {connect} in 'react-redux', it interacts with the app state defined in index reducer

class PostsNew extends Component {

  renderField(field) {

    // meta property is pulled off from field
    // then touched and error properties are pulled off from field
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    // redux-form 3: 
    // field is used to notify <Field/> of any changes happening here thru event handlers
    // field.input has all the event handlers {...field.input} takes all these handler and give to input as props
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className='form-control'
          type='text'
          {...field.input}
        />
        {/* redux-form 8:  
        a field has 3 states: pristine, touched invalid
        pristine is initial state after being loaded up
        touched == onLoseFocus
        */}
        <div className='text-help'>{touched ? error : ''}</div>
      </div>
    )
  }

  onSubmit(values) {
    console.log(values, 'values');
  }

  render() {
    // redux-form 10: 
    // this.props (from redux-form) has a property `handleSubmit` which gets pulled off from redux-form, and 
    // will be added to the component on the line `onSubmit={this.onSubmit.bind(this)}`
    const { handleSubmit } = this.props;

    return (
      <div>
        <h3>Write a New Post</h3>
        {/* redux-form 9: redux-form  handleSubmit runs the redux-form validation and checking to make sure the 
        for is ready to submit; if ok, then call the onSubmit function defined in this class to do the actual
        form submission */}
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          {/* redux-form 4: Can pass in arbitrary props to field. The following shows "label" prop */}
          {/* The name prop is used for identifying the field, also for validation */}
          <Field name='title' label='Title' component={this.renderField} ></Field>
          <Field name='tags' label='Categories' component={this.renderField}></Field>
          <Field name='content' label='Content' component={this.renderField}></Field>
          <button type='submit' className='btn btn-primary'>Submit</button>
          <Link to='/' className='btn btn-danger'>Cancel</Link>
        </form>
      </div>
    )
  }
}

// redux-form 5:
// values --> an object with all the values (title, categories, content) entered by user
function validate(values) {

  // redux-form 6:
  // define errors {}
  const errors = {};

  // redux-form 7:
  // validate the input from values object
  if (!values.title)
    errors.title = 'Title is required';
  if (!values.tags)
    errors.tags = 'Categories is required';
  if (!values.content)
    errors.content = 'Contents is required';

  // return the error object
  // if errors = empty, redux-form assumes form is fine to submit; else, redux-form assumes form is invalid
  return errors;
}

// redux-form 2:
// redux-form add additional props to the component as this.props. When this.props is referenced
// `form`: name of the form. If there are multiple forms in the site, use a unique name (can be any arbitrary string) to identify the form.
// If form name is not unique, forms with the same name will be merged into one state
// `validate` i.e. {validate: validate} is a function for validating the form
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);


// export default PostsNew;