import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';
import list_cards from '../data/back.js';
import Card from '../components/ux/Card.tsx';

const list_cards_back = list_cards;

export default function Back() {
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
						<h3 className="style pull-left text-2xl font-bold uppercase text-primary">backend</h3>
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
				<div className="px-5">
					<div className="bg-gray-200 p-6 rounded shadow mb-6 flex flex-col md:flex-row items-center gap-6">
						<div className="flex-1">
							<span className="active text-black block mb-3">
								<FaGraduationCap className="text-5xl" />
							</span>
							<h3 className="text-xl font-bold mb-2">Master's Degree in Big Data Analysis and Visualization.</h3>
							<p className="text-gray-600">Master's Degree in Big Data Analysis and Visualization,  Adress: México,  Ciudad de México, UNIR (Universidad Rioja España) <span className='font-bold'>Year 2025-2026</span> <br /> <strong>web: https://www.unir.net/ </strong></p>
						</div>
						<div className="">
							<a href="https://estudiar.unir.net/mx/mx-esp-ma-ing-maestria-big-data/?utm_source=GOOGLE-BUSQ&utm_medium=Search&utm_campaign=UNIRMX_LT_MX_FIG_IG_MO_X_AnalisVisuaDatoMasiv-151635_MAR_X_LWEB_GLOB_MX_PROD_AO_GOOGLE-BUS_BUS_ESP_X_X&utm_content=MX_MX_FIG_IG_MO_X_AnalisVisuaDatoMasiv-151635_MAR_BUSQ_MaestriaCienciaDatos_TXT_CPC_GOOGLE-BUS_MIX_X_X_X&bi_campaignid=20185481247&bi_adgroupid=149547899996&gad_source=1&gad_campaignid=20185481247&gclid=EAIaIQobChMIsI-uhrfNkwMVThJECB1ATAXsEAAYASAAEgKlFfD_BwE" className="btn bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors inline-block" target="_blank" rel="noreferrer">Read More</a>
						</div>
						<div className="clearfix"></div>
					</div>

					<div className="bg-gray-200 p-6 rounded shadow mb-6 flex flex-col md:flex-row items-center gap-6">
						<div className="flex-1">
							<span className="active text-black block mb-3">
								<FaGraduationCap className="text-5xl" />
							</span>
							<span className="active text-primary block mb-3"><i className="fa fa-mortar-board fa-4x text-5xl"></i></span>
							<h3 className="text-xl font-bold mb-2">Computing's tech.</h3>
							<p className="text-gray-600">Title of Superior Technician in Computer Science mention administration and data security, Av Urdaneta con Esquina Mijares, Caracas, Venezuela, Francisco de Miranda University College, <span className='font-bold'>Year 2010-2014</span>. Cohort 2001. <br /> <strong>web: http://www.cufm.tec.ve </strong></p>
						</div>
						<div className="">
							<a href="https://cufm.terna.net/" className="btn bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors inline-block" target="_blank" rel="noreferrer">Read More...</a>
						</div>
						<div className="clearfix"></div>
					</div>

					<div className="bg-gray-200 p-6 rounded shadow mb-6 flex flex-col md:flex-row items-center gap-6">
						<div className="flex-1">
							<span className="active text-black block mb-3">
								<FaGraduationCap className="text-5xl" />
							</span>
							<span className="active text-primary block mb-3"><i className="fa fa-mortar-board fa-4x text-5xl"></i></span>
							<h3 className="text-xl font-bold mb-2">Computing's tech.</h3>
							<p className="text-gray-600">Title of Superior Technician in Computer Science mention administration and data security, Av Urdaneta con Esquina Mijares, Caracas, Venezuela, Francisco de Miranda University College, <span className='font-bold'>Year 2006-2009</span>. Cohort 61. <br /> <strong>web: http://www.cufm.tec.ve </strong></p>
						</div>
						<div className="">
							<a href="https://cufm.terna.net/" className="btn bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors inline-block" target="_blank" rel="noreferrer">Read More...</a>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>

				<ul id="filters" className="flex flex-wrap gap-4 justify-start" >
					<li><span onClick={() => setActiveFilter('all')} className={`filter px-4 py-2 border rounded-full cursor-pointer transition-colors ${activeFilter === 'all' ? 'activo' : 'inactivo'}`}>All</span></li>
					<li><span onClick={() => setActiveFilter('lenguaje')} className={`filter px-4 py-2 border rounded-full cursor-pointer transition-colors ${activeFilter === 'lenguaje' ? 'activo' : 'inactivo'}`}>Languages</span></li>
					<li><span onClick={() => setActiveFilter('app')} className={`filter px-4 py-2 border rounded-full cursor-pointer transition-colors ${activeFilter === 'app' ? 'activo' : 'inactivo'}`}>Tools</span></li>
				</ul>

				<div id="portfoliolist" className="flex flex-wrap justify-center gap-6">

					{/* Items */}
					{filteredCards.map((card, index) => (
						<Card key={index} card={card} />
					))}

				</div>
			</div>

		</div>
	);
}
