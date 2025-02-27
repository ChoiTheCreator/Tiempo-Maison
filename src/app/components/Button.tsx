interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
    >
      {text}
    </button>
  );
};

export default Button;
