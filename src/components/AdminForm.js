import React, { useEffect, useState } from "react";

const AdminForm = (props) => {
  const [select, setSelect] = useState("Repo");
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [url, setUrl] = useState("");
  const [date, setDate] = useState("");
  const [languages, setLanguages] = useState("");

  useEffect(async () => {
    if (!props.currentlySelected) {
      return;
    }
    const urls = {
      repos: `/githubs/${props.currentlySelected.id}`,
      links: `/links/${props.currentlySelected.id}`,
    };
    let response = await fetch(urls[props.currentlySelected.kind]);
    if (response.ok) {
      let data = await response.json();
      if (props.currentlySelected.kind === "repos") {
        setSelect("Repo");
        setTitle(data.title);
        setUrl(data.url);
        setDate(data.date);
        setLanguages(data.languages);
      } else if (props.currentlySelected.kind === "links") {
        setSelect("Link");
        setTopic(data.topic);
        setUrl(data.url);
        setDate(data.date);
      }
    }
  }, [props.currentlySelected]);

  const handlesSubmit = async (e) => {
    e.preventDefault();

    let properties;
    if (select === "Repo") {
      properties = { title, url, languages, date };
    } else if (select === "Link") {
      properties = { topic, url, date };
    }
    if (!props.currentlySelected) {
      const urls = {
        Repo: "/githubs",
        Link: "/links",
      };
      await fetch(urls[select], {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(properties),
      });
    } else {
      const urls = {
        Repo: `/githubs/${props.currentlySelected.id}`,
        Link: `/links/${props.currentlySelected.id}`,
      };
      await fetch(urls[select], {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(properties),
      });
      props.onUnselect();
    }
    resetForm();
    props.onNewData();
  };

  const resetForm = () => {
    setSelect("Repo");
    setTitle("");
    setUrl("");
    setDate("");
    setTopic("");
    setLanguages("");
  };

  //button needs to render if props.currently !== null ?
  const handlesDelete = async () => {
    const urls = {
      Repo: `/githubs/${props.currentlySelected.id}`,
      Link: `/links/${props.currentlySelected.id}`,
    };

    await fetch(urls[select], {
      method: "DELETE",
    });
    resetForm();
    props.onUnselect();
    props.onNewData();
  };

  return (
    <div className="inner-form-container">
      <form className="form" onSubmit={handlesSubmit}>
        <select
          className="drop-down"
          value={select}
          onChange={(e) => {
            setSelect(e.target.value);
          }}
        >
          <option value="Repo">Repo</option>
          <option value="Link">Link</option>
        </select>
        {select === "Repo" ? (
          <>
            <input
              type="text"
              autoComplete="off"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              autoComplete="off"
              placeholder="URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <input
              type="date"
              autoComplete="off"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <input
              type="text"
              autoComplete="off"
              placeholder="Languages"
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
            />
          </>
        ) : (
          <>
            <input
              type="text"
              autoComplete="off"
              placeholder="Topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
            <input
              type="text"
              autoComplete="off"
              placeholder="URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <input
              type="date"
              autoComplete="off"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </>
        )}
        <div>
          <button type="submit" className="edit-btn">
            <i className="fas fa-save fa-lg"></i>
          </button>
          <button type="button" className="delete-btn" onClick={handlesDelete}>
            <i className="fas fa-trash-alt fa-lg"></i>
          </button>
        </div>
      </form>
    </div>
  );
};
export default AdminForm;
