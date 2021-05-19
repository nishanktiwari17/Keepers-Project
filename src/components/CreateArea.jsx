import { getRoles } from "@testing-library/dom";
import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
    const [state, setState] = useState({
        title:"",
        content:"",
    })

function handleClick(event) {
    props.addItem(state);
    event.preventDefault();
    setState({
      title:"",
      content:""
    })
}

function handleChange(event) {
    var name = event.target.name;
    var value = event.target.value;
    setState(prevNote => {
        return {...prevNote,
        [name]: value
    }})
}

function expand() {
  setExpanded(true);
}

  return (
    <div>
      <form className="create-note">
      {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={state.title}
            placeholder="Title"
          />
        )}
        <textarea onChange={handleChange}  onClick={expand} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={state.content}/>
        <Fab type ="reset" onClick={handleClick}><AddIcon /></Fab>
      </form>
    </div>
  );
}

export default CreateArea;