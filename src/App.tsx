import { RouterProvider } from 'react-router-dom';
import { router } from './routes/route';
import AllProviders from './AllProviders';
import { Suspense } from 'react';
import Loader from './components/Loader';

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AllProviders>
        <RouterProvider router={router} />
      </AllProviders>
    </Suspense>
  );
};

export default App;
