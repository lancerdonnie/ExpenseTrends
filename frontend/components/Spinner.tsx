import React from 'react';
import ClipLoader from 'react-spinners/BounceLoader';

const Spinner = ({
  size = 75,
  customClass = '',
}: {
  size?: number;
  customClass?: string;
}) => {
  return (
    <div className={`w-full flex items-center justify-center ${customClass}`}>
      <ClipLoader color={'#413C69'} loading={true} size={size} />
    </div>
  );
};

export default Spinner;
