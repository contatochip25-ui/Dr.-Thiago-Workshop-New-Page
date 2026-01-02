
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
  Video
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
  <div className="w-full mt-2 px-2">
    <div className="flex justify-between items-end mb-1">
      <span className="text-[8px] font-black text-white/30 uppercase tracking-widest">LOTE 01: 92% PREENCHIDO</span>
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
      className={`group relative w-full py-4 bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-tighter rounded-xl transform transition-all active:scale-95 border-b-[4px] border-red-900 overflow-hidden antialiased text-[1rem] ${
        hasLed 
        ? 'led-active shadow-[0_0_20px_rgba(220,38,38,0.2)]' 
        : 'shadow-xl'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      <span className="relative z-10 flex items-center justify-center gap-2 italic">
        GARANTIR MINHA VAGA
        <ArrowRight size={18} />
      </span>
    </button>
    <ProgressBar />
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
      
      {/* --- HERO CINEMATOGRÁFICO (REOTIMIZADO PARA PRIMEIRA DOBRA) --- */}
      <section className="relative h-[100dvh] flex flex-col justify-end overflow-hidden">
        
        {/* Badge Flutuante Superior (Mais discreto) */}
        <div className="absolute top-0 left-0 right-0 z-30 pt-4 px-6 text-center pointer-events-none">
           <span className="inline-flex items-center gap-2 bg-red-600/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-xl border border-white/10">
             🔴 EXCLUSIVO PARA MÉDICOS
           </span>
        </div>

        {/* Imagem de Autoridade - Primeira Impressão Garantida */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.mainAuthority} 
            alt="Dr. Thiago Costa" 
            className="w-full h-full object-cover object-top filter brightness-[0.85]"
          />
          {/* Gradiente otimizado para não esconder o rosto mas dar leitura à base */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        </div>

        {/* Conteúdo Textual - Inicia Compacto para caber tudo na tela */}
        <div className="relative z-10 px-6 pb-6 w-full max-w-md mx-auto">
          
          <h1 className="text-[1.75rem] sm:text-5xl font-black text-white leading-[0.9] tracking-tighter uppercase italic mb-3 drop-shadow-2xl">
            ATÉ QUANDO O SEU CRM SERÁ <span className="text-red-600">REFÉM</span> DE UMA ESCALA?
          </h1>

          <div className="space-y-2 mb-4">
            <p className="text-[0.9rem] text-gray-200 font-bold leading-tight drop-shadow-lg">
              A faculdade te ensinou medicina, mas te deixou refém de plantões avulsos e grupos de WhatsApp.
            </p>
            <div className="w-6 h-0.5 bg-red-600 rounded-full" />
          </div>

          {/* Info Bar Compacta (Estilo Referência 2) */}
          <div className="flex flex-col items-center gap-1.5 mb-5 w-full bg-black/40 backdrop-blur-md rounded-xl py-3 border border-white/5">
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-1.5">
                <Calendar className="text-[#d4a373]" size={13} strokeWidth={2.5} />
                <span className="text-[12px] text-white font-black tracking-tight">01 de janeiro</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="text-[#d4a373]" size={13} strokeWidth={2.5} />
                <span className="text-[12px] text-white font-black tracking-tight">às 20:00h</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Video className="text-[#d4a373]" size={13} strokeWidth={2.5} />
              <span className="text-[11px] text-[#d4a373] font-bold tracking-tight uppercase">
                Ao vivo & Online via <span className="font-black">ZOOM</span>
              </span>
            </div>
          </div>

          <CTAButton hasLed={true} />
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

      {/* --- PRICING --- */}
      <section className="pt-20 pb-40 px-6 bg-black relative">
        <div className="max-w-md mx-auto text-center">
          <p className="text-red-500 font-black uppercase text-[9px] tracking-[0.5em] mb-3">Lote 01 Disponível</p>
          <h2 className="text-6xl font-black text-white tracking-tighter uppercase italic leading-[0.8] mb-10">
            APENAS <br/> <span className="text-white">R$ 27</span>
          </h2>
          <CTAButton hasLed={true} />
        </div>
      </section>

      {/* --- STICKY FOOTER --- */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/95 backdrop-blur-2xl border-t border-white/10 flex items-center justify-between shadow-2xl">
         <div className="flex flex-col">
            <span className="text-red-600 text-[8px] font-black uppercase tracking-tighter">DOMÍNIO MÉDICO</span>
            <span className="text-white text-xl font-black italic tracking-tighter">R$ 27</span>
         </div>
         <button 
           onClick={() => safeOpen('https://checkout.exemplo.com')}
           className="px-6 py-3 bg-red-600 text-white font-black text-[10px] uppercase italic rounded-lg active:scale-95 transition-all shadow-lg"
         >
           GARANTIR AGORA
         </button>
      </div>

      <footer className="py-12 px-6 text-center bg-black opacity-30">
        <p className="text-[8px] text-gray-500 font-bold uppercase tracking-[0.2em]">
          © 2024 Dr. Thiago Costa | Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default App;