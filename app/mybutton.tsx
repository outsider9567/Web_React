'use client';

import {useState} from 'react';

export default function MyButton(){
    const [counts, setCount] = useState<number[]>([]);
    
    function handleclick(){
        let count = Math.floor(Math.random() * 11);
        setCount(counts => [...counts, count]);
    }

    return(
        <div>
            {counts}
            <button onClick = {handleclick}>
                click
            </button>
        </div>
    );
}