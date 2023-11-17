import {useState} from "react"
function ToggleMessage()
{
    const [showMessage,setShowMessage]=useState(false);
    const toggleMessage=()=>
    {
        setShowMessage(!showMessage);
    }
    return(
        <div>
            <h1>DashBoard</h1>
            <button onClick={toggleMessage}>
                {showMessage? "Hide Message":"Show Message"}
            </button>
            {showMessage && <p>Hiiii....How are you?</p>}
        </div>
    );
}
export default ToggleMessage;