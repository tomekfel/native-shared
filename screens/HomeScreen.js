import React from "react";
import { ScrollView, Text, View, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import axios from "axios";

import Movie from "../components/Movie";
import Header from "../components/Header";

export default function HomeScreen({ navigation }) {
  const [movies, setMovies] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [currentMovie, setCurrentMovie] = React.useState([]);

  const getPosts = async () => {
    const { data } = await axios.get(
      `https://beatporttopcharts.com/php/api/movie/search.php?s=&l=${currentPage}&c=14&rating_count=1,MAX`
    );
    setMovies(data.records);
    setCurrentPage(data.page);
    setTotalPages(data.total_pages);
  };

  React.useEffect(() => {
    getPosts();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Pressable
        key={item.imdb_link}
        onPress={() =>
          navigation.push("Detail", {
            item,
          })
        }
      >
        <MovieItem item={item} />
      </Pressable>
    );
  };

  const loadMore = async () => {
    if (currentPage < totalPages) {
      const url = `https://beatporttopcharts.com/php/api/movie/search.php?s=&l=${
        currentPage + 1
      }&c=14&rating_count=1,MAX`;
      const { data } = await axios.get(url);
      setMovies([...movies, ...data.records]);
      setCurrentPage(data.page);
      setTotalPages(data.total_pages);
    }
  };

  const onViewableItemsChanged = React.useCallback(({ viewableItems }) => {
    setCurrentMovie(viewableItems);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#0f0f0f" }}>
      <StatusBar style="auto" />
      <Header />
      {/* Scrollable content */}
      <View style={{ flex: 1, paddingBottom: 20 }}>
        <ScrollView
          indicatorStyle="white"
          contentContainerStyle={{ alignItems: "center" }}
        >
          {movies &&
            movies.map((item) => (
              <Movie key={item.imdb_link} item={item} navigation={navigation} />
            ))}
        </ScrollView>
      </View>
    </View>
  );
}
