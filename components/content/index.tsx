const Content: React.FC<{ children: string }> = ({ children }) => {
  return (
    <span className="content">
      <p>{children}</p>
    </span>
  );
};

export default Content;