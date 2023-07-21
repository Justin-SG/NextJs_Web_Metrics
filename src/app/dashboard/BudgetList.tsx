import FormattedNumber from './FormattedNumber';
import prisma from "@/lib/prismaClient";

export default async function BudgetList() {
	const budgets = await prisma.budget.findMany();
	return (
		<div className="px-4">
			{budgets.map(function (budget, index) {
				return (
					<a key={index} href="#top" className="block border-b">
						<div>
							<div className="mb-1 flex justify-between pt-4 text-base font-medium md:text-lg">
								<span>{budget.name}</span>
								<span>
									<FormattedNumber number={budget.spent} /> / <FormattedNumber number={budget.limit} />
								</span>
							</div>
							<div className="mb-4 h-4 w-full rounded-full bg-gray-200">
								<div
									className={`h-4 rounded-full
										${budget.percentage > 0.9 ? 'bg-red-500' :
											budget.percentage > 0.7 ? 'bg-yellow-300' :
												'bg-green-400'}`}
									style={{ width: `${budget.percentage * 100}%` }}
								/>
							</div>
						</div>
					</a>
				);
			})}
		</div>
	)
}