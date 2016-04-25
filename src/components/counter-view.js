import React, {
  Component,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

export default class CounterView extends Component {
  render() {
    const {count, delaying, increase, decrease, delayedIncrease, delayedDecrease} = this.props

    const content = delaying ? <Text style={textStyle(count)}>Delaying...</Text> : <Text style={textStyle(count)}>{count}</Text>

    return (
      <View style={styles.container}>
        {content}
        <TouchableOpacity style={styles.button} onPress={increase}>
          <Text>Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decrease}>
          <Text>Down</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={delayedIncrease}>
          <Text>Delayed Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={delayedDecrease}>
          <Text>Delayed Down</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

textStyle = function(count) {
  const color = count >= 0 ? 'green' : 'red'
  return {
    color: color,
    fontSize: 36
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    padding: 10,
    margin: 10,
    backgroundColor: '#ccc'
  },
  up: {
    fontSize: 36,
    color: 'green'
  },
  down: {
    fontSize: 36,
    color: 'red'
  }
})
