import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';


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
							<li><span data-filter="app card" className="filter active px-4 py-2 border border-primary text-primary rounded-full cursor-pointer hover:bg-primary hover:text-white transition-colors">All</span></li>
							<li><span data-filter="app" className="filter px-4 py-2 border border-gray-300 text-gray-600 rounded-full cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-colors">Languages</span></li>
							<li><span data-filter="card" className="filter px-4 py-2 border border-gray-300 text-gray-600 rounded-full cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-colors">Tools</span></li>
						</ul>

						<div id="portfoliolist" className="flex flex-wrap justify-center gap-6">

							{/* Items */}
							<div data-cat="app" className="portfolio app mix_all">
								<div className="portfolio-wrapper">
									<div className="card bg-white shadow-md rounded overflow-hidden hover:shadow-xl transition-shadow duration-300" style={{ width: '18rem' }}>
										<img className="img-responsive w-full h-48 object-contain p-4" alt="" src="imagen/back/php.png" />
										<div className="card-body p-5 border-t">
											<h5 className="card-title text-lg font-bold mb-2">PHP Senior</h5>
											<p className="card-text text-sm text-gray-600 mb-4 h-32 overflow-y-auto">It is the language where I feel comfortable, in confidence and my first favorite, since I have more experience due to the long journey in participation and collaboration in projects, in the course of my career. Management of framework and integration with multiple types of databases and implementation both back-end and front-end.</p>
											<a href="https://github.com/LeoSan/DesarrolloWebBackendPHP_PLATZI_2021" className="btn btn-primary block w-full text-center bg-primary text-white py-2 rounded hover:bg-primary-dark transition-colors" target="_blank" rel="noreferrer">Studies ... 👨‍🎓 ...</a>
										</div>
									</div>
								</div>
							</div>

							<div data-cat="app" className="portfolio app mix_all">
								<div className="portfolio-wrapper">
									<div className="card bg-white shadow-md rounded overflow-hidden hover:shadow-xl transition-shadow duration-300" style={{ width: '18rem' }}>
										<img className="img-responsive w-full h-48 object-cover" alt="" src="imagen/back/python.jpg" />
										<div className="card-body p-5 border-t">
											<h5 className="card-title text-lg font-bold mb-2">Python Junior</h5>
											<p className="card-text text-sm text-gray-600 mb-4 h-32 overflow-y-auto">It is a language that I started out of great curiosity, it is my third favorite, I have the bases and some knowledge, I have worked on it to develop front-end using its Django framework, currently I want to go deeper to use it in artificial intelligence.</p>
											<a href="https://platzi.com/p/LEONARDCUENCA/curso/82-python-django-2015/diploma/detalle/" className="btn btn-primary block w-full text-center bg-primary text-white py-2 rounded hover:bg-primary-dark transition-colors" target="_blank" rel="noreferrer">Studies ... 👨‍🎓 ...</a>
										</div>
									</div>
								</div>
							</div>

							<div data-cat="app" className="portfolio app mix_all">
								<div className="portfolio-wrapper">
									<div className="card bg-white shadow-md rounded overflow-hidden hover:shadow-xl transition-shadow duration-300" style={{ width: '18rem' }}>
										<img className="img-responsive w-full h-48 object-contain p-4" alt="" src="imagen/back/c.png" />
										<div className="card-body p-5 border-t">
											<h5 className="card-title text-lg font-bold mb-2">C# - Semi-Senior</h5>
											<p className="card-text text-sm text-gray-600 mb-4 h-32 overflow-y-auto">You often face challenges in some projects, I took on the challenge of learning the basics of this complex language in combination with .net and .aspx</p>
											<a href="#" className="btn btn-primary block w-full text-center bg-primary text-white py-2 rounded hover:bg-primary-dark transition-colors" target="_blank" rel="noreferrer">Studies ... 👨‍🎓 ...</a>
										</div>
									</div>
								</div>
							</div>

							<div data-cat="app" className="portfolio app mix_all">
								<div className="portfolio-wrapper">
									<div className="card bg-white shadow-md rounded overflow-hidden hover:shadow-xl transition-shadow duration-300" style={{ width: '18rem' }}>
										<img className="img-responsive w-full h-48 object-contain p-4" alt="" src="imagen/back/Javascript.png" />
										<div className="card-body p-5 border-t">
											<h5 className="card-title text-lg font-bold mb-2">JavaScriptS - Semi Senior</h5>
											<p className="card-text text-sm text-gray-600 mb-4 h-32 overflow-y-auto">Definitely Js has been converted. In my favorite language, it is very simple to implement, you only need a browser, but in the last 10 years you can already do Front-end and Back-end with Js, of course with the help of NPMs, that gives you a great robustness and support to create what you want, I consider it to be the future of the web.</p>
											<a href="https://github.com/LeoSan/EscuelaJavaScript2021" className="btn btn-primary block w-full text-center bg-primary text-white py-2 rounded hover:bg-primary-dark transition-colors" target="_blank" rel="noreferrer">Studies ... 👨‍🎓 ...</a>
										</div>
									</div>
								</div>
							</div>

							<div data-cat="app" className="portfolio app mix_all">
								<div className="portfolio-wrapper">
									<div className="card bg-white shadow-md rounded overflow-hidden hover:shadow-xl transition-shadow duration-300" style={{ width: '18rem' }}>
										<img className="img-responsive w-full h-48 object-contain p-4" alt="" src="imagen/back/nodejs.png" />
										<div className="card-body p-5 border-t">
											<h5 className="card-title text-lg font-bold mb-2">Node Js - Semi Senior</h5>
											<p className="card-text text-sm text-gray-600 mb-4 h-32 overflow-y-auto">The great leap of Js is Node. Js programming from the server side is the most incredible thing and more if we use js, I have been able to create a whole back with client server architecture with js, create my own Js services and that it can interact with a database is great. </p>
											<a href="https://www.udemy.com/certificate/UC-201ad789-8d75-4ca5-84ec-e88e706ad562/" className="btn btn-primary block w-full text-center bg-primary text-white py-2 rounded hover:bg-primary-dark transition-colors" target="_blank" rel="noreferrer">Studies ... 👨‍🎓 ...</a>
										</div>
									</div>
								</div>
							</div>

							<div data-cat="app" className="portfolio app mix_all">
								<div className="portfolio-wrapper">
									<div className="card bg-white shadow-md rounded overflow-hidden hover:shadow-xl transition-shadow duration-300" style={{ width: '18rem' }}>
										<img className="img-responsive w-full h-48 object-cover" alt="" src="imagen/back/java.jpg" />
										<div className="card-body p-5 border-t">
											<h5 className="card-title text-lg font-bold mb-2">JAVA - Semi-Senior</h5>
											<p className="card-text text-sm text-gray-600 mb-4 h-32 overflow-y-auto">It is definitely not my favorite, but I have respect and esteem for it, those who master Java master any language because of the good practices that they leave in your skills and experience, I have participated in projects as a DTO-type Class Data modeler, I am currently taking a course using the Spring framework.</p>
											<a href="https://www.udemy.com/course/universidad-spring-framework-springboot-java-security-rest-webservices/" className="btn btn-primary block w-full text-center bg-primary text-white py-2 rounded hover:bg-primary-dark transition-colors" target="_blank" rel="noreferrer">Studies ... 👨‍🎓 ...</a>
										</div>
									</div>
								</div>
							</div>

							<div data-cat="app" className="portfolio app mix_all">
								<div className="portfolio-wrapper">
									<div className="card bg-white shadow-md rounded overflow-hidden hover:shadow-xl transition-shadow duration-300" style={{ width: '18rem' }}>
										<img className="img-responsive w-full h-48 object-contain p-4" alt="" src="imagen/back/goland.png" />
										<div className="card-body p-5 border-t">
											<h5 className="card-title text-lg font-bold mb-2">Go - Novice</h5>
											<p className="card-text text-sm text-gray-600 mb-4 h-32 overflow-y-auto">Go is a language that breaks many paradigms, it is very simple and complex to program at the same time, the functionality known as goroutines is incredible and even more so that it is a language that manages 100% of the resources, for example when you declare a variable and it is It is not used, it gives you an error reminding you that all variables must be used. It is great for optimizing memory resources.</p>
											<a href="https://github.com/LeoSan/EscuelaBackendGo" className="btn btn-primary block w-full text-center bg-primary text-white py-2 rounded hover:bg-primary-dark transition-colors" target="_blank" rel="noreferrer">Studies ... 👨‍🎓 ...</a>
										</div>
									</div>
								</div>
							</div>


							<div data-cat="app" className="portfolio app mix_all">
								<div className="portfolio-wrapper">
									<div className="card bg-white shadow-md rounded overflow-hidden hover:shadow-xl transition-shadow duration-300" style={{ width: '18rem' }}>
										<img className="img-responsive w-full h-48 object-contain p-4" alt="" src="imagen/back/post.png" />
										<div className="card-body p-5 border-t">
											<h5 className="card-title text-lg font-bold mb-2">PostgreSQL Senior</h5>
											<p className="card-text text-sm text-gray-600 mb-4 h-32 overflow-y-auto">It is definitely my second favorite database modeler, it is another level to handle PLSQL to generate store procedure, trigger, a powerful database engine that is more scalable and faster, generate tables that allow you to store Gigabytes of information. endless data types.</p>
											<a href="https://github.com/LeoSan/CarreraFundamentosProgramacion_Platzi_2021/blob/main/02_Intermedio/04_CursoFundamentosBasesDatos/InfoGrafias/2021_Diploma-bd_Platzi.pdf" className="btn btn-primary block w-full text-center bg-primary text-white py-2 rounded hover:bg-primary-dark transition-colors" target="_blank" rel="noreferrer">Studies ... 👨‍🎓 ...</a>
										</div>
									</div>
								</div>
							</div>

							<div data-cat="app" className="portfolio app mix_all">
								<div className="portfolio-wrapper">
									<div className="card bg-white shadow-md rounded overflow-hidden hover:shadow-xl transition-shadow duration-300" style={{ width: '18rem' }}>
										<img className="img-responsive w-full h-48 object-contain p-4" alt="" src="imagen/back/mysql.png" />
										<div className="card-body p-5 border-t">
											<h5 className="card-title text-lg font-bold mb-2">Mysql Senior</h5>
											<p className="card-text text-sm text-gray-600 mb-4 h-32 overflow-y-auto">It is definitely my favorite database, although now the free version is called Maria Db, here I start my bases in handling tables and SQL queries, create table views, easy integration with Laravel using ORM. The interesting thing is the number of database managers like Workbench, MysqlJob, Admin. </p>
											<a href="https://github.com/LeoSan/CarreraFundamentosProgramacion_Platzi_2021/blob/main/02_Intermedio/04_CursoFundamentosBasesDatos/InfoGrafias/2021_Diploma-bd_Platzi.pdf" className="btn btn-primary block w-full text-center bg-primary text-white py-2 rounded hover:bg-primary-dark transition-colors" target="_blank" rel="noreferrer">Studies ... 👨‍🎓 ...</a>
										</div>
									</div>
								</div>
							</div>

							<div data-cat="app" className="portfolio app mix_all">
								<div className="portfolio-wrapper">
									<div className="card bg-white shadow-md rounded overflow-hidden hover:shadow-xl transition-shadow duration-300" style={{ width: '18rem' }}>
										<img className="img-responsive w-full h-48 object-contain p-4" alt="" src="imagen/back/oracle10.png" />
										<div className="card-body p-5 border-t">
											<h5 className="card-title text-lg font-bold mb-2">Oracle10 - Semi Senior</h5>
											<p className="card-text text-sm text-gray-600 mb-4 h-32 overflow-y-auto">Complex database, I was able to learn and improve my level of creating PLSQL, since it is a programming-oriented database. object, the response speed is impressive, here you can do a little bit of everything, a trigger, a store procedure and the large amount of data types that you can handle, data type arrays, data type objects, even a field to save an entire table, even I still have a lot to know. </p>
											<a href="https://github.com/LeoSan/CarreraFundamentosProgramacion_Platzi_2021/blob/main/02_Intermedio/04_CursoFundamentosBasesDatos/InfoGrafias/2021_Diploma-bd_Platzi.pdf" className="btn btn-primary block w-full text-center bg-primary text-white py-2 rounded hover:bg-primary-dark transition-colors" target="_blank" rel="noreferrer">Studies ... 👨‍🎓 ...</a>
										</div>
									</div>
								</div>
							</div>


						</div>

					</div>
				</div>
			</div>
		</div>
	);
}
