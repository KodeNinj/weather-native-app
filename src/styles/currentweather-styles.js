import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
	container:{
		justifyContent: "center",
		flex: 1,
		alignItems: "center"
	},
	wrapper:{
		flex: 1,
			backgroundColor: "turquoise",
	},
	temp:{
		color: "black",
		fontSize: 48
	},
	feels:{
		fontSize: 30,
		color: "black"
	},
	highlow:{
		color: "black",
		fontSize: 20,
        fontWeight: "bold"
	},
	hlow:{
		flexDirection: "row",
		gap: 30
	},
	bodyWrapper:{
		justifyContent: "flex-end",
		alignItems: "flex-start",
		paddingLeft: 25,
		marginBottom: 40
		// flex: 1
	},
	description:{
		fontSize: 48
	},
	message:{
		fontSize: 30
	},
})