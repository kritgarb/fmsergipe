import { Router, Request, Response } from 'express';
import nodemailer from 'nodemailer';

const router = Router();

interface EmailRequestBody {
    nome: string;
    email: string;
    telefone: string;
    assunto: string;
    mensagem: string;
}

router.post('/enviarformulario', async (req: Request, res: Response) => {
    const { nome, email, telefone, assunto, mensagem } = req.body as EmailRequestBody;

    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // ou outro serviço (e.g., 'Outlook', 'Yahoo')
            auth: {
                user: 'diegogsantana94@gmail.com', // Substitua pelo seu e-mail
                pass: 'intt duki hdlr yqsw', // Use uma senha de aplicativo, se necessário
            },
        });

        const mailOptions = {
            from: email,
            to: 'diegogsantana94@gmail.com', // Destinatário final
            subject: `Mensagem de ${nome}: ${assunto}`,
            text: `
        Nome: ${nome}
        E-mail: ${email}
        Telefone: ${telefone}
        Assunto: ${assunto}
        Mensagem:
        ${mensagem}
      `,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: 'E-mail enviado com sucesso!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Erro ao enviar e-mail.' });
    }
});

export default router;
