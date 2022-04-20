// import React from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';

// import Colors from '../constants/Colors';
// import { CATEGORIES } from '../data/dummy-data';

// const CategoriesScreen = (props) => {
//   const renderGridItem = (itemData) => {
//     return (
//       <TouchableOpacity
//         style={styles.gridItem}
//         onPress={() => {
//           props.navigation.navigate({
//             routeName: 'CategoryMeals',
//             params: {
//               categoryId: itemData.item.id,
//             },
//           });
//         }}
//       >
//         <View>
//           <Text>{itemData.item.title}</Text>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <FlatList
//       keyExtractor={(item, index) => item.id}
//       numColumns={2}
//       data={CATEGORIES}
//       renderItem={renderGridItem}
//     />
//   );
// };

// // CategoriesScreen.navigationOptions = {
// //   headerTitle: 'Meal Categories',
// // };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   gridItem: {
//     flex: 1,
//     margin: 15,
//     height: 150,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default CategoriesScreen;

import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;