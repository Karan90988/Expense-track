interface Props {
  children: string;
  colour?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
}

const Buttton = ({ children, onClick, colour = "primary" }: Props) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};

export default Buttton;
//{"btn btn-" + colour}
