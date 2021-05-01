/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  const [form, setState] = useState({
    title: '',
    select: categories[0],
  });

  const handleChange = (e) => setState({
    ...form,
    [e.target.name]: e.target.value,
  });

  const handleSubmit = (e) => e.target.value;

  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={form.title}
          onChange={(e) => handleChange(e)}
        />
        <select name="category" id="category">
          {categories.map((category, id) => <option key={id}>{category}</option>)}
        </select>
        <input
          type="submit"
          value="Submit"
          onClick={(e) => handleSubmit(e)}
        />
      </form>
    </>
  );
};

export default BooksForm;
