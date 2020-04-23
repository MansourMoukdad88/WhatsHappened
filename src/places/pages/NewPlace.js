import React, {useCallback} from 'react';


import Input from '../../shared/components/FormElements/Input';
import {VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from '../../shared/util/validators';
import './NewPlace.css';

const NewPlace = (props) => {
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);
  const decriptionInputHandler = useCallback((id, value, isValid) => {}, []);
  return (
    <form className="place-form">
      <Input
        id="title"
        element="input" 
        type="text" 
        label="Title" 
        validators={[VALIDATOR_REQUIRE()]} 
        errorText= 'Please Enter a Vaild Title' 
        onInput={titleInputHandler}
      />
      <Input 
      id="description"
      element="textarea" 
      type="text" 
      label="Description" 
      validators={[VALIDATOR_MINLENGTH(5)]} 
      errorText= 'Please enter a vaild description (at least 5 characters).' 
      onInput={decriptionInputHandler}
    />
    </form>
  );
};

export default NewPlace;