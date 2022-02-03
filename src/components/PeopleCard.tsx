import React, { ReactNode } from 'react';
type Props = { children?: ReactNode; people: Person[] | null; title: string };

export default function PeopleCard({ people, title, children }: Props) {
	return (
		<div className='card'>
			<ol className=''>
				<h3 className='card-title'>{title}</h3>
				{people?.map((person: Person, index: number) => (
					<li key={index} className=''>
						{person.name}: [ {Object.keys(person.food).map((key) => key + ', ')}{' '}
						]
					</li>
				))}
			</ol>
			{children}
		</div>
	);
}
