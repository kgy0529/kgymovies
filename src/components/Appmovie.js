import React from 'react';
import {Link} from 'react-router-dom'

const Appmovie = ({id, title, posterPath, date}) => {
    return (
        <div>
            <div key={id} className="amovie">
                <Link to={`/about/${id}`}>
                    <h2 className="title">{title}</h2>
                    <img src={`http://image.tmdb.org/t/p/w500/${posterPath}`} alt=""  className="img"/>
                    <div  className="date">{date}</div>
                </Link>
            </div>
        </div>
        
    );
};

export default Appmovie;