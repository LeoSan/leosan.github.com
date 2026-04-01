import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';


const Studies = () => {

    return (
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
    );
};

export default Studies;
