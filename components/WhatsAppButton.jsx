import Image from 'next/image';
import Link from 'next/link';


const WhatsAppButton = () => {
    return (
        <Link href="https://wa.me/542236637551" target="_blank">
            <Image src="/icon_whatsapp.png" alt="WhatsApp" width={50} height={50} className='fixed bottom-20 right-6 md:bottom-16 md:right-10 z-20' />
        </Link>
    );

}

export default WhatsAppButton