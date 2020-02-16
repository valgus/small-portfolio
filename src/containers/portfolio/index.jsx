import {
  Navbar,
  ThemeToggler,
  Section,
  Profile,
  Experience,
  Leisure,
  Contacts,
} from '../../components';
import { Scrollable, RepositoryFetcher } from '../';

import React, { Component } from 'react';

const themes = ['theme-light', 'theme-dark'];
const pages = ['profile', 'experience', 'leisure', 'inspiration', 'contacts'];

class Portfolio extends Component {
  state = {
    theme: 0,
    shownPage: 0,
  };

  hoverableMenuRef = React.createRef();

  componentDidMount() {
    this.hoverableMenuRef.current.addEventListener('mouseover', x => {
      x.currentTarget.classList.toggle('navbar-broad');
    });
    this.hoverableMenuRef.current.addEventListener('mouseout', x => {
      x.currentTarget.classList.toggle('navbar-broad');
    });
  }

  changeTheme = theme => this.setState({ theme });

  changeCurrentPage = shownPage => this.setState({ shownPage });

  render() {
    const { theme, shownPage } = this.state;

    console.log(this.shownPage);
    return (
      <Scrollable
        elements={pages}
        changeCurrentComponent={this.changeCurrentPage}
      >
        <div className={themes[theme]}>
          <div className='main-body'>
            <ThemeToggler onClick={this.changeTheme} current={theme} />
            <Navbar
              ref={this.hoverableMenuRef}
              onClick={this.changeCurrentPage}
              current={shownPage}
            />
            <Section id='profile'>
              <Profile isCurrent={shownPage === 0} />
            </Section>
            <Section id='experience'>
              <Experience />
            </Section>
            <Section id='leisure'>
              <Leisure theme={theme} />
            </Section>
            <Section id='inspiration'>
              <RepositoryFetcher />
            </Section>
            <Section id='contacts'>
              <Contacts />
            </Section>
          </div>
        </div>
      </Scrollable>
    );
  }
}

export default Portfolio;
