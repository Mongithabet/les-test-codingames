
import React, {  } from 'react'
export  class Input extends React.PureComponent {
  render() {
    let {forwardedRef, ...otherProps} = this.props; 
    return <input {...otherProps} ref={forwardedRef} />;
  }
}
const TextInput = React.forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />
});

export class FocusableInput extends React.Component {
 
  ref = React.createRef()
  focusTextInput() {
   
    this.ref.current.focus();
  }
  render() {
    return <TextInput ref={this.ref} />;
  }

  componentDidUpdate(prevProps) {}
  
  componentDidMount() {
    if (!FocusableInput.defaultProps.focused){
      this.focusTextInput()

    }
  }
}

 FocusableInput.defaultProps = {
   focused: false
};


document.body.innerHTML = "<div id='root'></div>";

 