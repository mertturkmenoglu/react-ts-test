import React, {useState} from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import Detail from "../components/Detail";

interface IProductParams {
  id: string;
}

type ProductProps = RouteComponentProps<IProductParams>;

const Product: React.FC<ProductProps> = ({match, history}) => {
  const [name, setName] = useState('Product');

  return (
      <>
        <h1>Product {match.params.id}</h1>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <h2>Product Page product name: {name}</h2>
        <div>
          <button onClick={() => history.push('/')}>Home</button>
        </div>
        <div>
          <Detail name={name} id={match.params.id} updateName={s => setName(s)}/>
        </div>
      </>
  );
}

export default withRouter(Product);
