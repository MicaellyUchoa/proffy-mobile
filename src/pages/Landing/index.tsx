import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import landingImg from "../../assets/images/landing.png";
import studyImg from "../../assets/images/icons/study.png";
import giveClassesImg from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
function Landing() {
    const { navigate } = useNavigation();

    function handleNavigateToPage(page: string) {
        navigate(page);
    }

    function handleNavigateToStudyPage() {
        navigate("Study");
    }
    
    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
            <Text style={styles.title}>
                Seja bem-vindo, {"\n"}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton
                    onPress={handleNavigateToStudyPage}
                    style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyImg} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton
                    onPress={() => handleNavigateToPage("GiveClasses")}
                    style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClassesImg} />
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>
            <Text style={styles.totalConnections}>
                Total de 285 conexões já realizadas <Image source={heartIcon} />
            </Text>
        </View>
    );
}

export default Landing;
