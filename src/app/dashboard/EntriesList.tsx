import TransactionsDetail from './TransactionDetail';
import prisma from "@/lib/prismaClient";

export default async function EntriesList() {
	const transactions = await prisma.transaction.findMany();
	return (

		<div className="px-4">
			{transactions.map(function (booking, index) {
				return (
					<TransactionsDetail key={index} transaction={booking} />
				);
			})}
		</div>

	)
}