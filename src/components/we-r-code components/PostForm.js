import { React, useState } from 'react';
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

export default function PostForm() {
  const [FormInput, setFormInput] = useState(initialState);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    createPost({ ...FormInput, datePublished: Date() }).then(console.warn);
  };

  return (
    <Form>
      <FormGroup>
        <Label for="image">Image</Label>
        <Input type="image" id="image" onChange={(e) => handleChange(e)} required />
      </FormGroup>
      <FormGroup>
        <Label for="caption">Caption</Label>
        <Input type="text" id="caption" onChange={(e) => handleChange(e)} />
      </FormGroup>
      <Button onClick={(e) => handleClick(e)}>Submit</Button>
    </Form>
  );
}
