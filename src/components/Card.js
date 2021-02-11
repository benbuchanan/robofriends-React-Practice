import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-lightest-blue dib br3 ma2 pa2 grow'>
            <img alt='portrait' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
