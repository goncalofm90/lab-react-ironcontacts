import React from 'react';
import contacts from '../contacts.json';

const people = [
  {
    name: 'Idris Elba',
    pictureUrl:
      'https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg',
    popularity: 11.622713,
    id: '11731993-0604-4bee-80d5-67ad845d0a38',
  },
  {
    name: 'Johnny Depp',
    pictureUrl:
      'https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg',
    popularity: 15.656534,
    id: '7dad00f7-3949-477d-a7e2-1467fd2cfc06',
  },
  {
    name: 'Monica Bellucci',
    pictureUrl:
      'https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg',
    popularity: 16.096436,
    id: '0ad5e441-3084-47a1-9e9b-b917539bba71',
  },
  {
    name: 'Gal Gadot',
    pictureUrl:
      'https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg',
    popularity: 10.049256,
    id: 'b497e3c4-50bb-4ae2-912f-eb36802c5bc2',
  },
  {
    name: 'Ian McKellen',
    pictureUrl:
      'https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg',
    popularity: 10.070132,
    id: '0067ae32-97b6-4431-898e-eb1c10150abb',
  },
];

class ContactList extends React.Component {
  constructor() {
    super();
    this.allContacts = [...contacts];
    this.state = {
      displayContactsIndex: [],
      people: people,
    };
  }
  sort = () => {
    const list = [...this.state.people];
    list.sort((firstItem, secondItem) => {
      return firstItem.name > secondItem.name ? 1 : -1;
    });
    this.setState({
      people: list,
    });
  };
  sortPop = () => {
    const list = [...this.state.people];
    list.sort((firstItem, secondItem) => {
      return firstItem.popularity < secondItem.popularity ? 1 : -1;
    });
    this.setState({
      people: list,
    });
  };
  addRandomContact = () => {
    let result = Math.floor(Math.random() * this.allContacts.length - 1);
    if (this.state.displayContactsIndex.includes(result)) {
      console.log('same');
      return this.addRandomContact();
    } else {
      console.log('new');
      this.setState({
        displayContactsIndex: [...this.state.displayContactsIndex, result],
      });
      return result;
    }
  };
  addName = () => {
    const newEl = this.addRandomContact();
    console.log(contacts[newEl]);
    let newcontacts = [...this.state.people, contacts[newEl]];
    this.setState({
      people: newcontacts,
    });
  };
  render() {
    return (
      <div>
        <div>
          <h1>Iron Contacts</h1>
        </div>
        <div class="buttons">
          <button onClick={this.sort}>Sort by Name</button>
          <button onClick={this.sortPop}>Sort by Popularity</button>
          <button onClick={this.addName}>Add random contact</button>
        </div>
        <table>
          <th></th>
          <tr class="contactheader">
            <th class="headerth">Picture </th>
            <th class="headerth">Name </th>
            <th class="headerth">Popularity</th>
          </tr>

          {this.state.people.map((person) => {
            return (
              <tr class="contacts">
                <td>
                  <img src={person.pictureUrl} alt="" />
                </td>
                <td class="listtd">{person.name} | </td>
                <td class="listtd">{person.popularity.toFixed(2)}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
export default ContactList;
