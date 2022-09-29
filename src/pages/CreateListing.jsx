import React, { useEffect, useRef, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';

const initialFormState = {
  type: 'rent',
  name: '',
  bedrooms: 1,
  bathrooms: 1,
  parking: false,
  furnished: false,
  address: '',
  offer: false,
  regularPrice: 0,
  discountedPrice: 0,
  images: {},
  lattitude: 0,
  longitude: 0,
};

const CreateListing = () => {
  const [geolocationEnabled, setGeolocationEnabled] = useState(true);
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setFormData({ ...initialFormState, userRef: user.uid });
      } else {
        navigate('/sign-in');
      }
    });

    return unsub;
  }, [auth, navigate]);

  if (loading) {
    return <Spinner />;
  }

  return <div>CreateListing</div>;
};

export default CreateListing;
