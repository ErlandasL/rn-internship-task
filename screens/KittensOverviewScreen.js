import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Platform,
  TouchableNativeFeedback,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";
import Colors from "../constants/Colors";

export default class KittensOverviewScreen extends React.Component {
  state = {
    value: 1,
  };

  render() {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 21) {
      TouchableCmp = TouchableNativeFeedback;
    }

    let word = "item";
    if (this.state.value > 1) {
      word = "items";
    }
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.slider}>
            <Slider
              value={this.state.value}
              onValueChange={(value) => {
                clearTimeout(this.sliderTimeoutId);
                this.sliderTimeoutId = setTimeout(() => {
                  this.setState({ value });
                }, 100);
              }}
              onSlidingComplete={sliderChanger(this.state.value)}
              minimumValue={1}
              maximumValue={100}
              step={1}
            />
            <Text style={styles.sliderText}>
              Showing {this.state.value} {word} slide to change
            </Text>
          </View>
          <FlatList
            data={selectedKittens}
            renderItem={({ item }) => (
              <TouchableCmp
                onPress={() =>
                  this.props.navigation.navigate("Details", {
                    name: item.name,
                    link: item.link,
                  })
                }
              >
                <View style={styles.item}>
                  <Text style={styles.text}>{item.name}</Text>
                  <View style={styles.imageContainer}>
                    <Image source={{ uri: item.link }} style={styles.image} />
                  </View>
                  <Text style={styles.cardText}>
                    For details click on selected cat card :)
                  </Text>
                </View>
              </TouchableCmp>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

const catNames = require("cat-names");
const kittensArray = catNames.all;

let selectedKittens = [];
function sliderChanger(num) {
  selectedKittens = [];
  for (let i = 0; i < num; i++) {
    selectedKittens.push({
      name: kittensArray[Math.floor(Math.random() * 100)],
      link: `http://placekitten.com/300/200?image=${Math.floor(
        Math.random() * 16
      )}`,
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  slider: {
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: 10,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  item: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  text: {
    color: Colors.primaryColor,
    fontSize: 40,
    marginRight: 10,
    textAlign: "center",
    paddingBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  cardText: {
    fontSize: 20,
  },
  sliderText: {
    textAlign: "center",
    fontSize: 20,
    // color: Colors.primaryColor,
  },
});
