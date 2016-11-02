# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## tasks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null, indexed, unique
description | text      |
due_date    | dates     |
user_id     | integer   | not null, indexed

## lists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null, indexed, unique
user_id     | integer   | not null, indexed

## tasked lists
column name | data type | details
------------|-----------|-----------------------
list_id     | integer   | not null, indexed
task_id     | integer   | not null, indexed
