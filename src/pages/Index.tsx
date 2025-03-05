
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';
import CTAButton from '@/components/CTAButton';
import { AlertTriangle, ArrowRight, Check } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      scrollElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      
      {/* Main content with padding for fixed header */}
      <main className="pt-28 md:pt-32">
        {/* Block 1 - Pain Points */}
        <section className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-dark-green scroll-reveal">
              VOCÊ JÁ ACORDOU SENTINDO-SE PESADA E INCHADA SEM MOTIVO?
            </h2>
            
            <div className="flex flex-col md:flex-row items-center gap-8 mt-10">
              <div className="md:w-2/3 scroll-reveal">
                <p className="text-lg text-gray-700 mb-6">
                  Você já acordou se sentindo pesada, inchada, desconfortável, mesmo sem ter comido nada exagerado no dia anterior? Ou talvez tenha colocado uma roupa que adorava e… ela ficou apertada de repente?
                </p>
                
                <p className="text-lg text-gray-700 mb-6">
                  A verdade é que milhares de mulheres sofrem com inchaço todos os dias – e a culpa não é só da alimentação.
                </p>
                
                <div className="bg-mint-light p-6 rounded-xl border border-mint/20 mb-6">
                  <p className="font-semibold text-gray-800 mb-2">O que ninguém te conta:</p>
                  <p className="text-lg">Você pode estar retendo até <span className="text-xl font-bold text-dark-green">2kg de líquidos</span> sem perceber! Isso te faz sentir mais pesada, cansada e até mais irritada ao longo do dia.</p>
                </div>
                
                <p className="text-lg text-gray-700 mb-6">
                  E se eu te dissesse que apenas 3 perguntas podem revelar exatamente o que está causando o seu inchaço – e ainda gerar um plano 100% personalizado para desinchar em apenas 7 dias?
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dark-green mr-2 mt-1 flex-shrink-0" />
                    <span>Sem remédios</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dark-green mr-2 mt-1 flex-shrink-0" />
                    <span>Sem academia</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dark-green mr-2 mt-1 flex-shrink-0" />
                    <span>Sem dietas mirabolantes</span>
                  </li>
                </ul>
                
                <p className="text-lg text-gray-700 mb-6">
                  Parece bom demais para ser verdade? Então continue lendo e descubra como essa técnica viral está ajudando milhares de mulheres!
                </p>
                
                {/* Before/after image */}
                <div className="relative mt-4 mb-6 border-2 border-mint rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/81fee600-8c66-4bb5-b3de-d81ea8acd9db.png" 
                    alt="Antes e depois de mulher que reduziu o inchaço" 
                    className="w-full h-auto"
                  />
                  <div className="absolute top-0 left-0 bg-mint/80 text-white text-xs font-semibold py-1 px-3 rounded-br-lg">
                    Resultado Real
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-2 italic">
                  Resultado de uma cliente após 7 dias seguindo o método personalizado
                </p>
              </div>
              
              <div className="md:w-1/3 flex justify-center scroll-reveal">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-mint/10 flex items-center justify-center animate-pulse-soft">
                    <AlertTriangle size={80} className="text-dark-green animate-float" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-mint-light rounded-full p-4 shadow-lg border border-mint/20">
                    <p className="font-semibold text-gray-800 text-center">2kg+ <br/> de inchaço!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Block 2 - Why other solutions failed */}
        <section className="section-container bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-dark-green scroll-reveal">
              POR QUE DIETAS E CHÁS GENÉRICOS NÃO FUNCIONAM?
            </h2>
            
            <div className="mt-10 scroll-reveal">
              <p className="text-lg text-gray-700 mb-6">
                Se você já tentou chá diurético, dietas malucas ou academia e ainda se sente inchada, você não está sozinha. O problema dessas soluções é que elas tratam o inchaço como se fosse gordura – mas na maioria das vezes, não é!
              </p>
              
              <div className="glass-card p-6 rounded-xl mb-8 border border-mint/10 bg-white shadow-md">
                <p className="font-semibold text-xl text-gray-800 mb-3">A verdade que ninguém te conta:</p>
                <p className="text-lg text-gray-700">
                  Seu corpo pode estar retendo líquidos e toxinas devido a uma combinação de fatores que variam de pessoa para pessoa.
                </p>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-5 rounded-lg bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                  <Check className="h-5 w-5 text-mint-dark mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg text-gray-700">
                      Algumas mulheres incham por causa de um único alimento específico que elas nem desconfiam.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-5 rounded-lg bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                  <Check className="h-5 w-5 text-mint-dark mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg text-gray-700">
                      Outras, por falta de um tipo específico de movimento (não, não é academia!).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-5 rounded-lg bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                  <Check className="h-5 w-5 text-mint-dark mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg text-gray-700">
                      E algumas, por desequilíbrio hormonal silencioso, que faz o corpo segurar água.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-xl font-semibold text-gray-800 mb-4">
                O que fazer então?
              </p>
              
              <p className="text-lg text-gray-700">
                A boa notícia é que existe um método simples e testado que está ajudando mulheres a zerar o inchaço sem precisar cortar tudo da alimentação ou viver na academia.
              </p>
            </div>
          </div>
        </section>
        
        {/* Block 3 - The Solution */}
        <section className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title scroll-reveal text-shimmer">
              CONHEÇA O MÉTODO VIRAL QUE ESTÁ TRANSFORMANDO VIDAS!
            </h2>
            
            <div className="mt-10 scroll-reveal">
              <p className="text-lg text-gray-700 mb-8">
                Recentemente, um método simples e surpreendente começou a viralizar entre mulheres de 35+ que lutavam contra o inchaço sem sucesso. Ele funciona assim:
              </p>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-mint/10 mb-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-mint text-white flex items-center justify-center font-bold text-xl mr-4">
                    1
                  </div>
                  <p className="text-lg font-medium text-gray-800">
                    Você responde 3 perguntas rápidas que identificam a principal causa do seu inchaço.
                  </p>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-mint text-white flex items-center justify-center font-bold text-xl mr-4">
                    2
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-800 mb-2">
                      Com base nessas respostas, você recebe um plano prático de 7 dias com:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-mint-dark mt-2 mr-2"></div>
                        <span className="text-gray-700">Receitas de chás e sucos específicos para o seu tipo de inchaço.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-mint-dark mt-2 mr-2"></div>
                        <span className="text-gray-700">Rotinas diárias de 10 minutos que ativam o metabolismo e reduzem a retenção de líquidos.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="text-center mb-10">
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  O melhor de tudo? Esse método é totalmente personalizado para VOCÊ!
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Ou seja, nada de soluções genéricas – é um plano ajustado às necessidades do seu corpo.
                </p>
                <p className="text-xl font-bold text-dark-green mb-8">
                  E o mais surpreendente? Mulheres que fizeram esse desafio relataram que em apenas 3 dias já viram a diferença na barriga, pernas e rosto!
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  E agora, você também pode testar esse método ainda hoje… gratuitamente!
                </p>
                
                <CTAButton large className="mx-auto animate-pulse-soft">
                  FAZER O TESTE GRATUITO AGORA! <ArrowRight className="h-5 w-5 ml-1" />
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
        
        {/* Block 4 - Testimonials */}
        <section className="section-container bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-dark-green scroll-reveal">
              O QUE AS MULHERES ESTÃO DIZENDO SOBRE O DESAFIO?
            </h2>
            
            <p className="text-center text-lg text-gray-700 mt-6 mb-12 scroll-reveal">
              O desafio de 7 dias para reduzir o inchaço já ajudou milhares de mulheres a se sentirem mais leves, menos cansadas e com a barriga menos estufada. Veja o que algumas delas disseram:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard 
                name="Ana" 
                age={42} 
                text="Eu sempre me sentia inchada, especialmente na barriga e nas pernas. Fiz o desafio e no terceiro dia já notei a diferença! Meu rosto desinchou, minha barriga ficou mais lisa e me senti mais leve. Parece mágica!" 
              />
              
              <TestimonialCard 
                name="Carla" 
                age={38} 
                text="Eu já tentei de tudo para diminuir o inchaço, mas nada funcionava a longo prazo. Com esse desafio, percebi que eu estava inchando por um motivo que nunca imaginei! Segui o plano e em 7 dias meu corpo desinchou como nunca antes!" 
              />
              
              <TestimonialCard 
                name="Luciana" 
                age={45} 
                text="Eu via esse método em todo lugar e resolvi testar. Que surpresa maravilhosa! Perdi 2kg de puro inchaço e voltei a usar roupas que estavam apertadas. Sem remédios, sem passar fome, sem academia!" 
              />
            </div>
            
            <div className="text-center mt-12 scroll-reveal">
              <p className="text-xl font-semibold text-gray-800 mb-8">
                E agora, é a sua vez! O que você vai fazer? Continuar se sentindo inchada e desconfortável ou testar essa técnica que já ajudou milhares de mulheres?
              </p>
            </div>
          </div>
        </section>
        
        {/* Block 5 - Final CTA */}
        <section className="section-container bg-gradient-to-b from-white to-mint-light/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-dark-green scroll-reveal">
              DÊ ADEUS AO INCHAÇO EM 7 DIAS – TESTE AGORA!
            </h2>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-mint/10 mt-10 scroll-reveal">
              <p className="text-center text-xl font-bold text-dark-green mb-8">
                AGORA É SUA VEZ DE TESTAR ESSE MÉTODO VIRAL!
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                Imagine acordar daqui a 7 dias e perceber que:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center p-4 rounded-lg bg-mint-light/50 border border-mint/10">
                  <Check className="h-6 w-6 text-mint-dark mr-3 flex-shrink-0" />
                  <p className="text-lg font-medium text-gray-800">Sua barriga está visivelmente menos inchada</p>
                </div>
                
                <div className="flex items-center p-4 rounded-lg bg-mint-light/50 border border-mint/10">
                  <Check className="h-6 w-6 text-mint-dark mr-3 flex-shrink-0" />
                  <p className="text-lg font-medium text-gray-800">Seu rosto está mais fino e menos 'estufado'</p>
                </div>
                
                <div className="flex items-center p-4 rounded-lg bg-mint-light/50 border border-mint/10">
                  <Check className="h-6 w-6 text-mint-dark mr-3 flex-shrink-0" />
                  <p className="text-lg font-medium text-gray-800">Você se sente mais leve e confortável nas roupas</p>
                </div>
                
                <div className="flex items-center p-4 rounded-lg bg-mint-light/50 border border-mint/10">
                  <Check className="h-6 w-6 text-mint-dark mr-3 flex-shrink-0" />
                  <p className="text-lg font-medium text-gray-800">Suas pernas não ficam mais pesadas no fim do dia</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-8">
                Isso não é promessa vazia – é um método baseado 100% no seu corpo, que já ajudou milhares de mulheres a se livrarem do inchaço de uma vez por todas!
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <p className="text-xl font-semibold text-center text-gray-800 mb-6">
                  COMO FUNCIONA?
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-mint text-white flex items-center justify-center font-bold text-lg mr-3 flex-shrink-0">
                      1
                    </div>
                    <p className="text-lg text-gray-700">
                      Faça o teste gratuito e responda 3 perguntas rápidas para descobrir o que está causando seu inchaço.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-mint text-white flex items-center justify-center font-bold text-lg mr-3 flex-shrink-0">
                      2
                    </div>
                    <p className="text-lg text-gray-700">
                      Receba seu plano personalizado de 7 dias, com receitas e rotinas criadas para VOCÊ!
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-mint text-white flex items-center justify-center font-bold text-lg mr-3 flex-shrink-0">
                      3
                    </div>
                    <p className="text-lg text-gray-700">
                      Acesse tudo por apenas <span className="font-bold">R$29,90</span> – um valor simbólico para você finalmente se livrar do inchaço e se sentir leve e renovada!
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border border-mint p-4 rounded-lg text-center mb-10">
                <p className="text-lg font-medium text-gray-800">
                  E tem mais: Se em até 7 dias você não ver resultados, devolvemos 100% do seu dinheiro!
                </p>
              </div>
              
              <div className="text-center mb-8">
                <CTAButton large className="mx-auto cta-glow">
                  FAZER O TESTE GRATUITO AGORA! <ArrowRight className="h-5 w-5 ml-1" />
                </CTAButton>
                
                <p className="mt-6 text-warning-red font-semibold flex items-center justify-center gap-2">
                  <AlertTriangle size={18} />
                  Atenção! Essa oferta pode sair do ar a qualquer momento devido ao alto número de acessos. Garanta seu acesso agora!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
