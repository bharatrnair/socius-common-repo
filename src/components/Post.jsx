import React from 'react'
import Back from "./../components/Assets/back1.svg"
import PostButton from "./../components/Assets/post2.svg"
import "./Post.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import postCall from '../Services/postCall'
import fileUploadCall from '../Services/fileUploadCall'


const Post = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [textData, setTextData] = useState("");
  const navigate= useNavigate();
  // const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setSelectedFile(e.target.files[0])
      //setFile(URL.createObjectURL(e.target.files[0]));
  }


  const textSubmit = (ImageUrl) =>{
    let data={
      ImageUrl,
      Caption : textData
    };

    postCall("/posts",data)
    .then((res)=>{
        console.log(res)
     });
   }


  
  const postSubmit = () =>{
    const formData = new FormData();
    formData.append('File', selectedFile);
    fileUploadCall("/fileUpload",formData)
    .then((res)=>{

      textSubmit(res[0]);
    });
  }
  
  
  return (
    <div className="post-mainContainer">
        <div className="postMain-body">
            <div className="post-header">
                 
                <div className="post-back">
                  <img src={Back} alt="" onClick={()=>{
                navigate("/Home")
                }}/>
                </div>
                

                <div className="post-heading">
                    <h2>New post</h2>
                </div>

            </div>
          
            <div className="postBody-section">
                <div className="postPhoto-selection">

                <input type="file" onChange={handleChange} />
            <img src={selectedFile && URL.createObjectURL(selectedFile)}  style={{width:"100%",
                  maxWidth: "500px",
                  aspectRatio: "2"}}/>


                </div>
                <div className="post-button">
                    <img src={PostButton} alt="" onClick={()=>postSubmit()} />
                </div>
            </div>
            <div className="post-footer">
           <input type="text" className='postingCaption' placeholder='write something..' value={textData} onChange={(e)=>setTextData(e.target.value)}/>
            {/* <div className="postFrom-section">
                <div className="postFrom-gallery">
                  <p>Gallery - </p>
                </div>
                <div className="postStory">
                  <p>Story - </p>
                </div>
                <div className="goLive">
                  <p> Live -</p>
                </div>
            </div> */}
            </div>
          
        </div>

    </div>
  )
}



export default Post