
import React, { useState } from 'react';
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
  trustPhoto: "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/fotosorrindo.jpg"
};

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
  <div className="flex flex-col items-center w-full">
    <button 
      onClick={() => safeOpen('https://checkout.exemplo.com')}
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

const VideoCard: React.FC<{ title: string; thumbnail: string }> = ({ title, thumbnail }) => (
  <div className="w-full bg-[#111] rounded-2xl border border-white/10 overflow-hidden mb-8">
    <div className="relative aspect-video flex items-center justify-center bg-black group">
      <img src={thumbnail} alt="Prova Social" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" />
      <div className="z-10 bg-red-600 p-5 rounded-full shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
        <Play className="fill-current text-white ml-1" size={28} />
      </div>
      <div className="absolute bottom-4 left-4 right-4 z-20 text-center">
        <h3 className="text-white font-black text-[10px] leading-tight uppercase tracking-tight drop-shadow-lg">{title}</h3>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
    </div>
  </div>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
        <span className="text-white font-bold text-xs uppercase tracking-tight pr-4">{question}</span>
        {isOpen ? <ChevronUp className="text-red-600 shrink-0" size={16} /> : <ChevronDown className="text-gray-600 shrink-0" size={16} />}
      </button>
      {isOpen && <p className="mt-3 text-[11px] text-gray-500 leading-relaxed font-medium">{answer}</p>}
    </div>
  );
};

