
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Video, 
  Lock, 
  ShieldCheck, 
  TrendingUp, 
  XCircle, 
  CheckCircle2, 
  Smartphone, 
  BadgeAlert, 
  Target, 
  Eye, 
  Briefcase, 
  Users, 
  FileText, 
  HeartPulse, 
  Scale, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  Zap, 
  Flame, 
  X 
} from 'lucide-react';

// --- CONFIGURAÇÕES E MOCKS ---

const IMAGES = {
  mainAuthority: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiagobra%C3%A7ocruzado.png",
  bioPhoto: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/fotoperfil.jpg",
  trustPhoto: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/fotosorrindo.jpg",
  auth1: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago1.jpg",
  auth2: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago2.jpg",
  auth3: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago3.jpg",
  thumb1: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/depoimento1.png",
  thumb2: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/depoimento2.png",
};

const CHECKOUT_URL = "https://pay.kiwify.com.br/MzhAkbY";

const NOTIFICATIONS = [
  { name: "Dr. Rafael (SP)", time: "Há 2 minutos" },
  { name: "Dra. Letícia (MG)", time: "Há 5 minutos" },
  { name: "Dr. Bruno (RJ)", time: "Há 12 minutos" },
  { name: "Dra. Sofia (PR)", time: "Há 8 minutos" },
  { name: "Dr. Marcos (RS)", time: "Há 1 minuto" },
];

const safeOpen = () => window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');

// --- COMPONENTES DE UI ---

const Reveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) entry.target.classList.add('revealed');
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="reveal">{children}</div>;
};

/* COMPONENTE DE BARRA DE PROGRESSO PADRONIZADO */
const ProgressBar: React.FC<{ progress: number; variant?: 'red' | 'green' }> = ({ progress, variant = 'red' }) => (
  <div className="w-full mt-6 mb-4 relative z-50">
    <div className="relative h-6 bg-white/20 rounded-full overflow-hidden border border-white/10 shadow-lg min-h-[24px]">
      <div 
        className={`h-full ${variant === 'red' ? 'bg-blood-red' : 'bg-success-green'} transition-all duration-1000 ease-out`} 
        style={{ width: `${progress}%` }} 
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-white text-[10px] font-black uppercase tracking-[0.15em] leading-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
          LOTE 01 • {Math.floor(progress)}% DOS INGRESSOS VENDIDOS
        </span>
      </div>
    </div>
  </div>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`w-full flex justify-between items-center text-left p-6 transition-colors ${isOpen ? 'bg-blood-red text-white' : 'bg-white text-deep-black hover:bg-gray-100'}`}
      >
        <span className="font-bold text-base md:text-lg pr-4">{question}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown className="text-blood-red" />}
      </button>
      <div className={`transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 p-6' : 'max-h-0 opacity-0 p-0'}`}>
        <p className="text-slate-medium text-sm md:text-base leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// --- COMPONENTES DE CONVERSÃO ---

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > window.innerHeight);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-[100] p-4 bg-blood-red/95 backdrop-blur-md shadow-[0_-10px_30px_rgba(185,28,28,0.3)] transition-all duration-500 transform ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="flex flex-col text-white">
          <span className="text-[10px] font-bold uppercase tracking-widest leading-none mb-1">Oferta Lote 01</span>
          <span className="text-2xl font-black italic tracking-tighter leading-none">R$ 27,00</span>
        </div>
        <button 
          onClick={safeOpen}
          className="bg-clinical-white text-blood-red px-8 py-3 rounded-xl font-black italic text-xs uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-xl"
        >
          GARANTIR VAGA
        </button>
      </div>
    </div>
  );
};

const ConversionToast = () => {
  const [notif, setNotif] = useState(NOTIFICATIONS[0]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setNotif(NOTIFICATIONS[Math.floor(Math.random() * NOTIFICATIONS.length)]);
        setShow(true);
      }, 500);
      setTimeout(() => setShow(false), 12000); 
    }, 20000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed bottom-24 left-4 md:bottom-8 md:left-8 z-[90] bg-white p-4 rounded-xl shadow-2xl border border-slate-200 transition-all duration-500 flex items-center gap-4 ${show ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
      <div className="w-10 h-10 bg-blood-red/10 rounded-full flex items-center justify-center text-blood-red">
        <Users size={20} />
      </div>
      <div>
        <p className="text-xs font-bold text-deep-black">{notif.name} garantiu vaga</p>
        <p className="text-[10px] text-slate-medium uppercase font-bold tracking-widest">{notif.time}</p>
      </div>
    </div>
  );
};

