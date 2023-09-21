const connection = require('./connection');
const {
  getFormattedColumnNames,
  getFormattedPlaceholders,
} = require('../utils/generateFormattedQuery');

const findAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const findById = async (id) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return product;
};

const insert = async (product) => {
  const columns = getFormattedColumnNames(product);
  const placeholders = getFormattedPlaceholders(product);
  const query = `INSERT INTO products (${columns}) VALUES (${placeholders})`;

  const [{ insertId }] = await connection.execute(query, [...Object.values(product)]);

  return insertId;
};

const updateProduct = async (name, id) => {
  // const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);

  await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?', 
    [name, id],
    );

  return { id, name };
};

module.exports = {
  findAll,
  findById,
  insert,
  updateProduct,
};