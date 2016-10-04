var React = require('react');
var {
  View,
  Text,
  StyleSheet,
  TextInput,

} = require('react-native');

var Button = require('../common/button')


module.exports = React.createClass({
  getInitialState: function (){
    return {
      username: '',
      password: ''
    };


  },
  render: function() {
    return (
    <View style= {styles.container}>
    <Text> SignIn</Text>
    <Text style ={styles.label}> Username:</Text>

    <TextInput
    style ={styles.input}
    value = {this.state.username}
    onChangeText={(text) => this.setState({username: text})}/>
    <Text style ={styles.label} > Password:</Text>

    <TextInput
    secureTextEntry={true}
    style ={styles.input}
    value = {this.state.password}
    onChangeText={(text) => this.setState({password: text})}
    />
    <Button text={'Sign In'} onPress={this.onPress} />
    </View>

  );
},
onPress : function() {
  //log the user in
  this.setState({
    password: ''
  });
}
});

var styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'green',
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});
