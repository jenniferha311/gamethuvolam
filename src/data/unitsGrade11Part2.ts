import { UnitRealm } from '../types/game';

export const UNITS_GRADE_11_PART2: UnitRealm[] = [
  // UNIT 6: PRESERVING OUR HERITAGE
  {
    id: 'g11-u06',
    grade: 11,
    unit: 6,
    title: 'Preserving Our Heritage',
    realmName: 'Cổ Đô Di Sản Cảnh - Giữ Gìn Bách Niên',
    guardianName: 'Phương Tú',
    guardianColor: '#10b981',
    storyIntro: 'Bước vào Cổ Đô Di Sản Cảnh, giang hồ hiện ra với đền đài ngàn năm, làn điệu quan họ, ca trù và nhã nhạc cung đình. Thiếu hiệp lĩnh hội tâm pháp bảo tồn di sản vật thể và phi vật thể của non sông.',
    bossName: 'Hắc Ma Mai Một',
    bossTitle: 'Đại Hộ Pháp Thời Gian & Xâm Thực Văn Hóa',
    bossHp: 125,
    xpReward: 165,
    readingPassage: {
      title: 'Safeguarding Cultural and Natural Treasures for Posterity',
      topic: 'Bảo tồn di sản văn hóa vật thể và phi vật thể của Việt Nam',
      fullText: `Viet Nam is endowed with an extraordinary repository of UNESCO-recognized World Heritage sites, ranging from the breathtaking karsts of Ha Long Bay to the historical magnificence of the Complex of Hue Monuments. Crucially, heritage is categorized into tangible cultural heritage (monuments, ancient pagodas, citadel walls) and intangible cultural heritage (folk music, festive rituals, traditional craft-making).\n\nRapid modernisation and commercial tourism pose grave perils to these historical treasures, risking physical deterioration and cultural dilution. To ensure that future generations inherit these ancestral legacies, governments and local communities must implement proactive restoration, integrate digital archiving, and foster youth engagement through school heritage clubs.`,
      keyTakeaway: 'Di sản là cội nguồn dân tộc, đòi hỏi bảo tồn đồng thời cả di sản vật thể và phi vật thể trước sức ép của đô thị hóa.',
      vocabularyHighlights: ['tangible heritage', 'intangible heritage', 'preservation', 'restore', 'monument']
    },
    vocabulary: [
      {
        id: 'v11-6-1',
        word: 'tangible heritage',
        ipa: '/ˈtændʒəbl ˈherɪtɪdʒ/',
        meaningVi: 'di sản văn hóa vật thể (đền đài, thành quách, di tích)',
        partOfSpeech: 'noun phrase',
        collocation: 'preserve tangible heritage sites',
        example: 'The Imperial Citadel of Thang Long is a priceless tangible heritage of Viet Nam.',
        synonyms: ['physical monuments', 'architectural legacy'],
        antonyms: ['intangible heritage']
      },
      {
        id: 'v11-6-2',
        word: 'intangible heritage',
        ipa: '/ɪnˈtændʒəbl ˈherɪtɪdʒ/',
        meaningVi: 'di sản văn hóa phi vật thể (dân ca, lễ hội, bí quyết nghề)',
        partOfSpeech: 'noun phrase',
        collocation: 'UNESCO intangible cultural heritage',
        example: 'Quan Ho folk singing was inscribed as an intangible cultural heritage of humanity.',
        synonyms: ['living traditions', 'oral folklore'],
        antonyms: ['tangible heritage']
      },
      {
        id: 'v11-6-3',
        word: 'preservation',
        ipa: '/ˌprezəˈveɪʃn/',
        meaningVi: 'sự gìn giữ, bảo tồn nguyên trạng',
        partOfSpeech: 'noun',
        collocation: 'heritage preservation campaign',
        example: 'The preservation of ancient manuscripts requires temperature-controlled archives.',
        synonyms: ['conservation', 'safeguarding', 'protection'],
        antonyms: ['destruction', 'neglect', 'demolition']
      },
      {
        id: 'v11-6-4',
        word: 'restore',
        ipa: '/rɪˈstɔː(r)/',
        meaningVi: 'trùng tu, phục hồi di tích',
        partOfSpeech: 'verb',
        collocation: 'restore ancient wooden temples',
        example: 'Expert artisans were invited to restore the faded lacquer paintings in the palace.',
        synonyms: ['renovate', 'rehabilitate', 'reconstruct'],
        antonyms: ['dismantle', 'vandalize']
      },
      {
        id: 'v11-6-5',
        word: 'monument',
        ipa: '/ˈmɒnjumənt/',
        meaningVi: 'đài kỷ niệm, di tích lịch sử',
        partOfSpeech: 'noun',
        collocation: 'historical monument',
        example: 'The Complex of Hue Monuments showcases the zenith of Nguyen Dynasty architecture.',
        synonyms: ['memorial', 'historic structure', 'landmark'],
        antonyms: ['modern ruin']
      },
      {
        id: 'v11-6-6',
        word: 'posterity',
        ipa: '/pɒˈsterəti/',
        meaningVi: 'hậu thế, muôn đời sau',
        partOfSpeech: 'noun',
        collocation: 'preserve traditions for posterity',
        example: 'We must document folklore stories now so they are preserved for posterity.',
        synonyms: ['future generations', 'descendants'],
        antonyms: ['ancestors', 'forefathers']
      },
      {
        id: 'v11-6-7',
        word: 'authentic',
        ipa: '/ɔːˈθentɪk/',
        meaningVi: 'nguyên bản, đích thực, không lai căng',
        partOfSpeech: 'adjective',
        collocation: 'authentic cultural identity',
        example: 'The festival maintained its authentic rituals without commercial interference.',
        synonyms: ['genuine', 'original', 'legitimate'],
        antonyms: ['fake', 'counterfeit', 'distorted']
      },
      {
        id: 'v11-6-8',
        word: 'deteriorate',
        ipa: '/dɪˈtɪəriəreɪt/',
        meaningVi: 'xuống cấp, hư hại dần theo thời gian',
        partOfSpeech: 'verb',
        collocation: 'prevent ancient masonry from deteriorating',
        example: 'Acid rain causes limestone carvings to deteriorate rapidly.',
        synonyms: ['decay', 'degrade', 'worsen'],
        antonyms: ['improve', 'flourish', 'withstand']
      },
      {
        id: 'v11-6-9',
        word: 'inscribe',
        ipa: '/ɪnˈskraɪb/',
        meaningVi: 'ghi danh, khắc tên vào danh sách vinh danh',
        partOfSpeech: 'verb',
        collocation: 'be inscribed on the World Heritage List',
        example: 'Trang An Scenic Landscape Complex was inscribed by UNESCO in 2014.',
        synonyms: ['register', 'enlist', 'engrave'],
        antonyms: ['delist', 'erase']
      },
      {
        id: 'v11-6-10',
        word: 'folklore',
        ipa: '/ˈfəʊklɔː(r)/',
        meaningVi: 'văn hóa dân gian, truyện tích truyền miệng',
        partOfSpeech: 'noun',
        collocation: 'rich national folklore',
        example: 'The elders passed down epic tales through lively folklore storytelling.',
        synonyms: ['folk tradition', 'mythology', 'oral lore'],
        antonyms: ['pop culture']
      }
    ],
    practice: [
      {
        id: 'p11-6-1',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Quan Ho folk singing and Ca Tru are classified as ______ cultural heritage.',
        options: ['intangible', 'tangible', 'industrial', 'electronic'],
        correctAnswer: 'intangible',
        explanation: 'Dân ca và nghệ thuật diễn xướng là di sản phi vật thể (intangible heritage).'
      },
      {
        id: 'p11-6-2',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Tìm từ ĐỒNG NGHĨA với "RESTORE": "Specialists worked tirelessly to restore the damaged frescoes."',
        options: ['renovate', 'demolish', 'ignore', 'pollute'],
        correctAnswer: 'renovate',
        explanation: '"Restore" (trùng tu, phục hồi) đồng nghĩa với "renovate".'
      },
      {
        id: 'p11-6-3',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Tìm từ TRÁI NGHĨA với "POSTERITY": "We inherit great wisdom from our forefathers."',
        options: ['ancestors', 'descendants', 'children', 'heirs'],
        correctAnswer: 'ancestors',
        explanation: '"Posterity" (hậu thế) trái nghĩa với "ancestors / forefathers" (tổ tiên, tiền nhân).'
      },
      {
        id: 'p11-6-4',
        type: 'collocation',
        category: 'collocation',
        prompt: 'Ha Long Bay was ______ on the UNESCO World Heritage list for its breathtaking limestone karsts.',
        options: ['inscribed', 'forgotten', 'demolished', 'buried'],
        correctAnswer: 'inscribed',
        explanation: '"Inscribed on the UNESCO list" nghĩa là được ghi danh vào danh sách di sản thế giới.'
      },
      {
        id: 'p11-6-5',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Exposure to harsh tropical moisture causes ancient brick citadels to ______ without care.',
        options: ['deteriorate', 'prosper', 'multiply', 'electrify'],
        correctAnswer: 'deteriorate',
        explanation: '"Deteriorate" là xuống cấp, mục nát dần.'
      },
      {
        id: 'p11-6-6',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'The One Pillar Pagoda is one of the most revered ancient ______ in Hanoi.',
        options: ['monuments', 'factories', 'billboards', 'laboratories'],
        correctAnswer: 'monuments',
        explanation: '"Monument" là di tích, công trình kiến trúc lịch sử.'
      },
      {
        id: 'p11-6-7',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'To ensure that future generations inherit these ancestral legacies, governments and local communities must implement proactive restoration, integrate digital archiving, and foster youth engagement through school heritage clubs.',
        prompt: 'Để bảo vệ di sản cho hậu thế, bài đọc khuyến nghị giải pháp nào dưới đây?',
        options: [
          'Chủ động trùng tu, ứng dụng số hóa lưu trữ và khuyến khích giới trẻ qua các câu lạc bộ di sản',
          'Đập bỏ các di tích cũ để xây dựng các trung tâm thương mại hiện đại',
          'Ngăn cấm hoàn toàn học sinh tìm hiểu về lịch sử truyền thống',
          'Để mặc các công trình lịch sử tự nhiên hao mòn theo thời gian'
        ],
        correctAnswer: 'Chủ động trùng tu, ứng dụng số hóa lưu trữ và khuyến khích giới trẻ qua các câu lạc bộ di sản',
        explanation: 'Đoạn trích nêu rõ các giải pháp: "proactive restoration, integrate digital archiving, and foster youth engagement through school heritage clubs".'
      }
    ],
    bossQuestions: [
      {
        id: 'b11-6-1',
        question: 'Phân biệt "TANGIBLE" và "INTANGIBLE" heritage:',
        options: [
          'Tangible là di sản vật thể (đền, chùa, thành quách); Intangible là phi vật thể (dân ca, lễ hội, phong tục)',
          'Tangible là âm nhạc; Intangible là tòa nhà',
          'Tangible chỉ tồn tại trên internet; Intangible ở dưới đất',
          'Cả hai đều chỉ đồ ăn truyền thống'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Tangible (vật thể, sờ thấy được) vs Intangible (phi vật thể, tinh thần truyền khẩu).'
      },
      {
        id: 'b11-6-2',
        question: 'Tìm từ ĐỒNG NGHĨA CẤP CAO với "AUTHENTIC CULTURE":',
        options: ['unadulterated cultural heritage', 'fake imitation', 'commercialized gimmick', 'imported pop trend'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Unadulterated" nghĩa là thuần khiết, đích thực, không bị lai tạp.'
      },
      {
        id: 'b11-6-3',
        question: 'Từ TRÁI NGHĨA với "PRESERVATION" là:',
        options: ['vandalism and destruction', 'conservation', 'custody', 'safekeeping'],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Trái nghĩa với gìn giữ (preservation) là hành vi phá hoại (vandalism and destruction).'
      },
      {
        id: 'b11-6-4',
        question: 'Địa danh nào của Việt Nam là di sản hỗn hợp (cả văn hóa và thiên nhiên) đầu tiên ở Đông Nam Á?',
        options: ['Quần thể danh thắng Tràng An (Trang An Complex)', 'Phố cổ Hội An', 'Cố đô Huế', 'Hồ Ba Bể'],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Tràng An (Ninh Bình) là di sản thế giới hỗn hợp (Mixed Heritage) đầu tiên của Đông Nam Á.'
      }
    ]
  },

  // UNIT 7: EDUCATION OPTIONS FOR SCHOOL-LEAVERS
  {
    id: 'g11-u07',
    grade: 11,
    unit: 7,
    title: 'Education Options for School-leavers',
    realmName: 'Vấn Đạo Cảnh - Ngã Rẽ Tiền Đồ',
    guardianName: 'Liên Phạm',
    guardianColor: '#2563eb',
    storyIntro: 'Trước ngưỡng cửa Vấn Đạo Cảnh, các kiếm khách chuẩn bị tốt nghiệp trung học đứng trước nhiều ngả rẽ võ học: Nhập học đại học đường (Higher Education), tu luyện nghề thực chiến (Vocational Training), hay du học viễn xứ.',
    bossName: 'Hắc Ma Mông Lung',
    bossTitle: 'Hộ Pháp Lạc Lối - Kẻ Thao Túng Hoài Bão',
    bossHp: 125,
    xpReward: 165,
    readingPassage: {
      title: 'Navigating Horizons: Academic Universities vs Vocational Apprenticeships',
      topic: 'Lựa chọn con đường học tập sau khi tốt nghiệp THPT',
      fullText: `Upon completing upper secondary education, school-leavers face pivotal life choices that shape their occupational trajectories. While pursuing an academic bachelor's degree at a reputable university has historically been glorified, vocational education and training (VET) colleges have surged in popularity as a pragmatic alternative.\n\nVocational programs equip apprentices with hands-on skills in high-demand trades such as mechanical engineering, software testing, culinary arts, and green technologies. Graduates from trade colleges frequently transition into the workforce rapidly with minimal debt. Ultimately, neither route is universally superior; success hinges upon aligning personal aptitude, intrinsic passion, and market employment trends.`,
      keyTakeaway: 'Học đại học hay học nghề đều có giá trị riêng; quan trọng nhất là chọn lối đi phù hợp với năng khiếu và nhu cầu xã hội.',
      vocabularyHighlights: ['school-leaver', 'vocational training', 'higher education', 'apprenticeship', 'qualification']
    },
    vocabulary: [
      {
        id: 'v11-7-1',
        word: 'school-leaver',
        ipa: '/ˈskuːl liːvə(r)/',
        meaningVi: 'người vừa tốt nghiệp phổ thông',
        partOfSpeech: 'noun',
        collocation: 'career guidance for school-leavers',
        example: 'Career fairs help school-leavers explore viable educational options.',
        synonyms: ['high school graduate', 'matriculant'],
        antonyms: ['enrolled pupil']
      },
      {
        id: 'v11-7-2',
        word: 'vocational training',
        ipa: '/vəʊˈkeɪʃənl ˈtreɪnɪŋ/',
        meaningVi: 'đào tạo nghề thực hành',
        partOfSpeech: 'noun phrase',
        collocation: 'enroll in vocational training courses',
        example: 'Vocational training emphasizes hands-on mastery over abstract theory.',
        synonyms: ['trade education', 'technical schooling'],
        antonyms: ['pure academic research']
      },
      {
        id: 'v11-7-3',
        word: 'higher education',
        ipa: '/ˌhaɪər edʒuˈkeɪʃn/',
        meaningVi: 'giáo dục bậc cao (cao đẳng, đại học, sau đại học)',
        partOfSpeech: 'noun phrase',
        collocation: 'institutions of higher education',
        example: 'Higher education expands critical thinking and advanced analytical acumen.',
        synonyms: ['tertiary education', 'university studies'],
        antonyms: ['primary schooling']
      },
      {
        id: 'v11-7-4',
        word: 'apprenticeship',
        ipa: '/əˈprentɪsʃɪp/',
        meaningVi: 'thời gian học việc có lương / chương trình tập sự',
        partOfSpeech: 'noun',
        collocation: 'serve an apprenticeship',
        example: 'He completed a two-year apprenticeship under a master automotive technician.',
        synonyms: ['internship', 'traineeship', 'on-the-job training'],
        antonyms: ['tenured employment']
      },
      {
        id: 'v11-7-5',
        word: 'qualification',
        ipa: '/ˌkwɒlɪfɪˈkeɪʃn/',
        meaningVi: 'văn bằng, chứng chỉ năng lực chuyên môn',
        partOfSpeech: 'noun',
        collocation: 'gain professional qualifications',
        example: 'Accredited qualifications improve your prospects in competitive job markets.',
        synonyms: ['credential', 'certificate', 'diploma'],
        antonyms: ['disqualification', 'incompetence']
      },
      {
        id: 'v11-7-6',
        word: 'pragmatic',
        ipa: '/præɡˈmætɪk/',
        meaningVi: 'thực tế, chú trọng tính hiệu quả',
        partOfSpeech: 'adjective',
        collocation: 'take a pragmatic approach',
        example: 'Choosing a short vocational course was a pragmatic decision for his finances.',
        synonyms: ['practical', 'realistic', 'sensible'],
        antonyms: ['idealistic', 'impractical', 'utopian']
      },
      {
        id: 'v11-7-7',
        word: 'tuition fee',
        ipa: '/tjuˈɪʃn fiː/',
        meaningVi: 'học phí',
        partOfSpeech: 'noun phrase',
        collocation: 'affordable tuition fees',
        example: 'Many students apply for scholarships to offset expensive university tuition fees.',
        synonyms: ['schooling costs', 'academic dues'],
        antonyms: ['stipend', 'grant award']
      },
      {
        id: 'v11-7-8',
        word: 'hands-on',
        ipa: '/ˌhændz ˈɒn/',
        meaningVi: 'thực hành trực tiếp, trải nghiệm thực tế',
        partOfSpeech: 'adjective',
        collocation: 'gain hands-on experience',
        example: 'Cooking schools provide hands-on kitchen experience from day one.',
        synonyms: ['practical', 'experiential', 'active'],
        antonyms: ['theoretical', 'abstract']
      },
      {
        id: 'v11-7-9',
        word: 'aptitude',
        ipa: '/ˈæptɪtjuːd/',
        meaningVi: 'thiên phú, năng khiếu tự nhiên',
        partOfSpeech: 'noun',
        collocation: 'demonstrate a natural aptitude for languages',
        example: 'Her remarkable aptitude for mathematics led her to study computer engineering.',
        synonyms: ['talent', 'flair', 'gift'],
        antonyms: ['inaptitude', 'clumsiness']
      },
      {
        id: 'v11-7-10',
        word: 'prospect',
        ipa: '/ˈprɒspekt/',
        meaningVi: 'triển vọng tiền đồ tương lai',
        partOfSpeech: 'noun',
        collocation: 'bright employment prospects',
        example: 'Graduates in artificial intelligence enjoy exceptional employment prospects.',
        synonyms: ['outlook', 'opportunities', 'potential'],
        antonyms: ['hopelessness', 'dead end']
      }
    ],
    practice: [
      {
        id: 'p11-7-1',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Rather than pursuing a four-year degree, Lan chose ______ training to become a professional graphic designer.',
        options: ['vocational', 'fictional', 'reluctant', 'accidental'],
        correctAnswer: 'vocational',
        explanation: '"Vocational training" là trường đào tạo nghề thực hành.'
      },
      {
        id: 'p11-7-2',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Tìm từ ĐỒNG NGHĨA với "PRAGMATIC": "His pragmatic approach solved the problem quickly."',
        options: ['practical', 'daydreaming', 'fanciful', 'reckless'],
        correctAnswer: 'practical',
        explanation: '"Pragmatic" (thực tế, thực dụng) đồng nghĩa với "practical".'
      },
      {
        id: 'p11-7-3',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Tìm từ TRÁI NGHĨA với "HANDS-ON": "Vocational colleges emphasize hands-on workshops."',
        options: ['purely theoretical', 'experiential', 'practical', 'active'],
        correctAnswer: 'purely theoretical',
        explanation: '"Hands-on" (thực hành thực tế) trái nghĩa với "purely theoretical" (chỉ thuần túy lý thuyết).'
      },
      {
        id: 'p11-7-4',
        type: 'collocation',
        category: 'collocation',
        prompt: 'Students with technical talent can serve a paid ______ to earn while they learn.',
        options: ['apprenticeship', 'kidnapping', 'robbery', 'punishment'],
        correctAnswer: 'apprenticeship',
        explanation: '"Apprenticeship" là thời gian học việc / tập sự chuyên nghiệp.'
      },
      {
        id: 'p11-7-5',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Winning a full scholarship relieved her parents from paying hefty university ______.',
        options: ['tuition fees', 'supermarket bills', 'toll tickets', 'traffic fines'],
        correctAnswer: 'tuition fees',
        explanation: '"Tuition fees" là học phí đại học.'
      },
      {
        id: 'p11-7-6',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Career counselors recommend taking an ______ test to uncover personal strengths and inclinations.',
        options: ['aptitude', 'allergy', 'earthquake', 'arithmetic speed'],
        correctAnswer: 'aptitude',
        explanation: '"Aptitude test" là bài kiểm tra đánh giá năng khiếu / sở trường nghề nghiệp.'
      },
      {
        id: 'p11-7-7',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'Graduates from trade colleges frequently transition into the workforce rapidly with minimal debt.',
        prompt: 'Lợi thế vượt trội của sinh viên tốt nghiệp các trường nghề là gì?',
        options: [
          'Gia nhập thị trường lao động nhanh chóng với số nợ học phí tối thiểu',
          'Bắt buộc phải học thêm 6 năm lý thuyết mới được đi làm',
          'Không bao giờ kiếm được công việc ổn định',
          'Chỉ được làm các công việc không có lương'
        ],
        correctAnswer: 'Gia nhập thị trường lao động nhanh chóng với số nợ học phí tối thiểu',
        explanation: 'Đoạn trích nêu rõ: "transition into the workforce rapidly with minimal debt".'
      }
    ],
    bossQuestions: [
      {
        id: 'b11-7-1',
        question: 'Mô hình học việc "APPRENTICESHIP" có đặc điểm chính là:',
        options: [
          'Vừa học nghề thực tế dưới sự chỉ dẫn của nghệ nhân/kỹ sư, vừa được hưởng thù lao',
          'Chỉ ngồi trong giảng đường đọc sách',
          'Phải trả học phí gấp mười lần đại học',
          'Không cần thực hành bất kỳ kỹ năng nào'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Apprenticeship là mô hình "earn while you learn" kết hợp lý thuyết và làm thực tế.'
      },
      {
        id: 'b11-7-2',
        question: 'Từ ĐỒNG NGHĨA CẤP CAO của "CREDENTIALS AND DIPLOMAS" là:',
        options: ['accredited professional qualifications', 'worthless papers', 'forged documents', 'untested rumors'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Accredited professional qualifications" là các chứng chỉ chuyên môn được kiểm định công nhận.'
      },
      {
        id: 'b11-7-3',
        question: 'Yếu tố cốt lõi nào giúp học sinh lớp 12 đưa ra lựa chọn sáng suốt sau khi tốt nghiệp?',
        options: [
          'Thấu hiểu năng khiếu cá nhân, niềm đam mê và nhu cầu tuyển dụng thực tế của xã hội',
          'Chỉ chạy theo ngành nghề theo phong trào đám đông',
          'Chọn trường học đắt đỏ nhất bất chấp khả năng tài chính',
          'Hoàn toàn không cần tìm hiểu trước'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Sự hòa quyện giữa năng khiếu, đam mê và nhu cầu thị trường là chìa khóa thành công.'
      },
      {
        id: 'b11-7-4',
        question: 'Tìm từ TRÁI NGHĨA với "PROSPECT":',
        options: ['hopeless stalemate', 'promising outlook', 'potential', 'opportunity'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Prospect" (triển vọng mở rộng) trái nghĩa với bế tắc tuyệt vọng (hopeless stalemate).'
      }
    ]
  },

  // UNIT 8: BECOMING INDEPENDENT
  {
    id: 'g11-u08',
    grade: 11,
    unit: 8,
    title: 'Becoming Independent',
    realmName: 'Tự Lập Cảnh - Rèn Luyện Bản Lĩnh',
    guardianName: 'Đặng Trần Hà',
    guardianColor: '#f59e0b',
    storyIntro: 'Tiến nhập Tự Lập Cảnh, thiếu hiệp học cách hạ sơn một mình: tự quản trị ngân sách, nấu nướng, sắp xếp thời gian biểu và giữ vững đạo tâm trước phong ba cám dỗ.',
    bossName: 'Hắc Ma Ỷ Lại',
    bossTitle: 'Hộ Pháp Nhu Nhược - Kẻ Bào Mòn Tự Chủ',
    bossHp: 125,
    xpReward: 165,
    readingPassage: {
      title: 'Mastering Autonomy: Essential Life Skills for Young Adults',
      topic: 'Rèn luyện kỹ năng sống tự lập khi bước vào tuổi trưởng thành',
      fullText: `Transitioning into adulthood is fundamentally an expedition in cultivating self-reliance and emotional maturity. Becoming independent does not merely denote living under a separate roof; it mandates mastering multifaceted life skills ranging from financial budgeting and meal preparation to effective time management.\n\nYoung adults who learn to prioritize tasks, resist peer pressure, and cope with loneliness develop robust resilience. Rather than relying on parental rescue at the slightest hurdle, self-reliant individuals take accountability for their mistakes, learn from setbacks, and navigate adversity with poise and confidence.`,
      keyTakeaway: 'Tự lập không chỉ là sống riêng mà là làm chủ kỹ năng quản lý tài chính, cảm xúc, thời gian và dám chịu trách nhiệm cho cuộc đời mình.',
      vocabularyHighlights: ['self-reliance', 'independent', 'time management', 'resilience', 'cope with']
    },
    vocabulary: [
      {
        id: 'v11-8-1',
        word: 'self-reliance',
        ipa: '/ˌself rɪˈlaɪəns/',
        meaningVi: 'sự tự lực cánh sinh, không ỷ lại',
        partOfSpeech: 'noun',
        collocation: 'foster self-reliance in teenagers',
        example: 'Camping trips teach young people teamwork and self-reliance.',
        synonyms: ['independence', 'autonomy', 'self-sufficiency'],
        antonyms: ['dependence', 'parasitism']
      },
      {
        id: 'v11-8-2',
        word: 'cope with',
        ipa: '/kəʊp wɪð/',
        meaningVi: 'đương đầu, xử lý thành công khó khăn',
        partOfSpeech: 'phrasal verb',
        collocation: 'cope with stress and exams',
        example: 'Meditation helps college students cope with exam anxieties effectively.',
        synonyms: ['manage', 'handle', 'grapple with'],
        antonyms: ['succumb to', 'give up']
      },
      {
        id: 'v11-8-3',
        word: 'time management',
        ipa: '/ˈtaɪm ˌmænɪdʒmənt/',
        meaningVi: 'kỹ năng quản trị thời gian',
        partOfSpeech: 'noun phrase',
        collocation: 'effective time management skills',
        example: 'Good time management allows you to balance studying, work, and leisure.',
        synonyms: ['scheduling efficiency', 'time allocation'],
        antonyms: ['procrastination', 'sloth']
      },
      {
        id: 'v11-8-4',
        word: 'resilience',
        ipa: '/rɪˈzɪliəns/',
        meaningVi: 'sức bền bỉ kiên cường, khả năng phục hồi sau vấp ngã',
        partOfSpeech: 'noun',
        collocation: 'demonstrate remarkable resilience',
        example: 'Her inner resilience carried her through bankruptcy to become a thriving founder.',
        synonyms: ['toughness', 'tenacity', 'grit'],
        antonyms: ['fragility', 'vulnerability', 'weakness']
      },
      {
        id: 'v11-8-5',
        word: 'accountability',
        ipa: '/əˌkaʊntəˈbɪləti/',
        meaningVi: 'tinh thần trách nhiệm, chịu giải trình cho hành vi',
        partOfSpeech: 'noun',
        collocation: 'take full accountability for decisions',
        example: 'A truly mature person accepts accountability without blaming scapegoats.',
        synonyms: ['responsibility', 'answerability', 'liability'],
        antonyms: ['blame-shifting', 'irresponsibility']
      },
      {
        id: 'v11-8-6',
        word: 'budget',
        ipa: '/ˈbʌdʒɪt/',
        meaningVi: 'ngân sách chi tiêu / lên kế hoạch tài chính',
        partOfSpeech: 'noun / verb',
        collocation: 'stick to a monthly budget',
        example: 'Living on a strict budget prevents undergraduates from accumulating credit card debt.',
        synonyms: ['financial plan', 'spending allocation'],
        antonyms: ['reckless spending']
      },
      {
        id: 'v11-8-7',
        word: 'interpersonal',
        ipa: '/ˌɪntəˈpɜːsənl/',
        meaningVi: 'giữa người với người, kỹ năng giao tiếp đối nhân xử thế',
        partOfSpeech: 'adjective',
        collocation: 'interpersonal communication skills',
        example: 'Strong interpersonal skills help roommates resolve domestic disagreements peacefully.',
        synonyms: ['social', 'relational'],
        antonyms: ['intrapersonal', 'asocial']
      },
      {
        id: 'v11-8-8',
        word: 'prioritise',
        ipa: '/praɪˈɒrətaɪz/',
        meaningVi: 'ưu tiên việc quan trọng trước',
        partOfSpeech: 'verb',
        collocation: 'prioritise urgent assignments',
        example: 'You must prioritise your mental health over trivial online disputes.',
        synonyms: ['rank higher', 'put first'],
        antonyms: ['neglect', 'demote']
      },
      {
        id: 'v11-8-9',
        word: 'peer pressure',
        ipa: '/ˈpɪə preʃə(r)/',
        meaningVi: 'áp lực từ bạn bè đồng trang lứa',
        partOfSpeech: 'noun phrase',
        collocation: 'resist harmful peer pressure',
        example: 'Independent thinkers resist peer pressure to drink alcohol or vape.',
        synonyms: ['social conformity pressure'],
        antonyms: ['independent judgment']
      },
      {
        id: 'v11-8-10',
        word: 'mature',
        ipa: '/məˈtʃʊə(r)/',
        meaningVi: 'trưởng thành, chín chắn trong suy nghĩ',
        partOfSpeech: 'adjective',
        collocation: 'mature emotional outlook',
        example: 'He showed a mature mindset by admitting his faults and apologizing sincerely.',
        synonyms: ['grown-up', 'sensible', 'level-headed'],
        antonyms: ['immature', 'childish', 'infantile']
      }
    ],
    practice: [
      {
        id: 'p11-8-1',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Living far from family forces university freshmen to develop strong ______.',
        options: ['self-reliance', 'laziness', 'dependence', 'negligence'],
        correctAnswer: 'self-reliance',
        explanation: '"Self-reliance" là tính tự lực cánh sinh, tự lo cho bản thân.'
      },
      {
        id: 'p11-8-2',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Tìm từ ĐỒNG NGHĨA với "RESILIENCE": "Her resilience helped her bounce back after failure."',
        options: ['tenacity and grit', 'frailty', 'hesitation', 'timidity'],
        correctAnswer: 'tenacity and grit',
        explanation: '"Resilience" (sự kiên cường) đồng nghĩa với "tenacity and grit" (bền bỉ, ý chí sắt đá).'
      },
      {
        id: 'p11-8-3',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Tìm từ TRÁI NGHĨA với "MATURE": "His excuses for being late sounded very mature."',
        options: ['childish and immature', 'sensible', 'wise', 'responsible'],
        correctAnswer: 'childish and immature',
        explanation: '"Mature" (chín chắn) trái nghĩa với "childish and immature" (trẻ con, ấu trĩ).'
      },
      {
        id: 'p11-8-4',
        type: 'collocation',
        category: 'collocation',
        prompt: 'Teenagers must learn to resist ______ when invited to skip classes or try cigarettes.',
        options: ['peer pressure', 'fresh water', 'gravity', 'sunlight'],
        correctAnswer: 'peer pressure',
        explanation: '"Peer pressure" là áp lực rủ rê từ bạn bè đồng trang lứa.'
      },
      {
        id: 'p11-8-5',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Setting a monthly ______ helps students avoid running out of money before month-end.',
        options: ['budget', 'riddle', 'trophy', 'curtain'],
        correctAnswer: 'budget',
        explanation: '"Budget" là kế hoạch ngân sách chi tiêu hàng tháng.'
      },
      {
        id: 'p11-8-6',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'A mature adult always takes personal ______ for their mistakes instead of blaming colleagues.',
        options: ['accountability', 'amusement', 'vacation', 'distraction'],
        correctAnswer: 'accountability',
        explanation: '"Accountability" là tinh thần nhận lãnh trách nhiệm.'
      },
      {
        id: 'p11-8-7',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'Becoming independent does not merely denote living under a separate roof; it mandates mastering multifaceted life skills ranging from financial budgeting and meal preparation to effective time management.',
        prompt: 'Theo bài đọc, tự lập thực sự đòi hỏi điều gì ngoài việc sống ở nhà riêng?',
        options: [
          'Làm chủ các kỹ năng sống đa dạng từ quản lý ngân sách, tự nấu ăn đến quản trị thời gian',
          'Chỉ cần dựa vào tiền chu cấp hàng tháng của bố mẹ',
          'Không bao giờ nói chuyện với bất kỳ người thân nào nữa',
          'Bỏ học để đi làm kiếm tiền ngay lập tức'
        ],
        correctAnswer: 'Làm chủ các kỹ năng sống đa dạng từ quản lý ngân sách, tự nấu ăn đến quản trị thời gian',
        explanation: 'Đoạn trích nêu rõ tự lập đòi hỏi: "mastering multifaceted life skills ranging from financial budgeting and meal preparation to effective time management".'
      }
    ],
    bossQuestions: [
      {
        id: 'b11-8-1',
        question: 'Kỹ năng nào sau đây là quan trọng hàng đầu để tránh tình trạng "viêm màng túi" cuối tháng?',
        options: [
          'Budgeting and financial management',
          'Eating fast food every meal',
          'Shopping impulse sales online',
          'Borrowing high-interest loans'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Lập kế hoạch ngân sách (budgeting) là chìa khóa quản lý tài chính cá nhân.'
      },
      {
        id: 'b11-8-2',
        question: 'Tìm từ ĐỒNG NGHĨA CẤP CAO của "COPE WITH ADVERSITY":',
        options: ['navigate hardships with fortitude', 'surrender instantly', 'flee in panic', 'blame parents'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Navigate hardships with fortitude" nghĩa là vượt qua gian nan với sự kiên cường.'
      },
      {
        id: 'b11-8-3',
        question: 'Từ TRÁI NGHĨA với "SELF-RELIANCE" là:',
        options: ['helpless overdependence', 'autonomy', 'self-determination', 'grit'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Self-reliance" (tự lực) trái nghĩa với sự lệ thuộc bất lực (helpless overdependence).'
      },
      {
        id: 'b11-8-4',
        question: 'Hành động nào thể hiện "TIME MANAGEMENT" chuẩn mực?',
        options: [
          'Prioritizing crucial tasks using a study timetable and avoiding distractions',
          'Leaving all homework until 2 AM before exam day',
          'Scrolling social networks for 8 continuous hours',
          'Sleeping through morning lectures'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Lập thời gian biểu và ưu tiên việc cấp thiết là đỉnh cao của quản trị thời gian.'
      }
    ]
  },

  // UNIT 9: SOCIAL ISSUES
  {
    id: 'g11-u09',
    grade: 11,
    unit: 9,
    title: 'Social Issues',
    realmName: 'Nhân Gian Cảnh - Trừ Bạo An Dân',
    guardianName: 'Phương Tú',
    guardianColor: '#10b981',
    storyIntro: 'Tiến nhập Nhân Gian Cảnh, giang hồ xuất hiện các vấn nạn xã hội nhức nhối: Bạo lực học đường (bullying), bạo lực mạng (cyberbullying), đói nghèo và kỳ thị. Thiếu hiệp phải cầm kiếm trượng nghĩa, bảo vệ kẻ yếu thế.',
    bossName: 'Hắc Ma Bạo Lực & Độc Địa',
    bossTitle: 'Đại Hộ Pháp Kỳ Thị & Bắt Nạt Không Gian Mạng',
    bossHp: 130,
    xpReward: 170,
    readingPassage: {
      title: 'Confronting Bullying and Promoting Empathy in the Digital Era',
      topic: 'Vấn nạn bắt nạt học đường, bạo lực mạng và sức mạnh của sự thấu cảm',
      fullText: `Social issues, particularly bullying and its pernicious digital counterpart—cyberbullying—inflict severe psychological trauma on adolescents worldwide. Victims frequently suffer from chronic anxiety, clinical depression, social withdrawal, and a precipitous decline in academic performance.\n\nUnlike traditional playground bullying, cyberbullying permeates private bedrooms 24/7 through malicious comments, altered photos, and anonymous harassment on social networks. Tackling this crisis requires systemic collaboration: schools must institute zero-tolerance anti-bullying protocols, parents must maintain open dialogues, and bystanders must summon the moral courage to speak up rather than silently spectate.`,
      keyTakeaway: 'Bắt nạt và bạo lực mạng để lại chấn thương tâm lý sâu sắc; cần sự chung tay của gia đình, nhà trường và tiếng nói can đảm của người chứng kiến.',
      vocabularyHighlights: ['cyberbullying', 'peer pressure', 'empathy', 'harassment', 'bystander']
    },
    vocabulary: [
      {
        id: 'v11-9-1',
        word: 'cyberbullying',
        ipa: '/ˈsaɪbəbʊliɪŋ/',
        meaningVi: 'bắt nạt trên mạng / bạo lực mạng',
        partOfSpeech: 'noun',
        collocation: 'victims of cyberbullying',
        example: 'Cyberbullying can ruin a teenager’s self-esteem overnight.',
        synonyms: ['online harassment', 'digital intimidation'],
        antonyms: ['online support', 'digital kindness']
      },
      {
        id: 'v11-9-2',
        word: 'empathy',
        ipa: '/ˈempəθi/',
        meaningVi: 'sự thấu cảm, khả năng đặt mình vào vị trí người khác',
        partOfSpeech: 'noun',
        collocation: 'show deep empathy for victims',
        example: 'Teaching empathy in elementary schools substantially curtails schoolyard violence.',
        synonyms: ['compassion', 'sympathetic understanding'],
        antonyms: ['apathy', 'callousness', 'cruelty']
      },
      {
        id: 'v11-9-3',
        word: 'harassment',
        ipa: '/ˈhærəsmənt/',
        meaningVi: 'sự quấy rối, làm phiền xúc phạm',
        partOfSpeech: 'noun',
        collocation: 'report verbal harassment',
        example: 'The company has a zero-tolerance policy against any form of harassment.',
        synonyms: ['intimidation', 'persecution', 'torment'],
        antonyms: ['respect', 'hospitality', 'encouragement']
      },
      {
        id: 'v11-9-4',
        word: 'bystander',
        ipa: '/ˈbaɪstændə(r)/',
        meaningVi: 'người đứng ngoài xem, người chứng kiến',
        partOfSpeech: 'noun',
        collocation: 'active upstander rather than passive bystander',
        example: 'Bystanders should step forward and alert teachers whenever they witness bullying.',
        synonyms: ['onlooker', 'spectator', 'observer'],
        antonyms: ['active intervener', 'participant']
      },
      {
        id: 'v11-9-5',
        word: 'poverty',
        ipa: '/ˈpɒvəti/',
        meaningVi: 'sự nghèo đói, cảnh cơ hàn',
        partOfSpeech: 'noun',
        collocation: 'alleviate extreme poverty',
        example: 'Education remains the most potent weapon to break the cycle of poverty.',
        synonyms: ['destitution', 'deprivation', 'penury'],
        antonyms: ['wealth', 'affluence', 'prosperity']
      },
      {
        id: 'v11-9-6',
        word: 'discrimination',
        ipa: '/dɪˌskrɪmɪˈneɪʃn/',
        meaningVi: 'sự phân biệt đối xử, kỳ thị',
        partOfSpeech: 'noun',
        collocation: 'racial or gender discrimination',
        example: 'Laws were enacted to outlaw discrimination in hiring practices.',
        synonyms: ['bias', 'prejudice', 'bigotry'],
        antonyms: ['equality', 'impartiality', 'fairness']
      },
      {
        id: 'v11-9-7',
        word: 'anxiety',
        ipa: '/æŋˈzaɪəti/',
        meaningVi: 'nỗi âu lo, bất an tâm lý',
        partOfSpeech: 'noun',
        collocation: 'suffer from severe anxiety',
        example: 'Constant online insults induced severe anxiety and insomnia in the student.',
        synonyms: ['nervousness', 'apprehension', 'worry'],
        antonyms: ['calmness', 'serenity', 'peace of mind']
      },
      {
        id: 'v11-9-8',
        word: 'intervention',
        ipa: '/ˌɪntəˈvenʃn/',
        meaningVi: 'sự can thiệp để ngăn chặn điều xấu',
        partOfSpeech: 'noun',
        collocation: 'timely psychological intervention',
        example: 'Early intervention by family members prevented the situation from deteriorating.',
        synonyms: ['involvement', 'mediation', 'intercession'],
        antonyms: ['non-interference', 'neglect']
      },
      {
        id: 'v11-9-9',
        word: 'struggle',
        ipa: '/ˈstrʌɡl/',
        meaningVi: 'vật lộn, đấu tranh chống lại khó khăn',
        partOfSpeech: 'verb / noun',
        collocation: 'struggle against domestic violence',
        example: 'Community centers help vulnerable families struggle against homelessness.',
        synonyms: ['strive', 'battle', 'wrestle'],
        antonyms: ['surrender', 'yield']
      },
      {
        id: 'v11-9-10',
        word: 'campaign',
        ipa: '/kæmˈpeɪn/',
        meaningVi: 'chiến dịch hành động vì cộng đồng',
        partOfSpeech: 'noun',
        collocation: 'launch an anti-bullying campaign',
        example: 'Youth unions launched a nationwide campaign to raise awareness about mental health.',
        synonyms: ['drive', 'movement', 'crusade'],
        antonyms: ['inactivity']
      }
    ],
    practice: [
      {
        id: 'p11-9-1',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Sending abusive texts and spreading rumors online is known as ______.',
        options: ['cyberbullying', 'aerobics', 'philanthropy', 'architecture'],
        correctAnswer: 'cyberbullying',
        explanation: '"Cyberbullying" là hành vi bắt nạt, lăng mạ trên không gian mạng.'
      },
      {
        id: 'p11-9-2',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Tìm từ ĐỒNG NGHĨA với "EMPATHY": "He felt genuine empathy for the impoverished families."',
        options: ['compassion', 'hostility', 'indifference', 'greed'],
        correctAnswer: 'compassion',
        explanation: '"Empathy" (sự thấu cảm) đồng nghĩa với "compassion" (lòng trắc ẩn, xót thương).'
      },
      {
        id: 'p11-9-3',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Tìm từ TRÁI NGHĨA với "DISCRIMINATION": "The constitution guarantees freedom from discrimination."',
        options: ['equality and fairness', 'prejudice', 'bias', 'intolerance'],
        correctAnswer: 'equality and fairness',
        explanation: '"Discrimination" (kỳ thị) trái nghĩa với "equality and fairness" (bình đẳng và công bằng).'
      },
      {
        id: 'p11-9-4',
        type: 'collocation',
        category: 'collocation',
        prompt: 'Rather than being a silent ______, you should report school violence to teachers immediately.',
        options: ['bystander', 'gladiator', 'invader', 'warrior'],
        correctAnswer: 'bystander',
        explanation: '"Silent bystander" là người chứng kiến im lặng thờ ơ.'
      },
      {
        id: 'p11-9-5',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Subsidized vocational courses aim to reduce youth unemployment and alleviate ______.',
        options: ['poverty', 'fresh air', 'wealth', 'championship'],
        correctAnswer: 'poverty',
        explanation: '"Alleviate poverty" là xóa đói giảm nghèo.'
      },
      {
        id: 'p11-9-6',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'The students initiated an inspiring ______ to collect winter coats for orphanages.',
        options: ['campaign', 'catastrophe', 'punishment', 'epidemic'],
        correctAnswer: 'campaign',
        explanation: '"Campaign" là chiến dịch thiện nguyện / xã hội.'
      },
      {
        id: 'p11-9-7',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'Tackling this crisis requires systemic collaboration: schools must institute zero-tolerance anti-bullying protocols, parents must maintain open dialogues, and bystanders must summon the moral courage to speak up rather than silently spectate.',
        prompt: 'Theo tác giả, những người chứng kiến (bystanders) cần có hành động gì?',
        options: [
          'Dũng cảm lên tiếng bênh vực nạn nhân thay vì chỉ im lặng đứng nhìn',
          'Cổ vũ hành vi bắt nạt bằng cách quay video chia sẻ lên mạng',
          'Lảng tránh và xem như chuyện của người khác không liên quan đến mình',
          'Tham gia cùng kẻ bắt nạt để tránh bị trêu chọc'
        ],
        correctAnswer: 'Dũng cảm lên tiếng bênh vực nạn nhân thay vì chỉ im lặng đứng nhìn',
        explanation: 'Đoạn trích nhấn mạnh: "bystanders must summon the moral courage to speak up rather than silently spectate".'
      }
    ],
    bossQuestions: [
      {
        id: 'b11-9-1',
        question: 'Tại sao bạo lực mạng (Cyberbullying) lại đặc biệt nguy hiểm và độc hại đối với học sinh?',
        options: [
          'Vì kẻ xấu có thể tấn công nạn nhân 24/7 dưới danh tính ẩn danh ngay trong phòng riêng',
          'Vì nó không sử dụng điện thoại hay máy tính',
          'Vì nó khiến mọi người yêu thương nhau hơn',
          'Vì nó chỉ tồn tại trong vòng 5 giây rồi biến mất'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Bạo lực mạng có tính ẩn danh, lan truyền chóng mặt và bám theo nạn nhân mọi lúc mọi nơi.'
      },
      {
        id: 'b11-9-2',
        question: 'Tìm từ ĐỒNG NGHĨA CẤP CAO với "ALLEVIATE DESTITUTION":',
        options: ['eradicate extreme poverty', 'worsen famine', 'create wealth disparity', 'ignore beggars'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Eradicate extreme poverty" nghĩa là xóa bỏ cảnh nghèo đói cùng cực.'
      },
      {
        id: 'b11-9-3',
        question: 'Từ TRÁI NGHĨA với "CALLOUSNESS / APATHY" là:',
        options: ['profound empathy and compassion', 'cruelty', 'spite', 'indifference'],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Trái nghĩa với vô cảm thờ ơ (callousness/apathy) là lòng thấu cảm và trắc ẩn sâu sắc.'
      },
      {
        id: 'b11-9-4',
        question: 'Hành động nào giúp xây dựng một môi trường học đường không bạo lực?',
        options: [
          'Fostering open communication, active kindness, and zero tolerance for harassment',
          'Encouraging students to fight disputes with fists',
          'Mocking anyone who looks different',
          'Spreading humiliating gossip on forum threads'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Giao tiếp chân thành, lan tỏa lòng tốt và kiên quyết bài trừ quấy rối là giải pháp.'
      }
    ]
  },

  // UNIT 10: THE ECOSYSTEM
  {
    id: 'g11-u10',
    grade: 11,
    unit: 10,
    title: 'The Ecosystem',
    realmName: 'Thần Mộc Cảnh - Hòa Nhịp Càn Khôn',
    guardianName: 'Hà Ánh Phượng',
    guardianColor: '#dc2626',
    storyIntro: 'Cửa ải tối thượng kết thúc hành trình Khối 11: Thần Mộc Cảnh. Hồng Y Tông Chủ Hà Ánh Phượng đích thân thử thách kiếm pháp: Thấu hiểu chuỗi thức ăn, cân bằng sinh thái rừng ngập mặn và rạn san hô, đạt cảnh giới Thiên Nhân Hợp Nhất.',
    bossName: 'Hắc Ma Tuyệt Diệt Chuỗi Sinh Mệnh',
    bossTitle: 'Đại Hộ Pháp Độc Hóa Sinh Quyển',
    bossHp: 135,
    xpReward: 185,
    readingPassage: {
      title: 'Biodiversity Hotspots: The Delicate Equilibrium of Earth’s Web of Life',
      topic: 'Bảo vệ hệ sinh thái, chuỗi thức ăn và đa dạng sinh học toàn cầu',
      fullText: `An ecosystem encompasses an intricate network of living organisms—plants, animals, fungi, and microbes—interacting harmoniously with non-living elements such as soil, water, and sunlight. In vital ecosystems such as the Mekong Delta mangrove biomes and tropical rainforests, every organism occupies a specific ecological niche.\n\nDisrupting even a single keystone species through deforestation, overhunting, or chemical runoff triggers catastrophic trophic cascades. For instance, eliminating apex predators unleashes unchecked herbivore populations that strip vegetation bare, precipitating severe soil erosion and watershed loss. Safeguarding biological equilibrium is not a sentimental hobby; it is a prerequisite for human civilization’s survival.`,
      keyTakeaway: 'Hệ sinh thái là một mạng lưới tương hỗ phức tạp; bảo vệ các loài sinh vật chủ chốt chính là bảo vệ nguồn sống của nhân loại.',
      vocabularyHighlights: ['ecosystem', 'biodiversity', 'food chain', 'keystone species', 'deforestation']
    },
    vocabulary: [
      {
        id: 'v11-10-1',
        word: 'ecosystem',
        ipa: '/ˈiːkəʊsɪstəm/',
        meaningVi: 'hệ sinh thái',
        partOfSpeech: 'noun',
        collocation: 'delicate marine and forest ecosystems',
        example: 'Mangrove swamps form a protective ecosystem shielding coastlines from typhoons.',
        synonyms: ['ecological community', 'biome'],
        antonyms: ['sterile environment']
      },
      {
        id: 'v11-10-2',
        word: 'biodiversity',
        ipa: '/ˌbaɪəʊdaɪˈvɜːsəti/',
        meaningVi: 'sự đa dạng sinh học',
        partOfSpeech: 'noun',
        collocation: 'hotspot of global biodiversity',
        example: 'Tropical rainforests house more than half of the planet’s terrestrial biodiversity.',
        synonyms: ['biological variety', 'species richness'],
        antonyms: ['monoculture', 'biological uniformity']
      },
      {
        id: 'v11-10-3',
        word: 'food chain',
        ipa: '/ˈfuːd tʃeɪn/',
        meaningVi: 'chuỗi thức ăn sinh thái',
        partOfSpeech: 'noun phrase',
        collocation: 'top of the food chain',
        example: 'Plankton forms the foundational base of the aquatic food chain.',
        synonyms: ['trophic web', 'feeding network'],
        antonyms: ['isolated species']
      },
      {
        id: 'v11-10-4',
        word: 'keystone species',
        ipa: '/ˈkiːstəʊn ˈspiːʃiːz/',
        meaningVi: 'loài chủ chốt quyết định sự tồn vong của hệ sinh thái',
        partOfSpeech: 'noun phrase',
        collocation: 'protect keystone species',
        example: 'Sea otters act as a keystone species keeping kelp forest ecosystems healthy.',
        synonyms: ['crucial indicator species'],
        antonyms: ['peripheral species']
      },
      {
        id: 'v11-10-5',
        word: 'deforestation',
        ipa: '/diːˌfɒrɪˈsteɪʃn/',
        meaningVi: 'nạn phá rừng, triệt hạ rừng đầu nguồn',
        partOfSpeech: 'noun',
        collocation: 'halt illegal deforestation',
        example: 'Rampant deforestation leads to irreversible topsoil erosion and devastating flash floods.',
        synonyms: ['forest clearance', 'logging destruction'],
        antonyms: ['afforestation', 'reforestation']
      },
      {
        id: 'v11-10-6',
        word: 'equilibrium',
        ipa: '/ˌiːkwɪˈlɪbriəm/',
        meaningVi: 'trạng thái cân bằng sinh thái hoàn hảo',
        partOfSpeech: 'noun',
        collocation: 'maintain ecological equilibrium',
        example: 'Nature possesses a marvelous capacity to maintain its own equilibrium.',
        synonyms: ['balance', 'stability', 'homeostasis'],
        antonyms: ['imbalance', 'disproportion', 'chaos']
      },
      {
        id: 'v11-10-7',
        word: 'habitat destruction',
        ipa: '/ˈhæbɪtæt dɪˈstrʌkʃn/',
        meaningVi: 'sự phá hủy môi trường sống tự nhiên',
        partOfSpeech: 'noun phrase',
        collocation: 'accelerate habitat destruction',
        example: 'Urban sprawl and mining accelerate habitat destruction for endangered gibbons.',
        synonyms: ['habitat fragmentation', 'ruin of living grounds'],
        antonyms: ['habitat restoration']
      },
      {
        id: 'v11-10-8',
        word: 'extinction',
        ipa: '/ɪkˈstɪŋkʃn/',
        meaningVi: 'sự tuyệt chủng vĩnh viễn',
        partOfSpeech: 'noun',
        collocation: 'mass extinction event',
        example: 'Biologists caution that humanity is inducing the planet’s sixth mass extinction.',
        synonyms: ['complete disappearance', 'die-out'],
        antonyms: ['flourishing', 'proliferation']
      },
      {
        id: 'v11-10-9',
        word: 'organism',
        ipa: '/ˈɔːɡənɪzəm/',
        meaningVi: 'sinh vật sống (động thực vật, vi khuẩn)',
        partOfSpeech: 'noun',
        collocation: 'microscopic living organisms',
        example: 'Deep-sea hydrothermal vents nourish unique organisms thriving without sunlight.',
        synonyms: ['living entity', 'creature'],
        antonyms: ['inanimate object']
      },
      {
        id: 'v11-10-10',
        word: 'conserve',
        ipa: '/kənˈsɜːv/',
        meaningVi: 'bảo tồn, gìn giữ nguồn tài nguyên quý giá',
        partOfSpeech: 'verb',
        collocation: 'conserve natural water basins',
        example: 'National biospheres are designated to conserve rare gene pools for the future.',
        synonyms: ['preserve', 'protect', 'safeguard'],
        antonyms: ['exploit', 'squander', 'deplete']
      }
    ],
    practice: [
      {
        id: 'p11-10-1',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'Tropical rainforests are renowned for their extraordinary ______, housing millions of species.',
        options: ['biodiversity', 'monotony', 'pollution', 'silence'],
        correctAnswer: 'biodiversity',
        explanation: '"Biodiversity" là sự phong phú đa dạng sinh học của muôn loài.'
      },
      {
        id: 'p11-10-2',
        type: 'synonym',
        category: 'synonym',
        prompt: 'Tìm từ ĐỒNG NGHĨA với "EQUILIBRIUM": "Predators and prey maintain ecological equilibrium."',
        options: ['balance and harmony', 'turmoil', 'extinction', 'drought'],
        correctAnswer: 'balance and harmony',
        explanation: '"Equilibrium" (trạng thái cân bằng) đồng nghĩa với "balance and harmony".'
      },
      {
        id: 'p11-10-3',
        type: 'antonym',
        category: 'antonym',
        prompt: 'Tìm từ TRÁI NGHĨA với "DEFORESTATION": "The community launched a deforestation prevention drive."',
        options: ['reforestation', 'logging', 'clearance', 'timber felling'],
        correctAnswer: 'reforestation',
        explanation: '"Deforestation" (phá rừng) trái nghĩa với "reforestation" (trồng lại rừng).'
      },
      {
        id: 'p11-10-4',
        type: 'collocation',
        category: 'collocation',
        prompt: 'Loss of a single ______ species can cause an entire ecosystem to collapse.',
        options: ['keystone', 'doorstep', 'window', 'chimney'],
        correctAnswer: 'keystone',
        explanation: '"Keystone species" là thuật ngữ sinh học chỉ loài chủ chốt.'
      },
      {
        id: 'p11-10-5',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'In a marine ______, algae convert solar energy into nutrients for tiny krill.',
        options: ['food chain', 'metal cage', 'concrete wall', 'plastic bin'],
        correctAnswer: 'food chain',
        explanation: '"Food chain" là chuỗi thức ăn sinh học tự nhiên.'
      },
      {
        id: 'p11-10-6',
        type: 'multiple-choice',
        category: 'vocabulary',
        prompt: 'We must strictly ______ fresh underground water reserves to prepare for severe droughts.',
        options: ['conserve', 'contaminate', 'exhaust', 'squander'],
        correctAnswer: 'conserve',
        explanation: '"Conserve" là bảo tồn, gìn giữ cẩn thận.'
      },
      {
        id: 'p11-10-7',
        type: 'reading-comprehension',
        category: 'reading',
        passageExcerpt: 'For instance, eliminating apex predators unleashes unchecked herbivore populations that strip vegetation bare, precipitating severe soil erosion and watershed loss.',
        prompt: 'Hậu quả của việc tiêu diệt các loài thú săn mồi đỉnh cao (apex predators) là gì?',
        options: [
          'Động vật ăn cỏ bùng phát phá sạch thảm thực vật, gây xói mòn đất và cạn kiệt nguồn nước',
          'Rừng tự động xanh tốt hơn gấp mười lần',
          'Lũ lụt và hạn hán biến mất hoàn toàn',
          'Đất đai trở nên màu mỡ hơn mà không cần cây cối'
        ],
        correctAnswer: 'Động vật ăn cỏ bùng phát phá sạch thảm thực vật, gây xói mòn đất và cạn kiệt nguồn nước',
        explanation: 'Đoạn trích nêu rõ: "unleashes unchecked herbivore populations that strip vegetation bare, precipitating severe soil erosion and watershed loss".'
      }
    ],
    bossQuestions: [
      {
        id: 'b11-10-1',
        question: 'Tại sao bảo tồn hệ sinh thái lại là điều kiện sống còn của chính con người?',
        options: [
          'Vì hệ sinh thái cung cấp oxy, nước ngọt, đất màu, thức ăn và điều hòa khí hậu toàn cầu',
          'Vì con người có thể sống hoàn toàn độc lập mà không cần thực vật hay động vật',
          'Vì động vật có thể tự bay vào không gian sống',
          'Vì công nghệ nhân tạo có thể thay thế 100% tự nhiên ngay ngày mai'
        ],
        correctAnswer: 0,
        damage: 30,
        explanation: 'Hệ sinh thái duy trì không khí sạch, nước ngọt và điều hòa sinh quyển cho loài người.'
      },
      {
        id: 'b11-10-2',
        question: 'Tìm từ ĐỒNG NGHĨA CẤP CAO của "BIODIVERSITY DEPLETION":',
        options: ['catastrophic loss of species diversity', 'abundant ecosystem bloom', 'healthy afforestation', 'genetic resilience'],
        correctAnswer: 0,
        damage: 25,
        explanation: '"Catastrophic loss of species diversity" đồng nghĩa với sự suy giảm đa dạng sinh học nghiêm trọng.'
      },
      {
        id: 'b11-10-3',
        question: 'Khái niệm "TROPHIC CASCADE" trong sinh thái học miêu tả hiện tượng gì?',
        options: [
          'Hiệu ứng dây chuyền sụp đổ xuyên suốt các bậc dinh dưỡng khi một loài chủ chốt bị suy giảm',
          'Một cơn bão lớn ngoài biển khơi',
          'Việc một cái cây mọc thêm nhiều lá xanh',
          'Dòng nước chảy qua đập thủy điện'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Trophic cascade là phản ứng dây chuyền tác động qua lại giữa các tầng dinh dưỡng trong chuỗi thức ăn.'
      },
      {
        id: 'b11-10-4',
        question: 'Hành động thiết thực nào bảo vệ hệ sinh thái rừng ngập mặn Việt Nam?',
        options: [
          'Stopping illegal shrimp farming clearcutting, planting Avicennia and Rhizophora trees',
          'Dumping chemical pesticides into canals',
          'Building concrete seawalls destroying all mangroves',
          'Hunting all migratory water birds'
        ],
        correctAnswer: 0,
        damage: 25,
        explanation: 'Trồng cây đước, cây mắm và ngăn chặn phá rừng nuôi tôm trái phép giúp hồi sinh rừng ngập mặn.'
      }
    ]
  }
];
