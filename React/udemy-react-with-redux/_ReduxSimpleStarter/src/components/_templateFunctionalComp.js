import React from 'react';  // needed because returning JSX in return <input />

// define functional component as follow
const ComponentName = (props) => {
  // if needed, access props through props e.g. prop.value
  // shorthand: `(props) => { props.myValue }` is the same as `const myValue = props.myValue`

  // describe the component
  return <input />
}

// export a variable defined in this file
export default ComponentName;