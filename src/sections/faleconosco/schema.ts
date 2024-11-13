import { z } from 'zod';

const faleConoscoSchema = z.object({
  nome: z.string().min(2, { message: 'Nome é obrigatório' }),
  email: z
    .string()
    .email({ message: 'E-mail inválido' })
    .max(254, { message: 'E-mail inválido' }),
  telefone: z
    .number({ message: 'Digite apenas números' })
    .min(11111111, { message: 'Telefone inválido' })
    .max(99999999999, { message: 'Telefone inválido' }),
  assunto: z
    .string()
    .min(5, { message: 'Assunto muito curto' })
    .max(60, { message: 'Assunto muito longo' }),
  mensagem: z
    .string()
    .max(400, { message: 'Mensagem deve ter no máximo 400 caracteres' })
    .min(20, { message: 'Mensagem muito curta' }),
});

export default faleConoscoSchema;
