import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import style from "@/styles/home.module.scss"
import { useState } from "react";

const Home = () => {
  type image_type = StaticImport;

  interface image_props {
    name: string,
    image: image_type,
  }

  const logo_image: image_props = {
    name: 'logo',
    image: require("@/public/images/DY.svg"),
  }

  const header_menu_list: Array<string> = ['Home', 'About', 'Contact'];
  const about_product_list: Array<string> = ['지퍼', '주머니', '단추'];

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
              <div className={style.about_products}>
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
