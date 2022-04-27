import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');

  const AvailableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = AvailableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <DefaultText>No Meals Found!</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealScreen;
