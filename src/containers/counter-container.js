'use strict'

import React, {
  Component
} from 'react-native'
import CounterView from '../components/counter-view'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../actions/counter-actions'

class CounterContainer extends Component {
  render() {
    const {state, actions} = this.props
    return (
      <CounterView count={state.count}
        delaying={state.delaying}
        {...actions}
      />
    )
  }
}

export default connect(
  state => ({
    state: state.counter
  }),
  dispatch => ({
    actions: bindActionCreators(counterActions,dispatch)
  })
)(CounterContainer)
