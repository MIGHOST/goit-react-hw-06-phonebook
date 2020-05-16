import { createAction } from '@reduxjs/toolkit';

const filterContact = createAction('filtered', event => ({
  payload: event.target.value,
}));

export default filterContact;
