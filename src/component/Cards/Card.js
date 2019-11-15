import React from 'react';

const Card = (props) => {

    const desc = props.descr;
    const status = props.status;
    const changeStatus = props.handleChange;
    const deleteItem = props.deleteCard;
    return (
        <li className='card-item' key={props.index}>
                <p>{desc}</p>
                <p>{status ? 'Done' : 'Undone   '}</p>
                <input type="checkbox" onClick={changeStatus} className='change'/>
                <button onClick={deleteItem} className='btn-delete'> Удалить </button>
        </li>
    );
}
export default Card;            