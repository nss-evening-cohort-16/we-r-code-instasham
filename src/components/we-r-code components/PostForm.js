import React from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';

export default function PostForm() {
  return (
    <Form>
      <FormGroup>
        <Label for="imageId">Image</Label>
        <Input type="image" name="image" id="imageId" />
      </FormGroup>
      <FormGroup>
        <Label for="captionId">Caption</Label>
        <Input type="text" name="caption" id="captionId" placeholder="with a placeholder" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}
