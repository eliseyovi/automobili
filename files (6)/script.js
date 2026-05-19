/* ─────────────────────────────────────────────
   FIZAVTO — script.js
───────────────────────────────────────────── */

/* ─── ALL CAR DATA ─── */
const CARS = [
  {
    id: 'tesla-model3', type: 'electric', index: 1,
    name: 'Tesla Model 3', tag: 'Электромобиль',
    desc: 'Популярный современный электромобиль среднего класса с автопилотом и высокой динамикой.',
    rangeMin: 490, rangeMax: 580, powerMin: 513, powerMax: 513, chargeMin: 25, chargeMax: 30,
    specs: [
      { v: '490–580 км', l: 'Запас хода' }, { v: 'до 513 л.с.', l: 'Мощность' },
      { v: '25–30 мин', l: 'Быстрая зарядка' }, { v: '0%', l: 'Выбросы CO₂' },
      { v: '~1.2 ₽/км', l: 'Стоимость км' }, { v: '90–95%', l: 'КПД мотора' },
    ],
    features: 'Автопилот, современное управление, высокая динамика',
    pros: ['Автопилот и ADAS', 'Огромный запас хода', 'Нулевые выбросы', 'Минимальное ТО', 'Быстрый разгон'],
    cons: ['Высокая цена', 'Зависимость от зарядной сети', 'Долгая зарядка без Supercharger'],
    segment: 'budget', region: 'russia',
    rec: '<strong>Tesla Model 3</strong> — лучший выбор для городских жителей с доступом к зарядке. Окупается за 3–4 года благодаря экономии на топливе и ТО.',
    workings: [
      { t: 'Батарея 75–82 кВт·ч', b: 'Литий-ионная АКБ хранит энергию. При движении ток подаётся через инвертор на три­фазный электромотор.' },
      { t: 'Трёхфазный электромотор', b: 'Переменный ток создаёт вращающееся магнитное поле. КПД до 95% — втрое выше ДВС.' },
      { t: 'Рекуперация', b: 'При торможении мотор работает как генератор — возвращает кинетическую энергию в батарею.' },
      { t: 'Supercharger', b: 'Сеть быстрых зарядных станций Tesla обеспечивает 250 км запаса хода за 15 минут.' },
    ],
  },
  {
    id: 'tesla-models', type: 'electric', index: 2,
    name: 'Tesla Model S', tag: 'Электромобиль',
    desc: 'Премиальный электромобиль с рекордным запасом хода 600 км и разгоном до 100 за 2.1 сек.',
    rangeMin: 600, rangeMax: 600, powerMin: 1020, powerMax: 1020, chargeMin: 30, chargeMax: 30,
    specs: [
      { v: '600 км', l: 'Запас хода' }, { v: 'до 1020 л.с.', l: 'Мощность (Plaid)' },
      { v: '~30 мин', l: 'Быстрая зарядка' }, { v: '0%', l: 'Выбросы CO₂' },
      { v: '2.1 сек', l: 'Разгон 0–100' }, { v: '90–95%', l: 'КПД мотора' },
    ],
    features: 'Премиальный класс, рекордная скорость, максимальный комфорт',
    pros: ['Максимальный запас хода', 'Феноменальная динамика', 'Премиальный салон', 'Нулевые выбросы'],
    cons: ['Очень высокая цена', 'Крупные размеры', 'Высокое потребление энергии'],
    segment: 'premium', region: 'europe',
    rec: '<strong>Tesla Model S</strong> — выбор тех, кому нужно всё и сразу: максимальная дальность, скорость и статус. Подходит для бизнес-класса.',
    workings: [
      { t: 'Три мотора (Plaid)', b: 'Один спереди и два сзади. Суммарная мощность 1020 л.с. — разгон быстрее многих суперкаров.' },
      { t: 'Батарея 100 кВт·ч', b: 'Самая ёмкая батарея в серийных электромобилях Tesla обеспечивает рекордный запас хода.' },
      { t: 'Yoke-руль и экран', b: 'Управление через 17" экран. Автопилот второго поколения с автоматической сменой полос.' },
      { t: 'Воздушная подвеска', b: 'Адаптивная пневматическая подвеска настраивает клиренс и жёсткость под дорогу автоматически.' },
    ],
  },
  {
    id: 'nissan-leaf', type: 'electric', index: 3,
    name: 'Nissan Leaf', tag: 'Электромобиль',
    desc: 'Один из первых массовых электромобилей — доступный, простой и надёжный городской автомобиль.',
    rangeMin: 240, rangeMax: 385, powerMin: 150, powerMax: 217, chargeMin: 40, chargeMax: 60,
    specs: [
      { v: '240–385 км', l: 'Запас хода' }, { v: '150–217 л.с.', l: 'Мощность' },
      { v: '40–60 мин', l: 'Быстрая зарядка' }, { v: '0%', l: 'Выбросы CO₂' },
      { v: '~0.9 ₽/км', l: 'Стоимость км' }, { v: 'e-Pedal', l: 'Рекуперация' },
    ],
    features: 'Компактность, доступность, простота эксплуатации',
    pros: ['Доступная цена', 'Простота обслуживания', 'CHAdeMO быстрая зарядка', 'Проверенная надёжность'],
    cons: ['Небольшой запас хода', 'Деградация АКБ в жару', 'Устаревший дизайн'],
    segment: 'budget', region: 'europe',
    rec: '<strong>Nissan Leaf</strong> — оптимальный первый электромобиль. Доступная цена, низкие расходы и богатый опыт эксплуатации по всему миру.',
    workings: [
      { t: 'Мотор-редуктор в одном корпусе', b: 'Компактная конструкция: электромотор, инвертор и редуктор в едином блоке под капотом.' },
      { t: 'e-Pedal', b: 'Функция управления одной педалью — нажатие газа разгоняет, отпускание — тормозит с рекуперацией.' },
      { t: 'CHAdeMO', b: 'Японский стандарт быстрой зарядки. Широко распространён в Азии и частично в Европе.' },
      { t: 'ProPILOT', b: 'Система помощи водителю: удержание полосы, адаптивный круиз-контроль, автоматическое торможение.' },
    ],
  },
  {
    id: 'bmw-i3', type: 'electric', index: 4,
    name: 'BMW i3', tag: 'Электромобиль',
    desc: 'Компактный городской электромобиль с необычным дизайном, карбоновым кузовом и высокой манёвренностью.',
    rangeMin: 260, rangeMax: 310, powerMin: 170, powerMax: 170, chargeMin: 40, chargeMax: 40,
    specs: [
      { v: '260–310 км', l: 'Запас хода' }, { v: '170 л.с.', l: 'Мощность' },
      { v: '~40 мин', l: 'Быстрая зарядка' }, { v: '0%', l: 'Выбросы CO₂' },
      { v: '7.3 сек', l: 'Разгон 0–100' }, { v: '50:50', l: 'Баланс масс' },
    ],
    features: 'Лёгкий карбоновый кузов, манёвренность, экологичные материалы',
    pros: ['Карбоновый кузов (CFRP)', 'Эко-интерьер', 'Задние двери без стойки', 'Точное управление'],
    cons: ['Небольшой запас хода', 'Маленький багажник', 'Высокая цена за класс'],
    segment: 'budget', region: 'europe',
    rec: '<strong>BMW i3</strong> — для ценителей уникальности и экологии. Карбоновый кузов снижает массу до 1195 кг, что улучшает динамику и эффективность.',
    workings: [
      { t: 'CFRP-кузов', b: 'Корпус из углеродного волокна снижает массу на 250 кг по сравнению со сталью — больше запас хода и лучше динамика.' },
      { t: 'Задний привод', b: 'Мотор на задней оси обеспечивает спортивное рулевое поведение и баланс масс 50:50.' },
      { t: 'Rex (Range Extender)', b: 'Опциональный двухцилиндровый ДВС 650 куб.см работает как генератор, увеличивая суммарный пробег.' },
      { t: 'Рекуперация', b: 'Интенсивное торможение двигателем при отпускании педали газа — водитель может ехать на одной педали.' },
    ],
  },
  {
    id: 'hyundai-kona', type: 'electric', index: 5,
    name: 'Hyundai Kona Electric', tag: 'Электромобиль',
    desc: 'Электрический кроссовер с хорошим запасом хода — удобен как для города, так и для дальних поездок.',
    rangeMin: 480, rangeMax: 480, powerMin: 204, powerMax: 204, chargeMin: 45, chargeMax: 45,
    specs: [
      { v: '480 км', l: 'Запас хода' }, { v: '204 л.с.', l: 'Мощность' },
      { v: '~45 мин', l: 'Быстрая зарядка' }, { v: '0%', l: 'Выбросы CO₂' },
      { v: '7.9 сек', l: 'Разгон 0–100' }, { v: '64 кВт·ч', l: 'Батарея' },
    ],
    features: 'Надёжность, безопасность, кроссоверный кузов, хороший клиренс',
    pros: ['Большой запас хода для класса', 'Доступная цена', 'Практичный кроссовер', 'Хорошая безопасность'],
    cons: ['Скромная мощность', 'Устаревший дизайн', 'Не очень быстрая зарядка'],
    segment: 'budget', region: 'russia',
    rec: '<strong>Hyundai Kona Electric</strong> — разумный выбор для тех, кто хочет электромобиль с запасом хода без переплаты. Хорошо подходит и для России.',
    workings: [
      { t: 'Передний привод', b: 'Электромотор на передней оси с интегрированным редуктором. Простая и надёжная компоновка.' },
      { t: 'Батарея 64 кВт·ч', b: 'Жидкостное охлаждение АКБ обеспечивает стабильную работу даже при интенсивной езде.' },
      { t: 'V2L (Vehicle-to-Load)', b: 'Можно использовать автомобиль как источник питания 220В для бытовых приборов до 3.6 кВт.' },
      { t: 'ADAS', b: 'Полный комплект ассистентов: слежение за полосой, автоторможение, распознавание знаков.' },
    ],
  },
  {
    id: 'vw-id4', type: 'electric', index: 6,
    name: 'Volkswagen ID.4', tag: 'Электромобиль',
    desc: 'Современный семейный электрический кроссовер, разработанный специально для европейского рынка.',
    rangeMin: 400, rangeMax: 520, powerMin: 204, powerMax: 299, chargeMin: 30, chargeMax: 40,
    specs: [
      { v: '400–520 км', l: 'Запас хода' }, { v: '204–299 л.с.', l: 'Мощность' },
      { v: '30–40 мин', l: 'Быстрая зарядка' }, { v: '0%', l: 'Выбросы CO₂' },
      { v: '8.5 сек', l: 'Разгон 0–100' }, { v: '77 кВт·ч', l: 'Батарея' },
    ],
    features: 'Семейный кроссовер, просторный салон, немецкое качество',
    pros: ['Просторный салон', 'Немецкое качество сборки', 'Хороший запас хода', 'AWD версия доступна'],
    cons: ['Посредственная система зарядки', 'Сложное ПО на старте', 'Цена выше конкурентов'],
    segment: 'premium', region: 'europe',
    rec: '<strong>VW ID.4</strong> — логичный выбор для европейской семьи, привыкшей к качеству VW. Просторный, надёжный и продуманный.',
    workings: [
      { t: 'Платформа MEB', b: 'Специализированная электромобильная платформа Volkswagen Group — ровный пол, большой запас хода.' },
      { t: 'Батарея под полом', b: 'Расположение АКБ в полу снижает центр тяжести и освобождает пространство в салоне.' },
      { t: 'ID.Light', b: 'Световая полоса на панели приборов сигнализирует о навигации, ассистентах и зарядке.' },
      { t: 'GTX (AWD)', b: 'Версия GTX с двумя моторами и системой контроля вектора тяги обеспечивает спортивный характер.' },
    ],
  },
  {
    id: 'ford-mache', type: 'electric', index: 7,
    name: 'Ford Mustang Mach-E', tag: 'Электромобиль',
    desc: 'Спортивный электрический кроссовер в духе легендарного Mustang — мощь и стиль в одном.',
    rangeMin: 400, rangeMax: 500, powerMin: 480, powerMax: 480, chargeMin: 40, chargeMax: 40,
    specs: [
      { v: '400–500 км', l: 'Запас хода' }, { v: 'до 480 л.с.', l: 'Мощность' },
      { v: '~40 мин', l: 'Быстрая зарядка' }, { v: '0%', l: 'Выбросы CO₂' },
      { v: '3.7 сек', l: 'Разгон 0–100 (GT)' }, { v: '91 кВт·ч', l: 'Батарея' },
    ],
    features: 'Спортивный дизайн, быстрый разгон, мощная GT-версия',
    pros: ['Мощная GT-версия', 'Узнаваемый дизайн', 'Хороший запас хода', 'AWD доступен'],
    cons: ['Неоднозначный дизайн для поклонников Mustang', 'Дорогая GT-версия'],
    segment: 'premium', region: 'europe',
    rec: '<strong>Ford Mustang Mach-E</strong> — для тех, кто хочет спортивный характер и нулевые выбросы. GT-версия — настоящий электрический мышц-кар.',
    workings: [
      { t: 'Задний привод или AWD', b: 'Базовая версия — RWD с мотором сзади. GT получает второй мотор спереди для AWD.' },
      { t: 'FordPass зарядка', b: 'Партнёрство с Blue Oval Charge Network — доступ к тысячам зарядных станций по всей Европе и США.' },
      { t: 'Mega-Power Frunk', b: 'Большой передний багажник заменяет место двигателя и может служить холодильником или мойкой.' },
      { t: 'Unbridled режим', b: 'Спортивный режим повышает отзывчивость руля, педали газа и интенсивность звукового синтезатора.' },
    ],
  },
  {
    id: 'chevy-bolt', type: 'electric', index: 8,
    name: 'Chevrolet Bolt EV', tag: 'Электромобиль',
    desc: 'Компактный и экономичный электромобиль — доступная цена, хороший запас хода, простота в обслуживании.',
    rangeMin: 417, rangeMax: 417, powerMin: 200, powerMax: 200, chargeMin: 60, chargeMax: 60,
    specs: [
      { v: '417 км', l: 'Запас хода' }, { v: '200 л.с.', l: 'Мощность' },
      { v: '~1 час', l: 'Быстрая зарядка' }, { v: '0%', l: 'Выбросы CO₂' },
      { v: '6.5 сек', l: 'Разгон 0–100' }, { v: '65 кВт·ч', l: 'Батарея' },
    ],
    features: 'Простота обслуживания, компактность, доступность',
    pros: ['Одна из лучших цен в классе', 'Хороший запас хода', 'Просторный для компакта', 'Надёжная АКБ LG Energy'],
    cons: ['Медленная быстрая зарядка (55 кВт)', 'Скучный дизайн', 'Базовые материалы'],
    segment: 'budget', region: 'europe',
    rec: '<strong>Chevrolet Bolt EV</strong> — лучшее соотношение цены и функциональности среди электромобилей. Для прагматиков.',
    workings: [
      { t: 'Передний привод', b: 'Простая компоновка с мотором на передней оси и аккумулятором в полу. Надёжна и проверена.' },
      { t: 'Батарея LG Energy', b: 'Элементы от крупнейшего производителя аккумуляторов с термоуправлением жидкостного охлаждения.' },
      { t: 'One-pedal driving', b: 'Функция езды на одной педали с максимальной рекуперацией — до полной остановки без тормоза.' },
      { t: 'Regen on Demand', b: 'Лепесток на руле управляет интенсивностью рекуперации без нажатия педали тормоза.' },
    ],
  },
  {
    id: 'toyota-prius', type: 'hybrid', index: 9,
    name: 'Toyota Prius', tag: 'Гибрид',
    desc: 'Символ экологичного транспорта. Первый массовый гибрид, сочетающий надёжность Toyota и рекордную экономичность.',
    rangeMin: 900, rangeMax: 900, powerMin: 121, powerMax: 121, fuelMin: 4.0, fuelMax: 5.0,
    specs: [
      { v: '~900 км', l: 'Запас хода' }, { v: '121 л.с.', l: 'Общая мощность' },
      { v: '4.0–5.0 л/100', l: 'Расход топлива' }, { v: '~85 г/км', l: 'Выбросы CO₂' },
      { v: '10.6 сек', l: 'Разгон 0–100' }, { v: '8.8 кВт·ч', l: 'АКБ' },
    ],
    features: 'Высокая экономичность, надёжность Toyota, низкий расход',
    pros: ['Рекордная экономичность', 'Независимость от зарядек', 'Надёжная система HSD', 'Большой запас хода'],
    cons: ['Скромная динамика', 'Специфичный дизайн', 'Есть выбросы CO₂'],
    segment: 'budget', region: 'russia',
    rec: '<strong>Toyota Prius</strong> — идеал для дальних поездок и регионов без зарядной инфраструктуры. Расход 4–5 л/100 км — вдвое меньше обычного авто.',
    workings: [
      { t: 'Toyota HSD (Hybrid Synergy Drive)', b: 'Планетарный редуктор связывает ДВС, генератор MG1 и тяговый мотор MG2. Система сама выбирает оптимальный режим.' },
      { t: 'Цикл Аткинсона', b: 'ДВС с удлинённым расширением достигает КПД 41% — на 30% эффективнее обычных бензиновых двигателей.' },
      { t: 'Рекуперация', b: 'При торможении MG2 работает как генератор. АКБ заряжается от торможения и от излишков мощности ДВС.' },
      { t: 'EV-режим', b: 'На малых скоростях автомобиль едет полностью на электричестве без работы бензинового двигателя.' },
    ],
  },
  {
    id: 'toyota-camry-h', type: 'hybrid', index: 10,
    name: 'Toyota Camry Hybrid', tag: 'Гибрид',
    desc: 'Комфортный седан бизнес-класса с экономичным гибридным приводом и плавным ходом.',
    rangeMin: 1000, rangeMax: 1000, powerMin: 208, powerMax: 208, fuelMin: 4.2, fuelMax: 4.2,
    specs: [
      { v: '~1000 км', l: 'Запас хода' }, { v: '208 л.с.', l: 'Общая мощность' },
      { v: '4.2 л/100', l: 'Расход топлива' }, { v: '~95 г/км', l: 'Выбросы CO₂' },
      { v: '8.3 сек', l: 'Разгон 0–100' }, { v: '8.9 кВт·ч', l: 'АКБ' },
    ],
    features: 'Бизнес-класс, высокий комфорт, плавность хода',
    pros: ['Огромный запас хода', 'Бизнес-класс', 'Плавная работа трансмиссии', 'Надёжность Toyota'],
    cons: ['Нет полного привода', 'Дороже базовой Camry', 'Цена запчастей'],
    segment: 'premium', region: 'russia',
    rec: '<strong>Toyota Camry Hybrid</strong> — выбор для деловых людей, ценящих комфорт и экономичность. Запас хода 1000 км идеален для командировок.',
    workings: [
      { t: 'Улучшенный HSD 4-го поколения', b: 'Новая версия системы Toyota с обновлённым планетарным редуктором — выше КПД и меньше потери.' },
      { t: 'Никель-металл-гидридная АКБ', b: 'Проверенная технология аккумулятора с высокой надёжностью. Не требует замены в течение всего ресурса авто.' },
      { t: 'E-CVT', b: 'Электрический вариатор без ремней и фрикционов — передача мощности через планетарный ряд без потерь.' },
      { t: 'Приоритет электротяги', b: 'В пробках и при спокойной езде ниже 50 км/ч ДВС отключается автоматически.' },
    ],
  },
  {
    id: 'honda-accord-h', type: 'hybrid', index: 11,
    name: 'Honda Accord Hybrid', tag: 'Гибрид',
    desc: 'Современный седан с уникальной двухмоторной гибридной системой и отличным балансом мощности и экономичности.',
    rangeMin: 950, rangeMax: 950, powerMin: 212, powerMax: 212, fuelMin: 4.5, fuelMax: 4.5,
    specs: [
      { v: '~950 км', l: 'Запас хода' }, { v: '212 л.с.', l: 'Общая мощность' },
      { v: '4.5 л/100', l: 'Расход топлива' }, { v: '~102 г/км', l: 'Выбросы CO₂' },
      { v: '7.8 сек', l: 'Разгон 0–100' }, { v: '1.3 кВт·ч', l: 'АКБ' },
    ],
    features: 'Плавная работа двигателя, удобство управления, спортивный характер',
    pros: ['Уникальная двухмоторная схема', 'Спортивное управление', 'Плавная трансмиссия', 'Отличная управляемость'],
    cons: ['Маленькая АКБ', 'Нет EV-режима', 'Расход выше Prius'],
    segment: 'premium', region: 'europe',
    rec: '<strong>Honda Accord Hybrid</strong> — для водителей, которым важно удовольствие от езды. Двухмоторная схема i-MMD даёт исключительную плавность.',
    workings: [
      { t: 'Honda i-MMD (двухмоторная)', b: 'На высоких скоростях ДВС напрямую связан с колёсами через муфту. На остальных режимах — ДВС как генератор, колёса — электромотор.' },
      { t: 'Последовательно-параллельная схема', b: 'Наиболее эффективная гибридная схема. Позволяет ДВС работать в оптимальном режиме вне зависимости от скорости.' },
      { t: 'Спортивный режим S', b: 'Повышает рекуперацию, ужесточает реакции на педаль газа и руль. Режим Econ снижает расход.' },
      { t: 'Paddleshift рекуперация', b: 'Четыре уровня рекуперативного торможения, управляемые лепестками на руле.' },
    ],
  },
  {
    id: 'hyundai-ioniq-h', type: 'hybrid', index: 12,
    name: 'Hyundai Ioniq Hybrid', tag: 'Гибрид',
    desc: 'Самый экономичный гибрид в своём классе с расходом 3.9 л/100 км и современным дизайном.',
    rangeMin: 1000, rangeMax: 1000, powerMin: 139, powerMax: 139, fuelMin: 3.9, fuelMax: 3.9,
    specs: [
      { v: '~1000 км', l: 'Запас хода' }, { v: '139 л.с.', l: 'Общая мощность' },
      { v: '3.9 л/100', l: 'Расход топлива' }, { v: '~88 г/км', l: 'Выбросы CO₂' },
      { v: '10.8 сек', l: 'Разгон 0–100' }, { v: '1.56 кВт·ч', l: 'АКБ' },
    ],
    features: 'Высочайшая экономичность, доступность, современный дизайн',
    pros: ['Рекордно низкий расход', 'Привлекательный дизайн', 'Просторный салон', 'Доступная цена'],
    cons: ['Скромная мощность', 'Жёсткая подвеска', 'Нет полного привода'],
    segment: 'budget', region: 'europe',
    rec: '<strong>Hyundai Ioniq Hybrid</strong> — лучший выбор по экономичности. 3.9 л/100 км — рекорд в классе. Для тех, кто экономит каждую каплю.',
    workings: [
      { t: 'Параллельная гибридная схема', b: 'ДВС и электромотор соединены с трансмиссией через 6-ступенчатый DCT (двойное сцепление).' },
      { t: 'DCT + электромотор', b: 'Электромотор интегрирован в коробку передач. При ускорении ток поступает сразу — без паузы переключения.' },
      { t: 'Aerodynamic Cd 0.24', b: 'Рекордно низкий аэродинамический коэффициент в классе. Кузов оптимизирован в аэродинамической трубе.' },
      { t: 'Рекуперация + солнечная крыша', b: 'Опциональная солнечная панель в крыше дополнительно подзаряжает АКБ.' },
    ],
  },
  {
    id: 'kia-niro-h', type: 'hybrid', index: 13,
    name: 'Kia Niro Hybrid', tag: 'Гибрид',
    desc: 'Компактный гибридный кроссовер — универсальный, практичный и удобный для города и трассы.',
    rangeMin: 900, rangeMax: 900, powerMin: 141, powerMax: 141, fuelMin: 4.5, fuelMax: 4.5,
    specs: [
      { v: '~900 км', l: 'Запас хода' }, { v: '141 л.с.', l: 'Общая мощность' },
      { v: '4.5 л/100', l: 'Расход топлива' }, { v: '~103 г/км', l: 'Выбросы CO₂' },
      { v: '11.1 сек', l: 'Разгон 0–100' }, { v: '1.56 кВт·ч', l: 'АКБ' },
    ],
    features: 'Универсальность, практичность, кроссоверный кузов',
    pros: ['Практичный кузов кроссовер', 'Доступная цена', 'Низкий расход для SUV', 'Просторный багажник'],
    cons: ['Нет полного привода', 'Скромная мощность', 'Посредственная шумоизоляция'],
    segment: 'budget', region: 'europe',
    rec: '<strong>Kia Niro Hybrid</strong> — лучший выбор для семьи, которой нужен практичный гибридный кроссовер без переплаты. Багажник 451 л.',
    workings: [
      { t: 'Параллельная схема + DCT', b: 'Как и Ioniq, использует ДВС Atkins 1.6 л с двойным сцеплением и встроенным электромотором.' },
      { t: 'Высокий клиренс 160 мм', b: 'Кроссоверная посадка и клиренс 160 мм позволяют уверенно ехать по плохим дорогам и снегу.' },
      { t: 'Smart Regeneration System', b: 'Система автоматически выбирает уровень рекуперации в зависимости от дорожной обстановки через камеру.' },
      { t: 'Eco Driving Assist', b: 'Система подсказывает оптимальную скорость и момент отпускания педали газа для максимальной экономии.' },
    ],
  },
  {
    id: 'lexus-rx-h', type: 'hybrid', index: 14,
    name: 'Lexus RX Hybrid', tag: 'Гибрид',
    desc: 'Премиальный гибридный кроссовер — высочайший комфорт, полный привод и мощный двигатель.',
    rangeMin: 850, rangeMax: 850, powerMin: 308, powerMax: 308, fuelMin: 6.0, fuelMax: 6.0,
    specs: [
      { v: '~850 км', l: 'Запас хода' }, { v: '308 л.с.', l: 'Общая мощность' },
      { v: '6.0 л/100', l: 'Расход топлива' }, { v: '~137 г/км', l: 'Выбросы CO₂' },
      { v: '7.7 сек', l: 'Разгон 0–100' }, { v: 'E-Four', l: 'Привод AWD' },
    ],
    features: 'Премиальный класс, E-Four AWD, высокий комфорт',
    pros: ['Полный привод E-Four', 'Исключительный комфорт', 'Безотказная надёжность', 'Тихая езда'],
    cons: ['Высокая цена', 'Расход выше конкурентов', 'Большие размеры'],
    segment: 'premium', region: 'russia',
    rec: '<strong>Lexus RX Hybrid</strong> — для требовательных водителей. AWD через задний электромотор, минимальный шум, максимальная надёжность.',
    workings: [
      { t: 'E-Four (электрический AWD)', b: 'Задний электромотор не связан механически с передним ДВС — полный привод без карданного вала.' },
      { t: 'Многорычажная подвеска', b: 'Четыре амортизатора с электронным управлением адаптируют жёсткость под дорогу каждые 10 мс.' },
      { t: 'Lexus Mark Levinson', b: 'Аудиосистема из 17 динамиков разработана с учётом акустики салона конкретного кузова.' },
      { t: 'Шумоизоляция', b: 'Двойные стёкла, акустический битум в кузове и специальные покрышки обеспечивают тишину ниже 40 дБ.' },
    ],
  },
  {
    id: 'ford-escape-h', type: 'hybrid', index: 15,
    name: 'Ford Escape Hybrid', tag: 'Гибрид',
    desc: 'Универсальный семейный гибридный кроссовер — практичность, экономичность и надёжность.',
    rangeMin: 900, rangeMax: 900, powerMin: 200, powerMax: 200, fuelMin: 5.5, fuelMax: 5.5,
    specs: [
      { v: '~900 км', l: 'Запас хода' }, { v: '200 л.с.', l: 'Общая мощность' },
      { v: '5.5 л/100', l: 'Расход топлива' }, { v: '~125 г/км', l: 'Выбросы CO₂' },
      { v: '9.1 сек', l: 'Разгон 0–100' }, { v: '14.4 кВт·ч', l: 'АКБ (PHEV)' },
    ],
    features: 'Семейный кроссовер, вместительность, PHEV-версия',
    pros: ['Практичный семейный кузов', 'PHEV-версия с зарядкой', 'Мощный гибрид', 'Полный привод AWD'],
    cons: ['Расход выше конкурентов', 'Средняя управляемость', 'Шумный ДВС'],
    segment: 'budget', region: 'europe',
    rec: '<strong>Ford Escape Hybrid</strong> — для больших семей. PHEV-версия позволяет ездить первые 50 км на электричестве. AWD для бездорожья.',
    workings: [
      { t: 'Параллельная гибридная схема', b: 'ДВС Atkinson 2.5 л работает совместно с двумя электромоторами через вариатор CVT.' },
      { t: 'PHEV-версия', b: 'Plug-in hybrid с батареей 14.4 кВт·ч и запасом хода 50 км только на электричестве.' },
      { t: 'Intelligent AWD', b: 'Задний мост с электромотором подключается автоматически при пробуксовке передних колёс.' },
      { t: 'Ford Co-Pilot360', b: 'Полный пакет ADAS: автоматическое торможение, слежение за полосой, распознавание пешеходов.' },
    ],
  },
];

