import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import style from "@/styles/home.module.scss"
import { useEffect, useRef, useState } from "react";

const Home = () => {
  type image_type = StaticImport;
  type menu_list_type = 'Home' | 'About' | 'Contact';
  type product_list_type = '지퍼' | '주머니' | '단추';
  type reason_list_type = 'Service' | 'Perfection' | 'Dummy'

  interface image_props {
    name: string,
    image: image_type,
  }
  interface reason_list_props {
    title: reason_list_type,
    descrtiption: string,
  }

  const logo_image: image_props = {
    name: 'logo',
    image: require("@/public/images/DY.svg"),
  }

  const header_menu_list: Array<menu_list_type> = ['Home', 'About', 'Contact'];
  const about_product_list: Array<product_list_type> = ['지퍼', '주머니', '단추'];

  const why_reason_list: Array<reason_list_props> = [
    {
      title: 'Perfection',
      descrtiption: '일단은 아무말이나 막 채워둔 다음에 워딩은 다음번에 생각하면 됨. 대충 어떤식으로 나오는지 확인하기 위함임!'
    },
    {
      title: 'Service',
      descrtiption: [
        `고객의 만족을 위해`,
        `끊임없이 노력하겠습니다.`
      ].join('\n'),
    },
    {
      title: 'Dummy',
      descrtiption: 'Dummy1',
    },
    {
      title: 'Dummy',
      descrtiption: 'Dummy2',
    }
  ];

  const home_div_ref = useRef<HTMLDivElement>(null);

  const [is_mobile, set_is_mobile] = useState<boolean>(false);
  const [hovered_product, set_hovered_product] = useState<string>('');
  const [touched_product, set_touched_product] = useState<string>('');

  const clicked_logo = () => {
    window.location.reload();
  }

  const onMouseEnter_about_product = (product: product_list_type) => {
    if (is_mobile) return;

    set_hovered_product(product);
  }
  const onMouseLeave_about_product = () => {
    if (is_mobile) return;

    set_hovered_product('');
  }
  const onTouchEnd_about_product = (product: product_list_type) => {
    if (!is_mobile) return;

    if (touched_product.includes(product)) set_touched_product('');
    else set_touched_product(product);
  }

  let before_scroll_y = 0;
  const mobile_touch_move_prevent = (event: TouchEvent) => {
    event.preventDefault();
  }
  const mobile_touch_start = (event: any) => {
    home_div_ref.current?.removeEventListener('touchmove', mobile_touch_move);
    
    const touch_y = event.changedTouches[0].pageY;
    before_scroll_y = touch_y;
    
    if (event.target.className.includes('map')) return;
    else if (event.target.className.includes('home') || ['h1', 'h2', 'h3', 'h4', 'h5', 'input', 'textarea'].includes(event.target.tagName.toLowerCase())) home_div_ref.current?.addEventListener('touchmove', mobile_touch_move);
  }
  const mobile_touch_move = (event: TouchEvent) => {
    const offset = 50;
    const page_height = parseInt(document.documentElement.style.getPropertyValue('--vh').replace(/px/g, ''));
    const scroll_top = home_div_ref.current?.scrollTop ? home_div_ref.current?.scrollTop : 0;
    const scroll_y = event.changedTouches[0].pageY;
    
    if (before_scroll_y < scroll_y - offset) {
      // 아래로 스크롤 중이면
      if (scroll_top >= 0 && scroll_top < page_height * 2) {
        // 1번째 페이지로 이동
        home_div_ref.current?.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
      else if (scroll_top >= page_height && scroll_top < page_height * 3) {
        // 2번째 페이지로 이동
        home_div_ref.current?.scrollTo({
          top: page_height,
          behavior: 'smooth'
        })
      }
      else if (scroll_top >= page_height && scroll_top < page_height * 4) {
        // 3번째 페이지로 이동
        home_div_ref.current?.scrollTo({
          top: page_height * 2,
          behavior: 'smooth'
        })
      }
      else if (scroll_top >= page_height && scroll_top < page_height * 5) {
        // 4번째 페이지로 이동
        home_div_ref.current?.scrollTo({
          top: page_height * 3,
          behavior: 'smooth'
        })
      }
      else if (scroll_top >= page_height && scroll_top < page_height * 6) {
        // 5번째 페이지로 이동
        home_div_ref.current?.scrollTo({
          top: page_height * 4,
          behavior: 'smooth'
        })
      }

      home_div_ref.current?.removeEventListener('touchmove', mobile_touch_move);
    }
    else if (before_scroll_y > scroll_y + offset) {
      // 위로 스크롤 중이면
      if (scroll_top >= 0 && scroll_top < page_height) {
        // 2번째 페이지로 이동
        home_div_ref.current?.scrollTo({
          top: page_height,
          behavior: 'smooth'
        });
      }
      else if (scroll_top >= page_height && scroll_top < page_height * 2) {
        // 3번째 페이지로 이동
        home_div_ref.current?.scrollTo({
          top: page_height * 2,
          behavior: 'smooth'
        });
      }
      else if (scroll_top >= page_height && scroll_top < page_height * 3) {
        // 4번째 페이지로 이동
        home_div_ref.current?.scrollTo({
          top: page_height * 3,
          behavior: 'smooth'
        });
      }
      else if (scroll_top >= page_height && scroll_top < page_height * 4) {
        // 5번째 페이지로 이동
        home_div_ref.current?.scrollTo({
          top: page_height * 4,
          behavior: 'smooth'
        });
      }
      else if (scroll_top >= page_height && scroll_top < page_height * 5) {
        // 6번째 페이지로 이동
        home_div_ref.current?.scrollTo({
          top: page_height * 5,
          behavior: 'smooth'
        });
      }
      else if (scroll_top >= page_height && scroll_top < page_height * 6) {
        // 1번째 페이지로 이동
        // home_div_ref.current?.scrollTo({
        //   top: 0,
        //   behavior: 'smooth'
        // });
      }

      home_div_ref.current?.removeEventListener('touchmove', mobile_touch_move);
    }
  }
  
  const set_vh = () => {
    if (window.innerWidth <= 768) set_is_mobile(true);
    else set_is_mobile(false);

    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
  }

  const map_ref = useRef<HTMLElement | null | any>(null);
  const dy_location: { latitude: number, longtitude: number } = {
    latitude: 37.57360,
    longtitude: 127.00450
  }
  
  useEffect(() => {
    // window.addEventListener('resize', set_vh);
    set_vh();

    home_div_ref.current?.addEventListener('touchmove', mobile_touch_move_prevent);
    return () => {
      window.removeEventListener('resize', set_vh);
      home_div_ref.current?.removeEventListener('touchmove', mobile_touch_move_prevent);
    };
  }, []);

  useEffect(() => {
    map_ref.current = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(dy_location.latitude, dy_location.longtitude),
      zoomControl: true,
      zoom: 15
    });
    new naver.maps.Marker({
      position: new naver.maps.LatLng(dy_location.latitude, dy_location.longtitude),
      map: map_ref.current
    });
  }, [ is_mobile ]);

  return (
    <div ref={home_div_ref} className="home" onTouchStart={(event) => mobile_touch_start(event)}>
      <div className={style.header}>
        <div className={style.header_container}>
          <div className={style.header_title} onClick={clicked_logo}>
            <Image src={logo_image.image} alt={logo_image.name}></Image>
          </div>
          <div className={style.header_menu}>
            {
              header_menu_list.map((menu, index) => (
                <h3 key={index}>{menu}</h3>
              ))
            }
          </div>
        </div>
      </div>
      <div className={style.body}>
        <div className={style.banner}>
          <h1>이곳에 배너가 들어가요!</h1>
        </div>
        <div className={`${style.section} ${style.about}`}>
          <div className={style.section_container}>
            <div className={style.about_top}>
              <div className={style.about_theme}>
                <div className={style.about_sub_theme}>
                  <h3>About DY</h3>
                  {/* <h3>About 대양아이엔지</h3> */}
                </div>
                <div className={style.about_main_theme}>
                  <h1>What we make?</h1>
                </div>
              </div>
              <div className={style.about_description}>
                {/* <h5>
                  주식회사 대양아이엔지는 지퍼 전문, 패션소재 기업으로서<br />
                  신뢰와 감동으로<br />
                  함께 도전하고, 함께 꿈을 이루어가는<br />
                  패션 리더 기업들의 믿음직한 파트너 입니다.
                </h5> */}
              </div>
            </div>
            <div className={style.about_bottom}>
              <div className={style.about_product_list}>
                {
                  about_product_list.map((product, index) => (
                    <div className={`${style.product} ${touched_product.includes(product) && style.touched_product}`} key={index} onMouseEnter={() => onMouseEnter_about_product(product)} onMouseLeave={onMouseLeave_about_product} onTouchEnd={() => onTouchEnd_about_product(product)}>
                      {
                        !hovered_product.includes(product) && (
                          <>
                            {
                              (!touched_product.includes(product) || !is_mobile) && (
                                <div className={style.introduce}>
                                  <h1>{product}</h1>
                                </div>
                              )
                            }
                            <div className={style.hover_me}>
                              {
                                touched_product.includes(product) && is_mobile ? (
                                  <h4>대충 간단한 설명</h4>
                                )
                                : (
                                  !is_mobile && <h4>마우스를 올려 확인해보세요</h4>
                                )
                              }
                            </div>
                          </>
                        )
                      }
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <div className={style.section}>
          <div className={style.section_container}>
            <div className={style.why_title}>
              <h5>WHY?</h5>
              <h1>We{"\'"}re the best in the business</h1>
              {/* <h1>꿈과 변화를 선도하는 패션 리더 기업들의</h1> */}
              <h3>The points of DY</h3>
              {/* <h3>최고의 파트너</h3> */}
            </div>
            <div className={style.why_reason_list}>
              {
                why_reason_list.map((reason, index) => (
                  <div className={style.reason} key={index}>
                    <h2>{reason.title}</h2>
                    <hr />
                    <h4>{reason.descrtiption}</h4>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className={style.section}>
          <div className={style.section_container}>
            <div className={style.who}>
              <div className={style.left}>

              </div>
              <div className={style.right}>
                <div className={style.introduce}>
                  <h1>Who make It?</h1>
                  <h3>description</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.section}>
          <div className={style.section_container}>
            <div className={style.location}>
              <div className={style.title}>
                <h1>The way to come</h1>
              </div>
              <div id="map" className={style.map}>
              </div>
              <div>
                <h4>ADDR: 종로구 김상옥로 59, 한아빌딩 3층</h4>
              </div>
            </div>
          </div>
        </div>
        <div className={style.section}>
          <div className={style.section_container}>
            <div className={style.contact}>
              <div className={style.menu}>
                <h3>Contact Us</h3>
                <h3>Get Support</h3>
              </div>
              <div className={style.form}>
                <div className={style.left}>
                  <h4>KAKAO: <a href="https://open.kakao.com/o/sgqi929f" target="_blank">오픈 채팅방</a></h4>
                  {
                    is_mobile ? (
                      <h4>TEL: <a href="tel:010-3744-3084" target="_blank">010-3744-3084</a></h4>
                    )
                    : (
                      <h4>TEL: 010-3744-3084</h4>
                    )
                  }
                </div>
                <div className={style.right}>
                  <div className={style.title}>
                    <h1>Form</h1>
                    <h5>Send us a message and we{"\'"}ll get back to you as soon as we can!</h5>
                  </div>
                  <div className={style.inputs}>
                    <div className={style.name}>
                      <h4>Name</h4>
                      <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className={style.email}>
                      <h4>Phone Number</h4>
                      <input type="tel" placeholder="Enter your phone number" />
                    </div>
                    <div className={style.message}>
                      <h4>Message</h4>
                      <textarea rows={10}></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.footer_container}>
          <h3>Footer</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
