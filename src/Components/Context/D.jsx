import React, { useContext } from 'react';
import myContext from './Context';

function D(props) {
    const myContextData = useContext(myContext);
    console.log(myContextData)
    return (
        <div className="container text-center">
            <div className="col">
            {
                myContextData.map(function(data, index) {
                    return <div className="row">
                        <div className="card mt-3 mb-3">
                            <div className="card-header bg-dark text-white">
                                <h4>{data.id}</h4>
                            </div>
                            <div className="card-body">
                                <h5>{data.title}</h5>
                                <p>{data.body}</p>
                            </div>
                        </div>
                    </div>
                })
            }
            </div>
        </div>
    );
}

export default D;