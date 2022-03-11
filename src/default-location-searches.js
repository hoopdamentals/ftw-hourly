import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  {
    id: 'default-nashville',
    predictionPlace: {
      address: 'Nashville, Tennessee, USA',
      bounds: new LatLngBounds(
        new LatLng(35.886964, -86.968267),
        new LatLng(36.282475, -86.662903)
      ),
    },
  },
];
export default defaultLocations;
