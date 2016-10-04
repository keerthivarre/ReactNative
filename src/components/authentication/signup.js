var React = require('react');
var {
  View,
  Text,
  StyleSheet,
  TextInput,

} = require('react-native');

module.exports = React.createClass({
  render: function() {
    return (
      <View style ={styles.container}>
      <Text> HELLO!!</Text></View>


  );
  }
});
var styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'

  }
});
