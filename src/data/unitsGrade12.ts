import { UnitRealm } from '../types/game';

export const UNITS_GRADE_12: UnitRealm[] = [
  // UNIT 1: LIFE STORIES WE ADMIRE
  {
    id: 'g12-u01',
    grade: 12,
    unit: 1,
    title: 'Life Stories We Admire',
    realmName: 'Anh Hùng Cảnh - Huyền Thoại Ngưỡng Mộ',
    guardianName: 'Phương Tú',
    guardianColor: '#059669',
    storyIntro: 'Cảnh giới vinh danh những bậc hiền tài và danh nhân kiệt xuất. Phương Tú hộ pháp thử thách bạn về vốn từ tự truyện, ý chí kiên định và đức hy sinh cứu đời.',
    bossName: 'Hư Danh Ảo Tưởng',
    bossTitle: 'Hộ Pháp Kiêu Căng - Kẻ Quên Nguồn Cội',
    bossHp: 120,
    xpReward: 200,
    readingPassage: {
      title: 'Echoes of Resilience: The Unsung Legacies That Built Nations',
      topic: 'Những tấm gương kiên trì bất khuất và đức hy sinh vì đại nghĩa',
      fullText: `What defines a life worthy of national admiration? When historians analyze the biographies of extraordinary luminaries, one recurring virtue stands out: unyielding perseverance in the face of insurmountable adversity.\n\nConsider visionary pioneers and medical researchers who labored in obscurity for decades. Many sacrificed personal comfort, financial security, and prestige to cure diseases or liberate their homelands. Remarkably, despite garnering worldwide acclaim, these distinguished figures consistently remained humble, dedicating their achievements to the collective welfare of humanity. Their enduring legacies remind subsequent generations that true heroism is forged through integrity, self-sacrifice, and unwavering moral purpose.`,
      keyTakeaway: 'Di sản của các bậc vĩ nhân được xây dựng trên sự kiên trì vô song, lòng khiêm tốn và đức hy sinh vì cộng đồng.',
      vocabularyHighlights: ['admire', 'perseverance', 'visionary', 'self-sacrifice', 'legacy', 'humble']
    },
    vocabulary: [
      {
        id: 'v12-1-1',
        word: 'admire',
        ipa: '/ədˈmaɪr/',
        meaningVi: 'ngưỡng mộ, khâm phục sâu sắc',
        partOfSpeech: 'verb',
        collocation: 'greatly admire someone',
        example: 'Millions of young students greatly admire teacher Ha Anh Phuong for her dedication.',
        synonyms: ['revere', 'esteem', 'venerate'],
        antonyms: ['despise', 'scorn', 'disdain'],
        inPassageSentence: 'What defines a life worthy of national admiration?'
      },
      {
        id: 'v12-1-2',
        word: 'perseverance',
        ipa: '/ˌpɝː.səˈvɪr.əns/',
        meaningVi: 'sự kiên trì, bền chí không nản lòng',
        partOfSpeech: 'noun',
        collocation: 'remarkable perseverance',
        example: 'Through relentless perseverance, he overcame poverty to become a celebrated surgeon.',
        synonyms: ['tenacity', 'persistence', 'dogged determination'],
        antonyms: ['apathy', 'vacillation', 'fickleness']
      },
      {
        id: 'v12-1-3',
        word: 'visionary',
        ipa: '/ˈvɪʒ.ən.er.i/',
        meaningVi: 'người nhìn xa trông rộng, có tầm nhìn vĩ đại',
        partOfSpeech: 'noun / adjective',
        collocation: 'visionary leader',
        example: 'Steve Jobs was hailed as a visionary leader who revolutionized mobile computing.',
        synonyms: ['farsighted thinker', 'trailblazer', 'prophetic'],
        antonyms: ['myopic', 'short-sighted']
      },
      {
        id: 'v12-1-4',
        word: 'self-sacrifice',
        ipa: '/ˌselfˈsæk.rə.faɪs/',
        meaningVi: 'sự hy sinh quên mình vì nghĩa lớn',
        partOfSpeech: 'noun',
        collocation: 'spirit of self-sacrifice',
        example: 'Our ancestors showed tremendous self-sacrifice to defend the nation’s independence.',
        synonyms: ['altruism', 'self-abnegation', 'martyrdom'],
        antonyms: ['egoism', 'selfishness']
      },
      {
        id: 'v12-1-5',
        word: 'legacy',
        ipa: '/ˈleɡ.ə.si/',
        meaningVi: 'di sản quý báu để lại cho hậu thế',
        partOfSpeech: 'noun',
        collocation: 'leave a lasting legacy',
        example: 'Great scholars leave a lasting intellectual legacy for future generations.',
        synonyms: ['heritage', 'endowment', 'bequest']
      },
      {
        id: 'v12-1-6',
        word: 'distinguished',
        ipa: '/dɪˈstɪŋ.ɡwɪʃt/',
        meaningVi: 'xuất chúng, ưu tú lẫy lừng',
        partOfSpeech: 'adjective',
        collocation: 'distinguished career',
        example: 'Professor Ton That Tung had a distinguished career in liver surgery.',
        synonyms: ['illustrious', 'eminent', 'renowned'],
        antonyms: ['obscure', 'notorious', 'ignoble']
      },
      {
        id: 'v12-1-7',
        word: 'humble',
        ipa: '/ˈhʌm.bəl/',
        meaningVi: 'khiêm tốn, giản dị mộc mạc',
        partOfSpeech: 'adjective',
        collocation: 'remain humble',
        example: 'Despite earning global fame, she remained remarkably humble and caring.',
        synonyms: ['modest', 'unassuming', 'unpretentious'],
        antonyms: ['arrogant', 'pompous', 'haughty', 'conceited']
      },
      {
        id: 'v12-1-8',
        word: 'obstacle',
        ipa: '/ˈɑːb.stə.kəl/',
        meaningVi: 'chướng ngại vật, trở ngại khó khăn',
        partOfSpeech: 'noun',
        collocation: 'overcome all obstacles',
        example: 'Determination empowers people to overcome all formidable obstacles.',
        synonyms: ['impediment', 'hindrance', 'hurdle'],
        antonyms: ['catalyst', 'advantage', 'assistance']
      },
      {
        id: 'v12-1-9',
        word: 'biography',
        ipa: '/baɪˈɑː.ɡrə.fi/',
        meaningVi: 'tiểu sử, truyện danh nhân do người khác viết',
        partOfSpeech: 'noun',
        collocation: 'read an inspiring biography',
        example: 'Reading the biography of Uncle Ho inspires us to live meaningful lives.',
        synonyms: ['memoir', 'life chronicle']
      },
      {
        id: 'v12-1-10',
        word: 'influential',
        ipa: '/ˌɪn.fluˈen.ʃəl/',
        meaningVi: 'có sức ảnh hưởng sâu rộng',
        partOfSpeech: 'adjective',
        collocation: 'influential figure',
        example: 'She was voted one of the most influential educators in the world by the Varkey Foundation.',
        synonyms: ['authoritative', 'potent', 'consequential'],
        antonyms: ['ineffectual', 'insignificant']
      }
    ],
    practice: [
      {
        id: 'p12-1-1',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to PERSEVERANCE:\n"Through dogged perseverance, the blind musician mastered classical violin."',
        options: ['tenacity and determination', 'apathy and laziness', 'foolish pride', 'hesitation'],
        correctAnswer: 'tenacity and determination',
        explanation: '"Perseverance" (lòng kiên trì bền bỉ) đồng nghĩa với "tenacity and determination".'
      },
      {
        id: 'p12-1-2',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to HUMBLE:\n"Despite becoming a billionaire, the scientist remained exceptionally humble."',
        options: ['arrogant and haughty', 'modest and simple', 'unpretentious', 'courteous'],
        correctAnswer: 'arrogant and haughty',
        explanation: '"Humble" (khiêm tốn nhún nhường) trái nghĩa với "arrogant and haughty" (kiêu ngạo tự phụ).'
      },
      {
        id: 'p12-1-3',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'one recurring virtue stands out: unyielding perseverance in the face of insurmountable adversity.',
        prompt: 'According to the reading passage, what virtue consistently defines admired historic luminaries?',
        options: [
          'Unyielding perseverance in the face of insurmountable adversity.',
          'Accumulation of immense private wealth and luxurious estates.',
          'Complete isolation from the struggles of ordinary people.',
          'Envy and continuous hostility towards rival scientists.'
        ],
        correctAnswer: 'Unyielding perseverance in the face of insurmountable adversity.',
        explanation: 'Đoạn trích khẳng định: "one recurring virtue stands out: unyielding perseverance in the face of insurmountable adversity."'
      },
      {
        id: 'p12-1-4',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to DISTINGUISHED:\n"He enjoyed a distinguished academic career spanning four decades."',
        options: ['obscure and undistinguished', 'eminent', 'illustrious', 'renowned'],
        correctAnswer: 'obscure and undistinguished',
        explanation: '"Distinguished" (lẫy lừng xuất chúng) trái nghĩa với "obscure and undistinguished" (mờ nhạt không ai biết đến).'
      },
      {
        id: 'p12-1-5',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to VISIONARY:\n"The university was founded by a visionary educator who foresaw the rise of information technology."',
        options: ['farsighted innovator', 'narrow-minded official', 'careless dreamer', 'corrupt tyrant'],
        correctAnswer: 'farsighted innovator',
        explanation: '"Visionary" (người nhìn xa trông rộng) đồng nghĩa với "farsighted innovator".'
      },
      {
        id: 'p12-1-6',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Soldiers demonstrated supreme ______ to ensure peace and liberty for the homeland.',
        options: ['self-sacrifice', 'discrimination', 'litter', 'wage gap'],
        correctAnswer: 'self-sacrifice',
        explanation: '"Self-sacrifice" là đức hy sinh quên mình vì nghĩa lớn.'
      },
      {
        id: 'p12-1-7',
        type: 'multiple-choice',
        category: 'collocation',
        prompt: 'The late scientist left an enduring ______ of cancer research that saved millions of lives.',
        options: ['legacy', 'chore', 'heatwave', 'drought'],
        correctAnswer: 'legacy',
        explanation: '"Enduring legacy" là di sản trường tồn với thời gian.'
      }
    ],
    bossQuestions: [
      {
        id: 'b12-1-1',
        question: 'Chọn thì Quá khứ hoàn thành đúng: "By the time he was thirty, the doctor ______ dozens of complex surgeries."',
        options: ['had performed', 'has performed', 'performed', 'was performing'],
        correctAnswer: 0,
        damage: 35,
        explanation: 'Cấu trúc "By the time + QKĐ" đi với mệnh đề chính chia Quá khứ hoàn thành (had performed).'
      },
      {
        id: 'b12-1-2',
        question: 'Từ "VISIONARY" có nghĩa gần nhất với:',
        options: ['farsighted and innovative', 'blind and careless', 'selfish and greedy', 'foolish'],
        correctAnswer: 0,
        damage: 30,
        explanation: '"Visionary" nghĩa là nhìn xa trông rộng (farsighted and innovative).'
      },
      {
        id: 'b12-1-3',
        question: 'Chọn câu chẻ (Cleft Sentence) nhấn mạnh chủ ngữ đúng:',
        options: [
          'It was her mother who taught her the importance of perseverance.',
          'It is her mother who teaching her the importance of perseverance.',
          'It was her mother which taught her the importance of perseverance.',
          'Was her mother who taught her the importance of perseverance.'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Cấu trúc câu chẻ trong quá khứ: It was + đối tượng nhấn mạnh + who/that + V-ed.'
      },
      {
        id: 'b12-1-4',
        question: 'Chọn thành ngữ diễn tả "vượt qua nghịch cảnh gian nan":',
        options: ['triumph over adversity', 'run out of steam', 'bite the dust', 'break the curfew'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Triumph over adversity" nghĩa là chiến thắng, vượt lên trên mọi nghịch cảnh.'
      }
    ]
  },

  // UNIT 2: A MULTICULTURAL WORLD
  {
    id: 'g12-u02',
    grade: 12,
    unit: 2,
    title: 'A Multicultural World',
    realmName: 'Vạn Tộc Cảnh - Hòa Hợp Bốn Phương',
    guardianName: 'Đặng Trần Hà',
    guardianColor: '#1e3a8a',
    storyIntro: 'Giang hồ ngũ hồ tứ hải, trăm phái nghìn hoa cùng nở rộ. Đặng Trần Hà hộ pháp giúp bạn thấu hiểu bản sắc đa văn hóa, giữ vững căn tính Việt Nam giữa biển lớn toàn cầu.',
    bossName: 'Hẹp Hòi Độc Đoán',
    bossTitle: 'Hộ Pháp Kỳ Thị - Kẻ Phân Biệt Chủng Tộc',
    bossHp: 120,
    xpReward: 200,
    readingPassage: {
      title: 'Harmony in Diversity: Thriving in a Multicultural Landscape',
      topic: 'Hội nhập đa văn hóa toàn cầu nhưng vẫn gìn giữ bản sắc dân tộc',
      fullText: `Globalization and digital telecommunications have compressed geographical distances, turning the contemporary world into a sprawling multicultural tapestry. Societies that embrace ethnic and cultural diversity enjoy immense vitality, innovative entrepreneurship, and rich artistic synthesis.\n\nNonetheless, navigating cultural diversity demands refined cross-cultural communicative competence. Rather than forcing minority groups to assimilate unconditionally into dominant customs, progressive nations foster pluralism built on mutual tolerance. For Vietnamese youths venturing into global arenas as proactive world citizens, the paramount challenge is to assimilate foreign knowledge while fervently preserving their national cultural identity and traditional folklore.`,
      keyTakeaway: 'Hội nhập không có nghĩa là hòa tan; khoan dung và bảo tồn bản sắc là nền tảng của công dân toàn cầu.',
      vocabularyHighlights: ['multicultural', 'cultural identity', 'assimilate', 'diversity', 'tolerance', 'global citizen']
    },
    vocabulary: [
      {
        id: 'v12-2-1',
        word: 'multicultural',
        ipa: '/ˌmʌl.tiˈkʌl.tʃɚ.əl/',
        meaningVi: 'đa văn hóa, đa sắc tộc chung sống',
        partOfSpeech: 'adjective',
        collocation: 'multicultural society',
        example: 'Canada and Australia are well known for their vibrant multicultural societies.',
        synonyms: ['cross-cultural', 'polyethnic', 'cosmopolitan'],
        antonyms: ['monocultural', 'homogeneous']
      },
      {
        id: 'v12-2-2',
        word: 'cultural identity',
        ipa: '/ˈkʌl.tʃɚ.əl aɪˈden.t̬ə.t̬i/',
        meaningVi: 'bản sắc văn hóa đặc trưng dân tộc',
        partOfSpeech: 'noun phrase',
        collocation: 'preserve cultural identity',
        example: 'Vietnamese youth proudly preserve their cultural identity while integrating globally.',
        synonyms: ['cultural distinctiveness', 'ethnic heritage'],
        inPassageSentence: 'Youths venture into global arenas while fervently preserving cultural identity.'
      },
      {
        id: 'v12-2-3',
        word: 'assimilate',
        ipa: '/əˈsɪm.ə.leɪt/',
        meaningVi: 'đồng hóa, hòa nhập hoàn toàn vào nền văn hóa khác',
        partOfSpeech: 'verb',
        collocation: 'assimilate into the host culture',
        example: 'Immigrants often strive to adapt without completely assimilating into the new culture.',
        synonyms: ['integrate', 'absorb', 'acculturate'],
        antonyms: ['segregate', 'isolate', 'alienate']
      },
      {
        id: 'v12-2-4',
        word: 'stereotype',
        ipa: '/ˈster.i.ə.taɪp/',
        meaningVi: 'khuôn mẫu định kiến rập khuôn',
        partOfSpeech: 'noun',
        collocation: 'break cultural stereotypes',
        example: 'Traveling widely helps people break narrow cultural stereotypes.',
        synonyms: ['preconception', 'cliché', 'generalized assumption']
      },
      {
        id: 'v12-2-5',
        word: 'diversity',
        ipa: '/dɪˈvɝː.sə.t̬i/',
        meaningVi: 'sự phong phú, đa dạng',
        partOfSpeech: 'noun',
        collocation: 'cultural diversity',
        example: 'Respecting cultural diversity enriches human society and prevents conflict.',
        synonyms: ['heterogeneity', 'multiplicity', 'plurality', 'variety'],
        antonyms: ['uniformity', 'monotony', 'sameness']
      },
      {
        id: 'v12-2-6',
        word: 'custom',
        ipa: '/ˈkʌs.təm/',
        meaningVi: 'phong tục tập quán truyền đời',
        partOfSpeech: 'noun',
        collocation: 'ancient customs',
        example: 'Making chung cake during Tet is a sacred custom of the Vietnamese people.',
        synonyms: ['tradition', 'observance', 'convention']
      },
      {
        id: 'v12-2-7',
        word: 'cross-cultural',
        ipa: '/ˌkrɑːsˈkʌl.tʃɚ.əl/',
        meaningVi: 'liên văn hóa, giao thoa giữa các nền văn hóa',
        partOfSpeech: 'adjective',
        collocation: 'cross-cultural communication',
        example: 'Cross-cultural communication skills are invaluable in global business meetings.',
        synonyms: ['intercultural', 'transcultural']
      },
      {
        id: 'v12-2-8',
        word: 'tolerance',
        ipa: '/ˈtɑː.lɚ.əns/',
        meaningVi: 'sự khoan dung, chấp nhận sự khác biệt',
        partOfSpeech: 'noun',
        collocation: 'religious and cultural tolerance',
        example: 'Peaceful coexistence relies heavily on mutual tolerance and empathy.',
        synonyms: ['forbearance', 'openness', 'magnanimity'],
        antonyms: ['intolerance', 'bigotry', 'fanaticism']
      },
      {
        id: 'v12-2-9',
        word: 'folklore',
        ipa: '/ˈfoʊk.lɔːr/',
        meaningVi: 'văn hóa dân gian, truyện tích cổ truyền',
        partOfSpeech: 'noun',
        collocation: 'rich traditional folklore',
        example: 'Traditional folklore teaches profound moral lessons through allegorical tales.',
        synonyms: ['mythology', 'oral traditions', 'folk wisdom']
      },
      {
        id: 'v12-2-10',
        word: 'global citizen',
        ipa: '/ˈɡloʊ.bəl ˈsɪt̬.ə.zən/',
        meaningVi: 'công dân toàn cầu',
        partOfSpeech: 'noun phrase',
        collocation: 'become a global citizen',
        example: 'Fluency in English empowers high schoolers to become proactive global citizens.',
        synonyms: ['cosmopolitan', 'world citizen']
      }
    ],
    practice: [
      {
        id: 'p12-2-1',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to DIVERSITY:\n"Biodiversity and cultural diversity are both essential for human survival."',
        options: ['heterogeneity and variety', 'uniformity', 'sameness', 'isolation'],
        correctAnswer: 'heterogeneity and variety',
        explanation: '"Diversity" (sự đa dạng phong phú) đồng nghĩa với "heterogeneity and variety".'
      },
      {
        id: 'p12-2-2',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to TOLERANCE:\n"Democratic institutions promote religious tolerance and individual liberties."',
        options: ['bigotry and fanaticism', 'forbearance', 'magnanimity', 'kindness'],
        correctAnswer: 'bigotry and fanaticism',
        explanation: '"Tolerance" (lòng khoan dung độ lượng) trái nghĩa với "bigotry and fanaticism" (sự cố chấp mù quáng, cuồng tín).'
      },
      {
        id: 'p12-2-3',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'For Vietnamese youths venturing into global arenas as proactive world citizens, the paramount challenge is to assimilate foreign knowledge while fervently preserving their national cultural identity.',
        prompt: 'What is the paramount challenge for Vietnamese youths according to the passage?',
        options: [
          'To acquire global knowledge while staunchly preserving national cultural identity.',
          'To forget Vietnamese history and speak only foreign languages.',
          'To reject all technological progress and isolate the nation.',
          'To abandon all local folklore and traditions.'
        ],
        correctAnswer: 'To acquire global knowledge while staunchly preserving national cultural identity.',
        explanation: 'Đoạn trích nêu rõ: "assimilate foreign knowledge while fervently preserving their national cultural identity."'
      },
      {
        id: 'p12-2-4',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to ASSIMILATE:\n"Rather than assimilating completely, the community kept their mother tongue."',
        options: ['segregate', 'integrate', 'incorporate', 'blend'],
        correctAnswer: 'segregate',
        explanation: '"Assimilate" (hòa tan đồng hóa) trái nghĩa với "segregate" (tách biệt, phân lập).'
      },
      {
        id: 'p12-2-5',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to STEREOTYPE:\n"The advertising campaign effectively dismantled outdated gender stereotypes."',
        options: ['oversimplified generalizations', 'accurate descriptions', 'scientific proofs', 'rare anomalies'],
        correctAnswer: 'oversimplified generalizations',
        explanation: '"Stereotype" (định kiến rập khuôn) đồng nghĩa với "oversimplified generalizations".'
      },
      {
        id: 'p12-2-6',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'While integrating into the global world, we must always preserve our national cultural ______.',
        options: ['identity', 'curfew', 'footprint', 'wage gap'],
        correctAnswer: 'identity',
        explanation: '"Cultural identity" là bản sắc văn hóa dân tộc.'
      },
      {
        id: 'p12-2-7',
        type: 'multiple-choice',
        category: 'collocation',
        prompt: 'In Vietnam, giving lucky money during Lunar New Year is a cherished traditional ______.',
        options: ['custom', 'patent', 'sensor', 'chore'],
        correctAnswer: 'custom',
        explanation: '"Traditional custom" là phong tục truyền thống tốt đẹp.'
      }
    ],
    bossQuestions: [
      {
        id: 'b12-2-1',
        question: 'Chọn cấu trúc Đảo ngữ (Inversion) đúng: "Not only ______ fluent in English, but she also speaks French fluently."',
        options: ['is she', 'she is', 'she does', 'does she be'],
        correctAnswer: 0,
        damage: 35,
        explanation: 'Đảo ngữ với "Not only" đứng đầu câu: Not only + Trợ động từ/Tobe + S + ... (is she).'
      },
      {
        id: 'b12-2-2',
        question: 'Từ "ASSIMILATE" trong bối cảnh văn hóa có nghĩa là:',
        options: [
          'absorb and integrate into a dominant culture',
          'destroy all historical books and documents',
          'fight wars against neighboring tribes',
          'refuse to speak any foreign languages'
        ],
        correctAnswer: 0,
        damage: 30,
        explanation: '"Assimilate" là hòa tan, đồng hóa vào một nền văn hóa lớn.'
      },
      {
        id: 'b12-2-3',
        question: 'Chọn câu diễn tả đúng sứ mệnh của Hồng Y Tông Chủ Hà Ánh Phượng:',
        options: [
          'English is a bridge connecting Vietnamese culture to the entire world.',
          'Education must remain isolated within a single village.',
          'Cultural differences should cause hostility and separation.',
          'Traditional customs must be abolished completely.'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Tiếng Anh là nhịp cầu kết nối văn hóa Việt Nam ra thế giới.'
      },
      {
        id: 'b12-2-4',
        question: 'Tìm từ ĐỒNG NGHĨA với "DIVERSITY":',
        options: ['variety', 'sameness', 'uniformity', 'monotony'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Diversity" đồng nghĩa với "variety" (sự đa dạng nhiều vẻ).'
      }
    ]
  },

  // UNIT 3: GREEN LIVING
  {
    id: 'g12-u03',
    grade: 12,
    unit: 3,
    title: 'Green Living',
    realmName: 'Thanh Khiết Cảnh - Lối Sống Xanh',
    guardianName: 'Liên Phạm',
    guardianColor: '#7c3aed',
    storyIntro: 'Trở về với sự thuần khiết của thiên nhiên. Liên Phạm hộ pháp rèn dũa kiếm chiêu Sống Xanh để thanh tẩy rác thải độc hại, xây dựng giang sơn tươi đẹp trường tồn.',
    bossName: 'Độc Thủy Độc Mộc',
    bossTitle: 'Hộ Pháp Rác Thải - Kẻ Xả Độc Môi Sinh',
    bossHp: 125,
    xpReward: 210,
    readingPassage: {
      title: 'From Throwaway Culture to the Circular Economy',
      topic: 'Chuyển dịch từ văn hóa vứt bỏ sang nền kinh tế tuần hoàn và lối sống xanh',
      fullText: `The linear economic paradigm—extract, manufacture, consume, and discard—has pushed ecological systems to the brink of collapse. Landfills overflow with non-biodegradable synthetic polymers that contaminate groundwater for centuries.\n\nIn response, the zero-waste philosophy and the circular economy are rapidly gaining global traction. In a circular framework, products are engineered for longevity, disassembly, and infinite recyclability. Household food scraps are systematically turned into rich agricultural compost, while artisans creatively upcycle discarded fabrics into fashionable merchandise. By embracing energy-efficient appliances and patronizing refill stations, modern citizens demonstrate that prosperity can flourish without squandering finite ecological treasures.`,
      keyTakeaway: 'Kinh tế tuần hoàn và lối sống không rác thải biến đồ bỏ đi thành tài nguyên tái tạo, bảo vệ trái đất.',
      vocabularyHighlights: ['zero-waste', 'biodegradable', 'compost', 'upcycle', 'circular economy', 'energy-efficient']
    },
    vocabulary: [
      {
        id: 'v12-3-1',
        word: 'zero-waste',
        ipa: '/ˌzɪr.oʊˈweɪst/',
        meaningVi: 'lối sống không rác thải, tái chế triệt để',
        partOfSpeech: 'adjective',
        collocation: 'zero-waste lifestyle',
        example: 'Adopting a zero-waste lifestyle means avoiding single-use packaging entirely.',
        synonyms: ['waste-free', 'closed-loop living']
      },
      {
        id: 'v12-3-2',
        word: 'biodegradable',
        ipa: '/ˌbaɪ.oʊ.dɪˈɡreɪ.də.bəl/',
        meaningVi: 'có thể tự phân hủy sinh học trong đất',
        partOfSpeech: 'adjective',
        collocation: 'biodegradable food containers',
        example: 'Straws made from rice or grass are completely biodegradable and safe.',
        synonyms: ['compostable', 'ecologically degradable'],
        antonyms: ['non-biodegradable', 'indestructible']
      },
      {
        id: 'v12-3-3',
        word: 'compost',
        ipa: '/ˈkɑːm.poʊst/',
        meaningVi: 'phân ủ hữu cơ từ vỏ rau củ quả',
        partOfSpeech: 'noun / verb',
        collocation: 'turn food scraps into compost',
        example: 'We turn kitchen vegetable scraps into rich compost for the garden.',
        synonyms: ['humus', 'organic fertilizer']
      },
      {
        id: 'v12-3-4',
        word: 'upcycle',
        ipa: '/ˈʌpˌsaɪ.kəl/',
        meaningVi: 'tái chế nâng cấp đồ cũ thành vật có giá trị cao hơn',
        partOfSpeech: 'verb',
        collocation: 'upcycle old clothes',
        example: 'Creative teenagers upcycle discarded denim jeans into fashionable tote bags.',
        synonyms: ['creatively repurpose', 'value-add recycling'],
        antonyms: ['downcycle', 'discard']
      },
      {
        id: 'v12-3-5',
        word: 'circular economy',
        ipa: '/ˌsɝː.kjə.lɚ iˈkɑː.nə.mi/',
        meaningVi: 'nền kinh tế tuần hoàn tái tạo tài nguyên',
        partOfSpeech: 'noun phrase',
        collocation: 'transition to a circular economy',
        example: 'A circular economy minimizes waste by reusing materials endlessly.',
        synonyms: ['regenerative economic model'],
        antonyms: ['linear throwaway economy']
      },
      {
        id: 'v12-3-6',
        word: 'energy-efficient',
        ipa: '/ˌen.ɚ.dʒi.ɪˈfɪʃ.ənt/',
        meaningVi: 'tiết kiệm năng lượng hiệu suất cao',
        partOfSpeech: 'adjective',
        collocation: 'energy-efficient appliances',
        example: 'Inverter air conditioners are highly energy-efficient and cut electric bills.',
        synonyms: ['energy-saving', 'low-consumption'],
        antonyms: ['energy-guzzling', 'power-wasting']
      },
      {
        id: 'v12-3-7',
        word: 'waste sorting',
        ipa: '/weɪst ˈsɔːr.tɪŋ/',
        meaningVi: 'phân loại rác thải tại nguồn',
        partOfSpeech: 'noun phrase',
        collocation: 'practice waste sorting',
        example: 'Every household must practice waste sorting into organic, recyclable, and hazardous bins.',
        synonyms: ['refuse separation', 'source segregation']
      },
      {
        id: 'v12-3-8',
        word: 'refill',
        ipa: '/ˌriːˈfɪl/',
        meaningVi: 'làm đầy lại, dùng lại chai lọ cũ',
        partOfSpeech: 'verb / noun',
        collocation: 'refill water bottles',
        example: 'Carry your own bottle to refill at clean public water fountains.',
        synonyms: ['replenish', 'recharge']
      },
      {
        id: 'v12-3-9',
        word: 'eco-conscious',
        ipa: '/ˌiː.koʊˈkɑːn.ʃəs/',
        meaningVi: 'có ý thức sâu sắc về môi trường',
        partOfSpeech: 'adjective',
        collocation: 'eco-conscious consumer',
        example: 'Eco-conscious shoppers always refuse non-biodegradable plastic bags.',
        synonyms: ['environmentally mindful', 'green-minded'],
        antonyms: ['ecologically reckless', 'negligent']
      },
      {
        id: 'v12-3-10',
        word: 'conserve natural resources',
        ipa: '/kənˈsɝːv ˈnætʃ.ɚ.əl ˈriː.sɔːr.sɪz/',
        meaningVi: 'gìn giữ bảo vệ tài nguyên thiên nhiên',
        partOfSpeech: 'verb phrase',
        collocation: 'conserve natural resources for posterity',
        example: 'Saving fresh water is a vital habit to conserve natural resources.',
        synonyms: ['husband ecological assets'],
        antonyms: ['deplete raw materials', 'squander nature']
      }
    ],
    practice: [
      {
        id: 'p12-3-1',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to BIODEGRADABLE:\n"The company manufactures fully biodegradable coffee cups from bamboo fibers."',
        options: ['compostable naturally', 'indestructible forever', 'highly hazardous', 'non-recyclable'],
        correctAnswer: 'compostable naturally',
        explanation: '"Biodegradable" (có thể tự phân hủy an toàn) đồng nghĩa với "compostable naturally".'
      },
      {
        id: 'p12-3-2',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to ENERGY-EFFICIENT:\n"We must replace energy-efficient bulbs with modern green fixtures."',
        options: ['energy-guzzling and wasteful', 'low-consumption', 'cost-saving', 'sustainable'],
        correctAnswer: 'energy-guzzling and wasteful',
        explanation: '"Energy-efficient" (tiết kiệm điện) trái nghĩa với "energy-guzzling and wasteful" (ngốn điện, lãng phí năng lượng).'
      },
      {
        id: 'p12-3-3',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'In a circular framework, products are engineered for longevity, disassembly, and infinite recyclability.',
        prompt: 'How are products engineered in a circular economy according to the passage?',
        options: [
          'For longevity, disassembly, and infinite recyclability.',
          'To break down immediately and force consumers to buy replacements.',
          'To produce radioactive fumes during consumption.',
          'Solely to maximize single-use packaging.'
        ],
        correctAnswer: 'For longevity, disassembly, and infinite recyclability.',
        explanation: 'Đoạn văn nêu rõ: "products are engineered for longevity, disassembly, and infinite recyclability."'
      },
      {
        id: 'p12-3-4',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to UPCYCLE:\n"Craftsmen upcycle broken furniture into unique decorative art pieces."',
        options: ['creatively repurpose', 'smash to pieces', 'bury in landfill', 'burn into ashes'],
        correctAnswer: 'creatively repurpose',
        explanation: '"Upcycle" (tái chế nâng cấp giá trị) đồng nghĩa với "creatively repurpose".'
      },
      {
        id: 'p12-3-5',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to CONSERVE NATURAL RESOURCES:\n"We should take measures to avoid depleting nature."',
        options: ['squander raw materials', 'protect biodiversity', 'safeguard clean water', 'plant forests'],
        correctAnswer: 'squander raw materials',
        explanation: '"Conserve natural resources" (gìn giữ tài nguyên) trái nghĩa với "squander raw materials" (hoang phí nguyên liệu thô).'
      },
      {
        id: 'p12-3-6',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Separating recyclables from organic kitchen food is part of daily waste ______.',
        options: ['sorting', 'gap', 'curfew', 'appliances'],
        correctAnswer: 'sorting',
        explanation: '"Waste sorting" là phân loại rác tại nguồn.'
      },
      {
        id: 'p12-3-7',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Instead of throwing away broken wooden pallets, he decided to ______ them into garden chairs.',
        options: ['upcycle', 'litter', 'deforest', 'pollute'],
        correctAnswer: 'upcycle',
        explanation: '"Upcycle" là tái chế nâng cấp đồ cũ.'
      }
    ],
    bossQuestions: [
      {
        id: 'b12-3-1',
        question: 'Chọn cấu trúc Giả định thức (Subjunctive) đúng: "The environmentalist suggested that every citizen ______ single-use plastics."',
        options: ['reduce', 'reduces', 'reduced', 'reducing'],
        correctAnswer: 0,
        damage: 35,
        explanation: 'Cấu trúc giả định thức với "suggest that + S + (should) + V-inf" (reduce).'
      },
      {
        id: 'b12-3-2',
        question: 'Từ "UPCYCLE" khác "RECYCLE" ở điểm nào?',
        options: [
          'Upcycling transforms waste into products of higher value or beauty.',
          'Upcycling means throwing things straight into landfill.',
          'Upcycling is only used for radioactive nuclear materials.',
          'Upcycling produces massive air and water pollution.'
        ],
        correctAnswer: 0,
        damage: 30,
        explanation: 'Upcycle là tái chế biến đồ bỏ đi thành vật dụng có giá trị thẩm mỹ và công năng cao hơn.'
      },
      {
        id: 'b12-3-3',
        question: 'Điền từ thích hợp: "The government proposed that carbon taxes ______ on high-polluting factories."',
        options: ['be levied', 'is levied', 'are levied', 'levies'],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Giả định thức bị động: S + propose that + S + be + V3/ed (be levied).'
      },
      {
        id: 'b12-3-4',
        question: 'Từ trái nghĩa với "BIODEGRADABLE" là:',
        options: ['non-biodegradable', 'organic', 'compostable', 'natural'],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Trái nghĩa với "biodegradable" là "non-biodegradable" (không thể tự phân hủy).'
      }
    ]
  },

  // UNIT 4: URBANISATION
  {
    id: 'g12-u04',
    grade: 12,
    unit: 4,
    title: 'Urbanisation',
    realmName: 'Thành Thị Cảnh - Trận Đồ Đô Hội',
    guardianName: 'Nguyệt Nguyễn',
    guardianColor: '#d97706',
    storyIntro: 'Dòng người ùa về phố thị hoa lệ mang theo cả cơ hội lẫn thử thách chông gai. Nguyệt Nguyễn hộ pháp cùng bạn hóa giải áp lực quá tải hạ tầng đô thị.',
    bossName: 'Hắc Thị Áp Lực',
    bossTitle: 'Hộ Pháp Quá Tải - Kẻ Gây Tắc Nghẽn Phồn Hoa',
    bossHp: 125,
    xpReward: 210,
    readingPassage: {
      title: 'Megacities in the Balance: Managing the Tide of Urban Migration',
      topic: 'Làn sóng di cư nông thôn - thành thị và thách thức quy hoạch siêu đô thị',
      fullText: `Urbanisation represents one of the most transformative socio-economic phenomena of modern civilization. Drawn by magnetic prospects of higher wages, sophisticated hospitals, and prestigious universities, tens of millions engage in rural-to-urban migration each year.\n\nYet, this demographic tidal wave poses daunting challenges. Unbridled population density strains electricity grids, contaminates air basins, and spawns chronic traffic congestion. In many burgeoning metropolises, acute housing shortages force impoverished migrant laborers into substandard slums lacking basic sanitation. Urban sociologists argue that unless municipal governments decentralize industrial hubs and build affordable social infrastructure, unchecked urban sprawl will erode the very prosperity cities promise.`,
      keyTakeaway: 'Đô thị hóa mang lại phồn vinh nhưng đòi hỏi quy hoạch giãn dân và phát triển nhà ở xã hội để tránh khu ổ chuột và kẹt xe.',
      vocabularyHighlights: ['urbanisation', 'rural-to-urban migration', 'congestion', 'slum', 'sanitation', 'prosperity']
    },
    vocabulary: [
      {
        id: 'v12-4-1',
        word: 'urbanisation',
        ipa: '/ˌɝː.bən.əˈzeɪ.ʃən/',
        meaningVi: 'quá trình đô thị hóa',
        partOfSpeech: 'noun',
        collocation: 'rapid rate of urbanisation',
        example: 'Rapid urbanisation has drawn millions from rural areas to major economic hubs.',
        synonyms: ['city growth', 'urban development']
      },
      {
        id: 'v12-4-2',
        word: 'rural-to-urban migration',
        ipa: '/ˌrʊr.əl tu ˌɝː.bən maɪˈɡreɪ.ʃən/',
        meaningVi: 'dòng di cư từ nông thôn ra thành thị',
        partOfSpeech: 'noun phrase',
        collocation: 'cause rural-to-urban migration',
        example: 'Better job prospects in industrial zones trigger large-scale rural-to-urban migration.',
        synonyms: ['urban influx', 'rural exodus']
      },
      {
        id: 'v12-4-3',
        word: 'slum',
        ipa: '/slʌm/',
        meaningVi: 'khu ổ chuột lụp xụp, điều kiện sống tồi tàn',
        partOfSpeech: 'noun',
        collocation: 'slum clearance',
        example: 'Urban planners are designing affordable social housing to replace polluted slums.',
        synonyms: ['shantytown', 'favela', 'substandard settlement'],
        antonyms: ['affluent suburb', 'luxury quarter']
      },
      {
        id: 'v12-4-4',
        word: 'congestion',
        ipa: '/kənˈdʒes.tʃən/',
        meaningVi: 'sự tắc nghẽn giao thông đọng lại',
        partOfSpeech: 'noun',
        collocation: 'traffic congestion',
        example: 'Expanding subway rail networks is vital to alleviate severe traffic congestion.',
        synonyms: ['gridlock', 'traffic bottleneck', 'jam'],
        antonyms: ['free flow', 'unhindered transit']
      },
      {
        id: 'v12-4-5',
        word: 'population density',
        ipa: '/ˌpɑː.pjəˈleɪ.ʃən ˈden.sə.t̬i/',
        meaningVi: 'mật độ dân số trên mỗi km²',
        partOfSpeech: 'noun phrase',
        collocation: 'high population density',
        example: 'Downtown districts often struggle with extremely high population density.',
        synonyms: ['demographic concentration']
      },
      {
        id: 'v12-4-6',
        word: 'standard of living',
        ipa: '/ˌstæn.dɚd əv ˈlɪv.ɪŋ/',
        meaningVi: 'mức sống, điều kiện vật chất của người dân',
        partOfSpeech: 'noun phrase',
        collocation: 'raise the standard of living',
        example: 'Access to modern healthcare and clean water raised the local standard of living.',
        synonyms: ['material welfare', 'socioeconomic status']
      },
      {
        id: 'v12-4-7',
        word: 'housing shortage',
        ipa: '/ˈhaʊ.zɪŋ ˈʃɔːr.t̬ɪdʒ/',
        meaningVi: 'sự thiếu hụt nhà ở trầm trọng',
        partOfSpeech: 'noun phrase',
        collocation: 'face severe housing shortage',
        example: 'Rapid population inflow causes an acute housing shortage in metropolitan areas.',
        synonyms: ['residential deficit', 'lack of accommodation']
      },
      {
        id: 'v12-4-8',
        word: 'sanitation',
        ipa: '/ˌsæn.əˈteɪ.ʃən/',
        meaningVi: 'hệ thống vệ sinh môi trường phòng dịch',
        partOfSpeech: 'noun',
        collocation: 'adequate sanitation facilities',
        example: 'Improving public sanitation prevents the outbreak of infectious diseases.',
        synonyms: ['sewage management', 'public hygiene'],
        antonyms: ['insalubrity', 'squalor']
      },
      {
        id: 'v12-4-9',
        word: 'infrastructure strain',
        ipa: '/ˈɪn.frəˌstrʌk.tʃɚ streɪn/',
        meaningVi: 'áp lực quá tải đè nặng lên cơ sở hạ tầng',
        partOfSpeech: 'noun phrase',
        collocation: 'put strain on infrastructure',
        example: 'Surging car ownership puts intense strain on older city roadways.',
        synonyms: ['systemic overload', 'capacity bottleneck']
      },
      {
        id: 'v12-4-10',
        word: 'prosperity',
        ipa: '/prɑːˈsper.ə.t̬i/',
        meaningVi: 'sự thịnh vượng, phồn vinh kinh tế',
        partOfSpeech: 'noun',
        collocation: 'economic prosperity',
        example: 'Strategic investments in education and innovation brought long-term prosperity.',
        synonyms: ['affluence', 'opulence', 'well-being'],
        antonyms: ['pauperism', 'destitution', 'indigence']
      }
    ],
    practice: [
      {
        id: 'p12-4-1',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to CONGESTION:\n"Constructing underground metro tunnels is vital to overcome chronic traffic congestion."',
        options: ['traffic gridlock and jams', 'free flowing transit', 'rapid movement', 'spacious avenues'],
        correctAnswer: 'traffic gridlock and jams',
        explanation: '"Congestion" (sự tắc nghẽn giao thông) đồng nghĩa với "traffic gridlock and jams".'
      },
      {
        id: 'p12-4-2',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to PROSPERITY:\n"The economic policies helped the metropolitan zone achieve long-term prosperity."',
        options: ['destitution and poverty', 'affluence', 'wealth', 'flourishing growth'],
        correctAnswer: 'destitution and poverty',
        explanation: '"Prosperity" (sự phồn vinh thịnh vượng) trái nghĩa với "destitution and poverty" (cảnh bần hàn cơ cực).'
      },
      {
        id: 'p12-4-3',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'acute housing shortages force impoverished migrant laborers into substandard slums lacking basic sanitation.',
        prompt: 'What problem do impoverished migrant laborers face due to acute housing shortages?',
        options: [
          'They are forced into substandard slums lacking basic sanitation.',
          'They are given free penthouses in luxury towers.',
          'They immediately return to overseas countries.',
          'They are exempted from all city taxes.'
        ],
        correctAnswer: 'They are forced into substandard slums lacking basic sanitation.',
        explanation: 'Đoạn trích nêu: "acute housing shortages force impoverished migrant laborers into substandard slums lacking basic sanitation."'
      },
      {
        id: 'p12-4-4',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to SLUM:\n"The government aims to demolish unhygienic slums along city canals."',
        options: ['upscale residential district', 'shantytown', 'favela', 'squatter settlement'],
        correctAnswer: 'upscale residential district',
        explanation: '"Slum" (khu ổ chuột lụp xụp) trái nghĩa với "upscale residential district" (khu đô thị cao cấp sang trọng).'
      },
      {
        id: 'p12-4-5',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to SANITATION:\n"Adequate public sanitation is essential to safeguard civic health."',
        options: ['hygiene and sewage systems', 'highway construction', 'entertainment parks', 'museums'],
        correctAnswer: 'hygiene and sewage systems',
        explanation: '"Sanitation" (hệ thống vệ sinh phòng dịch) đồng nghĩa với "hygiene and sewage systems".'
      },
      {
        id: 'p12-4-6',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Rapid population influx from countryside areas puts heavy ______ on hospital facilities.',
        options: ['strain', 'melody', 'custom', 'chores'],
        correctAnswer: 'strain',
        explanation: '"Put strain on sth" là gây áp lực quá tải lên hệ thống.'
      },
      {
        id: 'p12-4-7',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Many young graduates move to big metropolises in search of higher ______ of living.',
        options: ['standards', 'chores', 'curfews', 'wage gaps'],
        correctAnswer: 'standards',
        explanation: '"Standard of living" là mức sống.'
      }
    ],
    bossQuestions: [
      {
        id: 'b12-4-1',
        question: 'Chọn cấu trúc So sánh kép (Double Comparative) đúng: "The more people migrate to the city, ______ the traffic becomes."',
        options: ['the worse', 'the worst', 'more worse', 'worse than'],
        correctAnswer: 0,
        damage: 35,
        explanation: 'Cấu trúc so sánh kép: The + comparative + S + V, the + comparative + S + V (the worse).'
      },
      {
        id: 'b12-4-2',
        question: 'Thuật ngữ "RURAL-TO-URBAN MIGRATION" mang ý nghĩa gì?',
        options: [
          'The movement of people from the countryside to cities.',
          'The movement of people from cities back into ancient forests.',
          'International travel for leisure and summer vacations.',
          'The seasonal migration of birds across oceans.'
        ],
        correctAnswer: 0,
        damage: 30,
        explanation: '"Rural-to-urban migration" là hiện tượng di cư từ thôn quê lên thành phố.'
      },
      {
        id: 'b12-4-3',
        question: 'Chọn câu điều kiện loại 3 diễn tả giả định không có thật trong quá khứ:',
        options: [
          'If the government had planned the roads better, severe jams would not have occurred.',
          'If the government planned the roads better, severe jams would not occur.',
          'If the government plans the roads better, severe jams will not occur.',
          'If the government would plan the roads better, severe jams would not occur.'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Câu điều kiện loại 3: If + QKHT, S + would have + V3/ed.'
      },
      {
        id: 'b12-4-4',
        question: 'Từ "PROSPERITY" đồng nghĩa với:',
        options: ['wealth and success', 'extreme poverty', 'failure and despair', 'loneliness'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Prosperity" nghĩa là sự thịnh vượng thành công (wealth and success).'
      }
    ]
  },

  // UNIT 5: THE WORLD OF WORK
  {
    id: 'g12-u05',
    grade: 12,
    unit: 5,
    title: 'The World of Work',
    realmName: 'Luận Kiếm Cảnh - Đại Nghiệp Giang Hồ',
    guardianName: 'Hoàng Vân',
    guardianColor: '#e11d48',
    storyIntro: 'Đỉnh cao của ba năm khổ luyện là bước vào trường đời, làm rạng danh sư môn. Hoàng Vân hộ pháp tôi rèn kỹ năng phỏng vấn, hồ sơ CV và tư duy nghề nghiệp chuyên nghiệp.',
    bossName: 'Hắc Ám Thất Nghiệp',
    bossTitle: 'Hộ Pháp Đào Thải - Thử Thách Trưởng Thành',
    bossHp: 130,
    xpReward: 220,
    readingPassage: {
      title: 'Thriving in the Fourth Industrial Revolution: The Future Workplace',
      topic: 'Chiến lược phát triển kỹ năng và xây dựng sự nghiệp trong thời đại số',
      fullText: `The modern labor market is undergoing unprecedented disruption driven by automation and artificial intelligence. Routine administrative and manual tasks are increasingly relegated to algorithmic systems. Consequently, prospective employees must elevate their employability through continuous upskilling.\n\nEmployers no longer evaluate candidates merely on static diplomas; they scrutinize a tailored curriculum vitae for demonstrable soft skills such as emotional intelligence, adaptive communication, and ethical decision-making. During probationary periods and competitive job interviews, the ability to collaborate in cross-functional teams is paramount. Furthermore, young professionals who successfully balance intense workloads with healthy personal rejuvenation achieve sustainable career promotion without falling prey to occupational burnout.`,
      keyTakeaway: 'Nâng cao khả năng tuyển dụng bằng kỹ năng mềm, tư duy thích ứng và cân bằng công việc - đời sống.',
      vocabularyHighlights: ['employability', 'curriculum vitae', 'probation', 'soft skills', 'work-life balance', 'promotion']
    },
    vocabulary: [
      {
        id: 'v12-5-1',
        word: 'employability',
        ipa: '/ɪmˌplɔɪ.əˈbɪl.ə.t̬i/',
        meaningVi: 'khả năng tuyển dụng, giá trị ứng viên trên thị trường lao động',
        partOfSpeech: 'noun',
        collocation: 'enhance employability skills',
        example: 'Mastering English and digital tools greatly enhances students’ employability.',
        synonyms: ['marketability as a candidate', 'hireability'],
        inPassageSentence: 'Prospective employees must elevate their employability.'
      },
      {
        id: 'v12-5-2',
        word: 'curriculum vitae',
        ipa: '/kəˌrɪk.jə.ləm ˈviː.taɪ/',
        meaningVi: 'sơ yếu lý lịch ứng tuyển (CV)',
        partOfSpeech: 'noun phrase',
        collocation: 'submit a tailored curriculum vitae',
        example: 'Ensure your curriculum vitae clearly highlights relevant volunteer experience.',
        synonyms: ['resume', 'professional dossier']
      },
      {
        id: 'v12-5-3',
        word: 'probation',
        ipa: '/proʊˈbeɪ.ʃən/',
        meaningVi: 'thời gian thử việc ban đầu',
        partOfSpeech: 'noun',
        collocation: 'complete a two-month probation',
        example: 'After demonstrating excellent work during probation, he was offered a permanent contract.',
        synonyms: ['trial period', 'test period']
      },
      {
        id: 'v12-5-4',
        word: 'soft skills',
        ipa: '/ˈsɑːft ˌskɪlz/',
        meaningVi: 'kỹ năng mềm (giao tiếp, làm việc nhóm, đàm phán)',
        partOfSpeech: 'noun plural',
        collocation: 'master essential soft skills',
        example: 'Employers prioritize candidates with strong soft skills and adaptability.',
        synonyms: ['interpersonal abilities', 'social competencies'],
        antonyms: ['hard skills', 'technical proficiencies']
      },
      {
        id: 'v12-5-5',
        word: 'work-life balance',
        ipa: '/ˌwɝːk.laɪf ˈbæl.əns/',
        meaningVi: 'sự cân bằng giữa công việc và cuộc sống riêng',
        partOfSpeech: 'noun phrase',
        collocation: 'maintain healthy work-life balance',
        example: 'Remote working flexible hours helps parents maintain a healthy work-life balance.',
        synonyms: ['lifestyle equilibrium'],
        antonyms: ['workaholism', 'burnout']
      },
      {
        id: 'v12-5-6',
        word: 'recruitment',
        ipa: '/rɪˈkruːt.mənt/',
        meaningVi: 'quy trình tuyển dụng nhân sự',
        partOfSpeech: 'noun',
        collocation: 'recruitment process',
        example: 'The company launched an international recruitment campaign for software engineers.',
        synonyms: ['hiring', 'talent acquisition', 'enlistment']
      },
      {
        id: 'v12-5-7',
        word: 'career path',
        ipa: '/kəˈrɪr ˌpæθ/',
        meaningVi: 'lộ trình thăng tiến sự nghiệp',
        partOfSpeech: 'noun phrase',
        collocation: 'choose a promising career path',
        example: 'Seeking career guidance helps high school seniors map out a viable career path.',
        synonyms: ['vocational trajectory', 'professional route']
      },
      {
        id: 'v12-5-8',
        word: 'job interview',
        ipa: '/ˈdʒɑːb ˌɪn.t̬ɚ.vjuː/',
        meaningVi: 'buổi phỏng vấn xin việc',
        partOfSpeech: 'noun phrase',
        collocation: 'ace the job interview',
        example: 'Practicing common questions in English helps you ace the job interview.',
        synonyms: ['employment assessment']
      },
      {
        id: 'v12-5-9',
        word: 'internship',
        ipa: '/ˈɪn.tɝːn.ʃɪp/',
        meaningVi: 'kỳ thực tập sinh trải nghiệm thực tế',
        partOfSpeech: 'noun',
        collocation: 'complete a paid internship',
        example: 'Completing a summer internship gives college students hands-on professional skills.',
        synonyms: ['apprenticeship', 'practicum', 'traineeship']
      },
      {
        id: 'v12-5-10',
        word: 'promotion',
        ipa: '/prəˈmoʊ.ʃən/',
        meaningVi: 'sự thăng chức, đề bạt lên vị trí cao hơn',
        partOfSpeech: 'noun',
        collocation: 'earn a well-deserved promotion',
        example: 'Her exceptional performance and team leadership earned her a swift promotion to manager.',
        synonyms: ['advancement', 'elevation', 'preferment'],
        antonyms: ['demotion', 'downgrade']
      }
    ],
    practice: [
      {
        id: 'p12-5-1',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to EMPLOYABILITY:\n"Participating in international student clubs significantly boosts your future employability."',
        options: ['attractiveness to employers', 'unemployment rate', 'physical strength', 'academic tuition'],
        correctAnswer: 'attractiveness to employers',
        explanation: '"Employability" (khả năng được tuyển dụng, độ hấp dẫn với nhà tuyển dụng) đồng nghĩa với "attractiveness to employers".'
      },
      {
        id: 'p12-5-2',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to PROMOTION:\n"His outstanding dedication earned him a rapid promotion to senior director."',
        options: ['demotion', 'advancement', 'elevation', 'step-up'],
        correctAnswer: 'demotion',
        explanation: '"Promotion" (sự thăng chức) trái nghĩa với "demotion" (sự giáng chức).'
      },
      {
        id: 'p12-5-3',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'Employers no longer evaluate candidates merely on static diplomas; they scrutinize a tailored curriculum vitae for demonstrable soft skills.',
        prompt: 'What do employers look for in candidates beyond static diplomas?',
        options: [
          'Demonstrable soft skills and adaptive communication.',
          'The number of expensive cars they own.',
          'Their ability to work eighty hours without sleep.',
          'Blind obedience without questioning.'
        ],
        correctAnswer: 'Demonstrable soft skills and adaptive communication.',
        explanation: 'Đoạn trích nêu rõ: "Employers scrutinize a tailored curriculum vitae for demonstrable soft skills such as emotional intelligence, adaptive communication, and ethical decision-making."'
      },
      {
        id: 'p12-5-4',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Mark the word OPPOSITE in meaning to WORK-LIFE BALANCE:\n"Achieving work-life balance prevents psychological exhaustion."',
        options: ['workaholism and burnout', 'lifestyle equilibrium', 'serenity', 'mental wellness'],
        correctAnswer: 'workaholism and burnout',
        explanation: '"Work-life balance" (cân bằng đời sống - công việc) trái nghĩa với "workaholism and burnout" (chứng nghiện việc kiệt sức).'
      },
      {
        id: 'p12-5-5',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Mark the word CLOSEST in meaning to PROBATION:\n"New software engineers must pass a three-month probation before signing full contracts."',
        options: ['evaluation trial period', 'permanent retirement', 'free vacation', 'legal arrest'],
        correctAnswer: 'evaluation trial period',
        explanation: '"Probation" (thời gian thử việc đánh giá) đồng nghĩa với "evaluation trial period".'
      },
      {
        id: 'p12-5-6',
        type: 'multiple-choice',
        category: 'collocation',
        prompt: 'Candidates should prepare an impressive ______ to showcase their qualifications and volunteer work.',
        options: ['curriculum vitae', 'chore', 'litter', 'footprint'],
        correctAnswer: 'curriculum vitae',
        explanation: '"Curriculum vitae" (CV) là sơ yếu lý lịch ứng tuyển.'
      },
      {
        id: 'p12-5-7',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'In addition to technical expertise, employers place high value on communicative ______.',
        options: ['soft skills', 'curfews', 'antibiotics', 'heatwaves'],
        correctAnswer: 'soft skills',
        explanation: '"Soft skills" là các kỹ năng mềm thiết yếu.'
      }
    ],
    bossQuestions: [
      {
        id: 'b12-5-1',
        question: 'Chọn câu gián tiếp (Reported Speech) đúng: "The interviewer asked: \'Why do you want to join our firm?\'"',
        options: [
          'The interviewer asked me why I wanted to join their firm.',
          'The interviewer asked me why do I want to join their firm.',
          'The interviewer asked me why did I want to join their firm.',
          'The interviewer asked me that why I wanted to join their firm.'
        ],
        correctAnswer: 0,
        damage: 35,
        explanation: 'Câu tường thuật câu hỏi có từ để hỏi: S + asked + (O) + wh-word + S + V (lùi thì: wanted).'
      },
      {
        id: 'b12-5-2',
        question: 'Từ "EMPLOYABILITY" được định nghĩa là:',
        options: [
          'the skills, knowledge, and personal attributes that make a person suitable for paid work',
          'the amount of tax an employee must pay to the treasury',
          'the total distance from home to the workplace',
          'the retirement age determined by civil laws'
        ],
        correctAnswer: 0,
        damage: 30,
        explanation: '"Employability" là khả năng được tuyển dụng dựa trên kỹ năng và phẩm chất phù hợp.'
      },
      {
        id: 'b12-5-3',
        question: 'Chọn cụm từ chỉ người làm việc độc lập tự do:',
        options: ['freelancer', 'probationer', 'apprentice', 'headhunter'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Freelancer" là người làm việc tự do, không phụ thuộc vào một công ty cố định.'
      },
      {
        id: 'b12-5-4',
        question: 'Chọn câu kết tinh thần "Tam Niên Anh Ngữ – Nhất Thống Võ Lâm":',
        options: [
          'Equipped with knowledge, ethics, and English, high schoolers can conquer any future horizon.',
          'Studying language is only for passing tests without any real-world purpose.',
          'Traditional youth should avoid communicating with people from other countries.',
          'Professional success only depends on sheer luck, not hard work.'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Trang bị kiến thức, đạo đức và tiếng Anh, học sinh THPT có thể tự tin chinh phục mọi chân trời tương lai.'
      }
    ]
  }
];
