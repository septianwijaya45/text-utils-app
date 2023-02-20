import React,{useState} from 'react'

function TextForm(props) {
  const [text, setText] = useState('Enter text here');

  // handle events
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value)
  }

  return (
    <div>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className='form-control' id='myBox' onChange={handleOnChange} rows={8} value={text}></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}

export default TextForm
