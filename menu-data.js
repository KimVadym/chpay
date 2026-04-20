// =====================================================
// data.js
// -----------------------------------------------------
// ВСЕ БЛЮДА И ЦЕНЫ ХРАНЯТСЯ ЗДЕСЬ
//
// Что менять чаще всего:
// 1. price         → цена в KRW
// 2. image         → путь к картинке
// 3. desc          → вес / короткая информация
// 4. ingredients   → состав
// 5. about         → описание блюда
// =====================================================

window.MENU_DATA = [
  {
    category: "grill",
    categoryLabel: {
      ru: "Мангал",
      en: "Grill",
      kr: "그릴"
    },
    items: [
      {
        id: 1,
        name: {
          ru: "Баранина кусками",
          en: "Lamb pieces",
          kr: "양고기 조각"
        },
        desc: {
          ru: "180 г",
          en: "180 g",
          kr: "180g"
        },
        ingredients: {
          ru: "баранина, лук, специи",
          en: "lamb, onion, spices",
          kr: "양고기, 양파, 향신료"
        },
        about: {
          ru: "Сочное мясо баранины, приготовленное на мангале.",
          en: "Juicy lamb cooked on charcoal.",
          kr: "숯불에 구운 육즙 가득한 양고기"
        },
        price: 10,
        image: "./images/grill.png"
      },
      {
        id: 2,
        name: {
          ru: "Говядина люля кебаб",
          en: "Beef lula kebab",
          kr: "소고기 룰랴 케밥"
        },
        desc: {
          ru: "180 г",
          en: "180 g",
          kr: "180g"
        },
        ingredients: {
          ru: "говядина, лук, специи",
          en: "beef, onion, spices",
          kr: "소고기, 양파, 향신료"
        },
        about: {
          ru: "Сочный люля-кебаб с насыщенным вкусом.",
          en: "Juicy lula kebab with rich flavor.",
          kr: "풍부한 맛의 육즙 가득한 룰랴 케밥"
        },
        price: 13000,
        image: "./images/grill.png"
      },
      {
        id: 3,
        name: {
          ru: "Курица кусками",
          en: "Chicken pieces",
          kr: "닭고기 조각"
        },
        desc: {
          ru: "180 г",
          en: "180 g",
          kr: "180g"
        },
        ingredients: {
          ru: "курица, специи",
          en: "chicken, spices",
          kr: "닭고기, 향신료"
        },
        about: {
          ru: "Нежная курица на мангале.",
          en: "Tender grilled chicken.",
          kr: "부드러운 숯불 닭고기"
        },
        price: 13000,
        image: "./images/grill.png"
      },
      {
        id: 4,
        name: {
          ru: "Острые куриные крылышки",
          en: "Spicy chicken wings",
          kr: "매운 닭날개"
        },
        desc: {
          ru: "180 г",
          en: "180 g",
          kr: "180g"
        },
        ingredients: {
          ru: "куриные крылышки, острый соус, специи",
          en: "chicken wings, hot sauce, spices",
          kr: "닭날개, 매운 소스, 향신료"
        },
        about: {
          ru: "Пикантные крылышки для любителей острого.",
          en: "Spicy wings for hot flavor lovers.",
          kr: "매운맛을 좋아하는 분들을 위한 닭날개"
        },
        price: 13000,
        image: "./images/grill.png"
      },
      {
        id: 5,
        name: {
          ru: "Печень говяжья жигар",
          en: "Beef liver",
          kr: "소간"
        },
        desc: {
          ru: "180 г",
          en: "180 g",
          kr: "180g"
        },
        ingredients: {
          ru: "говяжья печень, специи",
          en: "beef liver, spices",
          kr: "소간, 향신료"
        },
        about: {
          ru: "Традиционное блюдо, приготовленное на мангале.",
          en: "Traditional charcoal-cooked dish.",
          kr: "숯불에 구운 전통 요리"
        },
        price: 13000,
        image: "./images/grill.png"
      },
      {
        id: 6,
        name: {
          ru: "Шампиньоны",
          en: "Champignons",
          kr: "양송이 구이"
        },
        desc: {
          ru: "180 г",
          en: "180 g",
          kr: "180g"
        },
        ingredients: {
          ru: "шампиньоны, специи",
          en: "mushrooms, spices",
          kr: "양송이버섯, 향신료"
        },
        about: {
          ru: "Ароматные шампиньоны на мангале.",
          en: "Aromatic grilled mushrooms.",
          kr: "향긋한 숯불 양송이버섯"
        },
        price: 13000,
        image: "./images/grill.png"
      },
      {
        id: 7,
        name: {
          ru: "Овощи на мангале",
          en: "Grilled vegetables",
          kr: "구운 야채"
        },
        desc: {
          ru: "180 г",
          en: "180 g",
          kr: "180g"
        },
        ingredients: {
          ru: "болгарский перец, баклажан, лук, помидор",
          en: "bell pepper, eggplant, onion, tomato",
          kr: "피망, 가지, 양파, 토마토"
        },
        about: {
          ru: "Овощное ассорти на открытом огне.",
          en: "Vegetable assortment cooked on open fire.",
          kr: "불향이 살아있는 야채 모둠"
        },
        price: 13000,
        image: "./images/grill.png"
      },
      {
        id: 8,
        name: {
          ru: "Говядина кусками",
          en: "Beef pieces",
          kr: "소고기 조각"
        },
        desc: {
          ru: "200 г",
          en: "200 g",
          kr: "200g"
        },
        ingredients: {
          ru: "говядина, специи",
          en: "beef, spices",
          kr: "소고기, 향신료"
        },
        about: {
          ru: "Кусочки говядины, приготовленные на углях.",
          en: "Beef pieces grilled on charcoal.",
          kr: "숯불에 구운 소고기 조각"
        },
        price: 13000,
        image: "./images/grill.png"
      },
      {
        id: 9,
        name: {
          ru: "Баранина рёбра",
          en: "Lamb ribs",
          kr: "양갈비"
        },
        desc: {
          ru: "200 г",
          en: "200 g",
          kr: "200g"
        },
        ingredients: {
          ru: "бараньи рёбра, специи",
          en: "lamb ribs, spices",
          kr: "양갈비, 향신료"
        },
        about: {
          ru: "Сочные рёбра с насыщенным ароматом мангала.",
          en: "Juicy ribs with a rich charcoal aroma.",
          kr: "숯불 향이 진한 육즙 가득한 양갈비"
        },
        price: 13000,
        image: "./images/grill.png"
      },
      {
        id: 10,
        name: {
          ru: "Сет шашлыки",
          en: "Skewer set",
          kr: "꼬치 세트"
        },
        desc: {
          ru: "Большой сет",
          en: "Large set",
          kr: "대형 세트"
        },
        ingredients: {
          ru: "ассорти шашлыков",
          en: "mixed grilled skewers",
          kr: "모둠 꼬치"
        },
        about: {
          ru: "Большой сет для компании.",
          en: "Large mixed set for a group.",
          kr: "여럿이 함께 먹기 좋은 모둠 세트"
        },
        price: 81000,
        image: "./images/grill.png"
      }
    ]
  },

  {
    category: "pilaf",
    categoryLabel: {
      ru: "Плов и основные",
      en: "Pilaf & mains",
      kr: "플로브와 메인"
    },
    items: [
      {
        id: 11,
        name: {
          ru: "Ошли джиз",
          en: "Oshli djiz",
          kr: "오슐리 지즈"
        },
        desc: {
          ru: "Фирменное блюдо",
          en: "Signature dish",
          kr: "대표 요리"
        },
        ingredients: {
          ru: "мясо, специи, гарнир",
          en: "meat, spices, garnish",
          kr: "고기, 향신료, 가니시"
        },
        about: {
          ru: "Фирменное мясное блюдо чайхоны.",
          en: "Signature meat dish of the restaurant.",
          kr: "차이호나의 대표 고기 요리"
        },
        price: 21000,
        image: "./images/2.png"
      },
      {
        id: 12,
        name: {
          ru: "Плов сет",
          en: "Pilaf set",
          kr: "플로브 세트"
        },
        desc: {
          ru: "Плов с добавками",
          en: "Pilaf set",
          kr: "플로브 세트"
        },
        ingredients: {
          ru: "рис, мясо, морковь, специи",
          en: "rice, meat, carrot, spices",
          kr: "쌀, 고기, 당근, 향신료"
        },
        about: {
          ru: "Плов с дополнительными компонентами.",
          en: "Pilaf with extra additions.",
          kr: "추가 구성이 포함된 플로브 세트"
        },
        price: 21000,
        image: "./images/2.png"
      },
      {
        id: 13,
        name: {
          ru: "Плов с казы",
          en: "Pilaf with kazy",
          kr: "카지 플로브"
        },
        desc: {
          ru: "Плов с казы",
          en: "Pilaf with kazy",
          kr: "카지 플로브"
        },
        ingredients: {
          ru: "рис, казы, мясо, морковь",
          en: "rice, kazy, meat, carrot",
          kr: "쌀, 카지, 고기, 당근"
        },
        about: {
          ru: "Традиционный плов с казы.",
          en: "Traditional pilaf with kazy sausage.",
          kr: "카지가 들어간 전통 플로브"
        },
        price: 21000,
        image: "./images/2.png"
      },
      {
        id: 14,
        name: {
          ru: "Плов",
          en: "Pilaf",
          kr: "플로브"
        },
        desc: {
          ru: "Классический плов",
          en: "Classic pilaf",
          kr: "클래식 플로브"
        },
        ingredients: {
          ru: "рис, мясо, морковь, специи",
          en: "rice, meat, carrot, spices",
          kr: "쌀, 고기, 당근, 향신료"
        },
        about: {
          ru: "Классический узбекский плов.",
          en: "Classic Uzbek pilaf.",
          kr: "정통 우즈베크 플로브"
        },
        price: 19500,
        image: "./images/2.png"
      },
      {
        id: 15,
        name: {
          ru: "Ханум",
          en: "Khanum",
          kr: "하눔"
        },
        desc: {
          ru: "Паровой рулет",
          en: "Steamed roll",
          kr: "찐 롤"
        },
        ingredients: {
          ru: "тесто, мясо, лук",
          en: "dough, meat, onion",
          kr: "반죽, 고기, 양파"
        },
        about: {
          ru: "Нежный рулет на пару с начинкой.",
          en: "Tender steamed roll with filling.",
          kr: "속이 들어간 부드러운 찐 롤"
        },
        price: 19500,
        image: "./images/2.png"
      },
      {
        id: 16,
        name: {
          ru: "Казан кабоб",
          en: "Kazan kabob",
          kr: "카잔 카보브"
        },
        desc: {
          ru: "Мясо с картофелем",
          en: "Meat with potatoes",
          kr: "고기와 감자"
        },
        ingredients: {
          ru: "мясо, картофель, специи",
          en: "meat, potatoes, spices",
          kr: "고기, 감자, 향신료"
        },
        about: {
          ru: "Сытное блюдо с мясом и картофелем.",
          en: "Hearty dish with meat and potatoes.",
          kr: "고기와 감자가 들어간 든든한 요리"
        },
        price: 22500,
        image: "./images/2.png"
      },
      {
        id: 17,
        name: {
          ru: "Джиз-биз",
          en: "Djiz-biz",
          kr: "지즈비즈"
        },
        desc: {
          ru: "Жареное мясное блюдо",
          en: "Fried meat dish",
          kr: "볶은 고기 요리"
        },
        ingredients: {
          ru: "мясо, лук, специи",
          en: "meat, onion, spices",
          kr: "고기, 양파, 향신료"
        },
        about: {
          ru: "Ароматное жареное мясное блюдо.",
          en: "Aromatic fried meat dish.",
          kr: "향긋한 볶은 고기 요리"
        },
        price: 19500,
        image: "./images/2.png"
      },
      {
        id: 18,
        name: {
          ru: "Манты",
          en: "Manti",
          kr: "만티"
        },
        desc: {
          ru: "Паровые манты",
          en: "Steamed dumplings",
          kr: "찐 만두"
        },
        ingredients: {
          ru: "тесто, мясо, лук",
          en: "dough, meat, onion",
          kr: "반죽, 고기, 양파"
        },
        about: {
          ru: "Крупные манты с сочной начинкой.",
          en: "Large dumplings with juicy filling.",
          kr: "육즙 가득한 속의 큰 만두"
        },
        price: 19500,
        image: "./images/2.png"
      },
      {
        id: 19,
        name: {
          ru: "Соленья (small)",
          en: "Pickles small",
          kr: "피클 소"
        },
        desc: {
          ru: "Небольшая порция",
          en: "Small portion",
          kr: "소 사이즈"
        },
        ingredients: {
          ru: "маринованные овощи",
          en: "pickled vegetables",
          kr: "절인 야채"
        },
        about: {
          ru: "Лёгкая закуска к основным блюдам.",
          en: "Light side appetizer for main dishes.",
          kr: "메인 요리와 잘 어울리는 가벼운 반찬"
        },
        price: 7500,
        image: "./images/ma.png"
      }
    ]
  },

  {
    category: "soups",
    categoryLabel: {
      ru: "Первые блюда",
      en: "Soups",
      kr: "수프"
    },
    items: [
      {
        id: 20,
        name: {
          ru: "Солянка классическая",
          en: "Classic solyanka",
          kr: "솔랸카"
        },
        desc: {
          ru: "Большая порция",
          en: "Large portion",
          kr: "큰 사이즈"
        },
        ingredients: {
          ru: "говядина, колбаса, огурцы, томат",
          en: "beef, sausage, pickles, tomato",
          kr: "소고기, 소시지, 피클, 토마토"
        },
        about: {
          ru: "Насыщенный суп с ярким вкусом.",
          en: "Rich soup with bold flavor.",
          kr: "진하고 풍부한 맛의 수프"
        },
        price: 12000,
        image: "./images/3.png"
      },
      {
        id: 21,
        name: {
          ru: "Шурпа по-восточному",
          en: "Eastern shurpa",
          kr: "쇼르파"
        },
        desc: {
          ru: "Большая порция",
          en: "Large portion",
          kr: "큰 사이즈"
        },
        ingredients: {
          ru: "баранина, картофель, морковь, лук",
          en: "lamb, potatoes, carrot, onion",
          kr: "양고기, 감자, 당근, 양파"
        },
        about: {
          ru: "Традиционный насыщенный восточный суп.",
          en: "Traditional rich eastern soup.",
          kr: "전통적인 진한 동양식 수프"
        },
        price: 13500,
        image: "./images/3.png"
      },
      {
        id: 22,
        name: {
          ru: "Кукси из говядины",
          en: "Kuksi with beef",
          kr: "국시"
        },
        desc: {
          ru: "На соевом бульоне",
          en: "On soy broth",
          kr: "간장 육수"
        },
        ingredients: {
          ru: "лапша, говядина, овощи, соевый бульон",
          en: "noodles, beef, vegetables, soy broth",
          kr: "면, 소고기, 야채, 간장 육수"
        },
        about: {
          ru: "Освежающее блюдо с лапшой и говядиной.",
          en: "Refreshing noodle dish with beef.",
          kr: "소고기와 면이 들어간 상쾌한 요리"
        },
        price: 15000,
        image: "./images/3.png"
      },
      {
        id: 23,
        name: {
          ru: "Лагман с бульоном",
          en: "Lagman with broth",
          kr: "라그만"
        },
        desc: {
          ru: "Домашняя лапша",
          en: "Homemade noodles",
          kr: "수타면"
        },
        ingredients: {
          ru: "лапша, мясо, овощи, бульон",
          en: "noodles, meat, vegetables, broth",
          kr: "면, 고기, 야채, 육수"
        },
        about: {
          ru: "Сытное блюдо с домашней лапшой.",
          en: "Hearty dish with homemade noodles.",
          kr: "수타면이 들어간 든든한 요리"
        },
        price: 19500,
        image: "./images/3.png"
      },
      {
        id: 24,
        name: {
          ru: "Чучвара из говядины",
          en: "Chuchvara with beef",
          kr: "추츠바라"
        },
        desc: {
          ru: "Пельмешки в бульоне",
          en: "Mini dumplings in broth",
          kr: "육수 만두"
        },
        ingredients: {
          ru: "тесто, говядина, бульон",
          en: "dough, beef, broth",
          kr: "반죽, 소고기, 육수"
        },
        about: {
          ru: "Небольшие пельмешки в ароматном бульоне.",
          en: "Small dumplings in aromatic broth.",
          kr: "향긋한 육수에 들어간 작은 만두"
        },
        price: 13500,
        image: "./images/3.png"
      },
      {
        id: 25,
        name: {
          ru: "Борщ ханский",
          en: "Royal borsh",
          kr: "보르쉬"
        },
        desc: {
          ru: "Борщ с говядиной",
          en: "Borsh with beef",
          kr: "소고기 보르쉬"
        },
        ingredients: {
          ru: "свёкла, капуста, картофель, говядина",
          en: "beetroot, cabbage, potato, beef",
          kr: "비트, 양배추, 감자, 소고기"
        },
        about: {
          ru: "Сытный борщ с домашним вкусом.",
          en: "Hearty borsh with homemade taste.",
          kr: "집밥 같은 맛의 든든한 보르쉬"
        },
        price: 12000,
        image: "./images/3.png"
      }
    ]
  },

  {
    category: "salads",
    categoryLabel: {
      ru: "Салаты",
      en: "Salads",
      kr: "샐러드"
    },
    items: [
      {
        id: 26,
        name: {
          ru: "Смак",
          en: "Smak",
          kr: "스막"
        },
        desc: {
          ru: "350 г",
          en: "350 g",
          kr: "350g"
        },
        ingredients: {
          ru: "овощи, зелень, соус",
          en: "vegetables, herbs, sauce",
          kr: "야채, 허브, 소스"
        },
        about: {
          ru: "Свежий салат с ярким вкусом.",
          en: "Fresh salad with bright flavor.",
          kr: "상큼한 맛의 신선한 샐러드"
        },
        price: 15000,
        image: "./images/4.png"
      },
      {
        id: 27,
        name: {
          ru: "Оливье классическое",
          en: "Olivier classic",
          kr: "올리비에"
        },
        desc: {
          ru: "350 г",
          en: "350 g",
          kr: "350g"
        },
        ingredients: {
          ru: "картофель, морковь, яйца, огурцы, колбаса, майонез",
          en: "potatoes, carrot, eggs, pickles, sausage, mayo",
          kr: "감자, 당근, 달걀, 피클, 소시지, 마요네즈"
        },
        about: {
          ru: "Классический салат знакомого вкуса.",
          en: "Classic familiar salad.",
          kr: "익숙한 맛의 클래식 샐러드"
        },
        price: 15000,
        image: "./images/4.png"
      },
      {
        id: 28,
        name: {
          ru: "Цезарь с курицей",
          en: "Caesar with chicken",
          kr: "치킨 시저 샐러드"
        },
        desc: {
          ru: "350 г",
          en: "350 g",
          kr: "350g"
        },
        ingredients: {
          ru: "курица, салат, сыр, сухарики, соус",
          en: "chicken, lettuce, cheese, croutons, sauce",
          kr: "닭고기, 양상추, 치즈, 크루통, 소스"
        },
        about: {
          ru: "Популярный салат с курицей и соусом.",
          en: "Popular salad with chicken and dressing.",
          kr: "치킨과 드레싱이 들어간 인기 샐러드"
        },
        price: 15000,
        image: "./images/4.png"
      },
      {
        id: 29,
        name: {
          ru: "Греческий",
          en: "Greek",
          kr: "그릭 샐러드"
        },
        desc: {
          ru: "350 г",
          en: "350 g",
          kr: "350g"
        },
        ingredients: {
          ru: "помидоры, огурцы, сыр, маслины",
          en: "tomatoes, cucumbers, cheese, olives",
          kr: "토마토, 오이, 치즈, 올리브"
        },
        about: {
          ru: "Свежий лёгкий салат с сыром.",
          en: "Fresh light salad with cheese.",
          kr: "치즈가 들어간 신선한 샐러드"
        },
        price: 15000,
        image: "./images/4.png"
      },
      {
        id: 30,
        name: {
          ru: "Мужской каприз",
          en: "Men's caprice",
          kr: "맨스 카프리스"
        },
        desc: {
          ru: "400 г",
          en: "400 g",
          kr: "400g"
        },
        ingredients: {
          ru: "мясо, яйца, сыр, соус",
          en: "meat, eggs, cheese, sauce",
          kr: "고기, 달걀, 치즈, 소스"
        },
        about: {
          ru: "Сытный салат с насыщенным вкусом.",
          en: "Hearty salad with rich flavor.",
          kr: "풍부한 맛의 든든한 샐러드"
        },
        price: 25500,
        image: "./images/4.png"
      },
      {
        id: 31,
        name: {
          ru: "Капрезе",
          en: "Caprese",
          kr: "카프레제"
        },
        desc: {
          ru: "400 г",
          en: "400 g",
          kr: "400g"
        },
        ingredients: {
          ru: "томаты, сыр, зелень",
          en: "tomatoes, cheese, herbs",
          kr: "토마토, 치즈, 허브"
        },
        about: {
          ru: "Лёгкий салат с томатами и сыром.",
          en: "Light salad with tomatoes and cheese.",
          kr: "토마토와 치즈가 들어간 가벼운 샐러드"
        },
        price: 18000,
        image: "./images/4.png"
      },
      {
        id: 32,
        name: {
          ru: "Острое вея",
          en: "Spicy salad",
          kr: "매운 샐러드"
        },
        desc: {
          ru: "350 г",
          en: "350 g",
          kr: "350g"
        },
        ingredients: {
          ru: "овощи, острый соус, специи",
          en: "vegetables, hot sauce, spices",
          kr: "야채, 매운 소스, 향신료"
        },
        about: {
          ru: "Пикантный салат с острым вкусом.",
          en: "Spicy salad with a hot kick.",
          kr: "매콤한 맛의 샐러드"
        },
        price: 15000,
        image: "./images/4.png"
      },
      {
        id: 33,
        name: {
          ru: "Хе из куриной грудки",
          en: "Chicken he",
          kr: "닭가슴살 무침"
        },
        desc: {
          ru: "350 г",
          en: "350 g",
          kr: "350g"
        },
        ingredients: {
          ru: "курица, овощи, специи",
          en: "chicken, vegetables, spices",
          kr: "닭고기, 야채, 향신료"
        },
        about: {
          ru: "Пикантное блюдо в корейском стиле.",
          en: "Spicy Korean-style dish.",
          kr: "매콤한 한국식 스타일 요리"
        },
        price: 15000,
        image: "./images/4.png"
      },
      {
        id: 34,
        name: {
          ru: "Хе из говядины",
          en: "Beef he",
          kr: "소고기 무침"
        },
        desc: {
          ru: "350 г",
          en: "350 g",
          kr: "350g"
        },
        ingredients: {
          ru: "говядина, овощи, специи",
          en: "beef, vegetables, spices",
          kr: "소고기, 야채, 향신료"
        },
        about: {
          ru: "Пикантное блюдо с говядиной.",
          en: "Spicy beef-style Korean dish.",
          kr: "소고기로 만든 매콤한 스타일 요리"
        },
        price: 18000,
        image: "./images/4.png"
      },
      {
        id: 35,
        name: {
          ru: "Морковь-ча",
          en: "Carrot-cha",
          kr: "당근 무침"
        },
        desc: {
          ru: "350 г",
          en: "350 g",
          kr: "350g"
        },
        ingredients: {
          ru: "морковь, специи, масло",
          en: "carrot, spices, oil",
          kr: "당근, 향신료, 오일"
        },
        about: {
          ru: "Яркая корейская морковь.",
          en: "Bright Korean-style carrot salad.",
          kr: "매콤한 당근 무침"
        },
        price: 13500,
        image: "./images/4.png"
      },
      {
        id: 36,
        name: {
          ru: "Шакароб",
          en: "Shakarob",
          kr: "샤카롭"
        },
        desc: {
          ru: "350 г",
          en: "350 g",
          kr: "350g"
        },
        ingredients: {
          ru: "помидоры, лук, зелень",
          en: "tomatoes, onion, herbs",
          kr: "토마토, 양파, 허브"
        },
        about: {
          ru: "Лёгкий традиционный салат.",
          en: "Light traditional salad.",
          kr: "가벼운 전통 샐러드"
        },
        price: 13500,
        image: "./images/4.png"
      },
      {
        id: 37,
        name: {
          ru: "Свежий ачичук",
          en: "Fresh achichuk",
          kr: "아치축"
        },
        desc: {
          ru: "350 г",
          en: "350 g",
          kr: "350g"
        },
        ingredients: {
          ru: "помидоры, лук, зелень",
          en: "tomatoes, onion, herbs",
          kr: "토마토, 양파, 허브"
        },
        about: {
          ru: "Свежий салат из томатов и лука.",
          en: "Fresh tomato and onion salad.",
          kr: "신선한 토마토와 양파 샐러드"
        },
        price: 13500,
        image: "./images/4.png"
      }
    ]
  },

  {
    category: "cold",
    categoryLabel: {
      ru: "Холодные закуски",
      en: "Cold appetizers",
      kr: "차가운 전채"
    },
    items: [
      {
        id: 38,
        name: {
          ru: "Селёдка с картошкой",
          en: "Herring with potatoes",
          kr: "감자와 청어"
        },
        desc: {
          ru: "450 г",
          en: "450 g",
          kr: "450g"
        },
        ingredients: {
          ru: "селёдка, картофель, лук",
          en: "herring, potato, onion",
          kr: "청어, 감자, 양파"
        },
        about: {
          ru: "Классическая холодная закуска.",
          en: "Classic cold appetizer.",
          kr: "전통적인 차가운 전채"
        },
        price: 22500,
        image: "./images/5.png"
      },
      {
        id: 39,
        name: {
          ru: "Маринованное ассорти",
          en: "Marinated assorted",
          kr: "모둠 피클"
        },
        desc: {
          ru: "650 г",
          en: "650 g",
          kr: "650g"
        },
        ingredients: {
          ru: "маринованные овощи",
          en: "pickled vegetables",
          kr: "절인 야채"
        },
        about: {
          ru: "Ассорти маринованных овощей.",
          en: "Assorted marinated vegetables.",
          kr: "절인 야채 모둠"
        },
        price: 18000,
        image: "./images/5.png"
      },
      {
        id: 40,
        name: {
          ru: "Русская закуска",
          en: "Russian starter",
          kr: "러시안 스타터"
        },
        desc: {
          ru: "400 г",
          en: "400 g",
          kr: "400g"
        },
        ingredients: {
          ru: "мясо, соленья, зелень",
          en: "meat, pickles, herbs",
          kr: "고기, 피클, 허브"
        },
        about: {
          ru: "Холодная закуска в домашнем стиле.",
          en: "Homestyle cold appetizer.",
          kr: "집밥 느낌의 차가운 전채"
        },
        price: 21000,
        image: "./images/5.png"
      },
      {
        id: 41,
        name: {
          ru: "Соте из баклажан",
          en: "Eggplant sauté",
          kr: "가지 소테"
        },
        desc: {
          ru: "500 г",
          en: "500 g",
          kr: "500g"
        },
        ingredients: {
          ru: "баклажаны, овощи, специи",
          en: "eggplants, vegetables, spices",
          kr: "가지, 야채, 향신료"
        },
        about: {
          ru: "Нежное овощное блюдо из баклажан.",
          en: "Tender eggplant vegetable dish.",
          kr: "부드러운 가지 요리"
        },
        price: 18000,
        image: "./images/5.png"
      },
      {
        id: 42,
        name: {
          ru: "Селёдка под шубой",
          en: "Herring under fur coat",
          kr: "청어 샐러드"
        },
        desc: {
          ru: "400 г",
          en: "400 g",
          kr: "400g"
        },
        ingredients: {
          ru: "селёдка, свёкла, картофель, морковь, майонез",
          en: "herring, beetroot, potato, carrot, mayo",
          kr: "청어, 비트, 감자, 당근, 마요네즈"
        },
        about: {
          ru: "Популярный слоёный салат.",
          en: "Popular layered salad.",
          kr: "인기 있는 레이어 샐러드"
        },
        price: 18000,
        image: "./images/5.png"
      },
      {
        id: 43,
        name: {
          ru: "Маринованные огурцы",
          en: "Pickled cucumbers",
          kr: "오이 피클"
        },
        desc: {
          ru: "350 г",
          en: "350 g",
          kr: "350g"
        },
        ingredients: {
          ru: "огурцы, маринад",
          en: "cucumbers, marinade",
          kr: "오이, 마리네이드"
        },
        about: {
          ru: "Лёгкая закуска к мясным блюдам.",
          en: "Light appetizer for meat dishes.",
          kr: "고기 요리와 잘 어울리는 반찬"
        },
        price: 15000,
        image: "./images/5.png"
      },
      {
        id: 44,
        name: {
          ru: "Французский салат",
          en: "French salad",
          kr: "프렌치 샐러드"
        },
        desc: {
          ru: "600 г",
          en: "600 g",
          kr: "600g"
        },
        ingredients: {
          ru: "овощи, соус, мясо",
          en: "vegetables, sauce, meat",
          kr: "야채, 소스, 고기"
        },
        about: {
          ru: "Сытный салат с мягким вкусом.",
          en: "Hearty salad with mild flavor.",
          kr: "부드러운 맛의 든든한 샐러드"
        },
        price: 19500,
        image: "./images/5.png"
      },
      {
        id: 45,
        name: {
          ru: "Холодец говяжий",
          en: "Beef aspic",
          kr: "소고기 아스픽"
        },
        desc: {
          ru: "400 г",
          en: "400 g",
          kr: "400g"
        },
        ingredients: {
          ru: "говядина, желе, специи",
          en: "beef, jelly, spices",
          kr: "소고기, 젤리, 향신료"
        },
        about: {
          ru: "Традиционное холодное мясное блюдо.",
          en: "Traditional cold meat dish.",
          kr: "전통적인 차가운 고기 요리"
        },
        price: 15000,
        image: "./images/5.png"
      },
      {
        id: 46,
        name: {
          ru: "Винегрет",
          en: "Vinaigrette",
          kr: "비네그레트"
        },
        desc: {
          ru: "350 г",
          en: "350 g",
          kr: "350g"
        },
        ingredients: {
          ru: "свёкла, картофель, морковь, огурцы",
          en: "beetroot, potato, carrot, pickles",
          kr: "비트, 감자, 당근, 피클"
        },
        about: {
          ru: "Овощной салат с традиционным вкусом.",
          en: "Vegetable salad with traditional taste.",
          kr: "전통적인 맛의 야채 샐러드"
        },
        price: 13500,
        image: "./images/5.png"
      },
      {
        id: 47,
        name: {
          ru: "Свежая нарезка",
          en: "Fresh vegetable plate",
          kr: "신선한 야채 플레이트"
        },
        desc: {
          ru: "500 г",
          en: "500 g",
          kr: "500g"
        },
        ingredients: {
          ru: "свежие овощи",
          en: "fresh vegetables",
          kr: "신선한 야채"
        },
        about: {
          ru: "Свежая овощная тарелка.",
          en: "Fresh vegetable plate.",
          kr: "신선한 야채 플레이트"
        },
        price: 19500,
        image: "./images/5.png"
      }
    ]
  },

  {
    category: "special",
    categoryLabel: {
      ru: "Специальные блюда",
      en: "Special dishes",
      kr: "스페셜 메뉴"
    },
    items: [
      {
        id: 48,
        name: {
          ru: "Манты из говядины",
          en: "Beef manti",
          kr: "소고기 만티"
        },
        desc: {
          ru: "Паровые манты",
          en: "Steamed dumplings",
          kr: "찐 만두"
        },
        ingredients: {
          ru: "тесто, говядина, лук",
          en: "dough, beef, onion",
          kr: "반죽, 소고기, 양파"
        },
        about: {
          ru: "Нежные манты на пару.",
          en: "Tender steamed dumplings.",
          kr: "부드러운 찐 만두"
        },
        price: 13500,
        image: "./images/6.png"
      },
      {
        id: 49,
        name: {
          ru: "Ханум по-узбекски",
          en: "Uzbek khanum",
          kr: "우즈베크식 하눔"
        },
        desc: {
          ru: "Традиционный ханум",
          en: "Traditional khanum",
          kr: "전통 하눔"
        },
        ingredients: {
          ru: "тесто, мясо, лук",
          en: "dough, meat, onion",
          kr: "반죽, 고기, 양파"
        },
        about: {
          ru: "Традиционное блюдо на пару.",
          en: "Traditional steamed dish.",
          kr: "전통적인 찜 요리"
        },
        price: 19500,
        image: "./images/6.png"
      },
      {
        id: 50,
        name: {
          ru: "Плов чайханский",
          en: "Chaikhona pilaf",
          kr: "차이호나 플로브"
        },
        desc: {
          ru: "Фирменный плов",
          en: "House pilaf",
          kr: "하우스 플로브"
        },
        ingredients: {
          ru: "рис, мясо, морковь, специи",
          en: "rice, meat, carrot, spices",
          kr: "쌀, 고기, 당근, 향신료"
        },
        about: {
          ru: "Фирменный плов чайхоны.",
          en: "Signature restaurant pilaf.",
          kr: "차이호나의 대표 플로브"
        },
        price: 15000,
        image: "./images/6.png"
      },
      {
        id: 51,
        name: {
          ru: "Джиз биз по-ташкентски",
          en: "Tashkent djiz-biz",
          kr: "타슈켄트식 지즈비즈"
        },
        desc: {
          ru: "Традиционное мясное блюдо",
          en: "Traditional meat dish",
          kr: "전통 고기 요리"
        },
        ingredients: {
          ru: "мясо, лук, специи",
          en: "meat, onion, spices",
          kr: "고기, 양파, 향신료"
        },
        about: {
          ru: "Традиционное мясное блюдо в ташкентском стиле.",
          en: "Traditional Tashkent-style meat dish.",
          kr: "타슈켄트식 전통 고기 요리"
        },
        price: 19500,
        image: "./images/6.png"
      },
      {
        id: 52,
        name: {
          ru: "Казан кабоб",
          en: "Kazan kabob",
          kr: "카잔 카보브"
        },
        desc: {
          ru: "Мясо и картофель",
          en: "Meat and potatoes",
          kr: "고기와 감자"
        },
        ingredients: {
          ru: "мясо, картофель, специи",
          en: "meat, potatoes, spices",
          kr: "고기, 감자, 향신료"
        },
        about: {
          ru: "Сытное блюдо, приготовленное в казане.",
          en: "Hearty dish cooked in a kazan pot.",
          kr: "가마솥에 조리한 든든한 요리"
        },
        price: 22500,
        image: "./images/6.png"
      },
      {
        id: 53,
        name: {
          ru: "Голубцы",
          en: "Stuffed cabbage rolls",
          kr: "양배추 롤"
        },
        desc: {
          ru: "С соусом",
          en: "With sauce",
          kr: "소스 포함"
        },
        ingredients: {
          ru: "капуста, мясо, рис, соус",
          en: "cabbage, meat, rice, sauce",
          kr: "양배추, 고기, 쌀, 소스"
        },
        about: {
          ru: "Домашние голубцы с мягким вкусом.",
          en: "Homestyle cabbage rolls with a soft taste.",
          kr: "부드러운 맛의 집밥 스타일 양배추 롤"
        },
        price: 9000,
        image: "./images/6.png"
      },
      {
        id: 54,
        name: {
          ru: "Вареники с картошкой",
          en: "Potato vareniki",
          kr: "감자 바레니키"
        },
        desc: {
          ru: "Со сметаной",
          en: "With sour cream",
          kr: "사워크림 포함"
        },
        ingredients: {
          ru: "тесто, картофель, сметана",
          en: "dough, potato, sour cream",
          kr: "반죽, 감자, 사워크림"
        },
        about: {
          ru: "Домашние вареники с картофельной начинкой.",
          en: "Homestyle dumplings with potato filling.",
          kr: "감자 속이 들어간 수제 바레니키"
        },
        price: 18000,
        image: "./images/6.png"
      },
      {
        id: 55,
        name: {
          ru: "Цыпленок табака",
          en: "Chicken tabaka",
          kr: "치킨 타바카"
        },
        desc: {
          ru: "С картофелем фри",
          en: "With fries",
          kr: "감자튀김 포함"
        },
        ingredients: {
          ru: "курица, специи, картофель",
          en: "chicken, spices, potatoes",
          kr: "닭고기, 향신료, 감자"
        },
        about: {
          ru: "Ароматный жареный цыплёнок.",
          en: "Aromatic fried chicken dish.",
          kr: "향긋하게 구운 치킨 요리"
        },
        price: 27000,
        image: "./images/6.png"
      },
      {
        id: 56,
        name: {
          ru: "Бешбармак по-казахски",
          en: "Beshbarmak",
          kr: "베쉬바르막"
        },
        desc: {
          ru: "С казы",
          en: "With kazy",
          kr: "카지 포함"
        },
        ingredients: {
          ru: "лапша, мясо, казы, лук",
          en: "noodles, meat, kazy, onion",
          kr: "면, 고기, 카지, 양파"
        },
        about: {
          ru: "Классическое казахское блюдо.",
          en: "Classic Kazakh traditional dish.",
          kr: "전통적인 카자흐 요리"
        },
        price: 24000,
        image: "./images/6.png"
      }
    ]
  },

  {
    category: "mains",
    categoryLabel: {
      ru: "Вторые блюда и гарниры",
      en: "Main dishes & sides",
      kr: "메인과 사이드"
    },
    items: [
      {
        id: 57,
        name: {
          ru: "Яичница 2 штуки",
          en: "2 eggs",
          kr: "계란 2개"
        },
        desc: {
          ru: "Гарнир",
          en: "Side",
          kr: "사이드"
        },
        ingredients: {
          ru: "яйца",
          en: "eggs",
          kr: "계란"
        },
        about: {
          ru: "Простой гарнир или лёгкое блюдо.",
          en: "Simple side dish or light meal.",
          kr: "간단한 사이드 또는 가벼운 식사"
        },
        price: 6000,
        image: "./images/7.png"
      },
      {
        id: 58,
        name: {
          ru: "Пюре",
          en: "Mashed potatoes",
          kr: "감자 퓌레"
        },
        desc: {
          ru: "Гарнир",
          en: "Side",
          kr: "사이드"
        },
        ingredients: {
          ru: "картофель, масло",
          en: "potato, butter",
          kr: "감자, 버터"
        },
        about: {
          ru: "Нежное картофельное пюре.",
          en: "Soft mashed potatoes.",
          kr: "부드러운 감자 퓌레"
        },
        price: 7000,
        image: "./images/7.png"
      },
      {
        id: 59,
        name: {
          ru: "Гречка",
          en: "Buckwheat",
          kr: "메밀"
        },
        desc: {
          ru: "Гарнир",
          en: "Side",
          kr: "사이드"
        },
        ingredients: {
          ru: "гречневая крупа",
          en: "buckwheat",
          kr: "메밀"
        },
        about: {
          ru: "Полезный и лёгкий гарнир.",
          en: "Healthy and light side dish.",
          kr: "건강하고 가벼운 사이드"
        },
        price: 7000,
        image: "./images/7.png"
      },
      {
        id: 60,
        name: {
          ru: "Картофель фри",
          en: "French fries",
          kr: "감자튀김"
        },
        desc: {
          ru: "Гарнир",
          en: "Side",
          kr: "사이드"
        },
        ingredients: {
          ru: "картофель, масло",
          en: "potato, oil",
          kr: "감자, 오일"
        },
        about: {
          ru: "Хрустящий картофель фри.",
          en: "Crispy french fries.",
          kr: "바삭한 감자튀김"
        },
        price: 7000,
        image: "./images/7.png"
      },
      {
        id: 61,
        name: {
          ru: "Картофель айдахо",
          en: "Rustic potatoes",
          kr: "웨지 감자"
        },
        desc: {
          ru: "Гарнир",
          en: "Side",
          kr: "사이드"
        },
        ingredients: {
          ru: "картофель, специи",
          en: "potato, spices",
          kr: "감자, 향신료"
        },
        about: {
          ru: "Картофель дольками со специями.",
          en: "Potato wedges with spices.",
          kr: "향신료가 들어간 웨지 감자"
        },
        price: 7000,
        image: "./images/7.png"
      },
      {
        id: 62,
        name: {
          ru: "Рис",
          en: "Rice",
          kr: "밥"
        },
        desc: {
          ru: "Гарнир",
          en: "Side",
          kr: "사이드"
        },
        ingredients: {
          ru: "рис",
          en: "rice",
          kr: "쌀"
        },
        about: {
          ru: "Простой гарнир к мясным блюдам.",
          en: "Simple side dish for meat dishes.",
          kr: "고기 요리에 잘 어울리는 기본 사이드"
        },
        price: 6000,
        image: "./images/7.png"
      },
      {
        id: 63,
        name: {
          ru: "Бризоль из говядины",
          en: "Beef brizol",
          kr: "소고기 브리졸"
        },
        desc: {
          ru: "С гарниром",
          en: "With garnish",
          kr: "가니시 포함"
        },
        ingredients: {
          ru: "говядина, яйцо, гарнир",
          en: "beef, egg, garnish",
          kr: "소고기, 달걀, 가니시"
        },
        about: {
          ru: "Сытное мясное блюдо с гарниром.",
          en: "Hearty beef dish with garnish.",
          kr: "가니시가 포함된 든든한 소고기 요리"
        },
        price: 21000,
        image: "./images/7.png"
      },
      {
        id: 64,
        name: {
          ru: "Фрикасе из курицы с шампиньонами",
          en: "Chicken fricassee",
          kr: "치킨 프리카세"
        },
        desc: {
          ru: "Курица с грибами",
          en: "Chicken with mushrooms",
          kr: "버섯 치킨"
        },
        ingredients: {
          ru: "курица, шампиньоны, сливочный соус",
          en: "chicken, mushrooms, cream sauce",
          kr: "닭고기, 버섯, 크림 소스"
        },
        about: {
          ru: "Нежная курица в соусе с грибами.",
          en: "Tender chicken with mushrooms in sauce.",
          kr: "버섯과 소스가 들어간 부드러운 치킨 요리"
        },
        price: 15000,
        image: "./images/7.png"
      },
      {
        id: 65,
        name: {
          ru: "Бифштекс с яйцом",
          en: "Beef steak with egg",
          kr: "계란 비프스테이크"
        },
        desc: {
          ru: "Сытное блюдо",
          en: "Hearty dish",
          kr: "든든한 요리"
        },
        ingredients: {
          ru: "говядина, яйцо, специи",
          en: "beef, egg, spices",
          kr: "소고기, 달걀, 향신료"
        },
        about: {
          ru: "Классическое мясное блюдо с яйцом.",
          en: "Classic beef dish with egg.",
          kr: "달걀이 올라간 클래식 소고기 요리"
        },
        price: 15000,
        image: "./images/7.png"
      },
      {
        id: 66,
        name: {
          ru: "Гуляш из говядины",
          en: "Beef goulash",
          kr: "소고기 굴라시"
        },
        desc: {
          ru: "Говядина в соусе",
          en: "Beef stew",
          kr: "소고기 스튜"
        },
        ingredients: {
          ru: "говядина, соус, специи",
          en: "beef, sauce, spices",
          kr: "소고기, 소스, 향신료"
        },
        about: {
          ru: "Ароматная говядина в насыщенном соусе.",
          en: "Aromatic beef in rich sauce.",
          kr: "진한 소스에 조린 소고기"
        },
        price: 15000,
        image: "./images/7.png"
      },
      {
        id: 67,
        name: {
          ru: "Котлета из говядины",
          en: "Beef cutlet",
          kr: "소고기 커틀릿"
        },
        desc: {
          ru: "С гарниром",
          en: "With garnish",
          kr: "가니시 포함"
        },
        ingredients: {
          ru: "говядина, специи, гарнир",
          en: "beef, spices, garnish",
          kr: "소고기, 향신료, 가니시"
        },
        about: {
          ru: "Домашняя котлета с гарниром.",
          en: "Homestyle beef cutlet with garnish.",
          kr: "가니시가 함께 나오는 수제 커틀릿"
        },
        price: 13500,
        image: "./images/7.png"
      },
      {
        id: 68,
        name: {
          ru: "Мясо по-французски",
          en: "French-style meat",
          kr: "프렌치 스타일 고기"
        },
        desc: {
          ru: "Запеченное мясо",
          en: "Baked meat",
          kr: "오븐 구이 고기"
        },
        ingredients: {
          ru: "мясо, сыр, лук, соус",
          en: "meat, cheese, onion, sauce",
          kr: "고기, 치즈, 양파, 소스"
        },
        about: {
          ru: "Запечённое мясо под сыром.",
          en: "Baked meat with cheese topping.",
          kr: "치즈를 올려 구운 고기"
        },
        price: 21000,
        image: "./images/7.png"
      },
      {
        id: 69,
        name: {
          ru: "Kaurma chuchwara",
          en: "Kaurma chuchwara",
          kr: "카우르마 추츠바라"
        },
        desc: {
          ru: "Традиционное блюдо",
          en: "Traditional dish",
          kr: "전통 요리"
        },
        ingredients: {
          ru: "тесто, мясо, специи",
          en: "dough, meat, spices",
          kr: "반죽, 고기, 향신료"
        },
        about: {
          ru: "Традиционное блюдо с насыщенным вкусом.",
          en: "Traditional dish with rich flavor.",
          kr: "풍부한 맛의 전통 요리"
        },
        price: 18000,
        image: "./images/7.png"
      }
    ]
  },

  {
    category: "desserts",
    categoryLabel: {
      ru: "Хлеб, десерты и напитки",
      en: "Bread, desserts & drinks",
      kr: "빵, 디저트, 음료"
    },
    items: [
      {
        id: 70,
        name: {
          ru: "Самса солёная",
          en: "Salted samsa",
          kr: "짭짤한 삼사"
        },
        desc: {
          ru: "1 штука",
          en: "1 piece",
          kr: "1개"
        },
        ingredients: {
          ru: "тесто, мясо, лук",
          en: "dough, meat, onion",
          kr: "반죽, 고기, 양파"
        },
        about: {
          ru: "Хрустящая самса с начинкой.",
          en: "Crispy samsa with filling.",
          kr: "속이 들어간 바삭한 삼사"
        },
        price: 7000,
        image: "./images/8.png"
      },
      {
        id: 71,
        name: {
          ru: "Лепешка молочная",
          en: "Milk flatbread",
          kr: "밀크 플랫브레드"
        },
        desc: {
          ru: "Свежая лепешка",
          en: "Fresh flatbread",
          kr: "신선한 빵"
        },
        ingredients: {
          ru: "мука, молоко, соль",
          en: "flour, milk, salt",
          kr: "밀가루, 우유, 소금"
        },
        about: {
          ru: "Свежая мягкая лепешка.",
          en: "Fresh soft flatbread.",
          kr: "갓 구운 부드러운 빵"
        },
        price: 4000,
        image: "./images/8.png"
      },
      {
        id: 72,
        name: {
          ru: "Медовый",
          en: "Honey cake",
          kr: "허니 케이크"
        },
        desc: {
          ru: "Десерт",
          en: "Dessert",
          kr: "디저트"
        },
        ingredients: {
          ru: "мёд, коржи, крем",
          en: "honey, cake layers, cream",
          kr: "꿀, 케이크 시트, 크림"
        },
        about: {
          ru: "Нежный медовый торт.",
          en: "Soft honey cake dessert.",
          kr: "부드러운 허니 케이크"
        },
        price: 13000,
        image: "./images/8.png"
      },
      {
        id: 73,
        name: {
          ru: "Наполеон",
          en: "Napoleon",
          kr: "나폴레옹"
        },
        desc: {
          ru: "Десерт",
          en: "Dessert",
          kr: "디저트"
        },
        ingredients: {
          ru: "слоёные коржи, крем",
          en: "layered pastry, cream",
          kr: "페이스트리 시트, 크림"
        },
        about: {
          ru: "Классический десерт с кремом.",
          en: "Classic cream dessert.",
          kr: "크림이 들어간 클래식 디저트"
        },
        price: 13000,
        image: "./images/8.png"
      },
      {
        id: 74,
        name: {
          ru: "Чай чёрный / зелёный",
          en: "Black / green tea",
          kr: "홍차 / 녹차"
        },
        desc: {
          ru: "Чайник",
          en: "Teapot",
          kr: "티포트"
        },
        ingredients: {
          ru: "чай",
          en: "tea",
          kr: "차"
        },
        about: {
          ru: "Горячий чай на выбор.",
          en: "Hot tea of your choice.",
          kr: "선택 가능한 따뜻한 차"
        },
        price: 3000,
        image: "./images/8.png"
      },
      {
        id: 75,
        name: {
          ru: "Чай с молоком",
          en: "Milk tea",
          kr: "밀크티"
        },
        desc: {
          ru: "Традиционный чай",
          en: "Traditional tea",
          kr: "전통 차"
        },
        ingredients: {
          ru: "чай, молоко",
          en: "tea, milk",
          kr: "차, 우유"
        },
        about: {
          ru: "Мягкий чай с молочным вкусом.",
          en: "Smooth tea with milk flavor.",
          kr: "부드러운 밀크티"
        },
        price: 5000,
        image: "./images/8.png"
      },
      {
        id: 76,
        name: {
          ru: "Кефир 0.5L",
          en: "Kefir 0.5L",
          kr: "케피어 0.5L"
        },
        desc: {
          ru: "Кисломолочный напиток",
          en: "Fermented drink",
          kr: "발효 음료"
        },
        ingredients: {
          ru: "кефир",
          en: "kefir",
          kr: "케피어"
        },
        about: {
          ru: "Освежающий кисломолочный напиток.",
          en: "Refreshing fermented milk drink.",
          kr: "상큼한 발효유 음료"
        },
        price: 9000,
        image: "./images/8.png"
      },
      {
        id: 77,
        name: {
          ru: "Cola / Fanta / Saida",
          en: "Cola / Fanta / Saida",
          kr: "콜라 / 환타 / 사이다"
        },
        desc: {
          ru: "330 мл",
          en: "330 ml",
          kr: "330ml"
        },
        ingredients: {
          ru: "газированный напиток",
          en: "soft drink",
          kr: "탄산음료"
        },
        about: {
          ru: "Прохладительный напиток.",
          en: "Refreshing soft drink.",
          kr: "시원한 탄산음료"
        },
        price: 3000,
        image: "./images/8.png"
      },
      {
        id: 78,
        name: {
          ru: "Компот 1L",
          en: "Compote 1L",
          kr: "콤포트 1L"
        },
        desc: {
          ru: "Узбекский компот",
          en: "Uzbek compote",
          kr: "우즈베크 콤포트"
        },
        ingredients: {
          ru: "фрукты, вода, сахар",
          en: "fruits, water, sugar",
          kr: "과일, 물, 설탕"
        },
        about: {
          ru: "Домашний сладкий напиток.",
          en: "Homestyle sweet fruit drink.",
          kr: "집에서 만든 과일 음료"
        },
        price: 13000,
        image: "./images/8.png"
      }
    ]
  }
];