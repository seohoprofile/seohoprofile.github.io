// 갤러리 이미지 데이터
const galleryImages = {
    common: [
        'affectionate_embrace_user.jpg',
        'anguished_eyes_deep_thought.jpg',
        'annoyance_and_frustration.jpg',
        'annoyance.jpg',
        'back_hug_with_smile.jpg',
        'back_hugging_longing.jpg',
        'before_kissing_eye_contact.jpg',
        'biting_neck.jpg',
        'cheek_touching_inducement.jpg',
        'comforting_hand_on_head.jpg',
        'comforting_hug.jpg',
        'completly_take_off_shirt.jpg',
        'contemplating_window_shadow_headphone.jpg',
        'counter_smoking_side_profile.jpg',
        'cute_squeak.jpg',
        'cynical_reject_touching.jpg',
        'cynical_smoking_headphone.jpg',
        'dark_room_pensive.jpg',
        'deep_kiss.jpg',
        'deep_sleep_on_pillow.jpg',
        'drinking_coffee_rainy_window.jpg',
        'eating_expressionless_look.jpg',
        'fond_hug.jpg',
        'forehead_touch_comfort.jpg',
        'french_kiss.jpg',
        'full_moon_smoking_balcony_view.jpg',
        'guilt.jpg',
        'hand_covering_eyes_lying_pained.jpg',
        'hand_on_cheek_close_up.jpg',
        'hand_on_chin_blank_stare.jpg',
        'hand_on_chin_pensive_pose.jpg',
        'hand_on_chin_smile_window.jpg',
        'headphones_red_jacket_casual_night.jpg',
        'heart_fluttering_feeling.jpg',
        'heavy_stillness_agony.jpg',
        'holding_beer_can_direct_gaze.jpg',
        'holding_face_tender.jpg',
        'holding_photo_contemplating.jpg',
        'holding_soda_can_tired_look.jpg',
        'hugging_user_looking_away_pensive.jpg',
        'indifferent_answer.jpg',
        'initimate_embrace_user.jpg',
        'jaded_gaze_bored_look.jpg',
        'kissing_neck.jpg',
        'kissing_start.jpg',
        'leaning_on_arm_bored_gaze.jpg',
        'leaning_on_arm_looking_sideways.jpg',
        'leaning_on_back_hug.jpg',
        'leaning_on_counter_bored_smoking.jpg',
        'looking_out_window_rainy_headphone.jpg',
        'lying_on_bed_pensive_look.jpg',
        'lying_on_side_blank_gaze.jpg',
        'lying_pensive_expression.jpg',
        'morning_sunlight_embracing_user.jpg',
        'night_city_smoking_side_profile.jpg',
        'night_moon_hug_pensive.jpg',
        'night_rain_smoking_headphone_side.jpg',
        'nonchalant_provocation_smoking.jpg',
        'old_tv_headphone_sitting_pensive.jpg',
        'patting_head_1.jpg',
        'patting_head_2.jpg',
        'pensive_at_counter_headphone_smoking.jpg',
        'pensive_gaze_window_headphone.jpg',
        'playful_smile.jpg',
        'rainy_night_street_umbrella.jpg',
        'rainy_window_headphone_pensive_side.jpg',
        'rainy_window_smoking_profile.jpg',
        'rainy_window_smoking_side_profile.jpg',
        'receiving_food_blank_face.jpg',
        'resting_head_on_user_shoulder.jpg',
        'rising_irritation.jpg',
        'shallow_irritation.jpg',
        'shame_awkwardness.jpg',
        'shame_embarrassment.jpg',
        'shirt_open_bedroom.jpg',
        'shy_looking_away.jpg',
        'shy.jpg',
        'sigh.jpg',
        'sincere_and_affectionate_smile.jpg',
        'sitting_on_floor_embracing_user.jpg',
        'slight_smile_red_headphone.jpg',
        'smoking_direct_gaze_headphone.jpg',
        'smoking_eye_contact_headphone.jpg',
        'smoking_hand_on_chin_forward_gaze.jpg',
        'smoking_indifferent_gaze.jpg',
        'smoking_relaxed_eyes_headphone.jpg',
        'smoking_serious_expression_headphone.jpg',
        'sofa_embracing_user_head_down.jpg',
        'surprised_by_touch.jpg',
        'surprised.jpg',
        'sweeping_the_hair.jpg',
        'tearing_up_sad_close_up.jpg',
        'tears_flowing_down.jpg',
        'tightly_holding_and_pulling_close_with_hand.jpg',
        'unbearable_sadness_tear.jpg',
        'unbutton_shirt_on_bed.jpg',
        'warm_and_soft_hug.jpg',
        'warm_smile_sunlight_headphone.jpg',
        'nsfw_after_cunnilingus_dazed_tongue_out.jpg',
        'nsfw_almost_orgasm.jpg',
        'nsfw_blowjob_chair_dominate_hand_on_head.jpg',
        'nsfw_doggy_side_blush_male_close_contact.jpg',
        'nsfw_doggy_side_blush_male_pounding_view.jpg',
        'nsfw_doggy_side_blush_neck_mark_focus.jpg',
        'nsfw_doggy_side_fullbody_thrusting_male.jpg',
        'nsfw_doggy_side_profile_blush_male_sweat.jpg',
        'nsfw_doggy_side_wrists_grabbed_bed_contact.jpg',
        'nsfw_male_on_top_low_angle_bed_gaze_down.jpg',
        'nsfw_masturbation_eye_cover_hand_on_penis.jpg',
        'nsfw_masturbation_shirt_lifted_bed_dark.jpg',
        'nsfw_missionary_pov_male_focused_expression.jpg',
        'nsfw_missionary_pov_male_intense_expression_blush.jpg',
        'nsfw_missionary_pov_male_naked_blush_sweat.jpg',
        'nsfw_missionary_pov_male_naked_dripping_sweat.jpg',
        'nsfw_missionary_pov_sweaty_male_hard_penetration.jpg',
        'nsfw_standing_lowangle_grab_wall_contact.jpg',
        'nsfw_top_down_male_shirt_off_on_bed_dark_room.jpg'
    ],
    bl: [
        'nsfw_doggy_side_bed_pin_grip_male_push.jpg',
        'nsfw_doggy_side_fullbody_bed_blush_male.jpg',
        'nsfw_standingcarry_wall_sex_eyecontact.jpg'
    ],
    hetero: [
        'nsfw_cunnilingus.jpg',
        'nsfw_missionary_pov_eye_contact_male_on_top_sweaty.jpg',
        'nsfw_missionary_pov_upward_angle_male_thrusting.jpg',
        'nsfw_standing_backview_thrust_wall_clutch.jpg'
    ]
};

