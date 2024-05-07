// src/App.jsx
import {useEffect, useState} from "react";
import axios from "axios"

function Repos() {

const [items, setItems] = useState([])
const [user] = useState("chimaskyy")

useEffect(() => {
  const url = `https://api.github.com/users/${user}/repos`;
  axios
    .get(url)
    .then((res) => {
      setItems(res.data);
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
  return (
    <div className="bg-cover bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800">{items.length}</h1>
    </div>
  );
}

export default Repos;
