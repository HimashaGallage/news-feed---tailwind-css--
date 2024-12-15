import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="loader"></div>
            <p className="text-lg text-gray-600">Loading</p>
        </div>
    );
};

export default Loading;