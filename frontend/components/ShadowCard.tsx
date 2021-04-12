import React from 'react';

interface Props {
  name: string;
  value: any;
}

const ShadowCard = ({ name, value }: Props) => {
  return (
    <div
      className="flex flex-col px-2 py-3 rounded-xl w-[90px]"
      style={{ boxShadow: '0px 1px 4px 4px rgba(0, 0, 0, 0.03)' }}
    >
      <span className="text-[9px]">{name}</span>
      <span className="font-[28px] text-[#4A47A3] font-bold">{value}</span>
    </div>
  );
};

export default ShadowCard;