const VisitorCounter = () => {
  const [count, setCount] = useState(41);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const newCount = prev + delta;
        return newCount < 35 ? 35 : newCount > 55 ? 55 : newCount;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-8 right-4 z-[90] bg-deep-black/80 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest shadow-xl flex items-center gap-2">
      <span className="w-2 h-2 bg-success-green rounded-full animate-pulse"></span>
      {count} MÉDICOS ONLINE AGORA
    </div>
  );
};

const ExitModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !localStorage.getItem('exitShown')) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem('exitShown', 'true');
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-deep-black/95 backdrop-blur-md" onClick={() => setIsOpen(false)} />
      <div className="relative max-w-lg w-full bg-gradient-to-br from-red-dark to-deep-black border-4 border-blood-red rounded-2xl p-8 shadow-[0_0_100px_rgba(185,28,28,0.5)] modal-active text-center">
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
          <X size={32} />
        </button>
        <h2 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter mb-6 uppercase">ESPERA.</h2>
        <p className="text-slate-200 text-lg leading-relaxed mb-8">
          Você vai fechar esta página e continuar na MESMA situação.<br/><br/>
          Refém do WhatsApp. Invisível para as coordenações. Sem plantão fixo.<br/><br/>
          Por R$ 27,00 você tem acesso ao código que muda o jogo.<br/>
          <strong>O Lote 01 está expirando agora.</strong>
        </p>
        <div className="bg-red-dark/50 p-4 rounded-xl mb-8 flex items-center justify-center gap-3 text-white font-bold animate-pulse">
          <Flame className="text-warning-orange" />
          <span>12 médicos garantiram vaga enquanto você lia</span>
        </div>
        <button 
          onClick={safeOpen}
          className="w-full py-6 bg-warning-orange hover:bg-gold-accent text-deep-black font-black text-xl uppercase tracking-tighter rounded-xl shadow-2xl transition-all animate-heartbeat"
        >
          SIM, QUERO APRENDER O JOGO
        </button>
        <button onClick={() => setIsOpen(false)} className="mt-6 text-slate-400 text-sm hover:text-blood-red transition-colors underline decoration-dotted">
          Prefiro continuar disputando o que sobra
        </button>
      </div>
    </div>
  );
};

// --- APP PRINCIPAL ---

