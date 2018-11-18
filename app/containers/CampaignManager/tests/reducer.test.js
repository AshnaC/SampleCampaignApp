
import { fromJS } from 'immutable';
import campaignManagerReducer from '../reducer';

describe('campaignManagerReducer', () => {
  it('returns the initial state', () => {
    expect(campaignManagerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
