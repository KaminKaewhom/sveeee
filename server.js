const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "dist")));
const port = 5000;

const pool = mysql.createPool({
  host: "202.151.177.35",
  user: "root",
  password: "arka",
  database: "SoleTeeN",
  port: 3306,
});

function checkproduct(id) {
  const check = "SELECT product_price FROM Products WHERE product_id = ?";
  pool.query(check, [id], (err, results) => {});
  const update_product = `UPDATE Products SET stock_quantity = ? WHERE product_id = ?`;
}

let orderCache = null;

app.post("/insertProducts", (req, res) => {
  const {
    product_name,
    product_brand,
    category_id,
    product_price,
    stock_quantity,
    description,
    image_url,
  } = req.body;

  console.log("Received Data:", req.body);

  const sql = `
    INSERT INTO Products (product_name, product_brand, category_id, product_price, stock_quantity, description, image_url) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

  pool.query(
    sql,
    [
      product_name,
      product_brand,
      category_id,
      product_price,
      stock_quantity,
      description,
      image_url,
    ],
    (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        return res
          .status(500)
          .json({ error: "เกิดข้อผิดพลาดในการบันทึกข้อมูล" });
      } else {
        console.log("Insert Success, ID:", result.insertId);
        return res
          .status(201)
          .json({ message: "Insert Success", insertedId: result.insertId });
      }
    }
  );
});

app.post("/Payments", (req, res) => {
  const { id_order } = req.body;
  orderCache = id_order;
  console.log("Received id_order:", id_order);

  if (!id_order || isNaN(id_order)) {
    return res.status(400).json({ error: "กรุณาส่ง id_order เป็นตัวเลข" });
  }

  const sql = "SELECT * FROM Orders WHERE order_id = ?";
  pool.query(sql, [orderCache], (err, results) => {
    if (err) {
      console.error("Error fetching order:", err);
      return res.status(500).json({ error: "เกิดข้อผิดพลาดในการดึงข้อมูล" });
    }

    console.log("Fetched Data:", results);

    if (results.length === 0) {
      return res.status(404).json({ message: "ไม่พบข้อมูลคำสั่งซื้อนี้" });
    }

    res.status(200).json(results);
  });
});

app.post("/confirm", (req, res) => {
  const { confirm, payment_method } = req.body;
  order_id = orderCache;
  const payment_status = "ชำระแล้ว";

  console.log("ค่าที่ได้รับ:", confirm);
  console.log("Order ID:", order_id);

  if (!order_id) {
    return res.status(400).json({ error: "ไม่ได้รับข้อมูลคำสั่งซื้อ" });
  }

  if (confirm === "cancel") {
    const check_order = `SELECT product_id, quantity FROM Order_Items WHERE order_id = ?`;

    pool.query(check_order, [order_id], (err, results) => {
      if (err) {
        console.error("Error fetching order details:", err);
        return res
          .status(500)
          .json({ error: "เกิดข้อผิดพลาดในการดึงข้อมูลคำสั่งซื้อ" });
      }

      if (results.length === 0) {
        return res.status(404).json({ error: "ไม่พบคำสั่งซื้อนี้" });
      }

      const updateStockPromises = results.map((item) => {
        return new Promise((resolve, reject) => {
          const update_stock = `UPDATE Products SET stock_quantity = stock_quantity + ? WHERE product_id = ?`;

          pool.query(
            update_stock,
            [item.quantity, item.product_id],
            (err, updateResult) => {
              if (err) {
                console.error("Error updating stock:", err);
                reject(err);
              } else {
                console.log(
                  `Stock updated for product_id ${item.product_id}: +${item.quantity}`
                );
                resolve(updateResult);
              }
            }
          );
        });
      });

      const update_order_status = `UPDATE Orders SET status = 'ยกเลิก' WHERE order_id = ?`;

      Promise.all(updateStockPromises)
        .then(() => {
          pool.query(update_order_status, [order_id], (err, updateResult) => {
            if (err) {
              console.error("Error updating order status:", err);
              return res
                .status(500)
                .json({ error: "เกิดข้อผิดพลาดในการอัปเดตสถานะคำสั่งซื้อ" });
            }

            console.log(`Order ${order_id} canceled successfully`);
            return res.status(200).json({
              message: "ยกเลิกคำสั่งซื้อสำเร็จ และคืนสินค้าเข้าสต็อก",
            });
          });
        })
        .catch(() => {
          return res
            .status(500)
            .json({ error: "เกิดข้อผิดพลาดในการคืนสินค้าเข้าสต็อก" });
        });
    });

    return;
  } else if (confirm === "pay") {
    if (!payment_method) {
      return res.status(400).json({ error: "กรุณาระเลือกช้องทางการชำระเงิน" });
    }

    const sql = "SELECT total_amount FROM Orders WHERE order_id = ?";
    pool.query(sql, [order_id], (err, results) => {
      if (err) {
        console.error("Error fetching order:", err);
        return res.status(500).json({ error: "เกิดข้อผิดพลาดในการดึงข้อมูล" });
      }

      if (results.length === 0) {
        return res.status(404).json({ message: "ไม่พบข้อมูลคำสั่งซื้อนี้" });
      }

      const payment_amount = results[0].total_amount;
      console.log("Price:", payment_amount);

      const paySQL = `
        INSERT INTO Payments (order_id, payment_method, payment_amount, payment_status, payment_date) 
        VALUES (?, ?, ?, ?, NOW())`;

      pool.query(
        paySQL,
        [order_id, payment_method, payment_amount, payment_status],
        (err, result) => {
          if (err) {
            console.error("Error inserting payment:", err);
            return res
              .status(500)
              .json({ error: "เกิดข้อผิดพลาดในการบันทึกข้อมูลการชำระเงิน" });
          }

          console.log("Payment inserted successfully:", result);

          const updateSQL = `UPDATE Orders SET status = ? WHERE order_id = ?`;

          pool.query(updateSQL, [payment_status, order_id], (err, result) => {
            if (err) {
              console.error("Error updating order status:", err);
              return res
                .status(500)
                .json({ error: "เกิดข้อผิดพลาดในการอัปเดตสถานะ" });
            }

            console.log("Order status updated:", result);

            return res.status(200).json({
              message: "บันทึกข้อมูลการชำระเงินและอัปเดตสถานะสำเร็จ",
              order_id,
              payment_method,
              payment_amount,
              payment_status,
            });
          });
        }
      );
    });

    return;
  }

  return res.status(400).json({ error: "คำสั่งไม่ถูกต้อง" });
});

// app.post('/Order_Items', (req, res) => {
//   const { customer_id, product_id, quantity } = req.body;
//   console.log("Received Data:", req.body);

//   if (!customer_id || !product_id || !quantity) {
//     return res.status(400).json({ error: "กรุณาส่งข้อมูลให้ครบถ้วน (customer_id, product_id, quantity)" });
//   }

//   const check_stock = 'SELECT product_price, stock_quantity FROM Products WHERE product_id = ?';

//   pool.query(check_stock, [product_id], (err, results) => {
//     if (err) {
//       console.error(" Error fetching product data:", err);
//       return res.status(500).json({ error: "เกิดข้อผิดพลาดในการดึงข้อมูลสินค้า" });
//     }

//     if (results.length === 0) {
//       return res.status(404).json({ message: "⚠️ ไม่พบสินค้าที่ต้องการ" });
//     }

//     const product_price = results[0].product_price;
//     const stock_quantity = results[0].stock_quantity;

//     if (stock_quantity < quantity) {
//       return res.status(400).json({ error: " สินค้าไม่เพียงพอในสต็อก" });
//     }

//     const price_product = quantity * product_price;
//     console.log("Product Price Calculated:", price_product);

//     const order_date = new Date();
//     const status = "รอชำระ";

//     const insert_order = `
//       INSERT INTO Orders (customer_id, order_date, status, total_amount)
//       VALUES (?, ?, ?, ?)`;

//     pool.query(insert_order, [customer_id, order_date, status, price_product], (err, result) => {
//       if (err) {
//         console.error("Error inserting order:", err);
//         return res.status(500).json({ error: "เกิดข้อผิดพลาดในการบันทึกคำสั่งซื้อ" });
//       }

//       const order_id = result.insertId;

//       const insert_item = `
//         INSERT INTO Order_Items (order_id, product_id, quantity, price)
//         VALUES (?, ?, ?, ?)`;

//       pool.query(insert_item, [order_id, product_id, quantity, product_price], (err, result) => {
//         if (err) {
//           console.error("Error inserting order item:", err);
//           return res.status(500).json({ error: "เกิดข้อผิดพลาดในการบันทึกข้อมูลสินค้าคำสั่งซื้อ" });
//         }

//         const order_item_id = result.insertId;
//         console.log("Order Item Inserted Successfully:", {
//           order_item_id,
//           order_id,
//           product_id,
//           quantity,
//           price_product
//         });

//         const update_stock = `UPDATE Products SET stock_quantity = stock_quantity - ? WHERE product_id = ?`;

//         pool.query(update_stock, [quantity, product_id], (err, updateResult) => {
//           if (err) {
//             console.error("Error updating stock quantity:", err);
//             return res.status(500).json({ error: "เกิดข้อผิดพลาดในการอัปเดตสต็อกสินค้า" });
//           }

//           console.log("Stock updated successfully:", {
//             product_id,
//             new_stock_quantity: stock_quantity - quantity
//           });

//           res.status(200).json({
//             message: "บันทึกข้อมูลสินค้าสำเร็จ",
//             order_item_id,
//             order_id,
//             product_id,
//             quantity,
//             price_product,
//             new_stock_quantity: stock_quantity - quantity
//           });
//         });
//       });
//     });
//   });
// });

app.post("/Customers", (req, res) => {
  const { customer_name, email, address, phone_number } = req.body;

  const insert = `
    INSERT INTO Customers (customer_name, email, address, phone_number)
    VALUES (?, ?, ?, ?)
  `;

  pool.query(
    insert,
    [customer_name, email, address, phone_number],
    (err, result) => {
      if (err) {
        console.error("Error inserting customer:", err);
        return res
          .status(500)
          .json({ error: "เกิดข้อผิดพลาดในการบันทึกข้อมูลลูกค้า" });
      }

      console.log("Customer inserted successfully:", result);
      return res.status(200).json({
        message: "บันทึกข้อมูลลูกค้าสำเร็จ",
        customer_id: result.insertId,
      });
    }
  );
});

app.post("/report", (req, res) => {
  const { check } = req.body; // รับค่าจาก request body

  // SQL ลบข้อมูลเก่าออกก่อน
  const deleteOldReportsSQL = `DELETE FROM daily_reports;`;

  // SQL รีเซ็ตค่า AUTO_INCREMENT ให้เริ่มจาก 1
  const resetAutoIncrementSQL = `ALTER TABLE daily_reports AUTO_INCREMENT = 1;`;

  // SQL สำหรับสร้างรายงานใหม่
  const generateReportSQL = `
  INSERT INTO daily_reports (order_id, order_date, customer_name, product_name, category_name, quantity, price, total_amount)
  SELECT 
      o.order_id, 
       o.order_date, 
      c.customer_name, 
      p.product_name,  
      cat.category_name,  
      oi.quantity, 
      p.product_price, 
      (oi.quantity * p.product_price) AS total_amount
  FROM Orders o
  JOIN Customers c ON o.customer_id = c.customer_id
  JOIN Order_Items oi ON o.order_id = oi.order_id
  JOIN Products p ON oi.product_id = p.product_id
  JOIN Categories cat ON p.category_id = cat.category_id
  ORDER BY o.order_id ASC;  -- เรียงลำดับตาม order_id จากน้อยไปมาก
  `;

  if (check === "save") {
    pool.query(deleteOldReportsSQL, (err) => {
      if (err) {
        console.error("Error deleting old reports:", err);
        return res
          .status(500)
          .json({ error: "เกิดข้อผิดพลาดในการลบข้อมูลรายงานเก่า" });
      }

      pool.query(resetAutoIncrementSQL, (err) => {
        if (err) {
          console.error("Error resetting AUTO_INCREMENT:", err);
          return res
            .status(500)
            .json({ error: "เกิดข้อผิดพลาดในการรีเซ็ตค่า report_id" });
        }

        pool.query(generateReportSQL, (err, results) => {
          if (err) {
            console.error("Error generating daily report:", err);
            return res
              .status(500)
              .json({ error: "เกิดข้อผิดพลาดในการสร้างรายงาน" });
          } else {
            console.log("Daily report generated successfully", results);

            const selectReportSQL = `SELECT * FROM daily_reports ORDER BY report_id ASC`; // เรียงข้อมูลตอนดูรายงาน

            pool.query(selectReportSQL, (err, reportResults) => {
              if (err) {
                console.error("Error fetching daily report data:", err);
                return res
                  .status(500)
                  .json({ error: "เกิดข้อผิดพลาดในการดึงข้อมูลรายงาน" });
              }

              console.log("Fetched daily reports:", reportResults);
              return res.status(200).json({
                message: "รายงานถูกสร้างใหม่เรียบร้อยแล้ว",
                data: reportResults,
              });
            });
          }
        });
      });
    });
  } else if (check === "view") {
    const view = `SELECT * FROM daily_reports ORDER BY report_id ASC`; // เรียงข้อมูลตอนดูรายงาน

    pool.query(view, (err, report) => {
      if (err) {
        console.error("Error fetching daily report:", err);
        return res
          .status(500)
          .json({ error: "เกิดข้อผิดพลาดในการดึงข้อมูลรายงาน" });
      }
      return res
        .status(200)
        .json({ message: "รายงานถูกดึงข้อมูลเรียบร้อยแล้ว", data: report });
    });
  } else {
    res.status(400).json({ message: "ไม่พบคำสั่งที่ถูกต้อง" });
  }
});

// app.post("/Order_Items", (req, res) => {
//   const { customer_id, items } = req.body; // items เป็น array ของสินค้า [{product_id, quantity}]
//   console.log("Received Data:", req.body);

//   // if (!customer_id || !Array.isArray(items) || items.length === 0) {
//   //   return res.status(400).json({ error: "กรุณาส่งข้อมูลให้ครบถ้วน (customer_id, items[])" });
//   // }

//   // ตรวจสอบสินค้าทั้งหมดในรายการ
//   const productIds = items.map((item) => item.product_id);
//   const check_stock =
//     "SELECT product_id, product_price, stock_quantity FROM Products WHERE product_id IN (?)";

//   pool.query(check_stock, [productIds], (err, results) => {
//     if (err) {
//       console.error("Error fetching product data:", err);
//       return res
//         .status(500)
//         .json({ error: "เกิดข้อผิดพลาดในการดึงข้อมูลสินค้า" });
//     }

//     // แปลงข้อมูลเป็น Object เพื่อเข้าถึงง่าย
//     const productData = {};
//     results.forEach((row) => {
//       productData[row.product_id] = {
//         product_price: row.product_price,
//         stock_quantity: row.stock_quantity,
//       };
//     });

//     // ตรวจสอบว่าสินค้าทุกชิ้นมีในสต็อกหรือไม่
//     for (const item of items) {
//       if (!productData[item.product_id]) {
//         return res
//           .status(404)
//           .json({ error: `⚠️ ไม่พบสินค้า product_id: ${item.product_id}` });
//       }
//       if (productData[item.product_id].stock_quantity < item.quantity) {
//         return res.status(400).json({
//           error: `สินค้า product_id: ${item.product_id} ไม่เพียงพอในสต็อก`,
//         });
//       }
//     }

//     // คำนวณราคารวมทั้งหมด
//     const total_amount = items.reduce(
//       (sum, item) =>
//         sum + productData[item.product_id].product_price * item.quantity,
//       0
//     );
//     const order_date = new Date();
//     const status = "รอชำระ";

//     // บันทึกคำสั่งซื้อ
//     const insert_order = `INSERT INTO Orders (customer_id, order_date, status, total_amount) VALUES (?, ?, ?, ?)`;
//     pool.query(
//       insert_order,
//       [customer_id, order_date, status, total_amount],
//       (err, result) => {
//         if (err) {
//           console.error("Error inserting order:", err);
//           return res
//             .status(500)
//             .json({ error: "เกิดข้อผิดพลาดในการบันทึกคำสั่งซื้อ" });
//         }

//         const order_id = result.insertId;

//         // เตรียมคำสั่ง SQL สำหรับเพิ่ม Order_Items
//         const orderItemsData = items.map((item) => [
//           order_id,
//           item.product_id,
//           item.quantity,
//           productData[item.product_id].product_price,
//         ]);
//         const insert_items = `INSERT INTO Order_Items (order_id, product_id, quantity, price) VALUES ?`;

//         pool.query(insert_items, [orderItemsData], (err, result) => {
//           if (err) {
//             console.error("Error inserting order items:", err);
//             return res.status(500).json({
//               error: "เกิดข้อผิดพลาดในการบันทึกข้อมูลสินค้าคำสั่งซื้อ",
//             });
//           }

//           // อัปเดตสต็อกสินค้า
//           const updatePromises = items.map((item) => {
//             return new Promise((resolve, reject) => {
//               const update_stock = `UPDATE Products SET stock_quantity = stock_quantity - ? WHERE product_id = ?`;
//               pool.query(
//                 update_stock,
//                 [item.quantity, item.product_id],
//                 (err, updateResult) => {
//                   if (err) reject(err);
//                   else
//                     resolve({
//                       product_id: item.product_id,
//                       new_stock_quantity:
//                         productData[item.product_id].stock_quantity -
//                         item.quantity,
//                     });
//                 }
//               );
//             });
//           });

//           Promise.all(updatePromises)
//             .then((updatedStocks) => {
//               console.log("Stock updated successfully:", updatedStocks);
//               res.status(200).json({
//                 message: "บันทึกข้อมูลสินค้าสำเร็จ",
//                 order_id,
//                 total_amount,
//                 updatedStocks,
//               });
//             })
//             .catch((err) => {
//               console.error("Error updating stock quantity:", err);
//               res
//                 .status(500)
//                 .json({ error: "เกิดข้อผิดพลาดในการอัปเดตสต็อกสินค้า" });
//             });
//         });
//       }
//     );
//   });
// });
app.post("/order", (req, res) => {
  const { email, name, phone_number, address, items } = req.body;

  if (
    !email ||
    !name ||
    !phone_number ||
    !address ||
    !items ||
    items.length === 0
  ) {
    return res.status(400).json({ error: "กรุณาส่งข้อมูลให้ครบถ้วน" });
  }

  const check_customer = `SELECT customer_id FROM Customers WHERE email = ? LIMIT 1`;

  pool.query(check_customer, [email], (err, results) => {
    if (err)
      return res
        .status(500)
        .json({ error: "เกิดข้อผิดพลาดในการตรวจสอบลูกค้า" });

    let customer_id;
    if (results.length > 0) {
      customer_id = results[0].customer_id;
      const update_customer = `UPDATE Customers SET customer_name = ?, phone_number = ?, address = ? WHERE customer_id = ?`;
      pool.query(update_customer, [name, phone_number, address, customer_id]);
    } else {
      const insert_customer = `INSERT INTO Customers (email, customer_name, phone_number, address) VALUES (?, ?, ?, ?)`;
      pool.query(
        insert_customer,
        [email, name, phone_number, address],
        (err, result) => {
          if (err)
            return res
              .status(500)
              .json({ error: "เกิดข้อผิดพลาดในการบันทึกลูกค้า" });
          customer_id = result.insertId;
        }
      );
    }

    createOrder(customer_id, items, res);
  });
});

// ฟังก์ชันสร้างคำสั่งซื้อ
function createOrder(customer_id, items, res) {
  const order_date = new Date();
  const status = "รอชำระ";
  let total_price = 0;
  let new_stock = {};

  const insert_order = `INSERT INTO Orders (customer_id, order_date, status, total_amount) VALUES (?, ?, ?, ?)`;

  pool.query(
    insert_order,
    [customer_id, order_date, status, 0],
    (err, result) => {
      if (err)
        return res
          .status(500)
          .json({ error: "เกิดข้อผิดพลาดในการบันทึกคำสั่งซื้อ" });

      const order_id = result.insertId;
      let promises = [];

      items.forEach((item) => {
        const check_stock = `SELECT product_price, stock_quantity FROM Products WHERE product_id = ?`;
        let promise = new Promise((resolve, reject) => {
          pool.query(check_stock, [item.product_id], (err, results) => {
            if (err || results.length === 0) return reject(err);

            const { product_price, stock_quantity } = results[0];

            if (stock_quantity < item.quantity)
              return reject("ไม่มียอดสินค้าเพียงพอ");

            total_price += item.quantity * product_price;

            new_stock[item.product_id] = stock_quantity - item.quantity;

            const insert_item = `INSERT INTO Order_Items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)`;
            pool.query(
              insert_item,
              [order_id, item.product_id, item.quantity, product_price],
              (err) => {
                if (err) return reject(err);

                const update_stock = `UPDATE Products SET stock_quantity = stock_quantity - ? WHERE product_id = ?`;
                pool.query(
                  update_stock,
                  [item.quantity, item.product_id],
                  (err) => {
                    if (err) return reject(err);
                    resolve();
                  }
                );
              }
            );
          });
        });
        promises.push(promise);
      });

      // รอให้ทุก promise เสร็จสิ้นก่อนจะอัพเดตยอดรวม
      Promise.all(promises)
        .then(() => {
          const update_order = `UPDATE Orders SET total_amount = ? WHERE order_id = ?`;
          pool.query(update_order, [total_price, order_id], () => {
            res.status(200).json({
              message: "บันทึกคำสั่งซื้อสำเร็จ",
              order_id,
              customer_id,
              total_price,
              items,
              new_stock,
            });
          });
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    }
  );
}

app.get("/product", (req, res) => {
  pool.query("SELECT * FROM Products", (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "เกิดข้อผิดพลาดในการดึงข้อมูลโปรดักต์" });
    }
    res.status(200).json(results);
  });
});

app.post("/update-product", (req, res) => {
  const {
    product_id,
    product_name,
    product_brand = "NIKE",
    category_id = 1,
    product_price,
    stock_quantity,
    description = " ",
    image_url,
  } = req.body;

  if (
    !product_id ||
    !product_name ||
    !product_brand ||
    !category_id ||
    !product_price ||
    !stock_quantity ||
    !description ||
    !image_url
  ) {
    return res.status(400).json({ error: "กรุณาส่งข้อมูลให้ครบถ้วน" });
  }

  const updateProductQuery = `
    UPDATE Products 
    SET product_name = ?, product_brand = ?, category_id = ?, 
        product_price = ?, stock_quantity = ?, description = ?, image_url = ? 
    WHERE product_id = ?`;

  pool.query(
    updateProductQuery,
    [
      product_name,
      product_brand,
      category_id,
      product_price,
      stock_quantity,
      description,
      image_url,
      product_id,
    ],
    (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "เกิดข้อผิดพลาดในการอัพเดตสินค้า" });
      }

      if (result.affectedRows > 0) {
        return res.status(200).json({ message: "อัพเดตสินค้าเรียบร้อยแล้ว" });
      } else {
        return res.status(404).json({ error: "ไม่พบสินค้าที่ต้องการอัพเดต" });
      }
    }
  );
});
app.get("/sendOrder", (req, res) => {
  const sql = "SELECT * FROM Orders";
  pool.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching order:", err);
      return res.status(500).json({ error: "เกิดข้อผิดพลาดในการดึงข้อมูล" });
    }
    return res.status(200).json({ results });
  });
});

