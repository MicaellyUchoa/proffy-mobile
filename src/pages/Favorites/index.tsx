import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";
function Favorites() {
    const [favorites, setFavorites] = useState([]);
    const loadFavorites = () => {
        AsyncStorage.getItem("favorites").then(response => {
            if (response) {
                const favoritesTeachers = JSON.parse(response);

                setFavorites(favoritesTeachers);
            }
        });
    };

    useFocusEffect(() => {
        loadFavorites();
    });

    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos" />
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
                style={styles.teacherList}>
                {favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
}

export default Favorites;