// DOM이 로드되면 실행
document.addEventListener('DOMContentLoaded', function() {
    // 모바일 메뉴
    initMobileMenu();
    
    // 음악 컨트롤
    initMusicControl();
    
    // 탭 기능
    initTabs();
    
    // POV 토글
    initPOVToggle();
    
    // 갤러리
    initGallery();
    
    // 스크롤 애니메이션
    initScrollAnimations();
    
    // 네비게이션 활성화
    initNavHighlight();
});

// 모바일 메뉴 초기화
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-menu a');
    
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        
        // 햄버거 애니메이션
        const spans = menuToggle.querySelectorAll('span');
        if (mobileMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });
    
    // 메뉴 링크 클릭 시 메뉴 닫기
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        });
    });
}

// 음악 컨트롤 초기화
function initMusicControl() {
    const musicToggle = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');
    const playIcon = musicToggle.querySelector('.play');
    const pauseIcon = musicToggle.querySelector('.pause');
    
    musicToggle.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            backgroundMusic.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    });
}

// 탭 기능 초기화
function initTabs() {
    // 행동 특성 탭
    const behaviorTabs = document.querySelectorAll('.behavior-tabs .tab-button');
    const behaviorContents = document.querySelectorAll('.behavior-content .tab-content');
    
    behaviorTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // 모든 탭과 콘텐츠 비활성화
            behaviorTabs.forEach(t => t.classList.remove('active'));
            behaviorContents.forEach(c => c.classList.remove('active'));
            
            // 선택된 탭과 콘텐츠 활성화
            this.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });
}

