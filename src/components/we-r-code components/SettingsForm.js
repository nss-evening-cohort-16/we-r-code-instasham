import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  FormGroup, Label, Input,
} from 'reactstrap';
import { updateBio } from '../../helpers/userHelper';

const FormStyle = styled.form`
  width: 400px;
  font-size: 20px;
  margin-top: 20px;
`;

const ButtonStyle = styled.button`
  background: white;
  color: #56d1ba;
  border-color: #56d1ba;
  border-radius: 5px;
`;

const initialState = {
  bio: '',
};

export default function SettingsForm({ obj = {} }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setFormInput({
        bio: obj.bio,
      });
    }
    return () => {
      isMounted = false;
    };
  }, [obj]);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBio(formInput).then((response) => {
      console.warn('Items updated!', response);
    });
    history.push('/');
  };

  return (
    <div>
      <FormStyle onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="bio">Update Bio:</Label>
          <Input onChange={handleChange} value={formInput.bio || ''} type="textarea" name="bio" id="bio" />
        </FormGroup>
        <ButtonStyle>Submit</ButtonStyle>
      </FormStyle>
    </div>
  );
}

SettingsForm.propTypes = {
  obj: PropTypes.shape({
    bio: '',
  }),
};

SettingsForm.defaultProps = {
  obj: {},
};
