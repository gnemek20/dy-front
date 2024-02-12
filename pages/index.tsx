import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import style from "@/styles/home.module.scss"
import { useState } from "react";

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
  const about_product_list: Array<string> = ['지퍼', '주머니', '단추'];

  const why_reason_list: Array<reason_list_props> = [
    {
      title: 'Perfection',
      descrtiption: '일단은 아무말이나 막 채워둔 다음에 워딩은 다음번에 생각하면 됨. 대충 어떤식으로 나오는지 확인하기 위함임!'
    },
    {
      title: 'Service',
      descrtiption: '일단은 아무말이나 막 채워둔 다음에 워딩은 다음번에 생각하면 됨. 대충 어떤식으로 나오는지 확인하기 위함임!',
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

  const [hovered_product, set_hovered_product] = useState<string>('');

  const clicked_logo = () => {
    window.location.reload();
  }

  const onMouseEnter_about_product = (product: string) => {
    set_hovered_product(product);
  }
  const onMouseLeave_about_product = () => {
    set_hovered_product('');
  }

  return (
    <div className="Home">
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
                </div>
                <div className={style.about_main_theme}>
                  <h1>What we make?</h1>
                </div>
              </div>
              <div className={style.about_description}>
                <h5>DY에서 만들어내는 제품들이 어떤 것들이 있는 지 대표적으로 3가지를 추출하여 소개할 것. 가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하</h5>
              </div>
            </div>
            <div className={style.about_bottom}>
              <div className={style.about_product_list}>
                {
                  about_product_list.map((product, index) => (
                    <div className={style.product} key={index} onMouseEnter={() => onMouseEnter_about_product(product)} onMouseLeave={onMouseLeave_about_product}>
                      {
                        !hovered_product.includes(product) && (
                          <>
                            <div className={style.introduce}>
                              <h1>{product}</h1>
                            </div>
                            <div className={style.hover_me}>
                              <h4>마우스를 올려 확인해보세요</h4>
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
              <h1>We're the best in the business</h1>
              <h3>The points of DY</h3>
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
              <div className={style.map}>
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
