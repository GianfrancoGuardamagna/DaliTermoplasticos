import {
    Body,
    Head,
    Html,
    Tailwind,
    Text,
} from "@react-email/components";

export function Email({ name, email, message, phone, empresa }) {
    return (
        <Html>
            <Head />
            <Tailwind>
                <Body>
                    <Text className="text-sm font-museo text-fepGreen">Nombre: <span className="text-black">{name}</span><br /></Text>
                    <Text className="text-sm font-museo text-fepGreen">
                        <span className="font-museo text-fepGreen">Empresa:</span><span className="text-black">{empresa}</span><br />
                        <span className="font-museo text-fepGreen">Mensaje:</span><span className="text-black">{message}</span><br />
                        <span className="font-museo text-fepGreen">Email:</span><span className="text-black">{email}</span><br />
                        <span className="font-museo text-fepGreen">Telefono:</span><span className="text-black">{phone}</span><br />
                    </Text>
                </Body>
            </Tailwind>
        </Html>
    )
}



