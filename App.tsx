import React, { useState, useEffect, useRef } from 'react';
import { 
  AlertCircle, 
  Calendar, 
  Clock, 
  Play, 
  ShieldCheck, 
  TrendingUp, 
  XCircle,
  ArrowRight,
  Video,
  Lock,
  CheckCircle2,
  Stethoscope,
  Briefcase,
  Users,
  Target,
  FileText,
  BadgeAlert,
  ChevronDown,
  ChevronUp,
  Award,
  HeartPulse,
  Scale
} from 'lucide-react';

const IMAGES = {
  // Hero: Autoridade máxima e postura de comando
  mainAuthority: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiagobra%C3%A7ocruzado.png",
  // Bio: Identidade profissional clara
  bioPhoto: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/fotoperfil.jpg",
  // Prova Social/Final: Proximidade, confiança e sucesso
  trustPhoto: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/fotosorrindo.jpg",
  // Depoimentos: Thumbnails específicos
  testimonial1: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/depoimento1.png",
  testimonial2: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/depoimento2.png",
  // Fotos de Autoridade (Novas)
  authPhoto1: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago1.jpg",
  authPhoto2: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago2.jpg",
  authPhoto3: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago3.jpg"
};

const DOMAIN = "workshop.medicothiagocosta.com.br";
const CHECKOUT_URL = "https://pay.kiwify.com.br/MzhAkbY";

