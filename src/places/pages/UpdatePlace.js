import React from 'react';
import {useParams} from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/util/validators';

const DUMMY_PLACES = [
  {
    id:'p1',
    title: 'Empire State Building',
    description: 'One of the most famous shy scrapers in the world!',
    imageUrl: "https://res.cloudinary.com/drbgxq5pt/image/fetch/f_auto,q_auto:eco/https%3A%2F%2Fwww.kitano.com%2Fresourcefiles%2Fsnippet-main-img%2Fempire-state-building-in-new-york-top.jpg%3Fmimdevice%3Dmobile",
    address: "20 W 34th St, New York, NY 10001, United States",
    location:{
      lat:40.7484405,
      lng:-73.9856644
    },
    creator: 'u1'
  },
  {
    id:'p2',
    title: 'Empire State Building',
    description: 'One of the most famous shy scrapers in the world!',
    imageUrl: "https://res.cloudinary.com/drbgxq5pt/image/fetch/f_auto,q_auto:eco/https%3A%2F%2Fwww.kitano.com%2Fresourcefiles%2Fsnippet-main-img%2Fempire-state-building-in-new-york-top.jpg%3Fmimdevice%3Dmobile",
    address: "20 W 34th St, New York, NY 10001, United States",
    location:{
      lat:40.7484405,
      lng:-73.9856644
    },
    creator: 'u2'
  }
]


const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);
  if(!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }
  return <form>
    <Input 
      id="title" 
      element="input" 
      type="text" 
      label="Title" 
      validators={[VALIDATOR_REQUIRE()]} 
      errorText="Please enter a valid title." 
      onInput={() => {}} 
      value={identifiedPlace.title} 
      valid={true}
    />
    <Input 
    id="description" 
    element="textarea" 
    label="Description" 
    validators={[VALIDATOR_MINLENGTH(5)]} 
    errorText="Please enter a valid description (min. 5 characters)." 
    onInput={() => {}} 
    value={identifiedPlace.description} 
    valid={true}
  />
  <Button type="submit" disabled={true}>Update Place</Button>
  </form>
};

export default UpdatePlace;