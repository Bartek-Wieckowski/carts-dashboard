import { BiLoader } from 'react-icons/bi';

type LoaderProps = {
  type?: string;
};

const Loader = ({ type }: LoaderProps) => {
  if (type === 'spinner') {
    return (
      <div className={`flex-center w-full h-full absolute`}>
        <BiLoader className={`animate-spin ${type}`} />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
