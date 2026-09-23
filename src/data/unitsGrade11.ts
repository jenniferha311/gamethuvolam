import { UnitRealm } from '../types/game';

export const UNITS_GRADE_11: UnitRealm[] = [
  // UNIT 1: A LONG AND HEALTHY LIFE
  {
    id: 'g11-u01',
    grade: 11,
    unit: 1,
    title: 'A Long and Healthy Life',
    realmName: 'Trường Sinh Cảnh - Dưỡng Sinh Khí Công',
    guardianName: 'Đặng Trần Hà',
    guardianColor: '#1e3a8a',
    storyIntro: 'Hành tẩu giang hồ cần nội công thâm hậu và sinh lực dồi dào. Đặng Trần Hà hộ pháp truyền trao bí kíp điều hòa khí huyết, dinh dưỡng trường thọ.',
    bossName: 'Bệnh Ma Tà Khí',
    bossTitle: 'Hộ Pháp Ô Uế - Kẻ Làm Suy Kiệt Sinh Lực',
    bossHp: 110,
    xpReward: 180,
    readingPassage: {
      title: 'Centenarian Secrets: Lessons in Longevity and Vitality',
      topic: 'Bí quyết trường thọ và chế độ sinh hoạt của các vùng đất sống lâu',
      fullText: `Why do populations in certain geographic regions, known as "Blue Zones", enjoy substantially higher life expectancy and freedom from chronic illnesses? Longitudinal studies into communities such as Okinawa in Japan reveal that longevity is not purely an accident of genetics, but the cumulative result of daily lifestyle habits.\n\nFirst and foremost, centenarians maintain a balanced diet predominantly comprised of plant-based nutrients, fresh legumes, and antioxidant-rich vegetables, while strictly limiting processed sugar. Furthermore, they engage in gentle, natural workouts throughout the day rather than sedentary routines. Perhaps most decisively, they cultivate robust immune systems through mindful stress reduction and strong social camaraderie. Rather than relying routinely on antibiotics for trivial ailments, they rely on preventive wellness, proving that longevity is achieved by nurturing body, mind, and spirit harmoniously.`,
      keyTakeaway: 'Chế độ ăn giàu thực vật, vận động tự nhiên và tinh thần thư thái là cốt lõi của tuổi thọ trường tồn.',
      vocabularyHighlights: ['life expectancy', 'immune system', 'longevity', 'nutrient', 'balanced diet']
    },
    vocabulary: [
      {
        id: 'v11-1-1',
        word: 'life expectancy',
        ipa: '/ˈlaɪf ɪkˌspek.tən.si/',
        meaningVi: 'tuổi thọ kỳ vọng trung bình',
        partOfSpeech: 'noun phrase',
        collocation: 'increase life expectancy',
        example: 'Advances in medical research have significantly raised the average life expectancy.',
        synonyms: ['average lifespan', 'longevity expectancy'],
        inPassageSentence: 'Blue Zones enjoy substantially higher life expectancy.'
      },
      {
        id: 'v11-1-2',
        word: 'immune system',
        ipa: '/ɪˈmjuːn ˌsɪs.təm/',
        meaningVi: 'hệ thống miễn dịch phòng vệ của cơ thể',
        partOfSpeech: 'noun phrase',
        collocation: 'boost immune system',
        example: 'Eating vitamin-rich citrus fruits helps strengthen your body’s immune system.',
        synonyms: ['bodily defenses', 'immunological system']
      },
      {
        id: 'v11-1-3',
        word: 'antibiotics',
        ipa: '/ˌæn.t̬i.baɪˈɑː.t̬ɪks/',
        meaningVi: 'thuốc kháng sinh tiêu diệt vi khuẩn',
        partOfSpeech: 'noun plural',
        collocation: 'take prescribed antibiotics',
        example: 'You must only take antibiotics when prescribed by a licensed medical doctor.',
        synonyms: ['antimicrobial agents', 'antibacterial drugs']
      },
      {
        id: 'v11-1-4',
        word: 'nutrient',
        ipa: '/ˈnuː.tri.ənt/',
        meaningVi: 'chất dinh dưỡng nuôi dưỡng cơ thể',
        partOfSpeech: 'noun',
        collocation: 'essential nutrients',
        example: 'Fresh vegetables supply essential nutrients, vitamins, and minerals.',
        synonyms: ['nourishment', 'nutritional element'],
        antonyms: ['toxin', 'poison']
      },
      {
        id: 'v11-1-5',
        word: 'workout',
        ipa: '/ˈwɝːk.aʊt/',
        meaningVi: 'buổi tập thể dục rèn luyện thân thể',
        partOfSpeech: 'noun',
        collocation: 'do a regular workout',
        example: 'A thirty-minute workout every morning maintains cardiovascular fitness.',
        synonyms: ['exercise session', 'physical training']
      },
      {
        id: 'v11-1-6',
        word: 'longevity',
        ipa: '/lɑːnˈdʒev.ə.t̬i/',
        meaningVi: 'sự sống lâu, tuổi thọ cao',
        partOfSpeech: 'noun',
        collocation: 'secrets of longevity',
        example: 'A relaxed mindset and clean organic food are the secrets of longevity.',
        synonyms: ['long life', 'macrobiotics', 'durability'],
        antonyms: ['ephemerality', 'short lifespan']
      },
      {
        id: 'v11-1-7',
        word: 'bacteria',
        ipa: '/bækˈtɪr.i.ə/',
        meaningVi: 'vi khuẩn vi sinh vật',
        partOfSpeech: 'noun plural',
        collocation: 'harmful bacteria',
        example: 'Washing your hands with soap kills harmful bacteria and germs.',
        synonyms: ['microbes', 'microorganisms']
      },
      {
        id: 'v11-1-8',
        word: 'prescription',
        ipa: '/prɪˈskrɪp.ʃən/',
        meaningVi: 'đơn thuốc theo chỉ định của bác sĩ',
        partOfSpeech: 'noun',
        collocation: 'follow the prescription',
        example: 'Patients should strictly follow the doctor’s prescription.',
        synonyms: ['medical order', 'recipe']
      },
      {
        id: 'v11-1-9',
        word: 'balanced diet',
        ipa: '/ˌbæl.ənst ˈdaɪ.ət/',
        meaningVi: 'chế độ ăn uống cân bằng đầy đủ dưỡng chất',
        partOfSpeech: 'noun phrase',
        collocation: 'maintain a balanced diet',
        example: 'Maintaining a balanced diet prevents obesity and chronic illnesses.',
        synonyms: ['nutritious eating regimen'],
        antonyms: ['malnutrition', 'unhealthy diet']
      },
      {
        id: 'v11-1-10',
        word: 'fitness',
        ipa: '/ˈfɪt.nəs/',
        meaningVi: 'thể lực dẻo dai, thể trạng tốt',
        partOfSpeech: 'noun',
        collocation: 'physical fitness',
        example: 'Martial arts practice is an excellent way to improve physical fitness.',
        synonyms: ['robust health', 'vigor', 'stamina'],
        antonyms: ['frailty', 'weakness', 'infirmity']
      }
    ],
    practice: [
      {
        id: 'p11-1-1',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to LONGEVITY:\n"Scientists have investigated the determinants of human longevity for decades."',
        options: ['long life', 'sudden demise', 'severe illness', 'high expense'],
        correctAnswer: 'long life',
        explanation: '"Longevity" (tuổi thọ trường thọ) đồng nghĩa với "long life".'
      },
      {
        id: 'p11-1-2',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to ROBUST FITNESS:\n"Daily aerobic exercise ensures robust fitness throughout old age."',
        options: ['physical frailty', 'vigorous health', 'great stamina', 'muscular power'],
        correctAnswer: 'physical frailty',
        explanation: '"Robust fitness" (thể lực dẻo dai cường tráng) trái nghĩa với "physical frailty" (sự ốm yếu gầy mòn).'
      },
      {
        id: 'p11-1-3',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'Longitudinal studies reveal that longevity is not purely an accident of genetics, but the cumulative result of daily lifestyle habits.',
        prompt: 'According to the reading passage, what is the primary determinant of longevity?',
        options: [
          'Cumulative daily lifestyle habits and nutrition.',
          'Blind luck and expensive surgeries.',
          'Consuming large doses of antibiotics daily.',
          'Living completely isolated from human society.'
        ],
        correctAnswer: 'Cumulative daily lifestyle habits and nutrition.',
        explanation: 'Đoạn văn nêu rõ: "longevity is not purely an accident of genetics, but the cumulative result of daily lifestyle habits."'
      },
      {
        id: 'p11-1-4',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Overusing ______ without a doctor’s guidance can make bacteria drug-resistant.',
        options: ['antibiotics', 'prescriptions', 'routines', 'chores'],
        correctAnswer: 'antibiotics',
        explanation: '"Antibiotics" là thuốc kháng sinh.'
      },
      {
        id: 'p11-1-5',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to NUTRIENT:\n"Avocados are rich in essential nutrients and healthy unsaturated fats."',
        options: ['nourishing substance', 'harmful toxin', 'chemical additive', 'synthetic dye'],
        correctAnswer: 'nourishing substance',
        explanation: '"Nutrient" (chất dinh dưỡng) đồng nghĩa với "nourishing substance".'
      },
      {
        id: 'p11-1-6',
        type: 'multiple-choice',
        category: 'collocation',
        prompt: 'Regular exercise and fresh fruits help boost your ______ to fight off seasonal viruses.',
        options: ['immune system', 'wage gap', 'carbon footprint', 'appliances'],
        correctAnswer: 'immune system',
        explanation: '"Immune system" là hệ miễn dịch của cơ thể.'
      },
      {
        id: 'p11-1-7',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to BALANCED DIET:\n"Eating processed junk food creates an imbalanced diet."',
        options: ['malnutrition', 'wholesome eating', 'nutritious meals', 'healthy regimen'],
        correctAnswer: 'malnutrition',
        explanation: '"Balanced diet" (chế độ ăn cân đối dinh dưỡng) trái nghĩa với "malnutrition" (suy dinh dưỡng / chế độ ăn lệch lạc).'
      }
    ],
    bossQuestions: [
      {
        id: 'b11-1-1',
        question: 'Chọn thì đúng: "She ______ jogging every morning since she recovered from illness."',
        options: ['has practiced', 'practiced', 'is practicing', 'will practice'],
        correctAnswer: 0,
        damage: 35,
        explanation: 'Dấu hiệu "since + QKĐ" đi với mệnh đề chính chia thì Hiện tại hoàn thành (has practiced).'
      },
      {
        id: 'b11-1-2',
        question: 'Tìm từ ĐỒNG NGHĨA CẤP CAO với "LONGEVITY":',
        options: ['macrobiosis', 'brevity', 'lethargy', 'paralysis'],
        correctAnswer: 0,
        damage: 30,
        explanation: '"Macrobiosis" là thuật ngữ sinh học chỉ tuổi thọ cao bền vững (longevity).'
      },
      {
        id: 'b11-1-3',
        question: 'Từ "LIFE EXPECTANCY" có nghĩa tương đương với:',
        options: ['average lifespan of a population', 'medical fee per year', 'number of hospital beds', 'daily calorie intake'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Life expectancy" là tuổi thọ bình quân (average lifespan).'
      },
      {
        id: 'b11-1-4',
        question: 'Chọn câu khuyên nhủ đúng ngữ pháp:',
        options: [
          'You should cut down on fast food to stay fit.',
          'You must to cut down on fast food to stay fit.',
          'You should cutting down on fast food to stay fit.',
          'You ought cut down on fast food to stay fit.'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Cấu trúc "should + V-inf" (khuyên nên làm gì).'
      }
    ]
  },

  // UNIT 2: THE GENERATION GAP
  {
    id: 'g11-u02',
    grade: 11,
    unit: 2,
    title: 'The Generation Gap',
    realmName: 'Thế Hệ Cảnh - Cầu Nối Tâm Giao',
    guardianName: 'Liên Phạm',
    guardianColor: '#7c3aed',
    storyIntro: 'Hai bờ thế hệ cách nhau bởi vực thẳm định kiến. Liên Phạm hộ pháp chỉ dẫn bạn dùng sự thấu hiểu và tôn trọng làm cầu nối, hóa giải xung đột gia đình.',
    bossName: 'Hư Không Cách Trở',
    bossTitle: 'Hộ Pháp Cố Chấp - Kẻ Gây Bất Đồng Thế Hệ',
    bossHp: 110,
    xpReward: 180,
    readingPassage: {
      title: 'Bridging the Divide: Communication Across Generations',
      topic: 'Hóa giải khoảng cách thế hệ bằng giao tiếp cởi mở và tôn trọng lẫn nhau',
      fullText: `The divergence in perspectives between older and younger family members, colloquially known as the generation gap, often stems from differing historical environments. Whereas grandparents grew up in an era valuing stability, frugality, and conservative adherence to tradition, digital-native adolescents prioritize autonomy, self-expression, and innovation.\n\nTensions frequently escalate over daily habits such as dress codes, screen time, and academic career choices. However, family sociologists emphasize that conflicts need not be destructive. When parents maintain an open-minded posture and children articulate their aspirations respectfully, both sides can reach fruitful compromises. Building mutual respect enables families to transform ideological friction into enriching intergenerational wisdom.`,
      keyTakeaway: 'Tôn trọng góc nhìn đa chiều và lắng nghe chân thành là chìa khóa thu hẹp khoảng cách thế hệ.',
      vocabularyHighlights: ['generation gap', 'viewpoint', 'conservative', 'curfew', 'open-minded', 'compromise']
    },
    vocabulary: [
      {
        id: 'v11-2-1',
        word: 'generation gap',
        ipa: '/ˌdʒen.əˈreɪ.ʃən ˌɡæp/',
        meaningVi: 'khoảng cách thế hệ, sự khác biệt suy nghĩ giữa cha mẹ và con cái',
        partOfSpeech: 'noun phrase',
        collocation: 'bridge the generation gap',
        example: 'Open communication is the best bridge over the generation gap.',
        synonyms: ['age disparity in outlook', 'intergenerational divide'],
        inPassageSentence: 'The generation gap often stems from differing historical environments.'
      },
      {
        id: 'v11-2-2',
        word: 'viewpoint',
        ipa: '/ˈvjuː.pɔɪnt/',
        meaningVi: 'quan điểm, góc nhìn suy nghĩ',
        partOfSpeech: 'noun',
        collocation: 'from my viewpoint',
        example: 'Parents and teenagers should learn to respect each other’s viewpoints.',
        synonyms: ['perspective', 'standpoint', 'angle of vision']
      },
      {
        id: 'v11-2-3',
        word: 'conservative',
        ipa: '/kənˈsɝː.və.t̬ɪv/',
        meaningVi: 'bảo thủ, chuộng lối cũ truyền thống',
        partOfSpeech: 'adjective',
        collocation: 'conservative parents / views',
        example: 'His grandparents hold conservative views regarding suitable hairstyles.',
        synonyms: ['traditionalist', 'orthodox', 'conventional'],
        antonyms: ['progressive', 'liberal', 'avant-garde']
      },
      {
        id: 'v11-2-4',
        word: 'curfew',
        ipa: '/ˈkɝː.fjuː/',
        meaningVi: 'giờ giới nghiêm phải về nhà',
        partOfSpeech: 'noun',
        collocation: 'strict curfew',
        example: 'She must be home before 10 PM because her father sets a strict curfew.',
        synonyms: ['evening deadline', 'lock-out time']
      },
      {
        id: 'v11-2-5',
        word: 'conflict',
        ipa: '/ˈkɑːn.flɪkt/',
        meaningVi: 'xung đột, mâu thuẫn bất hòa',
        partOfSpeech: 'noun / verb',
        collocation: 'resolve family conflicts',
        example: 'Arguments over screen time can easily trigger conflicts between generations.',
        synonyms: ['discord', 'dispute', 'friction', 'strife'],
        antonyms: ['harmony', 'concord', 'peace']
      },
      {
        id: 'v11-2-6',
        word: 'open-minded',
        ipa: '/ˌoʊ.pənˈmaɪn.dɪd/',
        meaningVi: 'cởi mở, sẵn sàng lắng nghe cái mới',
        partOfSpeech: 'adjective',
        collocation: 'open-minded attitude',
        example: 'Open-minded parents listen patiently before judging their children’s hobbies.',
        synonyms: ['receptive', 'tolerant', 'broad-minded'],
        antonyms: ['narrow-minded', 'intolerant', 'bigoted']
      },
      {
        id: 'v11-2-7',
        word: 'follow in someone’s footsteps',
        ipa: '/ˈfɑː.loʊ ɪn ˈfʊt.steps/',
        meaningVi: 'nối gót, theo nghiệp của thế hệ trước',
        partOfSpeech: 'idiom',
        collocation: 'follow in parents’ footsteps',
        example: 'He decided to study medicine to follow in his mother’s footsteps.',
        synonyms: ['emulate predecessors', 'tread the same path']
      },
      {
        id: 'v11-2-8',
        word: 'independent',
        ipa: '/ˌɪn.dɪˈpen.dənt/',
        meaningVi: 'tự lập, không phụ thuộc',
        partOfSpeech: 'adjective',
        collocation: 'financially independent',
        example: 'Going to boarding school taught him how to become mature and independent.',
        synonyms: ['self-reliant', 'autonomous', 'self-sufficient'],
        antonyms: ['dependent', 'subservient', 'reliant']
      },
      {
        id: 'v11-2-9',
        word: 'compromise',
        ipa: '/ˈkɑːm.prə.maɪz/',
        meaningVi: 'sự thỏa hiệp nhượng bộ để hòa giải',
        partOfSpeech: 'noun / verb',
        collocation: 'reach a compromise',
        example: 'After talking calmly, the parents and daughter reached a fair compromise.',
        synonyms: ['mutual concession', 'middle ground', 'settlement'],
        antonyms: ['intransigence', 'deadlock']
      },
      {
        id: 'v11-2-10',
        word: 'mutual respect',
        ipa: '/ˈmjuː.tʃu.əl rɪˈspekt/',
        meaningVi: 'sự tôn trọng lẫn nhau hai chiều',
        partOfSpeech: 'noun phrase',
        collocation: 'built on mutual respect',
        example: 'Strong family bonds must be built upon sincere mutual respect.',
        synonyms: ['reciprocal esteem', 'interpersonal regard'],
        antonyms: ['mutual contempt', 'disdain']
      }
    ],
    practice: [
      {
        id: 'p11-2-1',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to OPEN-MINDED:\n"Contemporary educators encourage parents to adopt an open-minded approach towards modern youth subcultures."',
        options: ['receptive', 'conservative', 'stubborn', 'intolerant'],
        correctAnswer: 'receptive',
        explanation: '"Open-minded" (cởi mở, sẵn sàng tiếp thu) đồng nghĩa với "receptive".'
      },
      {
        id: 'p11-2-2',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to CONSERVATIVE:\n"Grandfather has conservative ideas regarding proper career paths for young men."',
        options: ['progressive', 'orthodox', 'conventional', 'traditionalist'],
        correctAnswer: 'progressive',
        explanation: '"Conservative" (bảo thủ truyền thống) trái nghĩa với "progressive" (tiến bộ, đổi mới).'
      },
      {
        id: 'p11-2-3',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'When parents maintain an open-minded posture and children articulate their aspirations respectfully, both sides can reach fruitful compromises.',
        prompt: 'How can families turn ideological friction into positive wisdom?',
        options: [
          'Through open-minded listening, respectful dialogue, and reaching compromises.',
          'By forcing teenagers to obey every order unconditionally.',
          'By banning all internet use and cutting family ties.',
          'By avoiding talking to each other altogether.'
        ],
        correctAnswer: 'Through open-minded listening, respectful dialogue, and reaching compromises.',
        explanation: 'Đoạn văn nêu rõ giải pháp: "parents maintain an open-minded posture and children articulate their aspirations respectfully, both sides can reach fruitful compromises."'
      },
      {
        id: 'p11-2-4',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to INDEPENDENT:\n"He wants to lead an independent life in the capital city."',
        options: ['reliant', 'autonomous', 'self-sufficient', 'unconstrained'],
        correctAnswer: 'reliant',
        explanation: '"Independent" (tự lập) trái nghĩa với "reliant" (phụ thuộc, nương tựa).'
      },
      {
        id: 'p11-2-5',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to COMPROMISE:\n"After hours of deliberation, the committee reached a workable compromise."',
        options: ['settlement', 'dispute', 'refusal', 'deadlock'],
        correctAnswer: 'settlement',
        explanation: '"Compromise" (sự thỏa hiệp đạt được) đồng nghĩa với "settlement".'
      },
      {
        id: 'p11-2-6',
        type: 'multiple-choice',
        category: 'collocation',
        prompt: 'She chose to become an architect instead of ______ in her parents’ footsteps as an accountant.',
        options: ['following', 'breaking', 'taking', 'giving'],
        correctAnswer: 'following',
        explanation: 'Thành ngữ "follow in someone’s footsteps" (nối gót theo nghề của ai).'
      },
      {
        id: 'p11-2-7',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'My father doesn’t allow me to stay out late; I have a strict 9:30 PM ______.',
        options: ['curfew', 'antibiotic', 'ingredient', 'breakthrough'],
        correctAnswer: 'curfew',
        explanation: '"Curfew" là giờ giới nghiêm buổi tối.'
      }
    ],
    bossQuestions: [
      {
        id: 'b11-2-1',
        question: 'Chọn Modal Verb diễn tả bổn phận đạo đức: "Children ______ show respect to elderly family members."',
        options: ['ought to', 'must to', 'have', 'might to'],
        correctAnswer: 0,
        damage: 35,
        explanation: 'Cấu trúc "ought to + V-inf" chỉ bổn phận đạo đức.'
      },
      {
        id: 'b11-2-2',
        question: 'Từ "CONSERVATIVE" trái nghĩa với từ nào sau đây?',
        options: ['progressive and modern', 'traditional', 'strict and harsh', 'old-fashioned'],
        correctAnswer: 0,
        damage: 30,
        explanation: '"Conservative" (bảo thủ, truyền thống) trái nghĩa với "progressive and modern" (tiến bộ, hiện đại).'
      },
      {
        id: 'b11-2-3',
        question: 'Chọn câu diễn tả sự cấm đoán tuyệt đối trong gia đình:',
        options: [
          'You mustn’t enter this room without permission.',
          'You don’t have to enter this room.',
          'You needn’t enter this room.',
          'You should enter this room if you want.'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Mustn’t + V-inf" diễn tả sự cấm đoán tuyệt đối.'
      },
      {
        id: 'b11-2-4',
        question: 'Thành ngữ "bridge the gap" có nghĩa là:',
        options: [
          'reduce differences and connect two sides',
          'build a real concrete bridge over a river',
          'make people quarrel more intensely',
          'widen the distance between friends'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Bridge the gap" nghĩa là thu hẹp khoảng cách và gắn kết đôi bên.'
      }
    ]
  },

  // UNIT 3: CITIES OF THE FUTURE
  {
    id: 'g11-u03',
    grade: 11,
    unit: 3,
    title: 'Cities of the Future',
    realmName: 'Tương Lai Cảnh - Thành Trì Trí Tuệ',
    guardianName: 'Phương Tú',
    guardianColor: '#059669',
    storyIntro: 'Cảnh giới đô thị tương lai rực rỡ với xe tự hành và tháp xanh sinh thái. Phương Tú hộ pháp thử thách bạn về kiến thức kiến thiết đô thị bền vững.',
    bossName: 'Hỗn Loạn Đô Thị',
    bossTitle: 'Hộ Pháp Kẹt Xe - Kẻ Gây Tắc Nghẽn Khói Bụi',
    bossHp: 115,
    xpReward: 190,
    readingPassage: {
      title: 'Smart Cities: Designing the High-Tech Urban Ecosystem',
      topic: 'Quy hoạch thành phố thông minh và bền vững cho tương lai',
      fullText: `By the mid-twenty-first century, over seventy percent of the world’s inhabitants are projected to reside in metropolitan centers. To avert the catastrophic collapse of urban infrastructure under such swelling numbers, planners are blueprinting "smart cities" infused with automated digital technologies.\n\nIn these futuristic metropolises, high-density sensor networks constantly regulate traffic rhythms, dispatch autonomous electric shuttles, and recalibrate street lighting according to real-time footfall. Downtown boulevards are reclaimed as leafy pedestrian zones, shielding citizens from exhaust fumes. By marrying high-rise vertical greenery with rooftop solar arrays, smart cities aim to achieve net-zero carbon footprints, vastly elevating the overall quality of life for millions.`,
      keyTakeaway: 'Thành phố thông minh kết hợp mạng cảm biến AI và năng lượng xanh để giảm phát thải và tăng chất lượng sống.',
      vocabularyHighlights: ['smart city', 'infrastructure', 'pedestrian', 'sensor', 'quality of life', 'carbon neutral']
    },
    vocabulary: [
      {
        id: 'v11-3-1',
        word: 'smart city',
        ipa: '/ˈsmɑːrt ˌsɪt.i/',
        meaningVi: 'thành phố thông minh ứng dụng công nghệ IoT và AI',
        partOfSpeech: 'noun phrase',
        collocation: 'develop a smart city',
        example: 'Smart cities utilize automated sensors to optimize traffic and energy.',
        synonyms: ['high-tech metropolis', 'digital urban center']
      },
      {
        id: 'v11-3-2',
        word: 'infrastructure',
        ipa: '/ˈɪn.frəˌstrʌk.tʃɚ/',
        meaningVi: 'cơ sở hạ tầng (cầu đường, mạng lưới điện nước)',
        partOfSpeech: 'noun',
        collocation: 'modern infrastructure',
        example: 'Investing in public transit infrastructure reduces traffic jams.',
        synonyms: ['framework', 'public facilities', 'foundational systems']
      },
      {
        id: 'v11-3-3',
        word: 'pedestrian',
        ipa: '/pəˈdes.tri.ən/',
        meaningVi: 'người đi bộ trên phố',
        partOfSpeech: 'noun',
        collocation: 'pedestrian zone / crossing',
        example: 'The central downtown area is transformed into a peaceful pedestrian street.',
        synonyms: ['walker', 'foot-traveler'],
        antonyms: ['motorist', 'driver']
      },
      {
        id: 'v11-3-4',
        word: 'sensor',
        ipa: '/ˈsen.sɚ/',
        meaningVi: 'thiết bị cảm biến thông minh',
        partOfSpeech: 'noun',
        collocation: 'electronic sensor',
        example: 'Sensors detect air quality and automatically trigger street mist systems.',
        synonyms: ['detector', 'sensing device']
      },
      {
        id: 'v11-3-5',
        word: 'quality of life',
        ipa: '/ˈkwɑː.lə.t̬i əv ˈlaɪf/',
        meaningVi: 'chất lượng cuộc sống của cư dân',
        partOfSpeech: 'noun phrase',
        collocation: 'improve the quality of life',
        example: 'Green parks and clean air significantly improve residents’ quality of life.',
        synonyms: ['living standards', 'well-being']
      },
      {
        id: 'v11-3-6',
        word: 'high-rise',
        ipa: '/ˈhaɪ.raɪz/',
        meaningVi: 'tòa nhà chọc trời, cao tầng',
        partOfSpeech: 'adjective / noun',
        collocation: 'high-rise apartment building',
        example: 'Vertical farming inside high-rise towers supplies vegetables to city folk.',
        synonyms: ['skyscraper', 'multi-story edifice'],
        antonyms: ['low-rise', 'single-story building']
      },
      {
        id: 'v11-3-7',
        word: 'carbon neutral',
        ipa: '/ˌkɑːr.bən ˈnuː.trəl/',
        meaningVi: 'trung hòa carbon, không phát thải ròng',
        partOfSpeech: 'adjective',
        collocation: 'achieve carbon neutral status',
        example: 'Many modern metropolises aim to become carbon neutral by 2050.',
        synonyms: ['net-zero emissions', 'climate neutral']
      },
      {
        id: 'v11-3-8',
        word: 'urban sprawl',
        ipa: '/ˌɝː.bən ˈsprɑːl/',
        meaningVi: 'sự đô thị hóa tràn lan thiếu quy hoạch',
        partOfSpeech: 'noun phrase',
        collocation: 'limit urban sprawl',
        example: 'Smart urban planning helps curb uncontrolled urban sprawl into farmland.',
        synonyms: ['suburban expansion', 'unplanned development']
      },
      {
        id: 'v11-3-9',
        word: 'solar panel',
        ipa: '/ˈsoʊ.lɚ ˌpæn.əl/',
        meaningVi: 'tấm pin thu năng lượng mặt trời',
        partOfSpeech: 'noun phrase',
        collocation: 'install solar panels',
        example: 'Rooftops covered with solar panels generate clean green electricity.',
        synonyms: ['photovoltaic module']
      },
      {
        id: 'v11-3-10',
        word: 'automated',
        ipa: '/ˈɑː.t̬ə.meɪ.t̬ɪd/',
        meaningVi: 'tự động hóa hoàn toàn',
        partOfSpeech: 'adjective',
        collocation: 'automated public transport',
        example: 'Automated electric buses operate smoothly without human drivers.',
        synonyms: ['robotized', 'self-regulating', 'computerized'],
        antonyms: ['manual', 'hand-operated']
      }
    ],
    practice: [
      {
        id: 'p11-3-1',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to AUTOMATED:\n"The city’s automated subway line operates without on-board train drivers."',
        options: ['computerized and driverless', 'manually driven', 'dangerously uncontrolled', 'outdated'],
        correctAnswer: 'computerized and driverless',
        explanation: '"Automated" (tự động hóa) đồng nghĩa với "computerized and driverless".'
      },
      {
        id: 'p11-3-2',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to PEDESTRIAN:\n"The avenue was reserved strictly for pedestrians during the weekend festival."',
        options: ['motorists', 'walkers', 'bystanders', 'commuters on foot'],
        correctAnswer: 'motorists',
        explanation: '"Pedestrian" (người đi bộ) trái nghĩa với "motorist" (người lái xe ô tô/xe máy).'
      },
      {
        id: 'p11-3-3',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'Downtown boulevards are reclaimed as leafy pedestrian zones, shielding citizens from exhaust fumes.',
        prompt: 'What is the purpose of turning downtown streets into leafy pedestrian zones?',
        options: [
          'To protect citizens from hazardous exhaust fumes.',
          'To encourage more heavy diesel trucks into the center.',
          'To force citizens to buy more petrol cars.',
          'To demolish all city historic monuments.'
        ],
        correctAnswer: 'To protect citizens from hazardous exhaust fumes.',
        explanation: 'Đoạn trích nêu: "Downtown boulevards are reclaimed as leafy pedestrian zones, shielding citizens from exhaust fumes."'
      },
      {
        id: 'p11-3-4',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'To protect the environment, the new metropolis aims to become ______ by 2040.',
        options: ['carbon neutral', 'bulky', 'conservative', 'harmful'],
        correctAnswer: 'carbon neutral',
        explanation: '"Carbon neutral" là trạng thái trung hòa lượng phát thải carbon.'
      },
      {
        id: 'p11-3-5',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to INFRASTRUCTURE:\n"Aging infrastructure must be modernized to prevent frequent power blackouts."',
        options: ['foundational facilities', 'private vehicles', 'home appliances', 'clothes'],
        correctAnswer: 'foundational facilities',
        explanation: '"Infrastructure" (cơ sở hạ tầng cơ bản) đồng nghĩa với "foundational facilities".'
      },
      {
        id: 'p11-3-6',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to HIGH-RISE:\n"Modern smart cities blend high-rise towers with green recreational spaces."',
        options: ['single-story low-rise', 'towering skyscraper', 'massive edifice', 'multi-level complex'],
        correctAnswer: 'single-story low-rise',
        explanation: '"High-rise" (cao ốc chọc trời) trái nghĩa với "single-story low-rise" (nhà trệt một tầng).'
      },
      {
        id: 'p11-3-7',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Automated ______ installed on lamp posts monitor air quality and adjust lighting.',
        options: ['sensors', 'chores', 'nutrients', 'workouts'],
        correctAnswer: 'sensors',
        explanation: '"Sensors" là các cảm biến thông minh.'
      }
    ],
    bossQuestions: [
      {
        id: 'b11-3-1',
        question: 'Chọn thì Tương lai tiếp diễn đúng: "This time next week, engineers ______ new electric bus stations."',
        options: ['will be testing', 'tested', 'are testing', 'have tested'],
        correctAnswer: 0,
        damage: 35,
        explanation: 'Dấu hiệu "This time next week" chỉ hành động đang xảy ra tại thời điểm xác định trong tương lai -> Tương lai tiếp diễn.'
      },
      {
        id: 'b11-3-2',
        question: 'Chọn câu ghép sử dụng mệnh đề quan hệ đúng:',
        options: [
          'Eco-towers which generate solar power are being built downtown.',
          'Eco-towers who generate solar power are being built downtown.',
          'Eco-towers where generate solar power are being built downtown.',
          'Eco-towers whom generate solar power are being built downtown.'
        ],
        correctAnswer: 0,
        damage: 30,
        explanation: 'Đại từ quan hệ "which" thay thế cho danh từ chỉ vật làm chủ ngữ ("eco-towers").'
      },
      {
        id: 'b11-3-3',
        question: 'Từ "INFRASTRUCTURE" bao gồm những yếu tố nào?',
        options: [
          'roads, power grids, bridges, and water systems',
          'personal clothes and kitchen utensils',
          'musical songs and artistic lyrics',
          'ancient myths and folklore stories'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Cơ sở hạ tầng gồm đường sá, lưới điện, cầu cống, hệ thống cấp thoát nước.'
      },
      {
        id: 'b11-3-4',
        question: 'Điền từ đúng: "Rooftop gardens help reduce building temperatures ______."',
        options: ['significantly', 'significant', 'significance', 'signify'],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Bổ nghĩa cho động từ "reduce" cần trạng từ "significantly" (một cách đáng kể).'
      }
    ]
  },

  // UNIT 4: ASEAN AND VIET NAM
  {
    id: 'g11-u04',
    grade: 11,
    unit: 4,
    title: 'ASEAN and Viet Nam',
    realmName: 'Minh Ước Cảnh - Hợp Lực Đông Nam',
    guardianName: 'Nguyệt Nguyễn',
    guardianColor: '#d97706',
    storyIntro: 'Mười ngọn kiếm Đông Nam Á kết giao đồng minh. Nguyệt Nguyễn hộ pháp cùng bạn bước lên đài minh ước, quảng bá văn hóa và hội nhập khu vực.',
    bossName: 'Hắc Phong Cô Lập',
    bossTitle: 'Hộ Pháp Chia Rẽ - Kẻ Ngăn Trở Bang Giao',
    bossHp: 115,
    xpReward: 190,
    readingPassage: {
      title: 'Viet Nam in ASEAN: Thirty Years of Proactive Partnership',
      topic: 'Hành trình 30 năm hội nhập và đóng góp của Việt Nam trong ngôi nhà chung ASEAN',
      fullText: `Since officially acceding to ASEAN in July 1995, Viet Nam has evolved from an enthusiastic novice into a proactive, indispensable pillar of Southeast Asian multilateral diplomacy. Grounded in the tenets of the ASEAN Charter, the nation continuously champions regional peace, consensus-building, and economic integration.\n\nViet Nam has successfully hosted major summits and initiated frameworks for sustainable marine conservation and trade facilitation. Concurrently, regular educational festivals and cultural exchanges enable young generations across member states to dismantle historical prejudices and forge genuine solidarity. By maintaining national identity while advancing collective interests, Viet Nam vividly exemplifies the bloc’s unifying motto: "One Vision, One Identity, One Community."`,
      keyTakeaway: 'Việt Nam đóng vai trò trụ cột xây dựng đồng thuận và thúc đẩy tình đoàn kết kinh tế - văn hóa ASEAN.',
      vocabularyHighlights: ['association', 'solidarity', 'charter', 'integration', 'cultural exchange']
    },
    vocabulary: [
      {
        id: 'v11-4-1',
        word: 'association',
        ipa: '/əˌsoʊ.siˈeɪ.ʃən/',
        meaningVi: 'hiệp hội, liên minh tổ chức',
        partOfSpeech: 'noun',
        collocation: 'Association of Southeast Asian Nations',
        example: 'ASEAN stands for the Association of Southeast Asian Nations.',
        synonyms: ['alliance', 'coalition', 'federation']
      },
      {
        id: 'v11-4-2',
        word: 'solidarity',
        ipa: '/ˌsɑː.ləˈder.ə.t̬i/',
        meaningVi: 'tinh thần đoàn kết keo sơn',
        partOfSpeech: 'noun',
        collocation: 'regional solidarity',
        example: 'Member states maintain solidarity to overcome natural disasters together.',
        synonyms: ['unity', 'concord', 'fraternity'],
        antonyms: ['discord', 'division', 'antagonism'],
        inPassageSentence: 'Youth festivals enable young generations to forge genuine solidarity.'
      },
      {
        id: 'v11-4-3',
        word: 'charter',
        ipa: '/ˈtʃɑːr.t̬ɚ/',
        meaningVi: 'hiến chương pháp lý chung',
        partOfSpeech: 'noun',
        collocation: 'the ASEAN Charter',
        example: 'The ASEAN Charter establishes a firm legal framework for regional cooperation.',
        synonyms: ['constitution', 'covenant', 'founding treaty']
      },
      {
        id: 'v11-4-4',
        word: 'integration',
        ipa: '/ˌɪn.t̬əˈɡreɪ.ʃən/',
        meaningVi: 'sự hội nhập kinh tế và văn hóa',
        partOfSpeech: 'noun',
        collocation: 'international integration',
        example: 'Vietnam’s deeper integration into ASEAN boosts export and tourism growth.',
        synonyms: ['incorporation', 'assimilation', 'unification'],
        antonyms: ['isolation', 'segregation']
      },
      {
        id: 'v11-4-5',
        word: 'cultural exchange',
        ipa: '/ˈkʌl.tʃɚ.əl ɪksˈtʃeɪndʒ/',
        meaningVi: 'giao lưu văn hóa giữa các dân tộc',
        partOfSpeech: 'noun phrase',
        collocation: 'youth cultural exchange',
        example: 'Cultural exchange programs foster mutual understanding among students.',
        synonyms: ['intercultural dialogue']
      },
      {
        id: 'v11-4-6',
        word: 'promote peace',
        ipa: '/prəˈmoʊt piːs/',
        meaningVi: 'thúc đẩy hòa bình ổn định',
        partOfSpeech: 'verb phrase',
        collocation: 'promote peace and stability',
        example: 'The primary aim of the block is to promote peace and economic stability.',
        synonyms: ['foster harmony', 'advance tranquility']
      },
      {
        id: 'v11-4-7',
        word: 'member state',
        ipa: '/ˈmem.bɚ steɪt/',
        meaningVi: 'quốc gia thành viên',
        partOfSpeech: 'noun phrase',
        collocation: 'ten ASEAN member states',
        example: 'Vietnam became an official ASEAN member state on July 28, 1995.',
        synonyms: ['constituent nation', 'partner country']
      },
      {
        id: 'v11-4-8',
        word: 'diplomacy',
        ipa: '/dɪˈploʊ.mə.si/',
        meaningVi: 'ngành ngoại giao, thuật bang giao',
        partOfSpeech: 'noun',
        collocation: 'international diplomacy',
        example: 'Peaceful diplomacy resolved disputes and fostered sustainable trade.',
        synonyms: ['statecraft', 'foreign affairs negotiation']
      },
      {
        id: 'v11-4-9',
        word: 'multilateral',
        ipa: '/ˌmʌl.tiˈlæt̬.ɚ.əl/',
        meaningVi: 'đa phương, liên quan nhiều nước',
        partOfSpeech: 'adjective',
        collocation: 'multilateral cooperation',
        example: 'Vietnam actively contributes to multilateral forums across the globe.',
        synonyms: ['many-sided', 'plurilateral'],
        antonyms: ['unilateral', 'bilateral']
      },
      {
        id: 'v11-4-10',
        word: 'identity',
        ipa: '/aɪˈden.t̬ə.t̬i/',
        meaningVi: 'bản sắc văn hóa đặc trưng',
        partOfSpeech: 'noun',
        collocation: 'preserve national identity',
        example: 'While integrating into ASEAN, we proudly uphold our national identity.',
        synonyms: ['character', 'individuality', 'essence']
      }
    ],
    practice: [
      {
        id: 'p11-4-1',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to SOLIDARITY:\n"ASEAN member countries demonstrated deep solidarity during the pandemic recovery."',
        options: ['unity and mutual support', 'hostility and conflict', 'isolation and silence', 'suspicion'],
        correctAnswer: 'unity and mutual support',
        explanation: '"Solidarity" (tinh thần đoàn kết keo sơn) đồng nghĩa với "unity and mutual support".'
      },
      {
        id: 'p11-4-2',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to MULTILATERAL:\n"The nations signed a comprehensive multilateral treaty on digital security."',
        options: ['unilateral', 'collective', 'plurilateral', 'global'],
        correctAnswer: 'unilateral',
        explanation: '"Multilateral" (đa phương nhiều bên) trái nghĩa với "unilateral" (đơn phương một phía).'
      },
      {
        id: 'p11-4-3',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'By maintaining national identity while advancing collective interests, Viet Nam vividly exemplifies the bloc’s unifying motto: "One Vision, One Identity, One Community."',
        prompt: 'What is the official unifying motto of ASEAN highlighted in the reading text?',
        options: [
          '"One Vision, One Identity, One Community."',
          '"Economic Profit Above All Borders."',
          '"One Language, One Army, One Flag."',
          '"Total Cultural Homogenization."'
        ],
        correctAnswer: '"One Vision, One Identity, One Community."',
        explanation: 'Đoạn văn nêu rõ khẩu hiệu: "One Vision, One Identity, One Community."'
      },
      {
        id: 'p11-4-4',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to INTEGRATION:\n"Economic integration creates new markets and removes tariff hurdles."',
        options: ['isolation and segregation', 'incorporation', 'unification', 'harmonization'],
        correctAnswer: 'isolation and segregation',
        explanation: '"Integration" (hội nhập) trái nghĩa với "isolation and segregation" (cô lập và chia rẽ).'
      },
      {
        id: 'p11-4-5',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to CHARTER:\n"All members must adhere strictly to the principles outlined in the ASEAN Charter."',
        options: ['founding constitution', 'commercial invoice', 'private secret letter', 'temporary newspaper'],
        correctAnswer: 'founding constitution',
        explanation: '"Charter" (hiến chương) đồng nghĩa với "founding constitution".'
      },
      {
        id: 'p11-4-6',
        type: 'multiple-choice',
        category: 'collocation',
        prompt: 'Youth festivals are wonderful opportunities for lively cultural ______ among students.',
        options: ['exchange', 'footprint', 'nutrient', 'workout'],
        correctAnswer: 'exchange',
        explanation: '"Cultural exchange" là giao lưu văn hóa thanh niên.'
      },
      {
        id: 'p11-4-7',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Viet Nam joined ASEAN in 1995 and has become an active, responsible ______ state.',
        options: ['member', 'bulky', 'curfew', 'patent'],
        correctAnswer: 'member',
        explanation: '"Member state" là quốc gia thành viên.'
      }
    ],
    bossQuestions: [
      {
        id: 'b11-4-1',
        question: 'Chọn dạng đúng của Danh động từ hoàn thành (Perfect Gerund): "He apologized for ______ late for the international youth summit."',
        options: ['having arrived', 'arriving to have', 'to have arrived', 'have arrived'],
        correctAnswer: 0,
        damage: 35,
        explanation: 'Perfect Gerund: having + V3/ed diễn tả hành động đã xảy ra trước thời điểm nói.'
      },
      {
        id: 'b11-4-2',
        question: 'Từ "SOLIDARITY" có nghĩa gần nhất với:',
        options: ['unity and mutual support', 'hostility and anger', 'isolation and separation', 'carelessness'],
        correctAnswer: 0,
        damage: 30,
        explanation: '"Solidarity" nghĩa là sự thống nhất, đoàn kết tương trợ (unity and mutual support).'
      },
      {
        id: 'b11-4-3',
        question: 'Điền từ đúng: "Vietnam officially ______ ASEAN on July 28, 1995."',
        options: ['joined', 'joins', 'has joined', 'was joined'],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Mốc thời gian cụ thể trong quá khứ ("on July 28, 1995") -> Quá khứ đơn (joined).'
      },
      {
        id: 'b11-4-4',
        question: 'Chọn câu phát biểu đúng với phương châm của ASEAN:',
        options: [
          'One Vision, One Identity, One Community.',
          'One Country, One Language, One Border.',
          'Separation, Isolation, Independence.',
          'Economic profit above all human values.'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Khẩu hiệu của ASEAN: "One Vision, One Identity, One Community" (Một tầm nhìn, Một bản sắc, Một cộng đồng).'
      }
    ]
  },

  // UNIT 5: GLOBAL WARMING
  {
    id: 'g11-u05',
    grade: 11,
    unit: 5,
    title: 'Global Warming',
    realmName: 'Băng Hỏa Cảnh - Cứu Nguy Khí Hậu',
    guardianName: 'Hoàng Vân',
    guardianColor: '#e11d48',
    storyIntro: 'Băng sơn tan chảy, hỏa hoạn thiêu rụi đại ngàn. Hoàng Vân hộ pháp dẫn đầu hiệp khách dùng kiếm chiêu Sinh Thái đẩy lùi thảm họa nóng lên toàn cầu.',
    bossName: 'Hỏa Diễm Ma Long',
    bossTitle: 'Hộ Pháp Thiêu Đốt - Kẻ Gây Hiệu Ứng Nhà Kính',
    bossHp: 120,
    xpReward: 200,
    readingPassage: {
      title: 'Tipping Points: Confronting the Reality of Global Warming',
      topic: 'Nguy cơ chạm ngưỡng giới hạn biến đổi khí hậu và trách nhiệm toàn cầu',
      fullText: `Atmospheric measurements from the Arctic to the equator paint an alarming picture: the planet’s average surface temperature has climbed faster in the past fifty years than at any point in recorded history. The unbridled burning of fossil fuels combined with relentless deforestation has unleashed unprecedented concentrations of carbon dioxide.\n\nConsequently, polar ice sheets are melting at an accelerating tempo, triggering perilous sea level rises that jeopardize low-lying river deltas like the Mekong. Concurrently, intensifying heatwaves and chronic droughts threaten global food security. Without immediate, legally binding international curbs on industrial carbon emissions, scientists warn that irreversible catastrophic tipping points will trigger widespread ecological collapse.`,
      keyTakeaway: 'Cháy rừng, hạn hán và băng tan do nhiên liệu hóa thạch đe dọa sinh mệnh; hành động khẩn cấp là sống còn.',
      vocabularyHighlights: ['global warming', 'deforestation', 'catastrophic', 'fossil fuels', 'sea level rise', 'absorb']
    },
    vocabulary: [
      {
        id: 'v11-5-1',
        word: 'global warming',
        ipa: '/ˌɡloʊ.bəl ˈwɔːr.mɪŋ/',
        meaningVi: 'sự nóng lên toàn cầu',
        partOfSpeech: 'noun phrase',
        collocation: 'combat global warming',
        example: 'Global warming threatens coastal cities with frequent floods and rising sea levels.',
        synonyms: ['climate disruption', 'planetary heating']
      },
      {
        id: 'v11-5-2',
        word: 'deforestation',
        ipa: '/diːˌfɔːr.əˈsteɪ.ʃən/',
        meaningVi: 'nạn tàn phá rừng, chặt phá cây cối',
        partOfSpeech: 'noun',
        collocation: 'stop illegal deforestation',
        example: 'Widespread deforestation reduces the Earth’s natural ability to absorb CO2.',
        synonyms: ['clear-cutting of forests', 'forest depletion'],
        antonyms: ['afforestation', 'reforestation']
      },
      {
        id: 'v11-5-3',
        word: 'catastrophic',
        ipa: '/ˌkæt̬.əˈstrɑː.fɪk/',
        meaningVi: 'thảm khốc, gây tai họa hủy diệt',
        partOfSpeech: 'adjective',
        collocation: 'catastrophic consequences',
        example: 'Rising ocean temperatures could cause catastrophic collapse of coral reefs.',
        synonyms: ['disastrous', 'calamitous', 'devastating', 'ruinous'],
        antonyms: ['harmless', 'benign', 'beneficial']
      },
      {
        id: 'v11-5-4',
        word: 'fossil fuels',
        ipa: '/ˈfɑː.səl ˌfjʊəlz/',
        meaningVi: 'nhiên liệu hóa thạch (than đá, dầu mỏ, khí đốt)',
        partOfSpeech: 'noun plural',
        collocation: 'burn fossil fuels',
        example: 'Burning fossil fuels for electricity releases huge clouds of greenhouse gases.',
        synonyms: ['hydrocarbon deposits'],
        antonyms: ['renewable fuels', 'solar/wind power']
      },
      {
        id: 'v11-5-5',
        word: 'sea level rise',
        ipa: '/ˈsiː ˌlev.əl raɪz/',
        meaningVi: 'mực nước biển dâng cao',
        partOfSpeech: 'noun phrase',
        collocation: 'vulnerable to sea level rise',
        example: 'The Mekong Delta is particularly vulnerable to rapid sea level rise.',
        synonyms: ['ocean encroachment']
      },
      {
        id: 'v11-5-6',
        word: 'heatwave',
        ipa: '/ˈhiːt.weɪv/',
        meaningVi: 'đợt nắng nóng gay gắt kéo dài',
        partOfSpeech: 'noun',
        collocation: 'severe heatwave',
        example: 'Record heatwaves swept across Europe and Asia during the dry season.',
        synonyms: ['prolonged period of excessive heat'],
        antonyms: ['cold snap', 'frost period']
      },
      {
        id: 'v11-5-7',
        word: 'absorb',
        ipa: '/əbˈzɔːrb/',
        meaningVi: 'hấp thụ, thẩm thấu',
        partOfSpeech: 'verb',
        collocation: 'absorb carbon dioxide',
        example: 'Tropical rainforests absorb vast amounts of atmospheric carbon dioxide.',
        synonyms: ['take in', 'soak up', 'assimilate'],
        antonyms: ['emit', 'discharge', 'release']
      },
      {
        id: 'v11-5-8',
        word: 'polar ice melt',
        ipa: '/ˈpoʊ.lɚ aɪs melt/',
        meaningVi: 'hiện tượng băng ở hai cực tan chảy',
        partOfSpeech: 'noun phrase',
        collocation: 'accelerating polar ice melt',
        example: 'Polar ice melt in Greenland and Antarctica directly drives ocean expansion.',
        synonyms: ['glacial thawing']
      },
      {
        id: 'v11-5-9',
        word: 'drought',
        ipa: '/draʊt/',
        meaningVi: 'hạn hán khô cằn thiếu nước',
        partOfSpeech: 'noun',
        collocation: 'prolonged drought',
        example: 'A prolonged drought damaged crops and left farmers without irrigation water.',
        synonyms: ['dry spell', 'arid period', 'water scarcity'],
        antonyms: ['flood', 'deluge', 'torrential rain']
      },
      {
        id: 'v11-5-10',
        word: 'ecological balance',
        ipa: '/ˌek.əˈlɑː.dʒɪ.kəl ˈbæl.əns/',
        meaningVi: 'sự cân bằng sinh thái tự nhiên',
        partOfSpeech: 'noun phrase',
        collocation: 'restore ecological balance',
        example: 'Reforestation helps restore the delicate ecological balance in river basins.',
        synonyms: ['ecosystem equilibrium']
      }
    ],
    practice: [
      {
        id: 'p11-5-1',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to CATASTROPHIC:\n"The storm caused catastrophic damage to the coastal infrastructure."',
        options: ['calamitous and ruinous', 'mild and negligible', 'reassuring and safe', 'constructive'],
        correctAnswer: 'calamitous and ruinous',
        explanation: '"Catastrophic" (thảm họa thảm khốc) đồng nghĩa với "calamitous and ruinous".'
      },
      {
        id: 'p11-5-2',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to DEFORESTATION:\n"Government funding will be allocated to combat illegal deforestation."',
        options: ['afforestation', 'logging', 'wood-cutting', 'tree-clearing'],
        correctAnswer: 'afforestation',
        explanation: '"Deforestation" (nạn phá rừng) trái nghĩa với "afforestation" (việc trồng rừng mới).'
      },
      {
        id: 'p11-5-3',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'polar ice sheets are melting at an accelerating tempo, triggering perilous sea level rises that jeopardize low-lying river deltas like the Mekong.',
        prompt: 'Why is the Mekong Delta particularly vulnerable according to the text?',
        options: [
          'Because accelerating polar ice melt causes rising sea levels that threaten low-lying deltas.',
          'Because there is no fresh water available in Southeast Asia.',
          'Because residents consume too many green vegetables.',
          'Because high-rise buildings are too heavy.'
        ],
        correctAnswer: 'Because accelerating polar ice melt causes rising sea levels that threaten low-lying deltas.',
        explanation: 'Đoạn văn nêu rõ: "polar ice sheets are melting at an accelerating tempo, triggering perilous sea level rises that jeopardize low-lying river deltas like the Mekong."'
      },
      {
        id: 'p11-5-4',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to ABSORB:\n"Forests absorb millions of tons of carbon dioxide annually."',
        options: ['emit and release', 'soak up', 'take in', 'assimilate'],
        correctAnswer: 'emit and release',
        explanation: '"Absorb" (hấp thụ) trái nghĩa với "emit and release" (thải ra, phát tán).'
      },
      {
        id: 'p11-5-5',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to DROUGHT:\n"The prolonged drought devastated coffee farms in the central highlands."',
        options: ['deluge and heavy flood', 'arid spell', 'water shortage', 'scorching weather'],
        correctAnswer: 'deluge and heavy flood',
        explanation: '"Drought" (hạn hán khô kiệt) trái nghĩa với "deluge and heavy flood" (lũ lụt ngập tràn, mưa lớn).'
      },
      {
        id: 'p11-5-6',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Burning ______ like coal and petroleum is the chief driver of climate change.',
        options: ['fossil fuels', 'antibiotics', 'chores', 'curfews'],
        correctAnswer: 'fossil fuels',
        explanation: '"Fossil fuels" là nhiên liệu hóa thạch.'
      },
      {
        id: 'p11-5-7',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'The scorching ______ caused temperatures in the city to soar over 42 degrees Celsius.',
        options: ['heatwave', 'melody', 'patent', 'homemaker'],
        correctAnswer: 'heatwave',
        explanation: '"Heatwave" là đợt nắng nóng gay gắt.'
      }
    ],
    bossQuestions: [
      {
        id: 'b11-5-1',
        question: 'Chọn dạng Phân từ hoàn thành (Perfect Participle): "______ down ancient trees for farming, people suffered severe landslides."',
        options: ['Having cut', 'To have cut', 'Cutted', 'Having been cut'],
        correctAnswer: 0,
        damage: 35,
        explanation: 'Dùng "Having + V3/ed" (Having cut) rút gọn mệnh đề trạng ngữ chỉ hành động chủ động diễn ra trước một hành động khác trong quá khứ.'
      },
      {
        id: 'b11-5-2',
        question: 'Từ "CATASTROPHIC" đồng nghĩa với:',
        options: ['disastrous', 'beneficial', 'mild and calm', 'pleasant'],
        correctAnswer: 0,
        damage: 30,
        explanation: '"Catastrophic" đồng nghĩa với "disastrous" (mang tính thảm họa hủy diệt).'
      },
      {
        id: 'b11-5-3',
        question: 'Chọn câu điều kiện loại 2 giả định trái ngược thực tế hiện tại:',
        options: [
          'If we stopped using fossil fuels today, global temperatures would stabilize.',
          'If we stop using fossil fuels, global temperatures will stabilize.',
          'If we had stopped using fossil fuels, global temperatures would have stabilized.',
          'If we will stop using fossil fuels, global temperatures would stabilize.'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Câu điều kiện loại 2: If + QKĐ, S + would + V-inf.'
      },
      {
        id: 'b11-5-4',
        question: 'Từ "drought" phát âm chuẩn IPA là:',
        options: ['/draʊt/', '/droʊt/', '/drɑːft/', '/drʌt/'],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Từ "drought" có phát âm IPA chính xác là /draʊt/ (vần "au").'
      }
    ]
  }
];
