module.exports = {
    settings: {
      title: 'Яндекс дом',
      copyright: "© 2001-2018 ООО «Яндекс»",
      imagesFolder: 'images/'  // path in build folder
    },
    header: {
        menu: [
            {
                name: 'Сводка',
                href: '#'
            },
            {
                name: 'Устройства',
                href: '#'},
            {
                name: 'Сценарии',
                href: '#'},
        ],
    },
    main: {
        title: { name: 'Главное', arrows: false },
        cards: [
            {
                title: 'Philips Cooler',
                image: 'icon_temperature',
                additional: 'Начнет охлаждать в 16:30'
            },
            {
                title: 'Xiaomi Yeelight LED Smart Bulb',
                image: 'icon_sun',
                additional: 'Включится в 17:00 '
            },
            {
                title: 'Чугунная батарея',
                image: 'icon_temperature',
                additional: 'Работает всегда'
            },
            {
                title: 'Xiaomi Yeelight LED Smart Bulb',
                image: 'icon_sun',
                additional: 'Включится в 17:00 '
            },
            {
                fake:true,
                image: 'darrow',
            },
        ],
        user: {
            name: 'Геннадий',
            summary: 'Двери и окна закрыты, сигнализация включена'
        },
        weather: [
            {
                title: 'Дома',
                temperature: '+23',
                image: false
            },
            {
                title: 'За окном',
                temperature: '+19',
                image: 'src'
            },

        ]
    },
    favoriteSc: {
        title: { name: 'Избранные сценарии', arrows: true },
        cards: [
            {
                title: 'Выключить весь свет в доме и во дворе',
                image: 'icon_sun',
                active: true,
            },
           {
                title: 'Выключить весь свет в доме и во дворе',
                image: 'icon_sun',
                active: true,
                overflow: true,
            }, {
                title: 'Выключить весь свет в доме и во дворе',
                image: 'icon_sun',
                active: true,
            },
            {
                title: 'Я ухожу',
                image: 'icon_scheduled',
            },
            {
                title: 'Включить свет в коридоре',
                image: 'icon_sun',
                active: true,
            },
            {
                title: 'Набрать горячую ванну',
                image: 'icon_temperature',
                active: true,
                additional: 'Начнется в 18:00'
            },
            {
                title: 'Сделать пол тёплым во всей квартире',
                image: 'icon_temperature',
                active: true,
            },
            {
                title: 'Сверстать макет',
                image: 'icon_scheduled',
            },
            {
                title: 'Вскипятить чайник',
                image: 'icon_temperature',
                active: true,
            },
            {
                title: 'Поступить в ШРИ',
                image: 'icon_temperature',
                active: true,
            },
            {
                fake:true,
                image: 'darrow',
            },

        ]
    },
    favoriteDv: {
        title: {
            name: 'Избранные устройства',
            filters: [
                {
                    title: 'Все',
                    active: true,
                    value: 'all'
                },
                {
                    title: 'Кухня',
                    active: false,
                    value: 'kitchen'
                },
                {
                    title: 'Зал',
                    active: false,
                    value: 'hall'
                },
                {
                    title: 'Лампочки',
                    active: false,
                    value: 'lights'
                },
                {
                    title: 'Камеры',
                    active: false,
                    value: 'cameras'
                }
            ],
            arrows: true
        },
        cards: [
            {
                title: 'Xiaomi Yeelight LED Smart Bulb',
                image: 'icon_sun',
                additional: 'Включено',
                type: 'lights',
                popup: 'light',
                active: true
            },
            {
                title: 'D-Link Omna 180 cam',
                image: 'icon_sun',
                additional: 'Включится в 17:00',
                type: 'cameras'
            },
            {
                title: 'Elgato Eve Degree Connected',
                image: 'icon_temperature',
                additional: 'Выключено до 17:00',
                popup: 'temperature',
                type: 'hall'
            },
            {
                title: 'LIFX mini Day & Dusk A60 E27',
                image: 'icon_sun',
                additional: 'Включится в 17:00',
                popup: 'light',
                type: 'lights'
            },
            {
                title: 'Xiaomi Mi Air Purifier 2S',
                image: 'icon_sun',
                additional: 'Включится в 17:00',
                active: true,
                type: 'hall',
                popup: 'temperature'
            },
            {
                title: 'Philips Zhirui',
                image: 'icon_sun',
                additional: 'Включится в 17:00',
                type: 'lights',
                popup: 'light'
            },
            {
                title: 'Xiaomi Mi Air Purifier 2S',
                image: 'icon_sun',
                additional: 'Включится в 17:00',
                active: true,
                type: 'kitchen',
                popup: 'light'
            },
            {
                title: 'Xiaomi Warm Floor',
                image: 'icon_temperature',
                additional: 'Включено',
                active: true,
                type: 'hall',
                popup: 'balloon'
            },
        ]
    },
    footer: {
        menu: [
            {
                name: 'Помощь',
                href: '#'
            },
            {
                name: 'Обратная связь',
                href: '#'
            },
            {
                name: 'Разработчикам',
                href: '#'
            },
            {
                name: 'Условия использования',
                href: '#'
            }
        ]
    },
    popups: [
        {
            type: 'range',
            postfix: 'light',
            icon: 'icon_sun@2x.png',
            title: 'Xiaomi Yeelight LED Smart Bulb',
            additional: 'Включится в 18:00',
            menu: [
                {
                    title: 'Вручную',
                    active: true,
                    value: 'handle'
                },
                {
                    title: 'Дневной свет',
                    value: 'daylight'
                },
                {
                    title: 'Вечерний свет',
                    value: 'nightlight'
                },
                {
                    title: 'Рассвет',
                    value: 'sunset'
                },
            ]
        },
        {
            type: 'range',
            postfix: 'temperature',
            title: 'Elgato Eve Degree Connected',
            icon: 'icon_temperature_2@2x.png',
            additional: 'Включено',
            menu: [
                {
                    title: 'Вручную',
                    active: true,
                    value: 'handle'
                },
                {
                    title: 'Холодно',
                    value: 'cold'
                },
                {
                    title: 'Тепло',
                    value: 'warm'
                },
                {
                    title: 'Жарко',
                    value: 'hot'
                }
            ]
        },
        {
            type: 'balloon',
            postfix: 'balloon',
            icon: 'icon_temperature_2@2x.png',
            title: 'Xiaomi Warm Floor',
            additional: 'Включено',
        },

    ]

};


