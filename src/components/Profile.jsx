import React from 'react';

export default function Profile({image, name, title, newPeople}) { //props를 지우고  {전달받고자 하는 키}를 넣으면 아래와 같이 props.image이렇게 안 써도 됨
    return (
        <div className='profile'>
            <img 
            className='photo' 
            src={image} 
            alt="avatar" 
            />
            <h1>{name}</h1>
            <p>{title}</p>
            <div className='newPeople'>{newPeople}</div>
        </div>
    );
}

