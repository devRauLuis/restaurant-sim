import { Person } from '../models';
import PeopleCard from './PeopleCard';

type Props = {
	knives: number;
	forks: number;
	spoons: number;
	cakeSpoons: number;
	sendToTable: () => void;
	people: Person[];
	table: Person[];
	done: Person[];
};

export default function Restaurant({
	knives,
	forks,
	spoons,
	cakeSpoons,
	sendToTable,
	people,
	table,
	done,
}: Props) {
	return (
		<>
			<div className='bg-lime-300 text-center text-lg font-semibold'>
				Knives: {knives} - Forks: {forks} - Spoons: {spoons} - Cake Spoons:{' '}
				{cakeSpoons}
			</div>
			<div className='grid grid-cols-3 gap-4 mt-4'>
				<PeopleCard title='People' people={people}>
					{people && people.length > 0 && (
						<button
							className='bg-black py-1 px-2 mt-4 text-white'
							onClick={sendToTable}>
							Send #1 to table
						</button>
					)}
				</PeopleCard>
				<PeopleCard title='Table' people={table} />
				<PeopleCard title='Done' people={done} />
			</div>
		</>
	);
}
