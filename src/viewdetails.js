import * as React from 'react';
import { Routes, Route, useParams,BrowserRouter } from 'react-router-dom';
import {useState,useEffect} from 'react';
// import {useParams} from  "react-router-dom";
import Home from './home'
export function GetDetails() {
    const [posts, setPosts] = useState([]);
  const [bibleData, setBibledata] = useState([]);
  const [search, setSearch] = useState("");
  const [search_index, setSearch_index] = useState("");
  const [searchbook, setSearchbook] = useState("");

  useEffect(() => {
    console.log("useEffect")
    const fetchPost = async () => {
      const response = await fetch("https://api.scripture.api.bible/v1/bibles", {
        method: "GET",
        headers: { "api-key": "6d77d726b980143eff391187ac316c51" },
      });
      const data2 = await response.json();
     setPosts(data2.data);
      setBibledata(data2.data);
    };
     fetchPost();
  }, []);

  let { userId }= useParams();
    console.log("ui",userId)
    console.log("getitem",posts,"id",userId)
    let bookData=posts.filter((d)=>{
        if(userId===d.id){
            console.log("output",d)
            return d
        }
    })
   
    console.log(bookData)
    return(
        <h1>hello{bookData[0].name}</h1>
    )
















//   const addBook = (val, index) => {
//     console.log("index:", index);
//     console.log("value:", val.id);
//     setSearch_index(val.id);
//     if (searchbook.length > 0) {
//       setSearchbook(() => [...searchbook, val]);
//     }

//     setSearchbook(() => [...searchbook, val]);

//     let filteredBook = bibleData.filter((ab) =>{
//         if(ab.id===userId){
//             return ab
//         }
//     });
//     // setBibledata(filteredBook);
//     console.log("bd",filteredBook)
//   };

    
  
    
  }

  
  function App1 (){
    return (
<GetDetails/>

      );

  }
  export default App1