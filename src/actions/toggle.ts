export enum ToggleActionType {
  TOGGLE =  'TOGGLE/CLASS',
}

export interface ToggleAction {
  type: ToggleActionType;
}

export const toggle = (): ToggleAction => ({
  type: ToggleActionType.TOGGLE,
});
