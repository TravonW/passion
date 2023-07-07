import { Text, View, Image } from "react-native";
import Lucki from "./assets/images/mom.jpeg"
import styles from "./assets/styles/styles";

export default function App() {
  return (
    <View >
      <View style={styles.ImageContainer}>
      <Image style={styles.Image}source={Lucki } />
      <View styles={styles.textContainer}>
      <Text style={styles.words}> Role </Text>
      <Text styles={styles.text}> Im a Lead Developer</Text>
      <Text styles={styles.words}> Passion </Text>
      <Text styles={styles.text}> I am very passionate about game design and i want to practice my code , so i can become a software engieer to get insights about upcoming tech and videogames, also hopefully get early access</Text>
      <Text styles={styles.words}> Dream Career</Text>
      <Text styles={styles.text}> I wish to be a software engineer or Hr at a game desiging company to have insights or as an Hr to be able to cheer people up</Text>
      </View>
       </View>
    </View>
  );
}

