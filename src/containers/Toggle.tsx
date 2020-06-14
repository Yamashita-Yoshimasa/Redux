import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { toggle } from '../actions/toggle';
import Toggle from '../components/Toggle';
import { ToggleState } from '../reducer';

interface StateProps {
  toggleclass?: string;
}

interface DispatchProps {
  toggle: () => void;
}

const mapStateToProps = (state: ToggleState): StateProps => ({
  toggleclass: state.toggleclass,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  toggle: () => dispatch(toggle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
