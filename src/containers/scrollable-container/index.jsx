import React, { Component } from 'react';

class Scrollable extends Component {
  current = 0;
  elPositions = [];

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('resize', this.setSectionsBoundaries.bind(this));
    this.setSectionsBoundaries();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
    window.removeEventListener('resize', this.setSectionsBoundaries.bind(this));
  }
  handleScroll(e) {
    const { changeCurrentComponent } = this.props;
    const cursor = window.scrollY + window.innerHeight * 0.8;
    this.elPositions.forEach((position, index) => {
      const insideComponent = cursor >= position.y && cursor <= position.bottom;
      if (insideComponent && this.current !== index) {
        this.current = index;
        console.log(index);
        console.log(
          this.elPositions[index].y,
          this.elPositions[index].bottom,
          cursor
        );
        return changeCurrentComponent(index);
      }
      if (insideComponent) return;
    });
  }

  setSectionsBoundaries() {
    const { elements } = this.props;
    this.elPositions = elements.map(el => {
      const { bottom, y } = document.getElementById(el).getBoundingClientRect();
      console.log(y, bottom);
      return { y: y + window.scrollY, bottom: bottom + window.scrollY };
    });
  }

  render() {
    return <div className='scrollable'>{this.props.children}</div>;
  }
}

export default Scrollable;
