const connection = require('./connection');

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

const createNewId = async () => {
  const [{ insertId }] = await connection.execute('INSERT INTO sales VALUES ();');
  return insertId;
};

const insert = async (sale) => {
  const insertId = await createNewId();

  const mapSale = sale.map((e) => [e.productId, e.quantity]);

  const insertSale = mapSale.map((e) => [insertId, ...e]);

  await connection
  .query('INSERT INTO sales_products (sale_id, product_id, quantity) VALUES ?', [insertSale]);

  return { id: insertId, itemsSold: sale };
};

module.exports = {
  findAll,
  findById,
  insert,
  createNewId,
};