import React, { useState } from "react";

import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props) {
  const[expand,setexpand]=useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
function expanded(){
setexpand(true);
}
  return (
    <div>
      <form className="create-note">
        {expand ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />:null}
        <textarea
          name="content"
          onClick={expanded}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
         rows= {expand ? 3:1}
        />
        <Zoom in={true}>
        <button onClick={submitNote}><AddIcon/></button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
