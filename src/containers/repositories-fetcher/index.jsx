import React from 'react';

import { Inspiration, Dropdown } from '../../components';

const title = 'What might inspire you? Maybe these incredible projects?';
const subTtle = 'Find what inspires you by entering your preferences below!';
const languageOptions = [
  'C++',
  'C#',
  'C',
  'Go',
  'Java',
  'JavaScript',
  'Kotlin',
  'Python',
  'Ruby',
  'Scala',
  'Swift',
];
const starOptions = ['All', '>1000', '>5000', '>10000', '>50000'];

const delayOnChange = 0.5;

class RepositoryFetcher extends React.Component {
  state = {
    language: 'JavaScript',
    stars: '>10000',
    substring: '',
  };

  inputTimeout = null;

  setSubstring = e => {
    const substring = e.target.value;
    clearTimeout(this.timeoutId);
    this.inputTimeout = setTimeout(() => {
      this.setState({ substring });
    }, delayOnChange);
  };

  setLanguage = value => this.setState({ language: value });
  setStar = value => this.setState({ stars: value === 'All' ? null : value });

  render() {
    const { language, stars, substring } = this.state;
    const queryString = `language:${language} ${
      stars ? 'stars:' + stars : ''
    } ${substring ? substring + ' in:name' : ''}`;
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12 colored-field flex-center-container text-center'>
            <h1>{title}</h1>
            <h2>{subTtle}</h2>
          </div>
        </div>
        <div className='row margin-top-20'>
          <div className='col-md-3 '>
            <Dropdown
              title={`Language: ${language}`}
              items={languageOptions}
              onChange={this.setLanguage}
            />
          </div>
          <div className='col-md-3 '>
            <Dropdown
              title={`Stars:${stars || 'All'}`}
              items={starOptions}
              onChange={this.setStar}
            />
          </div>
          <div className='col-md-5 offset-md-1 '>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Search'
                onChange={this.setSubstring}
              />
            </div>
          </div>
        </div>
        <Inspiration queryString={queryString} />
      </div>
    );
  }
}

export default RepositoryFetcher;
