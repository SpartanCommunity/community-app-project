import React, { Component } from 'react';
import OrgCategory from '../components/orgCategories/orgCategory';
import { categories } from '../organizationsData';
import '../App.scss';

class Orgs extends Component {
  state = {
    orgs: categories,
  };

  render() {
    const { orgs } = this.state;
    return (
      <section className="orgs-page">
        <h1>Choose a Category</h1>
        <article className="orgs-list">
          {orgs.map((org) => {
            return (
              <OrgCategory
                key={org.id}
                desc={org.desc}
                name={org.name}
                img={org.img}
              ></OrgCategory>
            );
          })}
        </article>
      </section>
    );
  }
}

export default Orgs;
