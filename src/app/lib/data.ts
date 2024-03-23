import db from '@/db'
import { formatCurrency } from './utils';
//
// export async function fetchRevenue() {
//   try {
//     const revenueData = await db.revenue.findMany();
//     return revenueData;
//   } catch (error) {
//     console.error('Error fetching revenue data:', error);
//     throw error;
//   }
// }
//
// export async function fetchCardData() {
//   try {
//     const numberOfInvoices = await db.invoice.count();
//     const numberOfCustomers = await db.customer.count();
//     const paidInvoiceStatus = await db.invoice.aggregate({
//       _sum: {
//         amount: true,
//       },
//       where: {
//         status: 'paid', // Filter for invoices with status "paid"
//       },
//     });
//     const pendingInvoiceStatus = await db.invoice.aggregate({
//       _sum: {
//         amount: true,
//       },
//       where: {
//         status: 'pending', 
//       },
//     });
//
//     // Extract the sum of paid and pending invoices
//     const totalPaidInvoices = formatCurrency(paidInvoiceStatus._sum.amount ?? 0);
//     const totalPendingInvoices = formatCurrency(pendingInvoiceStatus._sum.amount ?? 0);
//
//     return {
//       numberOfCustomers,
//       numberOfInvoices,
//       totalPaidInvoices,
//       totalPendingInvoices,
//     };
//   } catch (error) {
//     console.error('Error fetching card data:', error);
//     throw error;
//   }
// }

const ITEMS_PER_PAGE = 6;
// export async function fetchFilteredInvoices(query: string, currentPage: number) {
//   const offset = (currentPage - 1) * ITEMS_PER_PAGE;
//
//   try {
//     // Prepare the where clause based on the query
//     const whereClause: any = {
//       OR: [
//         { customer: { name: { contains: query } } },
//         { customer: { email: { contains: query } } },
//         { status: { contains: query } },
//       ],
//     };
//
//     // Add the amount filter only if the query is a valid number
//     const amountQuery = parseFloat(query);
//     if (!isNaN(amountQuery)) {
//       whereClause.OR.push({ amount: amountQuery });
//     }
//
//     const invoices = await db.invoice.findMany({
//       where: whereClause,
//       include: {
//         customer: true,
//       },
//       orderBy: {
//         date: 'desc',
//       },
//       take: ITEMS_PER_PAGE,
//       skip: offset,
//     });
//
//     return invoices;
//   } catch (error) {
//     console.error('Error fetching invoices:', error);
//     throw error;
//   }
// }

// export async function fetchInvoicesPages(query: string) {
//   try {
//     // Prepare the where clause based on the query
//     const whereClause: any = {
//       OR: [
//         { customer: { name: { contains: query } } },
//         { customer: { email: { contains: query } } },
//         { status: { contains: query } },
//       ],
//     };
//
//     // Add the amount filter only if the query is a valid number
//     const amountQuery = parseFloat(query);
//     if (!isNaN(amountQuery)) {
//       whereClause.OR.push({ amount: amountQuery });
//     }
//
//     const count = await db.invoice.count({
//       where: whereClause,
//     });
//
//     const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
//     return totalPages;
//   } catch (error) {
//     console.error('Error fetching total number of invoices:', error);
//     throw error;
//   }
// }
//
// export async function fetchInvoiceById(id: string) {
//   try {
//     const invoice = await db.invoice.findUnique({
//       where: {
//         id: id,
//       },
//     });
//
//     if (!invoice) {
//       throw new Error('Invoice not found');
//     }
//
//     return invoice;
//   } catch (error) {
//     console.error('Error fetching invoice by id:', error);
//     throw error;
//   }
// }
//
// export async function fetchCustomers() {
//   try {
//     const customers = await db.customer.findMany({
//       orderBy: {
//         name: 'asc',
//       },
//       select: {
//         id: true,
//         name: true,
//       },
//     });
//
//     return customers;
//   } catch (error) {
//     console.error('Error fetching all customers:', error);
//     throw error;
//   }
// }

export async function getUser(email: string) {
  try {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}