import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import {
  selectPage,
  selectCats,
  resetPage,
  selectStatus,
} from "../../store/features/cats/catsSlice";
import { getCatsByCategories, getCats } from "../../store/features/cats/API";
import "./Cats.scss";

export default function Cats() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cats = useSelector(selectCats);
  const page = useSelector(selectPage);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(resetPage());
    getData();
  }, [id]);

  const getData = useCallback(() => {
    id ? dispatch(getCatsByCategories({ id, page })) : dispatch(getCats(page));
  }, [id, page, dispatch]);

  return (
    <div className="gallery">
      <div className="photos">
        {cats &&
          cats.map((el, i) => {
            return <img className="img" key={i} src={el.url} alt="cat" />;
          })}
      </div>
      {status === "loading" ? (
        <span>Loading...</span>
      ) : (
        <button onClick={getData}>More images</button>
      )}
    </div>
  );
}
