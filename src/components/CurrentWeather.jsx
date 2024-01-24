import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import styles from "../styles/currentweather-styles.js";

const CurrentWeather = () => {
	return (
		<SafeAreaView style={styles.wrapper}>
			<View style={styles.container}>
				<Feather
					name="sun"
					size={100}
					color="black"
				/>
				<Text style={styles.temp}>5</Text>
				<Text style={styles.feels}>Feels like 4</Text>
				<View style={styles.hlow}>
					<Text style={styles.highlow}>High: 8 </Text>
					<Text style={styles.highlow}>Low: 4</Text>
				</View>
			</View>
			<View style={styles.bodyWrapper}>
				<Text style={styles.description}>It's Sunny</Text>
				<Text style={styles.message}>It's a perfect T-shirt weather</Text>
			</View>
			{/* end of title */}
		</SafeAreaView>
	);
};

export default CurrentWeather;
