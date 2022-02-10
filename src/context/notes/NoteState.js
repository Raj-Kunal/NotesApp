// import NoteContext from "./noteContext";
// import { useState } from "react";

// const NoteState = (props)=>{
//     const s1 = {
//         "name": "Harry",
//         "class": "5b"
//     }
//     const [state, setState] = useState(s1);

//     const update = ()=>{
//         setTimeout(() => {
//             setState({
//                 "name": "Larry",
//                 "class": "10b"
//             })
//         }, 1000);
//     }
//     return (
//         <NoteContext.Provider value={{state:state, update:update}}>
//             {props.children}
//         </NoteContext.Provider>
//     )
// }

// export default NoteState;
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
      {
        "_id": "6200cde7c5abe375346e8381",
        "user": "6200c920c5abe375346e8370",
        "title": "My niceone title updated",
        "description": "heyyyyupdated",
        "tag": "heyupdated",
        "date": "2022-02-07T07:44:39.439Z",
        "__v": 0
      },
      {
        "_id": "6200cdfdc5abe375346e8384",
        "user": "6200c920c5abe375346e8370",
        "title": "My great titles",
        "description": "heyyyy",
        "tag": "hey",
        "date": "2022-02-07T07:45:01.015Z",
        "__v": 0
      },
      {
        "_id": "6200cde7c5abe375346e8381",
        "user": "6200c920c5abe375346e8370",
        "title": "My niceone title updated",
        "description": "heyyyyupdated",
        "tag": "heyupdated",
        "date": "2022-02-07T07:44:39.439Z",
        "__v": 0
      },
      {
        "_id": "6200cdfdc5abe375346e8384",
        "user": "6200c920c5abe375346e8370",
        "title": "My great titles",
        "description": "heyyyy",
        "tag": "hey",
        "date": "2022-02-07T07:45:01.015Z",
        "__v": 0
      },
      {
        "_id": "6200cde7c5abe375346e8381",
        "user": "6200c920c5abe375346e8370",
        "title": "My niceone title updated",
        "description": "heyyyyupdated",
        "tag": "heyupdated",
        "date": "2022-02-07T07:44:39.439Z",
        "__v": 0
      },
      {
        "_id": "6200cdfdc5abe375346e8384",
        "user": "6200c920c5abe375346e8370",
        "title": "My great titles",
        "description": "heyyyy",
        "tag": "hey",
        "date": "2022-02-07T07:45:01.015Z",
        "__v": 0
      }
      ]
      const [notes, setNotes] = useState(notesInitial)

    
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;