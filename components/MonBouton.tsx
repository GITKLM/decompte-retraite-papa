"use client"

type NewTabButtonProps = {
  url: string;
  children: React.ReactNode;
};

const NewTabButton: React.FC<NewTabButtonProps> = ({ url, children }) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <button onClick={handleClick} type="button">
      {children}
    </button>
  );
};

export default NewTabButton;