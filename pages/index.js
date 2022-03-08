import styles from '../styles/Home.module.scss'
import NavBar from '../src/components/NavBar'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper";
import { AiFillStar } from 'react-icons/ai'
import { Modal } from '@nextui-org/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Link from 'next/link';
import Footer from '../src/components/Footer';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io'
import Scroll from 'react-scroll'

export default function Home() {

  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  const contentModalDays = [
    {
      day: '1º Dia',
      text: 'São Paulo: Embarque no Aeroporto Internacional de Guarulhos para início da viagem a Egito, Jordânia e Israel.'
    },

    {
      day: '2º Dia',
      text: 'Cairo: Chegada ao Aeroporto Internacional do Cairo. Recepção e traslado ao hotel. Hospedagem e jantar.'
    },

    {
      day: '3º Dia',
      text: 'Cairo / Pirâmides / Museu de Israel:  Após o café da manhã, saída para conhecer as três famosas Pirâmides, supostamente construída com ajuda dos hebreus. Apreciaremos as pirâmides e a famosa Esfinge de Gisé que as protegia, teremos a oportunidade de conhecer melhor a vida de Moises e a sua infância através de relatos e palestras e como Deus prepara sua grande missão – a liberação do povo Hebreu da escravidão. Logo após, almoço árabe típico (não incluído). A continuação, iremos visitar o Museu do Cairo, onde se encontra a Múmia de Ramsés II – o mesmo que construiu as pirâmides. Visitando o Museu, poderemos ver a tumba de Tutancâmon e o Antigo Mural onde se encontra a única evidência fora a bíblia em que o povo de Israel é mencionado. À tarde, rápida visita a cidadela do Cairo com suas antigas construções. Retorno ao hotel e hospedagem e jantar.  Opcional : À noite, cruzeiro com jantar e show  pelo Rio Nilo  (pago no local para o guia ). Este rio é  onde Moisés , ainda bebê foi deixado em um cesto de palha pela sua mãe, nas mãos de Deus.  Retorno ao hotel e pernoite.'
    },

    {
      day: '4º Dia',
      text: 'Cairo / Monte Sinai: Café da manhã no hotel. Saída do Cairo passando pelo Canal de Suez. Travessia do Deserto do Sinai passando pelo Oásis de Elim. Travessia do Mar Vermelho, passando por Refidim, até chegar ao Monte Sinai. Hospedagem e jantar.'
    },

    {
      day: '5º Dia',
      text: 'Monte Sinai / Petra: De madrugada, subida ao Monte Sinai para vigília , em que haverá louvor e adoração ao Senhor e após vista do nascer do sol, descida do Monte e retorno ao hotel para o café da manhã e após continuação para Nuweiba, vila de pescadores famosa por suas praias douradas. Travessia do Mar Vermelho por ferry até Aqaba, porto jordaniano. Desembarque e continuação da viagem até Petra. Chegada no final da tarde. Hospedagem e jantar.'
    },

    {
      day: '6º Dia',
      text: 'Petra: Após o café da manhã, visita à antiga capital dos nabateus. Esculpida em rocha cor rosada, Petra é considerada uma das Sete Maravilhas do Mundo e é a maior atração da Jordânia. A visita a este importante sítio arqueológico tem início em um espetacular desfiladeiro que termina na Câmara do Tesouro (El Khazneh). Visita ao Obelisco, ao Altar do Sacrifício, Tumbas Reais e ao Teatro Romano. Retorno ao hotel e jantar.'
    },

    {
      day: '7º Dia',
      text: 'Petra / Amman / Allenby / Jerusalém: Após o café da manhã , sairemos em direção á Amman , aonde farão um rápido tour panorâmico pela cidade e após seguirão para a ponte Allenby, para cruzar a fronteira “King Hussein”, e após continuaremos a viagem até Jerusalém. Chegada no final da tarde, hospedagem e jantar. .'
    },

    {
      day: '8º Dia',
      text: 'Jerusalém: Café da manhã no hotel. Visita ao Monte Scopus e Monte das Oliveiras (Jardim do Getsêmani), para admirar a cidade de Jerusalém. A viagem segue para visita aos templos do Padre Nosso, da Ascenção e Dominus Flevit. Continuação até o Vale de Josafá, entrando pela Porta dos Leões, passando pela Via Dolorosa e chegando à Igreja do Santo Sepulcro. Visita ao tanque de Betesda e ao Jardim da Tumba, onde haverá um tempo de oração. À tarde, visita ao Monte Sião, à Tumba do Rei Davi, à Abadia da Dormição e ao Cenáculo, onde serão realizados o culto e a cerimônia da Santa Ceia. Retorno ao hotel e jantar.'
    },

    {
      day: '9º Dia',
      text: 'Jerusalém / Belém: Após o café da manhã, visita ao Muro das Lamentações, à Esplanada do Templo e à Mesquita de Omar, seguindo pelos Jardins do Parlamento para observar o Menorah (Candelabro). Visita à maquete que reproduz a cidade de Jerusalém na época de Jesus. De lá, visita a Yad Vashem (Museu do Holocausto), seguindo até Ein Karem, onde nasceu João Batista. Após, visita a Belém para conhecer a cidade e a Gruta da Natividade. Regresso a Jerusalém para hospedagem e jantar.'
    },

    {
      day: '10º Dia',
      text: 'Jerusalém / Qumran / Jericó / Vale do Jordão / Tiberíades: Após o café da manhã, saída de Jerusalém pelo Deserto da Judéia, passando pela Pousada do Bom Samaritano. Visita à casa de Maria e Marta, em Betânia, onde se deu a ressurreição de Lázaro. Passagem pelo Mar Morto, que é o lugar mais baixo do mundo, chegando a Qumran, onde foram achados os manuscritos do Mar Morto. Continuação até Jericó, a cidade mais antiga do mundo, com vista para o Monte da Tentação e o Mar Morto. Travessia do Vale do Jordão, passando por Beit Shean para ver as escavações arqueológicas. Pausa para batismo no Rio Jordão. Hospedagem e jantar em Tiberíades.'
    },

    {
      day: '11º Dia',
      text: 'Tiberíades / Cafarnaum / Nazareth / Tiberíades: Após o café da manhã, passeio panorâmico em Tiberíades. Travessia do Mar da Galiléia até Cafarnaum para visita à casa de Pedro e à antiga Sinagoga. Continuação até Tabgha, local do milagre da multiplicação dos peixes e dos pães. Em seguida, visita ao Monte das Bem Aventuranças, seguindo até Caná da Galiléia, local onde se deu o primeiro milagre de Jesus, finalizando o passeio em Nazareth, a cidade da Anunciação. Retornaremos a Tiberíades pelo Monte Tabor. Hospedagem e jantar.'
    },

    {
      day: '12º Dia',
      text: 'Mujraka / Cesaréa / Tel Aviv-Yafo: Após o café da manhã, saída para Megido, vale aonde será travada a batalha do Armagedom (Apocalipse), e visita às escavações da época do Rei Salomão. Visita a Haifa e subida ao Monte Carmelo (Mujraka), lugar aonde se deu a luta entre o profeta Elias e os 450 profetas de Baal. Visita à Cesaréa, antiga capital romana construída, pelo Rei Herodes, para conhecer as ruínas da cidade onde morou Pôncio Pilatos, o Teatro Romano e a Fortaleza dos Cruzados. Visita ao porto de Jaffa, de onde saiu Jonas, que foi engolido por um grande peixe e local da casa de Simão. Passeio panorâmico por Tel Aviv-Yafo (como é chamada em Israel), para admirar o lugar onde aconteceu a visão de Pedro. À noite, hospedagem e jantar em Tel Aviv.'
    },

    {
      day: '13º Dia',
      text: 'Tel Aviv: Após o café, manhã livre até o momento de traslado para o Aeroporto Internacional de Tel Aviv e embarque para o Brasil.'
    },

    {
      day: '14º Dia',
      text: 'São Paulo: Chegada ao Aeroporto Internacional de Guarulhos, com ajuda no embarque de conexão para passageiros de outros estados e finalização de nossos serviços.'
    },

  ]

  const includeDayContent = [

      {
        title: 'Inclui: ',
        content: [
          'Transporte aéreo São Paulo / Cairo e Tel Aviv / São Paulo em classe econômica',
          'Assistência e traslados na chegada e saída no Egito, Jordânia e Israel',
          'Hospedagem em hotel 4 estrelas superior no Egito, Jordânia e Israel',
          'Café da manhã e jantar no Egito, Jordânia e Israel',
          'Ônibus de luxo com motorista no Egito, Jordânia e Israel',
          'Guia fluente em espanhol ou português no Egito, Jordânia e Israel',
          'Entradas para locais especificados no programa no Egito, Jordânia e Israel',
          'Maleteiros nos hotéis e aeroportos no Egito, Jordânia e Israel',
          'um pastor e um supervisor da agência acompanhando toda a viagem no Egito, Jordânia e Israel',
          'Seguro de viagem no Egito, Jordânia e Israel',
          'Kit de viagem Terra Santa Viagens' 
          ]
      },

      {
        title: 'Não inclui: ',
        content: [
          'Vistos',
          'Taxas de aeroportos e fronteiras',
          'Bebidas – Almoço',
          'Gastos extras (tipo lavanderia, telefonemas, etc.)',
          'Bata do batismo'
      ]
      }
    ]

  SwiperCore.use([Autoplay])

  return (
    <>
      <NavBar />
      <main>
        <section className={styles.containerHome}>
          <h2>Shalom pacotes de viagens</h2>
          <span>Venha para a terra prometida com a Shalom pacotes de viagens!</span>
          <button onClick={() => Scroll.animateScroll.scrollTo(300)}>CONHEÇA MAIS</button>
        </section>

        <section className={styles.containerCarrousel}>
          <div className={styles.carrousel}>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
              }}
              loop={true}
              modules={[EffectCoverflow]}
              className={`mySwiper ${styles.carrouselT}`}
            >
              <SwiperSlide className={styles.item}>
                <img src="./img2.png" />
              </SwiperSlide>
              <SwiperSlide className={styles.item}>
                <img src="./img3.png" />
              </SwiperSlide>
              <SwiperSlide className={styles.item}>
                <img src="./img4.png" />
              </SwiperSlide>
              <SwiperSlide className={styles.item}>
                <img src="./img5.png" />
              </SwiperSlide>
              <SwiperSlide className={styles.item}>
                <img src="./img1.png" />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section  className={styles.photoBackground}>
        </section>


        <section id="teste"  className={styles.cardBoxTravel}>
          <div className={styles.contentCard}>
            <h1>Pacote de viagens para Egito, Jordânia e Israel</h1>
            <p className={styles.description}>Uma viagem completa para você conhecer os melhores lugares de Egito, Jordânia e Israel, venha para aterra prometida com  a Shalom pacote de viagens! Clique em saiba mais para ver os detalhes</p>

            <div className={styles.sectionDetails}>
              <p>14 dias</p>
              <section>
                <AiFillStar color='#FAFF12' size={24} />
                <AiFillStar color='#FAFF12' size={24} />
                <AiFillStar color='#FAFF12' size={24} />
                <AiFillStar color='#FAFF12' size={24} />
                <AiFillStar color='#D4D4D4' size={24} />
              </section>
            </div>

            <div className={styles.buttons}>
              <Link href={`https://api.whatsapp.com/send?l=pt_br&phone=+55%20(28)%2099964-8132&text=Ol%C3%A1%20,%20Tenho%20interesse%20em%20viajar%20com%20voc%C3%AAs`}>
                <a target="_blank"><button className={styles.btnWhats}>TENHO INTERESSE</button></a>
              </Link>

              <button onClick={handler} className={styles.btnKnowMore}>SAIBA MAIS</button>
            </div>

          </div>

          <img src="imgCard.png" />
        </section>
        <Modal
          className={styles.modalStyles}
          width="700px"
          aria-labelledby="modal-title"
          open={visible}
        >

          <Modal.Header className={styles.modalStylesHeader}>
            <h2>Roteiro</h2>
            <button onClick={closeHandler}>
            <IoMdClose size={32}/>
            </button>
          </Modal.Header>


          <Modal.Body>
            {
              contentModalDays.map(item => {
                return (
                  <section key={Math.random()}>
                    <div>
                      <h2>{item.day}</h2>
                      <p>{item.text}</p>
                    </div>
                    <hr />
                  </section>
                )
              })
            }
            {includeDayContent.map(item=>{
              return(
                <div key={item.title}>
                <h2>{item.title}</h2>
                {item.content.map(text =>{
                  return(
                    <li key={text}>{text}</li>
                  )
                })}
                </div>
              )
            })}

                


          </Modal.Body>
        </Modal>

      </main>
      <Footer />
    </>
  )
}
