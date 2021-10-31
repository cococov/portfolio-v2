import { ReactNode } from 'react';

const Tab: React.FC<{ language: ReactNode, selected?: boolean }> = ({ children, language, selected }) => {
  return (
    <span className={selected ? 'selected-tab' : 'tab'}>
      <span>
        {language}
      </span>
      <span className="ml-2">
        {children}
      </span>
    </span>
  );
};

export default Tab;