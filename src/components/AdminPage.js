import React, { useState, useEffect } from "react";
import AdminForm from "../components/AdminForm";

const GenericList = ({ nudge, kind, onSelect }) => {
  const [list, setList] = useState(null);

  useEffect(() => {
    async function retrieveList() {
      const urls = {
        repos: "/githubs",
        links: "/links",
      };
      let response = await fetch(urls[kind]);
      let data = await response.json();
      if (response.ok) {
        setList(data);
      }
    }
    retrieveList();
  }, [nudge, kind]);

  const handlesClick = (id) => {
    onSelect(id, kind);
  };
  return (
    <div className="list-container">
      <h2 className="list-titles">List of {kind}:</h2>
      {list ? (
        <>
          {list.map((r, i) => {
            return (
              <div key={i}>
                <a href="#!" onClick={() => handlesClick(r.id)}>
                  {r.title || r.topic}
                </a>
              </div>
            );
          })}
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

const Repos = GenericList;
const Links = GenericList;

const AdminPage = (props) => {
  const [lastNewDataNotification, setLastNewDataNotification] = useState(0);
  const [currentlySelected, setCurrentlySelected] = useState(null);

  const handlesLogOut = async () => {
    const response = await fetch("/sessions", {
      method: "DELETE",
    });
    if (response.ok) {
      props.onLogOut();
    }
  };
  const handleSelect = (id, kind) => {
    setCurrentlySelected({ id, kind });
  };
  const handlesNewData = () => {
    setLastNewDataNotification(Date.now());
  };

  const handlesUnselect = () => {
    setCurrentlySelected(null);
  };
  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-3">
          <div id="welcome-back-container">
            <p>Welcome back, {props.admin.username} </p>
          </div>
        </div>
        <div className="col-2">
          <div id="sign-out-container">
            <button id="sign-out-btn" onClick={() => handlesLogOut()}>
              Sign Out&nbsp;<i className="fas fa-sign-out-alt fa-lg"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <AdminForm
            onUnselect={handlesUnselect}
            currentlySelected={currentlySelected}
            onNewData={() => handlesNewData()}
          />
        </div>
        <div className="col">
          <Repos
            onSelect={handleSelect}
            kind="repos"
            nudge={lastNewDataNotification}
          />
          <Links
            onSelect={handleSelect}
            kind="links"
            nudge={lastNewDataNotification}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
