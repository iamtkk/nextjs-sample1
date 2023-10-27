import React, { useState, useMemo } from 'react';

const UseMemoSample2 = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState<string[]>([]);
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  const onClickButton = () => {
    setItems((curr) => [...curr, text]);
    setText('');
  };
  const numberOfCharacters1 = items.reduce((acc, curr) => {
    return acc + curr.length;
  }, 0);
  const numberOfCharacters2 = useMemo(() => {
    return items.reduce((acc, curr) => {
      return acc + curr.length;
    }, 0);
  }, [items]);
  return (
    <div>
      <p>UseMemoSample</p>
      <div>
        <input value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}>Add</button>
      </div>
      <div>
        {items.map((i, idx) => (
          <p key={idx}>{i}</p>
        ))}
      </div>
      <div>
        <p>Total Numer of Characters 1 : {numberOfCharacters1}</p>
        <p>Total Numer of Characters 2 : {numberOfCharacters2}</p>
      </div>
    </div>
  );
};

export default UseMemoSample2;
