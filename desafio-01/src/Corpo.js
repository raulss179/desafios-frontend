import React , {useState, useEffect} from 'react';
import './Corpo.css';
import { useInView } from 'react-intersection-observer';
import { ImWhatsapp } from 'react-icons/im';
import FormComponent from './FormComponent';
import Carrossel from './carrossel';


function Corpo() {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });
    
      const dados = [
        {
        dados:require('./img/transcription.jpg') ,
        paragrafo: '" Texto do paragrafo da imagem 1 "',
        },
        {
        dados:require('./img/transcription01.jpg'),
        paragrafo: '" Texto do paragrafo da imagem 2 "',
        },
        {
        dados:require('./img/transcription02.jpg') ,
        paragrafo: '" Texto do paragrafo da imagem 1 "',
        },
        // Adicione mais imagens conforme necessário
      ];
    
      const intervalo = 10000; // Intervalo de 3 segundos entre as transições
    


    
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
    <h3>Conheça um pouco mais sobre Nossas soluçoes <p>(deslize o cursor sobre as imagens)</p></h3> </div>
    <div className='Flip-card-flex' >
    <div className='flip-card-inner'>
    <div className='flip-card'>
                <span>* Transcrição de <br/> Áudio Assíncrono<br/> (áudio pré-gravado):</span><br/>
                <p>API de transcrição de voz assíncrona para áudio pré-gravado. Temos uma das melhores engines de reconhecimento de fala do mundo! O recurso speech-to-text assíncrono é um parceiro estratégico para o seu negócio. Esteja você extraindo insights de áudio ou transcrevendo conteúdo em escala.</p>
                <a href='#'>saiba Mais</a>
            </div>
            </div>
            <div className='flip-card-inner'>
            
             <div className='flip-card'>
             <span>* Transcrição de Áudio <br/> em tempo real <br/> (streaming):</span><br/>
             <p>O recurso live-speech-to-text de transcrição ao vivo possibilita o uso de legendas em tempo real para o seu negócio. Nossas legendas garantem que as palestras e treinamentos ao vivo sejam acessíveis e possam ser arquivadas para uso futuro.</p>
                <a href='#'>saiba Mais</a>
             </div>
            </div>
            <div className='flip-card-inner'>
            <div className='flip-card'>
                <span>* Identificação<br/> de Idiomas <br/> em áudios:</span><br/>
                <p> Obtendo fala e insights a nível global. Nossa solução tem suporte a 52 idiomas.</p>
                <a href='#'>saiba Mais</a>
            </div>
             </div>
             <div className='flip-card-inner'>
             <div className='flip-card'>
                <span>* Análise de sentimento a <br/> partir do áudio<br/> (áudio pré-gravado):</span><br/>
                <p> Encontre os momentos mais importantes em trechos de falas, diferencie falas positivas e negativas e tome decisões de negócios mais assertivas com uma compreensão mais profunda.</p>
                <a href='#'>saiba Mais</a>
            </div>
            </div>
            </div>
            
       
</section>

    <section id='secao02' className='Diferencias'>
    <div>
      <div className='container'><h3> O que dizem nossos Usuários!!</h3></div>
      <div className='container_border'>
      <Carrossel dados={dados} intervalo={intervalo} />
      </div>
    </div>
</section>

    <section id='secao03' className='precos'>

    <div className='plano'><h2>Beginner</h2>
    <div className='valor_plano'><h3>R$ 328 no plano Anual <br/> ou R$ 29 Mensais</h3>
    <div className='diferenciais_plano'>
    <p> - Transcrição de Áudio Assíncrono  - 120 minutos (R$0,20 / minuto excedente)</p>
            <p>- Transcrição de Áudio em tempo real  - 90 minutos (R$0,40 / minuto excedente)</p>
            <p>- Identificação de Idiomas em áudios - 200 minutos (R$0,05 / minuto excedente)</p>
            <p>- Análise de sentimento a partir do áudio (áudio pré-gravado) - 120 minutos (R$0,40 / minuto excedente)</p>
            </div>
            </div>
    </div>

    <div className='plano'><h2>Business</h2>
    <div className='valor_plano'><h3>R$ 499 no plano Anual <br/> ou R$ 44 Mensais</h3>
    <div className='diferenciais_plano'>
    <p>- Transcrição de Áudio Assíncrono - 200 minutos (R$0,15 / minuto excedente)</p>
            <p>- Transcrição de Áudio em tempo real  - 120 minutos (R$0,40 / minuto excedente)</p>
            <p>- Identificação de Idiomas em áudios - 500 minutos (R$0,03 / minuto excedente)</p>
            <p>- Análise de sentimento a partir do áudio (áudio pré-gravado) - 200 minutos (R$0,35 / minuto excedente)</p>
            <p>- Enterprise: preço sob consulta. Link para form de contato.</p>
            <p>- Preços especiais para grandes volumes.</p>
            <p>- Prioridade no suporte técnico.</p>
            <p>- Gestor de conta dedicado.</p>
    </div>
    </div>
    </div>

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
