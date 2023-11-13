import { Text } from "react-native";
import { Link } from "expo-router";

export default function SendButton({content}: any){
    return(
        <Link className="bg-green py-4 px-12 rounded-2xl" href={"/"}>
            <Text className="text-gray">{content}</Text>
        </Link>
    )
}