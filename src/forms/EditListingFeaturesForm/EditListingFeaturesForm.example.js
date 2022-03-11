import EditListingFeaturesForm from './EditListingFeaturesForm';

const NAME = 'basketballSkills';

const initialValueArray = ['hatha', 'vinyasa', 'yin'];
const initialValues = { [NAME]: initialValueArray };

const filterConfig = [
  {
    id: 'basketballSkills',
    label: 'Basketball skills',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_basketballSkills'],
    config: {
      mode: 'has_all',
      options: [
        { key: 'shooting', label: 'Shooting' },
        { key: 'ball_handling', label: 'Ball Handling' },
        { key: 'rebounding', label: 'Rebounding' },
        { key: 'passing', label: 'Passing' },
        { key: 'agility', label: 'Agility' },
      ],
    },
  },
];

export const BasketballSkills = {
  component: EditListingFeaturesForm,
  props: {
    name: NAME,
    onSubmit: values => console.log('EditListingFeaturesForm submit:', values),
    initialValues: initialValues,
    saveActionMsg: 'Save basketball skills',
    updated: false,
    updateInProgress: false,
    disabled: false,
    ready: false,
    filterConfig,
  },
  group: 'forms',
};
