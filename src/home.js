import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import GetDetails from "./viewdetails";
import App1 from './viewdetails'
function Home() {
  const [posts, setPosts] = useState([]);
  const [bibleData, setBibledata] = useState([]);
  const [search, setSearch] = useState("");
  const [search_index, setSearch_index] = useState("");
  const [searchbook, setSearchbook] = useState("");
  const fetchPost = async () => {
    const response = await fetch("https://api.scripture.api.bible/v1/bibles", {
      method: "GET",
      headers: { "api-key": "6d77d726b980143eff391187ac316c51" },
    });
    const data2 = await response.json();
    setPosts(data2.data);
    setBibledata(data2.data);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  const addBook = (val, index) => {
    console.log("index:", index);
    console.log("value:", val.id);
    setSearch_index(val.id);
    if (searchbook.length > 0) {
      setSearchbook(() => [...searchbook, val]);
    }

    setSearchbook(() => [...searchbook, val]);

    let filteredBook = bibleData.filter((ab) => ab.id !== val.id);
    setBibledata(filteredBook);
  };

  const validateRoute = () => {
    const value = JSON.parse(localStorage.getItem("Data"));
    const currentData = value.map((ele) => {
      if (ele.activeStatus === true) {
        ele.activeStatus = false;
      }
      return ele;
    });

    localStorage.setItem("Data", JSON.stringify(value));
  };
// console.log("123search_index",search_index,bibleData)
  return (
    <div className="home-container">
      <div className="home-form">
        <div className="home-content">
          <Link to={"/login"}>
            <button className="" onClick={validateRoute}>
              logout
            </button>
          </Link>
          <div className="countryScroll">
            <input
              type="text"
              placeholder="Enter a book name..."
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
          <div className="tableData">
            <table>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Description</th>
                <th>View Details</th>
              </tr>

              {posts
                .filter((val) =>
                  val.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((e, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{e.name}</td>
                      <td>{e.description}</td>
                      <div>
                        <td>
                          <Link to={`/app1/${e.id}`}><button onClick={() => addBook(e,i)}>View</button></Link>
                        </td>
                      </div>
                    </tr>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
