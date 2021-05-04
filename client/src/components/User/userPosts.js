import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { selectPosts } from "../../redux/slices/postSlice";
import Posts from "../Posts/posts";

const UserPosts = () => {
  const [posts, err] = useSelector(selectPosts);
  //pagination variables
  const [pageNumber, setPageNumber] = useState(0);
  const postsPerPage = 8;
  const pageVisited = pageNumber * postsPerPage;
  const displayedPosts = posts.slice(pageVisited, pageVisited + postsPerPage);
  const pageCount = Math.ceil(posts.length / postsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  //Search
  const [search, setsearch] = useState(null);

  const searchSpace = async (event) => {
    let keyword = event.target.value;
    setsearch(keyword);
  };
  const items = displayedPosts.filter((data) => {
    if (search === null) return data;
    else if (data.title.toLowerCase().includes(search.toLowerCase())) {
      return data;
    }
  });

  return (
    <>
      <input
        style={{ width: 400, height: 40 }}
        type="text"
        placeholder="Search.."
        onChange={(e) => searchSpace(e)}
        className="form-control"
      />
      <div className="collection-wrapper">
        <div className="collection-content ratio_asos">
          <div className="page-main-content">
            <div className="row">
              <div className="col-xl-12">
                <div className="filter-main-btn">
                  <span className="filter-btn btn btn-theme">
                    <i className="fa fa-filter" aria-hidden="true" /> Filter
                  </span>
                </div>
              </div>
            </div>
            <div className="collection-product-wrapper">
              <div className="product-wrapper-grid">
                <div className="row">
                  {/* HERE POSTS*/}

                  {posts.length === 0 && (
                    <span className="alert alert-danger">
                      No posts to display
                    </span>
                  )}
                  {items?.map((post, index) => {
                    return <Posts post={post} key={index} />;
                  })}
                </div>
                {pageCount > 1 ? (
                  <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                  ></ReactPaginate>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPosts;
