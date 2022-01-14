import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';

const App=() =>{
  let load = async (res) => {
    const base64 = await fetch(res);
    const base64Response = await fetch(`data:image/jpeg;base64,${res}`);
    const blob = await base64Response.blob();
    console.log("<<<<<<<<<<", blob,base64)
  }
useEffect(()=>{
  let data;
  fetch('http://localhost:3000/api/v1/image').then(res=>{
    res.blob().then(blob=>{
      data=blob;
      const urlCreator=window.URL || window.webkitURL;
      const imageUrl=urlCreator.createObjectURL(blob);
      console.log("<bloc", blob, imageUrl)
    })
  })
  console.log("<<<<<<", data)
  // var xhr = new XMLHttpRequest()
  // xhr.addEventListener('load', () => {
  //  // load(xhr.responseText);
  //  const base64=btoa(xhr.responseText);
  //  const string='data:image/png;base64,'+base64
  //   console.log(xhr.responseText, string)
  // })
  // xhr.open('GET', 'http://localhost:3000/api/v1/image')
  // xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
  // // send the request
  // xhr.send()
},[])
  return (
    <div className="App">
    <img src={"http://localhost:3000/api/v1/image"} />
    </div>
  );
}

export default App;