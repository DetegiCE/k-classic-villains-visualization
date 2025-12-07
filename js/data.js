// Sample data for 33 villains from classical Korean literature
const villainsData = [
    {
        id: 1,
        name: "뺑덕어멈",
        work: "심청전",
        description: "생긴 모양을 볼작시면 말총 같은 머리털은 하늘을 가르치고, 됫박 이마에 홰눈썹에 우먹눈, 주먹코요. 메주 볼, 송곳턱에 입은 크고, 입술부터 큰 궤문을 열어논 듯, 써래 이 드문드문. 말총은 매우 강하고 질기고 뻣뻣해서 선비들이 쓰는 갓, 망건 등의 소재다. 뺑덕어멈의 모발은 말총처럼 억세고 뻣뻣하여 하늘로 치솟은 형태이다. 됫박은 바가지를 뜻하는 말로서 바가지를 엎어 놓은 듯이 생긴 짱구형 이마를 말한다. 눈썹은 새벽닭이 홰를 치듯이, 억세고 털이 곤두 서 있는 모양새다. 서양인처럼 움퍽 들어간 눈을 우리말로 우먹눈이라고 한다. 주먹코에 얼굴의 뺨은 못생긴 메주 모양으로 울퉁불퉁하다. 턱은 송곳처럼 뾰족하고 입술은 두껍고 궤짝 문처럼 헤벌어졌다. 또한 농기구처럼 치아 사이가 벌어진 모습이다.\n손질 생긴 뽄을 보면 솥뚜껑을 엎어논 듯, 수통다리, 발 맵시는 어찌됐건 신발은 짐척으로 자 가옷이 넉넉해야 겨우 신게 되는구나. 근육이 붙은 알통형 다리를 수통다리라고 한다. 판소리의 묘사대로 뺑덕어멈은 손발이 매우 큰 특징을 갖고 있다. 특히 신발은 한자 반이 넘는 사이즈로 대략 45㎝가 넘는 발이다. 현대의 신발 사이즈로 비교해 보면, 발이 27㎝ 정도라면 신발 사이즈는 270㎜ 정도다. 과장이 섞였다 해도, 뺑덕어멈은 남성처럼 큰 발 사이즈라는 설명이다.",
        source: "홍성민, \"나쁜 그녀, 심청가에 나오는 ‘뺑덕어멈’의 관상은?\", <이코노믹 리뷰>, 2025.06.25., https://www.econovill.com/news/articleView.html?idxno=250085",
        nouns: ['닭', '짐척', '뜻', '알통', '발', '질', '홰', '다리', '메주', '듯이', '모양새', '선비', '농기구', '옷', '엎어논', '바가지', '현대', '볼', '궤문', '묘사', '갓', '과장', '자', '모습', '말', '처럼', '대략', '턱', '얼굴', '뚜껑', '라면', '머리털', '신발', '남성', '논', '형태', '눈', '털', '설명', '매우', '소재', '또한', '특징', '작시', '뺑덕어멈', '헤', '치아', '정도', '맵시', '해도', '눈썹', '망건', '입술', '송곳', '기고', '판소리', '모양', '짱구형', '궤짝', '이', '솥', '뺨', '사이즈', '손발', '말총', '서양인', '반', '비교', '우리말', '등', '주먹코', '듯', '모발', '수통', '어찌', '엎어', '됫박', '문', '뽄', '손질', '근육', '사이', '겨우', '한자', '하늘', '곤', '말로', '새벽', '이마'],
        adjectives: ['억세다', '울퉁불퉁하다', '두껍다', '있다', '넉넉하다', '같다', '뻣뻣하다', '강하다'],
        sentiment: {
            disgust: 99.98920,
            anger: 0.00374,
            fear: 0.00194,
            surprise: 0.00183,
            happiness: 0.00140,
            sadness: 0.00100,
            neutral: 0.00089
        },
        sentimentClass: "negative",
        images: ["img/01_classic/01.png", "img/02_modern/01.png"]
    },
    {
        id: 2,
        name: "소교완",
        work: "완월회맹연",
        description: "막내딸 교완은 15세였는데, 타고난 자질이 탁월하여 빛나고 예쁜 모습은 천고를 돌아봐도 다시없을 정도였다.  신부의 화사한 미모가 만고에 빼어나 목석같은 마음이라도 꿈틀거리게 할 만한 빛이 있었다.  신부의 자질이 특별하여 바로 월궁 먼 자손이 뚝 떨어진 것 같았다. 풍성한 머리 모양은 아리땁고, 눈썹은 가늘고도 짙었으며, 앵두 같은 입술은 아름답고 눈길을 돌리기 아까울 정도였다. 한 줌 가는 허리에 빼어난 치장은 가볍게 부치는 부채와 어울리고 비단 치맛자락과 맞춤한 것이, 시인 송옥에게 묘사하라 해도 다 그려내지 못하고 또 조식에게 글로 지어보라 해도 써내지 못했을 것이다.  모습은 자연스럽고 눈길은 담담하여 아는 듯 모르는 듯 말이 없는 가운데 강렬한 기운이 자연스레 감돌았다.  예쁜 얼굴에 아름다운 빛이 볼수록 빼어나 방 안이 훤하니, 촛불이 빛을 잃고 가을 달이 모양 없다고 부끄러워할 정도였다.  꽃 같은 신부 현란한 미인 6척 단신의 작은 몸에다 하얗고 부드럽고 섬약하지만 연꽃 같은 두 뺨  소교완은 광채 나는 눈썹에 슬픈 빛을 두르고 별같이 밝은 두 눈에 / 옥 같은 용모가 적막하고 꽃 같은 얼굴이 수척하여 배꽃이 봄비를 맞아 거센 바람에 떨어지고 가을 달이 시름겨워 안개를 띠고 있는 듯했다. 아름다운 옥처럼 남전에서 빛남을 자랑하던 모습은 고달픔에 수척해지고, 가는 허리는 헐렁해져 표연히 신선이 되어 날아갈 듯 (중략) 외모마저 빼어나게 고와서 볼수록 아름답고 대할수록 정신이 어리었다.  온화하고 순한 거동은 봄날의 복숭아꽃이 평화로이 춘풍을 띤 듯하고, 곱고 붉은 입술과 희고 깨끗한 치아며 빼어난 눈썹과 별 같은 두 눈은 산 그림자가 강물에 떨어진 듯하며 옥 같은 얼굴과 온화한 인품은 사람을 놀라게 하고, 갖은 아름다움은 세상에 다시없는 고운 자태를 아우르고 있었다. 날렵한 가는 허리와 꽃 같은 얼굴에다, 초롱초롱한 눈길에는 총명함이 드러나고 기상이 상쾌하여 책략이 흘러넘쳤다. 진실로 치마 입은 진평이요 비녀 꽃은 장자방이었다. 소교완의 아리땁고 가녀린 모습은 물기를 머금은 난초 같고 보배로운 구슬이 상서로운 기운을 뿜는 듯했다. 어느새 삼년상을 마치고 오늘 부부가 예전처럼 마주했으나 사정이 달라진 것을 슬퍼하여 비통한 빛이 멀리 전해지니 아름다운 모습이 더욱 남달랐다. 구슬 같은 눈물이 맺힌 채로 천천히 가는 허리를 굽혔다가 머리를 숙여 자리에 앉으니, 흰 학이 가벼이 날개를 펴고 구름 밖으로 나는 듯했다. 조식이 이른바 '학이 멀리 아득해지며 두 날개를 펴고 날아가네.'라고 한 것은 바로 이를 두고 이른 것이었다.",
        source: "완월회맹연 번역연구모임,『(현대역)완월회맹연 1』, 휴머니스트, 2022, 126-129쪽, 132쪽, 151쪽, 160쪽, 296-297쪽 / 완월회맹연 번역연구모임,『(현대역)완월회맹연 2』, 휴머니스트, 2022, 29쪽, 40쪽.",
        nouns: ['부채', '자랑', '몸', '띠', '표', '용모', '가운데', '그림자', '자리', '사정', '달이', '연꽃', '채', '고', '오늘', '인품', '진평', '거', '책략', '교완', '천고', '꽃', '머리', '구슬', '눈물', '춘풍', '묘사', '시인', '예전', '배꽃', '뿜는', '기운', '미모', '조식', '치맛', '소교완', '금은', '말', '모습', '봄날', '자태', '사람', '멀리', '두', '자질', '만', '얼굴', '척', '훤하', '학', '부부', '뚝', '별', '띤', '중략', '맺힌', '봄비', '목석', '자손', '눈', '기상', '월궁', '미인', '허리', '외모', '어보', '자락', '송옥', '거동', '치마', '막내딸', '밖', '장자방', '시름', '또', '치아', '초롱초롱', '머', '구름', '옥', '정도', '갖은', '남전', '해도', '눈썹', '맞춤', '입술', '촛불', '비녀', '삼년상', '앵두', '움', '상서', '곱', '모양', '가을', '강물', '뺨', '신선', '못', '줌', '빛', '광채', '비단', '마음', '눈길', '듯', '거리', '꿈틀', '세상', '나', '것', '더욱', '안이', '난초', '마주', '안개', '날개', '산', '바로', '복숭아꽃', '신부', '단신', '만고', '마치', '치장', '방', '물기', '바람', '정신', '글'],
        adjectives: ['특별하다', '아리땁다', '강렬하다', '보배롭다', '작다', '어느새다', '날렵하다', '헐렁하다', '가녀리다', '탁월하다', '평화롭다', '총명하다', '부드럽다', '넘치다', '현란하다', '예쁘다', '멀다', '섬약하다', '비통하다', '다시없다', '빼어나다', '슬프다', '가늘다', '부끄럽다', '희다', '성하다', '가볍다', '있다', '연하다', '아득해지다', '상쾌하다', '짙다', '붉다', '남다르다', '없다', '자연스럽다', '적막하다', '아름답다', '곱다', '온화하다', '순하다', '같다', '담담하다', '수척하다', '고달프다', '깨끗하다', '하얗다', '아깝다', '화사하다'],
        sentiment: {
            disgust: 0.00093,
            anger: 0.00013,
            fear: 0.00137,
            surprise: 0.00034,
            happiness: 99.99605,
            sadness: 0.00029,
            neutral: 0.00088
        },
        sentimentClass: "positive",
        images: ["img/01_classic/02.png", "img/02_modern/02_01.png", "img/02_modern/02_02.png", "img/02_modern/02_03.png"]
    },
    {
        id: 3,
        name: "허씨",
        work: "장화 홍련전",
        description: "두 볼은 한 자가 넘고, 눈은 퉁방울 같고, 코는 질병 같고, 입은 메기 같고, 머리털은 돼지털 같고, 키는 장승만 하고, 소리는 이리 소리 같고, 허리는 두 아름이나 되는 것이 게다가 곰배팔이요, 수종다리에 쌍언청이를 겸하였고, 그 주둥이를 썰어 내면 열 사발은 되고, 얽기는 콩멍석 같으니 그 형상은 차마 바고 보기 어려운 데다가",
        source: "다빈치맵, \"장화홍련전\", http://www.davincimap.co.kr/davBase/Source/davSource.jsp?Job=Body&SourID=SOUR001970",
        nouns: ['소리', '겸', '두', '장승', '자가', '데', '바고', '것', '방울', '그', '머리털', '메기', '열', '질병', '차마', '눈', '털', '퉁', '게다가', '허리', '멍석', '형상', '주둥이', '콩', '곰배', '돼지', '쌍', '종다리', '사발', '볼', '다가', '팔이', '코', '아름', '내면', '보기', '키', '언청이'],
        adjectives: ['어렵다', '같다'],
        sentiment: {
            disgust: 99.92662,
            anger: 0.06116,
            fear: 0.00521,
            surprise: 0.00098,
            happiness: 0.00318,
            sadness: 0.00222,
            neutral: 0.00062
        },
        sentimentClass: "negative",
        images: ["img/01_classic/03.png", "img/02_modern/03.png"]
    },
    {
        id: 4,
        name: "박씨",
        work: "현몽쌍룡기",
        description: "세상에 비교할 곳 없는 미인",
        source: "조혜란,「악행(惡行)의 서사화 방식과 진지성의 문제 —<현몽쌍룡기>를 중심으로—」, 『한국고전연구』 제23권, 한국고전연구학회, 2011년, 9쪽.",
        nouns: ['세상', '미인', '비교', '곳'],
        adjectives: ["없다"],
        sentiment: {
            disgust: 0.62638,
            anger: 0.69225,
            fear: 0.01936,
            surprise: 54.62804,
            happiness: 13.07742,
            sadness: 0.04316,
            neutral: 30.91339
        },
        sentimentClass: "positive",
        images: ["img/01_classic/04.png", "img/02_modern/04.png"]
    },
    {
        id: 5,
        name: "옥단춘",
        work: "옥단춘전",
        description: "외모는 아름다우나 눈빛이 차갑고 미소에 냉소가 섞여 있어 기이한 분위기를 자아낸다.",
        source: "옥단춘전, 제2장",
        nouns: ["외모", "눈빛", "미소", "냉소", "분위기"],
        adjectives: ["아름답다", "차갑다", "섞이다", "기이하다"],
        sentiment: {
            disgust: 15,
            anger: 10,
            fear: 25,
            surprise: 15,
            happiness: 5,
            sadness: 15,
            neutral: 15
        },
        sentimentClass: "neutral",
        images: ["https://via.placeholder.com/400x400/764ba2/ffffff?text=옥단춘", "https://via.placeholder.com/400x400/667eea/ffffff?text=옥단춘+2"]
    },
    {
        id: 6,
        name: "정한담",
        work: "정한담전",
        description: "키가 크고 마른 체격에 눈이 움푹 들어가 있으며, 피부가 거칠고 손톱이 길다.",
        source: "정한담전, 제4장",
        nouns: ["키", "체격", "눈", "피부", "손톱"],
        adjectives: ["크다", "마르다", "움푹하다", "거칠다", "길다"],
        sentiment: {
            disgust: 28,
            anger: 20,
            fear: 32,
            surprise: 8,
            happiness: 0,
            sadness: 7,
            neutral: 5
        },
        sentimentClass: "negative",
        images: ["https://via.placeholder.com/400x400/f093fb/ffffff?text=정한담", "https://via.placeholder.com/400x400/f5576c/ffffff?text=정한담+2"]
    },
    {
        id: 7,
        name: "배비장",
        work: "배비장전",
        description: "통통한 얼굴에 작은 눈과 큰 코를 가졌으며, 웃을 때 입이 크게 벌어진다.",
        source: "배비장전, 제1장",
        nouns: ["얼굴", "눈", "코", "입"],
        adjectives: ["통통하다", "작다", "크다", "벌어지다"],
        sentiment: {
            disgust: 20,
            anger: 15,
            fear: 10,
            surprise: 10,
            happiness: 10,
            sadness: 5,
            neutral: 30
        },
        sentimentClass: "neutral",
        images: ["https://via.placeholder.com/400x400/667eea/ffffff?text=배비장", "https://via.placeholder.com/400x400/764ba2/ffffff?text=배비장+2"]
    },
    {
        id: 8,
        name: "운영",
        work: "운영전",
        description: "청순한 외모이나 눈매가 날카롭고 입술이 얇아 냉정한 인상을 준다.",
        source: "운영전, 제6장",
        nouns: ["외모", "눈매", "입술", "인상"],
        adjectives: ["청순하다", "날카롭다", "얇다", "냉정하다"],
        sentiment: {
            disgust: 18,
            anger: 22,
            fear: 20,
            surprise: 12,
            happiness: 3,
            sadness: 15,
            neutral: 10
        },
        sentimentClass: "negative",
        images: ["https://via.placeholder.com/400x400/f5576c/ffffff?text=운영", "https://via.placeholder.com/400x400/f093fb/ffffff?text=운영+2"]
    },
    {
        id: 9,
        name: "김진사",
        work: "구운몽",
        description: "중년의 모습에 얼굴이 붉고 수염이 덥수룩하며, 눈빛이 흐리고 음흉해 보인다.",
        source: "구운몽, 제9장",
        nouns: ["모습", "얼굴", "수염", "눈빛"],
        adjectives: ["붉다", "덥수룩하다", "흐리다", "음흉하다"],
        sentiment: {
            disgust: 32,
            anger: 28,
            fear: 18,
            surprise: 7,
            happiness: 0,
            sadness: 10,
            neutral: 5
        },
        sentimentClass: "negative",
        images: ["https://via.placeholder.com/400x400/764ba2/ffffff?text=김진사", "https://via.placeholder.com/400x400/667eea/ffffff?text=김진사+2"]
    },
    {
        id: 10,
        name: "최씨",
        work: "최척전",
        description: "가늘고 긴 눈에 높은 광대뼈를 가졌으며, 입가에 약간의 수염이 있어 교활한 느낌이다.",
        source: "최척전, 제3장",
        nouns: ["눈", "광대뼈", "입가", "수염", "느낌"],
        adjectives: ["가늘다", "길다", "높다", "교활하다"],
        sentiment: {
            disgust: 26,
            anger: 24,
            fear: 22,
            surprise: 9,
            happiness: 0,
            sadness: 8,
            neutral: 11
        },
        sentimentClass: "negative",
        images: ["https://via.placeholder.com/400x400/f093fb/ffffff?text=최씨", "https://via.placeholder.com/400x400/f5576c/ffffff?text=최씨+2"]
    },
    {
        id: 11,
        name: "홍부인",
        work: "사씨남정기",
        description: "아름다운 용모이나 눈빛이 차갑고 미소가 가식적이며, 고개를 높이 든다.",
        source: "사씨남정기, 제5장",
        nouns: ["용모", "눈빛", "미소", "고개"],
        adjectives: ["아름답다", "차갑다", "가식적이다", "높다"],
        sentiment: {
            disgust: 22,
            anger: 20,
            fear: 15,
            surprise: 10,
            happiness: 5,
            sadness: 18,
            neutral: 10
        },
        sentimentClass: "negative",
        images: ["https://via.placeholder.com/400x400/667eea/ffffff?text=홍부인", "https://via.placeholder.com/400x400/764ba2/ffffff?text=홍부인+2"]
    },
    {
        id: 12,
        name: "진봉사",
        work: "진봉사전",
        description: "눈이 작고 코가 낮으며, 입이 크고 턱이 뾰족하여 약삭빠른 인상이다.",
        source: "진봉사전, 제2장",
        nouns: ["눈", "코", "입", "턱", "인상"],
        adjectives: ["작다", "낮다", "크다", "뾰족하다", "약삭빠르다"],
        sentiment: {
            disgust: 25,
            anger: 18,
            fear: 17,
            surprise: 12,
            happiness: 8,
            sadness: 5,
            neutral: 15
        },
        sentimentClass: "negative",
        images: ["https://via.placeholder.com/400x400/f5576c/ffffff?text=진봉사", "https://via.placeholder.com/400x400/f093fb/ffffff?text=진봉사+2"]
    },
    {
        id: 13,
        name: "심청",
        work: "심청전",
        description: "가녀린 체구에 창백한 얼굴이며, 눈이 크고 깊어 슬픔이 가득하다.",
        source: "심청전, 제4장",
        nouns: ["체구", "얼굴", "눈", "슬픔"],
        adjectives: ["가녀리다", "창백하다", "크다", "깊다"],
        sentiment: {
            disgust: 5,
            anger: 3,
            fear: 10,
            surprise: 8,
            happiness: 2,
            sadness: 60,
            neutral: 12
        },
        sentimentClass: "negative",
        images: ["https://via.placeholder.com/400x400/764ba2/ffffff?text=심청", "https://via.placeholder.com/400x400/667eea/ffffff?text=심청+2"]
    },
    {
        id: 14,
        name: "이춘풍",
        work: "이춘풍전",
        description: "중간 키에 평범한 얼굴이나 눈빛이 불안하고 손발이 가늘다.",
        source: "이춘풍전, 제6장",
        nouns: ["키", "얼굴", "눈빛", "손발"],
        adjectives: ["중간이다", "평범하다", "불안하다", "가늘다"],
        sentiment: {
            disgust: 15,
            anger: 12,
            fear: 20,
            surprise: 15,
            happiness: 5,
            sadness: 18,
            neutral: 15
        },
        sentimentClass: "neutral",
        images: ["https://via.placeholder.com/400x400/f093fb/ffffff?text=이춘풍", "https://via.placeholder.com/400x400/f5576c/ffffff?text=이춘풍+2"]
    },
    {
        id: 15,
        name: "박씨",
        work: "박씨전",
        description: "못생긴 외모에 눈이 작고 코가 낮으며, 피부가 거칠고 머리카락이 성글다.",
        source: "박씨전, 제1장",
        nouns: ["외모", "눈", "코", "피부", "머리카락"],
        adjectives: ["못생기다", "작다", "낮다", "거칠다", "성글다"],
        sentiment: {
            disgust: 35,
            anger: 15,
            fear: 15,
            surprise: 10,
            happiness: 0,
            sadness: 20,
            neutral: 5
        },
        sentimentClass: "negative",
        images: ["https://via.placeholder.com/400x400/667eea/ffffff?text=박씨", "https://via.placeholder.com/400x400/764ba2/ffffff?text=박씨+2"]
    },
    {
        id: 16,
        name: "임경업",
        work: "임경업전",
        description: "강인한 체격에 각진 얼굴이며, 눈빛이 날카롭고 미간에 주름이 있다.",
        source: "임경업전, 제7장",
        nouns: ["체격", "얼굴", "눈빛", "미간", "주름"],
        adjectives: ["강인하다", "각지다", "날카롭다"],
        sentiment: {
            disgust: 10,
            anger: 35,
            fear: 20,
            surprise: 10,
            happiness: 5,
            sadness: 10,
            neutral: 10
        },
        sentimentClass: "negative",
        images: ["https://via.placeholder.com/400x400/f5576c/ffffff?text=임경업", "https://via.placeholder.com/400x400/f093fb/ffffff?text=임경업+2"]
    },
    {
        id: 17,
        name: "조웅",
        work: "조웅전",
        description: "호탕한 인상에 큰 눈과 넓은 이마를 가졌으며, 수염이 무성하다.",
        source: "조웅전, 제3장",
        nouns: ["인상", "눈", "이마", "수염"],
        adjectives: ["호탕하다", "크다", "넓다", "무성하다"],
        sentiment: {
            disgust: 8,
            anger: 25,
            fear: 15,
            surprise: 15,
            happiness: 15,
            sadness: 7,
            neutral: 15
        },
        sentimentClass: "neutral",
        images: ["https://via.placeholder.com/400x400/764ba2/ffffff?text=조웅", "https://via.placeholder.com/400x400/667eea/ffffff?text=조웅+2"]
    },
    {
        id: 18,
        name: "유충렬",
        work: "유충렬전",
        description: "준수한 외모에 맑은 눈빛이나, 차가운 표정으로 감정이 드러나지 않는다.",
        source: "유충렬전, 제5장",
        nouns: ["외모", "눈빛", "표정", "감정"],
        adjectives: ["준수하다", "맑다", "차갑다", "드러나다"],
        sentiment: {
            disgust: 12,
            anger: 15,
            fear: 18,
            surprise: 12,
            happiness: 8,
            sadness: 15,
            neutral: 20
        },
        sentimentClass: "neutral",
        images: ["https://via.placeholder.com/400x400/f093fb/ffffff?text=유충렬", "https://via.placeholder.com/400x400/f5576c/ffffff?text=유충렬+2"]
    },
    {
        id: 19,
        name: "심학규",
        work: "심학규전",
        description: "마른 체구에 긴 얼굴이며, 눈이 크고 코가 높아 독특한 분위기를 풍긴다.",
        source: "심학규전, 제2장",
        nouns: ["체구", "얼굴", "눈", "코", "분위기"],
        adjectives: ["마르다", "길다", "크다", "높다", "독특하다"],
        sentiment: {
            disgust: 20,
            anger: 18,
            fear: 22,
            surprise: 15,
            happiness: 5,
            sadness: 10,
            neutral: 10
        },
        sentimentClass: "negative",
        images: ["https://via.placeholder.com/400x400/667eea/ffffff?text=심학규", "https://via.placeholder.com/400x400/764ba2/ffffff?text=심학규+2"]
    },
    {
        id: 20,
        name: "허균",
        work: "허생전",
        description: "보통 체격에 평범한 얼굴이나, 눈빛이 예리하고 입매가 굳어있다.",
        source: "허생전, 제4장",
        nouns: ["체격", "얼굴", "눈빛", "입매"],
        adjectives: ["보통이다", "평범하다", "예리하다", "굳다"],
        sentiment: {
            disgust: 15,
            anger: 22,
            fear: 18,
            surprise: 10,
            happiness: 5,
            sadness: 15,
            neutral: 15
        },
        sentimentClass: "negative",
        images: ["https://via.placeholder.com/400x400/f5576c/ffffff?text=허균", "https://via.placeholder.com/400x400/f093fb/ffffff?text=허균+2"]
    },
    {
        id: 21,
        name: "신관호",
        work: "신관호전",
        description: "건장한 체격에 검게 그을린 피부이며, 눈매가 사납고 턱이 각졌다.",
        source: "신관호전, 제6장",
        nouns: ["체격", "피부", "눈매", "턱"],
        adjectives: ["건장하다", "검다", "그을리다", "사납다", "각지다"],
        sentiment: {
            disgust: 30,
            anger: 35,
            fear: 18,
            surprise: 7,
            happiness: 0,
            sadness: 5,
            neutral: 5
        },
        sentimentClass: "negative",
        images: ["https://via.placeholder.com/400x400/764ba2/ffffff?text=신관호", "https://via.placeholder.com/400x400/667eea/ffffff?text=신관호+2"]
    },
    {
        id: 22,
        name: "김원전",
        work: "김원전",
        description: "왜소한 체구에 작은 눈과 낮은 코를 가졌으며, 웃는 모습이 비굴해 보인다.",
        source: "김원전, 제3장",
        nouns: ["체구", "눈", "코", "모습"],
        adjectives: ["왜소하다", "작다", "낮다", "비굴하다"],
        sentiment: {
            disgust: 32,
            anger: 20,
            fear: 15,
            surprise: 8,
            happiness: 0,
            sadness: 20,
            neutral: 5
        },
        sentimentClass: "negative",
        images: ["https://via.placeholder.com/400x400/f093fb/ffffff?text=김원전", "https://via.placeholder.com/400x400/f5576c/ffffff?text=김원전+2"]
    },
    {
        id: 23,
        name: "이생",
        work: "이생규장전",
        description: "단정한 외모에 깔끔한 인상이나, 눈빛에 그늘이 져 있어 우울해 보인다.",
        source: "이생규장전, 제5장",
        nouns: ["외모", "인상", "눈빛", "그늘"],
        adjectives: ["단정하다", "깔끔하다", "우울하다"],
        sentiment: {
            disgust: 10,
            anger: 8,
            fear: 15,
            surprise: 10,
            happiness: 3,
            sadness: 40,
            neutral: 14
        },
        sentimentClass: "negative",
        images: ["https://via.placeholder.com/400x400/667eea/ffffff?text=이생", "https://via.placeholder.com/400x400/764ba2/ffffff?text=이생+2"]
    },
    {
        id: 24,
        name: "최치원",
        work: "최치원전",
        description: "수려한 외모에 눈매가 부드러우나, 입가에 씁쓸한 미소가 걸려있다.",
        source: "최치원전, 제2장",
        nouns: ["외모", "눈매", "입가", "미소"],
        adjectives: ["수려하다", "부드럽다", "씁쓸하다"],
        sentiment: {
            disgust: 8,
            anger: 10,
            fear: 12,
            surprise: 15,
            happiness: 10,
            sadness: 30,
            neutral: 15
        },
        sentimentClass: "neutral",
        images: ["https://via.placeholder.com/400x400/f5576c/ffffff?text=최치원", "https://via.placeholder.com/400x400/f093fb/ffffff?text=최치원+2"]
    },
    {
        id: 25,
        name: "강감찬",
        work: "강감찬전",
        description: "작은 체구에 둥근 얼굴이며, 눈이 작고 밝아 온화한 인상이다.",
        source: "강감찬전, 제4장",
        nouns: ["체구", "얼굴", "눈", "인상"],
        adjectives: ["작다", "둥글다", "밝다", "온화하다"],
        sentiment: {
            disgust: 5,
            anger: 5,
            fear: 8,
            surprise: 15,
            happiness: 40,
            sadness: 7,
            neutral: 20
        },
        sentimentClass: "positive",
        images: ["https://via.placeholder.com/400x400/764ba2/ffffff?text=강감찬", "https://via.placeholder.com/400x400/667eea/ffffff?text=강감찬+2"]
    },
    {
        id: 26,
        name: "선녀",
        work: "선녀와나무꾼",
        description: "아름다운 용모에 빛나는 눈빛이며, 미소가 따뜻하고 목소리가 맑다.",
        source: "선녀와나무꾼, 제1장",
        nouns: ["용모", "눈빛", "미소", "목소리"],
        adjectives: ["아름답다", "빛나다", "따뜻하다", "맑다"],
        sentiment: {
            disgust: 0,
            anger: 0,
            fear: 3,
            surprise: 20,
            happiness: 60,
            sadness: 2,
            neutral: 15
        },
        sentimentClass: "positive",
        images: ["https://via.placeholder.com/400x400/f093fb/ffffff?text=선녀", "https://via.placeholder.com/400x400/f5576c/ffffff?text=선녀+2"]
    },
    {
        id: 27,
        name: "궁녀",
        work: "궁녀전",
        description: "단아한 외모에 가느다란 눈썹이며, 입술이 작고 피부가 희다.",
        source: "궁녀전, 제3장",
        nouns: ["외모", "눈썹", "입술", "피부"],
        adjectives: ["단아하다", "가늘다", "작다", "희다"],
        sentiment: {
            disgust: 3,
            anger: 5,
            fear: 12,
            surprise: 18,
            happiness: 35,
            sadness: 12,
            neutral: 15
        },
        sentimentClass: "positive",
        images: ["https://via.placeholder.com/400x400/667eea/ffffff?text=궁녀", "https://via.placeholder.com/400x400/764ba2/ffffff?text=궁녀+2"]
    },
    {
        id: 28,
        name: "무사",
        work: "무사전",
        description: "우람한 체격에 거친 인상이며, 얼굴에 흉터가 있고 눈빛이 강렬하다.",
        source: "무사전, 제5장",
        nouns: ["체격", "인상", "얼굴", "흉터", "눈빛"],
        adjectives: ["우람하다", "거칠다", "강렬하다"],
        sentiment: {
            disgust: 18,
            anger: 30,
            fear: 25,
            surprise: 12,
            happiness: 5,
            sadness: 5,
            neutral: 5
        },
        sentimentClass: "negative",
        images: ["https://via.placeholder.com/400x400/f5576c/ffffff?text=무사", "https://via.placeholder.com/400x400/f093fb/ffffff?text=무사+2"]
    },
    {
        id: 29,
        name: "상인",
        work: "상인전",
        description: "중년의 모습에 배가 나왔으며, 눈이 작고 웃을 때 주름이 깊다.",
        source: "상인전, 제2장",
        nouns: ["모습", "배", "눈", "주름"],
        adjectives: ["나오다", "작다", "깊다"],
        sentiment: {
            disgust: 12,
            anger: 10,
            fear: 8,
            surprise: 15,
            happiness: 25,
            sadness: 10,
            neutral: 20
        },
        sentimentClass: "neutral",
        images: ["https://via.placeholder.com/400x400/764ba2/ffffff?text=상인", "https://via.placeholder.com/400x400/667eea/ffffff?text=상인+2"]
    },
    {
        id: 30,
        name: "기생",
        work: "기생전",
        description: "화려한 외모에 긴 머리카락이며, 눈이 크고 입술이 붉어 매혹적이다.",
        source: "기생전, 제4장",
        nouns: ["외모", "머리카락", "눈", "입술"],
        adjectives: ["화려하다", "길다", "크다", "붉다", "매혹적이다"],
        sentiment: {
            disgust: 5,
            anger: 8,
            fear: 10,
            surprise: 22,
            happiness: 35,
            sadness: 8,
            neutral: 12
        },
        sentimentClass: "positive",
        images: ["https://via.placeholder.com/400x400/f093fb/ffffff?text=기생", "https://via.placeholder.com/400x400/f5576c/ffffff?text=기생+2"]
    },
    {
        id: 31,
        name: "도적",
        work: "도적전",
        description: "험악한 인상에 눈빛이 번뜩이며, 턱수염이 거칠고 손이 크다.",
        source: "도적전, 제6장",
        nouns: ["인상", "눈빛", "턱수염", "손"],
        adjectives: ["험악하다", "번뜩이다", "거칠다", "크다"],
        sentiment: {
            disgust: 35,
            anger: 40,
            fear: 15,
            surprise: 5,
            happiness: 0,
            sadness: 3,
            neutral: 2
        },
        sentimentClass: "negative",
        images: ["img/test.jpg", "https://via.placeholder.com/400x400/764ba2/ffffff?text=도적+2"]
    },
    {
        id: 32,
        name: "악관리",
        work: "탐관오리전",
        description: "비대한 체격에 얼굴이 붉고, 눈이 작아 탐욕스러운 인상이다.",
        source: "탐관오리전, 제3장",
        nouns: ["체격", "얼굴", "눈", "인상"],
        adjectives: ["비대하다", "붉다", "작다", "탐욕스럽다"],
        sentiment: {
            disgust: 40,
            anger: 35,
            fear: 10,
            surprise: 5,
            happiness: 0,
            sadness: 5,
            neutral: 5
        },
        sentimentClass: "negative",
        images: ["https://via.placeholder.com/400x400/f5576c/ffffff?text=악관리", "https://via.placeholder.com/400x400/f093fb/ffffff?text=악관리+2"]
    },
    {
        id: 33,
        name: "마녀",
        work: "마녀전",
        description: "늙고 주름진 얼굴에 눈이 흐리며, 머리카락이 헝클어지고 손톱이 길다.",
        source: "마녀전, 제1장",
        nouns: ["얼굴", "눈", "머리카락", "손톱"],
        adjectives: ["늙다", "주름지다", "흐리다", "헝클어지다", "길다"],
        sentiment: {
            disgust: 38,
            anger: 20,
            fear: 30,
            surprise: 7,
            happiness: 0,
            sadness: 3,
            neutral: 2
        },
        sentimentClass: "negative",
        images: ["https://via.placeholder.com/400x400/764ba2/ffffff?text=마녀", "https://via.placeholder.com/400x400/667eea/ffffff?text=마녀+2"]
    }
];
