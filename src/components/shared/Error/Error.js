import React from 'react';
import { strings } from '../../../constants';

const Error = ({ message }) => {
    return (
        <div className="flex items-start justify-start h-screen p-4 text-secondary">
            <p className="text-lg text-600">{strings.error_generic}</p>
        </div>
    );
};

export default Error;