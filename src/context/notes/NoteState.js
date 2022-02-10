// // import NoteContext from "./noteContext";
// // import { useState } from "react";

// // const NoteState = (props)=>{
// //     const s1 = {
// //         "name": "Harry",
// //         "class": "5b"
// //     }
// //     const [state, setState] = useState(s1);

// //     const update = ()=>{
// //         setTimeout(() => {
// //             setState({
// //                 "name": "Larry",
// //                 "class": "10b"
// //             })
// //         }, 1000);
// //     }
// //     return (
// //         <NoteContext.Provider value={{state:state, update:update}}>
// //             {props.children}
// //         </NoteContext.Provider>
// //     )
// // }

// // export default NoteState;
// import NoteContext from "./noteContext";
// import { useState } from "react";

// const NoteState = (props)=>{
//     const notesInitial = [
//       {
//         "_id": "6200cde7c5abe375346e8381",
//         "user": "6200c920c5abe375346e8370",
//         "title": "My niceone title updated",
//         "description": "heyyyyupdated",
//         "tag": "heyupdated",
//         "date": "2022-02-07T07:44:39.439Z",
//         "__v": 0
//       },
//       {
//         "_id": "6200cdfdc5abe375346e8384",
//         "user": "6200c920c5abe375346e8370",
//         "title": "My great titles",
//         "description": "heyyyy",
//         "tag": "hey",
//         "date": "2022-02-07T07:45:01.015Z",
//         "__v": 0
//       },
//       {
//         "_id": "6200cde7c5abe375346e8381",
//         "user": "6200c920c5abe375346e8370",
//         "title": "My niceone title updated",
//         "description": "heyyyyupdated",
//         "tag": "heyupdated",
//         "date": "2022-02-07T07:44:39.439Z",
//         "__v": 0
//       },
//       {
//         "_id": "6200cdfdc5abe375346e8384",
//         "user": "6200c920c5abe375346e8370",
//         "title": "My great titles",
//         "description": "heyyyy",
//         "tag": "hey",
//         "date": "2022-02-07T07:45:01.015Z",
//         "__v": 0
//       },
//       {
//         "_id": "6200cde7c5abe375346e8381",
//         "user": "6200c920c5abe375346e8370",
//         "title": "My niceone title updated",
//         "description": "heyyyyupdated",
//         "tag": "heyupdated",
//         "date": "2022-02-07T07:44:39.439Z",
//         "__v": 0
//       },
//       {
//         "_id": "6200cdfdc5abe375346e8384",
//         "user": "6200c920c5abe375346e8370",
//         "title": "My great titles",
//         "description": "heyyyy",
//         "tag": "hey",
//         "date": "2022-02-07T07:45:01.015Z",
//         "__v": 0
//       }
//       ]
//       const [notes, setNotes] = useState(notesInitial)

    
//     return (
//         <NoteContext.Provider value={{notes, setNotes}}>
//             {props.children}
//         </NoteContext.Provider>
//     )
// }

// export default NoteState;

import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwMGM5MjBjNWFiZTM3NTM0NmU4MzcwIn0sImlhdCI6MTY0NDIxODY1N30.GgkBUeiql_9b988bFNYapAkuMaUVktiiBVF0xdQkTBU"
      }
    });
    const json = await response.json() 
    setNotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwMGM5MjBjNWFiZTM3NTM0NmU4MzcwIn0sImlhdCI6MTY0NDIxODY1N30.GgkBUeiql_9b988bFNYapAkuMaUVktiiBVF0xdQkTBU"
      },
      body: JSON.stringify({title, description, tag})
    });

    const note = await response.json();
    setNotes(notes.concat(note))
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwMGM5MjBjNWFiZTM3NTM0NmU4MzcwIn0sImlhdCI6MTY0NDIxODY1N30.GgkBUeiql_9b988bFNYapAkuMaUVktiiBVF0xdQkTBU"
      }
    });
    const json = response.json(); 
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwMGM5MjBjNWFiZTM3NTM0NmU4MzcwIn0sImlhdCI6MTY0NDIxODY1N30.GgkBUeiql_9b988bFNYapAkuMaUVktiiBVF0xdQkTBU"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json(); 

     let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;