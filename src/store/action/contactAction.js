import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const getContacts = createAction('get/getContacts');

export const deleteContact = createAction('remove', id => ({
  payload: id,
}));

export const addOneContact = createAction('create', contact => ({
  payload: {
    ...contact,
    id: shortid.generate(),
  },
}));
