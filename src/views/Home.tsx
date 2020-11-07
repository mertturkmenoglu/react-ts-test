import React, {useState} from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import {Link} from "react-router-dom";

const Home: React.FC<RouteComponentProps> = ({history}) => {
  const [id, setId] = useState('');

  return (
      <>
        <h1>Home</h1>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <div>
          <Link to={`/product/${id}`}>Go Product Page by Link</Link>
        </div>
        <div>
          <button onClick={() => history.push(`/product/${id}`)}>Go Product Page by Button</button>
        </div>
      </>
  );
}

export default withRouter(Home);
