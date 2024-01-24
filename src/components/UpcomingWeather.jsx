import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import React from "react";
import uw_styles from "../styles/upcomingweather-styles";

const DATA = ["ayo", "sola", "Mike"];
const Item = ({ title }) => (
	<View>
		<Text>{title}</Text>
	</View>
);

const UpcomingWeather = () => {
	return (
		<SafeAreaView>
			<View>
				<Text>Hello world</Text>
				<FlatList
					data={DATA}
					renderItem={({ item }) => <Item title={item} />}
					keyExtractor={(item) => item}
				/>
			</View>
		</SafeAreaView>
	);
};

export default UpcomingWeather;
