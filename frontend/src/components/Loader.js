import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <Spinner animation="border" roler="status" style={{
            width: '100px',
            height: '100px',
            margin: 'auto', disply: "block"
        }}
        >

        </Spinner>
    );
};

export default Loader;