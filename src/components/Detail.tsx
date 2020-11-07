import React from 'react';

interface IDetailProps {
  id: string;
  name: string;
  updateName: (name: string) => void
}

const Detail: React.FC<IDetailProps> = ({id, name, updateName}) => {
  return (
      <>
        <h1>Detail Component Product Name: {name}</h1>
        <h1>Id: {id}</h1>
        <input type="text" value={name} onChange={e=> updateName(e.target.value)}/>
      </>
  );
}

export default Detail;
