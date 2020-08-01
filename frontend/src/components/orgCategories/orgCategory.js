import React, { Component } from 'react';
import '../../App.scss';
import './orgCategories.scss';

export default class orgCategory extends Component {
  render() {
    const { id, name, img } = this.props;
    return (
      <article className="org" key={id}>
        <div className="org-info">
          <h3>{name}</h3>
          <img src={img} alt="category" />
        </div>
      </article>
    );
  }
}
