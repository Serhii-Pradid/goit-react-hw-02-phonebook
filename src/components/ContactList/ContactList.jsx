
export const ContactList = ({contacts, onDeleteContact}) => (
    <ul>
        {contacts.map(({id, name, number}) => {
            return (
                <li key={id}>
                    <p> {name} : {number} </p>
                    <button onClick={() => onDeleteContact(id)}> Delete </button>
                </li>
            )
        })}
    </ul>
)