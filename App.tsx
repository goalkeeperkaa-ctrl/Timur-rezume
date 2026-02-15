
import React from 'react';
import { 
  ArrowUpRight, 
  Menu, 
  Mail, 
  Phone, 
  Globe, 
  Search,
  ChevronRight,
  ArrowRight,
  Target,
  Zap,
  Users,
  Briefcase,
  GraduationCap,
  Award,
  ShieldCheck,
  Building2,
  Scale,
  PlaneTakeoff
} from 'lucide-react';

/** 
 * --- ДИЗАЙН-КОМПОНЕНТЫ ---
 */

const Logo = () => (
  <div className="flex items-center gap-3">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
      <path d="M4 4H20V6H13V20H11V6H4V4Z" fill="currentColor" />
      <path d="M2 2V4H4V2H2ZM20 2V4H22V2H20ZM11 20V22H13V20H11Z" fill="currentColor" opacity="0.3" />
    </svg>
    <div className="flex flex-col leading-none">
      <span className="font-bold tracking-[0.15em] text-lg uppercase">Тимур Фаттахов</span>
      <span className="text-[9px] font-bold text-[#0052FF] uppercase tracking-widest mt-1">HR Director / HRBP</span>
    </div>
  </div>
);

const SectionHeading = ({ children }: { children?: React.ReactNode }) => (
  <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-10 md:mb-16 uppercase">
    {children}
  </h2>
);

const ExperienceItem = ({ period, company, role, location, details, highlights, isCompact = false }: { 
  period: string, 
  company: string, 
  role: string, 
  location?: string,
  details?: string,
  highlights?: string[],
  isCompact?: boolean
}) => (
  <div className={`group relative border-l border-white/10 pl-8 pb-16 last:pb-0 ${isCompact ? 'opacity-80 hover:opacity-100' : ''} transition-opacity`}>
    <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-[#0052FF] shadow-[0_0_10px_#0052FF]"></div>
    <div className="mb-4">
      <span className="text-[10px] font-black text-[#0052FF] uppercase tracking-[0.4em] mb-2 block">{period}</span>
      <div className="flex flex-wrap items-baseline gap-4 mb-1">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase">{company}</h3>
        {location && <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">{location}</span>}
      </div>
      <p className="text-lg md:text-xl text-slate-400 font-semibold uppercase tracking-tight">{role}</p>
    </div>
    
    {details && <p className="text-slate-500 mb-6 max-w-4xl text-sm md:text-base leading-relaxed">{details}</p>}
    
    {highlights && highlights.length > 0 && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
        {highlights.map((h, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-1 h-1 rounded-full bg-slate-700 mt-2.5 flex-shrink-0"></div>
            <span className="text-xs md:text-sm text-slate-400 leading-tight">{h}</span>
          </div>
        ))}
      </div>
    )}
  </div>
);

const StatBadge = ({ label, value }: { label: string, value: string }) => (
  <div className="px-8 py-8 rounded-[2rem] border border-white/5 bg-[#0A0A0A] hover:border-[#0052FF]/30 transition-all text-center md:text-left group">
    <div className="text-4xl font-black text-[#0052FF] mb-2 group-hover:scale-105 transition-transform">{value}</div>
    <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">{label}</div>
  </div>
);

const Tag: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <span className="px-6 py-3 rounded-full border border-white/10 text-[10px] font-black tracking-[0.2em] text-slate-400 hover:text-white hover:border-white/30 transition-all cursor-default uppercase">
    {children}
  </span>
);