/* ─── CURSOR ─── */
const cursor = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursorTrail');
let mx = 0, my = 0, tx = 0, ty = 0;
if (cursor) {
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
  });
  (function animateCursor() {
    tx += (mx - tx) * 0.12; ty += (my - ty) * 0.12;
    cursorTrail.style.left = tx + 'px'; cursorTrail.style.top = ty + 'px';
    requestAnimationFrame(animateCursor);
  })();
  document.querySelectorAll('a, button, .car-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
  });
}

/* ─── NAV ─── */
const mainNav = document.getElementById('mainNav');
const navBurger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('mobileMenu');
window.addEventListener('scroll', () => {
  mainNav.classList.toggle('scrolled', window.scrollY > 40);
});
navBurger.addEventListener('click', () => {
  navBurger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mm-link').forEach(a => {
  a.addEventListener('click', () => {
    navBurger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* ─── SMOOTH SCROLL ─── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ─── SCROLL REVEAL ─── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ─── HERO TITLE ─── */
document.querySelectorAll('.hero-title .line').forEach((line, i) => {
  setTimeout(() => line.classList.add('visible'), 400 + i * 200);
});

/* ─── KPD BARS ANIMATION ─── */
const kpdObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.kpd-bar').forEach(b => {
        const w = b.style.width;
        b.style.width = '0';
        setTimeout(() => b.style.width = w, 100);
      });
      kpdObs.disconnect();
    }
  });
}, { threshold: 0.3 });
const kpdSection = document.querySelector('.kpd-bars');
if (kpdSection) kpdObs.observe(kpdSection);

