import { IItem } from './index';
import React, { useState, useEffect } from 'react';
function CreateElementList(props: { initialData: IItem }) {
    let [click, setClick] = useState(false);
    let [text, setText] = useState(props.initialData.name);
    let [name, setName] = useState(props.initialData.name);

    function analizeButton(event: string) {
        if (event === 'Enter') {
            setClick(false);
            setName(text);
        } else if (event === 'Escape') {
            setClick(false);
        }
    }

    if (click === false) {
        return (
            <li
                onClick={() => {
                    setClick(true);
                }}
            >
                {name}
            </li>
        );
    } else {
        return (
            <input
                type="text"
                onKeyDown={(e) => analizeButton(e.key)}
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
        );
    }
}

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    let list = props.initialData.map((item) => {
        return <CreateElementList key={item.id} initialData={item} />;
    });

    if (props.sorting === 'DESC') {
        list.reverse();
    }

    return (
        <div>
            <ol>{list}</ol>
        </div>
    );
}
