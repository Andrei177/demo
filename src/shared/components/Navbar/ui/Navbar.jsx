import s from "./Navbar.module.css";
import plus from "/plus.svg";

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <div className={s.nav_item}>
        <img src={plus} />
      </div>
      <div className={s.nav_item}>
        <img src={plus} />
      </div>
      <div className={s.nav_item}>
        <img src={plus} />
      </div>
    </nav>
  );
};

export default Navbar;
