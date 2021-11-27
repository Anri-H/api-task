import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { selectCategories } from "../../store/features/cats/catsSlice";
import { getCategories } from "../../store/features/cats/API";
import "./Categories.scss";

export default function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.innerWidth > 800 && setShowMenu(true);
    dispatch(getCategories());
  }, []);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="main">
      <span className="menu" onClick={handleShowMenu}>
        {showMenu ? "Close" : "Menu"}
      </span>
      {showMenu && (
        <div className="categories">
          {categories.map((el) => (
              <Link
                className="link"
                onClick={handleShowMenu}
                key={el.id}
                to={`categories/${el.id}`}
              >
                {el.name.toUpperCase()}
              </Link>
          ))}
        </div>
      )}
      <div className="cats">
        <Outlet />
      </div>
    </div>
  );
}
