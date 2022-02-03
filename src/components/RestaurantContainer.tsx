import { useState } from 'react';
import useCutlery from '../customHooks/useCutlery';
import {
	checkAndDecrementCutlery,
	checkAndIncrementCutlery,
	delay,
	makePeople,
} from '../utils';
import Restaurant from './Restaurant';

export const generatedPeople = makePeople();

const cutleryCount = {
	knives: 6,
	forks: 5,
	spoons: 6,
	cakeSpoons: 4,
};
export default function RestaurantContainer() {
	const [people, setPeople] = useState<Person[]>(generatedPeople);
	const {
		knives,
		forks,
		spoons,
		cakeSpoons,
		decrementCutlery,
		incrementCutlery,
	} = useCutlery({
		initialState: cutleryCount,
	});

	const [table, setTable] = useState<Person[]>([]);
	const [done, setDone] = useState<Person[]>([]);

	const sendToTable = async () => {
		const firstInLine = people && people[0];

		const isReadyToEat = checkAndDecrementCutlery(
			firstInLine!,
			decrementCutlery
		);

		if (isReadyToEat) {
			setPeople(
				(prevPeople) =>
					prevPeople?.filter((el) => el.name !== firstInLine.name) || []
			);
			setTable((prevTable) => [...prevTable, firstInLine]);
			delay(() => {
				setTable(
					(prevTable) =>
						prevTable?.filter((el) => el.name !== firstInLine.name) || []
				);
				checkAndIncrementCutlery(firstInLine, incrementCutlery);
				setDone((prevDone) => [...prevDone, firstInLine]);
			}, firstInLine?.eatingTime);
		}
	};

	const props = {
		knives,
		forks,
		spoons,
		cakeSpoons,
		sendToTable,
		people,
		table,
		done,
	};
	return <Restaurant {...props} />;
}
