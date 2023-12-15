import { Container, Group, Image, Paper, Stack, Text } from '@mantine/core';
import Seo from 'shared/components/Seo';
import QRImage from 'assets/images/image-qr-code.png';

const Home = () => (
    <>
        <Seo title={'QR Code Component'} />
        <Container fluid bg={'light_gray'} h={'100vh'}>
            <Group justify="center" h={'100%'}>
                <Stack align="center">
                    <Paper h={450} w={280} shadow="xl" radius="lg" p="md">
                        <Image radius="md" src={QRImage} />
                        <Stack mt={'md'} gap="xs">
                            <Text
                                fz={'xl'}
                                fw={700}
                                ta="center"
                                c={'dark_blue'}
                            >
                                Improve your front-end skills by building
                                projects
                            </Text>
                            <Text
                                fz={'sm'}
                                fw={400}
                                ta="center"
                                c={'grayish_blue'}
                            >
                                Scan the QR code to visit Frontend Mentor and
                                take your coding skills to the next level
                            </Text>
                        </Stack>
                    </Paper>
                </Stack>
            </Group>
        </Container>
    </>
);

export default Home;
