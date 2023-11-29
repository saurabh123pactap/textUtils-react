import React ,{useState}from 'react'
import PropTypes  from 'prop-types'
// import DeleteConfirmation from '../common/DeleteConfirmation';


export default function TextForm(props) {
  // const [show, toggleShow] = useState(false);
  const [text, setText] = useState("");

const changeHandler=(event)=>{
  setText(event.target.value)
}

const handleUpchange=()=>{
  let newText=text.toUpperCase()
  setText(newText)
  props.showAlert('convert upper case','success')
}

const handleLowchange=()=>{
  let newText=text.toLowerCase()
  setText(newText)
  props.showAlert('convert lower case','success')
}
const handleClearText=()=>{
  let newText=''
  setText(newText)
  props.showAlert('clear all text','success')
}
const handleCopyText=()=>{
  navigator.clipboard.writeText(text)
  props.showAlert('copy text','success')
}

const handleExtraSpace=()=>{
  let newText=text.split(/[ ]+/)
  setText(newText.join(' '))
  props.showAlert('Remove extra space','success')
}




return (
  <>
    <div className="row">
      <div className="col-md-12">
        <h2 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h2>
      <textarea className="form-control" value={text} onChange={changeHandler} style={{backgroundColor:props.mode==='light'?'white':props.mode,color:props.mode==='light'?'black':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
      <button className='btn btn-primary my-3' onClick={handleUpchange}>Convert to Uppercase</button>
      <button className='btn btn-primary mx-2' onClick={handleLowchange}>Convert to Lowercase</button>
      <button className='btn btn-primary mx-2' onClick={handleClearText}>Clear Text</button>
      <button className='btn btn-primary mx-2' onClick={handleCopyText}>Copy Text</button>
      <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove Space</button>
      
      </div>
    </div>
     <div className="row my-3">
     <h4 style={{color:props.mode==='light'?'black':'white'}}>TotalCharcter :  {text.length}</h4>
     <h4 style={{color:props.mode==='light'?'black':'white'}}> TotalWord : {text.length ? text.split(' ').length : 0 }</h4>
     <h4 style={{color:props.mode==='light'?'black':'white'}}> TotalReadTime : {(text.length ? text.split(' ').length : 0) * 0.08} (ms)</h4>
     <h3 style={{color:props.mode==='light'?'black':'white'}}>Preview : {text.length===0? "Enter Some Text" : text} </h3> 
     </div>
     </>
  )
}

TextForm.prototype={
  heading:PropTypes.string
}

TextForm.defaultProps={
  heading:"Example textarea"
}