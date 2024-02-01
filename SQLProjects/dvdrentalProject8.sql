CREATE TABLE employee  (
  id SERIAL PRIMARY KEY,
  name  VARCHAR(50) NOT NULL,
  email VARCHAR(100),
  birthday DATE
);

insert into employee (name, email, birthday) values ('Ivett', 'iclardge0@ehow.com', '1985-03-02');
insert into employee (name, email, birthday) values ('Ignaz', null, '1986-08-31');
insert into employee (name, email, birthday) values ('Alaster', 'ajeal2@google.com.au', '1991-06-12');
insert into employee (name, email, birthday) values ('Alecia', 'aricardot3@ehow.com', '1995-06-11');
insert into employee (name, email, birthday) values ('Tully', 'tbeilby4@google.fr', '2003-11-04');
insert into employee (name, email, birthday) values ('Flossi', 'fisaacson5@wp.com', '2000-03-21');
insert into employee (name, email, birthday) values ('Loutitia', null, '1990-12-25');
.....

 UPDATE employee
 SET email = CONCAT(name, '@employee.com')
WHERE email ='{{name}}@employee.co'

update employee
set name= concat (id,name)
where length(name)<4;

update employee
set name= LEFT(name, 3)
where length(name)>6;

delete from employee
WHERE email LIKE 'a%';

delete  from employee
WHERE email ~  '[0-9]';
