interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <>
      <div className="w-full mb-10 flex justify-center flex-nowrap mt-7">
        <h1 className="font-medium text-3xl flex mb-4 uppercase">{title}</h1>
      </div>
    </>
  );
};

export default Header;
