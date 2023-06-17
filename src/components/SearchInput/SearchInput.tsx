import { FC, useState, ChangeEvent, FormEvent } from "react";

const SearchInput: FC = () => {
  const [firstName, setFirstName] = useState<string>("");

  const [lastName, setLastName] = useState<string>("");

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    setFirstName('');
    setLastName('');
  }

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setLastName(e.target.value);
  };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <input type="submit" />
    </form>
  );
};

export default SearchInput;
