import React, { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";

interface AnimatedDogSplashProps {
  onAnimationComplete: () => void;
}

export function AnimatedDogSplash({
  onAnimationComplete,
}: AnimatedDogSplashProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;
  const textFadeAnim = useRef(new Animated.Value(0)).current;
  const pawsAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animationSequence = Animated.sequence([
      // Initial fade in and scale up
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 100,
          friction: 8,
          useNativeDriver: true,
        }),
      ]),

      // Bounce effect
      Animated.spring(bounceAnim, {
        toValue: 1,
        tension: 150,
        friction: 5,
        useNativeDriver: true,
      }),

      // Text fade in
      Animated.timing(textFadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),

      // Paw prints animation
      Animated.timing(pawsAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),

      // Hold for a moment
      Animated.delay(500),

      // Fade out
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(textFadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(pawsAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ]);

    animationSequence.start(() => {
      onAnimationComplete();
    });
  }, []);

  const bounceTranslateY = bounceAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -20],
  });

  const pawScale = pawsAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1.2, 1],
  });

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      {/* Background gradient effect */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#f8fafc",
        }}
      />

      {/* Animated paw prints */}
      <Animated.View
        style={{
          position: "absolute",
          opacity: pawsAnim,
          transform: [{ scale: pawScale }],
        }}
      >
        {[...Array(5)].map((_, index) => (
          <View
            key={index}
            style={{
              position: "absolute",
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: "#e2e8f0",
              left: (index % 2 === 0 ? -100 : 100) + index * 20,
              top: -200 + index * 80,
              transform: [{ rotate: `${index * 15}deg` }],
            }}
          />
        ))}
      </Animated.View>

      {/* Main dog emoji with animations */}
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }, { translateY: bounceTranslateY }],
        }}
      >
        <Text
          style={{
            fontSize: 120,
            textAlign: "center",
          }}
        >
          🐕
        </Text>
      </Animated.View>

      {/* App name with fade animation */}
      <Animated.View
        style={{
          opacity: textFadeAnim,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "#1e293b",
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          Woofstagram
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#64748b",
            textAlign: "center",
            marginTop: 8,
            fontStyle: "italic",
          }}
        >
          Where every dog has their day
        </Text>
      </Animated.View>

      {/* Loading indicator */}
      <Animated.View
        style={{
          opacity: textFadeAnim,
          marginTop: 40,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {[...Array(3)].map((_, index) => (
          <Animated.View
            key={index}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: "#3b82f6",
              marginHorizontal: 4,
              opacity: pawsAnim,
              transform: [
                {
                  scale: pawsAnim.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [0.5, 1.5, 1],
                  }),
                },
              ],
            }}
          />
        ))}
      </Animated.View>
    </View>
  );
}
