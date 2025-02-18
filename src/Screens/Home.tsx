import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import HorizontalCardList from '../Components/Cards/HorizontalCardView';
import ProductCard from '../Components/Cards/ProductCard';
import { useAddToCart } from '../Utils/customHooks/useAddToCart';

const Home = () => {
  const { addProduct, addtocard, products } = useAddToCart();

  const bindProduct = () => {
    const uniqueCategories = Array.from(new Set(products.map(el => el.category.id))).sort();
    return (
      <ScrollView style={styles.container}>
        {uniqueCategories.map((categoryId, idx) => {
          const categoryProducts = products.filter(product => product.category.id === categoryId);
          return (
            <View key={idx} style={styles.section}>
              <Text style={styles.sectionTitle}>{categoryProducts[0].category.name}</Text>
              <HorizontalCardList>
                {categoryProducts.map(product => (
                  <ProductCard key={product.id} product={product} addProduct={addProduct} addtocard={addtocard} />
                ))}
              </HorizontalCardList>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return bindProduct();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  section: {
    marginBottom: 20,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Home;
