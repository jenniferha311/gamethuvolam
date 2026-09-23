import { UnitRealm } from '../types/game';

export const UNITS_GRADE_10: UnitRealm[] = [
  // UNIT 1: FAMILY LIFE
  {
    id: 'g10-u01',
    grade: 10,
    unit: 1,
    title: 'Family Life',
    realmName: 'Gia Môn Cảnh - Bổn Phận Gia Đình',
    guardianName: 'Phương Tú',
    guardianColor: '#059669',
    storyIntro: 'Bước vào Gia Môn Cảnh, thiếu hiệp học được cách sẻ chia gánh nặng gia phong. Muốn hành tẩu giang hồ, trước tiên phải tề gia, thấu hiểu ý nghĩa của tổ ấm và bổn phận.',
    bossName: 'Hắc Ma Lười Biếng',
    bossTitle: 'Hộ Pháp Ảo Ảnh - Kẻ Gieo Trì Hoãn',
    bossHp: 100,
    xpReward: 150,
    readingPassage: {
      title: 'The Evolution of Family Roles in Modern Society',
      topic: 'Sự chuyển dịch vai trò thành viên trong gia đình hiện đại',
      fullText: `In the past, traditional societal conventions dictated that men acted as the sole breadwinners while women took full responsibility as homemakers, carrying out domestic duties such as cooking and cleaning. However, modern research highlights that sharing household chores equitably brings profound psychological benefits to everyone under the roof.\n\nWhen husbands and wives split chores, marital satisfaction rises noticeably, easing the psychological and financial burden placed on a single person. Furthermore, children who actively do household chores develop high levels of responsibility, self-reliance, and genuine gratitude towards their caregivers. Rather than viewing chores as tedious tasks, modern families establish regular routines like weekend breakfasts or tidying sessions, which effectively strengthen emotional bonds and foster mutual respect.`,
      keyTakeaway: 'Chia sẻ việc nhà giúp giảm áp lực tài chính/tinh thần, nuôi dưỡng tính tự lập của con cái và thắt chặt tình cảm gia đình.',
      vocabularyHighlights: ['breadwinner', 'homemaker', 'household chores', 'gratitude', 'strengthen']
    },
    vocabulary: [
      {
        id: 'v10-1-1',
        word: 'household chores',
        ipa: '/ˈhaʊs.hoʊld tʃɔːrz/',
        meaningVi: 'công việc nhà, việc vặt trong gia đình',
        partOfSpeech: 'noun phrase',
        collocation: 'share household chores',
        example: 'In my family, everyone shares the household chores equally.',
        synonyms: ['domestic duties', 'housework'],
        antonyms: ['recreational activities', 'leisure'],
        inPassageSentence: 'When husbands and wives split chores, marital satisfaction rises noticeably.'
      },
      {
        id: 'v10-1-2',
        word: 'breadwinner',
        ipa: '/ˈbredˌwɪn.ər/',
        meaningVi: 'trụ cột kinh tế, người kiếm tiền chính trong gia đình',
        partOfSpeech: 'noun',
        collocation: 'sole breadwinner',
        example: 'After his father retired, he became the primary breadwinner of the household.',
        synonyms: ['provider', 'primary earner'],
        antonyms: ['dependent', 'consumer'],
        inPassageSentence: 'In the past, men acted as the sole breadwinners.'
      },
      {
        id: 'v10-1-3',
        word: 'homemaker',
        ipa: '/ˈhoʊmˌmeɪ.kər/',
        meaningVi: 'người nội trợ quán xuyến việc nhà',
        partOfSpeech: 'noun',
        collocation: 'devoted homemaker',
        example: 'A homemaker manages domestic duties and ensures a warm family atmosphere.',
        synonyms: ['housewife / househusband', 'domestic manager'],
        antonyms: ['careerist', 'office employee']
      },
      {
        id: 'v10-1-4',
        word: 'heavy lifting',
        ipa: '/ˈhev.i ˈlɪf.tɪŋ/',
        meaningVi: 'việc nặng nhọc, mang vác đồ đạc',
        partOfSpeech: 'noun phrase',
        collocation: 'do the heavy lifting',
        example: 'My brother usually does the heavy lifting when rearranging furniture.',
        synonyms: ['laborious task', 'arduous work'],
        antonyms: ['light chore', 'effortless task']
      },
      {
        id: 'v10-1-5',
        word: 'gratitude',
        ipa: '/ˈɡræt.ɪ.tʃuːd/',
        meaningVi: 'lòng biết ơn, sự cảm kích chân thành',
        partOfSpeech: 'noun',
        collocation: 'express gratitude to someone',
        example: 'Children should show deep gratitude to their parents for raising them.',
        synonyms: ['thankfulness', 'appreciation', 'gratefulness'],
        antonyms: ['ingratitude', 'unthankfulness']
      },
      {
        id: 'v10-1-6',
        word: 'responsibility',
        ipa: '/rɪˌspɑːn.səˈbɪl.ə.t̬i/',
        meaningVi: 'trách nhiệm, bổn phận',
        partOfSpeech: 'noun',
        collocation: 'take responsibility for',
        example: 'Each family member takes responsibility for keeping their living space tidy.',
        synonyms: ['duty', 'obligation', 'accountability'],
        antonyms: ['irresponsibility', 'negligence']
      },
      {
        id: 'v10-1-7',
        word: 'strengthen',
        ipa: '/ˈstreŋ.θən/',
        meaningVi: 'củng cố, tăng cường, thắt chặt',
        partOfSpeech: 'verb',
        collocation: 'strengthen family bonds',
        example: 'Cooking and eating dinner together helps strengthen our family bonds.',
        synonyms: ['reinforce', 'fortify', 'consolidate'],
        antonyms: ['weaken', 'undermine', 'destroy']
      },
      {
        id: 'v10-1-8',
        word: 'financial burden',
        ipa: '/faɪˈnæn.ʃəl ˈbɜːr.dən/',
        meaningVi: 'gánh nặng tài chính, áp lực tiền bạc',
        partOfSpeech: 'noun phrase',
        collocation: 'ease the financial burden',
        example: 'Both parents work full-time to ease the family financial burden.',
        synonyms: ['monetary pressure', 'economic strain'],
        antonyms: ['financial security', 'wealth']
      },
      {
        id: 'v10-1-9',
        word: 'split',
        ipa: '/splɪt/',
        meaningVi: 'phân chia, chia đều',
        partOfSpeech: 'verb',
        collocation: 'split the chores',
        example: 'They decided to split the household chores fairly between brothers.',
        synonyms: ['divide', 'distribute', 'share'],
        antonyms: ['monopolize', 'concentrate']
      },
      {
        id: 'v10-1-10',
        word: 'groceries',
        ipa: '/ˈɡroʊ.sɚ.iz/',
        meaningVi: 'thực phẩm và hàng tạp hóa thiết yếu',
        partOfSpeech: 'noun plural',
        collocation: 'shop for groceries',
        example: 'My mother often asks me to shop for groceries at the local supermarket.',
        synonyms: ['foodstuffs', 'daily provisions']
      },
      {
        id: 'v10-1-11',
        word: 'appreciation',
        ipa: '/əˌpriː.ʃiˈeɪ.ʃən/',
        meaningVi: 'sự trân trọng, ghi nhận công lao',
        partOfSpeech: 'noun',
        collocation: 'show appreciation for',
        example: 'Words of appreciation can make domestic chores feel much lighter.',
        synonyms: ['recognition', 'regard', 'esteem'],
        antonyms: ['disregard', 'contempt']
      },
      {
        id: 'v10-1-12',
        word: 'family routines',
        ipa: '/ˈfæm.əl.i ruːˈtiːnz/',
        meaningVi: 'nề nếp, thói quen sinh hoạt gia đình',
        partOfSpeech: 'noun phrase',
        collocation: 'establish family routines',
        example: 'Family routines like weekend breakfasts build lasting happy memories.',
        synonyms: ['customs', 'rituals', 'habits']
      }
    ],
    practice: [
      {
        id: 'p10-1-1',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'In traditional families, the father is often regarded as the sole ______ who earns money.',
        options: ['breadwinner', 'homemaker', 'servant', 'caretaker'],
        correctAnswer: 'breadwinner',
        explanation: '"Breadwinner" là người trụ cột kiếm tiền nuôi sống gia đình.'
      },
      {
        id: 'p10-1-2',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the letter A, B, C, or D to indicate the word CLOSEST in meaning to the underlined word:\n"Children should express deep GRATITUDE to their parents."',
        options: ['appreciation', 'disrespect', 'indifference', 'anger'],
        correctAnswer: 'appreciation',
        explanation: '"Gratitude" (lòng biết ơn) đồng nghĩa với "appreciation" (sự trân trọng, biết ơn).'
      },
      {
        id: 'p10-1-3',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the letter A, B, C, or D to indicate the word OPPOSITE in meaning to the underlined word:\n"Sharing daily housework helps STRENGTHEN the emotional connection among family members."',
        options: ['weaken', 'fortify', 'consolidate', 'reinforce'],
        correctAnswer: 'weaken',
        explanation: '"Strengthen" (thắt chặt, làm mạnh thêm) trái nghĩa với "weaken" (làm suy yếu).'
      },
      {
        id: 'p10-1-4',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'When husbands and wives split chores, marital satisfaction rises noticeably, easing the psychological and financial burden placed on a single person.',
        prompt: 'According to the passage, what is a direct benefit of splitting household chores between spouses?',
        options: [
          'It increases marital satisfaction and eases burden on a single individual.',
          'It eliminates all family financial needs completely.',
          'It forces children to leave the house early.',
          'It allows one parent to stop working permanently.'
        ],
        correctAnswer: 'It increases marital satisfaction and eases burden on a single individual.',
        explanation: 'Đoạn văn nêu rõ: "When husbands and wives split chores, marital satisfaction rises noticeably, easing the psychological and financial burden placed on a single person."'
      },
      {
        id: 'p10-1-5',
        type: 'multiple-choice',
        category: 'collocation',
        prompt: 'My brother is tall and muscular, so he always does the heavy ______ in our house.',
        options: ['lifting', 'choosing', 'holding', 'cleaning'],
        correctAnswer: 'lifting',
        explanation: '"Heavy lifting" là việc nặng nhọc mang vác vật nặng.'
      },
      {
        id: 'p10-1-6',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to BREADWINNER:\n"Being the family breadwinner is a demanding duty."',
        options: ['dependent', 'provider', 'supporter', 'earner'],
        correctAnswer: 'dependent',
        explanation: '"Breadwinner" (người kiếm tiền nuôi gia đình) trái nghĩa với "dependent" (người sống phụ thuộc, ăn bám).'
      },
      {
        id: 'p10-1-7',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Both parents work full-time to ease the family ______ burden during difficult times.',
        options: ['financial', 'finance', 'financially', 'financing'],
        correctAnswer: 'financial',
        explanation: 'Đứng trước danh từ "burden" cần tính từ "financial" (thuộc về tài chính).'
      }
    ],
    bossQuestions: [
      {
        id: 'b10-1-1',
        question: 'Chọn thì đúng: "Look! My mother ______ dinner in the kitchen right now."',
        options: ['is cooking', 'cooks', 'cooked', 'has cooked'],
        correctAnswer: 0,
        damage: 30,
        explanation: 'Dấu hiệu "Look!" và "right now" diễn tả hành động đang xảy ra tại thời điểm nói -> dùng Hiện tại tiếp diễn (is cooking).'
      },
      {
        id: 'b10-1-2',
        question: 'Tìm từ ĐỒNG NGHĨA CẤP CAO với "RESPONSIBILITY":',
        options: ['accountability', 'negligence', 'carelessness', 'irresponsibility'],
        correctAnswer: 0,
        damage: 30,
        explanation: '"Responsibility" (trách nhiệm) đồng nghĩa với "accountability" (tinh thần trách nhiệm giải trình).'
      },
      {
        id: 'b10-1-3',
        question: 'Chọn câu viết lại đồng nghĩa: "Parents and children should communicate openly to bridge the generation gap."',
        options: [
          'Open communication is essential for parents and children to narrow the generation gap.',
          'Parents should avoid talking to their children about emotional gaps.',
          'The generation gap cannot be bridged despite open discussions.',
          'Children must strictly obey parents without any communication.'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Câu A diễn đạt chính xác tương đương ý nghĩa với câu gốc.'
      },
      {
        id: 'b10-1-4',
        question: 'Từ trái nghĩa với "APPRECIATION" là:',
        options: ['ingratitude', 'thankfulness', 'recognition', 'admiration'],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Trái nghĩa với "appreciation" (sự trân trọng biết ơn) là "ingratitude" (sự vô ơn).'
      }
    ]
  },

  // UNIT 2: HUMANS AND THE ENVIRONMENT
  {
    id: 'g10-u02',
    grade: 10,
    unit: 2,
    title: 'Humans and the Environment',
    realmName: 'Thanh Mộc Cảnh - Hộ Vệ Sinh Thái',
    guardianName: 'Đặng Trần Hà',
    guardianColor: '#1e3a8a',
    storyIntro: 'Rừng thiêng bị khói bụi hắc ám bao phủ. Đặng Trần Hà hộ pháp trao cho bạn kiếm pháp Sinh Thái để triệt tiêu ô nhiễm, khôi phục màu xanh đại ngàn.',
    bossName: 'Hỏa Độc Ô Nhiễm',
    bossTitle: 'Hộ Pháp Khói Độc - Kẻ Hủy Hoại Rừng Xanh',
    bossHp: 100,
    xpReward: 160,
    readingPassage: {
      title: 'Our Planet, Our Responsibility: The Zero-Waste Journey',
      topic: 'Hành trình giảm thiểu rác thải nhựa và bảo vệ hệ sinh thái',
      fullText: `Human activities over the last century have exerted immense pressure on Earth’s natural ecosystems. The excessive consumption of single-use plastics and the burning of fossil fuels release huge volumes of greenhouse gases, exacerbating global climate disruption.\n\nTo combat this crisis, thousands of eco-conscious communities are adopting sustainable lifestyles. By opting for reusable containers, composting organic food scraps, and purchasing biodegradable packaging, individuals can shrink their carbon footprints substantially. Transitioning to renewable energy like solar panels and wind turbines not only conserves finite natural resources but also safeguards biodiversity for posterity.`,
      keyTakeaway: 'Chuyển đổi sang lối sống bền vững và năng lượng tái tạo giúp bảo tồn tài nguyên và giảm phát thải khí nhà kính.',
      vocabularyHighlights: ['carbon footprint', 'eco-friendly', 'sustainable', 'renewable energy', 'decompose']
    },
    vocabulary: [
      {
        id: 'v10-2-1',
        word: 'carbon footprint',
        ipa: '/ˈkɑːr.bən ˌfʊt.prɪnt/',
        meaningVi: 'dấu chân carbon, tổng lượng khí nhà kính do cá nhân tạo ra',
        partOfSpeech: 'noun phrase',
        collocation: 'reduce carbon footprint',
        example: 'Riding a bicycle helps people reduce their carbon footprint.',
        synonyms: ['greenhouse emissions measure', 'environmental impact'],
        inPassageSentence: 'Individuals can shrink their carbon footprints substantially.'
      },
      {
        id: 'v10-2-2',
        word: 'eco-friendly',
        ipa: '/ˌiː.koʊˈfrend.li/',
        meaningVi: 'thân thiện với môi trường',
        partOfSpeech: 'adjective',
        collocation: 'eco-friendly products',
        example: 'We ought to buy eco-friendly cleaning items to protect rivers.',
        synonyms: ['environmentally friendly', 'green', 'sustainable'],
        antonyms: ['polluting', 'environmentally hazardous', 'destructive']
      },
      {
        id: 'v10-2-3',
        word: 'sustainable',
        ipa: '/səˈsteɪ.nə.bəl/',
        meaningVi: 'bền vững, duy trì lâu dài',
        partOfSpeech: 'adjective',
        collocation: 'sustainable lifestyle',
        example: 'Using solar power is a key step towards a sustainable future.',
        synonyms: ['viable', 'renewable', 'enduring'],
        antonyms: ['unsustainable', 'depleting', 'exhaustible']
      },
      {
        id: 'v10-2-4',
        word: 'greenhouse gas',
        ipa: '/ˈɡriːn.haʊs ˌɡæs/',
        meaningVi: 'khí nhà kính giữ nhiệt trong khí quyển',
        partOfSpeech: 'noun phrase',
        collocation: 'greenhouse gas emissions',
        example: 'Factories release large quantities of greenhouse gases each day.',
        synonyms: ['heat-trapping emissions']
      },
      {
        id: 'v10-2-5',
        word: 'renewable energy',
        ipa: '/rɪˈnuː.ə.bəl ˈen.ɚ.dʒi/',
        meaningVi: 'năng lượng tái tạo (nắng, gió, thủy triều)',
        partOfSpeech: 'noun phrase',
        collocation: 'invest in renewable energy',
        example: 'Wind and solar are popular forms of renewable energy.',
        synonyms: ['clean energy', 'green power'],
        antonyms: ['fossil fuels', 'non-renewable energy']
      },
      {
        id: 'v10-2-6',
        word: 'decompose',
        ipa: '/ˌdiː.kəmˈpoʊz/',
        meaningVi: 'phân hủy tự nhiên',
        partOfSpeech: 'verb',
        collocation: 'take years to decompose',
        example: 'Plastic bottles can take hundreds of years to decompose in soil.',
        synonyms: ['decay', 'break down', 'biodegrade'],
        antonyms: ['preserve', 'remain intact']
      },
      {
        id: 'v10-2-7',
        word: 'conserve',
        ipa: '/kənˈsɝːv/',
        meaningVi: 'bảo tồn, gìn giữ tiết kiệm',
        partOfSpeech: 'verb',
        collocation: 'conserve energy / electricity',
        example: 'Turn off electrical appliances when leaving home to conserve electricity.',
        synonyms: ['preserve', 'protect', 'save'],
        antonyms: ['squander', 'waste', 'deplete']
      },
      {
        id: 'v10-2-8',
        word: 'organic',
        ipa: '/ɔːrˈɡæn.ɪk/',
        meaningVi: 'hữu cơ, thuần tự nhiên không hóa chất',
        partOfSpeech: 'adjective',
        collocation: 'organic food / farming',
        example: 'Organic food is grown without artificial pesticides or synthetic chemicals.',
        synonyms: ['natural', 'chemical-free', 'biological'],
        antonyms: ['synthetic', 'artificial', 'chemical']
      },
      {
        id: 'v10-2-9',
        word: 'litter',
        ipa: '/ˈlɪt̬.ɚ/',
        meaningVi: 'xả rác bừa bãi nơi công cộng',
        partOfSpeech: 'verb / noun',
        collocation: 'drop litter',
        example: 'Do not drop litter in public parks; put it into recycling bins.',
        synonyms: ['waste', 'debris', 'rubbish'],
        antonyms: ['cleanliness', 'tidy environment']
      },
      {
        id: 'v10-2-10',
        word: 'single-use',
        ipa: '/ˌsɪŋ.ɡəlˈjuːs/',
        meaningVi: 'dùng một lần rồi vứt',
        partOfSpeech: 'adjective',
        collocation: 'single-use plastic',
        example: 'Many supermarkets are banning single-use plastic bags.',
        synonyms: ['disposable', 'throwaway'],
        antonyms: ['reusable', 'durable', 'permanent']
      }
    ],
    practice: [
      {
        id: 'p10-2-1',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to CONSERVE:\n"We should conserve fresh water and forests for future generations."',
        options: ['preserve', 'waste', 'deplete', 'contaminate'],
        correctAnswer: 'preserve',
        explanation: '"Conserve" (gìn giữ, bảo tồn) đồng nghĩa với "preserve".'
      },
      {
        id: 'p10-2-2',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to SUSTAINABLE:\n"The overuse of chemical pesticides creates an unsustainable agricultural model."',
        options: ['depleting', 'viable', 'green', 'eco-friendly'],
        correctAnswer: 'depleting',
        explanation: '"Sustainable" (bền vững) trái nghĩa với "depleting" (làm cạn kiệt, suy kiệt tài nguyên).'
      },
      {
        id: 'p10-2-3',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'By opting for reusable containers, composting organic food scraps, and purchasing biodegradable packaging, individuals can shrink their carbon footprints substantially.',
        prompt: 'Which of the following is NOT mentioned in the passage as an action to shrink one’s carbon footprint?',
        options: [
          'Burning plastic bottles in the backyard.',
          'Using reusable containers.',
          'Composting organic food waste.',
          'Purchasing biodegradable packaging.'
        ],
        correctAnswer: 'Burning plastic bottles in the backyard.',
        explanation: 'Đốt rác nhựa không hề được nhắc đến và là hành vi gây hại khói độc cho môi trường.'
      },
      {
        id: 'p10-2-4',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'A person’s ______ measures the total greenhouse gases produced by their actions.',
        options: ['carbon footprint', 'energy bill', 'household chore', 'recycling bin'],
        correctAnswer: 'carbon footprint',
        explanation: '"Carbon footprint" là dấu chân carbon.'
      },
      {
        id: 'p10-2-5',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to SINGLE-USE:\n"Environmentalists advocate replacing single-use bags with canvas tote bags."',
        options: ['reusable', 'disposable', 'throwaway', 'hazardous'],
        correctAnswer: 'reusable',
        explanation: '"Single-use" (dùng một lần) trái nghĩa với "reusable" (có thể tái sử dụng nhiều lần).'
      },
      {
        id: 'p10-2-6',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to DECOMPOSE:\n"Organic material takes only a few weeks to decompose in moist soil."',
        options: ['decay naturally', 'freeze completely', 'pollute rivers', 'expand quickly'],
        correctAnswer: 'decay naturally',
        explanation: '"Decompose" đồng nghĩa với "decay naturally" (phân hủy tự nhiên).'
      },
      {
        id: 'p10-2-7',
        type: 'multiple-choice',
        category: 'collocation',
        prompt: 'Turning off lights when leaving the classroom helps us ______ electricity.',
        options: ['conserve', 'destroy', 'pollute', 'waste'],
        correctAnswer: 'conserve',
        explanation: '"Conserve electricity" nghĩa là tiết kiệm điện năng.'
      }
    ],
    bossQuestions: [
      {
        id: 'b10-2-1',
        question: 'Chọn dạng Bị động đúng: "People will plant more green trees along the road."',
        options: [
          'More green trees will be planted along the road.',
          'More green trees will plant along the road.',
          'More green trees is planted along the road.',
          'More green trees have been plant along the road.'
        ],
        correctAnswer: 0,
        damage: 30,
        explanation: 'Cấu trúc bị động thì Tương lai đơn: S + will be + V3/ed.'
      },
      {
        id: 'b10-2-2',
        question: 'Tìm từ TRÁI NGHĨA CẤP CAO với "CONSERVE":',
        options: ['squander', 'protect', 'maintain', 'preserve'],
        correctAnswer: 0,
        damage: 30,
        explanation: '"Conserve" (bảo tồn tiết kiệm) trái nghĩa với "squander" (lãng phí, hoang phí).'
      },
      {
        id: 'b10-2-3',
        question: 'Chọn câu đúng: "If we continue to cut down forests, many species ______ their natural habitats."',
        options: ['will lose', 'lose', 'lost', 'had lost'],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Câu điều kiện loại 1: If + HTĐ, S + will + V-inf.'
      },
      {
        id: 'b10-2-4',
        question: 'Từ "ECO-FRIENDLY" đồng nghĩa với cụm từ nào?',
        options: ['environmentally sound', 'severely toxic', 'extremely costly', 'artificially manufactured'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Eco-friendly" đồng nghĩa với "environmentally sound" (an toàn, lành mạnh cho môi trường).'
      }
    ]
  },

  // UNIT 3: MUSIC
  {
    id: 'g10-u03',
    grade: 10,
    unit: 3,
    title: 'Music',
    realmName: 'Cầm Thi Cảnh - Tiếng Đàn Diệu Kỳ',
    guardianName: 'Liên Phạm',
    guardianColor: '#7c3aed',
    storyIntro: 'Cung đàn Cầm Thi vang lên giữa mây ngàn. Hộ pháp Liên Phạm thử thách thính lực và vốn từ thi ca nghệ thuật để tiêu trừ tiếng ồn ma quái của Tà Âm.',
    bossName: 'Tà Âm Ma Vương',
    bossTitle: 'Hộ Pháp Hỗn Loạn Âm Điệu',
    bossHp: 100,
    xpReward: 160,
    readingPassage: {
      title: 'The Harmony of Folk Music and Modern Rhythms',
      topic: 'Sự hòa quyện giữa âm nhạc dân gian truyền thống và nhạc trẻ đương đại',
      fullText: `Music has always been a powerful universal language transcending geographic and cultural boundaries. In recent years, young Vietnamese artists have achieved viral success by blending traditional folk melodies with modern electronic pop beats.\n\nWhen traditional instruments such as the Dan Tranh (zither) and Dan Bau (monochord) are integrated into debut tracks of young contestants on reality television, audiences of all generations are captivated. These innovative compositions not only preserve intangible cultural heritage but also demonstrate to the global music industry that Vietnamese heritage is vibrant, inspirational, and timeless.`,
      keyTakeaway: 'Sự kết hợp giữa nhạc cụ truyền thống và phong cách đương đại tôn vinh bản sắc và truyền cảm hứng quốc tế.',
      vocabularyHighlights: ['phenomenon', 'talented', 'debut', 'audience', 'inspirational']
    },
    vocabulary: [
      {
        id: 'v10-3-1',
        word: 'phenomenon',
        ipa: '/fəˈnɑː.mə.nɑːn/',
        meaningVi: 'hiện tượng đặc biệt, nhân vật nổi bật lạ thường',
        partOfSpeech: 'noun',
        collocation: 'global phenomenon',
        example: 'The teenage pop singer quickly became an international musical phenomenon.',
        synonyms: ['sensation', 'wonder', 'marvel'],
        inPassageSentence: 'The viral music track turned into a cultural phenomenon.'
      },
      {
        id: 'v10-3-2',
        word: 'talented',
        ipa: '/ˈtæl.ən.t̬ɪd/',
        meaningVi: 'có tài năng, năng khiếu bẩm sinh',
        partOfSpeech: 'adjective',
        collocation: 'talented musician',
        example: 'She is a talented pianist who started composing songs at the age of seven.',
        synonyms: ['gifted', 'accomplished', 'virtuoso'],
        antonyms: ['untalented', 'inept', 'clumsy']
      },
      {
        id: 'v10-3-3',
        word: 'debut',
        ipa: '/deɪˈbjuː/',
        meaningVi: 'màn ra mắt công chúng lần đầu',
        partOfSpeech: 'noun / verb',
        collocation: 'debut album / performance',
        example: 'Their debut album achieved platinum status within just one week.',
        synonyms: ['first appearance', 'launch', 'premiere'],
        antonyms: ['farewell performance', 'retirement']
      },
      {
        id: 'v10-3-4',
        word: 'audience',
        ipa: '/ˈɑː.di.əns/',
        meaningVi: 'khán thính giả lắng nghe thưởng thức',
        partOfSpeech: 'noun',
        collocation: 'captivate the audience',
        example: 'The singer captivated the whole audience with her emotional ballad.',
        synonyms: ['spectators', 'listeners', 'crowd']
      },
      {
        id: 'v10-3-5',
        word: 'inspirational',
        ipa: '/ˌɪn.spəˈreɪ.ʃən.əl/',
        meaningVi: 'truyền cảm hứng, lay động tâm hồn',
        partOfSpeech: 'adjective',
        collocation: 'inspirational lyrics',
        example: 'Her song contains highly inspirational messages about chasing your dreams.',
        synonyms: ['uplifting', 'motivational', 'stirring'],
        antonyms: ['discouraging', 'depressing']
      },
      {
        id: 'v10-3-6',
        word: 'melody',
        ipa: '/ˈmel.ə.di/',
        meaningVi: 'giai điệu bài hát',
        partOfSpeech: 'noun',
        collocation: 'catchy melody',
        example: 'The song has a very catchy melody that gets stuck in your head all day.',
        synonyms: ['tune', 'harmony', 'musical line']
      },
      {
        id: 'v10-3-7',
        word: 'contestant',
        ipa: '/kənˈtes.tənt/',
        meaningVi: 'thí sinh tham gia cuộc thi tài năng',
        partOfSpeech: 'noun',
        collocation: 'talented contestant',
        example: 'The young contestant impressed all four celebrity judges with his vocals.',
        synonyms: ['competitor', 'participant', 'candidate']
      },
      {
        id: 'v10-3-8',
        word: 'perform',
        ipa: '/pɚˈfɔːrm/',
        meaningVi: 'biểu diễn, trình diễn',
        partOfSpeech: 'verb',
        collocation: 'perform live on stage',
        example: 'The rock band will perform live on stage tonight in Hanoi.',
        synonyms: ['stage', 'render', 'enact']
      },
      {
        id: 'v10-3-9',
        word: 'judge',
        ipa: '/dʒʌdʒ/',
        meaningVi: 'giám khảo chấm thi',
        partOfSpeech: 'noun',
        collocation: 'celebrity judge',
        example: 'The music contest features three judges who give constructive feedback.',
        synonyms: ['adjudicator', 'evaluator']
      },
      {
        id: 'v10-3-10',
        word: 'release',
        ipa: '/rɪˈliːs/',
        meaningVi: 'phát hành sản phẩm âm nhạc',
        partOfSpeech: 'verb',
        collocation: 'release a new single',
        example: 'The band is going to release their new music video next Friday.',
        synonyms: ['issue', 'launch', 'unveil'],
        antonyms: ['withhold', 'suppress']
      }
    ],
    practice: [
      {
        id: 'p10-3-1',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to TALENTED:\n"The show features many talented contestants from remote mountainous areas."',
        options: ['gifted', 'inept', 'clumsy', 'hesitant'],
        correctAnswer: 'gifted',
        explanation: '"Talented" (có tài năng) đồng nghĩa với "gifted" (thiên bẩm).'
      },
      {
        id: 'p10-3-2',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to INSPIRATIONAL:\n"The speaker delivered an inspirational speech that motivated all attendees."',
        options: ['discouraging', 'uplifting', 'stirring', 'motivational'],
        correctAnswer: 'discouraging',
        explanation: '"Inspirational" (truyền cảm hứng) trái nghĩa với "discouraging" (làm nhụt chí, nản lòng).'
      },
      {
        id: 'p10-3-3',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'When traditional instruments such as the Dan Tranh and Dan Bau are integrated into debut tracks of young contestants on reality television, audiences of all generations are captivated.',
        prompt: 'What happens when Vietnamese traditional instruments are blended into modern songs?',
        options: [
          'Audiences across different generations find them captivating.',
          'Young audiences completely boycott the music shows.',
          'Traditional music is destroyed forever.',
          'International listeners find it impossible to understand.'
        ],
        correctAnswer: 'Audiences across different generations find them captivating.',
        explanation: 'Đoạn văn nêu rõ: "audiences of all generations are captivated."'
      },
      {
        id: 'p10-3-4',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Her ______ album was an instant hit, selling millions of copies worldwide in its opening week.',
        options: ['debut', 'organic', 'litter', 'burden'],
        correctAnswer: 'debut',
        explanation: '"Debut album" là album đầu tay ra mắt công chúng.'
      },
      {
        id: 'p10-3-5',
        type: 'multiple-choice',
        category: 'collocation',
        prompt: 'The young vocalist managed to ______ the audience with her heartfelt singing.',
        options: ['captivate', 'destroy', 'pollute', 'split'],
        correctAnswer: 'captivate',
        explanation: '"Captivate the audience" nghĩa là hớp hồn, cuốn hút toàn bộ khán giả.'
      },
      {
        id: 'p10-3-6',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to PHENOMENON:\n"The teenage singer quickly became a nationwide phenomenon."',
        options: ['sensation', 'failure', 'disaster', 'curfew'],
        correctAnswer: 'sensation',
        explanation: '"Phenomenon" (hiện tượng nổi bật) đồng nghĩa với "sensation".'
      },
      {
        id: 'p10-3-7',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'The song has a catchy ______ that makes it easy for crowds to sing along.',
        options: ['melody', 'garbage', 'appliance', 'ingredient'],
        correctAnswer: 'melody',
        explanation: '"Catchy melody" là giai điệu bắt tai dễ nhớ.'
      }
    ],
    bossQuestions: [
      {
        id: 'b10-3-1',
        question: 'Chọn dạng đúng của động từ: "My sister decided ______ the famous singing competition."',
        options: ['to enter', 'entering', 'entered', 'enter'],
        correctAnswer: 0,
        damage: 30,
        explanation: 'Cấu trúc "decide to do sth" (quyết định làm gì).'
      },
      {
        id: 'b10-3-2',
        question: 'Tìm từ ĐỒNG NGHĨA CẤP CAO với "CAPTIVATE":',
        options: ['mesmerize', 'bore', 'repulse', 'displease'],
        correctAnswer: 0,
        damage: 30,
        explanation: '"Captivate" (cuốn hút say mê) đồng nghĩa với "mesmerize" (mê hoặc, hớp hồn).'
      },
      {
        id: 'b10-3-3',
        question: 'Điền từ nối: "He practiced singing day and night, ______ he could win the grand prize."',
        options: ['so that', 'because of', 'although', 'despite'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"So that + mệnh đề" chỉ mục đích (để mà).'
      },
      {
        id: 'b10-3-4',
        question: 'Từ trái nghĩa với "DEBUT" (màn ra mắt) là:',
        options: ['farewell performance', 'first appearance', 'launch', 'premiere'],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Trái nghĩa với "debut" (màn ra mắt lần đầu) là "farewell performance" (màn biểu diễn từ biệt/chia tay).'
      }
    ]
  },

  // UNIT 4: FOR A BETTER COMMUNITY
  {
    id: 'g10-u04',
    grade: 10,
    unit: 4,
    title: 'For a Better Community',
    realmName: 'Tâm Từ Cảnh - Tình Nghĩa Giang Hồ',
    guardianName: 'Nguyệt Nguyễn',
    guardianColor: '#d97706',
    storyIntro: 'Giang hồ không chỉ có đao kiếm, mà trước hết là nghĩa hiệp vị tha. Nguyệt Nguyễn hộ pháp cùng bạn đem lòng nhân ái thắp sáng những bản làng vùng cao xa xôi.',
    bossName: 'Lãnh Huyết Vô Tình',
    bossTitle: 'Hộ Pháp Băng Giá - Kẻ Ích Kỷ Lạnh Lùng',
    bossHp: 100,
    xpReward: 160,
    readingPassage: {
      title: 'The Borderless Classroom: Bringing Hope to the Highlands',
      topic: 'Lớp học không biên giới của cô giáo Hà Ánh Phượng tại vùng cao Phú Thọ',
      fullText: `Volunteering is not simply about giving away material resources; it is about empowering disadvantaged communities to unlock their full potential. In a remote high school in Phu Tho province, teacher Ha Anh Phuong pioneered the inspiring "borderless classroom" model.\n\nUsing simple laptops and internet connections, she connected ethnic minority students with peers and experts across more than fifty nations. Through cultural exchanges and collaborative projects, the students not only improved their English fluency but also boosted their self-confidence immensely. Her boundless dedication proves that genuine empathy and innovative volunteering can transcend physical geography, fostering a more equitable society.`,
      keyTakeaway: 'Sự cống hiến và giáo dục không biên giới giúp trao quyền cho học sinh vùng cao tự tin bước ra thế giới.',
      vocabularyHighlights: ['community service', 'volunteer', 'disadvantaged', 'dedication', 'boost confidence']
    },
    vocabulary: [
      {
        id: 'v10-4-1',
        word: 'community service',
        ipa: '/kəˈmjuː.nə.t̬i ˈsɝː.vɪs/',
        meaningVi: 'hoạt động công ích phục vụ cộng đồng',
        partOfSpeech: 'noun phrase',
        collocation: 'participate in community service',
        example: 'High school students are encouraged to engage in community service.',
        synonyms: ['civic duty', 'social work', 'public service']
      },
      {
        id: 'v10-4-2',
        word: 'volunteer',
        ipa: '/ˌvɑː.lənˈtɪr/',
        meaningVi: 'người tình nguyện, xung phong giúp đỡ',
        partOfSpeech: 'noun / verb',
        collocation: 'work as a volunteer',
        example: 'She decided to volunteer at the local animal shelter every Saturday.',
        synonyms: ['unpaid worker', 'altruist'],
        antonyms: ['mercenary', 'paid worker']
      },
      {
        id: 'v10-4-3',
        word: 'donate',
        ipa: '/ˈdoʊ.neɪt/',
        meaningVi: 'quyên góp, ủng hộ tiền của hoặc hiện vật',
        partOfSpeech: 'verb',
        collocation: 'donate money / clothes to charity',
        example: 'Students donated warm clothes and books to children in mountainous areas.',
        synonyms: ['contribute', 'give away', 'bestow'],
        antonyms: ['withhold', 'confiscate', 'receive']
      },
      {
        id: 'v10-4-4',
        word: 'disadvantaged',
        ipa: '/ˌdɪs.ədˈvæn.t̬ɪdʒd/',
        meaningVi: 'có hoàn cảnh khó khăn, thiệt thòi',
        partOfSpeech: 'adjective',
        collocation: 'disadvantaged children',
        example: 'The charity project provides free English classes for disadvantaged youths.',
        synonyms: ['underprivileged', 'deprived', 'needy'],
        antonyms: ['privileged', 'wealthy', 'advantaged']
      },
      {
        id: 'v10-4-5',
        word: 'non-profit organisation',
        ipa: '/ˌnɑːnˈprɑː.fɪt ˌɔːr.ɡən.əˈzeɪ.ʃən/',
        meaningVi: 'tổ chức phi lợi nhuận vì xã hội',
        partOfSpeech: 'noun phrase',
        collocation: 'establish a non-profit organisation',
        example: 'A non-profit organisation operates to benefit society rather than make money.',
        synonyms: ['charitable body', 'NGO']
      },
      {
        id: 'v10-4-6',
        word: 'generous',
        ipa: '/ˈdʒen.ər.əs/',
        meaningVi: 'hào phóng, rộng lượng, thơm thảo',
        partOfSpeech: 'adjective',
        collocation: 'generous donation',
        example: 'Thanks to generous contributions from local businesses, the school was built.',
        synonyms: ['benevolent', 'bountiful', 'magnanimous'],
        antonyms: ['selfish', 'stingy', 'miserly']
      },
      {
        id: 'v10-4-7',
        word: 'remote area',
        ipa: '/rɪˈmoʊt ˈer.i.ə/',
        meaningVi: 'vùng sâu vùng xa xôi hẻo lánh',
        partOfSpeech: 'noun phrase',
        collocation: 'reach remote areas',
        example: 'Teacher Ha Anh Phuong used borderless classrooms to connect pupils in remote areas.',
        synonyms: ['isolated region', 'outlying district'],
        antonyms: ['metropolitan center', 'urban core']
      },
      {
        id: 'v10-4-8',
        word: 'dedication',
        ipa: '/ˌded.əˈkeɪ.ʃən/',
        meaningVi: 'sự cống hiến, tận tụy hết lòng',
        partOfSpeech: 'noun',
        collocation: 'dedication to teaching',
        example: 'Her remarkable dedication to community education earned worldwide praise.',
        synonyms: ['devotion', 'commitment', 'perseverance'],
        antonyms: ['apathy', 'indifference', 'neglect']
      },
      {
        id: 'v10-4-9',
        word: 'raise funds',
        ipa: '/reɪz fʌndz/',
        meaningVi: 'gây quỹ, kêu gọi tài trợ từ thiện',
        partOfSpeech: 'verb phrase',
        collocation: 'raise funds for flood victims',
        example: 'Our school music concert aims to raise funds for the local orphanage.',
        synonyms: ['collect contributions', 'solicit donations']
      },
      {
        id: 'v10-4-10',
        word: 'boost confidence',
        ipa: '/buːst ˈkɑːn.fə.dəns/',
        meaningVi: 'nâng cao lòng tự tin, tiếp thêm sức mạnh tinh thần',
        partOfSpeech: 'verb phrase',
        collocation: 'boost students’ confidence',
        example: 'Volunteering helps teenagers boost confidence and develop life skills.',
        synonyms: ['enhance self-esteem', 'inspire courage'],
        antonyms: ['shatter confidence', 'demoralize']
      }
    ],
    practice: [
      {
        id: 'p10-4-1',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to DISADVANTAGED:\n"The scholarship program assists disadvantaged youths from remote districts."',
        options: ['underprivileged', 'privileged', 'wealthy', 'affluent'],
        correctAnswer: 'underprivileged',
        explanation: '"Disadvantaged" (thiệt thòi khó khăn) đồng nghĩa với "underprivileged".'
      },
      {
        id: 'p10-4-2',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to GENEROUS:\n"He made a generous donation to build a community library."',
        options: ['miserly', 'benevolent', 'bountiful', 'kindhearted'],
        correctAnswer: 'miserly',
        explanation: '"Generous" (hào phóng rộng lượng) trái nghĩa với "miserly" (keo kiệt bủn xỉn).'
      },
      {
        id: 'p10-4-3',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'Her boundless dedication proves that genuine empathy and innovative volunteering can transcend physical geography, fostering a more equitable society.',
        prompt: 'What was the main outcome of teacher Ha Anh Phuong’s borderless classroom model?',
        options: [
          'It proved that innovative volunteering can transcend physical borders to help students.',
          'It required every student to study abroad in Europe.',
          'It replaced all human teachers with automated robots.',
          'It shut down all traditional textbooks completely.'
        ],
        correctAnswer: 'It proved that innovative volunteering can transcend physical borders to help students.',
        explanation: 'Đoạn trích khẳng định: "innovative volunteering can transcend physical geography, fostering a more equitable society."'
      },
      {
        id: 'p10-4-4',
        type: 'multiple-choice',
        category: 'collocation',
        prompt: 'They organized a charity marathon to ______ funds for impoverished pupils.',
        options: ['raise', 'rise', 'lift', 'split'],
        correctAnswer: 'raise',
        explanation: 'Cụm từ "raise funds" nghĩa là gây quỹ từ thiện.'
      },
      {
        id: 'p10-4-5',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to DEDICATION:\n"Her lifelong dedication to nursing inspired the whole village."',
        options: ['indifference', 'devotion', 'commitment', 'loyalty'],
        correctAnswer: 'indifference',
        explanation: '"Dedication" (sự tận tâm cống hiến) trái nghĩa với "indifference" (thờ ơ lãnh đạm).'
      },
      {
        id: 'p10-4-6',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to REMOTE:\n"Many teachers travel long distances to teach in remote mountain valleys."',
        options: ['isolated', 'crowded', 'convenient', 'metropolitan'],
        correctAnswer: 'isolated',
        explanation: '"Remote" (xa xôi hẻo lánh) đồng nghĩa với "isolated".'
      },
      {
        id: 'p10-4-7',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Doing volunteer projects is a wonderful way for high schoolers to boost their ______.',
        options: ['self-confidence', 'carbon footprint', 'traffic jam', 'curfew'],
        correctAnswer: 'self-confidence',
        explanation: '"Boost self-confidence" là nâng cao lòng tự tin.'
      }
    ],
    bossQuestions: [
      {
        id: 'b10-4-1',
        question: 'Chọn thì đúng: "While we ______ warm clothes, it started to rain heavily."',
        options: ['were delivering', 'are delivering', 'delivered', 'have delivered'],
        correctAnswer: 0,
        damage: 30,
        explanation: 'Hành động đang diễn ra trong quá khứ ("were delivering") thì có hành động khác xen vào ("started").'
      },
      {
        id: 'b10-4-2',
        question: 'Tìm từ ĐỒNG NGHĨA CẤP CAO với "BENEVOLENT":',
        options: ['altruistic and generous', 'malicious and cruel', 'cautious and nervous', 'passive'],
        correctAnswer: 0,
        damage: 30,
        explanation: '"Benevolent" nghĩa là nhân từ, vị tha (altruistic and generous).'
      },
      {
        id: 'b10-4-3',
        question: 'Cụm từ "take part in" đồng nghĩa với:',
        options: ['participate in', 'give up', 'look down on', 'run away from'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Take part in" đồng nghĩa với "participate in" (tham gia).'
      },
      {
        id: 'b10-4-4',
        question: 'Chọn giới từ đúng: "She is passionate ______ helping homeless elders in our town."',
        options: ['about', 'in', 'with', 'at'],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Cụm tính từ: "passionate about doing sth" (đam mê, nhiệt huyết về điều gì).'
      }
    ]
  },

  // UNIT 5: INVENTIONS
  {
    id: 'g10-u05',
    grade: 10,
    unit: 5,
    title: 'Inventions',
    realmName: 'Cơ Quan Cảnh - Tuyệt Kỹ Phát Minh',
    guardianName: 'Hoàng Vân',
    guardianColor: '#e11d48',
    storyIntro: 'Cơ quan bí mật của võ lâm lưu giữ vô số thần khí và phát minh đột phá. Hộ pháp Hoàng Vân tôi luyện cho bạn tư duy sáng tạo công nghệ thời đại số.',
    bossName: 'Hư Vô Thạch Thú',
    bossTitle: 'Hộ Pháp Cổ Hủ - Kẻ Ngăn Trở Đổi Mới',
    bossHp: 100,
    xpReward: 160,
    readingPassage: {
      title: 'Smart Devices and the Transformation of Modern Learning',
      topic: 'Sự chuyển đổi việc học nhờ các thiết bị thông minh và trí tuệ nhân tạo',
      fullText: `Throughout human history, monumental inventions have radically reshaped the contours of everyday existence. From Gutenberg’s printing press to the invention of the microchip, technology enables individuals to process information at unprecedented speeds.\n\nIn contemporary classrooms, bulky desktop computers have been superseded by lightweight, portable tablets powered by artificial intelligence. These versatile devices afford learners instant access to global digital libraries, speech analysis algorithms, and interactive language simulators. By liberating students from geographical constraints, modern educational technologies are truly revolutionizing how humanity acquires knowledge.`,
      keyTakeaway: 'Thiết bị di động thông minh tích hợp AI đã thay thế máy móc cồng kềnh, mở ra kỷ nguyên học tập không giới hạn.',
      vocabularyHighlights: ['artificial intelligence', 'portable', 'innovative', 'breakthrough', 'versatile']
    },
    vocabulary: [
      {
        id: 'v10-5-1',
        word: 'artificial intelligence',
        ipa: '/ˌɑːr.t̬ə.fɪʃ.əl ɪnˈtel.ə.dʒəns/',
        meaningVi: 'trí tuệ nhân tạo (AI)',
        partOfSpeech: 'noun phrase',
        collocation: 'powered by artificial intelligence',
        example: 'Modern smartphones rely on artificial intelligence to enhance photos.',
        synonyms: ['machine learning', 'automated reasoning'],
        inPassageSentence: 'Lightweight tablets are powered by artificial intelligence.'
      },
      {
        id: 'v10-5-2',
        word: 'portable',
        ipa: '/ˈpɔːr.t̬ə.bəl/',
        meaningVi: 'có thể xách tay, dễ dàng mang theo',
        partOfSpeech: 'adjective',
        collocation: 'portable electronic device',
        example: 'Laptops and tablets are portable computers suitable for study on the move.',
        synonyms: ['movable', 'handy', 'transportable'],
        antonyms: ['bulky', 'immovable', 'stationary']
      },
      {
        id: 'v10-5-3',
        word: 'innovative',
        ipa: '/ˈɪn.ə.veɪ.t̬ɪv/',
        meaningVi: 'mang tính đổi mới, sáng tạo đột phá',
        partOfSpeech: 'adjective',
        collocation: 'innovative solution',
        example: 'Her innovative teaching method connected students with global peers.',
        synonyms: ['groundbreaking', 'inventive', 'novel'],
        antonyms: ['outdated', 'conventional', 'conservative']
      },
      {
        id: 'v10-5-4',
        word: 'breakthrough',
        ipa: '/ˈbreɪk.θruː/',
        meaningVi: 'bước đột phá lớn',
        partOfSpeech: 'noun',
        collocation: 'technological breakthrough',
        example: 'The invention of the internet was a historic technological breakthrough.',
        synonyms: ['quantum leap', 'triumph', 'major discovery'],
        antonyms: ['setback', 'stalemate', 'regression']
      },
      {
        id: 'v10-5-5',
        word: 'device',
        ipa: '/dɪˈvaɪs/',
        meaningVi: 'thiết bị thông minh, dụng cụ',
        partOfSpeech: 'noun',
        collocation: 'smart electronic device',
        example: 'Electronic devices help pupils look up vocabulary and practice pronunciation.',
        synonyms: ['gadget', 'appliance', 'apparatus']
      },
      {
        id: 'v10-5-6',
        word: 'transform',
        ipa: '/trænˈsfɔːrm/',
        meaningVi: 'biến đổi sâu sắc, chuyển hóa toàn diện',
        partOfSpeech: 'verb',
        collocation: 'transform daily life',
        example: 'Digital technology has transformed how people learn foreign languages.',
        synonyms: ['revolutionize', 'alter', 'transfigure'],
        antonyms: ['preserve', 'maintain status quo']
      },
      {
        id: 'v10-5-7',
        word: 'patent',
        ipa: '/ˈpæt.ənt/',
        meaningVi: 'bằng sáng chế, chứng nhận độc quyền phát minh',
        partOfSpeech: 'noun / verb',
        collocation: 'apply for a patent',
        example: 'The inventor received a prestigious patent for his clean energy device.',
        synonyms: ['copyright', 'license', 'exclusive right']
      },
      {
        id: 'v10-5-8',
        word: 'versatile',
        ipa: '/ˈvɝː.sə.t̬aɪl/',
        meaningVi: 'đa năng, linh hoạt trong nhiều công dụng',
        partOfSpeech: 'adjective',
        collocation: 'versatile tool',
        example: 'The 3D printer is a versatile machine that can produce complex shapes.',
        synonyms: ['all-round', 'adaptable', 'multi-purpose'],
        antonyms: ['inflexible', 'limited', 'single-purpose']
      },
      {
        id: 'v10-5-9',
        word: 'inspire',
        ipa: '/ɪnˈspaɪr/',
        meaningVi: 'truyền cảm hứng sáng chế',
        partOfSpeech: 'verb',
        collocation: 'inspire inventors',
        example: 'Nature often inspires scientists to create biomimetic inventions.',
        synonyms: ['stimulate', 'arouse', 'motivate'],
        antonyms: ['discourage', 'deter']
      },
      {
        id: 'v10-5-10',
        word: 'bulky',
        ipa: '/ˈbʌl.ki/',
        meaningVi: 'cồng kềnh, chiếm nhiều diện tích',
        partOfSpeech: 'adjective',
        collocation: 'bulky equipment',
        example: 'Early computers were very bulky and filled up whole rooms.',
        synonyms: ['cumbersome', 'ponderous', 'unwieldy'],
        antonyms: ['compact', 'portable', 'streamlined']
      }
    ],
    practice: [
      {
        id: 'p10-5-1',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to BREAKTHROUGH:\n"The invention of mRNA vaccines marked a historic medical breakthrough."',
        options: ['major achievement', 'regretful failure', 'minor setback', 'serious danger'],
        correctAnswer: 'major achievement',
        explanation: '"Breakthrough" (bước đột phá lớn) đồng nghĩa với "major achievement".'
      },
      {
        id: 'p10-5-2',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to BULKY:\n"Old vacuum tube radios were bulky and hard to relocate."',
        options: ['compact', 'ponderous', 'cumbersome', 'clumsy'],
        correctAnswer: 'compact',
        explanation: '"Bulky" (cồng kềnh nặng nề) trái nghĩa với "compact" (nhỏ gọn, tiện lợi).'
      },
      {
        id: 'p10-5-3',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'In contemporary classrooms, bulky desktop computers have been superseded by lightweight, portable tablets powered by artificial intelligence.',
        prompt: 'According to the passage, what has replaced bulky desktop computers in contemporary classrooms?',
        options: [
          'Lightweight, portable tablets powered by AI.',
          'Heavy mechanical typewriters.',
          'Traditional paper encyclopedias.',
          'Stationary chalkboards.'
        ],
        correctAnswer: 'Lightweight, portable tablets powered by AI.',
        explanation: 'Đoạn văn nêu rõ: "bulky desktop computers have been superseded by lightweight, portable tablets powered by artificial intelligence."'
      },
      {
        id: 'p10-5-4',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to VERSATILE:\n"A smartphone is a versatile gadget with hundreds of utilities."',
        options: ['inflexible and limited', 'all-round', 'adaptable', 'multi-purpose'],
        correctAnswer: 'inflexible and limited',
        explanation: '"Versatile" (đa năng linh hoạt) trái nghĩa với "inflexible and limited" (cứng nhắc, công dụng hạn hẹp).'
      },
      {
        id: 'p10-5-5',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to INNOVATIVE:\n"Scientists have developed innovative solar batteries that function even during rain."',
        options: ['inventive and modern', 'traditional and dated', 'harmful and toxic', 'ordinary'],
        correctAnswer: 'inventive and modern',
        explanation: '"Innovative" (đổi mới sáng tạo) đồng nghĩa với "inventive and modern".'
      },
      {
        id: 'p10-5-6',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Thomas Edison applied for hundreds of ______ to protect his groundbreaking inventions.',
        options: ['patents', 'chores', 'footprints', 'audiences'],
        correctAnswer: 'patents',
        explanation: '"Patents" là các bằng sáng chế bảo hộ độc quyền phát minh.'
      },
      {
        id: 'p10-5-7',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'The laptop is very light and ______, making it ideal for traveling students.',
        options: ['portable', 'bulky', 'polluted', 'disadvantaged'],
        correctAnswer: 'portable',
        explanation: '"Portable" là có thể dễ dàng xách tay mang theo.'
      }
    ],
    bossQuestions: [
      {
        id: 'b10-5-1',
        question: 'Chọn cấu trúc Hiện tại hoàn thành đúng: "Scientists ______ thousands of useful apps since 2010."',
        options: ['have developed', 'developed', 'are developing', 'develop'],
        correctAnswer: 0,
        damage: 30,
        explanation: 'Dấu hiệu "since 2010" đi với thì Hiện tại hoàn thành (have developed).'
      },
      {
        id: 'b10-5-2',
        question: 'Từ "INNOVATIVE" có nghĩa gần nhất với:',
        options: ['creative and groundbreaking', 'old-fashioned', 'cheap and simple', 'harmful and toxic'],
        correctAnswer: 0,
        damage: 30,
        explanation: '"Innovative" nghĩa là đổi mới sáng tạo (creative and groundbreaking).'
      },
      {
        id: 'b10-5-3',
        question: 'Chọn câu viết lại đúng: "Smartphones allow people to access the internet anywhere."',
        options: [
          'Smartphones enable people to browse the internet from any place.',
          'Smartphones prevent people from accessing the internet.',
          'Smartphones make internet connection impossible.',
          'Smartphones forbid people from using the internet.'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Allow/Enable sb to do sth" nghĩa là cho phép/tạo điều kiện cho ai làm gì.'
      },
      {
        id: 'b10-5-4',
        question: 'Từ trái nghĩa với "BREAKTHROUGH" là:',
        options: ['setback', 'advance', 'triumph', 'discovery'],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Trái nghĩa với "breakthrough" (bước đột phá thăng tiến) là "setback" (bước lùi, trở ngại trì trệ).'
      }
    ]
  },

  // UNIT 6: GENDER EQUALITY
  {
    id: 'g10-u06',
    grade: 10,
    unit: 6,
    title: 'Gender Equality',
    realmName: 'Bình Đẳng Cảnh - Kiếm Khí Song Toàn',
    guardianName: 'Phương Tú',
    guardianColor: '#059669',
    storyIntro: 'Tại Bình Đẳng Cảnh, võ học không phân biệt nam nữ. Ai có ý chí sắt đá và lòng kiên định đều có thể trở thành cao thủ võ lâm chấn hưng thiên hạ.',
    bossName: 'Cựu Lệ Phong Kiến',
    bossTitle: 'Hộ Pháp Định Kiến - Kẻ Trói Buộc Nữ Nhi',
    bossHp: 100,
    xpReward: 170,
    readingPassage: {
      title: 'Shattering the Glass Ceiling: Women Pioneering Science and Governance',
      topic: 'Xóa bỏ định kiến giới tính và trao quyền cho phụ nữ trong khoa học và lãnh đạo',
      fullText: `For centuries, stubborn gender biases confined women to domestic spheres, severely circumscribing their educational and professional avenues. High-paying fields such as aerospace engineering, cybernetics, and executive governance were overwhelmingly male-dominated.\n\nNevertheless, progressive global movements and targeted legislation have begun to dismantle these artificial barriers. When organizations provide equal employment opportunities and actively eliminate the wage gap, societal prosperity accelerates. Empowering women and girls through quality education unlocks immense intellectual capital, proving undeniably that leadership and genius know no gender.`,
      keyTakeaway: 'Xóa bỏ khoảng cách tiền lương và định kiến giúp giải phóng tiềm năng sáng tạo của phụ nữ, đem lại thịnh vượng xã hội.',
      vocabularyHighlights: ['gender equality', 'wage gap', 'discrimination', 'eliminate', 'empower']
    },
    vocabulary: [
      {
        id: 'v10-6-1',
        word: 'gender equality',
        ipa: '/ˈdʒen.dɚ iˈkwɑː.lə.t̬i/',
        meaningVi: 'bình đẳng giới, quyền bình đẳng nam nữ',
        partOfSpeech: 'noun phrase',
        collocation: 'achieve gender equality',
        example: 'Promoting gender equality creates a fair and flourishing society.',
        synonyms: ['equal rights for all genders', 'gender parity'],
        antonyms: ['gender disparity', 'gender inequality'],
        inPassageSentence: 'Global movements are fighting to achieve lasting gender equality.'
      },
      {
        id: 'v10-6-2',
        word: 'wage gap',
        ipa: '/ˈweɪdʒ ˌɡæp/',
        meaningVi: 'chênh lệch tiền lương theo giới tính',
        partOfSpeech: 'noun phrase',
        collocation: 'narrow the gender wage gap',
        example: 'Governments are taking steps to eliminate the gender wage gap.',
        synonyms: ['income disparity', 'pay differential'],
        antonyms: ['pay equity', 'equal pay']
      },
      {
        id: 'v10-6-3',
        word: 'discrimination',
        ipa: '/dɪˌskrɪm.əˈneɪ.ʃən/',
        meaningVi: 'sự phân biệt đối xử bất công',
        partOfSpeech: 'noun',
        collocation: 'fight against discrimination',
        example: 'Laws must be strictly enforced to prohibit gender discrimination at work.',
        synonyms: ['prejudice', 'bias', 'inequity', 'bigotry'],
        antonyms: ['impartiality', 'fairness', 'tolerance']
      },
      {
        id: 'v10-6-4',
        word: 'eliminate',
        ipa: '/iˈlɪm.ə.neɪt/',
        meaningVi: 'xóa bỏ, loại trừ hoàn toàn',
        partOfSpeech: 'verb',
        collocation: 'eliminate barriers / poverty',
        example: 'We must work together to eliminate outdated biases against female leaders.',
        synonyms: ['eradicate', 'abolish', 'wipe out'],
        antonyms: ['perpetuate', 'retain', 'preserve']
      },
      {
        id: 'v10-6-5',
        word: 'male-dominated',
        ipa: '/ˈmeɪl ˌdɑː.mə.neɪ.t̬ɪd/',
        meaningVi: 'nam giới chiếm đa số / thống trị',
        partOfSpeech: 'adjective',
        collocation: 'male-dominated industry',
        example: 'More women are pursuing engineering and breaking into male-dominated fields.',
        synonyms: ['patriarchal', 'male-led'],
        antonyms: ['gender-balanced', 'female-dominated']
      },
      {
        id: 'v10-6-6',
        word: 'empower',
        ipa: '/ɪmˈpaʊ.ɚ/',
        meaningVi: 'trao quyền, tiếp thêm năng lực và tiếng nói',
        partOfSpeech: 'verb',
        collocation: 'empower women and girls',
        example: 'Education is the most powerful tool to empower young women worldwide.',
        synonyms: ['authorize', 'enable', 'emancipate'],
        antonyms: ['disempower', 'oppress', 'subjugate']
      },
      {
        id: 'v10-6-7',
        word: 'leadership',
        ipa: '/ˈliː.dɚ.ʃɪp/',
        meaningVi: 'vai trò lãnh đạo, năng lực dẫn dắt',
        partOfSpeech: 'noun',
        collocation: 'take on leadership roles',
        example: 'Female executives excel in leadership roles across multinational companies.',
        synonyms: ['command', 'guidance', 'governance']
      },
      {
        id: 'v10-6-8',
        word: 'opportunity',
        ipa: '/ˌɑː.pɚˈtuː.nə.t̬i/',
        meaningVi: 'cơ hội, thời cơ phát triển',
        partOfSpeech: 'noun',
        collocation: 'equal employment opportunity',
        example: 'Every student deserves an equal opportunity to attend university.',
        synonyms: ['chance', 'avenue', 'opening'],
        antonyms: ['obstacle', 'barrier', 'disadvantage']
      },
      {
        id: 'v10-6-9',
        word: 'bias',
        ipa: '/ˈbaɪ.əs/',
        meaningVi: 'định kiến, thiên vị',
        partOfSpeech: 'noun',
        collocation: 'gender bias',
        example: 'Schools should teach children to overcome unconscious gender bias.',
        synonyms: ['prejudice', 'partiality', 'favoritism'],
        antonyms: ['neutrality', 'objectivity', 'fairness']
      },
      {
        id: 'v10-6-10',
        word: 'workforce',
        ipa: '/ˈwɝːk.fɔːrs/',
        meaningVi: 'lực lượng lao động trong nền kinh tế',
        partOfSpeech: 'noun',
        collocation: 'join the workforce',
        example: 'Women make up almost fifty percent of Vietnam’s national workforce.',
        synonyms: ['labor force', 'working population']
      }
    ],
    practice: [
      {
        id: 'p10-6-1',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to ELIMINATE:\n"Governments should take decisive measures to eliminate child labor and discrimination."',
        options: ['eradicate', 'perpetuate', 'protect', 'encourage'],
        correctAnswer: 'eradicate',
        explanation: '"Eliminate" (loại trừ, xóa bỏ) đồng nghĩa với "eradicate".'
      },
      {
        id: 'p10-6-2',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to EMPOWER:\n"Education aims to empower young girls to become proactive community leaders."',
        options: ['oppress', 'emancipate', 'enable', 'authorize'],
        correctAnswer: 'oppress',
        explanation: '"Empower" (trao quyền giải phóng) trái nghĩa với "oppress" (áp bức, đè nén).'
      },
      {
        id: 'p10-6-3',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'When organizations provide equal employment opportunities and actively eliminate the wage gap, societal prosperity accelerates.',
        prompt: 'What happens when workplaces eliminate the gender wage gap according to the text?',
        options: [
          'Societal prosperity accelerates.',
          'Economic growth comes to a sudden halt.',
          'Men refuse to work in science.',
          'Company profits drop significantly.'
        ],
        correctAnswer: 'Societal prosperity accelerates.',
        explanation: 'Đoạn văn chỉ rõ: "societal prosperity accelerates."'
      },
      {
        id: 'p10-6-4',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to DISCRIMINATION:\n"We must eradicate discrimination in universities and corporations."',
        options: ['fairness', 'bigotry', 'prejudice', 'partiality'],
        correctAnswer: 'fairness',
        explanation: '"Discrimination" (phân biệt đối xử) trái nghĩa với "fairness" (sự công bằng chính trực).'
      },
      {
        id: 'p10-6-5',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to BIAS:\n"Hiring policies should be completely free from gender bias."',
        options: ['prejudice', 'neutrality', 'fairness', 'wisdom'],
        correctAnswer: 'prejudice',
        explanation: '"Bias" (định kiến thiên lệch) đồng nghĩa với "prejudice".'
      },
      {
        id: 'p10-6-6',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Piloting commercial airplanes used to be a ______ profession, but today many women fly jets.',
        options: ['male-dominated', 'portable', 'organic', 'catchy'],
        correctAnswer: 'male-dominated',
        explanation: '"Male-dominated" là nam giới chiếm ưu thế thống trị.'
      },
      {
        id: 'p10-6-7',
        type: 'multiple-choice',
        category: 'collocation',
        prompt: 'Equal pay for equal work helps close the gender wage ______ between workers.',
        options: ['gap', 'bond', 'chore', 'patron'],
        correctAnswer: 'gap',
        explanation: '"Wage gap" là khoảng cách thu nhập theo giới tính.'
      }
    ],
    bossQuestions: [
      {
        id: 'b10-6-1',
        question: 'Chọn dạng đúng của Động từ Khuyết thiếu bị động: "Men and women ______ equally in all workplaces."',
        options: ['must be treated', 'must treat', 'must treating', 'must have treated'],
        correctAnswer: 0,
        damage: 30,
        explanation: 'Cấu trúc bị động với modal verb: Modal + be + V3/ed (must be treated).'
      },
      {
        id: 'b10-6-2',
        question: 'Tìm từ ĐỒNG NGHĨA CẤP CAO với "EMANCIPATE":',
        options: ['liberate and empower', 'enslave and imprison', 'punish and scold', 'confuse'],
        correctAnswer: 0,
        damage: 30,
        explanation: '"Emancipate" nghĩa là giải phóng, trao quyền tự do (liberate and empower).'
      },
      {
        id: 'b10-6-3',
        question: 'Chọn câu thể hiện quan điểm bình đẳng giới đúng đắn:',
        options: [
          'Career choices should be determined by abilities and passions, not gender.',
          'Only men should be permitted to take leadership roles.',
          'Women should solely stay at home doing unpaid chores.',
          'Higher education is only worthwhile for male students.'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Lựa chọn sự nghiệp phải dựa trên năng lực và đam mê chứ không phụ thuộc vào giới tính.'
      },
      {
        id: 'b10-6-4',
        question: 'Từ trái nghĩa với "ELIMINATE" là:',
        options: ['perpetuate', 'abolish', 'eradicate', 'wipe out'],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Trái nghĩa với "eliminate" (loại bỏ) là "perpetuate" (duy trì kéo dài mãi mãi).'
      }
    ]
  }
];
