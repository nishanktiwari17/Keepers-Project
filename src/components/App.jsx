import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [note, setNote] = useState([])

    function addNote(event) {
        setNote(prevValue => {
            return [...prevValue, event];
        })
    }

    function deleteNote(id) {
    setNote(prevNote => {
        return prevNote.filter((noteItem, index) => {
            return index !== id;
        });
    });
    }

return (
    <div>
    <Header />
    <CreateArea addItem={addNote} />
    {note.map((newNote, index) =>{
        return (
            <Note key={index} id={index} delete={deleteNote} title={newNote.title} content={newNote.content} />
        )
    })}
    <Footer />
    </div>
);
}

export default App
