import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchgreeting } from './redux/greetings/greeting';

const Greeting = () => {
    const greeting = useSelector((state) => state.greeting);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(fetchgreeting())
    }
    return (
    <div className="greeting">
        <button type="button" onClick={handleClick}>Greeting</button>
        <p>{greeting}</p>
    </div>
    );
};

export default Greeting;