import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const ItemGallery = () => {
  const carousel = useRef(null);
  const [mouseOver, setMouseOver] = useState(null);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let [repoResponse, linkResponse] = await Promise.all([
        fetch("/githubs"),
        fetch("/links"),
      ]);
      let [repoList, linkList] = await Promise.all([
        repoResponse.json(),
        linkResponse.json(),
      ]);

      if (repoResponse.ok && linkResponse.ok) {
        setItemList(
          [
            ...repoList.map((item) => {
              return {
                ...item,
                type: "repo",
              };
            }),
            ...linkList.map((item) => {
              return {
                ...item,
                type: "link",
              };
            }),
          ].sort((a, b) => {
            return Date.parse(b.date) - Date.parse(a.date);
          })
        );
      }
    }
    fetchData();
  }, []);

  let repo = itemList.map((item, i) => {
    return (
      <motion.div
        key={i}
        whileHover={{ scale: 1.12, transition: { duration: 0.2 } }}
      >
        <div
          className={`repo-container ${
            mouseOver === null || mouseOver === i ? "" : "rc-darken"
          }`}
          onMouseEnter={() => {
            setMouseOver(i);
          }}
          onMouseLeave={() => {
            setMouseOver(null);
          }}
        >
          <div className="inner-repo-container">
            <div className="logo-type-projects">
              {item.type === "repo" ? (
                <i className="fab fa-github fa-lg"></i>
              ) : (
                <i className="fab fa-dev fa-lg"></i>
              )}
            </div>
            <div style={{ marginBottom: "1em" }}>
              <span className="repo-link-title">
                {item.title || item.topic}
              </span>
              <a
                href={item.url}
                rel="noreferrer"
                target="_blank"
                className="logo-type"
              >
                <i className="fas fa-external-link-alt fa-sm"></i>
              </a>
            </div>

            <div style={{ marginBottom: "1em" }}>
              <span>{item.date}</span>
            </div>
            <div>
              <span style={{ marginBottom: "1em" }}>{item.languages}</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  });

  return (
    <div>
      <div ref={carousel} className="gallery-container">
        {repo}
      </div>
      {/* <div id="btn-container">
        <button
          id="backward-btn"
          onClick={() => {
            if (carousel.current) {
              carousel.current.scrollLeft -= 50;
            }
          }}
        >
          <i className="fas fa-chevron-circle-left"></i>
        </button>
        <button
          id="forward-btn"
          onClick={() => {
            if (carousel.current) {
              carousel.current.scrollLeft += 50;
            }
          }}
        >
          <i className="fas fa-chevron-circle-right"></i>
        </button>
      </div> */}
    </div>
  );
};

export default ItemGallery;
