
import React from 'react';
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
  CheckCircle2
} from 'lucide-react';

const IMAGES = {
  mainAuthority: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiagobra%C3%A7ocruzado.png",
  leadership: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago3.jpg",
  professional: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiagofoto.jpg",
  trust: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago2.jpg"
};

const safeOpen = (url: string): void => {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

const ProgressBar: React.FC = () => (
  <div className="w-full mt-3 px-2">
    <div className="flex justify-between items-end mb-1">
      <span className="text-[8px] font-black text-white/30 uppercase tracking-widest italic">VAGAS LOTE 01: 92% PREENCHIDAS</span>
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

interface CTAButtonProps {
  className?: string;
  hasLed?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ className = '', hasLed = false }) => (
  <div className={`flex flex-col items-center w-full ${className}`}>
    <button 
      onClick={() => safeOpen('https://checkout.exemplo.com')}
      className={`group relative w-full py-4 bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-tighter rounded-xl transform transition-all active:scale-95 border-b-[4px] border-red-900 overflow-hidden antialiased text-[0.95rem] ${
        hasLed 
        ? 'led-active shadow-[0_0_20px_rgba(220,38,38,0.2)]' 
        : 'shadow-xl'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      <span className="relative z-10 flex items-center justify-center gap-2 italic">
        GARANTIR MINHA VAGA AGORA
        <ArrowRight size={18} />
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
        alt="Preview Profissional" 
        className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"
        loading="lazy"
      />
      <div className="z-10 bg-red-600 p-5 rounded-full shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
        <Play className="fill-current text-white ml-1" size={28} />
      </div>
      <div className="absolute bottom-4 left-4 right-4 z-20 text-center">
        <h3 className="text-white font-black text-[10px] leading-tight uppercase tracking-tight drop-shadow-lg">
          {title}
        </h3>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
    </div>
  </div>
);

const SectionTitle: React.FC<{ children: React.ReactNode; red?: string }> = ({ children, red }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-black text-white leading-[0.85] tracking-tighter uppercase italic">
      {children} <span className="text-red-600 block mt-1">{red}</span>
    </h2>
    <div className="w-12 h-1 bg-red-600 mt-4" />
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-red-600 selection:text-white pb-20">
      
      {/* --- HERO: PRIMEIRA DOBRA COMPLETA --- */}
      <section className="relative h-[100dvh] flex flex-col overflow-hidden">
        
        {/* TOP STATUS */}
        <div className="absolute top-0 left-0 right-0 z-30 pt-4 px-6 flex justify-center pointer-events-none">
           <span className="bg-red-600/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-[0.2em] border border-white/10">
             🔴 EXCLUSIVO PARA MÉDICOS
           </span>
        </div>

        {/* 1. IMAGEM DO DR (TOP) */}
        <div className="relative w-full h-[42vh] shrink-0 overflow-hidden">
          <img 
            src={IMAGES.mainAuthority} 
            alt="Dr. Thiago Costa" 
            className="w-full h-full object-cover object-top filter brightness-[0.85] contrast-[1.05]"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>

        {/* 2. BARRA DE INFO (CENTER - ESTILO REFERÊNCIA 2) */}
        <div className="relative z-10 w-full px-6 flex flex-col items-center gap-1.5 mb-2 shrink-0">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-1.5">
              <Calendar className="text-[#d4a373]" size={14} strokeWidth={2.5} />
              <span className="text-[13px] text-white font-black tracking-tight">01 de janeiro</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="text-[#d4a373]" size={14} strokeWidth={2.5} />
              <span className="text-[13px] text-white font-black tracking-tight text-nowrap">às 20:00h</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Video className="text-[#d4a373]" size={14} strokeWidth={2.5} />
            <span className="text-[12px] text-[#d4a373] font-bold tracking-tight uppercase">
              Ao vivo & Online via <span className="font-black">ZOOM</span>
            </span>
          </div>
        </div>

        {/* 3. CONTEÚDO (BOTTOM) - TUDO VISÍVEL SEM SCROLL */}
        <div className="relative z-10 px-6 flex flex-col flex-grow justify-between pb-8 max-w-md mx-auto w-full">
          
          <div className="text-center">
            <div className="w-10 h-0.5 bg-red-600 mx-auto mb-3 opacity-50" />
            <h1 className="text-[1.65rem] font-black text-white leading-[0.95] tracking-tighter uppercase italic mb-3">
              ATÉ QUANDO O SEU CRM SERÁ <span className="text-red-600">REFÉM</span> DE UMA ESCALA?
            </h1>
            <p className="text-[0.85rem] text-gray-300 font-bold leading-tight px-2">
              A faculdade te ensinou medicina, mas te deixou refém de plantões avulsos e grupos de WhatsApp.
            </p>
          </div>

          <div className="mt-auto">
            <CTAButton hasLed={true} />
            
            {/* Trust Signals minimalistas abaixo do botão */}
            <div className="flex justify-center gap-4 mt-5 opacity-30 grayscale scale-90">
               <div className="flex items-center gap-1">
                  <ShieldCheck size={12} className="text-white" />
                  <span className="text-[7px] font-black uppercase tracking-tighter">Compra Segura</span>
               </div>
               <div className="flex items-center gap-1">
                  <CheckCircle2 size={12} className="text-white" />
                  <span className="text-[7px] font-black uppercase tracking-tighter">Garantia</span>
               </div>
               <div className="flex items-center gap-1">
                  <Lock size={12} className="text-white" />
                  <span className="text-[7px] font-black uppercase tracking-tighter">Privacidade</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO DE DORES --- */}
      <section className="py-20 px-6 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-md mx-auto">
          <SectionTitle red="A ARMADILHA DOS PLANTÕES">ESTE É O SEU DIA A DIA:</SectionTitle>
          <div className="space-y-4">
            {[
              { icon: <Clock />, title: "Dependência humilhante de grupos de escala" },
              { icon: <XCircle />, title: "Incerteza de rendimento no dia 30" },
              { icon: <AlertCircle />, title: "Noites e feriados rifados pelo lucro alheio" },
              { icon: <TrendingUp />, title: "Esgotamento físico que drena sua autoridade" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border-l-4 border-red-600 rounded-r-lg">
                <div className="text-red-600">{item.icon}</div>
                <h4 className="text-white font-black uppercase text-[10px] tracking-tight italic">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROVAS --- */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-md mx-auto">
          <SectionTitle red="PROVA DE REPUTAÇÃO">AUTORIDADE NO MUNDO REAL</SectionTitle>
          <VideoCard 
            title="RECONHECIMENTO INSTITUCIONAL: A autoridade do método reconhecida publicamente."
            thumbnail={IMAGES.leadership}
          />
          <VideoCard 
            title="LIDERANÇA OPERACIONAL: A transformação da rotina médica no ambiente hospitalar."
            thumbnail={IMAGES.professional}
          />
        </div>
      </section>

      {/* --- PRICING --- */}
      <section className="pt-20 pb-44 px-6 bg-black relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-red-600/5 blur-[80px] -z-10 rounded-full" />
        <div className="max-w-md mx-auto text-center">
          <p className="text-red-500 font-black uppercase text-[9px] tracking-[0.5em] mb-3 italic">Acesso Exclusivo</p>
          <h2 className="text-6xl font-black text-white tracking-tighter uppercase italic leading-[0.8] mb-10">
            APENAS <br/> <span className="text-white">R$ 27</span>
          </h2>
          <CTAButton hasLed={true} />
        </div>
      </section>

      {/* --- STICKY FOOTER --- */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/95 backdrop-blur-2xl border-t border-white/10 flex items-center justify-between shadow-2xl">
         <div className="flex flex-col">
            <span className="text-red-600 text-[8px] font-black uppercase tracking-tighter">Workshop Domínio Médico</span>
            <span className="text-white text-xl font-black italic tracking-tighter">R$ 27</span>
         </div>
         <button 
           onClick={() => safeOpen('https://checkout.exemplo.com')}
           className="px-5 py-2.5 bg-red-600 text-white font-black text-[9px] uppercase italic rounded-lg active:scale-95 transition-all shadow-lg"
         >
           GARANTIR AGORA
         </button>
      </div>

      <footer className="py-12 px-6 text-center bg-black opacity-30">
        <p className="text-[8px] text-gray-500 font-bold uppercase tracking-[0.2em] leading-loose">
          © 2024 Dr. Thiago Costa | Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default App;
