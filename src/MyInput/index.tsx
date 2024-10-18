import React, { type FC } from 'react';

const MyInput: FC<{ title: string, onChange: () => void }> = (props) => {
    const { title, onChange } = props;
    return <>
        <h4>{title}</h4>
        <input type="text" onChange={onChange} />
    </>;
};

export default MyInput;
