import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './editorPost.scss';

function EditPost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');
  const [id, setId] = useState('');
  const { handleSubmit } = useForm();
  const [allParams, setAllParams] = useState({
    title: '', body: '', userId: '', id: '',
  });

  const { customers } = useSelector((store) => store.customers);
  const dispatch = useDispatch();

  const getInputValue = (event) => {
    if (event.target.name === 'title') {
      setTitle(event.target.value);
    } else {
      setBody(event.target.value);
    }
  };
  const params = useParams();

  const obj = customers && customers.find(e => Number(e.id) === Number(params.id))

  useEffect(() => {
    setTitle(obj.title);
    setBody(obj.body);
    setUserId(obj.userId);
    setId(obj.id);
  }, []);

  useEffect(() => {
    setAllParams((prevState) => ({
      ...prevState,
      title,
      body,
      userId,
      id,
    }));
  }, [title, body, userId, id]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  const handleEvent = (event) => {
    event.stopPropagation();
  }

  const EditPost = (event) => {
    dispatch({
      type: 'EDIT_POST',
      data: allParams,
      id: params.id,
    });
    handleClick();
    event.preventDefault();
  };

  const result = Object.keys(obj).map((value, index) => Object.values(obj[value]));

  return (
    <div>
      {result?.length > 0 ? (
        <div className="editorPost" onClick={EditPost}>
          <div className="editorPost_wrapper" onClick={handleEvent}>
            <form className="editorPost_form" onSubmit={handleSubmit(EditPost)}>
              <div className="editorPost_row">
                <label className="active" htmlFor="first_name2">
                  First Name
                </label>
                <input
                  value={title}
                  id="first_name2"
                  type="text"
                  className="editorPost_input"
                  name="title"
                  onChange={getInputValue}
                />
              </div>
              <div className="editorPost_row">
                <label htmlFor="textarea2">Edit Username</label>
                <textarea
                  id="textarea2"
                  className="editorPost_textArea"
                  name="description"
                  onChange={getInputValue}
                  value={body}
                />
              </div>
              <button
                className="editorPost_button"
                type="submit"
                name="action"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (

        <h1>Loading ...</h1>
      )}
    </div>
  );
}

export default EditPost;
