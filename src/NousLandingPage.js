import React from 'react';
import { Link } from 'react-router-dom';
import RandomBackgroundImages from './components/RandomBackgroundImages';
import logoNous from './img/logo-nous.png';
import logoGrande from './img/logo-nous-grande.png';
import Stefany from './img/Stefany.jpg';
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
            <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
                <div className="container mx-auto flex justify-between items-center px-4 h-20">
                    <a href='#inicio'>
                        <img
                            src={logoNous}
                            alt="Logo NOUS"
                            className="h-36"
                        />
                    </a>
                    <div className="space-x-6">
                        <a href="#inicio" className="hover:text-[#bb947e]">Início</a>
                        <a href="#sobre" className="hover:text-[#bb947e]">Sobre</a>
                        <a href="#profissionais" className="hover:text-[#bb947e]">Profissionais</a>
                        <a href="#missao" className="hover:text-[#bb947e]">Missão</a>
                        <a href="#contato" className="bg-[#5e4031] text-white px-4 py-2 rounded hover:bg-[#c79165]">Agende</a>
                    </div>
                </div>
            </nav>

            <section id="inicio" className="relative h-screen">
                {/* Logo fixa no centro */}
                <div className="fixed inset-0 flex items-center bg-[#5e4031] justify-center z-10 pointer-events-none">

                    <img
                        src={logoGrande}
                        alt="Logo NOUS em tamanho grande"
                        className="max-w-xl opacity-80"
                    />
                    <p className="text-xl max-w-2xl text-black mx-auto">
                        Espaço dedicado ao cuidado e compreensão da saúde mental
                    </p>
                </div>
            </section>

            {/* Significado do Nome */}
            <section id="sobre" className="relative bg-[#f3f1ed] py-16 z-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#5e4031]">NOUS: Significado</h2>
                    <p className="max-w-2xl mx-auto text-lg">
                        NOUS, na filosofia grega, representa a inteligência, a mente e a razão.
                        Em nossa clínica, simboliza o entendimento profundo do ser humano,
                        valorizando a complexidade da mente e a importância do autoconhecimento.
                    </p>
                </div>
            </section>

            <section id="Informacoes" className="relative bg-[#f3f1ed] py-16 z-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#5e4031]">Publico atendido</h2>
                    <p className="max-w-2xl mx-auto text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies ipsum mauris. </p>
                    <br></br>
                    <h2 className="text-3xl font-bold mb-6 text-[#5e4031]">Horários</h2>
                    <p>Segunda-feira das 08:00 às 18:00</p>
                    <p>Terça-feira das 08:00 às 18:00</p>
                    <p>Quarta-feira das 08:00 às 18:00</p>
                    <p>Quinta-feira das 08:00 às 18:00</p>
                    <p>Sexta-feira das 08:00 às 18:00</p>
                    <p>Sabado das 08:00 às 18:00</p>
                </div>
            </section>

            {/* Informações da Clínica */}
            <section id="profissionais" className="relative bg-[#f3f1ed] py-16 z-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-[#5e4031]">Profissionais</h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <img
                                src={Stefany}
                                alt="Stefany C. Oliveira"
                                className="w-full h-96 object-cover rounded-t-lg"
                            />
                            <h3 className="text-xl font-semibold my-4 text-[#5e4031]">Stefany C. Oliveira</h3>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies ipsum mauris. Nullam fermentum justo vel lacus dignissim sollicitudin. Etiam quis ante erat. Etiam eget ornare orci. Pellentesque molestie augue nec massa convallis, at tempus quam fermentum. Nunc ut placerat dui. Nulla at massa sit amet mauris tincidunt suscipit vehicula vitae libero.
                            </p>
                            <a href="#contato" className="text-[#5e4031] hover:underline">
                                Agende uma consulta
                            </a>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <img
                                src={Tatiane}
                                alt="Tatiane"
                                className="w-full h-96 object-cover rounded-t-lg"
                            />
                            <h3 className="text-xl font-semibold my-4 text-[#5e4031]">Tatiane</h3>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies ipsum mauris. Nullam fermentum justo vel lacus dignissim sollicitudin. Etiam quis ante erat. Etiam eget ornare orci. Pellentesque molestie augue nec massa convallis, at tempus quam fermentum. Nunc ut placerat dui. Nulla at massa sit amet mauris tincidunt suscipit vehicula vitae libero.
                            </p>
                            <a href="#contato" className="text-[#5e4031] hover:underline">
                                Agende uma consulta
                            </a>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <img
                                src={Ketholy}
                                alt="Modalidades de Atendimento"
                                className="w-full h-96 object-cover rounded-t-lg"
                            />
                            <h3 className="text-xl font-semibold my-4 text-[#5e4031]">Kétholy R. Cervelheri</h3>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies ipsum mauris. Nullam fermentum justo vel lacus dignissim sollicitudin. Etiam quis ante erat. Etiam eget ornare orci. Pellentesque molestie augue nec massa convallis, at tempus quam fermentum. Nunc ut placerat dui. Nulla at massa sit amet mauris tincidunt suscipit vehicula vitae libero.
                            </p>
                            <a href="#contato" className="text-[#5e4031] hover:underline">
                                Agende uma consulta
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
                                Promover saúde mental através de um atendimento humanizado,
                                ético e personalizado, focando no bem-estar integral do indivíduo.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-[#5e4031]">Visão</h3>
                            <p>
                                Ser referência em cuidados psicológicos, reconhecida pela
                                excelência, empatia e compromisso com a transformação pessoal.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-[#5e4031]">Valores</h3>
                            <p>
                                Respeito, confidencialidade, escuta ativa, ética profissional,
                                desenvolvimento humano e valorização da singularidade de cada ser.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rodapé / Contato */}
            <footer id="contato" className="bg-[#2d2d2d] text-white py-12 mt-auto relative z-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
                    <p className="mb-4">
                        Telefone: (XX) XXXX-XXXX<br />
                        Email: contato@clinicanouspsi.com.br
                    </p>
                    <a
                        href="/formulario"
                        className="bg-[#5e4031] text-white px-6 py-3 rounded-lg hover:bg-[#c79165]"
                    >
                        Agende sua Consulta
                    </a>
                </div>
            </footer>

        </div>
    );
};

export default NousLandingPage;