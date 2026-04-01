import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';
import list_cards from '../assets/data/back.js';
import Card from '../components/ux/Card.tsx';

const list_cards_back = list_cards;



export default function Back() {
	useEffect(() => {
		// Si tenían scripts de animaciones en la pagina, acá se ejecutarían.
		// mixitup se requiere instanciar si el DOM cambia, pero como en React la idea es 
		// controlarlo, vamos a dejarlo como diseño estático a menos que se re-implemente.
	}, []);

	return (
		<div className="font-sans antialiased text-neutral-700 bg-neutral-100 min-h-screen">

			{/* start Titulo */}
			<div className="bg-gray-200 shadow-sm border-b py-4">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<h3 className="style pull-left text-2xl font-bold uppercase text-primary">backend</h3>
						<ol className="pull-right flex space-x-2 text-sm text-gray-500">
							<li><Link className="hover:text-primary transition-colors" to="/">Profile</Link>
								<span className="mx-2">/</span></li>
							<li className="active font-medium text-gray-800">Knowledge</li>
						</ol>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
			{/* end Titulo */}

			{/* start Animacion de Lenguajes y Herramientas */}
			<div className="py-12">
				<div className=" mx-auto px-4">
					<div >
						<br />

						<div className="bg-gray-200 p-6 rounded shadow mb-6 flex flex-col md:flex-row items-center gap-6">
							<div className="flex-1">
								<span className="active text-black block mb-3">
									<FaGraduationCap className="text-5xl" />
								</span>
								<h3 className="text-xl font-bold mb-2">Master's Degree in Big Data Analysis and Visualization.</h3>
								<p className="text-gray-600">Master's Degree in Big Data Analysis and Visualization,  Adress: México,  Ciudad de México, UNIR (Universidad Rioja España) Year 2025-2026. <br /> <strong>web: https://www.unir.net/ </strong></p>
							</div>
							<div className="">
								<a href="https://github.com/LeoSan/MaestriaAnalisisDatosBigData_UNIR_2024" className="btn bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors inline-block" target="_blank" rel="noreferrer">Read More</a>
							</div>
							<div className="clearfix"></div>
						</div>

						<br />
						<div className="bg-gray-200 p-6 rounded shadow mb-6 flex flex-col md:flex-row items-center gap-6">
							<div className="flex-1">
								<span className="active text-black block mb-3">
									<FaGraduationCap className="text-5xl" />
								</span>
								<span className="active text-primary block mb-3"><i className="fa fa-mortar-board fa-4x text-5xl"></i></span>
								<h3 className="text-xl font-bold mb-2">Computing's tech.</h3>
								<p className="text-gray-600">Title of Superior Technician in Computer Science mention administration and data security, Av Urdaneta con Esquina Mijares, Caracas, Venezuela, Francisco de Miranda University College, Year 2006-2009. Cohort 61. <br /> <strong>web: http://www.cufm.tec.ve </strong></p>
							</div>
							<div className="">
								<a href="https://cufm.terna.net/" className="btn bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors inline-block" target="_blank" rel="noreferrer">Read More...</a>
							</div>
							<div className="clearfix"></div>
						</div>


						<br />
						<div className="bg-gray-200 p-6 rounded shadow mb-6 flex flex-col md:flex-row items-center gap-6">
							<div className="flex-1">
								<span className="active text-black block mb-3">
									<FaGraduationCap className="text-5xl" />
								</span>
								<span className="active text-primary block mb-3"><i className="fa fa-mortar-board fa-4x text-5xl"></i></span>
								<h3 className="text-xl font-bold mb-2">Computing's tech.</h3>
								<p className="text-gray-600">Title of Superior Technician in Computer Science mention administration and data security, Av Urdaneta con Esquina Mijares, Caracas, Venezuela, Francisco de Miranda University College, Year 2006-2009. Cohort 61. <br /> <strong>web: http://www.cufm.tec.ve </strong></p>
							</div>
							<div className="">
								<a href="https://cufm.terna.net/" className="btn bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors inline-block" target="_blank" rel="noreferrer">Read More...</a>
							</div>
							<div className="clearfix"></div>
						</div>


						<ul className="clearfix flex flex-wrap gap-4 mb-8 justify-start border-b pb-4" id="filters">
							<li><span data-filter="leng app ia" className="filter active px-4 py-2 border border-primary text-primary rounded-full cursor-pointer hover:bg-primary hover:text-white transition-colors">All</span></li>
							<li><span data-filter="leng" className="filter px-4 py-2 border border-gray-300 text-gray-600 rounded-full cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-colors">Languages</span></li>
							<li><span data-filter="app" className="filter px-4 py-2 border border-gray-300 text-gray-600 rounded-full cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-colors">Tools</span></li>
							<li><span data-filter="ia" className="filter px-4 py-2 border border-gray-300 text-gray-600 rounded-full cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-colors">IA</span></li>
						</ul>

						<div id="portfoliolist" className="flex flex-wrap justify-center gap-6">

							{/* Items */}
							{list_cards_back.map((card, index) => (
								<Card key={index} card={card} />
							))}

						</div>

					</div>
				</div>
			</div>
		</div>
	);
}
