import React , {useState, useEffect} from 'react';
import './Corpo.css';
import { useInView } from 'react-intersection-observer';
import { ImWhatsapp } from 'react-icons/im';


function Corpo() {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });
    


    
return(
<div className='Corpo'> 
    <div className='WhatsApp'><a href='#'><ImWhatsapp/></a></div>
    <section className='init_description'>
    <div className='text_description'>
    <h2>CheckSpeech AI </h2>
    <p>O CheckSpeech AI é a solução definitiva para a conversão de fala em texto e interpretação do sentimento dominante.</p>
    <a href="#">Saiba Mais</a>
    </div>
</section>
    <section id="secao01" className='Criando_necessidade'>
    <h2>A solução</h2>
    <div ref={ref} className={`container ${inView ? 'visible' : ''}`}>
    <img src={require('./img/image01.jpg')} alt='Chamada da pagina'/></div>
    <div className='text_description'>
    <p>O CheckSpeech AI é a solução definitiva para a conversão de fala em texto e interpretação do sentimento dominante. Com uma tecnologia avançada de reconhecimento de voz e processamento de linguagem natural, oferecemos APIs poderosas que revolucionam a maneira como lidamos com áudios e extraímos informações valiosas.</p>
    <p>Imagine nunca mais ter que lidar com horas intermináveis de transcrição manual! Com nossa API de conversão de fala em texto, você pode automatizar e simplificar esse processo. Basta enviar seus arquivos de áudio e deixar que nosso sistema altamente treinado faça o trabalho pesado para você. Nossa tecnologia avançada é capaz de transcrever áudios em tempo real, com precisão e rapidez impressionantes.</p></div>
    <div className='Video_description'>Video aqui</div>
</section>
    <section id='secao02' className='Diferencias'>
    <div className='text_description'><p>O CheckSpeech AI é a solução definitiva para a conversão de fala em texto e interpretação do sentimento dominante. Com uma tecnologia avançada de reconhecimento de voz e processamento de linguagem natural, oferecemos APIs poderosas que revolucionam a maneira como lidamos com áudios e extraímos informações valiosas.</p></div>
    <div className='Video_description'>Video aqui</div>
</section>
    <section id='secao03' className='Caracteristicas'>
    <div className='text_description'><p>O CheckSpeech AI é a solução definitiva para a conversão de fala em texto e interpretação do sentimento dominante. Com uma tecnologia avançada de reconhecimento de voz e processamento de linguagem natural, oferecemos APIs poderosas que revolucionam a maneira como lidamos com áudios e extraímos informações valiosas.</p></div>
    <div className='Video_description'>Video aqui</div>
</section>
    <section id='secao04' className='chamada'>
    <div className='text_description'><p>O CheckSpeech AI é a solução definitiva para a conversão de fala em texto e interpretação do sentimento dominante. Com uma tecnologia avançada de reconhecimento de voz e processamento de linguagem natural, oferecemos APIs poderosas que revolucionam a maneira como lidamos com áudios e extraímos informações valiosas.</p></div>
    <div className='Video_description'>Video aqui</div>
</section>
</div>
)
}
export default Corpo;
