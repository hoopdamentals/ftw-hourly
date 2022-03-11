import PropertyGroup from './PropertyGroup';

const exampleOptions = [
  { key: 'shooting', label: 'Shooting' },
  { key: 'ball_handling', label: 'Ball Handling' },
  { key: 'rebounding', label: 'Rebounding' },
  { key: 'passing', label: 'Passing' },
  { key: 'agility', label: 'Agility' },
];

export const WithSomeSelected = {
  component: PropertyGroup,
  props: {
    id: 'basketballSkills',
    options: exampleOptions,
    selectedOptions: ['shooting'],
    twoColumns: true,
  },
  group: 'misc',
};
