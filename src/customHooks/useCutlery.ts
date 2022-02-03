import { useState } from 'react';

export const THREE_COURSE = 'THREE_COURSE';
export const TWO_COURSE = 'TWO_COURSE';
export const MAIN_COURSE = 'MAIN_COURSE';

type CutleryCount = {
	knives: number;
	forks: number;
	spoons: number;
	cakeSpoons: number;
};

type Props = { initialState: CutleryCount };

export default function useCutlery({
	initialState: {
		knives: initialKnives,
		forks: initialForks,
		spoons: initialSpoons,
		cakeSpoons: initialCakeSpoons,
	},
}: Props) {
	const [knives, setKnives] = useState(initialKnives);
	const [forks, setForks] = useState(initialForks);
	const [spoons, setSpoons] = useState(initialSpoons);
	const [cakeSpoons, setCakeSpoons] = useState(initialCakeSpoons);

	const decrement = (type: string) => {
		switch (type) {
			case THREE_COURSE:
				if (spoons > 0 && forks > 0 && knives > 0 && cakeSpoons > 0) {
					setKnives(knives - 1);
					setForks(forks - 1);
					setSpoons(spoons - 1);
					setCakeSpoons(cakeSpoons - 1);
					break;
				} else throw new Error('Not enough cutlery for three-course meal.');
			case TWO_COURSE:
				if (forks > 0 && knives > 0 && cakeSpoons > 0) {
					setForks(forks - 1);
					setKnives(knives - 1);
					setCakeSpoons(cakeSpoons - 1);
					break;
				} else throw new Error('Not enough cutlery for two-course meal.');
			case MAIN_COURSE:
				if (forks > 0 && knives > 0) {
					setForks(forks - 1);
					setKnives(knives - 1);
					break;
				} else throw new Error('Not enough cutlery for main course.');
			default:
				break;
		}
	};

	const increment = (type: string) => {
		switch (type) {
			case THREE_COURSE:
				if (
					spoons < initialSpoons &&
					forks < initialForks &&
					knives < initialKnives &&
					cakeSpoons < initialCakeSpoons
				) {
					setKnives(knives + 1);
					setForks(forks + 1);
					setSpoons(spoons + 1);
					setCakeSpoons(cakeSpoons + 1);
				}
				break;

			case TWO_COURSE:
				if (
					forks < initialForks &&
					knives < initialKnives &&
					cakeSpoons < initialCakeSpoons
				) {
					setForks(forks + 1);
					setKnives(knives + 1);
					setCakeSpoons(cakeSpoons + 1);
				}
				break;

			case MAIN_COURSE:
				if (forks < initialForks && knives < initialKnives) {
					setForks(forks + 1);
					setKnives(knives + 1);
				}
				break;
			default:
				break;
		}
	};

	return {
		knives,
		forks,
		spoons,
		cakeSpoons,
		decrementCutlery: decrement,
		incrementCutlery: increment,
	};
}
