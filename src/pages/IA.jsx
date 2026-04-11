import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import list_cards from '../data/ia.js';
import Card from '../components/ux/Card.tsx';
import Studies from '../components/ux/Studies.tsx';

const list_cards_ia = list_cards;

export default function IA() {
	const [activeFilter, setActiveFilter] = useState('all');

	const filteredCards = list_cards_ia.filter(card => {
		if (activeFilter === 'all') return true;
		if (activeFilter === 'theory') return card.tipo === 'theory';
		if (activeFilter === 'training') return card.tipo === 'training';
		if (activeFilter === 'prompt') return card.tipo === 'prompt';
		if (activeFilter === 'automacion') return card.tipo === 'automacion';
		return true;
	});

	return (
		<div className="font-sans antialiased text-neutral-700 bg-neutral-100 min-h-screen">
			<div className="bg-gray-200 shadow-sm border-b py-4">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<h3 className="style pull-left text-2xl font-bold uppercase text-primary">IA & Data Science</h3>
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
					<li><span onClick={() => setActiveFilter('prompt')} className={`filter px-4 py-2 border rounded-full cursor-pointer transition-colors ${activeFilter === 'prompt' ? 'activo' : 'inactivo'}`}>Prompt</span></li>
					<li><span onClick={() => setActiveFilter('automacion')} className={`filter px-4 py-2 border rounded-full cursor-pointer transition-colors ${activeFilter === 'automacion' ? 'activo' : 'inactivo'}`}>Automations</span></li>
					<li><span onClick={() => setActiveFilter('training')} className={`filter px-4 py-2 border rounded-full cursor-pointer transition-colors ${activeFilter === 'training' ? 'activo' : 'inactivo'}`}>Training</span></li>
					<li><span onClick={() => setActiveFilter('theory')} className={`filter px-4 py-2 border rounded-full cursor-pointer transition-colors ${activeFilter === 'theory' ? 'activo' : 'inactivo'}`}>Theory</span></li>
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
