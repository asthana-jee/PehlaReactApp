import React, {useState} from 'react'

export default function Textform(props) {
  
    const handleUpClick = ()=>{
      setText(Text.toUpperCase());
      props.showAlert("Converted to Uppercase", "success");
    }
    const handleLowClick = ()=>{
      setText(Text.toLowerCase());
    }
    const handleOnChange = (event)=>{
      setText(event.target.value);
    }
    const [Text, setText] = useState("");

    let lengthOfText = 0;
    if(Text.split(" ").pop() === ""){
      lengthOfText = Text.split(" ").length -1;
    }
    else {
      lengthOfText = Text.split(" ").length;
    }

    return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="10" value={Text} onChange={handleOnChange} placeholder='Enter Here and see your text get capitalised.'></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-5" onClick={handleLowClick}>
        Convert to LowerCase
      </button>
    </div>
    <div className="container my-3">
      <h2>Text Summary</h2>
      <p>{lengthOfText} words and {Text.length} characters</p>
      <h3>Preview</h3>
      <p>{Text.length>0?Text:"Likh toh sahi tab toh dikhaunga!"}</p>
    </div>
    </>
  )
}
