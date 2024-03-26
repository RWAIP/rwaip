import { Container, Flex, Heading, Image } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
    return (
        <Container maxW={"1200px"} py={4}>
            <Flex direction={"row"} alignItems="center" justifyContent={"space-between"}>
                <Flex direction={"row"} alignItems="center">
                    <Image src="/images/rwa.svg" boxSize="30px" mr={2} alt="RWA Logo" />
                    <Heading>RWA Investment Protocol</Heading>
                </Flex>
                <ConnectWallet />
            </Flex>
        </Container>
    );
}
