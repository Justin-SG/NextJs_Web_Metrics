import prisma from "@/lib/prismaClient";
import Disposable_income from './DisposableIncome';
import Budget_list from './BudgetList';
import Entries_list from './EntriesList';
import NewTransaction from "./NewTransaction";
import { headers } from "next/headers";

export default async function DashboardPage() {

  headers();

  const transactions = await prisma.transaction.findMany();
  const budgets = await prisma.budget.findMany();

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-indigo-900 to-blue-800">
      <nav className="border-gray-200 bg-white px-2 py-2.5 sm:px-4 md:h-20">
        <a href="/" className="flex items-center">
          <span className="self-center whitespace-nowrap bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-2xl font-semibold text-transparent">
            Dashboard
          </span>
        </a>
      </nav>

      <NewTransaction />
      <div className="min-h-0 flex-auto">
        <div className="grid h-full min-h-0 grid-rows-4 gap-4 p-4 md:grid-flow-col md:grid-cols-6">
          <div className="flex items-center rounded-lg bg-white p-6 md:col-span-3 lg:col-span-2">
            <Disposable_income />
          </div>
          <div className="row-span-2 overflow-y-auto rounded-lg bg-white md:col-span-3 md:row-span-3 lg:col-span-2">
            <Budget_list budgets={budgets} />
          </div>
          <div className="row-span-4 hidden rounded-lg bg-white md:col-span-3 md:flex md:flex-col lg:col-span-4">
            <div className="min-h-0 flex-auto overflow-y-auto pt-2">
              <Entries_list bookings={transactions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
