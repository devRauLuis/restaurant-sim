export type Food = 'ENTREE' | 'MAIN_DISH' | 'DESSERT';

export enum Cutlery {
	Knife = 'KNIFE',
	Spoon = 'SPOON',
	Fork = 'FORK',
	CakeSpoon = 'CAKE_SPOON',
}

export type Person = {
	name: string;
	food: Record<Food, boolean>;
	eatingTime: number;
};

export type People = Person[];

export {};
