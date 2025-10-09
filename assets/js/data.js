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
      popular: true
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
      popular: true
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
      popular: false
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
      popular: true
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
      popular: false
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
      popular: true
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
      popular: true
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
      popular: false
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
      popular: true
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
      popular: false
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
      popular: true
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
      popular: true
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
      popular: false
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
      popular: false
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
      popular: true
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
      popular: false
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
      popular: true
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
      popular: true
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
      popular: true
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
      popular: false
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
      popular: false
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
      popular: true
    }
  ]
};
