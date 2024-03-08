import db from '@/db'
import { formatCurrency } from './utils';

export async function fetchRevenue() {
  try {
    const revenueData = await db.revenue.findMany();
    return revenueData;
  } catch (error) {
    console.error('Error fetching revenue data:', error);
    throw error;
  }
}

export async function fetchLatestInvoices() {
  try {
    const latestInvoices = await db.invoices.findMany({
      select: {
        id: true,
        amount: true,
        date: true,
        customer: {
          select: {
            name: true,
            email: true,
            image_url: true,
          },
        },
      },
      orderBy: {
        date: 'desc',
      },
      take: 5,
    });

    // Format currency for each invoice
    latestInvoices.forEach(invoice => {
      invoice.amount = formatCurrency(invoice.amount);
    });

    return latestInvoices;
  } catch (error) {
    console.error('Error fetching the latest invoices:', error);
    throw error;
  }
}

export async function fetchCardData() {
  try {
    const numberOfInvoices = await db.invoices.count();
    const numberOfCustomers = await db.customers.count();
    const paidInvoiceStatus = await db.invoices.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        status: 'paid', // Filter for invoices with status "paid"
      },
    });
    const pendingInvoiceStatus = await db.invoices.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        status: 'pending', 
      },
    });

    // Extract the sum of paid and pending invoices
    const totalPaidInvoices = formatCurrency(paidInvoiceStatus._sum.amount ?? 0);
    const totalPendingInvoices = formatCurrency(pendingInvoiceStatus._sum.amount ?? 0);

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Error fetching card data:', error);
    throw error;
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInvoices(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const invoices = await db.invoice.findMany({
      where: {
        OR: [
          { customer: { name: { contains: query } } },
          { customer: { email: { contains: query } } },
          { amount: { contains: query } },
          { date: { contains: query } },
          { status: { contains: query } },
        ],
      },
      include: {
        customer: true,
      },
      orderBy: {
        date: 'desc',
      },
      take: ITEMS_PER_PAGE,
      skip: offset,
    });



    return invoices;
  } catch (error) {
    console.error('Error fetching invoices:', error);
    throw error;
  }
}

/* export async function fetchInvoicesPages(query: string) {
  try {
    const count = await db.invoices.count({
      where: {
        OR: [
          { customer: { name: { contains: query } } },
          { customer: { email: { contains: query } } },
          { amount: { contains: query } },
          { date: { contains: query } },
          { status: { contains: query } },
        ],
      },
    });

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Error fetching total number of invoices:', error);
    throw error;
  }
} */

export async function fetchInvoiceById(id: string) {
  try {
    const invoice = await db.invoices.findUnique({
      where: {
        id: id,
      },
    });

    if (!invoice) {
      throw new Error('Invoice not found');
    }

    return invoice;
  } catch (error) {
    console.error('Error fetching invoice by id:', error);
    throw error;
  }
}

export async function fetchCustomers() {
  try {
    const customers = await db.customers.findMany({
      orderBy: {
        name: 'asc',
      },
      select: {
        id: true,
        name: true,
      },
    });

    return customers;
  } catch (error) {
    console.error('Error fetching all customers:', error);
    throw error;
  }
}

export async function fetchFilteredCustomers(query: string) {
  try {
    const customers = await db.customers.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { email: { contains: query } },
        ],
      },
      orderBy: {
        name: 'asc',
      },
      select: {
        id: true,
        name: true,
        email: true,
        image_url: true,
        invoices: {
          select: {
            id: true,
            amount: true,
            status: true,
          },
        },
      },
    });

    customers.forEach(customer => {
      customer.invoices.forEach(invoice => {
        invoice.total_pending = formatCurrency(invoice.total_pending);
        invoice.total_paid = formatCurrency(invoice.total_paid);
      });
    });

    return customers;
  } catch (error) {
    console.error('Error fetching customer table:', error);
    throw error;
  }
}

export async function getUser(email: string) {
  try {
    const user = await prisma.users.findUnique({
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