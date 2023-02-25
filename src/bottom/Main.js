import { View, Text, Image, FlatList, TouchableOpacity, ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react';
import Header from '../common/Header';
import {products} from '../Products';
import ProductItem from '../common/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import {addItemToCart, addToWishlist} from '../redux/actions/Actions';

const Main = () => {
  const dispatch = useDispatch();
    const [categoryList, setCategoryList] = useState([]);
    const [tshirtList, setTshirtList] = useState([]);
    const [jeansList, setJeansList] = useState([]);
    const [shoesList, setShoesLists] = useState([]);
    const [jacketList, setJacketLists] = useState([]);
    const [slipperList, setSlipperLists] = useState([]);
    const [trouserList, setTrouserLists] = useState([]);
    
    useEffect(() => {
        let categories = [];
        products.category.map(item => {
            categories.push(item.category);
        });
        setTshirtList(products.category[0].data);
        setJeansList(products.category[1].data);
        setShoesLists(products.category[2].data);
        setJacketLists(products.category[3].data);
        setSlipperLists(products.category[4].data);
        setTrouserLists(products.category[5].data);
        setCategoryList(categories);
        console.log(JSON.stringify(products.category[0]));
    }, []);

  //  const items = useSelector(state => state);
  //  console.log(items);
   return (
    <ScrollView style={{flex:1, backgroundColor: '#fff'}}>
      <View style={{flex:1}}>
        <Header />
        <Image 
        source={{
          uri:'https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg',
        }}
          
          style={{
            width: '94%', 
            height: 200, 
            borderRadius:10,
            alignSelf: 'center',
            marginTop: 10,
          }}
        />
        <View style={{marginTop: 20}}>
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryList} 
            renderItem={({item, index}) => {
            return (
              <TouchableOpacity 
                style={{
                  height: 40,
                  borderRadius: 20,
                  borderWidth:1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft:10,
                }}>
                <Text style={{color:'#000', marginLeft: 10, marginRight: 10}}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}/>
        </View>
        <Text 
          style={{
            marginTop:20,
            fontSize:16,
            marginLeft:18,
            fontWeight: '600',
            color:'#000',
          }}>
          New T-Shirts
        </Text>  
        <View style={{marginTop: 15}}>
          <FlatList 
            data={tshirtList} 
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index}) => {
            return (
              <ProductItem 
                item={item} 
                onAddWishlist={(x) => {
                  dispatch(addToWishlist(x));
                }}
                onAddToCart={x => {
                  dispatch(addItemToCart(item));
                }} 
              />
            );
          }}
        />
        </View>
        <Text 
          style={{
            marginTop:20,
            marginLeft:20,
            color:'#000',
            fontSize:18,
            fontWeight: '600',
          }}>
          New Shoes
        </Text>  
        <View style={{marginTop: 20}}>
          <FlatList 
            data={jeansList} 
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index}) => {
            return (
              <ProductItem 
                item={item} 
                onAddWishlist={(x) => {
                  dispatch(addToWishlist(x));
                }}
                onAddToCart={x => {
                  dispatch(addItemToCart(item));
                }} 
              />
            );
          }}
          />
        </View>
        <Text 
          style={{
            marginTop:20,
            marginLeft:20,
            color:'#000',
            fontSize:16,
            fontWeight: '600',
          }}>
          New Jackets
        </Text>  
        <View style={{marginTop: 20}}>
          <FlatList 
            data={shoesList} 
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index}) => {
            return (
              <ProductItem 
                item={item} 
                onAddWishlist={(x) => {
                  dispatch(addToWishlist(x));
                }}
                onAddToCart={x => {
                  dispatch(addItemToCart(item));
                }} 
              />
            );
          }}
          />
        </View>

        <Text 
          style={{
            marginTop:20,
            marginLeft:20,
            color:'#000',
            fontSize:16,
            fontWeight: '600',
          }}>
          New Slippers
        </Text>  
        <View style={{marginTop: 20}}>
          <FlatList 
            data={jacketList} 
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index}) => {
            return (
              <ProductItem 
                item={item} 
                onAddWishlist={(x) => {
                  dispatch(addToWishlist(x));
                }}
                onAddToCart={x => {
                  dispatch(addItemToCart(item));
                }} 
              />
            );
          }}
          />
        </View>

        <Text 
          style={{
            marginTop:20,
            marginLeft:20,
            color:'#000',
            fontSize:16,
            fontWeight: '600',
          }}>
          New trousers
        </Text>  
        <View style={{marginTop: 20}}>
          <FlatList 
            data={slipperList} 
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index}) => {
            return (
              <ProductItem 
                item={item} 
                onAddWishlist={(x) => {
                  dispatch(addToWishlist(x));
                }}
                onAddToCart={x => {
                  dispatch(addItemToCart(item));
                }} 
              />
            );
          }}
          />
        </View>

        <Text 
          style={{
            marginTop:20,
            marginLeft:20,
            color:'#000',
            fontSize:16,
            fontWeight: '600',
          }}>
          New Jeans
        </Text>  
        <View style={{marginTop: 20}}>
          <FlatList 
            data={trouserList} 
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index}) => {
            return (
              <ProductItem 
                item={item} 
                onAddWishlist={(x) => {
                  dispatch(addToWishlist(x));
                }}
                onAddToCart={x => {
                  dispatch(addItemToCart(x));
                }} 
              />
            );
          }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;




