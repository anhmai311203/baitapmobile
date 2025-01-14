import React from 'react';
import { FlatList, View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  // Danh sách sản phẩm
  const products = [
    { id: '1', name: 'Product A', price: '10.00' },
    { id: '2', name: 'Product B', price: '15.00' },
    { id: '3', name: 'Product C', price: '20.00' },
  ];

  // Hàm xử lý khi bấm vào sản phẩm
  const handleProductPress = (productName) => {
    Alert.alert('Thông báo', `Bạn đã chọn: ${productName}`);
  };

  // Hàm render từng sản phẩm
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductPress(item.name)}>
      <View style={styles.productContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách sản phẩm</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  productContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3, // Tạo hiệu ứng shadow (chỉ Android)
    shadowColor: '#000', // Tạo hiệu ứng shadow (iOS)
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
    color: '#007BFF',
  },
});

export default App;
