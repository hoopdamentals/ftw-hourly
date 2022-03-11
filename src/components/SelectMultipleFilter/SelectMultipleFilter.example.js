import React from 'react';
import { withRouter } from 'react-router-dom';
import SelectMultipleFilter from './SelectMultipleFilter';
import { stringify, parse } from '../../util/urlHelpers';

const URL_PARAM = 'pub_basketballSkills';

const options = [
  { key: 'shooting', label: 'Shooting' },
  { key: 'ball_handling', label: 'Ball Handling' },
  { key: 'rebounding', label: 'Rebounding' },
  { key: 'passing', label: 'Passing' },
  { key: 'agility', label: 'Agility' },
];

const handleSubmit = (values, history) => {
  console.log('Submitting values', values);
  const queryParams = values ? `?${stringify(values)}` : '';
  history.push(`${window.location.pathname}${queryParams}`);
};

const BasketballSkillsFilterPopup = withRouter(props => {
  const { history, location } = props;

  const params = parse(location.search);
  const basketballSkills = params[URL_PARAM];
  const initialValues = { [URL_PARAM]: !!basketballSkills ? basketballSkills : null };

  return (
    <SelectMultipleFilter
      id="SelectMultipleFilterPopupExample"
      name="basketballSkills"
      queryParamNames={[URL_PARAM]}
      label="basketballSkills"
      onSubmit={values => handleSubmit(values, history)}
      showAsPopup={true}
      liveEdit={false}
      options={options}
      initialValues={initialValues}
      contentPlacementOffset={-14}
    />
  );
});

export const BasketballSkillsFilterPopupExample = {
  component: BasketballSkillsFilterPopup,
  props: {},
  group: 'filters',
};

const BasketballSkillsFilterPlain = withRouter(props => {
  const { history, location } = props;

  const params = parse(location.search);
  const basketballSkills = params[URL_PARAM];
  const initialValues = { [URL_PARAM]: !!basketballSkills ? basketballSkills : null };

  return (
    <SelectMultipleFilter
      id="SelectMultipleFilterPlainExample"
      name="basketballSkills"
      queryParamNames={[URL_PARAM]}
      label="basketballSkills"
      onSubmit={values => {
        handleSubmit(values, history);
      }}
      showAsPopup={false}
      liveEdit={true}
      options={options}
      initialValues={initialValues}
    />
  );
});

export const BasketballSkillsFilterPlainExample = {
  component: BasketballSkillsFilterPlain,
  props: {},
  group: 'filters',
};
