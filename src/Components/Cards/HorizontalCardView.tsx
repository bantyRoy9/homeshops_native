import { FC, ReactNode, useRef, useState } from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';
// import { FontAwesome } from "@expo/vector-icons";

const HorizontalCardList: FC<{ children: ReactNode }> = ({ children }) => {
  const scrollRef = useRef<ScrollView>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const handleScroll = (event: any) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    setShowLeft(contentOffset.x > 0);
    setShowRight(contentOffset.x + layoutMeasurement.width < contentSize.width);
  };

  // const scrollLeft = () => {
  //   scrollRef.current?.scrollTo({ x: Math.max(0, scrollRef.current?.contentOffset.x - 800), animated: true });
  // };

  // const scrollRight = () => {
  //   scrollRef.current?.scrollTo({ x: scrollRef.current?.contentOffset.x + 800, animated: true });
  // };

  return (
    <View style={styles.container}>
      {showLeft && (
        <TouchableOpacity style={[styles.button, styles.leftButton]}>
          {/* <FontAwesome name="angle-left" size={24} color="black" /> */}
        </TouchableOpacity>
      )}
      <ScrollView
        horizontal
        ref={scrollRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        {children}
      </ScrollView>
      {showRight && (
        <TouchableOpacity style={[styles.button, styles.rightButton]}>
          {/* <FontAwesome name="angle-right" size={24} color="black" /> */}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    elevation: 3,
  },
  leftButton: {
    left: 10,
  },
  rightButton: {
    right: 10,
  },
});

export default HorizontalCardList;
