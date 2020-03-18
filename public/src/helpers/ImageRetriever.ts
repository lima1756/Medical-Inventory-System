import React from 'react';
import axios from 'axios';

function ImageRetriever(id: string, setter: React.Dispatch<React.SetStateAction<string>>){
    axios.get("/images/name/"+id).then(res=>{
      setter(res.data.url);
    }).catch(err=>{
      console.log(err);
    })
}

export default ImageRetriever;