// POV 토글 초기화
function initPOVToggle() {
    const povButtons = document.querySelectorAll('.pov-button');
    const scenes = document.querySelectorAll('.scene');
    
    povButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetPOV = this.getAttribute('data-pov');
            
            // 모든 버튼과 장면 비활성화
            povButtons.forEach(b => b.classList.remove('active'));
            scenes.forEach(s => s.classList.remove('active'));
            
            // 선택된 버튼과 장면 활성화
            this.classList.add('active');
            document.querySelector(`.scene.${targetPOV}-person`).classList.add('active');
        });
    });
}

// 갤러리 초기화
function initGallery() {
    const galleryTabs = document.querySelectorAll('.gallery-tab');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalClose = document.querySelector('.modal-close');
    
    // 갤러리 이미지 로드
    loadGalleryImages();
    
    // 갤러리 탭 전환
    galleryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetGallery = this.getAttribute('data-gallery');
            
            // 모든 탭과 그리드 비활성화
            galleryTabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.gallery-grid').forEach(g => g.classList.remove('active'));
            
            // 선택된 탭과 그리드 활성화
            this.classList.add('active');
            document.getElementById(`${targetGallery}-gallery`).classList.add('active');
        });
    });
    
    // 모달 닫기
    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// 갤러리 이미지 로드
function loadGalleryImages() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    // 공용 갤러리
    const commonGallery = document.getElementById('common-gallery');
    if (commonGallery) {
        // 로딩 메시지 제거
        const loadingMsg = commonGallery.querySelector('.loading-message');
        if (loadingMsg) loadingMsg.remove();
        
        galleryImages.common.forEach(img => {
            const item = createGalleryItem(`백서호 에셋 공용/${img}`);
            commonGallery.appendChild(item);
        });
        console.log('공용 갤러리 로드 완료:', galleryImages.common.length);
    }
    
    // BL 갤러리
    const blGallery = document.getElementById('bl-gallery');
    if (blGallery) {
        // 로딩 메시지 제거
        const loadingMsg = blGallery.querySelector('.loading-message');
        if (loadingMsg) loadingMsg.remove();
        
        galleryImages.bl.forEach(img => {
            const item = createGalleryItem(`백서호 BL 에셋/${img}`);
            blGallery.appendChild(item);
        });
        console.log('BL 갤러리 로드 완료:', galleryImages.bl.length);
    }
    
    // 헤테로 갤러리
    const heteroGallery = document.getElementById('hetero-gallery');
    if (heteroGallery) {
        // 로딩 메시지 제거
        const loadingMsg = heteroGallery.querySelector('.loading-message');
        if (loadingMsg) loadingMsg.remove();
        
        galleryImages.hetero.forEach(img => {
            const item = createGalleryItem(`백서호 HL 에셋/${img}`);
            heteroGallery.appendChild(item);
        });
        console.log('헤테로 갤러리 로드 완료:', galleryImages.hetero.length);
    }
    
    // 갤러리 아이템 생성 함수
    function createGalleryItem(src) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = '갤러리 이미지';
        img.loading = 'lazy'; // 지연 로딩 추가
        
        // 이미지 로드 오류 처리
        img.onerror = function() {
            console.error('이미지 로드 실패:', src);
            item.style.display = 'none'; // 로드 실패한 이미지는 숨김
        };
        
        item.appendChild(img);
        
        // 클릭 이벤트
        item.addEventListener('click', function() {
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modalImg.src = src;
        });
        
        return item;
    }
}

// 스크롤 애니메이션 초기화
function initScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // 성격 스탯 애니메이션
    const statFills = document.querySelectorAll('.stat-fill');
    const statObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const width = fill.style.width;
                fill.style.width = '0';
                setTimeout(() => {
                    fill.style.width = width;
                }, 100);
            }
        });
    }, observerOptions);
    
    statFills.forEach(fill => {
        statObserver.observe(fill);
    });
}

// 네비게이션 하이라이트 초기화
function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}

// 스무스 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 