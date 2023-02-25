import { View, Text,FlatList } from 'react-native';
import React, {useState} from 'react';
import CartItem from '../common/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromCart } from '../redux/actions/Actions';
import CommonButton from'../common/CommonButton';
import RazorpayCheckout from 'react-native-razorpay';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers);
  const dispatch = useDispatch();
  const navigation = useNavigation();
 
  return (
    <View style={{flex:1}}>
      {cartData.length > 0 ? (
        <FlatList 
        data={cartData} 
        renderItem={({item,index}) => {
          return(
            <CartItem 
              onAddWishlist={(x) => {
                dispatch(addToWishlist(x));
              }}
              item={item}
              onRemoveItem={()=>{
              dispatch(removeFromCart(index));
              }}
            />
          );
        }}
      />
      ):(
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Text>No Items Added in Cart</Text>
      </View>
      )}
      {cartData.length > 0 ? (
        <View style={{marginBottom:80}}>
          <CommonButton 
            bgColor={'green'} 
            textColor={"#fff"} 
            title={"Checkout"} 
            onPress={() => {
            // var options = {
            //   description: 'Credits towards consultation',
            //   image: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
            //   currency: 'INR',
            //   key: 'rzp_test_H98rEQiIO4ic3t', // Your api key
            //   amount: '10000',
            //   name: 'foo',
            //   prefill: {
            //     email: 'amar@eglogics.com',
            //     contact: '7992344991',
            //     name: 'Razorpay Software',
            //   },
            //   theme: {color: '#000'},
            // }
            // RazorpayCheckout.open(options)
            // .then((data) => {
            //   // handle success
            //   alert(`Success: ${data.razorpay_payment_id}`);
            // }).catch((error) => {
            //   // handle failure
            //   alert(`Error: ${error.code} | ${error.description}`);
            // });

            navigation.navigate('Checkout');
          }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Cart;