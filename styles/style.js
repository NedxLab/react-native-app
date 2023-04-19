import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headers: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingBottom: 12,
    borderRadius: 5,
    gap: 8,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
