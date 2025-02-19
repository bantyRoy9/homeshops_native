import React, { memo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface IAddToCart {
  itemCount: number;
  handleClick: (e:any,item: -1 | 1) => void;
}

const AddToCartButton: React.FC<IAddToCart> = ({ handleClick, itemCount }) => {
  return (
    <View style={styles.container}>
      {itemCount > 0 ? (
        <View style={styles.cartContainer}>
          <TouchableOpacity style={styles.button} onPress={(e) => handleClick(e,-1)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.itemCount}>{itemCount}</Text>
          <TouchableOpacity style={styles.button} onPress={(e) => handleClick(e,1)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.addButton} onPress={(e) => handleClick(e,1)}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2F855A',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  button: {
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  itemCount: {
    color: 'white',
    fontSize: 14,
    marginHorizontal: 5,
  },
  addButton: {
    backgroundColor: '#2F855A',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default memo(AddToCartButton);
