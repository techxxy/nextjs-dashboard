'use server';

import {z} from 'zod';
import { Pool } from 'pg';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, {message: 'Please enter an amount greater thatn $0.'}),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});
 
const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({id:true, date:true});

const port = process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT, 10) : undefined;
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: port,
  ssl: false,
});

// This is temporary until @types/react-dom is updated
export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createInvoice(prevState: State, formData: FormData) {
    const validatedFields = CreateInvoice.safeParse({
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
    const { customerId, amount, status } = validatedFields.data;
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];
   
    try {
      const client = await pool.connect(); // Get a client from the pool
      await client.query(`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES ($1, $2, $3, $4)
      `, [customerId, amountInCents, status, date])
      client.release();
    } catch(error) {
      return {
        message: `Database Error: Failed to Create Invoice.`,
      };
    }

    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
  }

  export async function updateInvoice(
    id: string,
    prevState: State,
    formData: FormData
    ) {
    const validatedFields = UpdateInvoice.safeParse({
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    });
   
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Update Invoice.',
      };
    }
    const {customerId, amount, status} = validatedFields.data;
    const amountInCents = amount * 100;
   
    try {
      const client = await pool.connect(); // Get a client from the pool
      const query = `
        UPDATE invoices
        SET customer_id = $1, amount = $2, status = $3
        WHERE id = $4
      `;
      await client.query(query, [customerId, amountInCents, status, id]);
      client.release();
    } catch (error) {
      return { message: 'Database Error: Failed to Update Invoice.' };
    }
   
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
  }


  export async function deleteInvoice(id: string) {
    //throw new Error('Failed to Delete invoice');
    try {
      const client = await pool.connect(); // Get a client from the pool
      const queryText = `DELETE FROM invoices WHERE id = $1`;
      await client.query(queryText, [id]);
      client.release();

      revalidatePath('/dashboard/invoices');
      return { message: 'Deleted Invoice.' };
    } catch (error) {
      return { message: 'Database Error: Failed to Delete Invoice.' };
    }
  }

  export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }