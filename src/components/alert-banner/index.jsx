import { Container, Description } from "./style"
import { FontAwesome6 } from "@expo/vector-icons";

const AlertBanner = ({ type, message }) => {

    function IconType() {
        switch (type) {
            case "alert":
                return "triangle-exclamation"
            case "success":
                return "check"
            case "danger":
                return "exclamation"
            default:
                return "info"
        }
    }   

    return (
        <Container>
            <FontAwesome6 
                name={IconType()}
                size={24}
                color="black"
            />
            <Description>{message}</Description>
        </Container>
    )
}

export default AlertBanner