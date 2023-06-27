import React , {useState, useEffect} from 'react';
import './Corpo.css';
import { useInView } from 'react-intersection-observer';
import { ImWhatsapp } from 'react-icons/im';
import FormComponent from './FormComponent';


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
    <p id="typed-text">O CheckSpeech AI é a solução definitiva para a conversão de fala em texto e interpretação do sentimento dominante.</p>
    <a href="#">Saiba Mais</a>
    </div>
</section>
    <section id="secao01" className='Criando_necessidade'>
    <h2>A solução</h2>
    <div ref={ref} className={`container ${inView ? 'visible' : ''}`}>
    <h3>Conheça um pouco mais sobre Nossas soluçoes <p>(deslize o cursor sobre as imagens)</p></h3></div>
    <div className='Flip-card-flex'>
    <div className='flip-card-inner'>
    <div className='flip-card'>
                <span>* Transcrição de Áudio Assíncrono<br/> (áudio pré-gravado):</span><br/>
                <p>API de transcrição de voz assíncrona para áudio pré-gravado. Temos uma das melhores engines de reconhecimento de fala do mundo! O recurso speech-to-text assíncrono é um parceiro estratégico para o seu negócio. Esteja você extraindo insights de áudio ou transcrevendo conteúdo em escala.</p>
                <a href='#'>saiba Mais</a>
            </div>
            </div>
            <div className='flip-card-inner'>
             <div className='flip-card'>
                <span>* Transcrição de Áudio em tempo real <br/> (streaming):</span><br/>
                <p>O recurso live-speech-to-text de transcrição ao vivo possibilita o uso de legendas em tempo real para o seu negócio. Nossas legendas garantem que as palestras e treinamentos ao vivo sejam acessíveis e possam ser arquivadas para uso futuro.</p>
                <a href='#'>saiba Mais</a>
             </div>
            </div>
            <div className='flip-card-inner'>
            <div className='flip-card'>
                <span>* Identificação de Idiomas em áudios:</span><br/>
                <p> Obtendo fala e insights a nível global. Nossa solução tem suporte a 52 idiomas.</p>
                <a href='#'>saiba Mais</a>
            </div>
             </div>
             <div className='flip-card-inner'>
             <div className='flip-card'>
                <span>* Análise de sentimento a partir do áudio<br/> (áudio pré-gravado):</span><br/>
                <p> Encontre os momentos mais importantes em trechos de falas, diferencie falas positivas e negativas e tome decisões de negócios mais assertivas com uma compreensão mais profunda.</p>
                <a href='#'>saiba Mais</a>
            </div>
            </div>
</div>
</section>
    <section id='secao02' className='Diferencias'>
    <div className='text_description'><p>O CheckSpeech AI é a solução definitiva para a conversão de fala em texto e interpretação do sentimento dominante. Com uma tecnologia avançada de reconhecimento de voz e processamento de linguagem natural, oferecemos APIs poderosas que revolucionam a maneira como lidamos com áudios e extraímos informações valiosas.</p></div>
    <div className='Video_description'>Video aqui</div>
</section>

    <section id='secao03' className='precos'>
    <table>
        <td>
            <tr className='plano'><h2>Beginner</h2></tr>
            <tr className='valor'><h3>R$ 328 no plano Anual <br/> ou R$ 29 Mensais</h3></tr>
            <tr className='especific'>
            <p> - Transcrição de Áudio Assíncrono  - 120 minutos (R$0,20 / minuto excedente)</p>
            <p>- Transcrição de Áudio em tempo real  - 90 minutos (R$0,40 / minuto excedente)</p>
            <p>- Identificação de Idiomas em áudios - 200 minutos (R$0,05 / minuto excedente)</p>
            <p>- Análise de sentimento a partir do áudio (áudio pré-gravado) - 120 minutos (R$0,40 / minuto excedente)</p>
            </tr>
    </td>
    <td>
        <tr className='plano'><h2>Business</h2></tr>
            <tr className='valor'><h3>R$ 499 no plano Anual <br/> ou R$ 44 Mensais</h3></tr>
        <tr className='especific'>
            <p>- Transcrição de Áudio Assíncrono - 200 minutos (R$0,15 / minuto excedente)</p>
            <p>- Transcrição de Áudio em tempo real  - 120 minutos (R$0,40 / minuto excedente)</p>
            <p>- Identificação de Idiomas em áudios - 500 minutos (R$0,03 / minuto excedente)</p>
            <p>- Análise de sentimento a partir do áudio (áudio pré-gravado) - 200 minutos (R$0,35 / minuto excedente)</p>
            <p>- Enterprise: preço sob consulta. Link para form de contato.</p>
            <p>- Preços especiais para grandes volumes.</p>
            <p>- Prioridade no suporte técnico.</p>
            <p>- Gestor de conta dedicado.</p>
        </tr>
    </td>
    </table>
</section>
    <section id='secao04' className='chamada'>
    <div className='formulario'>
    <FormComponent/>
    </div>
</section>
</div>
)
}
export default Corpo;
