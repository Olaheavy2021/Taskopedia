import logo from "../images/react.png";

function Header() {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
}

function MainHeader() {
  return (
    <div className="pt-2 py-1 pl-2" style={{ backgroundColor: "black" }}>
      <img
        src={logo}
        alt=""
        style={{ height: "35px", verticalAlign: "top" }}
      ></img>
      <span className="h2 pt-4 text-white-50">React Course - Taskopedia</span>
    </div>
  );
}

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgray",
};

function SubHeader() {
  return (
    <p style={subHeaderStyle} className="text-center">
      This will be an exciting course
    </p>
  );
}

export default Header;
