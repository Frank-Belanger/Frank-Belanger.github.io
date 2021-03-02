import React, { useState } from 'react';

export default function Resume({initialCount}) {
    const [count, setCount] = useState(initialCount);

    return (
        <div className="resume-section">
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </div>
    );
}
        /*<div className="resume-section">
            <h1>Resume page</h1>
        </div>
    )
}*/