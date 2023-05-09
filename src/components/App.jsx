import React, {Component} from "react";
import Form from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";
import  { Filter }  from "./Filter/Filter";
import shortid from "shortid";

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
    };

     addContact = ({name, number}) => {
      const newContact = {
        id: shortid.generate(),
        name,
        number,
      }
      this.setState(prevState => 
        ({contacts: [newContact, ...prevState.contacts]})
        )
    };

    deleteContact = contactId => {
      this.setState(prevState => (
        {contacts: prevState.contacts.filter(contacts => contacts.id !== contactId)}
      ))
    };

    changeFilter = event => {
      this.setState({filter: event.currentTarget.value})
    };

   findContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
     }
    


render() {
  const {filter} = this.state;
    
  return (

    <div>

      <Form onSubmit={this.addContact}/> 
      <h2> Contacts </h2>

      <Filter value={filter} onChange={this.changeFilter}/>
     
      <ContactList 
      contacts={this.findContact()}
      onDeleteContact={this.deleteContact} />
     
    </div>
  );
}
};



