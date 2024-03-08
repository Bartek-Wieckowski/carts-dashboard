import React from 'react';

const CartListTable = ({ children }: { children: React.ReactNode }) => {
  return <table className="w-full text-sm text-left rtl:text-right text-gray-400">{children}</table>;
};

export default CartListTable;
