import React from 'react';

const Link = ({route}) => {
    // console.log(props.route)
    // const {name, path} = props.route;
    return (
        <div>
           {/* <li>
            <a href={path}>{name}</a>
            </li>  */}
            <li>
               <a href={route.path}>{route.name}</a> 
            </li>
        </div>
    );
};

export default Link;