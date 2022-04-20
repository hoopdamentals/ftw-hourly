/* eslint-disable no-console */
import EditListingSessionLengthForm from './EditListingSessionLengthForm';

export const Empty = {
  component: EditListingSessionLengthForm,
  props: {
    onSubmit: values => {
      console.log('Submit EditListingSessionLengthForm with (unformatted) values:', values);
    },
    saveActionMsg: 'Save session length',
    updated: false,
    updateInProgress: false,
    disabled: false,
    ready: false,
  },
  group: 'forms',
};
