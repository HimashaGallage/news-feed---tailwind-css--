import React from 'react';

const Error = ({error}) => {
    return (
        <div className="flex items-start justify-start h-screen p-4 text-secondary">
            <p className="sm:text-md md:text-lg lg:text-xl font-medium">{error}</p>
        </div>
    );
};

export default Error;