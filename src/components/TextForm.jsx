import React,{useState} from 'react'

function TextForm(props) {
  const [text, setText] = useState('Enter text here');

  // handle events
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
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
  }

  const handleClear = () => {
    setText('');
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }

  return (
    <>
      <div className='container'>
          <h2>{props.heading}</h2>
          <div className="mb-3">
              <textarea className='form-control' id='myBox' onChange={handleOnChange} rows={8} value={text}></textarea>
          </div>
          <div className="row"></div>
          <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
          <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
          <button className='btn btn-primary mx-2' onClick={handleClear}>Clear</button>
          <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy to Clipboard</button>
          <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove Extra Space</button>
      </div>
      <div className='container'>
        <h1>Total Text</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Read text: {0.008 * text.split(" ").length} Minutes read</p>
        <br />
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}

export default TextForm