const SectionTitle: React.FC<{ children: React.ReactNode; red?: string; center?: boolean }> = ({ children, red, center }) => (
  <div className={`mb-10 ${center ? 'text-center' : ''}`}>
    <h2 className="text-3xl font-black text-white leading-[0.85] tracking-tighter uppercase italic">
      {children} <span className="text-red-600 block mt-1">{red}</span>
    </h2>
    <div className={`w-12 h-1 bg-red-600 mt-4 ${center ? 'mx-auto' : ''}`} />
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-red-600 selection:text-white pb-20">
      
      {/* --- SEÇÃO 1: HERO - O DESPERTAR DA ESTRATÉGIA --- */}
      <section className="relative h-[100dvh] flex flex-col overflow-hidden">
        <div className="absolute top-0 left-0 right-0 z-30 pt-4 px-6 flex justify-center pointer-events-none">
           <span className="bg-red-600/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-[0.2em] border border-white/10 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
             🔴 SESSÃO ESTRATÉGICA AO VIVO
           </span>
        </div>

        {/* IMAGEM ESTRATÉGICA: DR THIAGO BRAÇO CRUZADO (AUTORIDADE) */}
        <div className="relative w-full h-[42vh] shrink-0 overflow-hidden">
          <img src={IMAGES.mainAuthority} alt="Dr. Thiago Costa - Maestria de Escala" className="w-full h-full object-cover object-top filter brightness-[0.85]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>

        <div className="relative z-10 w-full px-6 flex flex-col items-center gap-1.5 mb-2 shrink-0">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-1.5">
              <Calendar className="text-[#d4a373]" size={14} strokeWidth={2.5} />
              <span className="text-[13px] text-white font-black tracking-tight">08 de fevereiro</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="text-[#d4a373]" size={14} strokeWidth={2.5} />
              <span className="text-[13px] text-white font-black tracking-tight">20:00h - Ao Vivo</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Video className="text-[#d4a373]" size={14} strokeWidth={2.5} />
            <span className="text-[12px] text-[#d4a373] font-bold tracking-tight uppercase">Transmissão Exclusiva via <span className="font-black">ZOOM</span></span>
          </div>
        </div>

        <div className="relative z-10 px-6 flex flex-col flex-grow justify-between pb-8 max-w-md mx-auto w-full">
          <div className="text-center">
            <h1 className="text-[1.65rem] font-black text-white leading-[0.95] tracking-tighter uppercase italic mb-3">
              SUA TÉCNICA SALVA VIDAS. <span className="text-red-600">SUA ESTRATÉGIA</span> GARANTE SUA LIBERDADE.
            </h1>
            <p className="text-[0.85rem] text-gray-300 font-bold leading-tight px-2">
              O CRM parou de ser um diferencial competitivo. Aprenda a decifrar os bastidores hospitalares e assuma o controle das escalas fixas de elite.
            </p>
          </div>
          <div className="mt-auto">
            <CTAButton hasLed={true} />
            <div className="flex justify-center gap-4 mt-5 opacity-30 grayscale scale-90">
               <div className="flex items-center gap-1"><ShieldCheck size={12} className="text-white" /><span className="text-[7px] font-black uppercase italic">Vagas Limitadas Lote 01</span></div>
               <div className="flex items-center gap-1"><Lock size={12} className="text-white" /><span className="text-[7px] font-black uppercase italic">Acesso Imediato</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 2: DIAGNÓSTICO DO MERCADO MÉDICO --- */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-md mx-auto">
          <SectionTitle red="DIAGNÓSTICO DO MERCADO">A ERA DO CRM COMMODITY CHEGOU AO FIM</SectionTitle>
          <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
            <p>
              Enquanto você foca no estetoscópio, o mercado está de olho na sua <strong>postura estratégica</strong>. O cenário mudou: com 38 mil novos médicos entrando no mercado anualmente, o CRM deixou de ser um passaporte para se tornar apenas o requisito mínimo.
            </p>
            <div className="grid grid-cols-1 gap-4 mt-8">
              {[
                { icon: <BadgeAlert />, title: "O REFÉM DO WHATSAPP", desc: "Viver em alerta 24h para não perder a vaga em grupos caóticos de escala." },
                { icon: <XCircle />, title: "O MÉDICO 'TAPA-BURACO'", desc: "A sensação humilhante de ser tratado como descartável por coordenações amadoras." },
                { icon: <TrendingUp />, title: "INSEGURANÇA FINANCEIRA", desc: "A angústia de não ter uma escala fixa para planejar o futuro da sua carreira." },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white/5 border-l-2 border-red-600 rounded-r-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-red-600">{item.icon}</div>
                    <h4 className="text-white font-black uppercase text-[10px] italic">{item.title}</h4>
                  </div>
                  <p className="text-[11px] text-gray-500 font-medium leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 3: ANÁLISE DE CENÁRIO E FILTRO DE POSTURA --- */}
      <section className="py-24 px-6 bg-black relative">
        <div className="max-w-md mx-auto">
          <SectionTitle red="O CÓDIGO INVISÍVEL">POR QUE ALGUNS TÊM AS MELHORES ESCALAS?</SectionTitle>
          <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
            <p>
              As escalas fixas e seguras operam sob um critério de seleção invisível: a <strong>Confiança Operacional</strong>. Quem não domina a engenharia de carreira está condenado a viver das sobras de quem já entendeu o novo jogo.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                <Target className="mx-auto text-red-600 mb-2" size={24} />
                <h5 className="text-white font-black text-[9px] uppercase italic">Radar da Coordenação</h5>
                <p className="text-[8px] text-gray-500 mt-1 uppercase">O que os tomadores de decisão realmente observam.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                <Scale className="mx-auto text-red-600 mb-2" size={24} />
                <h5 className="text-white font-black text-[9px] uppercase italic">Filtro de Postura</h5>
                <p className="text-[8px] text-gray-500 mt-1 uppercase">Critérios silenciosos que nenhum livro ensina.</p>
              </div>
            </div>
            <div className="bg-red-600/10 p-6 rounded-2xl border border-red-600/30 text-center italic font-bold text-white shadow-xl">
              "Esforço sem estratégia na medicina moderna é o caminho mais rápido para a invisibilidade profissional e o burnout financeiro."
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 4: O TREINAMENTO INTENSIVO (ROADMAP) --- */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-md mx-auto">
          <SectionTitle red="PLANO DE AÇÃO">O QUE VOCÊ VAI DOMINAR NO WORKSHOP</SectionTitle>
          <div className="space-y-4 mt-8">
            {[
              { icon: <Briefcase size={18} />, title: "Engenharia de Posicionamento", desc: "Como ser visto como autoridade desde os primeiros minutos na unidade." },
              { icon: <Lock size={18} />, title: "Códigos de Confiança", desc: "A linguagem não-verbal que garante sua vaga na escala fixa de elite." },
              { icon: <HeartPulse size={18} />, title: "Postura de Trincheira", desc: "Liderança de alto impacto com a equipe multidisciplinar." },
              { icon: <Users size={18} />, title: "Networking Institucional", desc: "O jogo de bastidor que as UPAs e grandes centros escondem de você." },
              { icon: <FileText size={18} />, title: "Blindagem de Escala", desc: "Como se tornar tecnicamente insubstituível para a coordenação médica." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl bg-black border border-white/5 group hover:border-red-600/50 transition-all">
                <div className="shrink-0 w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-black uppercase text-[11px] tracking-tight mb-1 italic">{item.title}</h4>
                  <p className="text-[10px] text-gray-500 leading-tight uppercase font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 5: APRESENTAÇÃO / BIO - DR. THIAGO COSTA --- */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-md mx-auto">
          {/* IMAGEM ESTRATÉGICA: FOTO DE PERFIL (IDENTIDADE) */}
          <div className="w-full mb-8 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img src={IMAGES.bioPhoto} alt="Dr. Thiago Costa - Perfil" className="w-full h-auto grayscale-[30%] contrast-[1.1]" />
          </div>
          <SectionTitle red="MÉDICO DE TRINCHEIRA">QUEM É O DR. THIAGO COSTA</SectionTitle>
          <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
            <p>
              O Dr. Thiago Costa não é um influenciador. Ele é um médico que construiu sua carreira no caos das trincheiras, passando por UPAs, grandes centros e a gestão hospitalar real.
            </p>
            <p>
              Respeitado por equipes de enfermagem e coordenações técnicas, ele decodificou os padrões que fazem um médico ser visto como uma autoridade imediata ou como apenas mais um nome em uma lista. Sua abordagem é pragmática: transformar a insegurança do recém-formado na clareza do médico estratégico que comanda sua própria agenda.
            </p>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 6: VALIDAÇÃO / PROVA SOCIAL --- */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-md mx-auto text-center">
          <SectionTitle center red="VALIDAÇÃO REAL">RECONHECIMENTO DE QUEM CONVIVE COM O PADRÃO</SectionTitle>
          {/* IMAGEM ESTRATÉGICA: FOTO SORRINDO (CONFIANÇA E PROXIMIDADE) */}
          <div className="flex justify-center mb-12">
            <div className="relative p-1 bg-gradient-to-br from-red-600 to-transparent rounded-full shadow-[0_0_30px_rgba(220,38,38,0.3)]">
              <img src={IMAGES.trustPhoto} alt="Confiança e Sucesso" className="w-32 h-32 object-cover rounded-full border-2 border-black" />
              <div className="absolute -bottom-2 -right-2 bg-red-600 p-2 rounded-full text-white shadow-lg">
                <CheckCircle2 size={18} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
             <VideoCard title="RECOMENDAÇÃO INSTITUCIONAL: O impacto profissional nas trincheiras." thumbnail={IMAGES.bioPhoto} />
             <VideoCard title="TESTEMUNHO DE POSTURA: O respeito conquistado nos bastidores hospitalares." thumbnail={IMAGES.mainAuthority} />
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 7: PARA QUEM É / PARA QUEM NÃO É --- */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-1 gap-12">
            <div>
              <h3 className="text-green-500 font-black text-xl uppercase italic mb-6 flex items-center gap-2">
                <CheckCircle2 /> O WORKSHOP É PARA VOCÊ:
              </h3>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-tight text-white/80">
                <li className="flex gap-2"><span>✅</span> Médicos recém-formados em busca de escalas fixas</li>
                <li className="flex gap-2"><span>✅</span> Quem cansou da humilhação dos grupos de WhatsApp</li>
                <li className="flex gap-2"><span>✅</span> Médicos que precisam de previsibilidade financeira</li>
                <li className="flex gap-2"><span>✅</span> Quem deseja ser a primeira opção das coordenações</li>
              </ul>
            </div>
            <div>
              <h3 className="text-red-500 font-black text-xl uppercase italic mb-6 flex items-center gap-2">
                <XCircle /> NÃO É PARA VOCÊ:
              </h3>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-tight text-white/50">
                <li className="flex gap-2"><span>❌</span> Quem acredita que CRM sozinho garante futuro</li>
                <li className="flex gap-2"><span>❌</span> Quem aceita o amadorismo da gestão hospitalar</li>
                <li className="flex gap-2"><span>❌</span> Quem busca fórmulas mágicas sem mudança de postura</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 8: FAQ --- */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-md mx-auto">
          <SectionTitle red="CLAREZA FINAL">PERGUNTAS FREQUENTES</SectionTitle>
          <div className="mt-8">
            <FAQItem 
              question="Para quem é indicado este workshop?" 
              answer="Principalmente para médicos recém-formados e em transição de carreira que buscam estabilidade através de escalas fixas, abandonando a dependência de plantões avulsos." 
            />
            <FAQItem 
              question="O workshop ensina marketing médico ou redes sociais?" 
              answer="Não. O foco é 100% no mercado offline, gestão de carreira hospitalar e posicionamento técnico nos bastidores onde as escalas são decididas." 
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
      <section className="pt-24 pb-48 px-6 bg-black relative overflow-hidden text-center">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-red-600/5 blur-[100px] -z-10" />
        <div className="max-w-md mx-auto">
          <Award className="mx-auto text-red-600 mb-6" size={48} />
          <p className="text-red-500 font-black uppercase text-[10px] tracking-[0.5em] mb-4 italic">O Mercado Não Espera. Sua Escala de Elite Começa Aqui.</p>
          <div className="mb-10">
            <span className="text-gray-500 line-through text-sm font-bold block">De R$ 997,00</span>
            <h2 className="text-7xl font-black text-white tracking-tighter uppercase italic leading-[0.8]">R$ 27,00</h2>
            <p className="text-[10px] text-gray-400 font-black mt-2 uppercase">Ingresso Workshop Maestria de Escala</p>
          </div>
          
          <CTAButton hasLed={true} />
          
          <div className="mt-12 flex flex-col items-center gap-4 opacity-50 grayscale">
            <div className="flex gap-8">
               <ShieldCheck size={20} /> <Lock size={20} /> <Users size={20} />
            </div>
            <p className="text-[8px] font-black uppercase tracking-widest leading-relaxed">
              Ingressos do lote de abertura avançando <br/> 
              Ambiente 100% Seguro • Suporte Direto
            </p>
          </div>
        </div>
      </section>

      {/* --- STICKY FOOTER --- */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 bg-black/95 backdrop-blur-2xl border-t border-white/10 flex items-center justify-between shadow-2xl">
         <div className="flex flex-col">
            <span className="text-red-600 text-[8px] font-black uppercase tracking-tighter italic">Lote 01 Expira em Breve</span>
            <span className="text-white text-xl font-black italic tracking-tighter">R$ 27,00</span>
         </div>
         <button 
           onClick={() => safeOpen('https://checkout.exemplo.com')}
           className="px-6 py-3 bg-red-600 text-white font-black text-[10px] uppercase italic rounded-lg active:scale-95 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)]"
         >
           QUERO MEU INGRESSO
         </button>
      </div>

      <footer className="py-20 px-6 text-center bg-black opacity-30">
        <div className="max-w-md mx-auto">
          <p className="text-[8px] text-gray-500 font-bold uppercase tracking-[0.2em] leading-loose">
            Workshop Maestria de Escala | Dr. Thiago Costa <br/>
            Sua estratégia garante sua liberdade. <br/>
            © 2024 - Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
