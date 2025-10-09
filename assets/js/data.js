const catalog = {
  meta: {
    all: {
      title: 'Все изделия',
      description: 'Сувениры, фигурки, бытовые находки и абстрактные арт-объекты — выберите то, что оживит ваш мир.',
      badge: 'Каталог'
    },
    souvenirs: {
      title: 'Сувениры и подарки',
      description: 'Неоновые брелоки, магниты и фирменные подставки. Готовые идеи для подарков и корпоративной айдентики.',
      badge: 'Сувениры'
    },
    figures: {
      title: 'Фигурки персонажей',
      description: 'Герои будущего, кибер-мифология и коллекционные диорамы, созданные с высочайшей детализацией.',
      badge: 'Фигурки'
    },
    household: {
      title: 'Бытовые решения',
      description: 'Органайзеры, подсветка и полезные аксессуары для дома и рабочего пространства.',
      badge: 'Бытовое'
    },
    abstract: {
      title: 'Абстрактные арт-объекты',
      description: 'Фрактальные скульптуры, неоновые спирали и световые решётки для тех, кто ищет нестандартную эстетику.',
      badge: 'Абстрактное'
    },
    custom: {
      title: 'Изделие на заказ',
      description: 'Опишите идею, прикрепите референсы и получите персональный расчёт. Мы на связи в WhatsApp и Telegram.',
      badge: 'Под заказ'
    }
  },
  products: [
    {
      id: 'souvenir-neon-key',
      name: 'Брелок «Neon Key»',
      category: 'souvenirs',
      type: 'Брелоки',
      price: 650,
      description: 'Неоновый акцент для ключей или рюкзака с голографической вставкой.',
      gradient: 'linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%)',
      glow: 'rgba(56, 189, 248, 0.45)',
      popular: true,
      details: [
        { label: 'Материал', value: 'PLA Neon с эпоксидным покрытием и УФ-защитой' },
        { label: 'Происхождение', value: 'Авторский сувенир студии NeonForge' },
        { label: 'Размер', value: 'Высота 4 см, ширина 3,2 см' },
        { label: 'Особенности', value: 'Голографическая вставка с неоновой подсветкой' }
      ]
    },
    {
      id: 'souvenir-city-pulse',
      name: 'Брелок «City Pulse»',
      category: 'souvenirs',
      type: 'Брелоки',
      price: 720,
      description: 'Двухцветная печать с рельефным логотипом вашего города или бренда.',
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #f472b6 100%)',
      glow: 'rgba(14, 165, 233, 0.45)',
      popular: true,
      details: [
        { label: 'Материал', value: 'Двухцветный PETG с глянцевой постобработкой' },
        { label: 'Источники вдохновения', value: 'Неоновые вывески мегаполисов и городской мерч-культура' },
        { label: 'Размер', value: '4,5 × 3 см, толщина 6 мм' },
        { label: 'Особенности', value: 'Рельефный логотип и персонализация под бренд заказчика' }
      ]
    },
    {
      id: 'souvenir-flux-skyline',
      name: 'Магнит «Flux Skyline»',
      category: 'souvenirs',
      type: 'Магниты',
      price: 590,
      description: 'Неоновый силуэт мегаполиса с мягким свечением в темноте.',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #f472b6 100%)',
      glow: 'rgba(99, 102, 241, 0.45)',
      popular: false,
      details: [
        { label: 'Материал', value: 'PLA с добавлением люминофора длительного свечения' },
        { label: 'Источники вдохновения', value: 'Скайлайн неонового города в стиле synthwave' },
        { label: 'Размер', value: 'Длина 6 см, высота 4 см' },
        { label: 'Особенности', value: 'Свечение до 6 часов после зарядки от света' }
      ]
    },
    {
      id: 'souvenir-holodock',
      name: 'Подставка для визиток «HoloDock»',
      category: 'souvenirs',
      type: 'Сувениры',
      price: 1450,
      description: 'Глянцевое стекло-напыление, подсветка и отделение под NFC-метку.',
      gradient: 'linear-gradient(135deg, #a855f7 0%, #f97316 100%)',
      glow: 'rgba(168, 85, 247, 0.45)',
      popular: true,
      details: [
        { label: 'Материал', value: 'ABS Pro с матовым софт-тач покрытием' },
        { label: 'Назначение', value: 'Фирменные презентации, ресепшн, офисные стойки' },
        { label: 'Размер', value: '12 × 7 × 4 см' },
        { label: 'Особенности', value: 'Встроенное отделение под NFC-метку и подсветку логотипа' }
      ]
    },
    {
      id: 'souvenir-lumen-tag',
      name: 'Светящийся логотип «Lumen Tag»',
      category: 'souvenirs',
      type: 'Сувениры',
      price: 1800,
      description: 'Настольный логотип с гравировкой, реагирующей на окружающий свет.',
      gradient: 'linear-gradient(135deg, #f472b6 0%, #38bdf8 100%)',
      glow: 'rgba(244, 114, 182, 0.45)',
      popular: false,
      details: [
        { label: 'Материал', value: 'Прозрачная SLA смола с неоновой заливкой' },
        { label: 'Назначение', value: 'Фирменные логотипы, сценическое оформление, стойки ресепшн' },
        { label: 'Высота', value: '18 см (толщина 2 см)' },
        { label: 'Особенности', value: 'Фотолюминесцентная гравировка с плавным свечением' }
      ]
    },
    {
      id: 'figure-cyber-samurai',
      name: 'Фигурка «Кибер самурай»',
      category: 'figures',
      type: 'Персонажи',
      price: 4200,
      description: 'Коллекционная фигурка с глянцевыми пластинами и неоновым катаной.',
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #a855f7 100%)',
      glow: 'rgba(14, 165, 233, 0.45)',
      popular: true,
      details: [
        { label: 'Материал', value: 'Фотополимерная смола с металлизированным покрытием и гибкими вставками' },
        { label: 'Вдохновение', value: 'Киберпанк 2077 и классический Blade Runner' },
        { label: 'Высота', value: '24 см (масштаб 1:10)' },
        { label: 'Особенности', value: 'Сменные клинки и подсветка катаны USB-питанием' }
      ]
    },
    {
      id: 'figure-galaxy-dragon',
      name: 'Фигурка «Galaxy Dragon»',
      category: 'figures',
      type: 'Персонажи',
      price: 5100,
      description: 'Дракон с прозрачными крыльями и световыми прожилками.',
      gradient: 'linear-gradient(135deg, #22d3ee 0%, #f97316 100%)',
      glow: 'rgba(34, 211, 238, 0.45)',
      popular: true,
      details: [
        { label: 'Материал', value: 'Прозрачная смола + гибкий TPU для мембран крыльев' },
        { label: 'Вдохновение', value: '«Как приручить дракона» и космическая эстетика' },
        { label: 'Размах крыльев', value: '28 см, длина фигуры 18 см' },
        { label: 'Особенности', value: 'Встроенные micro-LED прожилки с питанием от батареи CR2032' }
      ]
    },
    {
      id: 'figure-retrobot',
      name: 'Фигурка «RetroBot»',
      category: 'figures',
      type: 'Ретро',
      price: 3800,
      description: 'Вдохновлённый классикой 80-х робот с сменными панелями.',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
      glow: 'rgba(99, 102, 241, 0.45)',
      popular: false,
      details: [
        { label: 'Материал', value: 'PLA RetroChrome с металлической пудрой' },
        { label: 'Вдохновение', value: 'Классические мультсериалы 80-х «Трансформеры» и «Вольтрон»' },
        { label: 'Высота', value: '20 см, масштаб 1:12' },
        { label: 'Особенности', value: 'Сменные магнитные панели и шарнирные конечности' }
      ]
    },
    {
      id: 'figure-stellar-mage',
      name: 'Фигурка «Stellar Mage»',
      category: 'figures',
      type: 'Персонажи',
      price: 4600,
      description: 'Маг с полупрозрачным плащом и подсвеченными рунами.',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #38bdf8 100%)',
      glow: 'rgba(139, 92, 246, 0.45)',
      popular: true,
      details: [
        { label: 'Материал', value: 'Фотополимер LUX с акриловой ручной росписью' },
        { label: 'Вдохновение', value: 'Final Fantasy XIV и маги астральной школы' },
        { label: 'Высота', value: '22 см (масштаб 1:9)' },
        { label: 'Особенности', value: 'Подсветка рун, полупрозрачный плащ и сменный посох' }
      ]
    },
    {
      id: 'figure-nebula-runner',
      name: 'Диорама «Nebula Runner»',
      category: 'figures',
      type: 'Диорамы',
      price: 6800,
      description: 'Мини-сцена с эффектом движения и подсветкой трассы.',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #7c3aed 100%)',
      glow: 'rgba(239, 68, 68, 0.45)',
      popular: false,
      details: [
        { label: 'Материал', value: 'SLA смола высокой детализации и алюминиевая платформа' },
        { label: 'Вдохновение', value: 'Tron Legacy и неоновые гонки будущего' },
        { label: 'Размер диорамы', value: '26 × 18 см, высота 15 см' },
        { label: 'Особенности', value: 'Эффект движения благодаря печати с motion blur и световодам' }
      ]
    },
    {
      id: 'household-cable-glow',
      name: 'Органайзер «Cable Glow»',
      category: 'household',
      type: 'Органайзеры',
      price: 2100,
      description: 'Модульная система для кабелей с подсветкой и NFC-метками.',
      gradient: 'linear-gradient(135deg, #38bdf8 0%, #22d3ee 100%)',
      glow: 'rgba(56, 189, 248, 0.45)',
      popular: true,
      details: [
        { label: 'Материал', value: 'Ударопрочный ABS с матовой текстурой' },
        { label: 'Вместимость', value: 'До 12 кабелей и аксессуаров' },
        { label: 'Размер', value: '22 × 8 × 4 см, модульная конструкция' },
        { label: 'Особенности', value: 'Набор NFC-меток и кабель-каналы с подсветкой' }
      ]
    },
    {
      id: 'household-orbit-home',
      name: 'Ночник «Orbit Home»',
      category: 'household',
      type: 'Освещение',
      price: 3200,
      description: 'Сферический ночник с режимом дыхания и сенсорным управлением.',
      gradient: 'linear-gradient(135deg, #a855f7 0%, #fbbf24 100%)',
      glow: 'rgba(168, 85, 247, 0.45)',
      popular: true,
      details: [
        { label: 'Материал', value: 'PETG с рассеивателем и встроенной светодиодной матрицей' },
        { label: 'Высота', value: '18 см, диаметр сферы 14 см' },
        { label: 'Питание', value: 'USB-C, 3 режима яркости и режим дыхания' },
        { label: 'Особенности', value: 'Сенсорное управление и адаптация к освещению помещения' }
      ]
    },
    {
      id: 'household-wave-stand',
      name: 'Подставка «Wave Stand»',
      category: 'household',
      type: 'Органайзеры',
      price: 2700,
      description: 'Скульптурная подставка для гарнитуры и аксессуаров.',
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%)',
      glow: 'rgba(14, 165, 233, 0.45)',
      popular: false,
      details: [
        { label: 'Материал', value: 'PLA Carbon с карбоновым волокном' },
        { label: 'Размер', value: '19 × 11 × 17 см' },
        { label: 'Вместимость', value: 'Гарнитура, геймпад и три аксессуара' },
        { label: 'Особенности', value: 'Антискользящие ребра и скрытый канал для кабеля' }
      ]
    },
    {
      id: 'household-lumen-smile',
      name: 'Держатель «Lumen Smile»',
      category: 'household',
      type: 'Ванная',
      price: 1900,
      description: 'Светящаяся станция для зубных щёток с ультрафиолетовой обработкой.',
      gradient: 'linear-gradient(135deg, #f472b6 0%, #38bdf8 100%)',
      glow: 'rgba(244, 114, 182, 0.45)',
      popular: false,
      details: [
        { label: 'Материал', value: 'Медицинский PETG с гладкой гигиеничной поверхностью' },
        { label: 'Вместимость', value: 'До 4 щёток и тюбик пасты' },
        { label: 'Фишка', value: 'Ультрафиолетовая стерилизация и 10-минутный таймер' },
        { label: 'Особенности', value: 'Крепление без сверления и подсветка чистоты' }
      ]
    },
    {
      id: 'household-vector-hook',
      name: 'Вешалка «Vector Hook»',
      category: 'household',
      type: 'Хранение',
      price: 2400,
      description: 'Набор из трёх магнитных крючков с нагрузкой до 5 кг каждый.',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)',
      glow: 'rgba(99, 102, 241, 0.45)',
      popular: true,
      details: [
        { label: 'Материал', value: 'Нейлон, армированный углеволокном' },
        { label: 'Нагрузка', value: 'До 5 кг на крючок' },
        { label: 'Комплектация', value: '3 крючка, магнитные площадки и комплект крепежа' },
        { label: 'Особенности', value: 'Магнитное основание и неоновая кромка для навигации' }
      ]
    },
    {
      id: 'household-geo-tray',
      name: 'Поднос «Geo Tray»',
      category: 'household',
      type: 'Кухня',
      price: 2300,
      description: 'Геометрический поднос с антискользящим покрытием и неоновой кромкой.',
      gradient: 'linear-gradient(135deg, #f97316 0%, #22d3ee 100%)',
      glow: 'rgba(249, 115, 22, 0.45)',
      popular: false,
      details: [
        { label: 'Материал', value: 'PLA FoodSafe с защитной пропиткой' },
        { label: 'Диаметр', value: '26 см, высота борта 3 см' },
        { label: 'Покрытие', value: 'Антискользящий гексагональный рельеф' },
        { label: 'Особенности', value: 'Неоновая кромка и термостойкость до 80 °C' }
      ]
    },
    {
      id: 'household-photon-planter',
      name: 'Горшок «Photon Planter»',
      category: 'household',
      type: 'Декор',
      price: 2900,
      description: 'Самополивной горшок с подсветкой роста и индикатором влаги.',
      gradient: 'linear-gradient(135deg, #10b981 0%, #8b5cf6 100%)',
      glow: 'rgba(16, 185, 129, 0.45)',
      popular: true,
      details: [
        { label: 'Материал', value: 'Биопластик с армированием стекловолокном' },
        { label: 'Размер', value: 'Диаметр 18 см, высота 20 см' },
        { label: 'Особенности', value: 'Самополивная система с датчиком влажности и индикатором' },
        { label: 'Подсветка', value: 'RGB-лента для ночного режима роста растений' }
      ]
    },
    {
      id: 'abstract-fractal-bloom',
      name: 'Скульптура «Fractal Bloom»',
      category: 'abstract',
      type: 'Скульптуры',
      price: 5400,
      description: 'Фрактальное дерево с плавной подсветкой и полированными гранями.',
      gradient: 'linear-gradient(135deg, #f472b6 0%, #8b5cf6 100%)',
      glow: 'rgba(244, 114, 182, 0.45)',
      popular: true,
      details: [
        { label: 'Материал', value: 'Премиальная смола LUX с сатиновым покрытием' },
        { label: 'Высота', value: '28 см, диаметр основания 12 см' },
        { label: 'Вдохновение', value: 'Фрактальные структуры природы и биолюминесценция' },
        { label: 'Особенности', value: 'Градиентное внутреннее свечение с плавной анимацией' }
      ]
    },
    {
      id: 'abstract-void-helix',
      name: 'Скульптура «Void Helix»',
      category: 'abstract',
      type: 'Скульптуры',
      price: 6200,
      description: 'Спираль в форме тора с эффектом бесконечного отражения.',
      gradient: 'linear-gradient(135deg, #22d3ee 0%, #7c3aed 100%)',
      glow: 'rgba(34, 211, 238, 0.45)',
      popular: true,
      details: [
        { label: 'Материал', value: 'SLA смола с зеркальной алюминиевой подложкой' },
        { label: 'Высота', value: '32 см, диаметр 14 см' },
        { label: 'Вдохновение', value: 'Киновселенная Marvel и порталы Doctor Strange' },
        { label: 'Особенности', value: 'Эффект бесконечного зеркального туннеля Infinity Mirror' }
      ]
    },
    {
      id: 'abstract-quantum-fold',
      name: 'Объект «Quantum Fold»',
      category: 'abstract',
      type: 'Объекты',
      price: 4700,
      description: 'Сложенные плоскости с градиентной подсветкой и зеркальной базой.',
      gradient: 'linear-gradient(135deg, #38bdf8 0%, #f97316 100%)',
      glow: 'rgba(56, 189, 248, 0.45)',
      popular: false,
      details: [
        { label: 'Материал', value: 'PLA высокой плотности и анодированный алюминий' },
        { label: 'Размер', value: '24 × 18 × 16 см' },
        { label: 'Назначение', value: 'Акцент для переговорных и зон ожидания hi-tech' },
        { label: 'Особенности', value: 'Сгибы с подсветкой по технологии Edge Glow' }
      ]
    },
    {
      id: 'abstract-aurora-spiral',
      name: 'Вихрь «Aurora Spiral»',
      category: 'abstract',
      type: 'Объекты',
      price: 5100,
      description: 'Легкая скульптура с динамической подсветкой 360°.',
      gradient: 'linear-gradient(135deg, #34d399 0%, #a855f7 100%)',
      glow: 'rgba(52, 211, 153, 0.45)',
      popular: false,
      details: [
        { label: 'Материал', value: 'Прозрачный PETG с лазерной полировкой' },
        { label: 'Высота', value: '30 см, основание 10 см' },
        { label: 'Вдохновение', value: 'Северное сияние и эстетика sci-fi' },
        { label: 'Особенности', value: 'Динамическое освещение 360° с плавной сменой оттенков' }
      ]
    },
    {
      id: 'abstract-lattice-light',
      name: 'Лампа «Lattice Light»',
      category: 'abstract',
      type: 'Освещение',
      price: 5800,
      description: 'Решётчатая лампа с адаптивной температурой света.',
      gradient: 'linear-gradient(135deg, #fbbf24 0%, #6366f1 100%)',
      glow: 'rgba(251, 191, 36, 0.45)',
      popular: true,
      details: [
        { label: 'Материал', value: 'Поликарбонат и алюминиевая рама' },
        { label: 'Высота', value: '35 см, ширина 14 см' },
        { label: 'Управление', value: 'Bluetooth-приложение с пресетами температуры цвета' },
        { label: 'Особенности', value: 'Сменные кассеты рассеивающей решётки и режим тёплого/холодного света' }
      ]
    }
  ]
};
