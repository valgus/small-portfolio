import React from 'react';
import theme0img1 from '../../../assets/img/theme0/img_1.jpg';
import theme0img2 from '../../../assets/img/theme0/img_2.jpg';
import theme0img3 from '../../../assets/img/theme0/img_3.jpg';
import theme0img4 from '../../../assets/img/theme0/img_4.jpg';
import theme1img1 from '../../../assets/img/theme1/img_1.jpg';
import theme1img2 from '../../../assets/img/theme1/img_2.jpg';
import theme1img3 from '../../../assets/img/theme1/img_3.jpg';
import theme1img4 from '../../../assets/img/theme1/img_4.jpg';

const themeImages = {
  0: [theme0img1, theme0img2, theme0img3, theme0img4],
  1: [theme1img1, theme1img2, theme1img3, theme1img4],
};

const imageLabels = {
  0: [
    'Cooking and savoring delisious russian borsh with the whole family',
    'Figuring out how amazing it is to dance Russian dances',
    'Taking a long walk through golden forests in autumn',
    'Discovering the beauty of ancient Russian architecture',
  ],
  1: [
    'Tasting fresh and oh-so delicious kanelbullar',
    'Picking berries during warm days in sunny forests',
    'Challenging yourself to run a 40km maraphon next Autumn',
    "Enjoying Scandinavian nature - it's a great combination of water, stone and plants",
  ],
};
const title = 'Leisure';

const Leisure = ({ theme }) => (
  <div className='container-fluid'>
    <div className='row'>
      <div className='colored-field text-center col-md-4'>
        <h1 className='sticky'>{title}</h1>
      </div>
      <div className='col-md-8 no-padding'>
        {themeImages[theme].map((img, index) => (
          <div
            className='full-height-image leisure-image'
            key={`leisure_image${index}`}
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url(
                  ${img}
              ) 0 0 / cover no-repeat`,
            }}
          >
            <h3>{imageLabels[theme][index]}</h3>
          </div>
        ))}
      </div>
      <div className='colored-field text-center col-xs-12 visible-xs-block'>
        <h1 className='sticky'>{title}</h1>
      </div>
    </div>
  </div>
);

export default Leisure;