/* ─── GENERATE CARS SVG ─── */
function getElectricSVG() {
  return `<svg viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="68" cy="102" rx="24" ry="15" fill="#00ffff" opacity="0.08"/>
    <ellipse cx="212" cy="102" rx="24" ry="15" fill="#00ffff" opacity="0.08"/>
    <path d="M28 98 C28 98 38 66 65 58 L92 46 C105 38 140 32 158 32 C176 32 204 38 220 52 L248 72 C254 80 254 98 254 98 Z" fill="url(#elBodyGrad)" stroke="#00ffff" stroke-width="1.2"/>
    <path d="M90 60 L102 46 C112 38 136 34 156 34 C174 34 198 40 212 52 L226 62 Z" fill="#001a2e" opacity="0.85"/>
    <circle cx="68" cy="100" r="18" fill="#080c18" stroke="#00ffff" stroke-width="1.5"/>
    <circle cx="68" cy="100" r="9" fill="none" stroke="#00ffff" stroke-width="1" opacity="0.5"/>
    <circle cx="68" cy="100" r="3" fill="#00ffff" opacity="0.7"/>
    <circle cx="212" cy="100" r="18" fill="#080c18" stroke="#00ffff" stroke-width="1.5"/>
    <circle cx="212" cy="100" r="9" fill="none" stroke="#00ffff" stroke-width="1" opacity="0.5"/>
    <circle cx="212" cy="100" r="3" fill="#00ffff" opacity="0.7"/>
    <path d="M142 16 L134 26 L140 26 L132 38 L144 24 L138 24 Z" fill="#00ffff" opacity="0.85"/>
    <ellipse cx="250" cy="78" rx="5" ry="8" fill="#00ffff" opacity="0.5"/>
    <defs>
      <linearGradient id="elBodyGrad" x1="28" y1="58" x2="254" y2="110" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#001830"/>
        <stop offset="100%" stop-color="#003348"/>
      </linearGradient>
    </defs>
  </svg>`;
}
function getHybridSVG() {
  return `<svg viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="68" cy="102" rx="24" ry="15" fill="#00ff88" opacity="0.08"/>
    <ellipse cx="212" cy="102" rx="24" ry="15" fill="#00ff88" opacity="0.08"/>
    <path d="M24 98 C24 98 36 64 62 56 L96 44 C110 38 146 30 166 30 C186 30 212 38 228 54 L252 76 C258 84 258 98 258 98 Z" fill="url(#hybBodyGrad)" stroke="#00ff88" stroke-width="1.2"/>
    <path d="M94 62 L108 46 C120 38 144 32 164 32 C184 32 208 40 224 54 L240 64 Z" fill="#001a10" opacity="0.85"/>
    <circle cx="68" cy="100" r="18" fill="#080c18" stroke="#00ff88" stroke-width="1.5"/>
    <circle cx="68" cy="100" r="9" fill="none" stroke="#00ff88" stroke-width="1" opacity="0.5"/>
    <circle cx="68" cy="100" r="3" fill="#00ff88" opacity="0.7"/>
    <circle cx="212" cy="100" r="18" fill="#080c18" stroke="#00ff88" stroke-width="1.5"/>
    <circle cx="212" cy="100" r="9" fill="none" stroke="#00ff88" stroke-width="1" opacity="0.5"/>
    <circle cx="212" cy="100" r="3" fill="#00ff88" opacity="0.7"/>
    <circle cx="140" cy="16" r="9" fill="none" stroke="#00ff88" stroke-width="1.3" opacity="0.7"/>
    <path d="M136 16 L144 16M140 12 L140 20" stroke="#00ff88" stroke-width="1.3" stroke-linecap="round" opacity="0.7"/>
    <path d="M133 13 L136 16 M147 19 L144 16" stroke="#ff8800" stroke-width="1.3" stroke-linecap="round" opacity="0.7"/>
    <path d="M26 96 L18 100" stroke="#00ff88" stroke-width="1" opacity="0.25" stroke-dasharray="2 3"/>
    <ellipse cx="254" cy="80" rx="5" ry="8" fill="#00ff88" opacity="0.5"/>
    <defs>
      <linearGradient id="hybBodyGrad" x1="24" y1="56" x2="258" y2="110" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#001208"/>
        <stop offset="100%" stop-color="#002a14"/>
      </linearGradient>
    </defs>
  </svg>`;
}

