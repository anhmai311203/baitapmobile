import React from 'react';
import {
  SectionList,
  View,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  // Danh sách phân nhóm sản phẩm
  const groupedProducts = [
    { title: 'Category A', data: ['Product A1', 'Product A2', 'Product A3'] },
    { title: 'Category B', data: ['Product B1', 'Product B2'] },
    { title: 'Category C', data: ['Product C1', 'Product C2', 'Product C3'] },
  ];

  // Hàm xử lý khi bấm vào một sản phẩm
  const handleProductPress = (productName) => {
    Alert.alert('Thông báo', `Bạn đã chọn: ${productName}`);
  };

  // Hàm render từng sản phẩm
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductPress(item)}>
      <Text style={styles.item}>{item}</Text>
    </TouchableOpacity>
  );

  // Hàm render tiêu đề nhóm
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách nhóm sản phẩm</Text>
      <SectionList
        sections={groupedProducts}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
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
  header: {
    backgroundColor: '#007BFF',
    padding: 8,
    borderRadius: 5,
    marginBottom: 4,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  item: {
    padding: 8,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 4,
    borderRadius: 5,
    elevation: 2, // Hiệu ứng shadow (Android)
    shadowColor: '#000', // Hiệu ứng shadow (iOS)
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
});

export default App;
