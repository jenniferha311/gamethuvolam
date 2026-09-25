import { UnitRealm } from '../types/game';

export const UNITS_GRADE_12_PART2: UnitRealm[] = [
  // UNIT 6: ARTIFICIAL INTELLIGENCE
  {
    id: 'g12-u06',
    grade: 12,
    unit: 6,
    title: 'Artificial Intelligence',
    realmName: 'Cơ Quan Thần Trí Cảnh - Trí Tuệ Nhân Tạo',
    guardianName: 'Đặng Trần Hà',
    guardianColor: '#f59e0b',
    storyIntro: 'Tiến nhập Cơ Quan Thần Trí Cảnh, đỉnh cao của trí tuệ nhân tạo (AI), học máy (Machine Learning) và người máy tự hành (Robotics). Thiếu hiệp rèn luyện tâm pháp: Làm chủ công nghệ tối tân mà vẫn giữ vững đạo lý nhân văn.',
    bossName: 'Hắc Ma Cơ Khí Trí Năng',
    bossTitle: 'Đại Hộ Pháp Thuật Toán Vô Cảm & Nổi Loạn Ma Trận',
    bossHp: 135,
    xpReward: 180,
    readingPassage: {
      title: 'The Dawn of Artificial Intelligence: Promise and Ethical Perils',
      topic: 'Trí tuệ nhân tạo: Cơ hội đột phá và thách thức đạo đức kỷ nguyên số',
      fullText: `Artificial intelligence (AI) has progressed with astonishing momentum from a theoretical scientific pursuit into an omnipresent catalyst revolutionizing medicine, manufacturing, autonomous transport, and creative arts. Machine learning algorithms digest colossal datasets, diagnosing oncology scans with superhuman accuracy and optimizing global logistics networks instantaneously.\n\nNevertheless, this technological paradigm shift sparks intense existential debates concerning algorithmic bias, intellectual property copyright, and widespread workforce displacement. If corporations deploy autonomous systems recklessly without ethical guardrails, human autonomy could be severely undermined. Harnessing AI for universal human flourishing necessitates stringent regulatory frameworks and steadfast dedication to human-centric ethics.`,
      keyTakeaway: 'AI mở ra tiềm năng vô hạn cho y tế, công nghiệp nhưng đòi hỏi khung pháp lý và đạo đức nhân văn để không thay thế giá trị con người.',
      vocabularyHighlights: ['artificial intelligence', 'machine learning', 'algorithm', 'autonomous', 'displacement']
    },
    vocabulary: [
      {
        id: 'v12-6-1',
        word: 'artificial intelligence',
        ipa: '/ˌɑːtɪfɪʃl ɪnˈtelɪdʒəns/',
        meaningVi: 'trí tuệ nhân tạo (AI)',
        partOfSpeech: 'noun phrase',
        collocation: 'breakthroughs in artificial intelligence',
        example: 'Artificial intelligence enables computers to simulate human reasoning and problem-solving.',
        synonyms: ['synthetic cognition', 'machine intellect'],
        antonyms: ['natural human cognition']
      },
      {
        id: 'v12-6-2',
        word: 'algorithm',
        ipa: '/ˈælɡərɪðəm/',
        meaningVi: 'thuật toán xử lý dữ liệu',
        partOfSpeech: 'noun',
        collocation: 'search and recommendation algorithm',
        example: 'Recommendation algorithms analyze your browsing history to suggest relevant books.',
        synonyms: ['computational formula', 'processing code'],
        antonyms: ['random chance']
      },
      {
        id: 'v12-6-3',
        word: 'autonomous',
        ipa: '/ɔːˈtɒnəməs/',
        meaningVi: 'tự hành, tự động hoạt động không cần con người điều khiển',
        partOfSpeech: 'adjective',
        collocation: 'autonomous electric vehicles',
        example: 'Autonomous drones can deliver medical supplies to remote mountainous villages.',
        synonyms: ['self-driving', 'unmanned', 'automated'],
        antonyms: ['manually operated', 'human-piloted']
      },
      {
        id: 'v12-6-4',
        word: 'machine learning',
        ipa: '/məˈʃiːn ˈlɜːnɪŋ/',
        meaningVi: 'học máy (nhánh AI giúp máy tính tự cải thiện qua dữ liệu)',
        partOfSpeech: 'noun phrase',
        collocation: 'deep machine learning models',
        example: 'Machine learning algorithms detect fraudulent bank transactions in milliseconds.',
        synonyms: ['statistical learning', 'pattern recognition'],
        antonyms: ['hard-coded rules']
      },
      {
        id: 'v12-6-5',
        word: 'displacement',
        ipa: '/dɪsˈpleɪsmənt/',
        meaningVi: 'sự thay thế, chiếm chỗ (đặc biệt là việc làm bị robot thay)',
        partOfSpeech: 'noun',
        collocation: 'workforce and job displacement',
        example: 'Automation may trigger temporary displacement of assembly line workers.',
        synonyms: ['replacement', 'supplanting', 'substitution'],
        antonyms: ['job retention', 'job creation']
      },
      {
        id: 'v12-6-6',
        word: 'ethics',
        ipa: '/ˈeθɪks/',
        meaningVi: 'đạo đức học, quy chuẩn lương tâm nghề nghiệp',
        partOfSpeech: 'noun',
        collocation: 'AI safety and ethics',
        example: 'Scientists must abide by strict ethics when designing genetic or AI algorithms.',
        synonyms: ['moral philosophy', 'code of conduct'],
        antonyms: ['unscrupulousness', 'immorality']
      },
      {
        id: 'v12-6-7',
        word: 'omnipresent',
        ipa: '/ˌɒmnɪˈpreznt/',
        meaningVi: 'có mặt ở khắp mọi nơi',
        partOfSpeech: 'adjective',
        collocation: 'omnipresent digital surveillance',
        example: 'Smartphones have made internet connectivity virtually omnipresent.',
        synonyms: ['ubiquitous', 'pervasive', 'universal'],
        antonyms: ['rare', 'scarce', 'absent']
      },
      {
        id: 'v12-6-8',
        word: 'simulate',
        ipa: '/ˈsɪmjuleɪt/',
        meaningVi: 'mô phỏng, giả lập môi trường thực',
        partOfSpeech: 'verb',
        collocation: 'simulate real-world flight conditions',
        example: 'Computer models simulate complex typhoon trajectories with high fidelity.',
        synonyms: ['replicate', 'imitate', 'model'],
        antonyms: ['experience authentically']
      },
      {
        id: 'v12-6-9',
        word: 'bias',
        ipa: '/ˈbaɪəs/',
        meaningVi: 'định kiến, sự thiên vị sai lệch trong dữ liệu',
        partOfSpeech: 'noun',
        collocation: 'eliminate algorithmic bias',
        example: 'If trained on flawed historical data, AI hiring tools can perpetuate gender bias.',
        synonyms: ['prejudice', 'skew', 'favoritism'],
        antonyms: ['neutrality', 'impartiality', 'equity']
      },
      {
        id: 'v12-6-10',
        word: 'breakthrough',
        ipa: '/ˈbreɪkθruː/',
        meaningVi: 'bước đột phá vĩ đại',
        partOfSpeech: 'noun',
        collocation: 'revolutionary scientific breakthrough',
        example: 'The discovery of neural network deep learning was a monumental breakthrough.',
        synonyms: ['quantum leap', 'triumph', 'milestone'],
        antonyms: ['setback', 'stalemate']
      }
    ],
    practice: [
      {
        id: 'p12-6-1',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Self-driving cars are equipped with sensors and ______ software to navigate traffic without human drivers.',
        options: ['autonomous', 'clumsy', 'hostile', 'blind'],
        correctAnswer: 'autonomous',
        explanation: '"Autonomous" là tự hành, tự động vận hành không cần người lái.'
      },
      {
        id: 'p12-6-2',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Tìm từ ĐỒNG NGHĨA với "OMNIPRESENT": "AI assistance has become omnipresent in modern smartphones."',
        options: ['ubiquitous', 'extinct', 'invisible', 'occasional'],
        correctAnswer: 'ubiquitous',
        explanation: '"Omnipresent" (có mặt khắp nơi) đồng nghĩa với "ubiquitous".'
      },
      {
        id: 'p12-6-3',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Tìm từ TRÁI NGHĨA với "BIAS": "Algorithmic auditors work to ensure fairness and eliminate bias."',
        options: ['impartiality and neutrality', 'prejudice', 'inequality', 'favoritism'],
        correctAnswer: 'impartiality and neutrality',
        explanation: '"Bias" (định kiến, thiên vị) trái nghĩa với "impartiality and neutrality" (công tâm, trung lập).'
      },
      {
        id: 'p12-6-4',
        type: 'collocation',
        category: 'collocation',
        prompt: 'Engineers use supercomputers to ______ aerodynamic airflow over high-speed train designs.',
        options: ['simulate', 'forbid', 'forget', 'demolish'],
        correctAnswer: 'simulate',
        explanation: '"Simulate" là mô phỏng, giả lập dòng khí động học trên máy tính.'
      },
      {
        id: 'p12-6-5',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Rapid factory automation raises widespread anxiety about workforce ______.',
        options: ['displacement', 'celebration', 'promotion', 'holiday'],
        correctAnswer: 'displacement',
        explanation: '"Workforce displacement" là tình trạng người lao động bị máy móc thay thế.'
      },
      {
        id: 'p12-6-6',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'The creation of large language models is heralded as a historic technological ______.',
        options: ['breakthrough', 'accident', 'punishment', 'handicap'],
        correctAnswer: 'breakthrough',
        explanation: '"Breakthrough" là bước đột phá công nghệ chấn động.'
      },
      {
        id: 'p12-6-7',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'If corporations deploy autonomous systems recklessly without ethical guardrails, human autonomy could be severely undermined.',
        prompt: 'Điều gì có thể xảy ra nếu các hệ thống tự hành được triển khai mà không có rào chắn đạo đức?',
        options: [
          'Sự tự chủ và quyền lợi của con người có thể bị tổn hại nghiêm trọng',
          'Mọi căn bệnh trên thế giới đều biến mất ngay lập tức',
          'Mọi người đều trở thành triệu phú mà không cần làm việc',
          'Trí tuệ nhân tạo sẽ tự động tắt nguồn vĩnh viễn'
        ],
        correctAnswer: 'Sự tự chủ và quyền lợi của con người có thể bị tổn hại nghiêm trọng',
        explanation: 'Đoạn trích cảnh báo: "human autonomy could be severely undermined" nếu thiếu "ethical guardrails".'
      }
    ],
    bossQuestions: [
      {
        id: 'b12-6-1',
        question: 'Mối đe dọa đạo đức lớn nhất của "ALGORITHMIC BIAS" là gì?',
        options: [
          'Hệ thống AI vô tình kế thừa và khuếch đại các định kiến phân biệt đối xử từ dữ liệu cũ',
          'Máy tính bị nóng khi chạy lâu',
          'Tốc độ internet bị chậm đi',
          'Máy tính hết pin nhanh'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Định kiến thuật toán khiến AI đưa ra các quyết định thiên vị bất công nếu học từ dữ liệu sai lệch.'
      },
      {
        id: 'b12-6-2',
        question: 'Tìm từ ĐỒNG NGHĨA CẤP CAO với "HUMAN-CENTRIC ETHICAL AI":',
        options: ['responsible artificial intelligence aligned with human values', 'cold automated subjugation', 'unregulated hacking', 'unmonitored code generation'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Responsible AI aligned with human values" là AI có trách nhiệm phục vụ hạnh phúc nhân loại.'
      },
      {
        id: 'b12-6-3',
        question: 'Khái niệm "MACHINE LEARNING" khác biệt với lập trình truyền thống ở điểm nào?',
        options: [
          'Máy tính tự tìm ra quy luật và cải thiện độ chính xác từ dữ liệu mà không cần quy tắc viết cứng',
          'Máy tính không cần điện vẫn chạy',
          'Người dùng phải gõ từng câu trả lời thủ công bằng tay',
          'Không sử dụng bất kỳ dòng lệnh nào'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Machine learning học từ dữ liệu thực tế để tự cải tiến dự đoán.'
      },
      {
        id: 'b12-6-4',
        question: 'Từ TRÁI NGHĨA với "AUTONOMOUS VEHICLE":',
        options: ['manually steered conveyance', 'self-driving pod', 'robotic taxi', 'autopilot cruiser'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Autonomous" (tự hành) trái nghĩa với "manually steered" (lái bằng tay người).'
      }
    ]
  },

  // UNIT 7: THE WORLD OF MASS MEDIA
  {
    id: 'g12-u07',
    grade: 12,
    unit: 7,
    title: 'The World of Mass Media',
    realmName: 'Vạn Thanh Cảnh - Truyền Thông Đại Chúng',
    guardianName: 'Liên Phạm',
    guardianColor: '#2563eb',
    storyIntro: 'Tiến nhập Vạn Thanh Cảnh, nơi âm thanh và tin tức từ bốn phương hội tụ. Thiếu hiệp phải rèn luyện nhãn lực phân biệt tin giả (fake news), truyền thông thao túng (media manipulation) và tiếp nhận thông tin có tư duy phản biện.',
    bossName: 'Hắc Ma Tin Giả & Thao Túng',
    bossTitle: 'Đại Hộ Pháp Độc Thoại & Lan Truyền Ảo Giác',
    bossHp: 135,
    xpReward: 180,
    readingPassage: {
      title: 'Media Literacy in the Post-Truth Era: Dissecting Disinformation',
      topic: 'Năng lực thông hiểu truyền thông (Media Literacy) và chống tin giả',
      fullText: `The relentless proliferation of social media platforms, 24-hour news networks, and digital streaming services has radically democratized information dissemination. Concurrently, it has ushered in an alarming epidemic of sensationalism, clickbait headlines, and deliberate disinformation campaigns.\n\nSophisticated deepfake videos and echo chambers distort public perception, polarizing societies on critical public health and political matters. Navigating this labyrinthine media ecosystem requires citizens to cultivate robust media literacy: cross-referencing credible journalistic sources, interrogating source motives, identifying confirmation bias, and verifying provenance before impulsively sharing content.`,
      keyTakeaway: 'Thời đại truyền thông số đòi hỏi năng lực phản biện, kiểm chứng nguồn tin và tỉnh táo trước mồi nhử câu view hay video giả mạo deepfake.',
      vocabularyHighlights: ['mass media', 'media literacy', 'disinformation', 'sensationalism', 'verify']
    },
    vocabulary: [
      {
        id: 'v12-7-1',
        word: 'mass media',
        ipa: '/ˌmæs ˈmiːdiə/',
        meaningVi: 'phương tiện truyền thông đại chúng (báo chí, TV, radio, internet)',
        partOfSpeech: 'noun phrase',
        collocation: 'influence of mass media on public opinion',
        example: 'Mass media plays an indispensable role in scrutinizing government policies.',
        synonyms: ['broadcasting and journalism', 'the press'],
        antonyms: ['private correspondence']
      },
      {
        id: 'v12-7-2',
        word: 'media literacy',
        ipa: '/ˈmiːdiə ˈlɪtərəsi/',
        meaningVi: 'năng lực thông hiểu và phản biện truyền thông',
        partOfSpeech: 'noun phrase',
        collocation: 'teach media literacy in high schools',
        example: 'Media literacy empowers youth to distinguish factual journalism from propaganda.',
        synonyms: ['critical media consumption', 'news discernment'],
        antonyms: ['media credulity', 'gullibility']
      },
      {
        id: 'v12-7-3',
        word: 'disinformation',
        ipa: '/ˌdɪsˌɪnfəˈmeɪʃn/',
        meaningVi: 'thông tin sai lệch có chủ đích lừa gạt độc hại',
        partOfSpeech: 'noun',
        collocation: 'combat malicious disinformation',
        example: 'State agencies issued stern warnings against fabricated disinformation regarding vaccines.',
        synonyms: ['fake news', 'deliberate falsehood', 'propaganda'],
        antonyms: ['verified truth', 'factual reporting']
      },
      {
        id: 'v12-7-4',
        word: 'sensationalism',
        ipa: '/senˈseɪʃənəlɪzəm/',
        meaningVi: 'thói giật gân, câu khách rẻ tiền',
        partOfSpeech: 'noun',
        collocation: 'tabloid sensationalism',
        example: 'Tabloid newspapers often resort to sensationalism to bolster advertising revenue.',
        synonyms: ['yellow journalism', 'dramatization', 'clickbaiting'],
        antonyms: ['sober journalism', 'factual accuracy']
      },
      {
        id: 'v12-7-5',
        word: 'verify',
        ipa: '/ˈverɪfaɪ/',
        meaningVi: 'kiểm chứng, xác minh độ xác thực',
        partOfSpeech: 'verb',
        collocation: 'verify source credibility',
        example: 'Always verify viral claims with official statements before sharing them on Facebook.',
        synonyms: ['authenticate', 'corroborate', 'substantiate'],
        antonyms: ['fabricate', 'concoct']
      },
      {
        id: 'v12-7-6',
        word: 'clickbait',
        ipa: '/ˈklɪkbeɪt/',
        meaningVi: 'mồi nhử nhấp chuột, tiêu đề giật gân đánh lừa',
        partOfSpeech: 'noun',
        collocation: 'deceptive clickbait headlines',
        example: 'He felt duped after opening an article with a sensational clickbait title.',
        synonyms: ['teaser headline', 'link bait'],
        antonyms: ['informative headline']
      },
      {
        id: 'v12-7-7',
        word: 'echo chamber',
        ipa: '/ˈekəʊ ˌtʃeɪmbə(r)/',
        meaningVi: 'phòng dội âm (môi trường mạng chỉ nghe quan điểm giống mình)',
        partOfSpeech: 'noun phrase',
        collocation: 'trapped in a digital echo chamber',
        example: 'Social media algorithms risk confining users inside partisan echo chambers.',
        synonyms: ['filter bubble', 'insular network'],
        antonyms: ['diverse forum', 'open public square']
      },
      {
        id: 'v12-7-8',
        word: 'credible',
        ipa: '/ˈkredəbl/',
        meaningVi: 'đáng tin cậy, có cơ sở xác đáng',
        partOfSpeech: 'adjective',
        collocation: 'credible investigative reporting',
        example: 'Rely on credible news outlets with established editorial boards.',
        synonyms: ['trustworthy', 'reliable', 'authoritative'],
        antonyms: ['unreliable', 'dubious', 'shady']
      },
      {
        id: 'v12-7-9',
        word: 'broadcast',
        ipa: '/ˈbrɔːdkɑːst/',
        meaningVi: 'phát sóng truyền hình / truyền thanh',
        partOfSpeech: 'verb / noun',
        collocation: 'live television broadcast',
        example: 'The presidential debate was broadcast to hundreds of millions worldwide.',
        synonyms: ['transmit', 'telecast', 'air'],
        antonyms: ['censor', 'suppress']
      },
      {
        id: 'v12-7-10',
        word: 'deepfake',
        ipa: '/ˈdiːpfeɪk/',
        meaningVi: 'video / âm thanh giả mạo tinh vi do AI tạo ra',
        partOfSpeech: 'noun',
        collocation: 'detect AI-generated deepfakes',
        example: 'Cybersecurity analysts developed algorithms to flag deepfake speech manipulation.',
        synonyms: ['synthetic impersonation', 'AI forgery'],
        antonyms: ['authentic recording']
      }
    ],
    practice: [
      {
        id: 'p12-7-1',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Critical thinkers develop strong ______ to differentiate authentic journalism from fabricated rumors.',
        options: ['media literacy', 'athletic stamina', 'stage fright', 'color blindness'],
        correctAnswer: 'media literacy',
        explanation: '"Media literacy" là năng lực thấu hiểu và phân tích truyền thông.'
      },
      {
        id: 'p12-7-2',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Tìm từ ĐỒNG NGHĨA với "VERIFY": "Fact-checkers verify all statistical claims before publishing."',
        options: ['authenticate and confirm', 'ignore', 'fabricate', 'scramble'],
        correctAnswer: 'authenticate and confirm',
        explanation: '"Verify" (xác minh) đồng nghĩa với "authenticate and confirm".'
      },
      {
        id: 'p12-7-3',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Tìm từ TRÁI NGHĨA với "CREDIBLE": "The gossip blog quoted an entirely credible witness."',
        options: ['dubious and untrustworthy', 'authoritative', 'reliable', 'factual'],
        correctAnswer: 'dubious and untrustworthy',
        explanation: '"Credible" (đáng tin cậy) trái nghĩa với "dubious and untrustworthy" (nghi vấn, không tin được).'
      },
      {
        id: 'p12-7-4',
        type: 'collocation',
        category: 'collocation',
        prompt: 'Headlines promising miraculous weight loss in two days are obvious ______.',
        options: ['clickbait', 'literature', 'encyclopedia', 'documentary'],
        correctAnswer: 'clickbait',
        explanation: '"Clickbait" là mồi nhử tiêu đề giật gân lừa người xem bấm vào.'
      },
      {
        id: 'p12-7-5',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'When people only converse with like-minded peers online, they become trapped in an ______.',
        options: ['echo chamber', 'air balloon', 'open square', 'aquarium'],
        correctAnswer: 'echo chamber',
        explanation: '"Echo chamber" là phòng dội âm tư tưởng nơi người ta chỉ nghe tiếng nói của chính mình.'
      },
      {
        id: 'p12-7-6',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Advances in AI now allow bad actors to produce convincing ______ videos impersonating famous leaders.',
        options: ['deepfake', 'cardboard', 'oil painting', 'wooden statue'],
        correctAnswer: 'deepfake',
        explanation: '"Deepfake" là công nghệ làm giả video/giọng nói bằng AI.'
      },
      {
        id: 'p12-7-7',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'Navigating this labyrinthine media ecosystem requires citizens to cultivate robust media literacy: cross-referencing credible journalistic sources, interrogating source motives, identifying confirmation bias, and verifying provenance before impulsively sharing content.',
        prompt: 'Hành động nào sau đây là biểu hiện của người có năng lực truyền thông vững vàng?',
        options: [
          'Đối chiếu nhiều nguồn báo chí uy tín và xác minh nguồn gốc trước khi chia sẻ bài viết',
          'Vừa thấy tiêu đề giật gân là bấm nút chia sẻ ngay cho bạn bè',
          'Tuyệt đối tin tưởng mọi video clip xuất hiện trên mạng xã hội',
          'Chỉ đọc tin từ các trang blog vô danh'
        ],
        correctAnswer: 'Đối chiếu nhiều nguồn báo chí uy tín và xác minh nguồn gốc trước khi chia sẻ bài viết',
        explanation: 'Đoạn trích nêu rõ các bước: "cross-referencing credible journalistic sources... and verifying provenance before impulsively sharing content".'
      }
    ],
    bossQuestions: [
      {
        id: 'b12-7-1',
        question: 'Hiểm họa lớn nhất của việc phát tán thông tin độc hại (Disinformation) trong xã hội là gì?',
        options: [
          'Xói mòn lòng tin xã hội, gây hoang mang dư luận và phân cực chia rẽ cộng đồng',
          'Làm hỏng màn hình điện thoại',
          'Giúp người dân hiểu nhau sâu sắc hơn',
          'Làm giá vé xem phim tăng lên'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Tin giả làm xói mòn lòng tin thể chế, hoang mang y tế và chia rẽ xã hội.'
      },
      {
        id: 'b12-7-2',
        question: 'Tìm từ ĐỒNG NGHĨA CẤP CAO với "SENSATIONALIZED JOURNALISM":',
        options: ['tabloid journalism driven by prurient clickbait', 'rigorous peer-reviewed inquiry', 'impartial civic reportage', 'sober investigative analysis'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Tabloid journalism driven by prurient clickbait" là báo chí lá cải giật gân trục lợi.'
      },
      {
        id: 'b12-7-3',
        question: 'Khái niệm "CONFIRMATION BIAS" (Thiên kiến xác nhận) giải thích hiện tượng gì?',
        options: [
          'Con người có xu hướng chỉ tin và tìm kiếm thông tin củng cố định kiến có sẵn của mình',
          'Luôn nghi ngờ mọi thứ một cách khoa học',
          'Đọc sách giáo khoa mỗi ngày',
          'Kiểm tra lại bài tập trước khi nộp'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Thiên kiến xác nhận là xu hướng tâm lý chỉ thích nghe những gì hợp với định kiến bản thân.'
      },
      {
        id: 'b12-7-4',
        question: 'Từ TRÁI NGHĨA với "VERIFY":',
        options: ['concoct and fabricate', 'authenticate', 'validate', 'substantiate'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Verify" (xác minh sự thật) trái nghĩa với bịa đặt thêu dệt (concoct and fabricate).'
      }
    ]
  },

  // UNIT 8: WILDLIFE CONSERVATION
  {
    id: 'g12-u08',
    grade: 12,
    unit: 8,
    title: 'Wildlife Conservation',
    realmName: 'Thần Thú Cảnh - Bảo Tồn Dã Sinh',
    guardianName: 'Phương Tú',
    guardianColor: '#10b981',
    storyIntro: 'Tiến nhập Thần Thú Cảnh, chốn sơn cùng thủy tận che chở các loài linh thú như sao la, vượn đen má trắng, hổ Đông Dương và tê giác. Thiếu hiệp vung gươm dẹp tan nạn săn trộm (poaching), giữ gìn sinh quyển non sông.',
    bossName: 'Hắc Ma Săn Trộm & Buôn Lậu',
    bossTitle: 'Đại Hộ Pháp Bẫy Thú & Triệt Hạ Linh Tộc',
    bossHp: 140,
    xpReward: 185,
    readingPassage: {
      title: 'Shielding the Vanishing: Fighting Wildlife Trafficking in Southeast Asia',
      topic: 'Bảo tồn động vật hoang dã nguy cấp và bài trừ nạn săn trộm',
      fullText: `Southeast Asia represents one of the planet's premier biospheres, sheltering enigmatic species such as the elusive Saola—termed the 'Asian Unicorn'—alongside pangolins, Indochinese tigers, and Asian elephants. Tragically, rampant commercial poaching driven by lucrative black market trafficking in traditional medicine and exotic pets has devastated wild populations.\n\nCombating this ecological hemorrhage requires multifaceted intervention: deploying elite anti-poaching patrol rangers equipped with GPS drones, prosecuting illicit smuggling cartels with severe criminal penalties, and spearheading public campaigns to dismantle consumer demand for rhino horn, ivory, and pangolin scales. Protecting wilderness is an ethical imperative of civilization.`,
      keyTakeaway: 'Nạn săn trộm và buôn lậu đe dọa tuyệt chủng các loài linh thú quý hiếm; giải pháp nằm ở tuần tra chống săn trộm, thực thi pháp luật nghiêm minh và chấm dứt nhu cầu tiêu thụ.',
      vocabularyHighlights: ['wildlife conservation', 'poaching', 'endangered species', 'trafficking', 'sanctuary']
    },
    vocabulary: [
      {
        id: 'v12-8-1',
        word: 'wildlife conservation',
        ipa: '/ˈwaɪldlaɪf ˌkɒnsəˈveɪʃn/',
        meaningVi: 'sự bảo tồn động vật hoang dã',
        partOfSpeech: 'noun phrase',
        collocation: 'champion wildlife conservation',
        example: 'Wildlife conservation protects endangered habitats from commercial encroachment.',
        synonyms: ['fauna preservation', 'biodiversity protection'],
        antonyms: ['wildlife poaching', 'habitat liquidation']
      },
      {
        id: 'v12-8-2',
        word: 'poaching',
        ipa: '/ˈpəʊtʃɪŋ/',
        meaningVi: 'nạn săn trộm động vật trái phép',
        partOfSpeech: 'noun',
        collocation: 'crackdown on illegal poaching',
        example: 'Poaching has driven the Javan rhinoceros in Viet Nam to tragic extinction.',
        synonyms: ['illegal hunting', 'illicit game harvesting'],
        antonyms: ['authorized game management']
      },
      {
        id: 'v12-8-3',
        word: 'endangered species',
        ipa: '/ɪnˈdeɪndʒəd ˈspiːʃiːz/',
        meaningVi: 'loài động thực vật có nguy cơ tuyệt chủng',
        partOfSpeech: 'noun phrase',
        collocation: 'red list of endangered species',
        example: 'The Saola is one of the world’s most critically endangered species.',
        synonyms: ['threatened wildlife', 'at-risk organisms'],
        antonyms: ['abundant species', 'flourishing wildlife']
      },
      {
        id: 'v12-8-4',
        word: 'trafficking',
        ipa: '/ˈtræfɪkɪŋ/',
        meaningVi: 'nạn buôn lậu bất hợp pháp xuyên biên giới',
        partOfSpeech: 'noun',
        collocation: 'illegal wildlife trafficking',
        example: 'International customs authorities intercepted a shipping container of trafficked pangolin scales.',
        synonyms: ['smuggling', 'illicit contraband trade'],
        antonyms: ['legitimate fair trade']
      },
      {
        id: 'v12-8-5',
        word: 'sanctuary',
        ipa: '/ˈsæŋktʃuəri/',
        meaningVi: 'khu bảo tồn cứu hộ an toàn cho động vật',
        partOfSpeech: 'noun',
        collocation: 'wildlife rescue sanctuary',
        example: 'Rescued moon bears roam freely across the green hills of Tam Dao Bear Sanctuary.',
        synonyms: ['refuge', 'haven', 'nature reserve'],
        antonyms: ['hunting ground', 'abattoir']
      },
      {
        id: 'v12-8-6',
        word: 'ivory',
        ipa: '/ˈaɪvəri/',
        meaningVi: 'ngà voi',
        partOfSpeech: 'noun',
        collocation: 'ban international ivory trade',
        example: 'A total global ban on elephant ivory trade was enacted to stop slaughtering herds.',
        synonyms: ['elephant tusk substance'],
        antonyms: ['synthetic substitute']
      },
      {
        id: 'v12-8-7',
        word: 'elusive',
        ipa: '/ɪˈluːsɪv/',
        meaningVi: 'quý hiếm, khó nắm bắt, thoắt ẩn thoắt hiện',
        partOfSpeech: 'adjective',
        collocation: 'the elusive mountain leopard',
        example: 'Camera traps captured a fleeting photograph of the elusive Saola in the Annamite Range.',
        synonyms: ['evasive', 'hard-to-find', 'rarely seen'],
        antonyms: ['ubiquitous', 'commonplace']
      },
      {
        id: 'v12-8-8',
        word: 'ranger',
        ipa: '/ˈreɪndʒə(r)/',
        meaningVi: 'kiểm lâm viên, người tuần tra bảo vệ rừng',
        partOfSpeech: 'noun',
        collocation: 'forest ranger patrol',
        example: 'Brave forest rangers disarmed thousands of wire snares buried by poachers.',
        synonyms: ['game warden', 'conservation scout'],
        antonyms: ['poacher', 'trapper']
      },
      {
        id: 'v12-8-9',
        word: 'snare',
        ipa: '/sneə(r)/',
        meaningVi: 'bẫy dây thắt độc ác giăng bắt động vật',
        partOfSpeech: 'noun / verb',
        collocation: 'dismantle illegal wire snares',
        example: 'Wire snares indiscriminately mutilate and kill any creature stepping into them.',
        synonyms: ['noose trap', 'lethal gin'],
        antonyms: ['free release']
      },
      {
        id: 'v12-8-10',
        word: 'rehabilitate',
        ipa: '/ˌriːəˈbɪlɪteɪt/',
        meaningVi: 'phục hồi bản năng tự nhiên trước khi thả về rừng',
        partOfSpeech: 'verb',
        collocation: 'rehabilitate injured birds of prey',
        example: 'Veterinarians rehabilitate orphaned primates so they can safely reintegrate into the wild.',
        synonyms: ['restore to health', 'recondition', 'reintegrate'],
        antonyms: ['injure', 'keep captive permanently']
      }
    ],
    practice: [
      {
        id: 'p12-8-1',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'The Saola and the white-headed langur are classified as critically ______ species in Viet Nam.',
        options: ['endangered', 'dangerous', 'industrial', 'synthetic'],
        correctAnswer: 'endangered',
        explanation: '"Critically endangered" là có nguy cơ tuyệt chủng cực kỳ nghiêm trọng.'
      },
      {
        id: 'p12-8-2',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Tìm từ ĐỒNG NGHĨA với "SANCTUARY": "Rescued wild bears find peace inside the national sanctuary."',
        options: ['refuge and haven', 'slaughterhouse', 'trap', 'iron cage'],
        correctAnswer: 'refuge and haven',
        explanation: '"Sanctuary" (nơi trú ẩn an toàn, khu bảo tồn) đồng nghĩa với "refuge and haven".'
      },
      {
        id: 'p12-8-3',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Tìm từ TRÁI NGHĨA với "POACHING": "Illegal poaching threatens wild tigers with extinction."',
        options: ['legitimate wildlife protection', 'illegal trapping', 'smuggling', 'game killing'],
        correctAnswer: 'legitimate wildlife protection',
        explanation: '"Poaching" (săn trộm bất hợp pháp) trái nghĩa với "legitimate wildlife protection" (bảo vệ động vật hợp pháp).'
      },
      {
        id: 'p12-8-4',
        type: 'collocation',
        category: 'collocation',
        prompt: 'Dedicated forest ______ patrol the dense jungles day and night to dismantle poachers’ wire snares.',
        options: ['rangers', 'pirates', 'tourists', 'smugglers'],
        correctAnswer: 'rangers',
        explanation: '"Forest rangers" là các chiến sĩ kiểm lâm.'
      },
      {
        id: 'p12-8-5',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Authorities seized 500 kilograms of smuggled elephant ______ concealed inside timber logs.',
        options: ['ivory', 'rubber', 'cotton', 'plastic'],
        correctAnswer: 'ivory',
        explanation: '"Elephant ivory" là ngà voi.'
      },
      {
        id: 'p12-8-6',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Before being returned to the wild, rescued pangolins are nursed and ______ at the rehabilitation center.',
        options: ['rehabilitated', 'harvested', 'imprisoned', 'discarded'],
        correctAnswer: 'rehabilitated',
        explanation: '"Rehabilitated" là được điều trị và phục hồi sức khỏe, tập tính tự nhiên.'
      },
      {
        id: 'p12-8-7',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'Combating this ecological hemorrhage requires multifaceted intervention: deploying elite anti-poaching patrol rangers equipped with GPS drones, prosecuting illicit smuggling cartels with severe criminal penalties, and spearheading public campaigns to dismantle consumer demand.',
        prompt: 'Chiến lược toàn diện ngăn chặn triệt để nạn tận diệt thú rừng bao gồm những mũi giáp công nào?',
        options: [
          'Tuần tra công nghệ cao gỡ bẫy, trừng phạt nghiêm khắc đường dây buôn lậu và triệt tiêu nhu cầu tiêu thụ',
          'Khuyến khích người dân săn thú đem về nuôi làm cảnh trong nhà',
          'Mở cửa cho các nhà hàng buôn bán thịt thú rừng công khai',
          'Cắt giảm toàn bộ ngân sách dành cho lực lượng kiểm lâm bảo vệ rừng'
        ],
        correctAnswer: 'Tuần tra công nghệ cao gỡ bẫy, trừng phạt nghiêm khắc đường dây buôn lậu và triệt tiêu nhu cầu tiêu thụ',
        explanation: 'Đoạn trích nêu rõ ba mũi nhọn: "deploying elite patrol rangers... prosecuting smuggling cartels... and dismantling consumer demand".'
      }
    ],
    bossQuestions: [
      {
        id: 'b12-8-1',
        question: 'Tại sao việc tiêu thụ sừng tê giác và vảy tê tê lại là hành vi sai trái và thiếu hiểu biết khoa học?',
        options: [
          'Vì sừng tê giác chỉ cấu tạo từ chất sừng keratin như móng tay người, không có công dụng chữa bách bệnh',
          'Vì sừng tê giác là vàng ròng có thể đúc thành tiền',
          'Vì tê giác là loài vật gây hại cho Trái Đất',
          'Vì săn tê giác giúp rừng rậm có thêm oxy'
        ],
        correctAnswer: 0,
        damage: 30,
        explanation: 'Khoa học chứng minh sừng tê giác chỉ gồm keratin như móng tay; niềm tin chữa bệnh là hủ tục hủy hoại thiên nhiên.'
      },
      {
        id: 'b12-8-2',
        question: 'Tìm từ ĐỒNG NGHĨA CẤP CAO với "DISMANTLE WIRE SNARES":',
        options: ['deactivate indiscriminate lethal traps', 'set up more poacher nets', 'leave landmines', 'catch songbirds'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Deactivate indiscriminate lethal traps" là vô hiệu hóa các loại bẫy chết chóc tàn sát bừa bãi.'
      },
      {
        id: 'b12-8-3',
        question: 'Loài thú quý hiếm nào được phát hiện tại dãy Trường Sơn năm 1992 và được ví là "Kỳ lân Châu Á"?',
        options: ['Sao la (Pseudoryx nghetinhensis)', 'Gấu trúc khổng lồ', 'Hổ Siberia', 'Báo hoa mai tuyết'],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Sao la được phát hiện tại Vườn quốc gia Vũ Quang năm 1992, được mệnh danh là Asian Unicorn.'
      },
      {
        id: 'b12-8-4',
        question: 'Từ TRÁI NGHĨA với "ELUSIVE SPECIES":',
        options: ['ubiquitous and easily sighted fauna', 'rare mysterious creature', 'evasive wild animal', 'hidden beast'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Elusive" (thoắt ẩn thoắt hiện, hiếm thấy) trái nghĩa với "ubiquitous and easily sighted" (phổ biến khắp nơi).'
      }
    ]
  },

  // UNIT 9: CAREER PATHS
  {
    id: 'g12-u09',
    grade: 12,
    unit: 9,
    title: 'Career Paths',
    realmName: 'Thành Nghiệp Cảnh - Vạn Dặm Công Danh',
    guardianName: 'Đặng Trần Hà',
    guardianColor: '#f59e0b',
    storyIntro: 'Tiến nhập Thành Nghiệp Cảnh, ải thử thách áp chót trước ngày đại đăng khoa. Thiếu hiệp trau dồi kỹ năng phỏng vấn, viết sơ yếu lý lịch (CV), xây dựng mạng lưới quan hệ chuyên môn và hoạch định lộ trình sự nghiệp vững chắc.',
    bossName: 'Hắc Ma Thất Nghiệp & Trì Trệ',
    bossTitle: 'Đại Hộ Pháp Nỗi Sợ Phỏng Vấn & Thiếu Kỹ Năng Mềm',
    bossHp: 140,
    xpReward: 190,
    readingPassage: {
      title: 'Crafting Dynamic Career Trajectories in the Knowledge Economy',
      topic: 'Xây dựng lộ trình sự nghiệp trong nền kinh tế tri thức số',
      fullText: `The contemporary global labor market has dramatically evolved from static, lifetime employment models into fluid, dynamic career ecosystems. Rather than following rigid hierarchical career ladders, modern professionals curate adaptable career lattices, embracing lateral movements, continuous upskilling, and entrepreneurial ventures.\n\nEmployers increasingly prioritize hybrid skill matrices: robust technical proficiencies combined with high emotional quotient (EQ), creative problem-solving, and cross-cultural adaptability. Successfully navigating this landscape requires constructing a compelling professional portfolio, cultivating a resonant personal brand on LinkedIn, and embodying a growth mindset committed to perpetual reinvention.`,
      keyTakeaway: 'Thị trường lao động hiện đại coi trọng sự linh hoạt, không ngừng nâng cấp kỹ năng (upskilling) và kết hợp chuyên môn với kỹ năng mềm.',
      vocabularyHighlights: ['career path', 'upskilling', 'resume', 'entrepreneurship', 'growth mindset']
    },
    vocabulary: [
      {
        id: 'v12-9-1',
        word: 'career path',
        ipa: '/kəˈrɪə pɑːθ/',
        meaningVi: 'lộ trình sự nghiệp, đường hướng phát triển nghề nghiệp',
        partOfSpeech: 'noun phrase',
        collocation: 'map out a strategic career path',
        example: 'Mentorship helps university seniors map out a lucrative career path in tech.',
        synonyms: ['occupational trajectory', 'professional trajectory'],
        antonyms: ['dead-end job']
      },
      {
        id: 'v12-9-2',
        word: 'upskilling',
        ipa: '/ˌʌpˈskɪlɪŋ/',
        meaningVi: 'nâng cao tay nghề, học thêm kỹ năng mới cho công việc',
        partOfSpeech: 'noun',
        collocation: 'continuous professional upskilling',
        example: 'Upskilling in cloud computing enabled the software engineer to secure a promotion.',
        synonyms: ['skill enhancement', 'retraining', 'professional development'],
        antonyms: ['skill obsolescence', 'stagnation']
      },
      {
        id: 'v12-9-3',
        word: 'resume',
        ipa: '/ˈrezjumeɪ/',
        meaningVi: 'sơ yếu lý lịch, hồ sơ xin việc (CV)',
        partOfSpeech: 'noun',
        collocation: 'tailor your resume for job openings',
        example: 'A polished resume highlights tangible project achievements and leadership roles.',
        synonyms: ['curriculum vitae (CV)', 'professional summary'],
        antonyms: ['unstructured notes']
      },
      {
        id: 'v12-9-4',
        word: 'entrepreneurship',
        ipa: '/ˌɒntrəprəˈnɜːʃɪp/',
        meaningVi: 'tinh thần khởi nghiệp, năng lực lập nghiệp',
        partOfSpeech: 'noun',
        collocation: 'encourage youthful entrepreneurship',
        example: 'Viet Nam has become a vibrant hub for tech entrepreneurship and startup incubators.',
        synonyms: ['business venture', 'enterprise founding'],
        antonyms: ['passive civil employment']
      },
      {
        id: 'v12-9-5',
        word: 'adaptability',
        ipa: '/əˌdæptəˈbɪləti/',
        meaningVi: 'khả năng thích ứng linh hoạt trước biến động',
        partOfSpeech: 'noun',
        collocation: 'high psychological adaptability',
        example: 'Adaptability is the most critical survival trait when companies restructure suddenly.',
        synonyms: ['flexibility', 'versatility', 'resilience'],
        antonyms: ['rigidity', 'stubbornness', 'inflexibility']
      },
      {
        id: 'v12-9-6',
        word: 'growth mindset',
        ipa: '/ˈɡrəʊθ ˈmaɪndset/',
        meaningVi: 'tư duy phát triển (tin rằng năng lực có thể rèn luyện)',
        partOfSpeech: 'noun phrase',
        collocation: 'cultivate a growth mindset',
        example: 'Individuals with a growth mindset view criticism as constructive fuel for improvement.',
        synonyms: ['incremental intelligence mindset'],
        antonyms: ['fixed mindset', 'fatalistic outlook']
      },
      {
        id: 'v12-9-7',
        word: 'interview',
        ipa: '/ˈɪntəvjuː/',
        meaningVi: 'cuộc phỏng vấn tuyển dụng',
        partOfSpeech: 'noun / verb',
        collocation: 'ace the behavioral job interview',
        example: 'Preparing answers using the STAR method helps you excel during a job interview.',
        synonyms: ['candidate screening', 'hiring assessment'],
        antonyms: ['unexamined hiring']
      },
      {
        id: 'v12-9-8',
        word: 'probation',
        ipa: '/prəˈbeɪʃn/',
        meaningVi: 'thời gian thử việc trước khi ký hợp đồng chính thức',
        partOfSpeech: 'noun',
        collocation: 'complete a two-month probation period',
        example: 'During probation, your work ethic and cultural fit are evaluated closely.',
        synonyms: ['trial period', 'test assignment'],
        antonyms: ['permanent tenure']
      },
      {
        id: 'v12-9-9',
        word: 'remuneration',
        ipa: '/rɪˌmjuːnəˈreɪʃn/',
        meaningVi: 'thù lao, chế độ lương thưởng đãi ngộ',
        partOfSpeech: 'noun',
        collocation: 'competitive salary and remuneration package',
        example: 'Multinational corporations provide generous remuneration including healthcare insurance.',
        synonyms: ['compensation', 'salary', 'stipend'],
        antonyms: ['unpaid labor', 'exploitation']
      },
      {
        id: 'v12-9-10',
        word: 'networking',
        ipa: '/ˈnetwɜːkɪŋ/',
        meaningVi: 'xây dựng và kết nối mạng lưới quan hệ công việc',
        partOfSpeech: 'noun',
        collocation: 'strategic professional networking',
        example: 'Attending international conferences is a prime avenue for industry networking.',
        synonyms: ['contact building', 'professional socialization'],
        antonyms: ['social isolation']
      }
    ],
    practice: [
      {
        id: 'p12-9-1',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'To thrive in the era of automation, workers must commit to lifelong ______ and skill development.',
        options: ['upskilling', 'stagnation', 'idleness', 'resignation'],
        correctAnswer: 'upskilling',
        explanation: '"Upskilling" là việc chủ động học thêm các kỹ năng mới để đáp ứng yêu cầu công việc.'
      },
      {
        id: 'p12-9-2',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Tìm từ ĐỒNG NGHĨA với "ADAPTABILITY": "Employers prize candidates with outstanding adaptability."',
        options: ['flexibility and versatility', 'rigidity', 'clumsiness', 'lethargy'],
        correctAnswer: 'flexibility and versatility',
        explanation: '"Adaptability" (khả năng thích ứng) đồng nghĩa với "flexibility and versatility".'
      },
      {
        id: 'p12-9-3',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Tìm từ TRÁI NGHĨA với "GROWTH MINDSET": "A growth mindset fuels continuous achievement."',
        options: ['fixed and defeatist mindset', 'enterprising attitude', 'curious spirit', 'optimism'],
        correctAnswer: 'fixed and defeatist mindset',
        explanation: '"Growth mindset" (tư duy phát triển) trái nghĩa với "fixed mindset" (tư duy đóng khung, an phận).'
      },
      {
        id: 'p12-9-4',
        type: 'collocation',
        category: 'collocation',
        prompt: 'Make sure your ______ includes quantified achievements rather than just a list of duties.',
        options: ['resume', 'diary', 'grocery list', 'shopping cart'],
        correctAnswer: 'resume',
        explanation: '"Resume" là sơ yếu lý lịch nghề nghiệp (CV).'
      },
      {
        id: 'p12-9-5',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Attending alumni seminars offers exceptional opportunities for career ______.',
        options: ['networking', 'bankruptcy', 'punishment', 'quarrel'],
        correctAnswer: 'networking',
        explanation: '"Networking" là hoạt động kết nối các mối quan hệ nghề nghiệp.'
      },
      {
        id: 'p12-9-6',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Fresh graduates typically serve a two-month ______ before signing a multi-year employment contract.',
        options: ['probation', 'imprisonment', 'hibernation', 'ceremony'],
        correctAnswer: 'probation',
        explanation: '"Probation" là thời gian thử việc.'
      },
      {
        id: 'p12-9-7',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'Employers increasingly prioritize hybrid skill matrices: robust technical proficiencies combined with high emotional quotient (EQ), creative problem-solving, and cross-cultural adaptability.',
        prompt: 'Các nhà tuyển dụng thời đại mới đánh giá cao nhất sự kết hợp kỹ năng nào?',
        options: [
          'Chuyên môn kỹ thuật vững vàng kết hợp cùng trí tuệ cảm xúc (EQ), giải quyết vấn đề sáng tạo và thích ứng văn hóa',
          'Chỉ cần bằng cấp loại giỏi mà không cần bất kỳ kỹ năng giao tiếp nào',
          'Khả năng làm việc suốt 24 giờ không nghỉ ngơi',
          'Chỉ tuyển những người không bao giờ thay đổi ý kiến'
        ],
        correctAnswer: 'Chuyên môn kỹ thuật vững vàng kết hợp cùng trí tuệ cảm xúc (EQ), giải quyết vấn đề sáng tạo và thích ứng văn hóa',
        explanation: 'Đoạn trích nêu rõ tiêu chuẩn "hybrid skill matrices: robust technical proficiencies combined with high emotional quotient (EQ), creative problem-solving, and cross-cultural adaptability".'
      }
    ],
    bossQuestions: [
      {
        id: 'b12-9-1',
        question: 'Phương pháp phỏng vấn "STAR" kinh điển viết tắt của các chữ cái nào?',
        options: [
          'Situation, Task, Action, Result',
          'Salary, Time, Attendance, Rate',
          'Silence, Thought, Argument, Reaction',
          'Study, Teach, Ask, Remember'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Mô hình trả lời phỏng vấn STAR: Bối cảnh (Situation), Nhiệm vụ (Task), Hành động (Action), Kết quả (Result).'
      },
      {
        id: 'b12-9-2',
        question: 'Tìm từ ĐỒNG NGHĨA CẤP CAO với "ENTREPRENEURIAL VENTURE":',
        options: ['innovative commercial enterprise', 'stagnant routine', 'government sinecure', 'unpaid detention'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Innovative commercial enterprise" là doanh nghiệp khởi nghiệp đổi mới sáng tạo.'
      },
      {
        id: 'b12-9-3',
        question: 'Khi nhận được lời góp ý phê bình trong công việc, người sở hữu "GROWTH MINDSET" sẽ phản ứng ra sao?',
        options: [
          'Lắng nghe cầu thị, phân tích điểm thiếu sót để hoàn thiện kỹ năng tốt hơn',
          'Tức giận tranh cãi và đổ lỗi cho đồng nghiệp',
          'Tự ti bỏ cuộc ngay lập tức',
          'Viết đơn xin nghỉ việc ngay trong ngày'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Người có tư duy phát triển coi phê bình là cơ hội quý báu để mài giũa năng lực.'
      },
      {
        id: 'b12-9-4',
        question: 'Từ TRÁI NGHĨA với "REMUNERATION":',
        options: ['uncompensated exploitation', 'lucrative compensation', 'stipend', 'bonus'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Remuneration" (thù lao xứng đáng) trái nghĩa với bóc lột không trả thù lao (uncompensated exploitation).'
      }
    ]
  },

  // UNIT 10: LIFELONG LEARNING
  {
    id: 'g12-u10',
    grade: 12,
    unit: 10,
    title: 'Lifelong Learning',
    realmName: 'Vô Nhai Các - Học Vấn Vô Cùng',
    guardianName: 'Hà Ánh Phượng',
    guardianColor: '#dc2626',
    storyIntro: 'CỬA ẢI THỨ 30 - ĐỈNH PHONG QUYẾT CHIẾN TOÀN CÕI VÕ LÂM! Tại Vô Nhai Các (Bể học vô bờ), Hồng Y Tông Chủ Hà Ánh Phượng đích thân xuất chiêu tối thượng: Đạt cảnh giới Học Tập Suốt Đời, học để làm người, học để khai sáng giang hồ, đại đăng khoa vinh hiển.',
    bossName: 'Hắc Ma Vô Tri Tự Mãn',
    bossTitle: 'Đại Hộ Pháp Độc Cô Cầu Bại - Kẻ Tưởng Mình Đã Biết Tất Cả',
    bossHp: 150,
    xpReward: 250,
    readingPassage: {
      title: 'The Infinite Horizon: Embracing Lifelong Learning as an Art of Living',
      topic: 'Học tập suốt đời: Tinh thần khai phóng và chìa khóa thích ứng tương lai',
      fullText: `In an era defined by exponential technological shifts, artificial intelligence disruption, and rapid knowledge obsolescence, formal schooling represents merely the inaugural chapter of an individual's intellectual voyage. Lifelong learning embodies the voluntary, self-motivated pursuit of knowledge for either personal enlightenment or professional mastery throughout life's entirety.\n\nLifelong learners continuously interrogate their own assumptions, venture beyond comfort zones, and embrace intellectual humility—the profound realization that the expanse of what remains unknown vastly eclipses what one currently masters. As celebrated educators remind us, the illiterates of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn.`,
      keyTakeaway: 'Học tập suốt đời là hành trình không điểm dừng: Học - Bỏ định kiến cũ - Học lại điều mới (Learn, Unlearn, Relearn) để không ngừng khai sáng.',
      vocabularyHighlights: ['lifelong learning', 'intellectual humility', 'self-motivated', 'unlearn', 'enlightenment']
    },
    vocabulary: [
      {
        id: 'v12-10-1',
        word: 'lifelong learning',
        ipa: '/ˌlaɪflɒŋ ˈlɜːnɪŋ/',
        meaningVi: 'học tập suốt đời, tinh thần học hỏi không ngừng nghỉ',
        partOfSpeech: 'noun phrase',
        collocation: 'embody the spirit of lifelong learning',
        example: 'Lifelong learning keeps our minds agile and resilient against aging.',
        synonyms: ['perpetual education', 'continuous learning'],
        antonyms: ['intellectual complacency', 'stagnation']
      },
      {
        id: 'v12-10-2',
        word: 'intellectual humility',
        ipa: '/ˌɪntəˈlektʃuəl hjuːˈmɪləti/',
        meaningVi: 'sự khiêm nhường trí tuệ (biết mình còn nhiều điều chưa biết)',
        partOfSpeech: 'noun phrase',
        collocation: 'practice intellectual humility',
        example: 'Great scholars maintain intellectual humility, welcoming correction from anyone.',
        synonyms: ['cognitive modesty', 'open-mindedness'],
        antonyms: ['intellectual arrogance', 'know-it-all dogmatism']
      },
      {
        id: 'v12-10-3',
        word: 'unlearn',
        ipa: '/ʌnˈlɜːn/',
        meaningVi: 'gạt bỏ thói quen/định kiến sai cũ để tiếp nhận cái mới',
        partOfSpeech: 'verb',
        collocation: 'learn, unlearn, and relearn',
        example: 'To master modern programming, he had to unlearn outdated coding habits.',
        synonyms: ['discard outdated habits', 'abandon obsolete preconceptions'],
        antonyms: ['cling stubbornly', 'entrench']
      },
      {
        id: 'v12-10-4',
        word: 'self-motivated',
        ipa: '/ˌself ˈməʊtɪveɪtɪd/',
        meaningVi: 'tự giác có động lực từ bên trong',
        partOfSpeech: 'adjective',
        collocation: 'self-motivated scholar',
        example: 'Self-motivated students read advanced research papers without being told.',
        synonyms: ['driven', 'intrinsically inspired', 'enterprising'],
        antonyms: ['coerced', 'reluctant', 'sluggish']
      },
      {
        id: 'v12-10-5',
        word: 'enlightenment',
        ipa: '/ɪnˈlaɪtnmənt/',
        meaningVi: 'sự khai sáng, đạt tới cảnh giới hiểu biết sâu xa',
        partOfSpeech: 'noun',
        collocation: 'quest for intellectual enlightenment',
        example: 'Philosophy offers intellectual enlightenment that transcends material possessions.',
        synonyms: ['illumination', 'wisdom', 'awakening'],
        antonyms: ['ignorance', 'blindness', 'darkness']
      },
      {
        id: 'v12-10-6',
        word: 'obsolescence',
        ipa: '/ˌɒbsəˈlesns/',
        meaningVi: 'sự lỗi thời, trở nên lạc hậu',
        partOfSpeech: 'noun',
        collocation: 'rapid knowledge obsolescence',
        example: 'Without continuous upskilling, technical credentials face quick obsolescence.',
        synonyms: ['outdatedness', 'antiquation'],
        antonyms: ['timelessness', 'relevance']
      },
      {
        id: 'v12-10-7',
        word: 'curiosity',
        ipa: '/ˌkjʊəriˈɒsəti/',
        meaningVi: 'lòng hiếu kỳ, khát khao khám phá chân lý',
        partOfSpeech: 'noun',
        collocation: 'insatiable intellectual curiosity',
        example: 'Childlike curiosity is the fountainhead of all scientific breakthroughs.',
        synonyms: ['inquisitiveness', 'thirst for knowledge'],
        antonyms: ['indifference', 'apathy']
      },
      {
        id: 'v12-10-8',
        word: 'mentor',
        ipa: '/ˈmentɔː(r)/',
        meaningVi: 'người thầy dẫn đường, cố vấn tâm huyết',
        partOfSpeech: 'noun / verb',
        collocation: 'cherished academic mentor',
        example: 'Teacher Ha Anh Phuong acted as an inspiring mentor guiding thousands of rural students.',
        synonyms: ['guide', 'counselor', 'guru'],
        antonyms: ['rival', 'adversary']
      },
      {
        id: 'v12-10-9',
        word: 'perpetual',
        ipa: '/pəˈpetʃuəl/',
        meaningVi: 'vĩnh cửu, không bao giờ ngừng lại',
        partOfSpeech: 'adjective',
        collocation: 'perpetual quest for truth',
        example: 'Science is a perpetual endeavor where every answer yields ten fresh questions.',
        synonyms: ['everlasting', 'unceasing', 'continuous'],
        antonyms: ['temporary', 'transient', 'finite']
      },
      {
        id: 'v12-10-10',
        word: 'renaissance',
        ipa: '/rɪˈneɪsns/',
        meaningVi: 'sự phục hưng, tái sinh rực rỡ của học vấn',
        partOfSpeech: 'noun',
        collocation: 'experience a cultural renaissance',
        example: 'Lifelong learning brings about a personal renaissance at any stage of life.',
        synonyms: ['revival', 'rebirth', 'resurgence'],
        antonyms: ['decline', 'decay']
      }
    ],
    practice: [
      {
        id: 'p12-10-1',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'The famous motto of modern education declares: The illiterate of the 21st century are those who cannot learn, ______, and relearn.',
        options: ['unlearn', 'unbutton', 'unlock', 'unbind'],
        correctAnswer: 'unlearn',
        explanation: 'Châm ngôn nổi tiếng của Alvin Toffler: "Learn, unlearn, and relearn" (Học, gạt bỏ cái cũ, học lại cái mới).'
      },
      {
        id: 'p12-10-2',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Tìm từ ĐỒNG NGHĨA với "INTELLECTUAL HUMILITY": "She demonstrated intellectual humility by acknowledging gaps in her knowledge."',
        options: ['cognitive modesty', 'arrogance', 'boastfulness', 'stubbornness'],
        correctAnswer: 'cognitive modesty',
        explanation: '"Intellectual humility" (khiêm tốn trí tuệ) đồng nghĩa với "cognitive modesty".'
      },
      {
        id: 'p12-10-3',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Tìm từ TRÁI NGHĨA với "LIFELONG LEARNING": "The university advocates lifelong learning for all citizens."',
        options: ['intellectual stagnation', 'continuous growth', 'ongoing education', 'wisdom'],
        correctAnswer: 'intellectual stagnation',
        explanation: '"Lifelong learning" (học tập suốt đời) trái nghĩa với "intellectual stagnation" (trì trệ, dừng học hỏi).'
      },
      {
        id: 'p12-10-4',
        type: 'collocation',
        category: 'collocation',
        prompt: 'Driven by insatiable ______, Albert Einstein spent his entire life unraveling cosmic mysteries.',
        options: ['curiosity', 'laziness', 'arrogance', 'weariness'],
        correctAnswer: 'curiosity',
        explanation: '"Insatiable curiosity" là lòng hiếu kỳ vô tận.'
      },
      {
        id: 'p12-10-5',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Dedicated teachers like Ms. Ha Anh Phuong serve as inspiring ______ for aspiring youth.',
        options: ['mentors', 'tyrants', 'strangers', 'bystanders'],
        correctAnswer: 'mentors',
        explanation: '"Mentors" là những người thầy dẫn đường chỉ lối.'
      },
      {
        id: 'p12-10-6',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'In fast-paced tech industries, skills face rapid ______ unless constantly refreshed.',
        options: ['obsolescence', 'immortality', 'celebration', 'perfection'],
        correctAnswer: 'obsolescence',
        explanation: '"Obsolescence" là sự lỗi thời lạc hậu theo thời gian.'
      },
      {
        id: 'p12-10-7',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'Lifelong learning embodies the voluntary, self-motivated pursuit of knowledge for either personal enlightenment or professional mastery throughout life’s entirety.',
        prompt: 'Theo đoạn trích, bản chất đích thực của "Học tập suốt đời" là gì?',
        options: [
          'Sự tự giác, chủ động theo đuổi tri thức để khai sáng bản thân và làm chủ chuyên môn suốt cuộc đời',
          'Chỉ học tập khi bị nhà trường hoặc cha mẹ bắt buộc',
          'Ngừng đọc sách và nghiên cứu ngay sau khi nhận bằng tốt nghiệp cấp ba',
          'Chỉ học những điều giúp kiếm tiền ngay lập tức mà bỏ qua đạo lý làm người'
        ],
        correctAnswer: 'Sự tự giác, chủ động theo đuổi tri thức để khai sáng bản thân và làm chủ chuyên môn suốt cuộc đời',
        explanation: 'Đoạn trích định nghĩa rõ ràng: "the voluntary, self-motivated pursuit of knowledge for either personal enlightenment or professional mastery throughout life’s entirety".'
      }
    ],
    bossQuestions: [
      {
        id: 'b12-10-1',
        question: 'Câu nói bất hủ của nhà tương lai học Alvin Toffler về người mù chữ thế kỷ 21 khẳng định điều gì?',
        options: [
          'Người mù chữ thế kỷ 21 không phải là người không biết đọc biết viết, mà là người không thể học, gạt bỏ định kiến cũ và học lại cái mới',
          'Chỉ những ai không có điện thoại thông minh mới là người mù chữ',
          'Bất cứ ai không học đại học đều là người mù chữ',
          'Không có người mù chữ nào trong thế kỷ 21'
        ],
        correctAnswer: 0,
        damage: 35,
        explanation: '"The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn."'
      },
      {
        id: 'b12-10-2',
        question: 'Tại sao "KHIÊM TỐN TRÍ TUỆ" (Intellectual Humility) lại là phẩm chất cao quý nhất của một đại cao thủ học vấn?',
        options: [
          'Vì người càng hiểu biết sâu rộng càng nhận thức rõ kho tàng tri thức nhân loại là vô tận',
          'Vì tỏ ra khiêm tốn sẽ được khen thưởng tiền bạc',
          'Vì không cần học thêm gì nữa',
          'Vì để che giấu việc mình không biết gì'
        ],
        correctAnswer: 0,
        damage: 30,
        explanation: 'Bể học vô bờ; bậc đại trí luôn thấu hiểu sự vô hạn của vũ trụ và giữ tâm thế học trò suốt đời.'
      },
      {
        id: 'b12-10-3',
        question: 'Tìm từ ĐỒNG NGHĨA CẤP CAO của "PERPETUAL QUEST FOR WISDOM":',
        options: ['unceasing lifelong pursuit of truth and enlightenment', 'finite mechanical examination', 'temporary memorisation', 'arrogant dogmatic decree'],
        correctAnswer: 0,
        damage: 30,
        explanation: '"Unceasing lifelong pursuit of truth and enlightenment" là cuộc truy cầu chân lý và khai sáng suốt đời không ngừng nghỉ.'
      },
      {
        id: 'b12-10-4',
        question: 'Sau khi vượt qua 30 cửa ải Global Success English Wulin, phẩm chất nào sẽ đồng hành cùng hiệp khách trên bước đường tương lai?',
        options: [
          'Bản lĩnh tự học, đạo đức nhân văn, khả năng thích ứng toàn cầu và tinh thần phụng sự đất nước',
          'Tính tự phụ xem thường người khác',
          'Thói quen học vẹt thi xong là quên hết',
          'Sự lười biếng trì trệ'
        ],
        correctAnswer: 0,
        damage: 30,
        explanation: 'Đại đăng khoa rạng danh: Bản lĩnh tự học, nhân văn, hội nhập toàn cầu và tinh thần phụng sự dân tộc.'
      }
    ]
  }
];
