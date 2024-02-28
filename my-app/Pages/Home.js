import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, Dimensions } from "react-native";
import { Card } from "react-native-elements";

const Home = () => {
    const [data, setData] = useState([]);
    const [pilihMovie, setPilihMovie] = useState(null);
    const flatListRef = useRef(null); // Ref untuk FlatList

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://api.themoviedb.org/3/trending/movie/day?api_key=887a4ba03a5e84006f98bbbed280d4f2"
            );
            const result = await response.json();
            const newData = result.results.slice(0, 1000);
            setData(newData);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    const getPosterURL = (posterpath) => {
        return `https://image.tmdb.org/t/p/original/${posterpath}`;
    };

    const handleMoviePress = (item) => {
        setPilihMovie(item);
    };

    const renderItem = ({ item }) => (
        <Card key={item.id} containerStyle={styles.card}>
            <TouchableOpacity onPress={() => handleMoviePress(item)}>
                <Image source={{ uri: getPosterURL(item.backdrop_path) }} style={styles.poster} />
                <Text style={styles.titles} h4>
                    {item.title || item.name}
                </Text>
            </TouchableOpacity>

            <Text style={styles.releaseDate}>
                Release Date: {item.release_date || item.first_air_date}
            </Text>
            <Text style={styles.popularity}>Popularity: {item.popularity}</Text>
        </Card>
    );

    const handleScrollToEnd = () => {
        flatListRef.current.scrollToEnd({ animated: true });
    };

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef} // Assign ref
                data={data}
                keyExtractor={(item) => item.id.toString()}
                numColumns={4}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 10 }} // Atur paddingBottom dengan nilai yang cukup besar
            />
            <TouchableOpacity style={styles.scrollButton} onPress={handleScrollToEnd}>
                <Text style={styles.scrollButtonText}>Scroll to End</Text>
            </TouchableOpacity>
        </View>
    );
};

const { width } = Dimensions.get("window");
const cardWidth = width * 0.157;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#D8D9DA",
    },
    titles: {
        textAlign: "center",
        color: "white",
        paddingBottom: 10,
    },
    card: {
        marginBottom: 10,
        width: cardWidth,
        backgroundColor: "#352F44",
    },
    poster: {
        width: "100%",
        height: 150,
        alignSelf: "center",
    },
    releaseDate: {
        fontSize: 12,
        color: "gray",
        marginBottom: 5,
        textAlign: "center",
    },
    popularity: {
        color: "white",
        textAlign: "center",
    },
    scrollButton: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
    },
    scrollButtonText: {
        color: "black",
        fontWeight: "bold",
    },
});

export default Home;
