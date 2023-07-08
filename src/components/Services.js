import React from 'react'

const Services = (data) => {
    return (
        <div className='service-container'>
            <h1 className='icon-service'>
                <span className="material-icons">
                    {data.icon}
                </span>
            </h1>
            <h1>{data.name}</h1>
        </div>
    )
}

export default Services;