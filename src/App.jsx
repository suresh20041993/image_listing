import React, { useState,useEffect } from 'react'
import axios from 'axios'





function App() {

  const [imageList,setImageList] = useState([]);
  const  [loading,setLoading] = useState(true);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res)=>{
      setImageList(res.data)
      setLoading(false);

    }).catch((err)=>{
      console.log("error: " + err);
      setLoading(false);

    });

  },[]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
        <div>
          {imageList.map((image) => (
              <div key={image.id} style={{textAlign:"center"}}> 

                <img src={image.thumbnailUrl} alt={image.title}  style={{width:"100%",height:"auto"}}/>
                
                <p style={{ fontSize: "12px", marginTop: "5px" }}>{image.title}</p>

              </div>
          ))}
        </div>
    </>
  )
}

export default App
