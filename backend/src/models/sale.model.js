const connection = require('./connection');
const {
  getFormattedColumnNames,
  getFormattedPlaceholders,
} = require('../utils/generateFormattedQuery');

const findAll = async () => {
  const [sales] = await connection.execute(
    `SELECT sp.sale_id AS saleId, s.date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales_products AS sp
    JOIN StoreManager.sales AS s ON sp.sale_id = s.id
    ORDER BY saleId, productId;`,
    );
  return sales;
};

const findById = async (productId) => {
  const [sale] = await connection.execute(
    `SELECT S.date, SP.product_id AS productId, SP.quantity
    FROM sales_products AS SP
    JOIN sales AS S ON SP.sale_id = S.id
    WHERE id = ?
    ORDER BY sale_id, productId`,
    [productId],
  );
  return sale;
};

const insert = async (sale) => {
  const columns = getFormattedColumnNames(sale);
  const placeholders = getFormattedPlaceholders(sale);
  const query = `INSERT INTO sales (${columns}) VALUES (${placeholders})`;

  const [{ insertId }] = await connection.execute(query, [...Object.values(sale)]);

  return insertId;
};

module.exports = {
  findAll,
  findById,
  insert,
};