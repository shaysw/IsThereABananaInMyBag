import { useEffect } from 'react';
import { Text } from 'react-native';
import { styles } from "./styles.js"

export function IsThereABananaInMyBagText(props) {    
    function GenerateText(isThereABananaInMyBag){
        if (isThereABananaInMyBag){
            return "Yes :)"
        }
        else{
            return "No :("
        }
    }
    
    return (
        <Text style={[
            styles.text,
            {
                marginBottom: 38
            }]}>{GenerateText(props.text)}</Text>
    )
}