import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <h2 className="text-5xl text-rose-500">There is no such page, go back to</h2>
      <Button to="/" btnStyles="btnSimple">
        Homepage
      </Button>
    </div>
  );
};

export default NotFound;
