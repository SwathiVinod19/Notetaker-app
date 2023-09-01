import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
const App = () => {
  const [notes, setNotes] = useState([
  {
    id: nanoid(),
    text:"This is my first note",
    date: "20/08/23"
  },
  {
    id: nanoid(),
    text:"This is my second note",
    date: "24/08/23"
  },
  {
    id: nanoid(),
    text:"This is my third note",
    date: "01/09/23"
  },
  {
    id: nanoid(),
    text:"This is my fourth note",
    date: "01/09/23"
  },
  {
    id: nanoid(),
    text:"This is my fifth note",
    date: "01/09/23"
  }

]);

const addNote = (text) => {
 const date = new Date();
 const newNote = {
  id: nanoid(),
  text: text,
  date: date.toLocaleDateString()
 }
 const newNotes = [...notes, newNote];
 setNotes(newNotes);
};
  return (
  <div className="container">
    <NotesList notes={notes} handleAddNote={addNote}/>
  </div>
  );
}

export default App;