app.get("/customer-orders", (req, res) => {
  const query = `
    SELECT 
      Customers.customer_id,
      Customers.customer_name,
      Customers.email,
      Customers.phone_number,
      Orders.order_id,
      Orders.order_date,
      Orders.status,
      Orders.total_amount
    FROM Customers
    JOIN Orders ON Customers.customer_id = Orders.customer_id
    ORDER BY Orders.order_date DESC
  `;

  pool.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "เกิดข้อผิดพลาดในการดึงข้อมูล" });
    }
    res.status(200).json({ results });
  });
});

app.get("/order-details/:order_id", (req, res) => {
  const { order_id } = req.params;
  const query = `
    SELECT Orders.order_id, Orders.customer_id, Customers.customer_name, Orders.order_date, Orders.status, Orders.total_amount,
           Order_Items.product_id, Order_Items.quantity, Order_Items.price,
           Products.product_name
    FROM Orders
    LEFT JOIN Customers ON Orders.customer_id = Customers.customer_id
    LEFT JOIN Order_Items ON Orders.order_id = Order_Items.order_id
    LEFT JOIN Products ON Order_Items.product_id = Products.product_id
    WHERE Orders.order_id = ?
  `;

  pool.query(query, [order_id], (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "เกิดข้อผิดพลาดในการดึงข้อมูลออเดอร์" });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "ไม่พบออเดอร์ที่ต้องการ" });
    }

    const order = {
      order_id: results[0].order_id,
      customer_id: results[0].customer_id,
      customer_name: results[0].customer_name,
      order_date: results[0].order_date,
      status: results[0].status,
      total_amount: results[0].total_amount,
      items: results.map((row) => ({
        product_id: row.product_id,
        product_name: row.product_name,
        quantity: row.quantity,
        price: row.price,
      })),
    };

    res.status(200).json(order);
  });
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
