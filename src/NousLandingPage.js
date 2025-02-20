import React from 'react';
import { Link } from 'react-router-dom';
import RandomBackgroundImages from './components/RandomBackgroundImages';
import Navbar from './components/HamburguerMenu';
import logoNous from './img/logo-nous.png';
import logoGrande from './img/logo-nous-grande.png';
import Stefany from './img/Stefany.jpg';
import instagram from './img/instagram.png';
import whatsapp from './img/whatsapp.png';
import email from './img/email.png';
import endereco from './img/endereco.png';
import Tatiane from './img/Tatiane.jpg';
import Ketholy from './img/Ketholy.jpg';
import textura01 from './img/textura01.png';
import textura02 from './img/textura02.png';
import textura03 from './img/textura03.png';
import textura04 from './img/textura04.png';
import textura05 from './img/textura05.png';
import textura06 from './img/textura06.png';
import textura07 from './img/textura07.png';



const NousLandingPage = () => {
    const backgroundImages = [
        textura01,
        textura02,
        textura03,
        textura04,
        textura05,
        textura06,
        textura07,
    ];
    return (
        <div className="bg-[#f3f1ed] text-[#2d2d2d] relative overflow-hidden">
            {/* Menu de Navegação */}
            <nav className="fixed top-0 left-0 w-full bg-white z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <Navbar>
                    </Navbar>
                </div>
            </nav>

            <section id="inicio" className="relative h-screen">
                {/* Logo fixa no centro */}
                <div className="inicio fixed inset-0 flex items-center bg-[#bb947e] justify-center z-10 pointer-events-none">
                    <div className='max-w-xl'>
                        <img
                            src={logoGrande}
                            alt="NOUS "
                            className="img_inicio object-fit"
                        />
                    </div>
                    <p className="text-xl max-w-2xl text-black mx-auto">
                        Reconheça, compreenda, transforme-se.
                    </p>
                </div>
            </section>

            {/* Significado do Nome */}
            <section id="sobre" className="relative bg-[#f3f1ed] py-16 z-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#5e4031]">NOUS: Significado</h2>
                    <p className="max-w-2xl mx-auto text-lg">
                        O nome Nous vem do grego antigo e significa “mente”, “inteligência” ou “razão”. Na filosofia grega, Nous é a razão divina que governa o universo, trazendo ordem e harmonia ao cosmos. Para nós, esse conceito simboliza a importância do autoconhecimento e da inteligência emocional no cuidado com a saúde mental.
                        <br></br><br></br>
                        Em nossa clínica, Nous representa nossa missão de cuidar da mente e promover o equilíbrio através da razão e do entendimento profundo dos sentimentos e pensamentos.
                    </p>
                </div>
            </section>

            <section id="Informacoes" className="relative bg-[#f3f1ed] py-6 z-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#5e4031]">Publico atendido</h2>
                    <p className="max-w-2xl mx-auto text-lg">Crianças, adolescentes e adultos.</p>
                    <br></br>
                    <h2 className="text-3xl font-bold mb-6 text-[#5e4031]">Horários</h2>
                    <p>Segunda-feira à sexta 08:00 às 20:00</p>
                    <p>Sabado das 08:00 às 12:00</p>
                </div>
            </section>

            {/* Informações da Clínica */}
            <section id="profissionais" className="relative bg-[#f3f1ed] py-16 z-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-[#5e4031]">Profissionais</h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div>
                                <img
                                    src={Stefany}
                                    alt="Stefany Oliveira"
                                    className="w-full img_meninas object-cover object-top rounded-t-lg"
                                />
                            </div>
                            <h3 className="text-xl font-semibold my-4 text-[#5e4031]">Stefany Oliveira</h3>
                            <p className="mb-4">
                                (CRP - 08/41494)
                                <br></br>
                                <br></br>
                                Como profissional da saúde mental, minha missão é ajudar você a superar desafios emocionais e comportamentais, promovendo bem-estar e qualidade de vida. Trabalho com a Terapia Cognitivo-Comportamental (TCC).
                                <br></br>
                                <br></br>
                                Se você busca autoconhecimento e autocuidado, estou aqui para te acompanhar nesse processo de transformação. Juntos, podemos construir estratégias para lidar com suas questões.
                            </p>
                            <a href="#contato" className="text-[#5e4031] hover:underline">
                                Agende sua sessão
                            </a>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div>
                                <img
                                    src={Tatiane}
                                    alt="Tatiane"
                                    className="w-full img_meninas object-cover object-top rounded-t-lg"
                                />
                            </div>
                            <h3 className="text-xl font-semibold my-4 text-[#5e4031]">Tatiane Moreira</h3>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies ipsum mauris. Nullam fermentum justo vel lacus dignissim sollicitudin. Etiam quis ante erat. Etiam eget ornare orci. Pellentesque molestie augue nec massa convallis, at tempus quam fermentum. Nunc ut placerat dui. Nulla at massa sit amet mauris tincidunt suscipit vehicula vitae libero.
                            </p>
                            <a href="#contato" className="text-[#5e4031] hover:underline">
                                Agende sua sessão
                            </a>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div>
                                <img
                                    src={Ketholy}
                                    alt="Modalidades de Atendimento"
                                    className="w-full object-cover object-top rounded-t-lg img_meninas"
                                />
                            </div>
                            <h3 className="text-xl font-semibold my-4 text-[#5e4031]">Kétholy Cervelheri</h3>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies ipsum mauris. Nullam fermentum justo vel lacus dignissim sollicitudin. Etiam quis ante erat. Etiam eget ornare orci. Pellentesque molestie augue nec massa convallis, at tempus quam fermentum. Nunc ut placerat dui. Nulla at massa sit amet mauris tincidunt suscipit vehicula vitae libero.
                            </p>
                            <a href="#contato" className="text-[#5e4031] hover:underline">
                                Agende sua sessão
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lema da Empresa */}
            <section className="bg-[#5e4031] text-white py-16 text-center relative z-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">"Cuidar da Mente, Transformar Vidas"</h2>
                    <p className="max-w-2xl mx-auto text-xl">
                        Nosso compromisso é oferecer um espaço acolhedor e seguro para
                        sua jornada de autoconhecimento e crescimento pessoal.
                    </p>
                </div>
            </section>

            {/* Missão, Visão e Valores */}
            <section id="missao" className="py-16 relative bg-[#f3f1ed] z-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-[#5e4031]">Nossa Essência</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-[#5e4031]">Missão</h3>
                            <p>
                                Oferecer cuidado psicológico de excelência, promovendo o autoconhecimento, a saúde emocional e o bem-estar dos nossos clientes.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-[#5e4031]">Visão</h3>
                            <p>
                                Ser referência em saúde mental e atendimento psicológico, contribuindo para uma sociedade mais saudável e consciente.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-[#5e4031]">Valores</h3>
                            <p>
                                Empatia, ética, acolhimento, compromisso com a ciência, respeito à diversidade.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rodapé / Contato */}
            <footer id="contato" className="bg-[#5e4031] text-white pt-6 mt-auto relative z-20">
                <div className="container mx-auto text-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
                        <p className="mb-4">
                            <a
                                href="https://www.instagram.com/clinicapsiconous"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center"
                            >
                                <img src={instagram} alt='instagram' className='m-2'></img>
                                @clinicapsiconous
                            </a>
                            <a
                                href="https://wa.me/554498379833"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center"
                            >
                                <img src={whatsapp} alt='whatsapp' className='m-2'></img>
                                Telefone: (44) 99837-9833
                            </a>
                            <div className="flex items-center justify-center">
                                <img src={email} alt='email' className='m-2'></img>
                                Email: clinica.psi.nous@gmail.com
                            </div>
                            <a
                                href="https://maps.app.goo.gl/mNjhGvmNRAyKF6jt9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center"
                            >
                                <img src={endereco} alt='endereço' className='m-2'></img>
                                Endereço: Rua Rio Jacuí 310, Parque Residencial Tuiuti.
                            </a>
                            <a
                                href="https://maps.app.goo.gl/mNjhGvmNRAyKF6jt9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center"
                            >
                                CEP: 87043160
                            </a>
                        </p>
                        <a
                            href="/formulario"
                            className="bg-[#bb947e] text-white px-6 py-3 rounded-lg hover:bg-[#c79165]"
                        >
                            Agende sua sessão
                        </a>
                    </div>
                    <div className="map-container mt-6 flex justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.7272371990225!2d-51.90296751489406!3d-23.39808284194116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd10509058b2f%3A0x8e8996fb5f8ad129!2sR.%20Rio%20Jacu%C3%AD%2C%20310%20-%20Conj.%20Res.%20Branca%20Vieira%2C%20Maring%C3%A1%20-%20PR%2C%2087043-160!5e0!3m2!1spt-BR!2sbr!4v1737847076201!5m2!1spt-BR!2sbr"
                            width="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Rodapé inferior */}
                <div className="bg-[#bb947e] text-white text-center mt-6">
                    <p>&copy; 2025 Todos os direitos reservados.</p>
                    <p>Desenvolvido por: Matheus Cervelheri</p>
                </div>
            </footer>

        </div>
    );
};

export default NousLandingPage;