import React from "react";

export default function Alert(props){

    // const closeAlert = () => {
    //     let alert1 = document.getElementById('alert1');
    //     alert1.style.display = 'none';
    // };

    return (
      <div style={{height: '60px'}}>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} id="alert1" role="alert">
         <strong>{props.alert.msg}</strong>
        {/* <button type="button" id="CloseAlert" onClick={closeAlert} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>
      </div>
      
    );
}

// Alert.defaultProps = {
//     msg : 'Enter msg here'
// }