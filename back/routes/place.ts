const express = require('express');
const controller = require('../controllers/place.controller');
const { isLoggedIn } = require('../middlewares/Auth');

const router = express.Router();

// 이름으로 검색은 query string으로 name을 받아옴
/**
 * @swagger
 * /api/place/getByName:
 *  get:
 *    tags:
 *      - place
 *    summary : 이름에 의한 장소 검색
 *    description : Get 방식으로 이름에 의한 장소를 가져옵니다. 이름 중에 일부만 포함되도 검색이 되도록 했습니다. 이름을 포함하고 있는 모든 장소의 모든 정보를 배열에 담아 보냅니다. 모든 정보가 아니라 목록에서 render시 필요한 정보만 보내면 더 효율적일 것 같긴 한데, 디자인이 끝나면 작업해보겠습니다. 검색어 자동완성 구현을 원하면 다음을 https://velog.io/@shitaikoto/Node.js-Sequelize-Op 참고해서 구현해도 좋을 것 같습니다.
 *    parameters:
 *      - in : query
 *        name: name
 *        schema:
 *          type: string
 *        required: true
 *        description: 장소의 이름에 대한 정보입니다.
 *    responses:
 *      200:
 *        description : 장소 가져오기 성공. 없는 장소(빈 array)라도 200을 보냅니다.
 *      400:
 *        description : 장소 가져오기 실패.
 *
 */
router.get('/getByName', controller.getByName);
// 생성은 로그인이 필요한 작업, userId와 연결해야할듯

/**
 * @swagger
 * /api/place/create:
 *  post:
 *    tags:
 *      - place
 *    summary : 장소 생성입니다.
 *    description : Post 방식으로 장소를 생성합니다. login이 필요한 작업입니다. writer는 유저의 id를 받을 생각입니다.
 *    requestBody:
 *      description: 장소 데이터입니다.
 *      required: true
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            required:
 *              - address_location
 *              - address_exact
 *              - address_category
 *              - place_Name
 *              - place_category
 *              - place_category_detail
 *              - place_price
 *              - date_concept
 *            properties:
 *              address_location:
 *                type: number[]
 *                description: 위도 경도 좌표입니다, 배열 첫번째 요소에는 위도, 두번째 요소에는 경도를 넣어주세요
 *                example : [121.121, 108.108]
 *              address_exact:
 *                type: string
 *                description: 정확한 도로명 주소 또는 주소입니다.
 *                example : 서울 성북구 안암로 145
 *              address_category:
 *                type: string
 *                description: 장소가 어디에 속하는지에 대한 정보입니다. "혜화", "안암", "성신여대" 3개 중에 값을 선택해주세요.
 *                example : 혜화
 *              picture_link:
 *                type: string[]
 *                description: 사진에 대한 배열 정보입니다.
 *                example : ["a1%f2ds&11.png", "213fa2$fas.png"]
 *              place_Name:
 *                type: string
 *                description: 장소의 제목입니다.
 *                example : 인아최고 만화카페
 *              place_Time:
 *                type: string[]
 *                description: 장소의 운영 시간입니다. 배열의 첫 번쨰 요소에는 시작 시간, 두 번째 요소에는 마감 시간을 넣어주세요.
 *                example : ["9:00", "22:00"]
 *              place_phoneNum:
 *                type: string
 *                description: 장소의 전화번호입니다.
 *                example : 010-2251-8037
 *              naver_link:
 *                type: string
 *                description: 장소의 네이버 예약 링크입니다.
 *                example : https://booking.naver.com/booking/5/bizes/37972
 *              catch_table_link:
 *                type: string
 *                description: 장소의 캐치 테이블 링크입니다.
 *                example : https://app.catchtable.co.kr/ct/shop/mingles/review/248552
 *              insta_link:
 *                type: string
 *                description: 장소의 인스타 링크입니다.
 *                example : https://www.instagram.com/...
 *              place_hashtag:
 *                type: string[]
 *                description: 장소의 해시태그 목록입니다. 배열에 해시태그를 "#"은 떼어서 보내주세요.
 *                example : ["맛집", "안암"]
 *              place_category:
 *                type: string
 *                description: 장소의 대분류입니다. A는 카페, B는 음식점, C는 체험입니다.
 *                example : A
 *              place_category_detail:
 *                type: number
 *                description: 장소의 소분류입니다. 자세한 내용은 notion의 place table을 참고해주세요
 *                example : 3
 *              place_price:
 *                type: string
 *                description: 장소의 가격 분류입니다. notion에 있는 분류표에 따라 "free", "low", "mid", "high"로 책정할 예정입니다.
 *                example : mid
 *              scrab_count:
 *                type: number
 *                description: 장소의 스크랩 (좋아요) 개수입니다. 유저 정보에다 scrab한 장소의 id를 저장할 예정이라 number 정보만 저장해도 될 것 같습니다.
 *                example : 37
 *              date_concept:
 *                type: string
 *                description: 장소의 concept입니다. "동적", "비동적", "체험" 중에 넣어주세요
 *                example : 동적
 *              writer:
 *                type: number
 *                description: 장소를 작성한 사람의 id입니다. 현재 유저의 id를 보내주세요.
 *                example : 412
 *    responses:
 *      200:
 *        description : 생성 완료
 *      403:
 *        description : 필수인 정보가 입력되지 않았습니다.
 *
 */
router.post('/create', isLoggedIn, controller.createPlace);

// for typescript error : Cannot redeclare block-scoped variable 'express'.
export {};
module.exports = router;
