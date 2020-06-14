import { Reducer } from 'redux';
import { ToggleAction, ToggleActionType } from './actions/toggle';

export interface ToggleState {
  count: number;
  toggleclass?: string;
}

export const initialState: ToggleState = { count: 0,toggleclass:'' };

const ToggleReducer: Reducer<ToggleState, ToggleAction> = (
  state: ToggleState = initialState,
  action: ToggleAction,
): ToggleState => {
  switch (action.type) {
      case ToggleActionType.TOGGLE:
        return {
          ...state,
          toggleclass: state.toggleclass= 'test',
        };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action.type;

      return state;
    }
  }
};

export default ToggleReducer;
