interface NavItemProps {
  name: string;
  url: string;
}

const NavItem = ({ name, url }: NavItemProps) => {
  return (
    <div
      className="
        px-3 font-semibold text-white
        group
    "
    >
      <a href={url}>{name}</a>
      <div
        className="
        hidden group-hover:block border border-b-1 mt-1
        "
      ></div>
    </div>
  );
};

export default NavItem;
