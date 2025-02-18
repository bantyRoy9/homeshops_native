import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AddToCartButton from '../Buttons/AddToCartButton';
// import { useNavigation } from '@react-navigation/native';
import { IProductCard } from '../../Utils/Const';

const ProductCard = ({ product, addProduct, addtocard, width = 140, activecard = null }: IProductCard) => {
    // const navigation = useNavigation();
    const isProduct = typeof product === 'object';

    return (
        <TouchableOpacity 
            // onPress={() => navigation.navigate(isProduct ? "Product" : `#${activecard}`)} 
            key={product?.id ?? product} 
            style={[styles.card, activecard === -1 ? styles.activeCard : styles.defaultCard]}
        >
            <View style={styles.cardContent}>
                <Image 
                    source={{ uri: product?.image_url ?? "https://cdn.grofers.com/app/assets/products/large_images/jpeg/4198835a-3d44-4eef-a456-e794211d2e67.jpg?ts=1706182142" }} 
                    style={[styles.cardImage, { width }]} 
                />
                {isProduct && (
                    <View style={styles.cardDetails}>
                        <Text style={styles.cardEta}>{product.base_price.toUpperCase()}</Text>
                        <View style={styles.cardTitles}>
                            <Text style={styles.cardTitle}>{product.name}</Text>
                        </View>
                        <Text style={styles.cardUnit}>{product.brand.name}</Text>
                        <View style={styles.cardFooter}>
                            <Text style={styles.cardPrice}>₹{product.base_price}</Text>
                            <AddToCartButton 
                                handleClick={(e, type) => addProduct!(e, type, product)} 
                                itemCount={(addtocard && addtocard[product.id]) ? addtocard[product.id].length : 0} 
                            />
                        </View>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#fff",
        marginBottom: 10,
    },
    activeCard: {
        borderColor: "green",
    },
    defaultCard: {
        borderColor: "#e8e8e8",
    },
    cardContent: {
        alignItems: "center",
    },
    cardImage: {
        height: 140,
        resizeMode: "cover",
        borderRadius: 8,
    },
    cardDetails: {
        alignItems: "center",
        marginTop: 10,
    },
    cardEta: {
        fontSize: 12,
        color: "gray",
    },
    cardTitles: {
        marginVertical: 5,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    cardUnit: {
        fontSize: 14,
        color: "#555",
    },
    cardFooter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 10,
    },
    cardPrice: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
    },
});

export default memo(ProductCard);
