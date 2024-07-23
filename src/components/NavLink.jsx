function NavLink() {
  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? "active-link" : "";
          }}
        >
          Home
        </NavLink>
      </li>
    </>
  );
}

export default NavLink;
