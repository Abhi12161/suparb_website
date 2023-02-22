import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ScrollButton from "../MoveToTopButton/ScrollButton";
import "./blogcontent.scss";
import { blogContentSelector } from "../../redux/reducer/blogContent";
import recentpost from "../../asset/images/recentpost.png";
import Header from "../Header";
import Footer from "../Footer";
import { recentBlogsSelector } from "../../redux/reducer/recentBlogs";
import { fetchRecentBlogs } from "../../redux/action/recentBlogs";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogContent } from "../../redux/action/blogContent";

const BlogContent = () => {
  const dispatch = useDispatch();
  const { blogContent } = useSelector(blogContentSelector);
  const { recentBlogs } = useSelector(recentBlogsSelector);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });

    dispatch(fetchRecentBlogs());
  }, [dispatch]);
  // console.log(`blogContent`, blogContent);
  return (
    <div>
      <ScrollButton />
      <Header />
      <div className="blogs-content">
        <p
          style={{
            fontFamily: "Montserrat",
            fontSize: "12px",
            fontWeight: "500",
            color: "#8B8B8B",
            textTransform: "uppercase",
          }}
        >
          {blogContent?.slug}
        </p>
        <div className="blogs-content-model-box ">
          <div className="blog-content-card">
            <img
              src={blogContent?.img_url}
              alt="blog-content-img"
              style={{ width: "100%" }}
            />
            <div style={{ padding: "20px 10px 20px 20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  {blogContent?.title}
                </p>
                <p> {blogContent?.created}</p>
              </div>

              <p
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#505050",
                  lineHeight: "25px",
                }}
                dangerouslySetInnerHTML={{
                  __html: blogContent?.post_content,
                }}
                className="htmlfrombackhand"
              />
            </div>
          </div>

          <div className="blog-content-list">
            <div className="most-recent-post">
              <h2
                style={{
                  padding: "10px",
                  fontWeight: "500",
                  fontSize: "16px",
                  fontFamily: "Montserrat",
                  color: "#000000",
                }}
              >
                Most Recent Post
              </h2>

              <div>
                {recentBlogs?.map((item, index) => {
                  return (
                    <Link to={`/blog/${item.slug}/`} className="linkclass">
                      <div
                        className="most-recent-card"
                        key={index}
                        onClick={() => dispatch(fetchBlogContent(item.id))}
                      >
                        <img
                          src={item.img_url}
                          alt="recent-post"
                          className="most-recent-img"
                          // onError={addImageFallback}
                        />

                        <div className="most-recent-container">
                          <p>{item.title}</p>
                          <p style={{ color: "#8B8B8B" }}>{item.created}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* <div className="most-recent-card">
                <img
                  src={recentpost}
                  alt="recent-post"
                  className="most-recent-img"
                  // onError={addImageFallback}
                />
                <div className="most-recent-container">
                  <p>Best Residential Projects</p>
                </div>
              </div> */}
              {/* <div className="most-recent-card">
                <img
                  src={recentpost}
                  alt="recent-post"
                  className="most-recent-img"
                  // onError={addImageFallback}
                />
                <div className="most-recent-container">
                  <p>Best Residential Projects</p>
                </div>
              </div> */}
            </div>
            <div className="subscribe-card">
              <div style={{ padding: "10px" }}>
                <p>Subscribe</p>
                <input type="email" placeholder="enter your email id" />
                <input
                  type="submit"
                  style={{ color: "#FFFFFF", background: "#6AA74D" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogContent;