/* ─── RENDER CARDS ─── */
function renderCards(cars) {
  const grid = document.getElementById('carsGrid');
  grid.innerHTML = '';
  cars.forEach((car, i) => {
    const isE = car.type === 'electric';
    const el = document.createElement('article');
    el.className = `car-card ${isE ? 'electric-card' : 'hybrid-card'}`;
    el.dataset.car = car.id;
    el.style.animationDelay = (i % 4) * 0.07 + 's';
    const rangeStr = car.rangeMin === car.rangeMax ? car.rangeMin + ' км' : car.rangeMin + '–' + car.rangeMax + ' км';
    const powerStr = car.powerMin === car.powerMax ? car.powerMin + ' л.с.' : car.powerMin + '–' + car.powerMax + ' л.с.';
    const charge = isE
      ? (car.chargeMin === car.chargeMax ? `${car.chargeMin} мин` : `${car.chargeMin}–${car.chargeMax} мин`)
      : `${car.fuelMin} л/100`;
    el.innerHTML = `
      <div class="card-glow ${isE ? 'electric-glow' : 'hybrid-glow'}"></div>
      <div class="card-inner">
        <div class="card-header">
          <span class="card-tag ${isE ? 'electric-tag' : 'hybrid-tag'}">${car.tag}</span>
          <span style="font-family:var(--font-mono);font-size:0.7rem;color:var(--text-dim)">#${String(car.index).padStart(2,'0')}</span>
        </div>
        <div class="card-svg">${isE ? getElectricSVG() : getHybridSVG()}</div>
        <h3 class="car-name">${car.name}</h3>
        <p class="car-desc">${car.desc}</p>
        <div class="car-specs-preview">
          <div class="spec-chip"><span>${isE ? '⚡' : '⛽'}</span>${rangeStr}</div>
          <div class="spec-chip"><span>⚙</span>${powerStr}</div>
          <div class="spec-chip"><span>${isE ? '🔌' : '💧'}</span>${charge}</div>
        </div>
        <button class="card-btn ${isE ? 'electric-btn' : 'hybrid-btn'}">
          <span>Подробнее</span>
          <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M9 12h6M12 9l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </button>
      </div>`;
    el.addEventListener('click', () => openModal(car.id));
    grid.appendChild(el);
    setTimeout(() => revealObs.observe(el), 0);
    document.querySelectorAll('a, button, .car-card').forEach(e => {
      e.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
      e.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });
  });
}
renderCards(CARS);

