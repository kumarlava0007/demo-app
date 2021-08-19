import React, { useState } from 'react';

function Counter(props) {
    const [count, setState] = useState(0);

    return (
        <div className="container m-5 d-flex justify-content-center align-items-center shadow-lg p-3  bg-white rounded">
            <div className="circle d-flex justify-content-center align-items-center bg-dark m-3 text-white">
                <h1 className="display-1 ">{count}</h1>
            </div>
            <button className="btn btn-dark btn-lg" onClick={() => { setState(count + 1) }}>Update Count</button>
        </div>
    );
}

export default Counter;