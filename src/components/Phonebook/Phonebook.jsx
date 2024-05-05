import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

import { Wrapper, Title, Subtitle } from './Phonebook.styled';

import textToNormalizedWordsArray from 'components/helpers/textToNormalizedWordsArray';

/**
 * Phonebook to add and manage contacts.
 */
class Phonebook extends Component {
  #defaultState = {
    contacts: [],
    filter: '',
  }

  state = {
    ...this.#defaultState,
  };

  /**
   * Adds contact to the list of contacts.
   * @param {string} name Name of the contact.
   * @param {string} number Phone number of the contact.
   * @returns {boolean} True if added contact successfully or false otherwise.
   */
  addContact = (name, number) => {
    const isExist = this.state.contacts.some(({ name: existingName }) =>
      existingName.toLowerCase() === name.toLowerCase());
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return false;
    }

    const id = nanoid();
    const contact = { id, name, number };
    this.setState(prevState => (
      {
        contacts: [contact, ...prevState.contacts],
      }
    ))

    return true;
  };

  /**
   * Handles change of the text input.
   * @param {string} props.name Name of the element.
   * @param {string} props.value Text value of the element.
   */
  handleFilterTextChange = ({ name, value }) => {
    this.setState({ [name]: value });
  }

  /**
   * Filters contacts based on filter value.
   * @returns {object[]} Array of filtered contacts.
   */
  filterContacts = () => {
    if (this.state.contacts.length === 0) {
      return [];
    }
    const normalizedFilterArr = textToNormalizedWordsArray(this.state.filter);
    return this.state.contacts.filter(({ name, number }) => {
      const normalizedContact = textToNormalizedWordsArray(`${name}${number}`).join("");
      return normalizedFilterArr.some(filterEl => (!filterEl.isEmpty && normalizedContact.includes(filterEl)));;
    });
  }

  /**
   * Removes contact from the list of contacts.
   * @param {string} name Name of the contact.
   * @param {string} number Phone number of the contact. 
   */
  deleteContactById = (id) => {
    const index = this.state.contacts.findIndex(el => el.id === id);
    const contacts = this.state.contacts.filter((_, idx) => idx !== index);
    this.setState({ contacts: contacts });
  }

  /**
   * Renders phonebook content
   * @returns {React.Component}
   */
  render() {
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm
          onSubmit={this.addContact}
        />
        <Subtitle>Contacts</Subtitle>
        <Filter
          filterText={this.state.filter}
          onFilterInputChange={this.handleFilterTextChange} />
        <ContactList
          contacts={this.filterContacts()}
          onContactDelete={this.deleteContactById}
           />
      </Wrapper>
    );
  }
}

export default Phonebook;