/* ─── FILTER & SEARCH ─── */
let activeFilter = 'all';
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    applyFilter();
  });
});
document.getElementById('carSearch').addEventListener('input', applyFilter);
function applyFilter() {
  const q = document.getElementById('carSearch').value.toLowerCase().trim();
  const filtered = CARS.filter(c => {
    const typeMatch = activeFilter === 'all' || c.type === activeFilter;
    const searchMatch = !q || c.name.toLowerCase().includes(q);
    return typeMatch && searchMatch;
  });
  renderCards(filtered);
  document.getElementById('noResults').style.display = filtered.length === 0 ? 'block' : 'none';
}

/* ─── COMPARE TABLE ─── */
function renderTable(cars) {
  const body = document.getElementById('compareBody');
  const maxRange = Math.max(...cars.map(c => c.rangeMax));
  const maxPower = Math.max(...cars.map(c => c.powerMax));
  body.innerHTML = '';
  cars.forEach(car => {
    const isE = car.type === 'electric';
    const rangeStr = car.rangeMin === car.rangeMax ? car.rangeMin + ' км' : car.rangeMin + '–' + car.rangeMax + ' км';
    const powerStr = car.powerMin === car.powerMax ? car.powerMin + ' л.с.' : car.powerMin + '–' + car.powerMax + ' л.с.';
    const chargeStr = isE
      ? (car.chargeMin === car.chargeMax ? `${car.chargeMin} мин` : `${car.chargeMin}–${car.chargeMax} мин`)
      : `${car.fuelMin} л/100 км`;
    const isBestRange = car.rangeMax === maxRange;
    const isBestPower = car.powerMax === maxPower;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="color:var(--text-dim);font-family:var(--font-mono);font-size:0.72rem">${car.index}</td>
      <td style="font-weight:600">${car.name}</td>
      <td><span class="${isE ? 'type-badge-e' : 'type-badge-h'}">${isE ? '⚡ Электро' : '♻ Гибрид'}</span></td>
      <td class="${isBestRange ? 'best-cell' : ''}">${isBestRange ? '🏆 ' : ''}${rangeStr}</td>
      <td class="${isBestPower ? 'best-cell' : ''}">${isBestPower ? '🏆 ' : ''}${powerStr}</td>
      <td>${chargeStr}</td>
      <td style="color:var(--text-muted);font-size:0.8rem">${car.features}</td>`;
    body.appendChild(tr);
  });
}
renderTable(CARS);

let sortDir = 1;
let currentSort = 'default';
document.querySelectorAll('.sort-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const s = btn.dataset.sort;
    if (s === currentSort) sortDir *= -1; else { sortDir = -1; currentSort = s; }
    const sorted = [...CARS].sort((a, b) => {
      if (s === 'range') return (b.rangeMax - a.rangeMax) * sortDir;
      if (s === 'power') return (b.powerMax - a.powerMax) * sortDir;
      return a.index - b.index;
    });
    renderTable(sorted);
  });
});

/* ─── CHARTS ─── */
Chart.defaults.color = '#7a8599';
Chart.defaults.font.family = "'Syne', sans-serif";
Chart.defaults.font.size = 11;

function buildCharts() {
  const labels = CARS.map(c => c.name.replace('Toyota ', 'T. ').replace('Hyundai ', 'Hy. ').replace('Chevrolet ', 'Chev. ').replace('Volkswagen ', 'VW ').replace('Ford ', 'F. ').replace('Honda ', 'Ho. ').replace('Nissan ', 'Ni. ').replace('Lexus ', 'L. ').replace(' Hybrid', 'H').replace(' Electric', 'E'));
  const ranges = CARS.map(c => c.rangeMax);
  const powers = CARS.map(c => c.powerMax);
  const bgColors = CARS.map(c => c.type === 'electric' ? 'rgba(0,255,255,0.55)' : 'rgba(0,255,136,0.55)');
  const borderColors = CARS.map(c => c.type === 'electric' ? '#00ffff' : '#00ff88');

  const commonOpts = {
    responsive: true, maintainAspectRatio: true,
    plugins: { legend: { display: false } },
    scales: {
      x: {
        ticks: { color: '#4a5568', maxRotation: 45, font: { size: 9 } },
        grid: { color: 'rgba(255,255,255,0.04)' },
      },
      y: {
        ticks: { color: '#4a5568' },
        grid: { color: 'rgba(255,255,255,0.05)' },
        border: { color: 'rgba(255,255,255,0.05)' },
      }
    },
    animation: { duration: 1200, easing: 'easeOutQuart' },
  };

  new Chart(document.getElementById('rangeChart'), {
    type: 'bar',
    data: { labels, datasets: [{ data: ranges, backgroundColor: bgColors, borderColor: borderColors, borderWidth: 1, borderRadius: 4 }] },
    options: { ...commonOpts, scales: { ...commonOpts.scales, y: { ...commonOpts.scales.y, title: { display: true, text: 'км', color: '#4a5568' } } } },
  });

  new Chart(document.getElementById('powerChart'), {
    type: 'bar',
    data: { labels, datasets: [{ data: powers, backgroundColor: bgColors, borderColor: borderColors, borderWidth: 1, borderRadius: 4 }] },
    options: { ...commonOpts, scales: { ...commonOpts.scales, y: { ...commonOpts.scales.y, title: { display: true, text: 'л.с.', color: '#4a5568' } } } },
  });

  new Chart(document.getElementById('kpdChart'), {
    type: 'bar',
    data: {
      labels: ['Электромотор\n(Tesla/Nissan)', 'Электромотор\n(BMW/Hyundai)', 'ДВС Аткинсон\n(Prius)', 'ДВС Аткинсон\n(Camry/Ioniq)', 'Обычный ДВС\n(бензин)', 'Обычный ДВС\n(дизель)', 'Мотоцикл'],
      datasets: [{
        label: 'КПД (%)',
        data: [95, 90, 41, 39, 30, 38, 28],
        backgroundColor: ['rgba(0,255,255,0.6)','rgba(0,255,255,0.5)','rgba(0,255,136,0.6)','rgba(0,255,136,0.5)','rgba(255,100,50,0.5)','rgba(255,150,50,0.5)','rgba(150,100,50,0.4)'],
        borderColor: ['#00ffff','#00ffff','#00ff88','#00ff88','#ff6432','#ff9632','#966432'],
        borderWidth: 1, borderRadius: 5,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      plugins: { legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` КПД: ${ctx.raw}%`
          }
        }
      },
      scales: {
        x: { ticks: { color: '#4a5568', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.04)' } },
        y: { min: 0, max: 100, ticks: { color: '#4a5568', callback: v => v + '%' }, grid: { color: 'rgba(255,255,255,0.05)' } }
      },
      animation: { duration: 1400, easing: 'easeOutQuart' },
    },
  });
}
// Build charts when section is visible
const chartsObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { buildCharts(); chartsObs.disconnect(); } });
}, { threshold: 0.2 });
const chartsSection = document.querySelector('.charts-section');
if (chartsSection) chartsObs.observe(chartsSection);

/* ─── MODAL ─── */
const overlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');

function openModal(carId) {
  const car = CARS.find(c => c.id === carId);
  if (!car) return;
  const isE = car.type === 'electric';
  const accentColor = isE ? 'var(--electric)' : 'var(--hybrid)';
  const tagClass = isE ? 'm-electric' : 'm-hybrid';
  const recClass = isE ? '' : 'hybrid-rec';
  const rangeStr = car.rangeMin === car.rangeMax ? car.rangeMin + ' км' : car.rangeMin + '–' + car.rangeMax + ' км';

  modalContent.innerHTML = `
    <span class="m-tag ${tagClass}">${car.tag}</span>
    <h2>${car.name}</h2>
    <p class="m-subtitle">${car.desc}</p>
    <div class="m-section">
      <div class="m-section-title">Технические характеристики</div>
      <div class="m-specs-grid">
        ${car.specs.map(s => `
          <div class="m-spec-item">
            <div class="m-spec-value" style="color:${accentColor}">${s.v}</div>
            <div class="m-spec-label">${s.l}</div>
          </div>`).join('')}
      </div>
    </div>
    <div class="m-section">
      <div class="m-section-title">Принцип работы</div>
      <div class="m-workings">
        ${car.workings.map((w, i) => `
          <div class="m-work-step">
            <div class="m-step-num">0${i + 1}</div>
            <div class="m-step-content"><h4>${w.t}</h4><p>${w.b}</p></div>
          </div>`).join('')}
      </div>
    </div>
    <div class="m-section">
      <div class="m-section-title">Плюсы и минусы</div>
      <div class="m-pros-cons">
        <div class="m-pros">
          <h4>✓ Преимущества</h4>
          <ul>${car.pros.map(p => `<li>${p}</li>`).join('')}</ul>
        </div>
        <div class="m-cons">
          <h4>✕ Недостатки</h4>
          <ul>${car.cons.map(c => `<li>${c}</li>`).join('')}</ul>
        </div>
      </div>
    </div>
    <div class="m-section">
      <div class="m-section-title">Рекомендация</div>
      <div class="m-recommendation ${recClass}">
        <div class="m-rec-title">Кому подходит?</div>
        <p>${car.rec}</p>
      </div>
    </div>`;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ─── QUIZ ─── */
const QUESTIONS = [
  {
    q: 'Где вы в основном ездите?',
    opts: [
      { t: '🏙 В городе (пробки, короткие маршруты)', val: 'city' },
      { t: '🛣 По трассам и дальним маршрутам', val: 'highway' },
      { t: '🗺 Везде поровну', val: 'mixed' },
    ]
  },
  {
    q: 'Есть ли у вас зарядка дома или на работе?',
    opts: [
      { t: '✅ Да, есть розетка / зарядная станция', val: 'charge_yes' },
      { t: '❌ Нет, зарядиться негде', val: 'charge_no' },
      { t: '🤔 Можно организовать', val: 'charge_maybe' },
    ]
  },
  {
    q: 'Типичный маршрут за день?',
    opts: [
      { t: '📍 До 100 км', val: 'short' },
      { t: '📍 100–300 км', val: 'medium' },
      { t: '📍 Больше 300 км', val: 'long' },
    ]
  },
  {
    q: 'Что для вас важнее?',
    opts: [
      { t: '🌱 Экологичность и экономия на ТО', val: 'eco' },
      { t: '🚗 Независимость от инфраструктуры', val: 'independent' },
      { t: '⚡ Динамика и технологии', val: 'performance' },
    ]
  },
];
let answers = [];
let step = 0;

function renderQuiz() {
  const quizCard = document.getElementById('quizCard');
  const quizResult = document.getElementById('quizResult');
  quizCard.style.display = 'block';
  quizResult.style.display = 'none';
  answers = []; step = 0;
  showStep(0);
}

function showStep(s) {
  const q = QUESTIONS[s];
  document.getElementById('quizStepLabel').textContent = `Вопрос ${s + 1} / ${QUESTIONS.length}`;
  document.getElementById('quizQuestion').textContent = q.q;
  document.getElementById('quizProgressBar').style.width = (s / QUESTIONS.length * 100) + '%';
  const opts = document.getElementById('quizOptions');
  opts.innerHTML = '';
  q.opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt';
    btn.textContent = opt.t;
    btn.addEventListener('click', () => {
      answers.push(opt.val);
      if (step < QUESTIONS.length - 1) { step++; showStep(step); }
      else showResult();
    });
    opts.appendChild(btn);
  });
}

function showResult() {
  document.getElementById('quizProgressBar').style.width = '100%';
  const [where, charge, dist, prio] = answers;
  let isElectric = 0;
  if (where === 'city') isElectric += 2;
  if (where === 'highway') isElectric -= 2;
  if (charge === 'charge_yes') isElectric += 2;
  if (charge === 'charge_no') isElectric -= 3;
  if (dist === 'short') isElectric += 2;
  if (dist === 'long') isElectric -= 2;
  if (prio === 'eco' || prio === 'performance') isElectric += 1;
  if (prio === 'independent') isElectric -= 2;

  const electric = isElectric >= 0;
  const recCars = CARS.filter(c => c.type === (electric ? 'electric' : 'hybrid')).slice(0, 4);

  document.getElementById('quizCard').style.display = 'none';
  const res = document.getElementById('quizResult');
  res.style.display = 'block';
  document.getElementById('qrIcon').textContent = electric ? '⚡' : '♻';
  document.getElementById('qrTitle').textContent = electric ? 'Вам подходит электромобиль!' : 'Вам подходит гибрид!';
  document.getElementById('qrText').textContent = electric
    ? 'Исходя из ваших ответов, электромобиль покроет все ваши потребности. Нулевые выбросы, экономия на ТО и зарядка дома — идеальная формула.'
    : 'По вашему профилю гибридный автомобиль — лучший выбор. Независимость от зарядек, низкий расход и полная свобода маршрутов.';
  const carsDiv = document.getElementById('qrCars');
  carsDiv.innerHTML = '<strong style="display:block;margin-bottom:10px;font-size:0.8rem;color:var(--text-muted)">Рекомендуемые модели:</strong>';
  recCars.forEach(c => {
    const chip = document.createElement('span');
    chip.className = 'qr-car-chip';
    chip.textContent = c.name;
    chip.style.cursor = 'pointer';
    chip.addEventListener('click', () => { openModal(c.id); });
    carsDiv.appendChild(chip);
  });
}

document.getElementById('quizRestart').addEventListener('click', renderQuiz);
renderQuiz();

/* ─── PARALLAX ORBS ─── */
document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;
  const o1 = document.querySelector('.orb-1');
  const o2 = document.querySelector('.orb-2');
  const o3 = document.querySelector('.orb-3');
  if (o1) o1.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
  if (o2) o2.style.transform = `translate(${-x * 15}px, ${-y * 15}px)`;
  if (o3) o3.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
});
