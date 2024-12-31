
SELECT DISTINCT author_id AS id
FROM Views
WHERE author_id = viewer_id
ORDER BY id ASC;



/* Find Customer Referee
*/ 

SELECT name
FROM Customers
WHERE referee_id != 2 OR referee_id IS NULL;


/*  Replace Employee ID With The Unique Identifier */


SELECT e.id, e.name, u.unique_id
FROM Employee e
LEFT JOIN EmployeeUNI u ON e.id = u.id;
