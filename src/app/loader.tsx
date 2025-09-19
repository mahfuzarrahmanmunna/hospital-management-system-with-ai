import { Oval } from 'react-loader-spinner';

const Loader = () => (
    <div className="flex justify-center items-center h-screen">
        <Oval
            height={80}
            width={80}
            color="#4F46E5"
            secondaryColor="#C7D2FE"
            strokeWidth={4}
            strokeWidthSecondary={4}
            ariaLabel="loading"
        />
    </div>
);

export default Loader;
