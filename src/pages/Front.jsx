import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';
import list_cards from '../data/front.js';
import Card from '../components/ux/Card.tsx';
import Studies from '../components/ux/Studies.tsx';

const list_cards_back = list_cards;

export default function Front() {
	const [activeFilter, setActiveFilter] = useState('all');

	const filteredCards = list_cards_back.filter(card => {
		if (activeFilter === 'all') return true;
		if (activeFilter === 'lenguaje') return card.tipo === 'lenguaje';
		if (activeFilter === 'app') return card.tipo === 'app';
		return true;
	});

	return (
		<div className="font-sans antialiased text-neutral-700 bg-neutral-100 min-h-screen">
			<div className="bg-gray-200 shadow-sm border-b py-4">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<h3 className="style pull-left text-2xl font-bold uppercase text-primary">frotend</h3>
						<ol className="pull-right flex space-x-2 text-sm text-gray-500">
							<li>
								<Link className="hover:text-primary transition-colors" to="/">Profile</Link>
								<span className="mx-2">/</span></li>
							<li className="active font-medium text-gray-800 font-bold">Knowledge</li>
						</ol>
					</div>
				</div>
			</div>

			<div className="mt-6 mx-auto px-4">
				<Studies />

				<ul id="filters" className="flex flex-wrap gap-4 justify-start" >
					<li><span onClick={() => setActiveFilter('all')} className={`filter px-4 py-2 border rounded-full cursor-pointer transition-colors ${activeFilter === 'all' ? 'activo' : 'inactivo'}`}>All</span></li>
					<li><span onClick={() => setActiveFilter('lenguaje')} className={`filter px-4 py-2 border rounded-full cursor-pointer transition-colors ${activeFilter === 'lenguaje' ? 'activo' : 'inactivo'}`}>Languages</span></li>
					<li><span onClick={() => setActiveFilter('app')} className={`filter px-4 py-2 border rounded-full cursor-pointer transition-colors ${activeFilter === 'app' ? 'activo' : 'inactivo'}`}>Tools</span></li>
				</ul>

				<div id="portfoliolist" className="flex flex-wrap justify-center gap-6">

					{filteredCards.map((card, index) => (
						<Card key={index} card={card} />
					))}

				</div>
			</div>

		</div>
	);
}
