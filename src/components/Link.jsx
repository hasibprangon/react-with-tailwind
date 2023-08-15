import React from 'react';

const Link = (props) => {
    console.log(props.route)
    const {name, path} = props.route;
    return (
        <div>
           <li>
            <a href={path}>{name}</a>
            </li> 
        </div>
    );
};

export default Link;