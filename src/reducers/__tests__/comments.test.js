import commentsReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types';

it('handles actions of type SAVE_COMMENTS', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual(['New Comment']);
});

it('handles actions with unknown type', () => {
  const newState = commentsReducer(['entry'], {type: 'unknown'});
  expect(newState).toEqual(['entry']);
});