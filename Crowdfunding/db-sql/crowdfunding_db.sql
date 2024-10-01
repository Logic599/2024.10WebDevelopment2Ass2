/*
 Navicat Premium Dump SQL

 Source Server         : wyt
 Source Server Type    : MySQL
 Source Server Version : 80039 (8.0.39)
 Source Host           : localhost:3306
 Source Schema         : crowdfunding_db

 Target Server Type    : MySQL
 Target Server Version : 80039 (8.0.39)
 File Encoding         : 65001

 Date: 27/09/2024 11:45:42
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- defines a table named category within a MySQL database. 
-- ----------------------------
-- It is worth mentioning that, this statement drops the category table if it already exists. 
-- This is a safety measure to prevent errors if the table is accidentally created multiple times.
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
	-- An integer column that serves as the primary key for the table. It is declared as NOT NULL, meaning it cannot be empty.
  `category_id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL, -- This column is also declared as NOT NULL, ensuring that each category must have a name.
  PRIMARY KEY (`category_id`) USING BTREE --  This specifies the primary key constraint on the category_id column. In order to improve retrieval efficiency
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;
-- This sets the character set and collation for the table, ensuring proper handling of Unicode characters. 
-- For ROW_FORMAT = DYNAMIC: This specifies the row format for the table. Dynamic row format allows for efficient storage of variable-length data.

-- ----------------------------
-- used to insert data into the category table. That is to say, the different categories we see
-- ----------------------------
INSERT INTO `category` VALUES (1, 'medical');
INSERT INTO `category` VALUES (2, 'education');
INSERT INTO `category` VALUES (3, 'social activities');
INSERT INTO `category` VALUES (4, 'crisis relief');

-- ----------------------------
-- defines a table named fundraiser within a MySQL database. 
-- ----------------------------
DROP TABLE IF EXISTS `fundraiser`;
CREATE TABLE `fundraiser`  (
	-- Define different types of data in the table and set them all to NOT NULL
	-- After all, as a charity event platform, we need all the necessary information
  `fundraiser_id` int NOT NULL,
  `organizer` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `caption` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `target_funding` decimal(20, 2) NOT NULL,
  `current_funding` decimal(20, 2) NOT NULL,
  `city` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  -- This is my first time using the numeric type tinyint, which has certain advantages when storing relatively small data
  `active` tinyint(1) NOT NULL,
  `category_id` int NOT NULL,
  -- This specifies the primary key constraint on the fundraiser_id column, ensuring unique identification for each fundraiser.
  PRIMARY KEY (`fundraiser_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- used to insert data into the fundraiser table. That is to say, some example data
-- Using the previously created method, we can query specific data of different categories separately
-- For example, users can select "Melbourne" from the list to search for all fundraising events located in Melbourne without entering all the information
-- ----------------------------
INSERT INTO `fundraiser` VALUES (1, 'Grace Lewis', 'Support Our Animal Rescue and Adoption Center!', 30000.00, 100.56, 'Melbourne', 1, 2);
INSERT INTO `fundraiser` VALUES (2, 'Daniel Nelson', 'Fund Our Tech Program for Seniors!', 2300.00, 1256.78, 'Gold Coast', 1, 3);
INSERT INTO `fundraiser` VALUES (3, 'Victoria Ramirez', 'Help Us Organize a Cultural Festival!', 18000.00, 12.56, 'Newcastle', 1, 4);
INSERT INTO `fundraiser` VALUES (4, 'Elijah Carter', 'Create a Safe Space for LGBTQ+ Youth!', 33000.00, 16780.01, 'Sydney', 1, 3);
INSERT INTO `fundraiser` VALUES (5, 'Zoe Mitchell', 'Launch a Reading Program for Children!', 500.00, 21.23, 'Canberra', 1, 1);

-- is used in MySQL to enable foreign key checks. 
-- Foreign key constraints are used to enforce data integrity by ensuring that data in one table references valid data in another table.
SET FOREIGN_KEY_CHECKS = 1;
