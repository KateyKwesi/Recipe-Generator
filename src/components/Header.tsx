import chefClaude from "../images/chef-claude-icon.png";

function Header() {
  return (
    <div className="bg-white flex justify-center items-center gap-2 h-27 shadow ">
      <img src={`${chefClaude}`} alt="logo" className="w-11" />
      <h1 className="text-3xl font-extralight font-sans ">Chef Claude</h1>
    </div>
  );
}

export default Header;
