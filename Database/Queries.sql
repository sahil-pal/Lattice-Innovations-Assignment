DROP DATABASE if exists PYSCHIATRISTS_DB;

CREATE DATABASE PYSCHIATRISTS_DB;

USE PYSCHIATRISTS_DB;

-- Adding Hospital Data-- 
INSERT INTO HOSPITALS VALUES(1,"Apolo Hospitals"),
(2,"Jawaharlal Nehru Medical College and Hospital"),
(3,"Indira Gandhi Institute of Medical Sciences (IGIMS)"),
(4,"AIIMS - All India Institute Of Medical Science");

SELECT * FROM HOSPITALS;

-- Adding Pyschiatrists Data-- 
INSERT INTO PSYCHIATRISTS VALUES
(1,"Aakansha Priya",1),
(2,"Ayush Mangla",1),
(3,"Abhimanyu yadav",1),
(4,"Akshay Singh",1),
(5,"Astha Verma",1),
(6,"Aman Kumar",2),
(7,"Amandeep Singh",2),
(8,"Amit Budhiraja",2),
(9,"Anirudh Singh kuntal",2),
(10,"Ankita Raghav",2),
(11,"Anish Gagoi",3),
(12,"Bhavika Adhlaka",3),
(13,"Chirag Sardana",3),
(14,"Keshav Pratap",3),
(15,"Jai Yadav",3),
(16,"Deepak Gulia",4),
(17,"Dhruv gupta",4),
(18,"Dhruv Vig",4),
(19,"Gitansha Madan",4),
(20,"Ishaan Walecha",4),
(21,"Pulkit Sharma",1),
(22,"Raghav Singh",2),
(23,"Rishit Mendiratta",3),
(24,"Rohit Dalal",4),
(25,"Sameer Nara",1);
SELECT * FROM PSYCHIATRISTS;

SELECT * FROM PATIENTS;