const safeOpen = (url: string): void => {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

const ProgressBar: React.FC = () => (
  <div className="w-full mt-3 px-2">
    <div className="flex justify-between items-end mb-1">
      <span className="text-[8px] font-black text-white/30 uppercase tracking-widest italic">LOTE 01: 92% DAS VAGAS PREENCHIDAS</span>
      <span className="text-[10px] font-black text-red-500 animate-pulse">92%</span>
    </div>
    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
      <div 
        className="h-full bg-red-600 rounded-full transition-all duration-1000" 
        style={{ width: '92%' }}
      />
    </div>
  </div>
);

const CTAButton: React.FC<{ hasLed?: boolean }> = ({ hasLed = false }) => (
  <div className="flex flex-col items-center w-full md:max-w-sm md:mx-auto">
    <button 
      onClick={() => safeOpen(CHECKOUT_URL)}
      className={`group relative w-full py-4 bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-tighter rounded-xl transform transition-all active:scale-95 border-b-[4px] border-red-900 overflow-hidden antialiased text-[0.95rem] ${
        hasLed ? 'led-active' : ''
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      <span className="relative z-10 flex items-center justify-center gap-2 italic">
        GARANTIR MEU INGRESSO | LOTE 01
        <ArrowRight size={18} />
      </span>
    </button>
    <ProgressBar />
  </div>
);

const VideoCard: React.FC<{ title: string; thumbnail: string; position?: string; videoSrc?: string }> = ({ title, thumbnail, position = "object-center", videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full bg-[#111] rounded-2xl border border-white/10 overflow-hidden mb-8 md:mb-0 shadow-2xl">
      <div className="relative aspect-video flex items-center justify-center bg-black group">
        {isPlaying && videoSrc ? (
          <iframe 
            src={`${videoSrc}&autoplay=true`} 
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
            allowFullScreen
          />
        ) : (
          <>
            <img 
              src={thumbnail} 
              alt="Prova Social" 
              className={`absolute inset-0 w-full h-full object-cover ${position} opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500`} 
            />
            <div 
              onClick={() => setIsPlaying(true)}
              className="z-10 bg-red-600 p-5 rounded-full shadow-2xl group-hover:scale-110 transition-transform cursor-pointer"
            >
              <Play className="fill-current text-white ml-1" size={28} />
            </div>
            <div className="absolute bottom-4 left-4 right-4 z-20 text-center">
              <h3 className="text-white font-black text-[10px] leading-tight uppercase tracking-tight drop-shadow-lg">{title}</h3>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />
          </>
        )}
      </div>
    </div>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
        <span className="text-white font-bold text-xs md:text-sm uppercase tracking-tight pr-4">{question}</span>
        {isOpen ? <ChevronUp className="text-red-600 shrink-0" size={16} /> : <ChevronDown className="text-gray-600 shrink-0" size={16} />}
      </button>
      {isOpen && <p className="mt-3 text-[13px] md:text-sm text-gray-300 leading-relaxed font-medium">{answer}</p>}
    </div>
  );
};

const SectionTitle: React.FC<{ children: React.ReactNode; red?: string; center?: boolean }> = ({ children, red, center }) => (
  <div className={`mb-10 ${center ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[0.85] tracking-tighter uppercase italic">
      {children} <span className="text-red-600 block mt-1">{red}</span>
    </h2>
    <div className={`w-12 md:w-20 h-1 bg-red-600 mt-4 ${center ? 'mx-auto' : ''}`} />
  </div>
);

const App: React.FC = () => {
  const authPhotos = [IMAGES.authPhoto1, IMAGES.authPhoto2, IMAGES.authPhoto3];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-red-600 selection:text-white pb-20 overflow-x-hidden">
      
      {/* --- SEÇÃO 1: HERO - O DESPERTAR DA ESTRATÉGIA --- */}
      <section className="relative h-[100dvh] flex flex-col md:justify-center overflow-hidden">
        
        {/* IMAGEM ESTRATÉGICA - AJUSTADA PARA FUSÃO NO DESKTOP */}
        <div className="absolute inset-0 z-0 hidden md:block w-full h-full">
          <div className="relative w-full h-full overflow-hidden">
             <img 
               src={IMAGES.mainAuthority} 
               alt="Dr. Thiago Costa - Maestria de Escala" 
               className="absolute right-[-10%] bottom-0 h-full w-auto object-contain filter brightness-[0.9] transition-all duration-1000"
               style={{ 
                 maskImage: 'linear-gradient(to left, black 60%, transparent 95%), linear-gradient(to top, black 80%, transparent 100%)',
                 WebkitMaskImage: 'linear-gradient(to left, black 60%, transparent 95%), linear-gradient(to top, black 80%, transparent 100%)'
               }}
             />
             {/* Gradientes extras para fusão perfeita nas laterais no desktop */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />
             <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
          </div>
        </div>

        {/* MANTENDO ESTRUTURA MOBILE IGUAL */}
        <div className="absolute top-0 left-0 right-0 z-30 pt-4 px-6 flex justify-center pointer-events-none">
           <span className="bg-red-600/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] border border-white/10 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
             🔴 EXCLUSIVO PARA MÉDICOS
           </span>
        </div>

        {/* Imagem para Mobile */}
        <div className="relative w-full h-[45vh] shrink-0 overflow-hidden md:hidden">
          <img 
            src={IMAGES.mainAuthority} 
            alt="Dr. Thiago Costa - Maestria de Escala" 
            className="w-full h-full object-cover object-top filter brightness-[0.85] transition-all duration-700" 
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>

        <div className="relative z-10 w-full px-6 flex flex-col items-center gap-1.5 mb-2 shrink-0 md:mt-12">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-1.5">
              <Calendar className="text-[#d4a373]" size={14} strokeWidth={2.5} />
              <span className="text-[13px] md:text-base text-white font-black tracking-tight">08 de fevereiro</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="text-[#d4a373]" size={14} strokeWidth={2.5} />
              <span className="text-[13px] md:text-base text-white font-black tracking-tight">20:00h - Ao Vivo</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Video className="text-[#d4a373]" size={14} strokeWidth={2.5} />
            <span className="text-[12px] md:text-sm text-[#d4a373] font-bold tracking-tight uppercase">Transmissão Exclusiva via <span className="font-black">ZOOM</span></span>
          </div>
        </div>

        <div className="relative z-10 px-6 flex flex-col flex-grow justify-between pb-8 max-w-md md:max-w-4xl lg:max-w-5xl md:mx-0 md:pl-16 lg:pl-32 w-full">
          <div className="text-center md:text-left md:max-w-2xl">
            <h1 className="text-[1.65rem] md:text-5xl lg:text-7xl font-black text-white leading-[0.95] tracking-tighter uppercase italic mb-3">
              SUA TÉCNICA SALVA VIDAS. <span className="text-red-600">SUA ESTRATÉGIA</span> GARANTE SUA LIBERDADE.
            </h1>
            <p className="text-[1rem] md:text-xl text-gray-200 font-bold leading-tight px-2 md:px-0 max-w-2xl">
              O CRM parou de ser um diferencial competitivo. Aprenda a decifrar os bastidores hospitalares e assuma o controle das escalas fixas de elite.
            </p>
          </div>
          <div className="mt-auto md:mt-12 w-full flex justify-center md:justify-start flex-col">
            <CTAButton hasLed={true} />
            <div className="flex justify-center md:justify-start gap-4 mt-5 opacity-30 grayscale scale-90 md:scale-100">
               <div className="flex items-center gap-1"><ShieldCheck size={12} className="text-white" /><span className="text-[7px] md:text-[9px] font-black uppercase italic">Vagas Limitadas Lote 01</span></div>
               <div className="flex items-center gap-1"><Lock size={12} className="text-white" /><span className="text-[7px] md:text-[9px] font-black uppercase italic">Acesso Imediato</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 2: DIAGNÓSTICO DO MERCADO MÉDICO --- */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5 reveal">
        <div className="max-w-md md:max-w-4xl mx-auto">
          <SectionTitle red="DIAGNÓSTICO DO MERCADO">Ser apenas mais um CRM não garante sua escala.</SectionTitle>
          <div className="space-y-6 text-gray-200 text-[1rem] md:text-lg leading-relaxed">
            <p className="md:text-center md:max-w-3xl md:mx-auto">
              Enquanto você foca no estetoscópio, o mercado está de olho na sua <strong>postura estratégica</strong>. O cenário mudou: com 38 mil novos médicos entrando no mercado anualmente, o CRM deixou de ser um passaporte para se tornar apenas o requisito mínimo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              {[
                { icon: <BadgeAlert />, title: "O REFÉM DO WHATSAPP", desc: "Viver em alerta 24h para não perder a vaga em grupos caóticos de escala." },
                { icon: <XCircle />, title: "O MÉDICO 'TAPA-BURACO'", desc: "A sensação humilhante de ser tratado como descartável por coordenações amadoras." },
                { icon: <TrendingUp />, title: "INSEGURANÇA FINANCEIRA", desc: "A angústia de não ter uma escala fixa para planejar o futuro da sua carreira." },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white/5 border-l-2 border-red-600 rounded-r-xl md:flex md:flex-col md:items-center md:text-center md:border-l-0 md:border-t-2">
                  <div className="flex items-center gap-3 mb-2 md:mb-4">
                    <div className="text-red-600">{item.icon}</div>
                    <h4 className="text-white font-black uppercase text-[10px] md:text-[12px] italic">{item.title}</h4>
                  </div>
                  <p className="text-[13px] md:text-sm text-gray-300 font-medium leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 3: ANÁLISE DE CENÁRIO E FILTRO DE POSTURA --- */}
      <section className="py-24 px-6 bg-black relative reveal">
        <div className="max-w-md md:max-w-4xl mx-auto">
          <SectionTitle red="O CÓDIGO INVISÍVEL">POR QUE ALGUNS TÊM AS MELHORES ESCALAS?</SectionTitle>
          <div className="space-y-6 text-gray-200 text-[1rem] md:text-lg leading-relaxed">
            <p className="md:text-center md:max-w-3xl md:mx-auto">
              As escalas fixas e seguras operam sob um critério de seleção invisível: a <strong>Confiança Operacional</strong>. Quem não domina a engenharia de carreira está condenado a viver das sobras de quem já entendeu o novo jogo.
            </p>
            <div className="grid grid-cols-2 gap-4 md:max-w-2xl md:mx-auto">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center h-full">
                <Target className="mx-auto text-red-600 mb-2" size={32} />
                <h5 className="text-white font-black text-[10px] md:text-[13px] uppercase italic">Radar da Coordenação</h5>
                <p className="text-[11px] md:text-xs text-gray-300 mt-1 uppercase">O que os tomadores de decisão realmente observam.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center h-full">
                <Scale className="mx-auto text-red-600 mb-2" size={32} />
                <h5 className="text-white font-black text-[10px] md:text-[13px] uppercase italic">Filtro de Postura</h5>
                <p className="text-[11px] md:text-xs text-gray-300 mt-1 uppercase">Critérios silenciosos que nenhum livro ensina.</p>
              </div>
            </div>
            <div className="bg-red-600/10 p-6 md:p-10 rounded-2xl border border-red-600/30 text-center italic font-bold text-white shadow-xl md:text-xl md:max-w-2xl md:mx-auto">
              "Esforço sem estratégia na medicina moderna é o caminho mais rápido para a invisibilidade profissional e o burnout financeiro."
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 4: O TREINAMENTO INTENSIVO (ROADMAP) --- */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5 reveal">
        <div className="max-w-md md:max-w-4xl mx-auto">
          <SectionTitle red="PLANO DE AÇÃO">O QUE VOCÊ VAI DOMINAR NO WORKSHOP AO VIVO</SectionTitle>
          <div className="mb-8 md:text-center">
            <p className="text-[1rem] md:text-xl text-gray-200 font-bold leading-relaxed mb-6 md:max-w-3xl md:mx-auto">
              3 a 4 horas de transformação na sua carreira médica, direto ao ponto. Você vai sair sabendo exatamente como ser o médico estratégico que manda na sua escala, sem depender de plantões caóticos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { 
                icon: <Briefcase size={22} />, 
                title: "1. Engenharia de Posicionamento na Unidade", 
                desc: "Aprenda como ser visto como autoridade desde os primeiros minutos, conquistar respeito imediato da equipe e nunca mais ser tratado como “tapa-buraco”." 
              },
              { 
                icon: <Lock size={22} />, 
                title: "2. Códigos de Confiança da Coordenação", 
                desc: "Descubra a linguagem silenciosa que garante sua vaga nas escalas fixas de elite, mesmo sem precisar implorar ou competir nos grupos de WhatsApp." 
              },
              { 
                icon: <HeartPulse size={22} />, 
                title: "3. Postura de Trincheira e Liderança de Alto Impacto", 
                desc: "Construa uma presença que faz a equipe confiar em você, tomar decisões rápidas e assumir responsabilidades, sem precisar provar nada para ninguém." 
              },
              { 
                icon: <Users size={22} />, 
                title: "4. Networking Institucional: o Jogo dos Bastidores", 
                desc: "Saiba como operar nos bastidores das UPAs e grandes centros, garantindo oportunidades que ninguém te conta e colocando você à frente da concorrência." 
              },
              { 
                icon: <FileText size={22} />, 
                title: "5. Blindagem de Escala: Tornando-se Insubstituível", 
                desc: "Aprenda a se tornar o médico que a coordenação nunca quer perder, garantindo estabilidade, previsibilidade financeira e liberdade para planejar sua carreira." 
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl bg-black border border-white/5 group hover:border-red-600/50 transition-all md:flex-col md:items-start">
                <div className="shrink-0 w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-black uppercase text-[12px] md:text-[14px] tracking-tight mb-1 italic">{item.title}</h4>
                  <p className="text-[11px] md:text-xs text-gray-300 leading-tight uppercase font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 5: APRESENTAÇÃO / BIO - DR. THIAGO COSTA --- */}
      <section className="py-24 px-6 bg-black reveal">
        <div className="max-w-md md:max-w-4xl mx-auto md:grid md:grid-cols-2 md:gap-12 md:items-center">
          {/* IMAGEM ESTRATÉGICA: FOTO DE PERFIL (IDENTIDADE) */}
          <div className="w-full mb-8 md:mb-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img src={IMAGES.bioPhoto} alt="Dr. Thiago Costa - Perfil" className="w-full h-auto grayscale-[30%] contrast-[1.1] md:object-cover md:h-[600px]" />
          </div>
          <div>
            <SectionTitle red="MÉDICO DE TRINCHEIRA">QUEM É O DR. THIAGO COSTA</SectionTitle>
            <div className="space-y-6 text-gray-200 text-[1rem] md:text-lg leading-relaxed">
              <p>
                O Dr. Thiago Costa não é um influenciador. Ele é um médico que construiu sua carreira no caos das trincheiras, passando por UPAs, grandes centros e a gestão hospitalar real.
              </p>
              <p>
                Respeitado por equipes de enfermagem e coordenações técnicas, ele decodificou os padrões que fazem um médico ser visto as uma autoridade imediata ou como apenas mais um nome em uma lista. Sua abordagem é pragmática: transformar a insegurança do recém-formado na clareza do médico estratégico que comanda sua própria agenda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 6: VALIDAÇÃO / PROVA SOCIAL --- */}
      <section className="py-24 bg-[#0a0a0a] overflow-hidden reveal">
        <div className="max-w-md md:max-w-6xl mx-auto text-center">
          <div className="px-6">
            <SectionTitle center red="VALIDAÇÃO REAL">RECONHECIMENTO DE QUEM CONVIVE COM O PADRÃO</SectionTitle>
          </div>
          
          {/* FOTO CENTRAL DE CONFIANÇA */}
          <div className="flex justify-center mb-16">
            <div className="relative p-1 bg-gradient-to-br from-red-600 to-transparent rounded-full shadow-[0_0_40px_rgba(220,38,38,0.4)]">
              <img src={IMAGES.trustPhoto} alt="Confiança e Sucesso" className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full border-2 border-black" />
              <div className="absolute bottom-0 right-0 bg-red-600 p-2 md:p-3 rounded-full text-white shadow-lg">
                <CheckCircle2 size={24} />
              </div>
            </div>
          </div>

          {/* CARROSSEL AUTOMÁTICO DE AUTORIDADE */}
          <div className="mb-20 relative">
            <p className="text-red-600 font-black uppercase text-[10px] md:text-xs tracking-[0.4em] mb-8 italic">Círculo de Influência e Autoridade</p>
            
            <div className="flex overflow-hidden group/slider relative w-full">
              {/* Duplicando as fotos para criar o efeito de loop infinito */}
              <div className="flex animate-infinite-scroll py-4 gap-4 md:gap-8">
                {[...authPhotos, ...authPhotos].map((img, idx) => (
                  <div key={idx} className="shrink-0 w-[260px] md:w-[320px] lg:w-[380px]">
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group relative bg-[#111]">
                      <img 
                        src={img} 
                        alt={`Dr. Thiago Costa Autoridade ${idx + 1}`} 
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>
                ))}
              </div>
              {/* Fade out nas laterais para elegância */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            </div>
          </div>

          {/* DEPOIMENTOS EM VÍDEO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-4xl md:mx-auto px-6">
             <VideoCard 
               title="RECOMENDAÇÃO INSTITUCIONAL: O impacto profissional nas trincheiras." 
               thumbnail={IMAGES.testimonial1} 
               videoSrc="https://player-vz-e907bd19-b8d.tv.pandavideo.com.br/embed/?v=af65c3c8-f3bc-4b0d-8266-9e4f675eec9b"
             />
             <VideoCard 
               title="TESTEMUNHO DE POSTURA: O respeito conquistado nos bastidores hospitalares." 
               thumbnail={IMAGES.testimonial2} 
               position="object-top" 
               videoSrc="https://player-vz-e907bd19-b8d.tv.pandavideo.com.br/embed/?v=75e01b46-0d3d-409f-bb7f-2f8b12990d66"
             />
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 7: PARA QUEM É / PARA QUEM NÃO É --- */}
      <section className="py-24 px-6 bg-black reveal">
        <div className="max-w-md md:max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
              <h3 className="text-green-500 font-black text-xl md:text-2xl uppercase italic mb-6 flex items-center gap-2">
                <CheckCircle2 /> O WORKSHOP É PARA VOCÊ:
              </h3>
              <ul className="space-y-4 text-[0.8rem] md:text-base font-bold uppercase tracking-tight text-white/90">
                <li className="flex gap-2"><span>✅</span> Médicos recém-formados em busca de escalas fixas</li>
                <li className="flex gap-2"><span>✅</span> Quem cansou da humilhação dos grupos de WhatsApp</li>
                <li className="flex gap-2"><span>✅</span> Médicos que precisam de previsibilidade financeira</li>
                <li className="flex gap-2"><span>✅</span> Quem deseja ser a primeira opção das coordenações</li>
              </ul>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 opacity-80">
              <h3 className="text-red-500 font-black text-xl md:text-2xl uppercase italic mb-6 flex items-center gap-2">
                <XCircle /> NÃO É PARA VOCÊ:
              </h3>
              <ul className="space-y-4 text-[0.8rem] md:text-base font-bold uppercase tracking-tight text-white/50">
                <li className="flex gap-2"><span>❌</span> Quem acredita que CRM sozinho garante futuro</li>
                <li className="flex gap-2"><span>❌</span> Quem aceita o amadorismo da gestão hospitalar</li>
                <li className="flex gap-2"><span>❌</span> Quem busca fórmulas mágicas sem mudança de postura</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 8: FAQ --- */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5 reveal">
        <div className="max-w-md md:max-w-3xl mx-auto">
          <SectionTitle red="CLAREZA FINAL">PERGUNTAS FREQUENTES</SectionTitle>
          <div className="mt-8 space-y-2">
            <FAQItem 
              question="Para quem é indicado este workshop?" 
              answer="Principalmente para médicos recém-formados e em transição de carreira que buscam estabilidade através de escalas fixas, abandonando a dependência de plantões avulsos." 
            />
            <FAQItem 
              question="O workshop ensina marketing médico ou redes sociais?" 
              answer="Não. O foco é 100% no mercado offline, gestão de carreira hospitalar e posicionamento técnico nos bastidores onde as escalas foram decididas." 
            />
            <FAQItem 
              question="Por que o valor é de apenas R$ 27,00?" 
              answer="O valor é simbólico para filtrar os médicos realmente comprometidos. Uma única escala fixa paga esse investimento por anos. O custo real é continuar dependendo da sorte." 
            />
            <FAQItem 
              question="O evento ficará gravado?" 
              answer="Sim, os inscritos terão acesso à gravação por tempo limitado para revisarem os códigos estratégicos de bastidor." 
            />
            <FAQItem 
              question="Haverá algum material complementar?" 
              answer="Sim, entregaremos o Checklist de Posicionamento de Trincheira durante a sessão ao vivo no Zoom." 
            />
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 9: OFERTA FINAL --- */}
      <section className="pt-24 pb-48 px-6 bg-black relative overflow-hidden text-center reveal">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-red-600/5 blur-[100px] -z-10" />
        <div className="max-w-md md:max-w-4xl mx-auto">
          <Award className="mx-auto text-red-600 mb-6" size={64} />
          <p className="text-red-500 font-black uppercase text-[10px] md:text-sm tracking-[0.5em] mb-4 italic">O Mercado Não Espera. Sua Escala de Elite Começa Aqui.</p>
          <div className="mb-10">
            <span className="text-gray-500 line-through text-sm md:text-lg font-bold block">De R$ 997,00</span>
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase italic leading-[0.8]">R$ 27,00</h2>
            <p className="text-[12px] md:text-base text-gray-300 font-black mt-2 uppercase">Ingresso Workshop Maestria de Escala</p>
          </div>
          
          <CTAButton hasLed={true} />
          
          <div className="mt-12 flex flex-col items-center gap-4 opacity-50 grayscale">
            <div className="flex gap-8">
               <ShieldCheck size={28} /> <Lock size={28} /> <Users size={28} />
            </div>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-widest leading-relaxed text-gray-300">
              Ingressos do lote de abertura avançando <br/> 
              Ambiente 100% Seguro • Suporte Direto
            </p>
          </div>
        </div>
      </section>

      {/* --- STICKY FOOTER --- */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 bg-black/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl">
         <div className="max-w-4xl mx-auto flex items-center justify-between">
           <div className="flex flex-col">
              <span className="text-red-600 text-[8px] md:text-[10px] font-black uppercase tracking-tighter italic">Lote 01 Expira em Breve</span>
              <span className="text-white text-xl md:text-3xl font-black italic tracking-tighter">R$ 27,00</span>
           </div>
           <button 
             onClick={() => safeOpen(CHECKOUT_URL)}
             className="px-6 md:px-10 py-3 md:py-4 bg-red-600 text-white font-black text-[10px] md:text-xs uppercase italic rounded-lg active:scale-95 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)]"
           >
             QUERO MEU INGRESSO
           </button>
         </div>
      </div>

      <footer className="py-20 px-6 text-center bg-black opacity-30">
        <div className="max-w-md md:max-w-4xl mx-auto">
          <p className="text-[8px] md:text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] leading-loose">
            Workshop Maestria de Escala | Dr. Thiago Costa <br/>
            Sua estratégia garante sua liberdade. <br/>
            <a href={`https://${DOMAIN}`} target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
              {DOMAIN}
            </a> <br/>
            © 2024 - Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;