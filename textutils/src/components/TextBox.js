import React, {useState} from 'react'

export default function TextBox(props) {

    const [text, setText] = useState('');
    const [backup, setBackup] = useState('');

    let TotalWords = 0;
    const TextOnChange = (event)=>{
        setText(event.target.value);
        setBackup(event.target.value);
    }
    const BackToOriginal = ()=>{
      if (text.length === 0) {
        EmptyAlert();
      } else {
        setText(backup);
        props.showAlert("Returned to original text.", "warning");
      }
    }
    const CapitalizeClick = ()=>{
        // let newText = text.toUpperCase();
        setText(text.toLocaleUpperCase());
        if (text.length === 0) {
            EmptyAlert();
        }
        else{
          props.showAlert("Converted to Capital Text", "success");
        }
    }
    const LowerClick = () => {
      // let newText = text.toUpperCase();
      setText(text.toLocaleLowerCase());
      if (text.length === 0) {
        EmptyAlert();
      } else {
        props.showAlert("Converted to Lower Text", "success");
      }
    };
    const RemovExtraSpace = ()=>{
        let NewText = text.split(/[ ]+/);
        setText(NewText.join(' '));
        if (text.length === 0) {
          EmptyAlert();
        } else {
          props.showAlert("Extra Space Removed", "success");
        }
    }
    const RemovPunc = ()=>{
        setText(text.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, ""));
        if (text.length === 0) {
          EmptyAlert();
        } else {
          props.showAlert("Panctuations Removed Successfully ", "success");
        }
    }
    const RemovTag = ()=>{
        let temp = text.toString();
        // temp.replace(/(<([^>]+)>)/g, ""); // search gloabally , from < until get > 
        let newELem = document.createElement('div');
        newELem.innerHTML= temp;
        setText(newELem.textContent || newELem.innerText || '');
        if (text.length === 0) {
          EmptyAlert();
        } else {
          props.showAlert("Tags Removed Successfully", "success");
        }
    }
    // const RemovExtraLines = ()=>{
    //     let temp = text.replace(/^[/n]/g)
    // }



    TotalWords = text.split(/.\s+./g).length;

    const CopyToClipBoard = ()=>{
        if (text.length === 0) {
          EmptyAlert();
        } else {
          var range = document.createRange();
          var selection = window.getSelection();
          range.selectNodeContents(document.getElementById("preview"));

          selection.removeAllRanges();
          selection.addRange(range);
          document.execCommand("Copy");
          props.showAlert("Copied To ClipBoard", "success");
        }
    }

    const clearText = ()=>{
        setText('');
    }

    function EmptyAlert(){
        props.showAlert("Please Enter Some text ...", "danger");
    }


  return (
    <div className='container'>
      <div className="mb-3">
        <label htmlFor="myBox1" className={`form-label my-2 text-${props.mode === 'dark'?'light':'dark'}`}><h4> {props.heading} </h4></label>
        <button className={`btn my-2 bg-${props.mode} text-${props.mode === 'dark'?'light':'dark'}`} id='clearText' onClick={clearText}>Clear</button>
        <textarea  className={`form-control bg-${props.mode} text-${props.mode === 'dark'?'light':'dark'}`} value={text}  id="myBox1" col="8" onChange={TextOnChange}  rows="5" placeholder='...'></textarea>
        <p id='wordsAnalyze' className={`text-${props.mode === 'dark'?'light':'dark'}`}> {TotalWords} Words, {text.length} Characters</p>
        <button className={`btn btn-primary my-3 mx-1 bg-${props.mode} text-${props.mode === 'dark'?'light':'dark'}`} onClick={BackToOriginal}>Original Text</button>
        <button className={`btn btn-primary my-3 mx-1 bg-${props.mode} text-${props.mode === 'dark'?'light':'dark'}`} onClick={CapitalizeClick}>To Upper</button>
        <button className={`btn btn-primary my-3 mx-1 bg-${props.mode} text-${props.mode === 'dark'?'light':'dark'}`} onClick={LowerClick}>To Lower</button>
        <button className={`btn btn-primary my-3 mx-1 bg-${props.mode} text-${props.mode === 'dark'?'light':'dark'}`} onClick={RemovExtraSpace}>RemovExtraSpace</button>
        <button className={`btn btn-primary my-3 mx-1 bg-${props.mode} text-${props.mode === 'dark'?'light':'dark'}`} onClick={RemovPunc}>Remove Punctuations</button>
        <button className={`btn btn-primary my-3 mx-1 bg-${props.mode} text-${props.mode === 'dark'?'light':'dark'}`} onClick={RemovTag}>Remove Tags</button>
        {/* <button className={`btn btn-primary my-3 mx-1 bg-${props.mode} text-${props.mode === 'dark'?'light':'dark'}`} onClick={RemovExtraLines}>Remove Extra Lines</button> */}


      </div>
      <div className={`preview text-${props.mode === 'dark'?'light':'dark'}`}>
        <label htmlFor="preview"><strong>Preview</strong> </label>
        <button id='copyBtn' className={`btn bg-${props.mode} text-${props.mode === 'dark'?'light':'dark'}`} onClick={CopyToClipBoard}>copy</button>
        <p id='preview'>
            {text.length>0?text:'Enter Something to preview here...'}
        </p>
      </div>
            {/* <canvas id="myCanvas" width="200" height="100" style="border:1px solid #d3d3d3;">
            Your browser does not support the HTML5 canvas tag.</canvas> */}
    </div>
  );
}




TextBox.defaultProps = {
    heading: "heading here"
}
