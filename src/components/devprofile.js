import React from "react";


const Devpro = (data) => {
    return (
        <>
            <div className="profilewrap">
                <div className="pic">
                    <img className="picset"
                        src={data.pic}
                        alt="chinu">
                    </img>
                </div>
                <div className="pset">
                <h1>{data.name}</h1>
                <h1><i className={data.class}></i> {data.des}</h1>
                <h1 className="text-white">{data.discription}</h1>
                </div>
            </div>
            
        </>
    )
}
export default Devpro;