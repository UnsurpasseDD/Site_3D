const catalog = {
  meta: {
    all: {
      title: 'Все изделия',
      description: 'Нейронные лампы, функциональные прототипы, украшения будущего и учебные наборы — соберите свою подборку.',
      badge: 'Каталог'
    },
    decor: {
      title: 'Интерьер и декор',
      description: 'Неоновые светильники, арт-объекты и вазы с подсветкой для квартир, студий и лаунж-пространств.',
      badge: 'Декор'
    },
    tech: {
      title: 'Технологии и прототипы',
      description: 'Корпуса устройств, крепления, детали для робототехники и инженерные прототипы с высокой точностью.',
      badge: 'Инженерия'
    },
    fashion: {
      title: 'Fashion и аксессуары',
      description: 'Дизайнерские украшения, маски, элементы косплея и wearables для мероприятий и сценических выступлений.',
      badge: 'Fashion'
    },
    education: {
      title: 'Образование и наука',
      description: 'Молекулы, архитектурные модели, наборы для STEM-проектов и учебные пособия для школ и вузов.',
      badge: 'Наука'
    }
  },
  products: [
    {
      id: 'nf-decor-01',
      name: 'Неоновая лампа "Flux"',
      category: 'decor',
      type: 'Светильники',
      price: 8900,
      description: 'Акриловая лампа с RGB-подсветкой и голосовым управлением.',
      popular: true
    },
    {
      id: 'nf-decor-02',
      name: 'Ваза "HoloWave"',
      category: 'decor',
      type: 'Вазы',
      price: 5200,
      description: 'Сложная геометрия и полу-прозрачный поликарбонат с неоновыми гранями.',
      popular: false
    },
    {
      id: 'nf-decor-03',
      name: 'Арт-панно "Nebula"',
      category: 'decor',
      type: 'Панно',
      price: 11900,
      description: 'Объёмное панно с динамической подсветкой, синхронизируется с музыкой.',
      popular: true
    },
    {
      id: 'nf-tech-01',
      name: 'Корпус для дрона "AeroShell"',
      category: 'tech',
      type: 'Корпуса',
      price: 13400,
      description: 'Лёгкий корпус с карбоновыми вставками и виброгасящими узлами.',
      popular: true
    },
    {
      id: 'nf-tech-02',
      name: 'Крепление для сервопривода',
      category: 'tech',
      type: 'Крепления',
      price: 2400,
      description: 'Инженерный нейлон, выдерживает нагрузку до 50 кг.',
      popular: false
    },
    {
      id: 'nf-tech-03',
      name: 'Прототип смарт-колонки',
      category: 'tech',
      type: 'Прототипы',
      price: 17800,
      description: 'Многоразовый корпус с акустической обработкой и вставками под электронику.',
      popular: true
    },
    {
      id: 'nf-fashion-01',
      name: 'Колье "Aurora Circuit"',
      category: 'fashion',
      type: 'Украшения',
      price: 7600,
      description: 'Лёгкое украшение из биосовместимого пластика с подсветкой.',
      popular: true
    },
    {
      id: 'nf-fashion-02',
      name: 'Маска "Cyber Shade"',
      category: 'fashion',
      type: 'Маски',
      price: 5400,
      description: 'Регулируемые крепления и сменные блоки подсветки для мероприятий.',
      popular: true
    },
    {
      id: 'nf-fashion-03',
      name: 'Браслет "Pulse Sync"',
      category: 'fashion',
      type: 'Украшения',
      price: 3200,
      description: 'Отслеживает ритм и подсвечивает пульсацию цветом.',
      popular: false
    },
    {
      id: 'nf-edu-01',
      name: 'STEM-набор "Orbit Lab"',
      category: 'education',
      type: 'Наборы',
      price: 6800,
      description: 'Планетарий и набор заданий по физике орбит.',
      popular: true
    },
    {
      id: 'nf-edu-02',
      name: 'Модель молекулы ДНК',
      category: 'education',
      type: 'Модели',
      price: 4500,
      description: 'Многоцветная модель в масштабе 1:10, подходит для лабораторий.',
      popular: false
    },
    {
      id: 'nf-edu-03',
      name: 'Архитектурный макет "NeoCity"',
      category: 'education',
      type: 'Макеты',
      price: 21200,
      description: 'Город будущего с подсветкой улиц и транспорта.',
      popular: true
    }
  ]
};
