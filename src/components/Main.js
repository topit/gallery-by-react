require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

//获取图片相关数据
let imageDatas = require('../data/imageDatas.json');

imageDatas = (function genImageURL(imageDataArr){
  for(let i = 0, j = imageDataArr.length; i < j; i++){
    let singleImageData = imageDataArr[i];

    singleImageData.imageURL = require('../images/' +
      singleImageData.fileName);

      imageDataArr[i] = singleImageData;
  }

  return imageDataArr;
})(imageDatas);

class ImgFigure extends React.Component {
  render() {
    return (
      <figure className="img-figure">
        <img src={this.props.data.imageURL} alt={this.props.data.title}/>
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
}


class AppComponent extends React.Component {
  render() {

    let controllerUnits = [],
        imgFigures = [];

    imageDatas.forEach(value => imgFigures.push(<ImgFigure data={value}/>));
    
    return (
        <section className="stage">
          <section className="img-sec">
            {imgFigures}
          </section>
          <nav className="controller-nav">
            {controllerUnits}
          </nav>
        </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
