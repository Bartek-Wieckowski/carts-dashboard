import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <p>
        {error.status} {error.statusText}
      </p>
    );
  }

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <Link to="-1">&larr; Go back</Link>
    </div>
  );
};

export default Error;
