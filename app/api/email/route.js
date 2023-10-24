import { render } from '@react-email/components';
import { transporter, smtpEmail } from '../../../utils/sendEmail';
import { Email } from '../../../components/Email';

export async function POST(req, res) {
  const body = await req.json();
  const { nombre, empresa, mensaje, email, telefono } = body;

  const emailHtml = render(
    <Email
      nombre={nombre}
      empresa={empresa}
      email={email}
      mensaje={mensaje}
      telefono={telefono}
    />
  );

  const options = {
    from: smtpEmail,
    to: 'lummorel@gmail.com',
    subject: 'Nuevo mensaje de FEP Website',
    html: emailHtml,
  };

  try {
    // Send email using the transporter
    await transporter.sendMail(options);
  } catch (error) {
    console.error('Failed to send email:', error);
  }
  return new Response('OK');
}
