import { z } from 'zod';

const faleConoscoSchema = z.object({
  nome: z
    .string()
    .min(2, { message: 'O nome deve ter pelo menos 2 caracteres' })
    .nonempty({ message: 'Nome é obrigatório' }),
  email: z
    .string()
    .email({ message: 'Formato de e-mail inválido' })
    .max(254, { message: 'E-mail excede o limite de 254 caracteres' }),
  telefone: z
    .string()
    .regex(/^\d{8,11}$/, { message: 'Telefone deve ter entre 8 e 11 dígitos numéricos' }),
  assunto: z
    .string()
    .min(5, { message: 'O assunto deve ter pelo menos 5 caracteres' })
    .max(60, { message: 'O assunto deve ter no máximo 60 caracteres' }),
  mensagem: z
    .string()
    .min(20, { message: 'A mensagem deve ter pelo menos 20 caracteres' })
    .max(400, { message: 'A mensagem deve ter no máximo 400 caracteres' }),
});

export default faleConoscoSchema;
