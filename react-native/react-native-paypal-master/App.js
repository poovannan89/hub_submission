 import React, { Component } from 'react';
 import { Text, Image } from 'react-native';
 import { Header, Body, Icon, Right, CardItem, Content, Container, Thumbnail, Button } from 'native-base';
 import PayPal from 'react-native-paypal-wrapper';

 const Styles = {
   headerStyle: {
     paddingTop: 24,
   }
 };

 export default class App extends Component {
  paypal() {
     PayPal.initialize(PayPal.SANDBOX, 'AYdaFJcXcO1KdJ8J2BcjdE6X66I9Mch9KpuGYHssFOaCEc5QmVNOj1Y4K_N0sevMoDteYXm0dhh8rkaQ'); // 3 enviroments - NO_NETWORK, SANDBOX, PRODUCTION
     PayPal.pay({
       price: '1149',
       currency: 'USD',
       description: 'iPhone X (Space Grey, 64 GB)',
     }).then(confirm => console.log(confirm))
       .catch(error => console.log(error));
   }

   render() {
     const { headerStyle } = Styles;
     return (
       <Container style={{ backgroundColor: 'white' }} >
          <Header style={{ backgroundColor: 'black' }} >
          <Image source={require("./img/amazon.png")} style={{ height: null, width: 143, paddingTop: 10 }} />
            <Right>
              <Icon name="md-search" style={{ color: 'white' }} />
              <Icon name="md-cart" style={{ color: 'white', paddingLeft: 24 }} />
            </Right>
          </Header>
          <Content>
                <Text style={{ fontSize: 20, paddingTop: 7, paddingLeft: 8 }} >Apple iPhone X (Space Grey, 64GB)</Text>

                <Text style={{ color: '#000000', paddingTop: 3, paddingLeft: 8 }} >Apple</Text>
         <Body>
         <Image source={require("./img/iphonex.jpg")} style={{ height: 250, width: 200, paddingTop: 30 }} />
         </Body>

         <CardItem>
         <Text> Price: </Text>
          <Text> $ 1149 </Text>
         </CardItem>

         <CardItem>
         <Button onPress={() => this.paypal()} transparent>
         <Thumbnail source={require("./img/button.png")} style={{ height: 35, width: 168 }} />
                   </Button>
         </CardItem>

         </Content>
       </Container>
     );
   }
 }
