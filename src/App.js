import Issues from "./Issues";
import Navbar from "./Navbar";
import './App.css'
import {useEffect, useState} from 'react'
import axios from "axios";
function App() {
  const [issues, setIssues] = useState([]);
  const [search, setSearch] = useState('')
  

  useEffect(()=>{
    axios
          .get("https://api.github.com/repos/PHP-FFMpeg/PHP-FFMpeg/issues")
          .then((response) => {
            setIssues(response.data);
          });
  },[])
  
  return (
    <div>
      <Navbar />
      <div>
          <input type="text" placeholder="Search title.." onChange={(e)=>setSearch(e.target.value)} value={search}/>
      </div>
      <Issues issues={issues} search={search}/>
    </div>
  );
}

export default App;
