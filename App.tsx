
import React from 'react';
import { 
  AlertCircle, 
  Calendar, 
  Clock, 
  MapPin, 
  Play, 
  ShieldCheck, 
  TrendingUp, 
  XCircle,
  CheckCircle2,
  Lock,
  ArrowRight,
  Zap,
  Users,
  Video
} from 'lucide-react';

/**
 * IMAGES PROVIDED BY USER
 */
const IMAGES = {
  mainAuthority: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiagobraçocruzado.png",
  leadership: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago3.jpg",
  professional: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiagofoto.jpg",
  trust: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago2.jpg"
};

// --- Components ---

const ProgressBar: React.FC = () => (
  <div className="w-full mt-4 px-2">
    <div className="flex justify-between items-end mb-1">
      <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">VAGAS DO 1º LOTE PREENCHIDAS</span>
      <span className="text-xs font-black text-red-500 animate-pulse">92%</span>
    </div>
    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
      <div 
        className="h-full bg-red-600 rounded-full transition-all duration-1000" 
        style={{ width: '92%' }}
      />
    </div>
  </div>
);

const CTAButton: React.FC<{ className?: string; hasLed?: boolean }> = ({ className, hasLed }) => (
  <div className={`flex flex-col items-center w-full px-4 ${className}`}>
    <button 
      onClick={() => window.open('https://checkout.exemplo.com', '_blank')}
      className={`group relative w-full py-5 bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-tighter rounded-xl transform transition-all active:scale-95 border-b-[6px] border-red-900 overflow-hidden antialiased ${
        hasLed 
        ? 'text-[1.05rem] led-active shadow-none ring-1 ring-red-500/40' 
        : 'text-[1.1rem] shadow-[0_0_20px_rgba(220,38,38,0.4)] ring-1 ring-red-500/20'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
      <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-none">
        GARANTIR MEU INGRESSO | LOTE 01
        <ArrowRight size={20} />
      </span>
    </button>
    <ProgressBar />
  </div>
);

const VideoCard: React.FC<{ title: string; thumbnail: string }> = ({ title, thumbnail }) => (
  <div className="w-full bg-[#111] rounded-2xl border border-white/10 overflow-hidden mb-8">
    <div className="relative aspect-video flex items-center justify-center bg-black group">
      <img 
        src={thumbnail} 
        alt="Thumbnail" 
        className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"
      />
      <div className="z-10 bg-red-600 p-5 rounded-full shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
        <Play className="fill-current text-white ml-1" size={28} />
      </div>
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <h3 className="text-white font-black text-sm leading-tight uppercase tracking-tight drop-shadow-lg">
          {title}
        </h3>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
    </div>
  </div>
);

const SectionTitle: React.FC<{ children: React.ReactNode; red?: string }> = ({ children, red }) => (
  <div className="mb-12">
    <h2 className="text-4xl font-black text-white leading-[0.85] tracking-tighter uppercase italic">
      {children} <span className="text-red-600 block mt-1">{red}</span>
    </h2>
    <div className="w-20 h-2 bg-red-600 mt-6" />
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-red-600 selection:text-white pb-20">
      
      {/* --- HERO / FIRST FOLD --- */}
      <section className="relative min-h-[98vh] flex flex-col justify-end overflow-hidden">
        {/* TOP BADGE */}
        <div className="absolute top-0 left-0 right-0 z-30 pt-6 px-6 text-center">
           <span className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-red-600/20">
             <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
             🔴 EXCLUSIVO PARA MÉDICOS
           </span>
        </div>

        {/* Dr. Thiago Photo */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.mainAuthority} 
            alt="Dr. Thiago Costa" 
            className="w-full h-full object-cover object-top filter brightness-[0.7] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 px-6 pb-12">
          {/* HEADLINE */}
          <h1 className="text-[2.6rem] sm:text-5xl font-black text-white leading-[0.85] tracking-tighter uppercase italic mb-6">
            ATÉ QUANDO O SEU CRM SERÁ <span className="text-red-600">REFÉM</span> DE UMA ESCALA QUE VOCÊ NÃO CONTROLA?
          </h1>

          {/* SUBHEADLINE */}
          <div className="space-y-4 mb-10 max-w-[320px]">
            <p className="text-lg text-gray-200 font-bold leading-tight">
              A faculdade te ensinou medicina, mas te deixou refém de plantões avulsos e grupos de WhatsApp para fechar o mês.
            </p>
            <p className="text-sm text-gray-400 font-medium italic border-l-2 border-red-600 pl-3">
              Enquanto você não dominar sua própria agenda, seu sucesso será apenas um intervalo entre um plantão e outro.
            </p>
          </div>

          {/* PREMIUM INFO BLOCK */}
          <div className="flex justify-between items-center mb-6 py-4 border-y border-white/10 bg-black/40 backdrop-blur-md rounded-lg px-2">
            <div className="flex flex-col items-center flex-1 border-r border-white/5">
              <Calendar className="text-red-600 mb-1" size={16} />
              <span className="text-[10px] text-white font-black uppercase tracking-tighter">01 Fev</span>
            </div>
            <div className="flex flex-col items-center flex-1 border-r border-white/5">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping" />
                <span className="text-[10px] text-white font-black uppercase tracking-tighter">Ao Vivo</span>
              </div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <Video className="text-red-600 mb-1" size={16} />
              <span className="text-[10px] text-white font-black uppercase tracking-tighter">Via Zoom</span>
            </div>
          </div>

          <CTAButton className="!px-0" hasLed={true} />
        </div>
      </section>

      {/* --- PAIN / IDENTIFICATION --- */}
      <section className="py-20 px-6 bg-[#0a0a0a] border-y border-white/5">
        <SectionTitle red="A ARMADILHA DOS PLANTÕES">ESTE É O SEU DIA A DIA:</SectionTitle>
        
        <div className="space-y-4 mt-8">
          {[
            { icon: <Clock />, title: "Dependência humilhante de grupos de escala" },
            { icon: <XCircle />, title: "Incerteza de quanto cairá na conta no dia 30" },
            { icon: <AlertCircle />, title: "Noites e feriados rifados pelo lucro alheio" },
            { icon: <TrendingUp />, title: "Esgotamento físico que drena sua autoridade" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-5 bg-gradient-to-r from-white/5 to-transparent border-l-4 border-red-600">
              <div className="text-red-600">{item.icon}</div>
              <h4 className="text-white font-black uppercase text-sm tracking-tight italic">{item.title}</h4>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-zinc-900/50 rounded-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[50px]" />
          <p className="text-gray-400 text-sm font-medium leading-relaxed italic">
            "O médico que vive de plantão avulso é um passageiro da própria história. Eu conheço a frustração de olhar para o saldo bancário e perceber que, apesar de trabalhar exaustivamente, você não é dono do seu próprio tempo."
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-red-600 overflow-hidden">
              <img src={IMAGES.trust} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-white font-black text-xs uppercase tracking-tighter">Dr. Thiago Costa</p>
              <p className="text-red-600 text-[9px] font-bold uppercase">Workshop Domínio Médico</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE EVENT --- */}
      <section className="py-20 px-6">
        <div className="bg-red-600 p-8 rounded-[2rem] text-center mb-16 shadow-2xl shadow-red-600/20 border-t border-white/20">
          <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4 leading-none">DO PLANTÃO AVULSO <br/> AO CONTROLE TOTAL</h2>
          <p className="text-white/80 text-sm font-bold uppercase tracking-tight">O mapa realista para a liberdade do médico moderno.</p>
        </div>

        <div className="space-y-8">
          {[
            "A transição estratégica: do plantão avulso ao fixo",
            "Blindagem financeira e previsibilidade real de caixa",
            "Posicionamento de autoridade para dominar sua região",
            "O fim da dependência de escalas controladas por terceiros"
          ].map((text, i) => (
            <div key={i} className="flex gap-4">
              <CheckCircle2 className="text-red-600 shrink-0" size={24} />
              <p className="text-white font-bold text-lg leading-tight tracking-tight uppercase italic">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- AUTHORITY VIDEOS --- */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <SectionTitle red="PROVA DE REPUTAÇÃO">AUTORIDADE NO MUNDO REAL</SectionTitle>
        
        <div className="mb-10">
          <p className="text-gray-400 text-sm font-bold leading-relaxed uppercase tracking-tight border-l-2 border-red-600 pl-4 italic">
            O Workshop Domínio Médico não nasce de teorias de marketing. Ele é a sistematização de um método validado no campo de batalha hospitalar, reconhecido por líderes públicos e colegas de profissão muito antes de se tornar este evento.
          </p>
        </div>

        <VideoCard 
          title="RECONHECIMENTO INSTITUCIONAL: A autoridade e o impacto do método reconhecidos publicamente pelo Prefeito da cidade."
          thumbnail={IMAGES.leadership}
        />

        <VideoCard 
          title="LIDERANÇA OPERACIONAL: O depoimento de quem vivencia a transformação da rotina médica diariamente no ambiente hospitalar."
          thumbnail={IMAGES.professional}
        />
      </section>

      {/* --- PRICING & CLOSING --- */}
      <section className="pt-20 pb-32 px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-red-600/10 blur-[120px] -z-10 rounded-full" />
        
        <div className="text-center mb-12">
          <p className="text-red-500 font-black uppercase text-xs tracking-[0.4em] mb-4">Acesso Exclusivo ao 1º Lote</p>
          <h2 className="text-6xl font-black text-white tracking-tighter uppercase italic leading-[0.8]">
            APENAS <br/> <span className="text-white">R$ 27</span>
          </h2>
          <div className="mt-4 inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-md">
            <span className="text-gray-500 line-through text-lg font-bold">DE R$ 197</span>
          </div>
        </div>

        <div className="mb-12 space-y-4 max-w-xs mx-auto">
          <p className="text-gray-400 text-sm font-bold text-center leading-tight">
            Por menos do que o valor de um lanche frio em um plantão noturno, você garante o conhecimento que vai te tirar da submissão às escalas alheias.
          </p>
          <p className="text-white font-black text-center uppercase italic text-lg leading-tight">
            Manter sua rotina como está <span className="text-red-600">custa muito mais caro</span> que seu ingresso.
          </p>
        </div>

        <CTAButton />

        <div className="mt-12 flex flex-col items-center gap-6 opacity-40">
          <div className="flex items-center gap-3">
            <ShieldCheck size={20} className="text-red-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Pagamento 100% Seguro</span>
          </div>
          <div className="flex items-center gap-8">
            <Lock size={20} />
            <Users size={20} />
            <TrendingUp size={20} />
          </div>
        </div>
      </section>

      {/* --- FINAL STICKY CTA --- */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/80 backdrop-blur-xl border-t border-white/10 flex items-center justify-between shadow-2xl">
         <div className="flex flex-col">
            <span className="text-red-500 text-[10px] font-black uppercase tracking-tighter">Workshop Domínio Médico</span>
            <span className="text-white text-xl font-black italic">R$ 27</span>
         </div>
         <button 
           onClick={() => window.open('https://checkout.exemplo.com', '_blank')}
           className="px-6 py-3 bg-red-600 text-white font-black text-[0.75rem] uppercase italic rounded-lg active:scale-95 transition-transform led-active ring-1 ring-red-500/50 antialiased"
         >
           GARANTIR MEU INGRESSO | LOTE 01
         </button>
      </div>

      <footer className="py-12 px-6 text-center bg-black border-t border-white/5">
        <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest leading-loose">
          © 2024 Dr. Thiago Costa <br/> Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default App;
