import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <Link to="/">&larr; Go back</Link>
    </div>
  );
};

export default Error;
