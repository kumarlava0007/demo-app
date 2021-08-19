import axios from 'axios';
import React, { useEffect, useState } from 'react';
import A from './A';
import myContext from './Context';


function Post(props) {
    const [state, setState] = useState([]);

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=> {
            setState(res.data)
            console.log(res.data)
        }, (errorMsg)=> {
            alert("error in fetching data")
        })
    },[])
    return (
        <div>
            <h2 className="text-center">Post Component</h2>
            <myContext.Provider value={state}>
            < A />
            </myContext.Provider>
        </div>
    );
}

export default Post;