const App: React.FC = () => {
  /* Lógica de progressão preservada */
  const [salesProgress, setSalesProgress] = useState(67);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progress = document.getElementById("scroll-progress");
      if (progress) progress.style.width = scrolled + "%";
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSalesProgress(prev => {
        if (prev >= 79) {
          clearInterval(timer);
          return 79;
        }
        const increment = 0.4 + Math.random() * 0.6;
        const nextValue = prev + increment;
        return nextValue > 79 ? 79 : nextValue;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!document.querySelector('script[src="https://player.pandavideo.com.br/api.v2.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://player.pandavideo.com.br/api.v2.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="relative">
      <StickyCTA />
      <VisitorCounter />
      <ConversionToast />
      <ExitModal />

      {/* 1. HERO (DARK) */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center items-center bg-deep-black overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 opacity-40">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-dark/30 to-deep-black z-10" />
           <img src={IMAGES.mainAuthority} className="w-full h-full object-cover object-top md:object-right-top" alt="Dr. Thiago" />
        </div>
        <div className="relative z-40 max-w-6xl mx-auto px-6 text-center md:text-left grid md:grid-cols-2">
          <div className="flex flex-col items-center md:items-start">
            <span className="bg-blood-red text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] border border-gold-accent shadow-lg mb-8 animate-float">
              🔴 EXCLUSIVO PARA MÉDICOS
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-extrabold text-white leading-[0.9] tracking-tighter uppercase italic mb-6">
              PARE DE DISPUTAR PLANTÃO. <span className="text-blood-red underline decoration-gold-accent/50">OU CONTINUE ACEITANDO O QUE SOBRAR.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed max-w-xl mb-12">
              O método que faz médicos serem chamados, mantidos e priorizados — mesmo com o mercado saturado e mais de 38 mil novos médicos por ano.
            </p>
            <div className="w-full max-w-md">
              <div className="flex flex-col items-center md:items-start mb-6 text-white/90">
                <div className="flex items-center gap-4 text-base font-bold uppercase tracking-tight mb-2">
                  <div className="flex items-center gap-2">
                    <Calendar size={20} className="text-blood-red" />
                    <span>08 de Fevereiro</span>
                  </div>
                  <div className="flex items-center gap-2 border-l border-white/20 pl-4">
                    <Clock size={20} className="text-blood-red" />
                    <span>19:00h</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  <Video size={16} className="text-warning-orange" />
                  <span>Ao vivo & Online via ZOOM</span>
                </div>
              </div>
              <button 
                onClick={safeOpen}
                className="w-full py-7 bg-blood-red hover:bg-warning-orange text-white hover:text-deep-black font-black text-2xl uppercase italic rounded-2xl shadow-[0_0_30px_rgba(185,28,28,0.5)] transition-all animate-heartbeat"
              >
                GARANTIR MEU INGRESSO
              </button>

              <ProgressBar progress={salesProgress} variant="red" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-warning-orange py-4 overflow-hidden border-t-2 border-deep-black z-30">
          <div className="flex whitespace-nowrap animate-infinite-scroll">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="text-xs md:text-sm font-black text-deep-black uppercase tracking-[0.4em] mx-10 italic">
                LOTE 01 EXPIRA EM BREVE • VAGAS LIMITADAS • INSCRIÇÕES ABERTAS •
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. DIAGNÓSTICO (LIGHT) */}
      <section className="py-28 px-6 bg-clinical-white text-deep-black">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-blood-red font-black uppercase tracking-widest text-xs mb-4 block">DIAGNÓSTICO DO MERCADO</span>
              <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase italic">
                O CRM parou de ser garantia de renda. O sistema está quebrando.
              </h2>
              <div className="w-24 h-2 bg-blood-red mx-auto mt-8" />
              <p className="mt-8 text-xl text-slate-medium max-w-3xl mx-auto leading-relaxed">
                Hoje, 38 mil novos médicos entram no sistema anualmente. A maioria vai passar a carreira inteira brigando por migalhas em grupos de WhatsApp, sendo tratada como número descartável.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Smartphone />, title: "O ESCRAVO DO ALERTA", text: "Você vive em função de um celular. Se não responder em 30 segundos, perde a vaga. Isso não é carreira, é submissão." },
              { icon: <BadgeAlert />, title: "O MÉDICO INVISÍVEL", text: "Para o hospital, você é apenas um nome em uma planilha. Substituível a qualquer momento por alguém mais barato." },
              { icon: <TrendingUp />, title: "O CUSTO DA INCERTEZA", text: "Sem plantão fixo, não há futuro. Apenas uma sequência de 'tapa-buracos' que drena sua energia e liquida sua autoridade." }
            ].map((item, i) => (
              <Reveal key={i}>
                <div className="p-10 bg-gray-100 rounded-2xl border-l-8 border-blood-red h-full group hover:bg-white hover:shadow-2xl transition-all duration-500">
                  <div className="text-blood-red mb-6">{React.cloneElement(item.icon as React.ReactElement<any>, { size: 40 })}</div>
                  <h3 className="text-2xl font-heading font-black mb-4 uppercase italic">{item.title}</h3>
                  <p className="text-slate-medium leading-relaxed font-medium">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CÓDIGO INVISÍVEL (DARK) */}
      <section className="py-28 px-6 bg-slate-dark text-white relative">
        <div className="max-w-6xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase italic mb-8">
              POR QUE ALGUNS ESTÃO NO <span className="text-gold-accent">TOPO DA LISTA DA COORDENAÇÃO?</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium mb-16">
              Não é sorte. Não é currículo. É o <span className="text-blood-red font-bold">CÓDIGO INVISÍVEL</span>. Um conjunto de sinais que a faculdade ignorou, mas que define quem fica com os melhores plantões fixos.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Reveal>
              <div className="bg-deep-black/60 p-12 rounded-3xl border border-blood-red flex flex-col items-center group hover:bg-red-dark transition-all duration-500">
                <div className="text-blood-red group-hover:text-white transition-colors mb-8"><Eye size={64} strokeWidth={1.5} /></div>
                <h4 className="text-2xl font-heading font-bold mb-4 uppercase italic">Radar Real da Coordenação</h4>
                <p className="text-slate-400 group-hover:text-white/80 transition-colors">Aprenda o que os decisores observam em silêncio antes de te dar a chave de um plantão fixo de elite.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-deep-black/60 p-12 rounded-3xl border border-blood-red flex flex-col items-center group hover:bg-red-dark transition-all duration-500">
                <div className="text-blood-red group-hover:text-white transition-colors mb-8"><Scale size={64} strokeWidth={1.5} /></div>
                <h4 className="text-2xl font-heading font-bold mb-4 uppercase italic">Filtro de Confiabilidade</h4>
                <p className="text-slate-400 group-hover:text-white/80 transition-colors">O critério brutal que separa os médicos 'substituíveis' dos 'indispensáveis' no sistema hospitalar.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. BIO (LIGHT) */}
      <section className="py-28 px-6 bg-clinical-white text-deep-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-blood-red/10 blur-3xl rounded-full" />
              <img src={IMAGES.bioPhoto} className="relative z-10 w-full h-auto rounded-3xl border-4 border-slate-100 shadow-2xl" alt="Dr. Thiago" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="bg-blood-red text-white px-4 py-1 rounded text-xs font-black uppercase tracking-widest mb-6 inline-block">MÉDICO DE TRINCHEIRA</span>
              <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase italic mb-8">DR. THIAGO COSTA</h2>
              <div className="space-y-6 text-gray-800 text-lg leading-[1.8] font-medium">
                <p>O Dr. Thiago Costa atua onde o sistema não pode falhar. Ele opera nos bastidores da medicina real.</p>
                <p>Ele aprendeu o que os livros ocultam: no hospital, quem cresce não é o detentor de títulos — é o detentor de confiança operacional.</p>
                <p>A faculdade ensina a tratar doenças. O mercado exige que você saiba tratar o sistema para garantir sua liberdade e seu respeito.</p>
                <p>Hoje, ele ensina médicos a saírem da lógica do esforço braçal infinito para entrarem no jogo da previsibilidade estratégica.</p>
              </div>
              <div className="mt-12 p-8 bg-gray-100 border-l-8 border-blood-red italic text-xl font-bold leading-relaxed">
                "Na medicina moderna, quem cresce não é o mais técnico. É o mais confiável."
                <footer className="mt-4 text-blood-red not-italic font-black uppercase text-sm">— Dr. Thiago Costa</footer>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. PLANO DE AÇÃO (GRAY) */}
      <section className="py-28 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase italic mb-6">PLANO DE AÇÃO AO VIVO</h2>
              <p className="text-xl text-blood-red font-black uppercase tracking-widest">Domine as regras que o sistema não te contou</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { id: "01", title: "Clareza Operacional", desc: "Aprenda a ler o ambiente e ser visto como autoridade nos primeiros minutos." },
              { id: "02", title: "Controle de Escala", desc: "A lógica para garantir sua vaga nos plantões fixos que ninguém quer largar." },
              { id: "03", title: "Diferenciação Real", desc: "Construa uma presença que faz a coordenação ter medo de te perder." },
              { id: "04", title: "Networking Prático", desc: "Como operar nos bastidores para que os melhores plantões cheguem até você." },
              { id: "05", title: "Blindagem de Carreira", desc: "Torne-se o médico que o sistema prioriza, independente da saturação do mercado." }
            ].map((mod, i) => (
              <Reveal key={i}>
                <div className="bg-white p-10 rounded-3xl border border-slate-200 h-full group hover:border-blood-red hover:shadow-2xl transition-all duration-300">
                  <span className="text-6xl font-black text-blood-red opacity-10 group-hover:opacity-100 transition-opacity mb-6 block">{mod.id}</span>
                  <h4 className="text-xl font-heading font-black mb-4 uppercase italic leading-tight">{mod.title}</h4>
                  <p className="text-slate-medium text-sm font-medium">{mod.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RECONHECIMENTO E AUTORIDADE PROFISSIONAL (GALERIA) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-black text-deep-black uppercase tracking-tight mb-3">AUTORIDADE E RECONHECIMENTO</h2>
              <p className="text-lg text-blood-red font-semibold">Validação Real dentro do Sistema de Saúde</p>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { src: IMAGES.auth1, label: "Liderança e Gestão Operacional" },
              { src: IMAGES.auth2, label: "Network Estratégico no Setor" },
              { src: IMAGES.auth3, label: "Reconhecimento de Resultados" }
            ].map((item, idx) => (
              <Reveal key={idx}>
                <div className="group cursor-pointer">
                  <div className="border-2 border-blood-red rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:translate-y-[-8px] group-hover:border-gold-accent group-hover:shadow-[0_8px_24px_rgba(185,28,28,0.3)] aspect-[4/3]">
                    <img 
                      src={item.src} 
                      alt={item.label} 
                      className="w-full h-full object-cover object-[center_top] transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-4 text-center text-sm font-semibold text-slate-medium uppercase tracking-wider">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VÍDEOS DE VALIDAÇÃO */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-black text-deep-black uppercase tracking-tight mb-3">CONFIANÇA E RESULTADO</h2>
              <p className="text-lg text-blood-red font-semibold">O que o sistema diz sobre o trabalho do Dr. Thiago</p>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <Reveal>
              <div className="bg-white border-2 border-blood-red rounded-xl p-6 shadow-lg transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_24px_rgba(185,28,28,0.2)] hover:border-gold-accent">
                <div className="text-center mb-5">
                  <h3 className="text-xl font-bold text-deep-black mb-1">Eficiência Comprovada</h3>
                  <p className="text-sm font-semibold text-blood-red uppercase tracking-wider">Autoridade Institucional</p>
                </div>
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg bg-black">
                  <iframe 
                    id="panda-af65c3c8-f3bc-4b0d-8266-9e4f675eec9b" 
                    src={`https://player-vz-e907bd19-b8d.tv.pandavideo.com.br/embed/?v=af65c3c8-f3bc-4b0d-8266-9e4f675eec9b&iosFakeFullscreen=true&poster=${encodeURIComponent(IMAGES.thumb1)}`} 
                    style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
                    allowFullScreen={true}
                  ></iframe>
                </div>
                <div className="mt-5 pt-5 border-t border-slate-200">
                  <p className="text-base italic text-slate-800 text-center leading-relaxed">
                    <span className="text-blood-red font-bold text-2xl mr-1">"</span>
                    Ele opera em um nível de confiança que o mercado não está acostumado.
                    <span className="text-blood-red font-bold text-2xl ml-1">"</span>
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-white border-2 border-blood-red rounded-xl p-6 shadow-lg transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_24px_rgba(185,28,28,0.2)] hover:border-gold-accent">
                <div className="text-center mb-5">
                  <h3 className="text-xl font-bold text-deep-black mb-1">Respeito e Diferenciação</h3>
                  <p className="text-sm font-semibold text-blood-red uppercase tracking-wider">Profissional de Trincheira</p>
                </div>
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg bg-black">
                  <iframe 
                    id="panda-75e01b46-0d3d-409f-bb7f-2f8b12990d66" 
                    src={`https://player-vz-e907bd19-b8d.tv.pandavideo.com.br/embed/?v=75e01b46-0d3d-409f-bb7f-2f8b12990d66&iosFakeFullscreen=true&poster=${encodeURIComponent(IMAGES.thumb2)}`} 
                    style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
                    allowFullScreen={true}
                  ></iframe>
                </div>
                <div className="mt-5 pt-5 border-t border-slate-200">
                  <p className="text-base italic text-slate-800 text-center leading-relaxed">
                    <span className="text-blood-red font-bold text-2xl mr-1">"</span>
                    Saber o que ele ensina é a diferença entre ser chamado ou ser ignorado.
                    <span className="text-blood-red font-bold text-2xl ml-1">"</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          
          <Reveal>
            <div className="max-w-3xl mx-auto text-center p-10 bg-white border-l-4 border-blood-red rounded-lg shadow-sm">
              <p className="text-lg text-slate-800 leading-relaxed italic">
                "Confiança operacional é o único ativo que o excesso de médicos não consegue desvalorizar. <br/><br/>
                O Dr. Thiago construiu sua reputação onde não existe margem de erro: plantões críticos e decisões de alta pressão.<br/><br/>
                <strong className="text-blood-red">É essa segurança que ele vai te ensinar a projetar no mercado.</strong>"
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. PARA QUEM É / NÃO É (ALTERNATING) */}
      <section className="grid md:grid-cols-2">
        <div className="bg-[#ECFDF5] p-20 border-2 border-success-green flex flex-col items-center text-center">
          <Reveal>
            <CheckCircle2 size={64} className="text-success-green mb-8" />
            <h3 className="text-3xl font-heading font-black uppercase italic mb-8">ESTE WORKSHOP É PARA VOCÊ:</h3>
            <ul className="space-y-4 text-lg font-bold uppercase tracking-tight text-deep-black">
              <li>✅ Médico que busca previsibilidade financeira real</li>
              <li>✅ Cansou da humilhação de grupos de WhatsApp</li>
              <li>✅ Quer ser o primeiro nome na lista da coordenação</li>
            </ul>
          </Reveal>
        </div>
        <div className="bg-[#FEE2E2] p-20 border-2 border-blood-red flex flex-col items-center text-center">
          <Reveal>
            <XCircle size={64} className="text-blood-red mb-8" />
            <h3 className="text-3xl font-heading font-black uppercase italic mb-8">NÃO PERCA SEU TEMPO SE VOCÊ:</h3>
            <ul className="space-y-4 text-lg font-bold uppercase tracking-tight text-deep-black">
              <li>❌ Acredita que o CRM sozinho te deve algo</li>
              <li>❌ Aceita ser tratado como número descartável</li>
              <li>❌ Não está disposto a mudar seu posicionamento</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 9. FAQ (WHITE) */}
      <section className="py-28 px-6 bg-clinical-white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase italic mb-16 text-center">PERGUNTAS FREQUENTES</h2>
          </Reveal>
          <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-2xl">
            <FAQItem question="Por que custa apenas R$ 27,00?" answer="R$ 27,00 não é o preço do conteúdo. É o preço do filtro. Se você não está disposto a investir o valor de um lanche para garantir sua previsibilidade, você já aceitou o seu destino na base da pirâmide." />
            <FAQItem question="O workshop ficará gravado?" answer="Sim, mas a transformação real acontece no ao vivo. Você terá acesso à gravação por tempo limitado para revisão." />
            <FAQItem question="Eu sou recém-formado, serve para mim?" answer="Especialmente para você. É agora que você define se será um médico de elite ou um tapa-buraco do sistema." />
          </div>
        </div>
      </section>

      {/* 10. OFERTA FINAL (URGENCY) */}
      <section className="py-32 px-6 bg-gradient-to-br from-red-dark to-deep-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal>
            <h2 className="text-5xl md:text-8xl font-heading font-black tracking-tighter uppercase italic leading-[0.8] mb-12 text-gold-accent">
              OU APRENDE O JOGO,<br/> <span className="text-white">OU CONTINUA DISPUTANDO O QUE SOBRA.</span>
            </h2>
            <div className="mb-12">
              <span className="text-white/40 line-through text-2xl font-bold">De R$ 997,00</span>
              <div className="text-8xl md:text-9xl font-black italic tracking-tighter leading-none mt-2 text-gold-accent">R$ 27,00</div>
              <p className="text-base md:text-xl font-black uppercase tracking-widest mt-6">Ingresso Workshop Maestria de Escala</p>
            </div>
            <div className="w-full max-w-2xl mx-auto mb-16">
              <button 
                onClick={safeOpen}
                className="w-full py-8 bg-warning-orange hover:bg-gold-accent text-deep-black font-black text-2xl md:text-3xl uppercase italic rounded-2xl shadow-[0_0_50px_rgba(245,158,11,0.5)] transition-all animate-heartbeat"
              >
                SIM, QUERO MEU PLANTÃO GARANTIDO
              </button>
              
              <ProgressBar progress={salesProgress} variant="red" />
            </div>
            <div className="bg-deep-black/60 p-12 rounded-3xl border-2 border-gold-accent max-w-xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheck className="text-gold-accent" size={48} />
                <h4 className="text-2xl font-black uppercase italic text-left">FILTRO DE COMPROMETIMENTO</h4>
              </div>
              <p className="text-slate-300 text-left leading-relaxed">
                Quem não investe R$ 27,00 para aprender a dominar o sistema paga com anos de plantões ruins e instabilidade. A escolha é sua.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11. FOOTER (BLACK) */}
      <footer className="py-24 px-6 bg-deep-black text-slate-dark text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-white font-black text-lg italic tracking-tighter uppercase mb-2">Workshop Maestria de Escala</p>
          <p className="text-slate-medium text-xs font-bold uppercase tracking-[0.4em] mb-12">Sua estratégia garante sua liberdade.</p>
          <div className="w-full h-px bg-white/5 mb-12" />
          <p className="text-[10px] text-slate-medium font-bold uppercase tracking-widest leading-relaxed">
            workshop.medicothiagocosta.com.br <br/>
            © 2026 - Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
