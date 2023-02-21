import React,{useState} from 'react'

function TextForm(props) {
  const [text, setText] = useState('Enter text here');

  // handle events
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert('Text has been uppercase!', 'success')
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert('Text has been lowercase!', 'success')
  }

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value)
  }

  const handleCopy = () => {
    let text = document.getElementById("myBox")
    text.select()
    text.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(text.value)
    
    props.showAlert('Text has been copied!', 'success')
  }

  const handleClear = () => {
    setText('');
    
    props.showAlert('Text has been cleared!', 'danger')
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    
    props.showAlert('Text has been remove extra space!', 'success')
  }

  return (
    <>
      <div className={`container text-${props.mode === 'dark' ? 'white' : 'dark'}`} >
          <h2>{props.heading}</h2>
          <div className="mb-3">
              <textarea className={`form-control text-${props.mode === 'dark' ? 'white' : 'dark'}`} id='myBox' onChange={handleOnChange} rows={8} value={text} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white'}}></textarea>
          </div>
          <div className="row"></div>
          <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
          <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
          <button className='btn btn-primary mx-2' onClick={handleClear}>Clear</button>
          <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy to Clipboard</button>
          <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove Extra Space</button>
      </div>
      <div className={`container text-${props.mode === 'dark' ? 'white' : 'dark'}`} >
        <h1>Total Text</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Read text: {0.008 * text.split(" ").length} Minutes read</p>
        <br />
        <h2>Preview</h2>
        <p>{text.length === 0 ? 'Enter Something in the textbox above to preview it here' : text}</p>
      </div>
    </>
  )
}

export default TextForm
