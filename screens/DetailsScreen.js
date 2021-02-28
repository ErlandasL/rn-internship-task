import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam("name");
    const link = navigation.getParam("link");

    return (
      <View style={styles.container}>
        <ScrollView>
          <Image source={{ uri: link }} style={styles.image} />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.details}>
            Ea sunt proident tempor culpa. Incididunt ipsum dolore commodo
            exercitation eu deserunt velit qui veniam labore. Magna mollit
            aliquip et laborum minim proident et pariatur consequat laboris.
            Magna sit labore ut duis cillum elit in irure nulla dolor. Deserunt
            labore et dolore reprehenderit deserunt. Quis ex Lorem laboris
            cillum eiusmod cillum sunt. Ut nulla eu aliqua voluptate laborum
            deserunt dolor labore id amet. Aliquip voluptate velit cupidatat
            aute reprehenderit tempor aute quis sunt. Est anim ipsum
            reprehenderit minim tempor magna eiusmod elit mollit incididunt.
            Esse ex tempor aliqua pariatur dolore aliquip est. Labore sint dolor
            velit fugiat esse ea ad enim labore Lorem reprehenderit quis veniam
            nulla.
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  name: {
    fontSize: 40,
    margin: 15,
  },
  details: {
    margin: 5,
    textAlign: "justify",
  },
  image: {
    width: "100%",
    height: 400,
  },
});
