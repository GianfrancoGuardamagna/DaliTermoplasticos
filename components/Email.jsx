import {
    Body,
    Head,
    Html,
    Tailwind,
    Heading,
    Text,
} from "@react-email/components";

export function Email({ nombre, email, mensaje, telefono, empresa }) {
    return (
        <Html>
            <Head />
            <Tailwind>
                <Body>
                    <Heading style={{ color: '#499F83' }} >El siguiente mensaje fue enviado desde la pagina web de Dali</Heading>
                    <Text><strong>Nombre:</strong> {nombre}</Text>
                    <Text><strong>Empresa:</strong> {empresa}</Text>
                    <Text><strong>Telefono:</strong> {telefono}</Text>
                    <Text><strong>Email:</strong> {email}</Text>
                    <Text><strong>Mensaje:</strong> {mensaje}</Text>
                </Body>
            </Tailwind>
        </Html>
    )
}



