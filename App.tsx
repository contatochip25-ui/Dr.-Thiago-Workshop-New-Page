import React, { useState, useEffect } from 'react';
import { 
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
  mainAuthority: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiagobra%C3%A7ocruzado.png",
  bioPhoto: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/fotoperfil.jpg",
  trustPhoto: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/fotosorrindo.jpg",
  testimonial1: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/depoimento1.png",
  testimonial2: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/depoimento2.png",
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
    // Dispara o PageView apenas quando o React está montado e o fbq disponível
    const trackPageView = () => {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'PageView');
      }
    };
    
    // Tenta rastrear imediatamente. Se não der, tenta novamente após um pequeno delay para garantir o carregamento do script.
    trackPageView();
    const timer = setTimeout(trackPageView, 1000);

    // Intersection Observer para animações
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-red-600 selection:text-white pb-20 overflow-x-hidden">
      
      {/* --- SEÇÃO 1: HERO --- */}
      <section className="relative h-[100dvh] flex flex-col md:justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block w-full h-full">
          <div className="relative w-full h-full overflow-hidden">
             <img 
               src={IMAGES.mainAuthority} 
               alt="Dr. Thiago Costa" 
               className="absolute right-[-10%] bottom-0 h-full w-auto object-contain filter brightness-[0.9]"
               style={{ 
                 maskImage: 'linear-gradient(to left, black 60%, transparent 95%), linear-gradient(to top, black 80%, transparent 100%)',
                 WebkitMaskImage: 'linear-gradient(to left, black 60%, transparent 95%), linear-gradient(to top, black 80%, transparent 100%)'
               }}
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />
             <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
          </div>
        </div>

        <div className="absolute top-0 left-0 right-0 z-30 pt-4 px-6 flex justify-center pointer-events-none">
           <span className="bg-red-600/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] border border-white/10">
             🔴 EXCLUSIVO PARA MÉDICOS
           </span>
        </div>

        <div className="relative w-full h-[45vh] shrink-0 overflow-hidden md:hidden">
          <img src={IMAGES.mainAuthority} alt="Dr. Thiago Costa" className="w-full h-full object-cover object-top filter brightness-[0.85]" />
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
              <span className="text-[13px] md:text-base text-white font-black tracking-tight">19:00h - Ao Vivo</span>
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

      {/* --- SEÇÃO 2: DIAGNÓSTICO --- */}
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

      {/* --- SEÇÃO 3: ANÁLISE --- */}
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
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center h-full">
                <Scale className="mx-auto text-red-600 mb-2" size={32} />
                <h5 className="text-white font-black text-[10px] md:text-[13px] uppercase italic">Filtro de Postura</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 4: PLANO DE AÇÃO --- */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5 reveal">
        <div className="max-w-md md:max-w-4xl mx-auto">
          <SectionTitle red="PLANO DE AÇÃO">O QUE VOCÊ VAI DOMINAR NO WORKSHOP</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <Briefcase size={22} />, title: "1. Engenharia de Posicionamento na Unidade", desc: "Aprenda como ser visto como autoridade desde os primeiros minutos." },
              { icon: <Lock size={22} />, title: "2. Códigos de Confiança da Coordenação", desc: "Descubra a linguagem silenciosa que garante sua vaga." },
              { icon: <HeartPulse size={22} />, title: "3. Postura de Trincheira", desc: "Construa uma presença que faz a equipe confiar em você." },
              { icon: <Users size={22} />, title: "4. Networking Institucional", desc: "Saiba como operar nos bastidores das UPAs e grandes centros." },
              { icon: <FileText size={22} />, title: "5. Blindagem de Escala", desc: "Aprenda a se tornar o médico que a coordenação nunca quer perder." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl bg-black border border-white/5 group hover:border-red-600/50 transition-all">
                <div className="shrink-0 w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center text-red-600">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-black uppercase text-[12px] italic">{item.title}</h4>
                  <p className="text-[11px] text-gray-300 font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEÇÃO BIO --- */}
      <section className="py-24 px-6 bg-black reveal">
        <div className="max-w-md md:max-w-4xl mx-auto md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div className="w-full mb-8 md:mb-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img src={IMAGES.bioPhoto} alt="Dr. Thiago Costa" className="w-full h-auto grayscale-[30%] contrast-[1.1]" />
          </div>
          <div>
            <SectionTitle red="MÉDICO DE TRINCHEIRA">QUEM É O DR. THIAGO COSTA</SectionTitle>
            <p className="text-gray-200 leading-relaxed">
              O Dr. Thiago Costa não é um influenciador. Ele é um médico que construiu sua carreira no caos das trincheiras, passando por UPAs e grandes centros. Decodificou os padrões que fazem um médico ser autoridade imediata.
            </p>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO VALIDAÇÃO --- */}
      <section className="py-24 bg-[#0a0a0a] overflow-hidden reveal">
        <div className="max-w-md md:max-w-6xl mx-auto text-center">
          <SectionTitle center red="VALIDAÇÃO REAL">RECONHECIMENTO DE QUEM CONVIVE COM O PADRÃO</SectionTitle>
          <div className="flex justify-center mb-16">
            <div className="relative p-1 bg-gradient-to-br from-red-600 to-transparent rounded-full shadow-[0_0_40px_rgba(220,38,38,0.4)]">
              <img src={IMAGES.trustPhoto} alt="Sucesso" className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full border-2 border-black" />
              <div className="absolute bottom-0 right-0 bg-red-600 p-2 rounded-full text-white">
                <CheckCircle2 size={24} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-4xl md:mx-auto px-6">
             <VideoCard title="RECOMENDAÇÃO INSTITUCIONAL" thumbnail={IMAGES.testimonial1} videoSrc="https://player-vz-e907bd19-b8d.tv.pandavideo.com.br/embed/?v=af65c3c8-f3bc-4b0d-8266-9e4f675eec9b" />
             <VideoCard title="TESTEMUNHO DE POSTURA" thumbnail={IMAGES.testimonial2} position="object-top" videoSrc="https://player-vz-e907bd19-b8d.tv.pandavideo.com.br/embed/?v=75e01b46-0d3d-409f-bb7f-2f8b12990d66" />
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5 reveal">
        <div className="max-w-md md:max-w-3xl mx-auto">
          <SectionTitle red="CLAREZA FINAL">PERGUNTAS FREQUENTES</SectionTitle>
          <div className="mt-8 space-y-2">
            <FAQItem question="Para quem é indicado este workshop?" answer="Principalmente para médicos recém-formados e em transição de carreira." />
            <FAQItem question="O evento ficará gravado?" answer="Sim, os inscritos terão acesso à gravação por tempo limitado." />
            <FAQItem question="Haverá material complementar?" answer="Sim, entregaremos o Checklist de Posicionamento durante a sessão." />
          </div>
        </div>
      </section>

      {/* --- OFERTA FINAL --- */}
      <section className="pt-24 pb-48 px-6 bg-black text-center reveal">
        <div className="max-w-md md:max-w-4xl mx-auto">
          <Award className="mx-auto text-red-600 mb-6" size={64} />
          <h2 className="text-7xl md:text-9xl font-black text-white italic leading-[0.8]">R$ 27,00</h2>
          <CTAButton hasLed={true} />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 bg-black/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl">
         <div className="max-w-4xl mx-auto flex items-center justify-between">
           <div className="flex flex-col">
              <span className="text-red-600 text-[8px] font-black uppercase italic">Lote 01 Expira em Breve</span>
              <span className="text-white text-xl font-black italic">R$ 27,00</span>
           </div>
           <button onClick={() => safeOpen(CHECKOUT_URL)} className="px-6 py-3 bg-red-600 text-white font-black text-[10px] uppercase italic rounded-lg">
             QUERO MEU INGRESSO
           </button>
         </div>
      </div>
    </div>
  );
};

export default App;