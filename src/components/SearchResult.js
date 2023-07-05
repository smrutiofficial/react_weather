import React from 'react';

const SearchResult = (data) => {
    const tm =data.names
    // console.log(tm)
    return (
        <div className='ko'>
            <div className='ko1'>
                <div className='ko2'>
    {tm.map((result,id)=>{
        {/* const city1=":"; */}
        return <a href={result.name}><p key={id}>{result.name}</p></a>
    })}
                </div>


            </div>
        </div>
    )
}

export default SearchResult;