const ContactAction = ({ text, subtext, icon: Icon, href }: { text: string, subtext: string, icon: any, href: string }) => (
  <a href={href} className="w-full text-left bg-[#0A0A0A] p-8 md:p-12 rounded-[3rem] border border-white/5 hover:border-white/20 hover:bg-[#111] transition-all flex items-center justify-between group">
    <div className="flex items-center gap-8">
      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#0052FF] transition-colors">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div>
        <span className="block text-2xl md:text-3xl font-bold tracking-tight uppercase mb-1">{text}</span>
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{subtext}</span>
      </div>
    </div>
    <ArrowUpRight className="w-12 h-12 text-white/10 group-hover:text-white transition-all transform group-hover:scale-110" />
  </a>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#0052FF] selection:text-white font-sans overflow-x-hidden">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <Logo />
          
          <nav className="hidden lg:flex items-center gap-10">
            {["Опыт", "Компетенции", "Образование", "Связь"].map((item) => (
              <a key={item} href={`#${item}`} className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              Kazan, Russia
            </div>
            <button className="p-2 text-white/40 hover:text-white transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <main>
        
        {/* HERO */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
          <div className="absolute right-[-10%] top-[10%] w-[60%] h-[90%] opacity-30 pointer-events-none select-none">
            <img 
              src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-contain object-right mix-blend-screen grayscale contrast-125" 
              alt="" 
            />
          </div>

          <div className="max-w-[1440px] mx-auto w-full relative z-10">
            <div className="max-w-5xl">
              <span className="text-xs font-black text-[#0052FF] uppercase tracking-[0.5em] mb-8 block">Full Career Roadmap</span>
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] mb-12 uppercase">
                Архитектор <br/>
                людских <br/>
                систем
              </h1>
              <p className="text-lg md:text-2xl text-slate-400 font-medium leading-relaxed mb-16 max-w-2xl border-l border-white/10 pl-8">
                HR Director с 20-летним опытом. От основателя HR-агентства №1 в Татарстане до Главного советника Аппарата Президента РТ. Трансформирую культуру в результат.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                 <a href="#Связь" className="group bg-white text-black px-14 py-6 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-[#0052FF] hover:text-white transition-all flex items-center gap-4">
                   Начать диалог <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </a>
                 <div className="flex flex-col gap-1 text-slate-600 font-mono text-[10px] tracking-[0.2em] font-bold uppercase">
                   <span>Born: 1985</span>
                   <span>Career start: 2004</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-6">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 rotate-90 origin-left">PRO_EXPERIENCE</div>
            <div className="h-24 w-px bg-white/10 relative">
               <div className="absolute top-0 left-0 w-full h-1/2 bg-[#0052FF] animate-scroll"></div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-24 px-6 md:px-12 bg-[#050505] border-y border-white/5">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatBadge label="Лет общего стажа" value="20" />
              <StatBadge label="Проектов в консалтинге" value="40+" />
              <StatBadge label="HR-метрики (наем)" value="30-70%" />
              <StatBadge label="Рост базы клиентов" value="250%" />
            </div>
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section id="Опыт" className="py-32 px-6 md:px-12 bg-black">
          <div className="max-w-[1440px] mx-auto">
            <SectionHeading>Полная <br/> история карьеры</SectionHeading>
            
            <div className="space-y-4">
              
              {/* --- 2021-Present --- */}
              <ExperienceItem 
                period="Июль 2021 — настоящее время"
                company="Индивидуальное предпринимательство / Частная практика / Фриланс"
                role="Генеральный директор / Founder"
                location="Казань, fattakhovhr.ru"
                details="Основал и успешно развил агентство с нуля, став лидером на рынке республики Татарстан HR услуг в сфере IT."
                highlights={[
                  "Стратегическое планирование: рост клиентской базы на 250% за 3 года",
                  "Управление командой: нанял и обучил 12 человек",
                  "Подбор персонала: сократил сроки закрытия вакансий на 30-70%",
                  "Консалтинг: помог улучшить HR-процессы более чем в 40 компаниях",
                  "Разработка программ мотивации и удержания: снижение текучести кадров",
                  "Корпоративная культура: формирование климата и продуктивности у клиентов",
                  "Управление изменениями: адаптация клиентов к новым бизнес-реалиям",
                  "Спикер на конференциях по HR тематике"
                ]}
              />

              {/* --- 2019-2021 DIA Digital --- */}
              <ExperienceItem 
                period="Август 2019 — Июль 2021"
                company="DIA Digital"
                role="Исполнительный директор (CEO)"
                location="Казань, dia-ru.ru"
                details="Маркетинговые, рекламные, BTL, PR-агентства, организация выставок. Управление стратегическим партнерством и талантами."
                highlights={[
                  "Разработка и внедрение HR стратегий под бизнес-цели компании",
                  "Подбор высококвалифицированных специалистов в креативных индустриях",
                  "Внедрение систем оценки и управления эффективностью",
                  "Реорганизация структуры агентства и оптимизация процессов",
                  "Разработка программ профессионального развития и обучения",
                  "Управление трудовыми спорами и конфликтами",
                  "Анализ HR данных и подготовка отчетов для руководства"
                ]}
              />

              {/* --- 2020 Shan Tours --- */}
              <ExperienceItem 
                period="Январь 2020 — Май 2020"
                company="«Шан Турс»"
                role="HR бизнес-партнер (проектная работа)"
                location="ОАЭ, shantours.ru"
                highlights={[
                  "Провел кадровый аудит и оптимизацию персонала",
                  "Создал дорожную карту компании через SWOT анализ",
                  "Обучение менеджеров по продажам",
                  "Коучинг руководителя компании",
                  "Инициировал переход ресторана на систему доставки в период пандемии"
                ]}
              />

              {/* --- 2019-2020 Nashe Delo --- */}
              <ExperienceItem 
                period="Ноябрь 2019 — Январь 2020"
                company="ООО «Наше дело»"
                role="Руководитель проекта, менеджер по развитию"
                location="Казань, мечтайсомной.рф"
                details="Работа в сфере НКО и благотворительности. Федеральный проект «Родительский клуб»."
                highlights={[
                  "Сформировал и развил федеральное направление на базе «Мечтай со мной»",
                  "Подготовил заявку на Президентский грант",
                  "Организовал регулярные встречи и мероприятия для сообщества родителей",
                  "Установил партнерские отношения с другими организациями для расширения ресурсов клуба"
                ]}
              />

              {/* --- 2019 Volga Nav --- */}
              <ExperienceItem 
                period="Август 2019 — Ноябрь 2019"
                company="Поволжская Навигационная Компания, ООО"
                role="HR business partner, Project manager"
                location="Казань, autotracker.ru"
                highlights={[
                  "Оптимизировал и структурировал внутренние бизнес-процессы",
                  "Выполнял функции Scrum мастера, внедрял адаптацию сотрудников",
                  "Руководил командой разработчиков и маркетологов",
                  "Укрепил разваливающуюся команду, нашел ТимЛида",
                  "Организовал комфортное офисное пространство для команды"
                ]}
              />

              {/* --- 2019 DeLion --- */}
              <ExperienceItem 
                period="Июль 2019 — Август 2019"
                company="ООО «ДеЛион»"
                role="HR Business Partner (проектная работа)"
                location="Казань"
                highlights={[
                  "Выстраивание эффективных коммуникаций внутри команды",
                  "Внедрение методологий Agile и Scrum для улучшения гибкости",
                  "Организовал IT-пространство (ремонт 190 м²)"
                ]}
              />

              {/* --- 2019 IGS Digital --- */}
              <ExperienceItem 
                period="Апрель 2019 — Август 2019"
                company="ООО Айджиэс Цифровые Технологии (IGS Digital)"
                role="HR менеджер"
                location="Казань, igs.digital"
                highlights={[
                  "Рекрутинг и командообразование в IT-компании",
                  "Внедрение корпоративных ценностей и норм поведения",
                  "Реструктуризация команды, улучшившая рабочую атмосферу",
                  "Прекращение текучки кадров в команде"
                ]}
              />

              {/* --- 2013-2018 President Apparatus --- */}
              <ExperienceItem 
                period="Сентябрь 2013 — Сентябрь 2018"
                company="Аппарат Президента Республики Татарстан"
                role="Главный советник"
                location="Казань, shaimiev.tatarstan.ru"
                details="Обеспечение деятельности Государственного Советника РТ М.Ш. Шаймиева."
                highlights={[
                  "Координация и управление различными проектами",
                  "Административная поддержка руководителя и протокольная деятельность",
                  "Управление административными и хозяйственными делами офиса",
                  "Внедрение эффективной системы электронного документооборота",
                  "Руководство персоналом, занятым обслуживанием здания"
                ]}
              />

              {/* --- 2011-2013 President Apparatus --- */}
              <ExperienceItem 
                period="Август 2011 — Сентябрь 2013"
                company="Аппарат Президента Республики Татарстан"
                role="Главный специалист"
                location="Казань"
                highlights={[
                  "Обеспечение деятельности Государственного Советника",
                  "Контроль протокольных мероприятий и соблюдение стандартов",
                  "Управление делами и бесперебойное функционирование офиса"
                ]}
              />

              {/* --- 2010-2011 PAO CFO --- */}
              <ExperienceItem 
                period="Июль 2010 — Август 2011"
                company="ПАО ЦФО"
                role="Помощник арбитражного управляющего"
                location="Республика Татарстан, paucfo.ru"
                highlights={[
                  "Антикризисное управление: меры по стабилизации и восстановлению ситуации",
                  "Управление процессами банкротства и анализ состояния компаний"
                ]}
              />

              {/* --- 2008-2010 Supreme Court --- */}
              <ExperienceItem 
                period="Сентябрь 2008 — Июль 2010"
                company="Верховный суд Республики Татарстан"
                role="Помощник судьи"
                location="Республика Татарстан, vs.tat.sudrf.ru"
                highlights={[
                  "Координация и организация работы судьи",
                  "Подготовка проектов судебных решений и документов",
                  "Ведение протоколов судебных заседаний (точность и полнота)",
                  "Поддержка граждан в разъяснении процессуальных вопросов",
                  "Взаимодействие с адвокатами и представителями сторон"
                ]}
              />

              {/* --- 2004-2008 Sodeystvie --- */}
              <ExperienceItem 
                period="Ноябрь 2004 — Август 2008"
                company="ООО «Содействие»"
                role="Юрисконсульт"
                location="Казань"
                highlights={[
                  "Правовая поддержка и консультации по деятельности компаний",
                  "Анализ и подготовка юридических документов и договоров",
                  "Подготовка юридических заключений и правовых оценок",
                  "Представление интересов компаний в судах и госорганах"
                ]}
                isCompact
              />

            </div>
          </div>
        </section>

        {/* SKILLS & CORE COMPETENCIES */}
        <section id="Компетенции" className="py-32 px-6 md:px-12 bg-[#050505] border-y border-white/5">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                <SectionHeading>Навыки</SectionHeading>
                <div className="flex flex-wrap gap-4 mb-16">
                  {[
                    "Управление проектами", "Организация мероприятий", "Оптимизация бизнес-процессов", 
                    "Внутренние коммуникации", "Антикризисные коммуникации", "HR Business Strategy", 
                    "Проведение тренингов", "Адаптация персонала", "Мотивация персонала", "Scrum", 
                    "Подбор персонала", "Start-up project", "Практическая психология", 
                    "Agile Project Management", "Facilitation Skills"
                  ].map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="bg-[#0A0A0A] p-10 rounded-[3rem] border border-white/5">
                  <h4 className="text-xl font-bold uppercase tracking-widest text-[#0052FF] mb-6 flex items-center gap-3">
                    <Globe className="w-5 h-5" /> Языки
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                      <span className="text-2xl font-bold uppercase tracking-tighter">Русский</span>
                      <span className="text-slate-500 font-mono text-sm">Родной</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                      <span className="text-2xl font-bold uppercase tracking-tighter">Английский</span>
                      <span className="text-slate-500 font-mono text-sm">B2 — Средне-продвинутый</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold uppercase tracking-tighter">Татарский</span>
                      <span className="text-slate-500 font-mono text-sm">C2 — В совершенстве</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="Образование" className="py-32 px-6 md:px-12">
          <div className="max-w-[1440px] mx-auto">
            <SectionHeading>Образование</SectionHeading>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="p-10 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 flex flex-col justify-between aspect-square group hover:border-[#0052FF]/40 transition-all">
                <GraduationCap className="w-12 h-12 text-[#0052FF]" />
                <div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-4">Высшее, 2015</span>
                  <h4 className="text-2xl font-bold uppercase leading-tight group-hover:text-white transition-colors">ФГАОУВПО «Казанский федеральный университет»</h4>
                  <p className="text-sm text-slate-500 mt-4 uppercase font-bold tracking-widest">Психология, Педагогика</p>
                </div>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 flex flex-col justify-between aspect-square group hover:border-[#0052FF]/40 transition-all">
                <Award className="w-12 h-12 text-[#0052FF]" />
                <div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-4">Высшее, 2011</span>
                  <h4 className="text-2xl font-bold uppercase leading-tight group-hover:text-white transition-colors">Казанский юридический институт (Минюст)</h4>
                  <p className="text-sm text-slate-500 mt-4 uppercase font-bold tracking-widest">Антикризисное управление</p>
                </div>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 flex flex-col justify-between aspect-square group hover:border-[#0052FF]/40 transition-all">
                <Scale className="w-12 h-12 text-[#0052FF]" />
                <div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-4">Высшее, 2008</span>
                  <h4 className="text-2xl font-bold uppercase leading-tight group-hover:text-white transition-colors">КИЭУиП (имени В.Г.Тимирясова)</h4>
                  <p className="text-sm text-slate-500 mt-4 uppercase font-bold tracking-widest">Юридический, уголовная</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXTRA INFO */}
        <section className="py-32 px-6 md:px-12 bg-[#050505]">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              <div>
                <h3 className="text-3xl font-bold uppercase mb-10 tracking-widest text-[#0052FF]">Обо мне</h3>
                <p className="text-xl text-slate-400 leading-relaxed">
                  Обладаю значительным опытом в создании и управлении командами, особенно в IT-сфере. 
                  Моя сильная сторона — умение быстро формировать команды и налаживать эффективные коммуникации. 
                  Владею инструментами командообразования и успешно интегрирую новых сотрудников.
                </p>
              </div>
              <div className="space-y-12">
                <div>
                  <h3 className="text-3xl font-bold uppercase mb-6 tracking-widest text-[#0052FF]">Активность</h3>
                  <div className="space-y-4">
                    <p className="text-slate-500"><span className="text-white font-bold">Спикер:</span> Конференции по HR тематике.</p>
                    <p className="text-slate-500"><span className="text-white font-bold">Проекты:</span> Успешно реализовал более десяти социальных проектов в РТ.</p>
                    <p className="text-slate-500"><span className="text-white font-bold">Стажировки:</span> Мюнхен (Германия), Гданьск (Польша).</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold uppercase mb-6 tracking-widest text-[#0052FF]">Увлечения</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Психология", "IT", "Путешествия", "Сноуборд", "Йога", "Хоккей"].map(h => (
                      <span key={h} className="text-sm font-mono text-slate-600">#{h.toUpperCase()}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTS / FOOTER */}
        <footer id="Связь" className="py-32 px-6 md:px-12 border-t border-white/5 bg-[#030303]">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                <h3 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-16 uppercase">
                  К диалогу <br/> готов
                </h3>
                <div className="space-y-6">
                  <ContactAction 
                    text="Telegram" 
                    subtext="@ottimura — связь напрямую" 
                    icon={ArrowRight} 
                    href="https://t.me/ottimura"
                  />
                  <ContactAction 
                    text="Email" 
                    subtext="ottimura@gmail.com" 
                    icon={Mail} 
                    href="mailto:ottimura@gmail.com"
                  />
                  <ContactAction 
                    text="Phone" 
                    subtext="+7 (937) 571-18-77" 
                    icon={Phone} 
                    href="tel:+79375711877"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div className="mb-24">
                  <Logo />
                  <p className="mt-12 text-xl text-slate-500 max-w-md leading-relaxed">
                    Директор по персоналу. Помогаю бизнесу расти через людей и эффективный оргдизайн. Готов к переезду и командировкам.
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-[#0052FF] uppercase tracking-widest">Локация</span>
                    <p className="text-3xl font-bold">Казань, Россия</p>
                    <p className="text-slate-500 uppercase text-[10px] font-black tracking-widest">Citizenship: Russia</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#0A0A0A] border border-white/5 flex items-center justify-center hover:bg-[#0052FF] transition-all cursor-pointer group">
                      <Globe className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.5em] text-slate-700">
              <p>© 2025 ТИМУР ФАТТАХОВ. FULL_PROFESSIONAL_CV</p>
              <div className="flex gap-10">
                <span className="cursor-pointer hover:text-white transition-colors">GOV_SECTOR_EXP</span>
                <span className="cursor-pointer hover:text-white transition-colors">IT_HR_FOUNDER</span>
                <span className="cursor-pointer hover:text-white transition-colors">KAZAN_UAE_GERMANY</span>
              </div>
            </div>
          </div>
        </footer>

      </main>

      <style>{`
        @keyframes scroll {
          0% { height: 0; top: 0; }
          50% { height: 100%; top: 0; }
          100% { height: 0; top: 100%; }
        }
        .animate-scroll {
          animation: scroll 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
