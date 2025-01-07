import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default function App() {
  // Dữ liệu thông báo
  const notifications = [
    {
      id: '1',
      title: 'Bước 1: Xác định nhu cầu khách hàng',
      description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
      time: '20/08/2020, 06:00',
      icon: 'https://img.icons8.com/ios-filled/50/checkmark.png',
    },
    {
      id: '2',
      title: 'Bạn có khách hàng mới!',
      description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
      time: '20/08/2020, 06:00',
      icon: 'https://img.icons8.com/ios-filled/50/user-group-man-man.png',
    },
    {
      id: '3',
      title: 'Khách hàng được chia sẻ bị trùng',
      description:
        'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống: Vui lòng chia sẻ khách hàng.',
      time: '20/08/2020, 06:00',
      icon: 'https://img.icons8.com/ios-filled/50/user-group-man-man.png',
    },
    {
      id: '4',
      title: 'Công việc sắp đến hạn trong hôm nay',
      description:
        'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
      time: '20/08/2020, 06:00',
      icon: 'https://img.icons8.com/ios-filled/50/clock.png',
    },
  ];

  // Render từng mục trong FlatList
  const renderItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Image source={{ uri: item.icon }} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    alignItems:'center'
  },
  notificationContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});
