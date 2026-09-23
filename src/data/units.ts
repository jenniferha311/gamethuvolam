import { UnitRealm } from '../types/game';

export const UNITS_DATA: UnitRealm[] = [
  // ================= GRADE 10: SƠ NHẬP GIANG HỒ =================
  {
    id: 'g10-u01',
    grade: 10,
    unit: 1,
    title: 'Family Life',
    realmName: 'Gia Môn Cảnh - Bổn Phận Gia Đình',
    guardianName: 'Phương Tú',
    guardianColor: '#059669',
    storyIntro: 'Bước vào Gia Môn Cảnh, thiếu hiệp học được cách chia sẻ gánh nặng gia phong. Muốn hành tẩu giang hồ, trước tiên phải tề gia, thấu hiểu ý nghĩa của tổ ấm và bổn phận.',
    bossName: 'Hắc Ma Lười Biếng',
    bossTitle: 'Hộ Pháp Ảo Ảnh - Kẻ Gieo Trì Hoãn',
    bossHp: 100,
    xpReward: 150,
    vocabulary: [
      {
        id: 'v1',
        word: 'household chores',
        ipa: '/ˈhaʊs.hoʊld tʃɔːrz/',
        meaningVi: 'công việc nhà, việc vặt trong gia đình',
        partOfSpeech: 'noun phrase',
        collocation: 'share household chores',
        example: 'In my family, everyone shares the household chores equally.'
      },
      {
        id: 'v2',
        word: 'breadwinner',
        ipa: '/ˈbredˌwɪn.ər/',
        meaningVi: 'trụ cột kinh tế, người kiếm tiền chính trong gia đình',
        partOfSpeech: 'noun',
        collocation: 'sole breadwinner',
        example: 'After his father retired, he became the primary breadwinner of the household.'
      },
      {
        id: 'v3',
        word: 'homemaker',
        ipa: '/ˈhoʊmˌmeɪ.kər/',
        meaningVi: 'người nội trợ quán xuyến việc nhà',
        partOfSpeech: 'noun',
        collocation: 'devoted homemaker',
        example: 'A homemaker manages domestic duties and ensures a warm family atmosphere.'
      },
      {
        id: 'v4',
        word: 'heavy lifting',
        ipa: '/ˈhev.i ˈlɪf.tɪŋ/',
        meaningVi: 'việc nặng nhọc, mang vác vật nặng',
        partOfSpeech: 'noun phrase',
        collocation: 'do the heavy lifting',
        example: 'My brother usually does the heavy lifting when moving furniture.'
      },
      {
        id: 'v5',
        word: 'gratitude',
        ipa: '/ˈɡræt.ɪ.tʃuːd/',
        meaningVi: 'lòng biết ơn, sự cảm kích',
        partOfSpeech: 'noun',
        collocation: 'express gratitude to someone',
        example: 'Children should show deep gratitude to their parents for raising them.'
      },
      {
        id: 'v6',
        word: 'responsibility',
        ipa: '/rɪˌspɑːn.səˈbɪl.ə.t̬i/',
        meaningVi: 'trách nhiệm, bổn phận',
        partOfSpeech: 'noun',
        collocation: 'take responsibility for',
        example: 'Each family member takes responsibility for keeping the house clean.'
      },
      {
        id: 'v7',
        word: 'strengthen',
        ipa: '/ˈstreŋ.θən/',
        meaningVi: 'củng cố, tăng cường, thắt chặt',
        partOfSpeech: 'verb',
        collocation: 'strengthen family bonds',
        example: 'Cooking and eating dinner together helps strengthen our family bonds.'
      },
      {
        id: 'v8',
        word: 'financial burden',
        ipa: '/faɪˈnæn.ʃəl ˈbɜːr.dən/',
        meaningVi: 'gánh nặng tài chính, áp lực tiền bạc',
        partOfSpeech: 'noun phrase',
        collocation: 'ease the financial burden',
        example: 'Both parents work full-time to ease the family’s financial burden.'
      },
      {
        id: 'v9',
        word: 'split',
        ipa: '/splɪt/',
        meaningVi: 'chia nhỏ, phân chia',
        partOfSpeech: 'verb',
        collocation: 'split the chores',
        example: 'They decided to split the household chores fairly between brothers.'
      },
      {
        id: 'v10',
        word: 'appreciate',
        ipa: '/əˈpriː.ʃi.eɪt/',
        meaningVi: 'trân trọng, đánh giá cao',
        partOfSpeech: 'verb',
        collocation: 'appreciate the support',
        example: 'I deeply appreciate my parents supporting my martial and academic dreams.'
      }
    ],
    practice: [
      {
        id: 'p1',
        type: 'multiple-choice',
        prompt: 'In traditional families, the father is often seen as the ______ who earns money to support everyone.',
        options: ['breadwinner', 'homemaker', 'chore', 'burden'],
        correctAnswer: 'breadwinner',
        explanation: '"Breadwinner" là người trụ cột kinh tế trong gia đình, kiếm thu nhập chính.'
      },
      {
        id: 'p2',
        type: 'multiple-choice',
        prompt: 'Doing chores together can help ______ family bonds significantly.',
        options: ['weaken', 'strengthen', 'break', 'ignore'],
        correctAnswer: 'strengthen',
        explanation: 'Cụm từ cố định: "strengthen family bonds" (thắt chặt tình cảm gia đình).'
      },
      {
        id: 'p3',
        type: 'matching',
        prompt: 'Ghép từ đúng: "do the heavy ______" để chỉ việc mang vác nặng nhọc.',
        options: ['lifting', 'cooking', 'shopping', 'cleaning'],
        correctAnswer: 'lifting',
        explanation: 'Collocation chuẩn: "do the heavy lifting" (làm việc nặng nhọc).'
      },
      {
        id: 'p4',
        type: 'fill-blank',
        prompt: 'Students should show sincere ______ to their parents and teachers. (Lòng biết ơn)',
        options: ['gratitude', 'burden', 'chores', 'conflict'],
        correctAnswer: 'gratitude',
        explanation: '"gratitude" mang nghĩa lòng biết ơn, tri ân.'
      },
      {
        id: 'p5',
        type: 'multiple-choice',
        prompt: 'My mother is a caring ______; she takes excellent care of our home and meals.',
        options: ['homemaker', 'competitor', 'breadwinner', 'intruder'],
        correctAnswer: 'homemaker',
        explanation: '"Homemaker" là người nội trợ chu toàn việc trong gia đình.'
      }
    ],
    bossQuestions: [
      {
        id: 'b1',
        question: 'Chọn câu dùng đúng cấu trúc thì Hiện Tại Đơn/Tiếp Diễn: "Look! My father ______ the lawn right now."',
        options: ['is mowing', 'mows', 'has mowed', 'mowed'],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Dấu hiệu "Look!" và "right now" diễn tả hành động đang diễn ra -> dùng thì Hiện tại tiếp diễn (is mowing).'
      },
      {
        id: 'b2',
        question: 'Hoàn thành câu: "Sharing household chores teaches teenagers to take ______ for their actions."',
        options: ['responsible', 'responsibly', 'responsibility', 'responsiveness'],
        correctAnswer: 2,
        damage: 25,
        explanation: 'Sau động từ "take" cần một danh từ để tạo cụm "take responsibility for" (chịu trách nhiệm).'
      },
      {
        id: 'b3',
        question: 'Chọn từ đồng nghĩa với "EASE the financial burden":',
        options: ['Increase', 'Lighten', 'Damage', 'Double'],
        correctAnswer: 1,
        damage: 25,
        explanation: '"Ease" nghĩa là làm dịu bớt, làm nhẹ bớt, đồng nghĩa với "Lighten".'
      },
      {
        id: 'b4',
        question: 'Tìm lỗi sai: "My brother usually do the washing-up after dinner every night."',
        options: ['usually', 'do', 'washing-up', 'after'],
        correctAnswer: 1,
        damage: 25,
        explanation: 'Chủ ngữ "My brother" là số ít, động từ thì hiện tại đơn phải là "does", không phải "do".'
      }
    ]
  },

  {
    id: 'g10-u02',
    grade: 10,
    unit: 2,
    title: 'Humans and the Environment',
    realmName: 'Sinh Thái Cảnh - Hộ Vệ Thiên Nhiên',
    guardianName: 'Liên Phạm',
    guardianColor: '#7c3aed',
    storyIntro: 'Sinh Thái Cảnh từng xanh tươi ngút ngàn, nay bị khí độc hắc ám vây bủa. Thiếu hiệp cần thấu hiểu bảo vệ môi trường, dùng tri thức thanh lọc âm mưu hủy hoại thiên nhiên.',
    bossName: 'Ô Trọc Độc Tôn',
    bossTitle: 'Yêu Vương Ô Nhiễm Môi Trường',
    bossHp: 120,
    xpReward: 160,
    vocabulary: [
      {
        id: 'v11',
        word: 'carbon footprint',
        ipa: '/ˌkɑːr.bən ˈfʊt.prɪnt/',
        meaningVi: 'vết carbon (lượng khí thải carbon của một cá nhân/tổ chức)',
        partOfSpeech: 'noun',
        collocation: 'reduce carbon footprint',
        example: 'Cycling to school is an effective way to reduce your carbon footprint.'
      },
      {
        id: 'v12',
        word: 'eco-friendly',
        ipa: '/ˌiː.koʊˈfrend.li/',
        meaningVi: 'thân thiện với môi trường',
        partOfSpeech: 'adjective',
        collocation: 'eco-friendly lifestyle',
        example: 'Using reusable bamboo bottles promotes an eco-friendly lifestyle.'
      },
      {
        id: 'v13',
        word: 'renewable energy',
        ipa: '/rɪˈnuː.ə.bəl ˈen.ɚ.dʒi/',
        meaningVi: 'năng lượng tái tạo (mặt trời, gió, nước)',
        partOfSpeech: 'noun phrase',
        collocation: 'invest in renewable energy',
        example: 'Solar and wind power are sustainable sources of renewable energy.'
      },
      {
        id: 'v14',
        word: 'decompose',
        ipa: '/ˌdiː.kəmˈpoʊz/',
        meaningVi: 'phân hủy tự nhiên',
        partOfSpeech: 'verb',
        collocation: 'take centuries to decompose',
        example: 'Plastic bags take hundreds of years to decompose in nature.'
      },
      {
        id: 'v15',
        word: 'hazardous',
        ipa: '/ˈhæz.ɚ.dəs/',
        meaningVi: 'nguy hại, nguy hiểm',
        partOfSpeech: 'adjective',
        collocation: 'hazardous chemicals',
        example: 'Disposing of hazardous waste improperly pollutes ground water.'
      }
    ],
    practice: [
      {
        id: 'p6',
        type: 'multiple-choice',
        prompt: 'Switching off appliances when not in use helps reduce our ______ footprint.',
        options: ['carbon', 'water', 'forest', 'plastic'],
        correctAnswer: 'carbon',
        explanation: 'Cụm từ quen thuộc: "carbon footprint" (lượng phát thải khí nhà kính).'
      },
      {
        id: 'p7',
        type: 'multiple-choice',
        prompt: 'Solar energy and wind energy are prime examples of ______ energy.',
        options: ['renewable', 'exhaustible', 'fossil', 'polluted'],
        correctAnswer: 'renewable',
        explanation: '"Renewable energy" là năng lượng tái tạo, sạch và không cạn kiệt.'
      }
    ],
    bossQuestions: [
      {
        id: 'b5',
        question: 'Chọn câu bị động đúng: "People produce tons of plastic waste every day."',
        options: [
          'Tons of plastic waste are produced every day.',
          'Tons of plastic waste is produced every day.',
          'Tons of plastic waste were produced every day.',
          'Tons of plastic waste have produced every day.'
        ],
        correctAnswer: 0,
        damage: 30,
        explanation: '"Tons" là danh từ số nhiều, ở hiện tại đơn bị động là "are produced".'
      },
      {
        id: 'b6',
        question: 'Từ nào mang nghĩa đối lập với "ECO-FRIENDLY"?',
        options: ['Sustainable', 'Harmful', 'Green', 'Biodegradable'],
        correctAnswer: 1,
        damage: 30,
        explanation: '"Harmful" (gây hại) trái nghĩa với "eco-friendly" (thân thiện với môi trường).'
      }
    ]
  },

  {
    id: 'g10-u03',
    grade: 10,
    unit: 3,
    title: 'Music',
    realmName: 'Diệu Âm Cảnh - Nhạc Khúc Võ Lâm',
    guardianName: 'Hoàng Vân',
    guardianColor: '#d97706',
    storyIntro: 'Tiếng đàn tỳ bà và sáo trúc vang vọng khắp Diệu Âm Cảnh. Âm nhạc là sợi dây kết nối vạn vật, mở ra thính giác tinh tế giúp kiếm chiêu thêm phần linh diệu.',
    bossName: 'Loạn Âm Ma Vương',
    bossTitle: 'Kẻ Phá Nát Giai Điệu Thế Gian',
    bossHp: 130,
    xpReward: 170,
    vocabulary: [
      {
        id: 'v16',
        word: 'phenomenon',
        ipa: '/fəˈnɑː.mə.nɑːn/',
        meaningVi: 'hiện tượng đặc biệt, người phi thường',
        partOfSpeech: 'noun',
        collocation: 'global phenomenon',
        example: 'The Vietnamese folk song unexpectedly became a global phenomenon on social media.'
      },
      {
        id: 'v17',
        word: 'instrument',
        ipa: '/ˈɪn.strə.mənt/',
        meaningVi: 'nhạc cụ',
        partOfSpeech: 'noun',
        collocation: 'musical instrument',
        example: 'The Dan Bau is a unique traditional Vietnamese musical instrument.'
      },
      {
        id: 'v18',
        word: 'talent',
        ipa: '/ˈtæl.ənt/',
        meaningVi: 'tài năng, năng khiếu',
        partOfSpeech: 'noun',
        collocation: 'musical talent',
        example: 'The young contestant showcased exceptional vocal talent.'
      }
    ],
    practice: [
      {
        id: 'p8',
        type: 'multiple-choice',
        prompt: 'The young singer became a national ______ after winning the television music contest.',
        options: ['phenomenon', 'problem', 'instrument', 'disaster'],
        correctAnswer: 'phenomenon',
        explanation: '"Phenomenon" chỉ một hiện tượng nổi tiếng thu hút sự chú ý.'
      }
    ],
    bossQuestions: [
      {
        id: 'b7',
        question: 'Chọn dạng đúng của to-infinitive / bare infinitive: "Her parents made her ______ the piano every evening."',
        options: ['practice', 'to practice', 'practicing', 'practiced'],
        correctAnswer: 0,
        damage: 35,
        explanation: 'Cấu trúc "make someone do something" (bắt/khiến ai làm gì) đi với bare infinitive (động từ nguyên mẫu không "to").'
      }
    ]
  },

  // ================= GRADE 11: HÀNH TẨU VÕ LÂM =================
  {
    id: 'g11-u01',
    grade: 11,
    unit: 1,
    title: 'A Long and Healthy Life',
    realmName: 'Dưỡng Sinh Cảnh - Trường Thọ Bí Kíp',
    guardianName: 'Đặng Trần Hà',
    guardianColor: '#1e3a8a',
    storyIntro: 'Hành tẩu võ lâm cần có nội công thâm hậu và sinh lực dồi dào. Tại Dưỡng Sinh Cảnh, Hộ Pháp Đặng Trần Hà truyền thụ bí kíp dưỡng thể, chế độ dinh dưỡng và kháng thể bất bại.',
    bossName: 'Tật Bệnh Độc Y',
    bossTitle: 'Kẻ Bào Mòn Sinh Lực Giang Hồ',
    bossHp: 150,
    xpReward: 200,
    vocabulary: [
      {
        id: 'v19',
        word: 'longevity',
        ipa: '/lɑːnˈdʒev.ə.t̬i/',
        meaningVi: 'tuổi thọ, sự sống lâu',
        partOfSpeech: 'noun',
        collocation: 'promote longevity',
        example: 'A balanced diet rich in leafy vegetables promotes longevity and vitality.'
      },
      {
        id: 'v20',
        word: 'immune system',
        ipa: '/ɪˈmjuːn ˌsɪs.təm/',
        meaningVi: 'hệ thống miễn dịch',
        partOfSpeech: 'noun phrase',
        collocation: 'boost immune system',
        example: 'Getting sufficient quality sleep is essential to boost your immune system.'
      },
      {
        id: 'v21',
        word: 'antibiotics',
        ipa: '/ˌæn.t̬i.baɪˈɑː.t̬ɪks/',
        meaningVi: 'thuốc kháng sinh',
        partOfSpeech: 'noun',
        collocation: 'antibiotic resistance',
        example: 'Misusing antibiotics can lead to dangerous antibiotic resistance.'
      },
      {
        id: 'v22',
        word: 'dietary',
        ipa: '/ˈdaɪ.ə.ter.i/',
        meaningVi: 'thuộc về chế độ ăn uống',
        partOfSpeech: 'adjective',
        collocation: 'dietary habits',
        example: 'Adopting wholesome dietary habits prevents chronic ailments.'
      }
    ],
    practice: [
      {
        id: 'p9',
        type: 'multiple-choice',
        prompt: 'Regular exercise and meditation significantly enhance human ______.',
        options: ['longevity', 'laziness', 'shortage', 'pollution'],
        correctAnswer: 'longevity',
        explanation: '"Longevity" chỉ tuổi thọ, cuộc sống trường thọ.'
      },
      {
        id: 'p10',
        type: 'multiple-choice',
        prompt: 'Vitamin C helps strengthen the body’s ______ system against infectious colds.',
        options: ['immune', 'digestive', 'circulatory', 'nervous'],
        correctAnswer: 'immune',
        explanation: '"Immune system" là hệ miễn dịch bảo vệ cơ thể.'
      }
    ],
    bossQuestions: [
      {
        id: 'b8',
        question: 'Chọn thì đúng giữa Quá Khứ Đơn và Hiện Tại Hoàn Thành: "Scientists ______ the cure for this virus yet."',
        options: [
          'have not discovered',
          'did not discover',
          'do not discover',
          'will not discover'
        ],
        correctAnswer: 0,
        damage: 35,
        explanation: 'Dấu hiệu "yet" trong câu phủ định dùng thì Hiện tại hoàn thành: "have not discovered".'
      },
      {
        id: 'b9',
        question: 'Từ nào mang nghĩa tương đương với "NUTRIENT-RICH"?',
        options: ['Nourishing', 'Toxic', 'Deficient', 'Exhausting'],
        correctAnswer: 0,
        damage: 35,
        explanation: '"Nourishing" (giàu dưỡng chất, bổ dưỡng) đồng nghĩa với "nutrient-rich".'
      }
    ]
  },

  {
    id: 'g11-u02',
    grade: 11,
    unit: 2,
    title: 'The Generation Gap',
    realmName: 'Túc Mệnh Cảnh - Hóa Giải Cách Biệt',
    guardianName: 'Phương Tú',
    guardianColor: '#059669',
    storyIntro: 'Giữa các thế hệ giang hồ luôn nảy sinh bất đồng về quan niệm sống. Thấu hiểu và cảm thông chính là chìa khóa hóa giải mọi ân oán thế hệ.',
    bossName: 'Cố Chấp Cổ Ma',
    bossTitle: 'Hóa Thân Của Định Kiến & Bất Đồng',
    bossHp: 160,
    xpReward: 210,
    vocabulary: [
      {
        id: 'v23',
        word: 'generation gap',
        ipa: '/ˌdʒen.əˈreɪ.ʃən ˌɡæp/',
        meaningVi: 'khoảng cách thế hệ',
        partOfSpeech: 'noun phrase',
        collocation: 'bridge the generation gap',
        example: 'Open family dialogues help bridge the generation gap between parents and teens.'
      },
      {
        id: 'v24',
        word: 'viewpoint',
        ipa: '/ˈvjuː.pɔɪnt/',
        meaningVi: 'quan điểm, góc nhìn',
        partOfSpeech: 'noun',
        collocation: 'conflicting viewpoints',
        example: 'Respecting differing viewpoints fosters family harmony.'
      },
      {
        id: 'v25',
        word: 'curfew',
        ipa: '/ˈkɝː.fjuː/',
        meaningVi: 'giờ giới nghiêm (giờ phải về nhà)',
        partOfSpeech: 'noun',
        collocation: 'strict curfew',
        example: 'Her parents established a strict 9:30 PM curfew on school nights.'
      }
    ],
    practice: [
      {
        id: 'p11',
        type: 'multiple-choice',
        prompt: 'To resolve misunderstandings, parents and teenagers should strive to ______ the generation gap.',
        options: ['bridge', 'widen', 'ignore', 'demolish'],
        correctAnswer: 'bridge',
        explanation: 'Collocation kinh điển: "bridge the generation gap" (thu hẹp khoảng cách thế hệ).'
      }
    ],
    bossQuestions: [
      {
        id: 'b10',
        question: 'Chọn Modal Verb diễn tả lời khuyên: "You ______ talk to your parents calmly instead of shouting."',
        options: ['should', 'must not', 'might have', 'could have'],
        correctAnswer: 0,
        damage: 40,
        explanation: '"should" diễn tả lời khuyên chân thành và hợp lý.'
      }
    ]
  },

  // ================= GRADE 12: NHẤT ĐẠI CAO THỦ =================
  {
    id: 'g12-u01',
    grade: 12,
    unit: 1,
    title: 'Life Stories We Admire',
    realmName: 'Truyền Kỳ Cảnh - Anh Hùng Bất Hủ',
    guardianName: 'Nguyệt Nguyễn',
    guardianColor: '#0284c7',
    storyIntro: 'Bước vào cảnh giới tối cao Nhất Đại Cao Thủ, thiếu hiệp chiêm bái tấm gương của những bậc tiền nhân lỗi lạc. Ý chí kiên cường và lòng cống hiến tạo nên những huyền thoại bất tử.',
    bossName: 'U Minh Tâm Ma',
    bossTitle: 'Vực Thẳm Hoài Nghi Bản Thân',
    bossHp: 200,
    xpReward: 300,
    vocabulary: [
      {
        id: 'v26',
        word: 'persevere',
        ipa: '/ˌpɝː.səˈvɪr/',
        meaningVi: 'kiên trì, bền bỉ đến cùng',
        partOfSpeech: 'verb',
        collocation: 'persevere through hardships',
        example: 'Great scholars persevere through daunting hardships to achieve greatness.'
      },
      {
        id: 'v27',
        word: 'inspirational',
        ipa: '/ˌɪn.spəˈreɪ.ʃən.əl/',
        meaningVi: 'truyền cảm hứng mãnh liệt',
        partOfSpeech: 'adjective',
        collocation: 'inspirational figure',
        example: 'Teacher Ha Anh Phuong is an inspirational educator empowering thousands of students.'
      },
      {
        id: 'v28',
        word: 'dedication',
        ipa: '/ˌded.əˈkeɪ.ʃən/',
        meaningVi: 'sự cống hiến, tận tâm tận lực',
        partOfSpeech: 'noun',
        collocation: 'tireless dedication to',
        example: 'Her lifelong dedication to English education transformed countless rural lives.'
      },
      {
        id: 'v29',
        word: 'legacy',
        ipa: '/ˈleɡ.ə.si/',
        meaningVi: 'di sản, những giá trị để lại cho đời sau',
        partOfSpeech: 'noun',
        collocation: 'leave a lasting legacy',
        example: 'Remarkable heroes leave a lasting legacy of courage and enlightenment.'
      }
    ],
    practice: [
      {
        id: 'p12',
        type: 'multiple-choice',
        prompt: 'Despite facing countless obstacles, the determined warrior continued to ______.',
        options: ['persevere', 'surrender', 'hesitate', 'retreat'],
        correctAnswer: 'persevere',
        explanation: '"Persevere" nghĩa là kiên trì không bỏ cuộc.'
      }
    ],
    bossQuestions: [
      {
        id: 'b11',
        question: 'Chọn dạng đúng của Mệnh đề quan hệ rút gọn: "The speech ______ by Ms. Phuong inspired everyone."',
        options: ['delivered', 'delivering', 'was delivered', 'which delivered'],
        correctAnswer: 0,
        damage: 50,
        explanation: 'Rút gọn mệnh đề quan hệ dạng bị động (which was delivered) -> "delivered".'
      },
      {
        id: 'b12',
        question: 'Chọn từ đồng nghĩa với "TIRELESS DEDICATION":',
        options: ['Unwavering commitment', 'Careless effort', 'Brief interest', 'Passive support'],
        correctAnswer: 0,
        damage: 50,
        explanation: '"Unwavering commitment" (sự cam kết kiên định, không lay chuyển) đồng nghĩa với "tireless dedication".'
      }
    ]
  },

  {
    id: 'g12-u02',
    grade: 12,
    unit: 2,
    title: 'A Multicultural World',
    realmName: 'Bách Gia Cảnh - Vạn Quốc Đồng Quy',
    guardianName: 'Hà Ánh Phượng',
    guardianColor: '#dc2626',
    storyIntro: 'Cảnh giới đỉnh phong do chính Bang Chủ Hà Ánh Phượng chủ trì! Thế giới đa văn hóa tựa như trăm môn phái cùng hội ngộ. Tôn trọng sự đa dạng, mở rộng tầm nhìn toàn cầu chính là chí khí của một Đại Hiệp thực thụ.',
    bossName: 'Hỗn Độn Tà Đế',
    bossTitle: 'Chúa Tể Định Kiến Thế Gian',
    bossHp: 250,
    xpReward: 400,
    vocabulary: [
      {
        id: 'v30',
        word: 'multiculturalism',
        ipa: '/ˌmʌl.tiˈkʌl.tʃɚ.əl.ɪ.zəm/',
        meaningVi: 'chủ nghĩa đa văn hóa',
        partOfSpeech: 'noun',
        collocation: 'embrace multiculturalism',
        example: 'Modern global citizens warmly embrace multiculturalism and mutual understanding.'
      },
      {
        id: 'v31',
        word: 'cultural identity',
        ipa: '/ˈkʌl.tʃɚ.əl aɪˈden.t̬ə.t̬i/',
        meaningVi: 'bản sắc văn hóa',
        partOfSpeech: 'noun phrase',
        collocation: 'preserve cultural identity',
        example: 'Vietnamese youth proudly preserve their cultural identity while integrating globally.'
      },
      {
        id: 'v32',
        word: 'diversity',
        ipa: '/dɪˈvɝː.sə.t̬i/',
        meaningVi: 'sự đa dạng, phong phú',
        partOfSpeech: 'noun',
        collocation: 'cultural diversity',
        example: 'Respecting cultural diversity enriches human society and prevents conflict.'
      }
    ],
    practice: [
      {
        id: 'p13',
        type: 'multiple-choice',
        prompt: 'While integrating into the world, we must always preserve our national cultural ______.',
        options: ['identity', 'barrier', 'disadvantage', 'decline'],
        correctAnswer: 'identity',
        explanation: '"Cultural identity" là bản sắc văn hóa dân tộc.'
      }
    ],
    bossQuestions: [
      {
        id: 'b13',
        question: 'Chọn cấu trúc Đảo ngữ (Inversion) đúng: "Not only ______ fluent in English, but she also excels in public speaking."',
        options: ['is she', 'she is', 'she does', 'does she be'],
        correctAnswer: 0,
        damage: 60,
        explanation: 'Đứng đầu câu là "Not only" cần đảo trợ động từ/động từ tobe lên trước chủ ngữ: "is she".'
      },
      {
        id: 'b14',
        question: 'Chọn câu thể hiện tinh thần "Bang Chủ Hà Ánh Phượng":',
        options: [
          'English is a bridge connecting Vietnamese culture to the entire world.',
          'Language learning should remain confined within national borders.',
          'Cultural differences should never be accepted.',
          'Studying vocabulary is unimportant in modern communication.'
        ],
        correctAnswer: 0,
        damage: 60,
        explanation: 'Tiếng Anh là cây cầu kết nối văn hóa Việt Nam ra toàn cầu, đúng với sứ mệnh của Bang Chủ Hà Ánh Phượng.'
      }
    ]
  }
];

// Helper to get units for a specific grade
export function getUnitsByGrade(grade: 10 | 11 | 12): UnitRealm[] {
  return UNITS_DATA.filter(u => u.grade === grade);
}

export function getUnitById(id: string): UnitRealm | undefined {
  return UNITS_DATA.find(u => u.id === id);
}
