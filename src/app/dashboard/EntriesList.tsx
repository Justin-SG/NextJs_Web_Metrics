"use client"

import type { DisplayableTransaction } from './booking';
import TransactionsDetail from './TransactionDetail';

interface Props {
	bookings: DisplayableTransaction[]
}

export default function EntriesList({ bookings }: Props) {
	return (

		<div className="px-4">
			{bookings.map(function (booking, index) {
				return (
					<button key={index} className="contents" onClick={() => alert('clicked on something')}>
						<TransactionsDetail transaction={booking} />
					</button>
				);
			})}
		</div>

	)
}