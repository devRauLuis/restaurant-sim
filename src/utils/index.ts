import {
	MAIN_COURSE,
	THREE_COURSE,
	TWO_COURSE,
} from '../customHooks/useCutlery';
import { Person } from '../models';
import names from './names';

export const delay = (cb: () => void, time: number) => setTimeout(cb, time);

export const getRndInteger = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

export const makePeople = () =>
	[...Array(10).keys()].map(
		(_, i) =>
			({
				name: names[i],
				eatingTime: getRndInteger(15000, 20000),
				food:
					i < 6
						? { ENTREE: true, MAIN_DISH: true, DESSERT: true }
						: i < 8
						? { MAIN_DISH: true, DESSERT: true }
						: { MAIN_DISH: true },
			} as Person)
	);

export const checkAndDecrementCutlery = (
	person: Person,
	decrementCutlery: (e: string) => void
) => {
	let isReadyToEat = true;
	try {
		updateCutlery(person, decrementCutlery);
	} catch (e) {
		console.log(e);
		isReadyToEat = false;
	}
	return isReadyToEat;
};

export const checkAndIncrementCutlery = (
	person: Person,
	incrementCutlery: (type: string) => void
) => updateCutlery(person, incrementCutlery);

const updateCutlery = (person: Person, updater: (type: string) => void) => {
	if (person?.food.ENTREE && person?.food.MAIN_DISH && person?.food.DESSERT) {
		updater(THREE_COURSE);
	} else if (person?.food.MAIN_DISH && person?.food.DESSERT) {
		updater(TWO_COURSE);
	} else {
		updater(MAIN_COURSE);
	}
};
