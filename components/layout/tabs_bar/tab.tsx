import { ReactNode } from 'react';

const Tab: React.FC<{ selected?: boolean }> = ({ children, selected }) => {
  return (
    <span className={selected ? 'selected-tab' : 'tab'}>
      {children}
    </span>
  );
};

export default Tab;