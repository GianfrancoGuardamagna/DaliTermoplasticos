import { render } from '@react-email/components';
import { transporter, smtpEmail } from '../../../utils/sendEmail';
import { Email } from '../../../components/Email';

export async function POST(req, res) {
  const body = await req.json();
  const { name, empresa, message, email, phone } = body;

  const emailHtml = render(
    <Email
      name={name}
      empresa={empresa}
      email={email}
      message={message}
      phone={phone}
    />
  );

  const options = {
    from: smtpEmail,
    to: smtpEmail,
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
