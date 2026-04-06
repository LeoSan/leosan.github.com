import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';
import list_cards from '../data/curso.js';
import Card from '../components/ux/Card.tsx';
import Studies from '../components/ux/Studies.tsx';

const list_cards_back = list_cards;

export default function Courses() {
	const [activeFilter, setActiveFilter] = useState('all');

	const filteredCards = list_cards_back.filter(card => {
		if (activeFilter === 'all') return true;
		if (activeFilter === '2025') return card.anio === '2025';
		if (activeFilter === '2026') return card.anio === '2026';
		return true;
	});

	return (
		<div className="font-sans antialiased text-neutral-700 bg-neutral-100 min-h-screen">
			<div className="bg-gray-200 shadow-sm border-b py-4">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<h3 className="style pull-left text-2xl font-bold uppercase text-primary">Courses</h3>
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
					<li><span onClick={() => setActiveFilter('2025')} className={`filter px-4 py-2 border rounded-full cursor-pointer transition-colors ${activeFilter === '2025' ? 'activo' : 'inactivo'}`}>2025</span></li>
					<li><span onClick={() => setActiveFilter('2026')} className={`filter px-4 py-2 border rounded-full cursor-pointer transition-colors ${activeFilter === '2026' ? 'activo' : 'inactivo'}`}>2026</span></li>
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
