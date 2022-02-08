type Food = 'ENTREE' | 'MAIN_DISH' | 'DESSERT';

enum Cutlery {
	Knife = 'KNIFE',
	Spoon = 'SPOON',
	Fork = 'FORK',
	CakeSpoon = 'CAKE_SPOON',
}

type Person = {
	name: string;
	food: Record<Food, boolean>;
	eatingTime: number;
};

type People = Person[];

export {};