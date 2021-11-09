import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { createPost } from '../../helpers/postHelper';

const initialState = {
  caption: '',
  datePublished: '',
  imageUrl: '',
  userId: '',
};

export default function PostForm({ uid }) {
  const history = useHistory();
  const [FormInput, setFormInput] = useState(initialState);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    createPost({ ...FormInput, datePublished: Date(), userId: uid }).then(() => history.push('/'));
  };

  return (
    <Form>
      <FormGroup>
        <Label for="imageUrl">Image</Label>
        <Input type="text" id="imageUrl" onChange={(e) => handleChange(e)} required />
      </FormGroup>
      <FormGroup>
        <Label for="caption">Caption</Label>
        <Input type="text" id="caption" onChange={(e) => handleChange(e)} />
      </FormGroup>
      <Button onClick={(e) => handleClick(e)}>Submit</Button>
    </Form>
  );
}

PostForm.propTypes = {
  uid: PropTypes.string,
};
PostForm.defaultProps = { uid: '' };
